/* ============================================================================
 *  GRAPH RENDERER
 * ----------------------------------------------------------------------------
 *  Renders the laid-out graph with:
 *    - a single CSS-transformed world layer for pan/zoom,
 *    - DOM nodes that are VIRTUALIZED (only those near the viewport exist),
 *    - constellation edges drawn on a canvas with off-screen culling,
 *    - a minimap for whole-atlas overview.
 * ==========================================================================*/

const Graph = (() => {
  const MIN_SCALE = 0.04;
  const MAX_SCALE = 2.2;

  function create(opts) {
    const {
      root,        // container element
      model,       // Layout.build(...) result
      fields,      // FIELDS map
      state,       // completion state (Set of completed ids) manager
      onSelect,    // callback(node|null) when a node opens/closes
      onGoalToggle,// callback(id) when a card's "set as goal" button is clicked
    } = opts;

    // ---- DOM scaffold -----------------------------------------------------
    root.classList.add("km-viewport");
    const canvas = document.createElement("canvas");
    canvas.className = "km-edges";
    const world = document.createElement("div");
    world.className = "km-world";
    // Overlay canvas sits ABOVE the cards so labels are never hidden by them.
    const overlay = document.createElement("canvas");
    overlay.className = "km-edges";
    root.append(canvas, world, overlay);

    const ctx = canvas.getContext("2d");
    const octx = overlay.getContext("2d");

    // ---- View transform ---------------------------------------------------
    // screen = graph * scale + offset
    let scale = 1, offsetX = 0, offsetY = 0;
    let dpr = window.devicePixelRatio || 1;

    // ---- Node element pool (virtualization) -------------------------------
    const elements = new Map(); // id -> element (only visible / expanded ones)
    let expandedId = null;
    let highlightSet = null;    // Set of ids to highlight (prereq chain), or null
    let visibleSet = null;      // Set of ids to show (field filter), or null = all
    let currentFilter = null;   // active field keys (array), or null = all
    let goalId = null;          // the chosen goal course (gets a marker), or null

    const { nodes, edges, byId, bounds } = model;

    // Quick lookups.
    const nodeArr = nodes;

    // Original whole-atlas positions, kept so we can snap back when the filter
    // is cleared (filtering re-lays-out the visible subset into its own disk).
    const home = new Map(nodeArr.map(n => [n.id, { x: n.x, y: n.y, angle: n.angle, radius: n.radius }]));

    // Re-lay-out just `idSet` into a fresh compact galaxy, writing the new coords
    // back onto the EXISTING node objects (so byId / highlight / element refs all
    // stay valid). The subset is closed under prerequisites, so depths are intact.
    function relayoutSubset(idSet) {
      const subset = nodeArr.filter(n => idSet.has(n.id));
      if (!subset.length) return;
      const fresh = window.Layout.build(subset, fields);
      for (const fn of fresh.nodes) {
        const n = byId.get(fn.id);
        if (n) { n.x = fn.x; n.y = fn.y; n.angle = fn.angle; n.radius = fn.radius; }
      }
    }
    function restoreHome() {
      for (const n of nodeArr) {
        const h = home.get(n.id);
        if (h) { n.x = h.x; n.y = h.y; n.angle = h.angle; n.radius = h.radius; }
      }
    }
    // Drop every mounted element (positions changed wholesale → remount fresh).
    function clearMounted() {
      for (const [, el] of elements) el.remove();
      elements.clear();
    }

    // ---------------------------------------------------------------------
    //  Transform helpers
    // ---------------------------------------------------------------------
    function applyWorldTransform() {
      world.style.transform =
        `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
    }

    function clampScale(s) { return Math.max(MIN_SCALE, Math.min(MAX_SCALE, s)); }

    function screenToGraph(sx, sy) {
      return { x: (sx - offsetX) / scale, y: (sy - offsetY) / scale };
    }

    // ---------------------------------------------------------------------
    //  Rendering pipeline (throttled via rAF)
    // ---------------------------------------------------------------------
    let rafPending = false;
    function scheduleRender() {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => { rafPending = false; render(); });
    }

    function visibleGraphRect(margin = 240) {
      const w = root.clientWidth, h = root.clientHeight;
      const tl = screenToGraph(-margin, -margin);
      const br = screenToGraph(w + margin, h + margin);
      return { x0: tl.x, y0: tl.y, x1: br.x, y1: br.y };
    }

    function render() {
      applyWorldTransform();
      renderNodes();
      renderEdges();
      renderMinimapViewport();
    }

    // ---- Nodes ------------------------------------------------------------
    function renderNodes() {
      const vr = visibleGraphRect();
      const needed = new Set();

      // When zoomed far out, individual cards are illegible; we still render
      // them (as tiny colored stars via CSS) but skip building expanded cards.
      for (const n of nodeArr) {
        if (visibleSet && !visibleSet.has(n.id)) continue;   // field filter
        if (n.x + n.w < vr.x0 || n.x > vr.x1 || n.y + n.h < vr.y0 || n.y > vr.y1)
          continue;
        needed.add(n.id);
        if (!elements.has(n.id)) mountNode(n);
      }
      // Always keep the expanded node mounted even if scrolled slightly away.
      if (expandedId && (!visibleSet || visibleSet.has(expandedId))) needed.add(expandedId);

      // Unmount nodes no longer needed.
      for (const [id, el] of elements) {
        if (!needed.has(id)) { el.remove(); elements.delete(id); }
      }
      // Refresh dynamic classes (completion / highlight) on mounted nodes.
      for (const [id, el] of elements) styleNode(byId.get(id), el);
    }

    function nodeStatus(n) {
      if (state.isComplete(n.id)) return "complete";
      // available = all prereqs complete (or none); else locked.
      const ready = n.requires.every(r => state.isComplete(r));
      return ready ? "available" : "locked";
    }

    function styleNode(n, el) {
      const status = nodeStatus(n);
      el.dataset.status = status;
      const isExp = n.id === expandedId;
      if (isExp && el._ensureBody) el._ensureBody(); // build body lazily on open
      el.classList.toggle("km-expanded", isExp);
      el.classList.toggle("km-goal", n.id === goalId);
      if (highlightSet) {
        el.classList.toggle("km-dim", !highlightSet.has(n.id));
        el.classList.toggle("km-hl", highlightSet.has(n.id));
      } else {
        el.classList.remove("km-dim", "km-hl");
      }
    }

    function mountNode(n) {
      const el = document.createElement("div");
      el.className = "km-node";
      if (n.detail) el.classList.add("km-rich");   // wider when expanded
      el.style.left = n.x + "px";
      el.style.top = n.y + "px";
      el.style.width = n.w + "px";
      el.style.setProperty("--field-hue", (fields[n.field]?.hue ?? 44));

      // Collapsed header (always present): completion star, title, field badge.
      const f = fields[n.field] || {};
      const head = document.createElement("div");
      head.className = "km-node-head";
      head.innerHTML = `
        <button class="km-check" title="Mark complete" aria-label="Toggle completion"></button>
        <span class="km-title">${escapeHtml(n.title)}</span>
        <span class="km-ribbon" title="${escapeAttr(f.label ?? n.field)}">${escapeHtml(f.abbr ?? n.field)}</span>`;
      el.appendChild(head);

      // Expanded body is built lazily on first open.
      let body = null;
      const ensureBody = () => {
        if (body) return body;
        body = buildBody(n);
        el.appendChild(body);
        return body;
      };
      el._ensureBody = ensureBody; // reachable when opened via search / prereq link

      // Interactions.
      head.querySelector(".km-check").addEventListener("click", (e) => {
        e.stopPropagation();
        const res = state.toggle(n.id);
        if (res && res.ok === false) {
          // Prerequisites not met — refuse and shake the card for feedback.
          el.classList.remove("km-deny");
          void el.offsetWidth;            // restart the animation
          el.classList.add("km-deny");
        }
        scheduleRender();
      });
      el.addEventListener("click", (e) => {
        if (e.target.closest("a")) return; // let links work
        toggleExpand(n, el, ensureBody);
      });

      if (n.id === expandedId) { ensureBody(); }
      styleNode(n, el);
      world.appendChild(el);
      elements.set(n.id, el);
    }

    function toggleExpand(n, el, ensureBody) {
      if (expandedId === n.id) {
        expandedId = null;
        onSelect && onSelect(null);
      } else {
        expandedId = n.id;
        ensureBody();
        onSelect && onSelect(n);
      }
      // Restyle all mounted (previous expanded needs to collapse).
      for (const [id, e] of elements) styleNode(byId.get(id), e);
      scheduleRender();
    }

    function buildBody(n) {
      const body = document.createElement("div");
      body.className = "km-node-body";
      const rich = !!n.detail;

      // Full field label chip at the top of the details.
      const f = fields[n.field] || {};
      const fieldLine = document.createElement("div");
      fieldLine.className = "km-field-full";
      fieldLine.innerHTML = `<span class="km-field-swatch"></span>${escapeHtml(f.label ?? n.field)}`;
      body.appendChild(fieldLine);

      // Goal + "path to here" bar: how many prerequisites lead to this course and
      // how many are done, plus a button to make it your goal.
      const path = orderedPath(n.id);
      const total = path.length - 1;   // exclude the course itself
      const doneCount = path.reduce(
        (c, p) => c + (p.id !== n.id && state.isComplete(p.id) ? 1 : 0), 0);
      const goalBar = document.createElement("div");
      goalBar.className = "km-goalbar";
      goalBar.innerHTML =
        `<span class="km-path-info" title="Prerequisites that lead to this course">`
        + (total ? `🧭 ${total} prerequisite${total === 1 ? "" : "s"} · ${doneCount} done`
                 : `🧭 No prerequisites`)
        + `</span>`
        + `<button type="button" class="km-goal-btn"></button>`;
      const goalBtn = goalBar.querySelector(".km-goal-btn");
      const paintGoalBtn = () => {
        const on = n.id === goalId;
        goalBtn.classList.toggle("is-goal", on);
        goalBtn.textContent = on ? "🎯 Clear goal" : "🎯 Set as goal";
      };
      paintGoalBtn();
      goalBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        onGoalToggle && onGoalToggle(n.id);   // app flips goal + calls api.setGoal
        paintGoalBtn();
      });
      body.appendChild(goalBar);

      // Short description now; swapped for the longer one when detail loads.
      const desc = document.createElement("p");
      desc.className = "km-desc";
      desc.textContent = n.desc || "";
      body.appendChild(desc);

      // Requirements (clickable — pan to prereq).
      const reqWrap = document.createElement("div");
      reqWrap.className = "km-section";
      const reqTitle = n.requires.length
        ? `<h4>Requires</h4>` : `<h4>Requires</h4><p class="km-none">No prerequisites — a starting point.</p>`;
      reqWrap.innerHTML = reqTitle;
      if (n.requires.length) {
        const ul = document.createElement("ul");
        ul.className = "km-reqs";
        for (const r of n.requires) {
          const rn = byId.get(r);
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.href = "#";
          a.className = "km-req";
          a.dataset.goto = r;
          a.textContent = rn ? rn.title : r;
          a.addEventListener("click", (e) => {
            e.preventDefault(); e.stopPropagation();
            api.focusNode(r, true);
          });
          li.appendChild(a);
          ul.appendChild(li);
        }
        reqWrap.appendChild(ul);
      }
      body.appendChild(reqWrap);

      // Prerequisite for: the courses that list this one as a prerequisite.
      const kids = (n.children || []).map(id => byId.get(id)).filter(Boolean)
        .sort((a, b) => a.title.localeCompare(b.title));
      const unlockWrap = document.createElement("div");
      unlockWrap.className = "km-section";
      unlockWrap.innerHTML = kids.length
        ? `<h4>Prerequisite for</h4>`
        : `<h4>Prerequisite for</h4><p class="km-none">Nothing yet — a leaf of the atlas.</p>`;
      if (kids.length) {
        const ul = document.createElement("ul");
        ul.className = "km-reqs";
        for (const cn of kids) {
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.href = "#";
          a.className = "km-req";
          a.dataset.goto = cn.id;
          a.textContent = cn.title;
          a.addEventListener("click", (e) => {
            e.preventDefault(); e.stopPropagation();
            api.focusNode(cn.id, true);
          });
          li.appendChild(a);
          ul.appendChild(li);
        }
        unlockWrap.appendChild(ul);
      }
      body.appendChild(unlockWrap);

      // Topics + resources go in a zone that rich cards fill asynchronously.
      const zone = document.createElement("div");
      zone.className = "km-content-zone";
      body.appendChild(zone);

      if (rich) {
        const loading = document.createElement("p");
        loading.className = "km-none";
        loading.textContent = "Loading details…";
        zone.appendChild(loading);
        loadDetail(n, (d) => {
          zone.innerHTML = "";
          if (!d) {
            // Detail file missing/failed — fall back to the built-in fields.
            standardContent(n, zone);
            return;
          }
          if (d.long) desc.textContent = d.long;
          zone.appendChild(topicsSection(d.topics || n.topics, true));
          zone.appendChild(refBlock("Recommended", d.recommended, "recommended"));
          zone.appendChild(refBlock("Supplementary", d.supplementary, "supplementary"));
        });
      } else {
        standardContent(n, zone);
      }

      return body;
    }

    // Legacy body content: collapsible topic list + free/paid resource blocks.
    function standardContent(n, zone) {
      zone.appendChild(topicsSection(n.topics, false));
      zone.appendChild(resourceBlock("Free resources", n.free, "free"));
      zone.appendChild(resourceBlock("Paid resources", n.paid, "paid"));
    }

    // Collapsible "Topics covered". `chips` renders a flowing tag cloud (rich
    // cards, which list many more topics) instead of a bulleted list.
    function topicsSection(topics, chips) {
      topics = topics || [];
      const wrap = document.createElement("div");
      wrap.className = "km-section";
      const details = document.createElement("details");
      if (chips) details.open = true;
      const summary = document.createElement("summary");
      summary.innerHTML = `Topics covered <span class="km-count">${topics.length}</span>`;
      details.appendChild(summary);
      if (chips) {
        const cloud = document.createElement("div");
        cloud.className = "km-topic-chips";
        for (const t of topics) {
          const s = document.createElement("span");
          s.className = "km-topic-chip";
          s.textContent = t;
          cloud.appendChild(s);
        }
        details.appendChild(cloud);
      } else {
        const tl = document.createElement("ul");
        tl.className = "km-topics";
        for (const t of topics) {
          const li = document.createElement("li");
          li.textContent = t;
          tl.appendChild(li);
        }
        details.appendChild(tl);
      }
      details.addEventListener("click", e => e.stopPropagation());
      wrap.appendChild(details);
      return wrap;
    }

    // Lazily inject a course's detail file, invoking cb(detail) once it
    // registers (or cb(null) if it can't be loaded). Cached after first load.
    // Detail files live under js/data/details/<field>/<id>.js.
    function loadDetail(n, cb) {
      const id = n.id, field = n.field;
      const cache = window.KM_DETAILS || (window.KM_DETAILS = {});
      if (cache[id]) { cb(cache[id]); return; }
      const waiters = window.__kmDetailWaiters || (window.__kmDetailWaiters = {});
      (waiters[id] || (waiters[id] = [])).push(cb);
      if (!loadDetail._requested) loadDetail._requested = new Set();
      if (loadDetail._requested.has(id)) return;
      loadDetail._requested.add(id);
      const s = document.createElement("script");
      s.src = `js/data/details/${encodeURIComponent(field)}/${encodeURIComponent(id)}.js`;
      s.async = true;
      s.onerror = () => {
        const ws = waiters[id]; delete waiters[id];
        if (ws) ws.forEach(f => f(null));
      };
      document.head.appendChild(s);
    }

    function resourceBlock(title, list, cls) {
      const wrap = document.createElement("div");
      wrap.className = "km-section";
      const items = list || [];
      wrap.innerHTML = `<h4 class="km-res-h ${cls}">${title}</h4>`;
      if (!items.length) {
        const p = document.createElement("p");
        p.className = "km-none";
        p.textContent = "—";
        wrap.appendChild(p);
        return wrap;
      }
      const ul = document.createElement("ul");
      ul.className = "km-resources";
      for (const r of items) {
        const li = document.createElement("li");
        const label = `${escapeHtml(r.t)}${r.by ? ` <span class="km-by">— ${escapeHtml(r.by)}</span>` : ""}`;
        if (r.url) {
          li.innerHTML = `<a href="${escapeAttr(r.url)}" target="_blank" rel="noopener">${label}</a>`;
        } else {
          li.innerHTML = label;
        }
        ul.appendChild(li);
      }
      wrap.appendChild(ul);
      return wrap;
    }

    // Rich resource block: each item shows a type chip and a "Free" chip.
    function refBlock(title, list, cls) {
      const wrap = document.createElement("div");
      wrap.className = "km-section";
      const items = list || [];
      wrap.innerHTML = `<h4 class="km-res-h ${cls}">${title}</h4>`;
      if (!items.length) {
        const p = document.createElement("p");
        p.className = "km-none";
        p.textContent = "—";
        wrap.appendChild(p);
        return wrap;
      }
      const ul = document.createElement("ul");
      ul.className = "km-resources km-resources-rich";
      for (const r of items) {
        const li = document.createElement("li");
        const label = `${escapeHtml(r.t)}${r.by ? ` <span class="km-by">— ${escapeHtml(r.by)}</span>` : ""}`;
        const line = r.url
          ? `<a href="${escapeAttr(r.url)}" target="_blank" rel="noopener">${label}</a>`
          : label;
        const tags =
          (r.type ? `<span class="km-tag km-tag-type">${escapeHtml(r.type)}</span>` : "") +
          (r.free ? `<span class="km-tag km-tag-free">Free</span>` : "");
        li.innerHTML = `<div class="km-res-line">${line}</div>` +
          (tags ? `<div class="km-res-tags">${tags}</div>` : "");
        ul.appendChild(li);
      }
      wrap.appendChild(ul);
      return wrap;
    }

    // ---- Edges (canvas) ---------------------------------------------------
    function resizeCanvas() {
      dpr = window.devicePixelRatio || 1;
      const w = root.clientWidth, h = root.clientHeight;
      canvas.width = overlay.width = Math.round(w * dpr);
      canvas.height = overlay.height = Math.round(h * dpr);
      canvas.style.width = overlay.style.width = w + "px";
      canvas.style.height = overlay.style.height = h + "px";
    }

    // ---- In-world guides: depth rings + field / family labels -------------
    // All geometry is derived from the nodes' own polar coords (angle / radius),
    // so the guides follow the radial layout and any filter re-layout for free.
    const FIELD_LABEL_MIN_SCALE = 0.11;   // hide field labels when zoomed far out
    const famLabelOf = {};
    for (const fam of (window.KNOWLEDGE_MAP && window.KNOWLEDGE_MAP.FAMILIES) || [])
      famLabelOf[fam.key] = fam.label;
    const ZONES = (window.KNOWLEDGE_MAP && window.KNOWLEDGE_MAP.ZONES) || [
      { label: "Foundations", hue: 168 }, { label: "Intermediate", hue: 43 },
      { label: "Advanced", hue: 338 },
    ];

    // A rounded pill of text centered at a screen point, drawn on context `g`.
    function chipLabel(g, x, y, text, { size = 12, fg = "#e7c86a", weight = "600" } = {}) {
      g.font = `${weight} ${size}px "Iowan Old Style","Palatino Linotype",Georgia,serif`;
      const tw = g.measureText(text).width;
      const padX = 7, padY = 4, bw = tw + padX * 2, bh = size + padY * 2;
      const rx = x - bw / 2, ry = y - bh / 2, r = 6;
      g.beginPath();
      g.moveTo(rx + r, ry);
      g.arcTo(rx + bw, ry, rx + bw, ry + bh, r);
      g.arcTo(rx + bw, ry + bh, rx, ry + bh, r);
      g.arcTo(rx, ry + bh, rx, ry, r);
      g.arcTo(rx, ry, rx + bw, ry, r);
      g.closePath();
      g.fillStyle = "rgba(14,15,22,0.74)";
      g.fill();
      g.fillStyle = fg;
      g.textAlign = "center"; g.textBaseline = "middle";
      g.fillText(text, x, y);
    }

    function drawGuides(w, h) {
      const cx = offsetX, cy = offsetY;    // galaxy hub (world origin) on screen
      // Labels render on the overlay (above the cards); rings on the base canvas.
      octx.setTransform(dpr, 0, 0, dpr, 0, 0);
      octx.clearRect(0, 0, w, h);
      // One pass over visible nodes → overall radius extent, plus each field's and
      // family's angular mean (via summed unit vectors) and outer radius.
      let rMin = Infinity, rMax = 0;
      const fA = new Map(), famA = new Map();
      for (const n of nodeArr) {
        if (visibleSet && !visibleSet.has(n.id)) continue;
        if (n.radius == null) continue;
        rMin = Math.min(rMin, n.radius); rMax = Math.max(rMax, n.radius);
        const ca = Math.cos(n.angle), sa = Math.sin(n.angle);
        let e = fA.get(n.field); if (!e) fA.set(n.field, e = { sx: 0, sy: 0, r: 0, rMin: Infinity });
        e.sx += ca; e.sy += sa; e.r = Math.max(e.r, n.radius); e.rMin = Math.min(e.rMin, n.radius);
        const fam = (fields[n.field] || {}).family || n.field;
        let g = famA.get(fam); if (!g) famA.set(fam, g = { sx: 0, sy: 0, r: 0 });
        g.sx += ca; g.sy += sa; g.r = Math.max(g.r, n.radius);
      }
      if (rMax === 0) return;
      const inner = Math.max(rMin - 130, 30);
      const outer = rMax + 60;
      const onScreen = (x, y) => x > -80 && x < w + 80 && y > -30 && y < h + 30;

      // Concentric depth-zone rings, one hue per zone. The faint inner ring marks
      // the core; each zone's outer boundary ring is drawn in that zone's hue.
      const bands = [inner, inner + (outer - inner) / 3, inner + 2 * (outer - inner) / 3, outer];
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(150,132,92,0.16)";
      ctx.beginPath(); ctx.arc(cx, cy, bands[0] * scale, 0, Math.PI * 2); ctx.stroke();
      for (let i = 0; i < 3; i++) {
        const hue = (ZONES[i] && ZONES[i].hue) ?? 44;
        ctx.strokeStyle = `hsla(${hue}, 62%, 58%, 0.34)`;
        ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.arc(cx, cy, bands[i + 1] * scale, 0, Math.PI * 2); ctx.stroke();
      }

      // Field labels (short code) at each field's first (innermost) course,
      // angularly centered — nudged just inside it, into the empty core margin.
      if (scale >= FIELD_LABEL_MIN_SCALE) {
        for (const [f, e] of fA) {
          const ang = Math.atan2(e.sy, e.sx), rr = Math.max(e.rMin - 80, 40) * scale;
          const x = cx + Math.cos(ang) * rr, y = cy + Math.sin(ang) * rr;
          if (!onScreen(x, y)) continue;
          const meta = fields[f] || {};
          chipLabel(octx, x, y, meta.abbr || f, { size: 11, fg: `hsl(${meta.hue ?? 44} 70% 72%)`, weight: "700" });
        }
      }

      // Family labels, further out and larger.
      for (const [fam, g] of famA) {
        const ang = Math.atan2(g.sy, g.sx), rr = (g.r + 300) * scale;
        const x = cx + Math.cos(ang) * rr, y = cy + Math.sin(ang) * rr;
        if (!onScreen(x, y)) continue;
        chipLabel(octx, x, y, (famLabelOf[fam] || fam).toUpperCase(), { size: 13, fg: "#f0dca0", weight: "700" });
      }
    }

    function renderEdges() {
      const w = root.clientWidth, h = root.clientHeight;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      drawGuides(w, h);   // depth rings + field / family labels, behind the edges

      // Cull: skip edges whose bounding box is off-screen.
      const pad = 60;
      const showLabelsThreshold = 0.18;
      const thin = scale < 0.4;

      ctx.lineWidth = thin ? 0.6 : 1;
      for (const e of edges) {
        const a = byId.get(e.from), b = byId.get(e.to);
        if (!a || !b) continue;
        if (visibleSet && (!visibleSet.has(a.id) || !visibleSet.has(b.id))) continue;
        // endpoints in screen space (bottom-center of prereq -> top-center of course)
        const ax = (a.x + a.w / 2) * scale + offsetX;
        const ay = (a.y + a.h) * scale + offsetY;
        const bx = (b.x + b.w / 2) * scale + offsetX;
        const by = (b.y) * scale + offsetY;

        const minx = Math.min(ax, bx), maxx = Math.max(ax, bx);
        const miny = Math.min(ay, by), maxy = Math.max(ay, by);
        if (maxx < -pad || minx > w + pad || maxy < -pad || miny > h + pad) continue;

        const active = highlightSet && (highlightSet.has(a.id) && highlightSet.has(b.id));
        const dim = highlightSet && !active;

        ctx.strokeStyle = active
          ? "rgba(214,178,94,0.9)"
          : dim ? "rgba(120,104,74,0.10)" : "rgba(150,132,92,0.34)";
        ctx.lineWidth = active ? (thin ? 1.2 : 1.8) : (thin ? 0.6 : 1);

        // Curved constellation line (vertical S-curve).
        const midy = (ay + by) / 2;
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.bezierCurveTo(ax, midy, bx, midy, bx, by);
        ctx.stroke();

        // Star node at the child end when reasonably zoomed in.
        if (scale > showLabelsThreshold) {
          ctx.fillStyle = active ? "rgba(230,200,120,0.95)" : "rgba(150,132,92,0.45)";
          ctx.beginPath();
          ctx.arc(bx, by, active ? 2.4 : 1.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // ---- Minimap: scaled overview + "you are here" viewport ---------------
    // A faithful shrink-to-fit replica of the galaxy. Prerequisite threads and
    // stars are drawn at scale; completed stars glow so the panel doubles as a
    // progress readout, and a framed rectangle marks the slice of the atlas
    // currently on screen. Click or drag inside it to fly there.
    let mini = null, miniCtx = null;

    // Fit the active bounds (whole atlas, or the filtered subset) into the canvas.
    function miniTransform() {
      const b = activeBounds();
      const w = mini.width, h = mini.height, pad = 10;
      const s = Math.min((w - 2 * pad) / Math.max(b.w, 1), (h - 2 * pad) / Math.max(b.h, 1));
      return { s, ox: (w - b.w * s) / 2 - b.minX * s, oy: (h - b.h * s) / 2 - b.minY * s };
    }
    const g2m = (gx, gy, t) => ({ x: gx * t.s + t.ox, y: gy * t.s + t.oy });
    const m2g = (mx, my, t) => ({ x: (mx - t.ox) / t.s, y: (my - t.oy) / t.s });

    function attachMinimap(canvasEl) {
      mini = canvasEl;
      miniCtx = mini.getContext("2d");
      const flyTo = (clientX, clientY) => {
        const r = mini.getBoundingClientRect();
        const px = (clientX - r.left) / r.width * mini.width;
        const py = (clientY - r.top) / r.height * mini.height;
        const g = m2g(px, py, miniTransform());
        api.centerOn(g.x, g.y);
      };
      let mdown = false;
      mini.addEventListener("pointerdown", (e) => {
        mdown = true; try { mini.setPointerCapture(e.pointerId); } catch {}
        flyTo(e.clientX, e.clientY);
      });
      mini.addEventListener("pointermove", (e) => { if (mdown) flyTo(e.clientX, e.clientY); });
      mini.addEventListener("pointerup", () => { mdown = false; });
      drawMinimap();
    }

    // Draw the replica and return its transform (or null if not mounted).
    function drawMinimap() {
      if (!mini || !miniCtx) return null;
      const t = miniTransform();
      miniCtx.clearRect(0, 0, mini.width, mini.height);

      // Prerequisite threads, faint, batched into one path.
      miniCtx.strokeStyle = "rgba(150,132,92,0.16)";
      miniCtx.lineWidth = 0.4;
      miniCtx.beginPath();
      for (const e of edges) {
        if (visibleSet && (!visibleSet.has(e.from) || !visibleSet.has(e.to))) continue;
        const a = byId.get(e.from), b = byId.get(e.to);
        if (!a || !b) continue;
        const pa = g2m(a.x + a.w / 2, a.y + a.h / 2, t);
        const pb = g2m(b.x + b.w / 2, b.y + b.h / 2, t);
        miniCtx.moveTo(pa.x, pa.y); miniCtx.lineTo(pb.x, pb.y);
      }
      miniCtx.stroke();

      // Stars. Completed ones glow (halo + bright core); the rest stay muted so
      // your progress reads at a glance.
      for (const n of nodeArr) {
        if (visibleSet && !visibleSet.has(n.id)) continue;
        const p = g2m(n.x + n.w / 2, n.y + n.h / 2, t);
        const st = nodeStatus(n);
        if (st === "complete") {
          miniCtx.fillStyle = "rgba(244,216,150,0.22)";           // halo
          miniCtx.beginPath(); miniCtx.arc(p.x, p.y, 3.4, 0, Math.PI * 2); miniCtx.fill();
          miniCtx.fillStyle = "rgba(250,226,150,1)";              // bright core
          miniCtx.beginPath(); miniCtx.arc(p.x, p.y, 1.8, 0, Math.PI * 2); miniCtx.fill();
        } else {
          miniCtx.fillStyle = st === "available"
            ? "rgba(198,184,148,0.72)" : "rgba(102,94,74,0.40)";
          miniCtx.beginPath();
          miniCtx.arc(p.x, p.y, st === "available" ? 1.4 : 1.0, 0, Math.PI * 2);
          miniCtx.fill();
        }
      }
      return t;
    }

    function renderMinimapViewport() {
      const t = drawMinimap();
      if (!t) return;
      // "You are here": the current viewport in graph space, framed and clamped
      // to the canvas so it stays visible even when zoomed past the atlas edge.
      const vr = visibleGraphRect(0);
      const tl = g2m(vr.x0, vr.y0, t), br = g2m(vr.x1, vr.y1, t);
      const x0 = Math.max(0.5, tl.x), y0 = Math.max(0.5, tl.y);
      const x1 = Math.min(mini.width - 0.5, br.x), y1 = Math.min(mini.height - 0.5, br.y);
      if (x1 <= x0 || y1 <= y0) return;
      miniCtx.fillStyle = "rgba(232,206,140,0.10)";
      miniCtx.fillRect(x0, y0, x1 - x0, y1 - y0);
      miniCtx.strokeStyle = "rgba(232,206,140,0.9)";
      miniCtx.lineWidth = 1;
      miniCtx.strokeRect(x0, y0, x1 - x0, y1 - y0);
    }

    // ---------------------------------------------------------------------
    //  Interaction: pan & zoom
    // ---------------------------------------------------------------------
    let dragging = false, dragMoved = false, lastX = 0, lastY = 0;
    const pointers = new Map();  // active pointerId -> {x, y} in client px
    let pinchPrev = null;        // { dist, cx, cy } (cx/cy root-relative), or null

    // Midpoint & finger distance of the first two active pointers.
    function pinchState() {
      const [a, b] = [...pointers.values()];
      const r = root.getBoundingClientRect();
      return {
        dist: Math.hypot(a.x - b.x, a.y - b.y),
        cx: (a.x + b.x) / 2 - r.left,
        cy: (a.y + b.y) / 2 - r.top,
      };
    }

    root.addEventListener("pointerdown", (e) => {
      if (e.target.closest(".km-node")) return; // let node handle clicks
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      try { root.setPointerCapture(e.pointerId); } catch {}
      dragMoved = false;
      if (pointers.size === 1) {
        dragging = true;
        lastX = e.clientX; lastY = e.clientY;
        root.classList.add("km-grabbing");
      } else if (pointers.size === 2) {
        dragging = false;            // second finger down → start pinch
        pinchPrev = pinchState();
      }
    });

    root.addEventListener("pointermove", (e) => {
      if (!pointers.has(e.pointerId)) return;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

      if (pointers.size >= 2) {
        // Two-finger pinch-zoom, anchored on the moving midpoint (pans too).
        const cur = pinchState();
        if (pinchPrev && pinchPrev.dist > 0) {
          const factor = cur.dist / pinchPrev.dist;
          const gx = (pinchPrev.cx - offsetX) / scale;   // graph pt under old midpoint
          const gy = (pinchPrev.cy - offsetY) / scale;
          const next = clampScale(scale * factor);
          offsetX = cur.cx - gx * next;
          offsetY = cur.cy - gy * next;
          scale = next;
          dragMoved = true;
          scheduleRender();
        }
        pinchPrev = cur;
      } else if (dragging) {
        // Single-finger / mouse pan.
        const dx = e.clientX - lastX, dy = e.clientY - lastY;
        if (Math.abs(dx) + Math.abs(dy) > 2) dragMoved = true;
        offsetX += dx; offsetY += dy;
        lastX = e.clientX; lastY = e.clientY;
        scheduleRender();
      }
    });

    const endPointer = (e) => {
      if (!pointers.has(e.pointerId)) return;
      pointers.delete(e.pointerId);
      try { root.releasePointerCapture(e.pointerId); } catch {}
      if (pointers.size >= 2) {
        pinchPrev = pinchState();
      } else if (pointers.size === 1) {
        // One finger remains → resume panning from it (no jump).
        const p = [...pointers.values()][0];
        lastX = p.x; lastY = p.y;
        dragging = true;
        pinchPrev = null;
      } else {
        dragging = false;
        pinchPrev = null;
        root.classList.remove("km-grabbing");
      }
    };
    root.addEventListener("pointerup", endPointer);
    root.addEventListener("pointercancel", endPointer);

    // Clicking empty space clears highlight & closes expansion.
    root.addEventListener("click", (e) => {
      if (dragMoved) return;
      if (e.target === root || e.target === canvas) {
        if (expandedId) { expandedId = null; onSelect && onSelect(null); }
        highlightSet = null;
        for (const [id, el] of elements) styleNode(byId.get(id), el);
        scheduleRender();
      }
    });

    root.addEventListener("wheel", (e) => {
      // Over an open card, let the wheel scroll the card's own body instead of
      // zooming the graph underneath it.
      if (e.target.closest(".km-node.km-expanded")) return;
      e.preventDefault();
      const rect = root.getBoundingClientRect();
      const sx = e.clientX - rect.left, sy = e.clientY - rect.top;
      const g = screenToGraph(sx, sy);
      const factor = Math.exp(-e.deltaY * 0.0016);
      const next = clampScale(scale * factor);
      // keep cursor anchored
      offsetX = sx - g.x * next;
      offsetY = sy - g.y * next;
      scale = next;
      scheduleRender();
    }, { passive: false });

    // ---------------------------------------------------------------------
    //  Public API
    // ---------------------------------------------------------------------
    const api = {
      render, scheduleRender,

      zoomBy(factor, cx, cy) {
        const rect = root.getBoundingClientRect();
        const sx = cx ?? rect.width / 2, sy = cy ?? rect.height / 2;
        const g = screenToGraph(sx, sy);
        const next = clampScale(scale * factor);
        offsetX = sx - g.x * next;
        offsetY = sy - g.y * next;
        scale = next;
        scheduleRender();
      },

      fit(pad = 80) {
        const w = root.clientWidth, h = root.clientHeight;
        const b = activeBounds();                 // whole graph, or the filtered subset
        const s = clampScale(Math.min(
          (w - pad * 2) / b.w,
          (h - pad * 2) / b.h));
        scale = s;
        offsetX = (w - b.w * s) / 2 - b.minX * s;
        offsetY = (h - b.h * s) / 2 - b.minY * s;
        scheduleRender();
      },

      // Field filter: null = show everything; an array of field keys = show
      // those fields' courses PLUS their full prerequisite chains (across
      // fields), hide the rest. An empty array shows nothing.
      setFilter(fields) {
        const list = fields == null
          ? null
          : (Array.isArray(fields) ? fields.slice() : [fields]);
        currentFilter = list;
        if (!list) {
          visibleSet = null;
          restoreHome();                 // back to the whole-atlas positions
        } else {
          const wanted = new Set(list);
          const set = new Set();
          for (const n of nodeArr) {
            if (!wanted.has(n.field)) continue;
            for (const id of ancestorsOf(n.id)) set.add(id); // node + its prereqs
          }
          visibleSet = set;
          if (expandedId && !visibleSet.has(expandedId)) {
            expandedId = null; onSelect && onSelect(null);
          }
          relayoutSubset(set);           // compact the visible subset into its own disk
        }
        highlightSet = null;
        clearMounted();                  // positions changed → remount everything fresh
        api.fit();
      },
      getFilter() { return currentFilter; },

      centerOn(gx, gy, targetScale) {
        const w = root.clientWidth, h = root.clientHeight;
        if (targetScale) scale = clampScale(targetScale);
        offsetX = w / 2 - gx * scale;
        offsetY = h / 2 - gy * scale;
        scheduleRender();
      },

      // Pan (and optionally open) a node, highlighting its prerequisite chain.
      focusNode(id, open) {
        const n = byId.get(id);
        if (!n) return;
        const target = Math.max(scale, 0.7);
        api.centerOn(n.x + n.w / 2, n.y + n.h / 2, target);
        highlightSet = ancestorsOf(id);
        if (open) {
          expandedId = id;
          onSelect && onSelect(n);
        }
        scheduleRender();
        // Ensure the node mounts, then style.
        requestAnimationFrame(() => {
          const el = elements.get(id);
          if (el) { if (open) { /* body built on demand via click path */ }
            styleNode(n, el); }
        });
      },

      // Frame a whole field's constellation. Returns false if it has no visible
      // nodes (e.g. filtered out). Highlights the field so it's easy to spot.
      focusField(field) {
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        const ids = new Set();
        for (const n of nodeArr) {
          if (n.field !== field) continue;
          if (visibleSet && !visibleSet.has(n.id)) continue;
          ids.add(n.id);
          minX = Math.min(minX, n.x); minY = Math.min(minY, n.y);
          maxX = Math.max(maxX, n.x + n.w); maxY = Math.max(maxY, n.y + n.h);
        }
        if (!ids.size) return false;
        const w = root.clientWidth, h = root.clientHeight, pad = 110;
        const bw = Math.max(maxX - minX, 1), bh = Math.max(maxY - minY, 1);
        const s = clampScale(Math.min((w - 2 * pad) / bw, (h - 2 * pad) / bh));
        api.setHighlight(ids);
        api.centerOn((minX + maxX) / 2, (minY + maxY) / 2, Math.min(s, 1.1));
        return true;
      },

      // The goal course (marked in the graph). Pass null to clear.
      setGoal(id) {
        goalId = id && byId.has(id) ? id : null;
        for (const [nid, el] of elements) styleNode(byId.get(nid), el);
        scheduleRender();
      },
      getGoal() { return goalId; },
      // Ordered study plan (course + prereqs, by depth) as plain node objects.
      pathTo(id) { return byId.has(id) ? orderedPath(id) : []; },

      // Fit the camera to a set of node ids (e.g. a whole study path).
      frameNodes(ids) {
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity, cnt = 0;
        for (const id of ids) {
          const n = byId.get(id);
          if (!n || (visibleSet && !visibleSet.has(id))) continue;
          minX = Math.min(minX, n.x); minY = Math.min(minY, n.y);
          maxX = Math.max(maxX, n.x + n.w); maxY = Math.max(maxY, n.y + n.h); cnt++;
        }
        if (!cnt) return;
        const w = root.clientWidth, h = root.clientHeight, pad = 100;
        const bw = Math.max(maxX - minX, 1), bh = Math.max(maxY - minY, 1);
        const s = clampScale(Math.min((w - 2 * pad) / bw, (h - 2 * pad) / bh));
        api.centerOn((minX + maxX) / 2, (minY + maxY) / 2, Math.min(s, 1.1));
      },

      setHighlight(set) {
        highlightSet = set;
        for (const [id, el] of elements) styleNode(byId.get(id), el);
        scheduleRender();
      },

      clearHighlight() { api.setHighlight(null); },

      getScale() { return scale; },
      attachMinimap,
      resize() { resizeCanvas(); scheduleRender(); },

      // Search: return nodes whose title matches (case-insensitive).
      search(q) {
        q = q.trim().toLowerCase();
        if (!q) return [];
        return nodeArr
          .filter(n => n.title.toLowerCase().includes(q))
          .slice(0, 12);
      },
    };

    // Compute the ancestor set (all transitive prerequisites) + the node.
    function ancestorsOf(id) {
      const seen = new Set([id]);
      const stack = [id];
      while (stack.length) {
        const cur = byId.get(stack.pop());
        for (const r of cur.requires) if (!seen.has(r)) { seen.add(r); stack.push(r); }
      }
      return seen;
    }

    // A course and all its prerequisites, in a valid study order (by depth =
    // topological rank, then title). The target course is always last.
    function orderedPath(id) {
      const arr = [...ancestorsOf(id)].map(x => byId.get(x)).filter(Boolean);
      arr.sort((a, b) => (a.depth - b.depth) || a.title.localeCompare(b.title));
      return arr;
    }

    // Bounding box to fit: the whole graph, or just the filtered subset.
    function activeBounds() {
      if (!visibleSet) return bounds;
      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      for (const n of nodeArr) {
        if (!visibleSet.has(n.id)) continue;
        minX = Math.min(minX, n.x);       minY = Math.min(minY, n.y);
        maxX = Math.max(maxX, n.x + n.w); maxY = Math.max(maxY, n.y + n.h);
      }
      if (minX === Infinity) return bounds;
      return { minX, minY, maxX, maxY, w: maxX - minX, h: maxY - minY };
    }

    // ---- init -------------------------------------------------------------
    resizeCanvas();
    window.addEventListener("resize", () => api.resize());
    api.fit();

    return api;
  }

  // ---- tiny helpers -------------------------------------------------------
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function escapeAttr(s) { return escapeHtml(s); }

  return { create };
})();

window.Graph = Graph;
