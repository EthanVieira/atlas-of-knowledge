/* ============================================================================
 *  LAYOUT ENGINE
 * ----------------------------------------------------------------------------
 *  Turns the flat COURSES list into positioned nodes:
 *    1. Validate edges & detect cycles.
 *    2. Assign each node a `depth` = longest dependency chain (topological rank).
 *       -> depth becomes a horizontal level (a row) in the graph.
 *    3. Order nodes within each level to (a) keep same-field subjects together
 *       and (b) minimise edge crossings, via iterated barycenter sweeps.
 * ==========================================================================*/

const Layout = (() => {

  // Tunable geometry (graph-space pixels).
  const NODE_W = 190;
  const NODE_H = 62;

  // RADIAL "GALAXY" LAYOUT --------------------------------------------------
  //   radius = depth  → foundations near the core, capstones at the rim.
  //   angle  = field  → each field is an angular wedge; families are contiguous
  //                     arcs (sciences → engineering → health & life → social →
  //                     humanities → arts & design),
  //                     so the whole atlas reads as a round sky of constellations
  //                     instead of one endless horizontal strip.
  const R0          = 2000; // core radius: the empty hub the depth-0 ring sits on
  const RING_GAP    = 205;  // radial gap between rings / sub-rows (> NODE_W so
                            //   radially-adjacent cards never overlap side-on)
  const NODE_ARC    = 210;  // min tangential spacing between sibling nodes on a ring
  const FIELD_GAP_A = 0.004 * Math.PI * 2; // angular gap between fields (fraction of turn)
  const FAMILY_GAP_A = 0.014 * Math.PI * 2; // extra angular gap between families
  const SWEEPS = 12;        // barycenter passes to align spokes / cut crossings

  function build(courses, fields) {
    const byId = new Map();
    courses.forEach(c => byId.set(c.id, {
      ...c,
      requires: (c.requires || []).slice(),
      children: [],
      depth: 0,
      x: 0, y: 0,
      w: NODE_W, h: NODE_H,
    }));

    // Drop dangling prerequisite references but warn loudly in the console.
    for (const n of byId.values()) {
      n.requires = n.requires.filter(r => {
        if (!byId.has(r)) {
          console.warn(`[knowledge-map] "${n.id}" requires unknown course "${r}" — ignored.`);
          return false;
        }
        return true;
      });
    }
    // Wire children (reverse edges).
    for (const n of byId.values())
      for (const r of n.requires) byId.get(r).children.push(n.id);

    // ---- Longest-path depth via topological order (Kahn) ------------------
    const indeg = new Map();
    for (const n of byId.values()) indeg.set(n.id, n.requires.length);
    const queue = [];
    for (const n of byId.values()) if (indeg.get(n.id) === 0) queue.push(n.id);

    let processed = 0;
    while (queue.length) {
      const id = queue.shift();
      processed++;
      const n = byId.get(id);
      for (const cid of n.children) {
        const c = byId.get(cid);
        c.depth = Math.max(c.depth, n.depth + 1);
        indeg.set(cid, indeg.get(cid) - 1);
        if (indeg.get(cid) === 0) queue.push(cid);
      }
    }
    if (processed !== byId.size) {
      console.error("[knowledge-map] Dependency cycle detected — some nodes could not be ranked. Check `requires` for a loop.");
    }

    // ---- Group nodes by field, then depth (ring) --------------------------
    const TAU = Math.PI * 2;
    const fieldOrder = Object.keys(fields);
    const familyOf = f => (fields[f] && fields[f].family) || "";

    // byFieldLevel: field -> Map(depth -> [nodes])
    const byFieldLevel = new Map();
    for (const n of byId.values()) {
      if (!byFieldLevel.has(n.field)) byFieldLevel.set(n.field, new Map());
      const dm = byFieldLevel.get(n.field);
      if (!dm.has(n.depth)) dm.set(n.depth, []);
      dm.get(n.depth).push(n);
    }

    // Per-field course count. A field's wedge is sized proportional to this, so
    // every field's spiral reaches a similar rim radius → a tidy round disk.
    const fieldCount = {};
    for (const [f, dm] of byFieldLevel) {
      let c = 0;
      for (const [, arr] of dm) c += arr.length;
      fieldCount[f] = c;
    }
    const presentFields = fieldOrder.filter(f => byFieldLevel.has(f));

    // Family order from config (FAMILIES), with any stragglers appended.
    const cfgFamilies = (window.KNOWLEDGE_MAP && window.KNOWLEDGE_MAP.FAMILIES) || [];
    const familyOrder = cfgFamilies.map(x => x.key);
    const seenFam = new Set(familyOrder);
    for (const f of presentFields)
      if (familyOf(f) && !seenFam.has(familyOf(f))) { familyOrder.push(familyOf(f)); seenFam.add(familyOf(f)); }
    const fieldsOfFamily = fam => presentFields.filter(f => familyOf(f) === fam);
    const familiesPresent = familyOrder.filter(fam => fieldsOfFamily(fam).length);

    // Fields laid out around the dial, grouped into contiguous family arcs.
    const orderedFields = [];
    for (const fam of familiesPresent) for (const f of fieldsOfFamily(fam)) orderedFields.push(f);

    // ---- Angular allocation -----------------------------------------------
    // Reserve gaps between fields (larger between families), then split the rest
    // of the turn among fields in proportion to their course count.
    const nFamilies = familiesPresent.length;
    const gapTotal = orderedFields.length * FIELD_GAP_A + nFamilies * FAMILY_GAP_A;
    const usable = Math.max(0.1, TAU - gapTotal);
    const countTotal = orderedFields.reduce((s, f) => s + fieldCount[f], 0) || 1;

    const fieldAngle = {};   // angular width of each field's wedge
    for (const f of orderedFields) fieldAngle[f] = usable * fieldCount[f] / countTotal;

    // Walk the dial (start at the top, -90°), assigning each wedge a center.
    const fieldCenter = {};
    let a = -Math.PI / 2;
    let prevFam = null;
    for (const f of orderedFields) {
      const fam = familyOf(f);
      a += (fam !== prevFam && prevFam !== null ? FAMILY_GAP_A : FIELD_GAP_A) / 2;
      fieldCenter[f] = a + fieldAngle[f] / 2;
      a += fieldAngle[f] + FIELD_GAP_A / 2;
      prevFam = fam;
    }

    // Place a whole field as a spiral: walk its depths outward from the core with
    // a radius cursor. Each ring spreads across the wedge; a ring too wide for the
    // wedge's arc at that radius wraps into concentric sub-rows (so a bushy
    // shallow ring pushes outward instead of blowing the core open). Radius only
    // ever increases, so prerequisites always sit inward of what depends on them.
    const depthsOf = f => [...byFieldLevel.get(f).keys()].sort((x, y) => x - y);
    const placeArc = (chunk, f, r) => {
      const cc = chunk.length;
      const A = fieldAngle[f], c0 = fieldCenter[f];
      const step = A / cc;
      const start = c0 - A / 2 + step / 2;
      for (let i = 0; i < cc; i++) {
        const ang = cc === 1 ? c0 : start + i * step;
        chunk[i].angle = ang; chunk[i].radius = r;
        chunk[i].x = Math.cos(ang) * r - NODE_W / 2;
        chunk[i].y = Math.sin(ang) * r - NODE_H / 2;
      }
    };
    const placeField = (f) => {
      const A = fieldAngle[f], dm = byFieldLevel.get(f);
      let r = R0;
      for (const d of depthsOf(f)) {
        const arr = dm.get(d);
        const cap = Math.max(1, Math.floor(A * r / NODE_ARC));
        const rows = Math.ceil(arr.length / cap);
        const per = Math.ceil(arr.length / rows);
        for (let k = 0; k < rows; k++) {
          placeArc(arr.slice(k * per, (k + 1) * per), f, r);
          r += RING_GAP;
        }
      }
    };

    // Initial order: alphabetical within each ring, then place every field.
    for (const [, dm] of byFieldLevel)
      for (const [, arr] of dm) arr.sort((a, b) => a.title.localeCompare(b.title));
    for (const f of presentFields) placeField(f);

    // ---- Angular barycenter: align spokes, cut crossings ------------------
    // Reorder each ring by the mean *angle* of its neighbours (prereqs +
    // dependents), so a course sits angularly near what it connects to. Unit-
    // vector averaging handles the 0/2π seam; keys are taken relative to the
    // wedge center so a field's own spread never wraps.
    const wrap = t => { while (t > Math.PI) t -= TAU; while (t < -Math.PI) t += TAU; return t; };
    for (let s = 0; s < SWEEPS; s++) {
      for (const f of presentFields) {
        const dm = byFieldLevel.get(f), c0 = fieldCenter[f];
        for (const [, arr] of dm) {
          if (arr.length < 2) continue;
          const key = new Map();
          for (const n of arr) {
            const nbrs = n.requires.concat(n.children);
            if (!nbrs.length) { key.set(n.id, wrap(n.angle - c0)); continue; }
            let sx = 0, sy = 0;
            for (const id of nbrs) { const m = byId.get(id); sx += Math.cos(m.angle); sy += Math.sin(m.angle); }
            key.set(n.id, wrap(Math.atan2(sy, sx) - c0));
          }
          arr.sort((a, b) => (key.get(a.id) - key.get(b.id)) || a.title.localeCompare(b.title));
        }
        placeField(f);
      }
    }

    // Per-level arrays (for compatibility / diagnostics).
    const levels = [];
    for (const n of byId.values()) (levels[n.depth] || (levels[n.depth] = [])).push(n);
    for (let d = 0; d < levels.length; d++) if (!levels[d]) levels[d] = [];

    // ---- Build a flat edge list for the renderer --------------------------
    const nodes = [...byId.values()];
    const edges = [];
    for (const n of nodes)
      for (const r of n.requires)
        edges.push({ from: r, to: n.id }); // prereq -> course

    // Bounds (graph space) for fit-to-screen and the minimap.
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const n of nodes) {
      minX = Math.min(minX, n.x);
      minY = Math.min(minY, n.y);
      maxX = Math.max(maxX, n.x + n.w);
      maxY = Math.max(maxY, n.y + n.h);
    }
    const bounds = { minX, minY, maxX, maxY, w: maxX - minX, h: maxY - minY };

    return { nodes, edges, byId, levels, bounds, dims: { NODE_W, NODE_H } };
  }

  return { build };
})();

window.Layout = Layout;
