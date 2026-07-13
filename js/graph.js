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
    } = opts;

    // ---- DOM scaffold -----------------------------------------------------
    root.classList.add("km-viewport");
    const canvas = document.createElement("canvas");
    canvas.className = "km-edges";
    const world = document.createElement("div");
    world.className = "km-world";
    root.append(canvas, world);

    const ctx = canvas.getContext("2d");

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

    const { nodes, edges, byId, bounds } = model;

    // Quick lookups.
    const nodeArr = nodes;

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

      // Cover-image banner (rich cards only; filled once its detail loads).
      let cover = null;
      if (rich) {
        cover = document.createElement("div");
        cover.className = "km-cover km-cover-loading";
        body.appendChild(cover);
      }

      // Full field label chip at the top of the details.
      const f = fields[n.field] || {};
      const fieldLine = document.createElement("div");
      fieldLine.className = "km-field-full";
      fieldLine.innerHTML = `<span class="km-field-swatch"></span>${escapeHtml(f.label ?? n.field)}`;
      body.appendChild(fieldLine);

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
            cover.remove();
            standardContent(n, zone);
            return;
          }
          cover.classList.remove("km-cover-loading");
          const img = document.createElement("img");
          img.src = d.cover; img.alt = `${n.title} cover`; img.loading = "lazy";
          cover.appendChild(img);
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
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
    }

    function renderEdges() {
      const w = root.clientWidth, h = root.clientHeight;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

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

    // ---- Minimap: radial astrolabe ----------------------------------------
    // The atlas is very wide (one lane per field) and short, so a scale replica
    // smears into a thin horizontal band. Instead we re-project it into a dial:
    //   angle  = field  (sectors in the same left-to-right order as the lanes)
    //   radius = depth  (foundations near the center, capstones at the rim)
    // A progress arc rings each field's sector, and completed stars glow, so the
    // panel doubles as an at-a-glance progress readout.
    let mini = null, miniCtx = null, proj = null;

    // Fixed field order = the layout's lane order, limited to present fields.
    const fieldSeq = Object.keys(fields).filter(f => nodeArr.some(n => n.field === f));
    const fieldIndex = new Map(fieldSeq.map((f, i) => [f, i]));
    const maxDepth = nodeArr.reduce((m, n) => Math.max(m, n.depth), 0);
    const fieldNodes = new Map(fieldSeq.map(f => [f, []]));   // for rim progress
    for (const n of nodeArr) fieldNodes.get(n.field).push(n);

    // Per-field horizontal extent (graph space) → a node's fraction across its
    // lane, which becomes its offset within the field's angular sector.
    const laneCx = new Map(); // field -> { min, max } of node center-x
    for (const n of nodeArr) {
      const cx = n.x + n.w / 2;
      const e = laneCx.get(n.field);
      if (!e) laneCx.set(n.field, { min: cx, max: cx });
      else { e.min = Math.min(e.min, cx); e.max = Math.max(e.max, cx); }
    }

    function buildProjection() {
      const w = mini.width, h = mini.height;
      const cx = w / 2, cy = h / 2;
      const R = Math.min(w, h) / 2 - 14;  // leave room for the rim progress arcs
      const r0 = R * 0.16;                // inner radius (foundations)
      const F = fieldSeq.length || 1;
      const sector = (Math.PI * 2) / F;
      const span = sector * 0.86;         // leave a gap between field sectors
      const pts = new Map();              // id -> { x, y, angle, radius }
      for (const n of nodeArr) {
        const i = fieldIndex.get(n.field) || 0;
        const lane = laneCx.get(n.field);
        const frac = lane && lane.max > lane.min
          ? (n.x + n.w / 2 - lane.min) / (lane.max - lane.min) : 0.5;
        const a = -Math.PI / 2 + i * sector + (frac - 0.5) * span; // top, clockwise
        const rad = r0 + (maxDepth ? n.depth / maxDepth : 0) * (R - r0);
        pts.set(n.id, { x: cx + Math.cos(a) * rad, y: cy + Math.sin(a) * rad, angle: a, radius: rad });
      }
      proj = { cx, cy, R, r0, sector, span, pts };
    }

    function attachMinimap(canvasEl) {
      mini = canvasEl;
      miniCtx = mini.getContext("2d");
      buildProjection();
      mini.addEventListener("click", (e) => {
        const r = mini.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width * mini.width;
        const py = (e.clientY - r.top) / r.height * mini.height;
        // Fly to the nearest visible star.
        let best = null, bestD = Infinity;
        for (const n of nodeArr) {
          if (visibleSet && !visibleSet.has(n.id)) continue;
          const p = proj.pts.get(n.id);
          const d = (p.x - px) ** 2 + (p.y - py) ** 2;
          if (d < bestD) { bestD = d; best = n; }
        }
        if (best) api.centerOn(best.x + best.w / 2, best.y + best.h / 2);
      });
      drawMinimapBase();
    }

    function drawMinimapBase() {
      if (!mini || !proj) return;
      const w = mini.width, h = mini.height;
      const { cx, cy, R, r0, sector, span, pts } = proj;
      miniCtx.clearRect(0, 0, w, h);

      // Concentric depth rings for a faint astrolabe grid.
      miniCtx.strokeStyle = "rgba(150,132,92,0.12)";
      miniCtx.lineWidth = 0.5;
      for (let k = 1; k <= 3; k++) {
        miniCtx.beginPath();
        miniCtx.arc(cx, cy, r0 + (k / 3) * (R - r0), 0, Math.PI * 2);
        miniCtx.stroke();
      }

      // Prerequisite edges as faint radial threads.
      miniCtx.strokeStyle = "rgba(150,132,92,0.18)";
      miniCtx.lineWidth = 0.4;
      for (const e of edges) {
        if (visibleSet && (!visibleSet.has(e.from) || !visibleSet.has(e.to))) continue;
        const a = pts.get(e.from), b = pts.get(e.to);
        if (!a || !b) continue;
        miniCtx.beginPath(); miniCtx.moveTo(a.x, a.y); miniCtx.lineTo(b.x, b.y); miniCtx.stroke();
      }

      // Stars. Completed ones glow (halo + bright core); the rest stay muted so
      // your progress reads at a glance.
      for (const n of nodeArr) {
        if (visibleSet && !visibleSet.has(n.id)) continue;
        const p = pts.get(n.id);
        const st = nodeStatus(n);
        if (st === "complete") {
          miniCtx.fillStyle = "rgba(244,216,150,0.22)";           // halo
          miniCtx.beginPath(); miniCtx.arc(p.x, p.y, 4.2, 0, Math.PI * 2); miniCtx.fill();
          miniCtx.fillStyle = "rgba(250,226,150,1)";              // bright core
          miniCtx.beginPath(); miniCtx.arc(p.x, p.y, 2.3, 0, Math.PI * 2); miniCtx.fill();
        } else {
          miniCtx.fillStyle = st === "available"
            ? "rgba(198,184,148,0.72)" : "rgba(102,94,74,0.36)";
          miniCtx.beginPath();
          miniCtx.arc(p.x, p.y, st === "available" ? 1.5 : 1.1, 0, Math.PI * 2);
          miniCtx.fill();
        }
      }

      // Per-field completion arc around the rim (faint track + gold fill).
      const rimR = R + 7;
      miniCtx.lineWidth = 2.4;
      miniCtx.lineCap = "round";
      for (const f of fieldSeq) {
        const arr = fieldNodes.get(f);
        if (visibleSet && !arr.some(n => visibleSet.has(n.id))) continue;
        const i = fieldIndex.get(f);
        const center = -Math.PI / 2 + i * sector;
        const a0 = center - span / 2, a1 = center + span / 2;
        const done = arr.reduce((c, n) => c + (state.isComplete(n.id) ? 1 : 0), 0);
        const frac = arr.length ? done / arr.length : 0;
        miniCtx.strokeStyle = "rgba(150,132,92,0.28)";
        miniCtx.beginPath(); miniCtx.arc(cx, cy, rimR, a0, a1); miniCtx.stroke();
        if (frac > 0) {
          miniCtx.strokeStyle = "rgba(242,206,110,0.95)";
          miniCtx.beginPath(); miniCtx.arc(cx, cy, rimR, a0, a0 + frac * (a1 - a0)); miniCtx.stroke();
        }
      }
      miniCtx.lineCap = "butt";
    }

    function renderMinimapViewport() {
      if (!mini || !proj) return;
      // Cheap enough to redraw the whole dial + the "you are here" band each frame.
      drawMinimapBase();
      const { cx, cy, pts } = proj;
      const vr = visibleGraphRect(0);
      // Angular + radial span of the stars currently on screen. Visible fields
      // are contiguous in field order, so the angle range never wraps.
      let a0 = Infinity, a1 = -Infinity, rMin = Infinity, rMax = -Infinity, count = 0;
      for (const n of nodeArr) {
        if (visibleSet && !visibleSet.has(n.id)) continue;
        const ncx = n.x + n.w / 2, ncy = n.y + n.h / 2;
        if (ncx < vr.x0 || ncx > vr.x1 || ncy < vr.y0 || ncy > vr.y1) continue;
        const p = pts.get(n.id);
        a0 = Math.min(a0, p.angle); a1 = Math.max(a1, p.angle);
        rMin = Math.min(rMin, p.radius); rMax = Math.max(rMax, p.radius);
        count++;
      }
      if (!count) return;
      a0 -= 0.05; a1 += 0.05;
      rMin = Math.max(proj.r0 * 0.6, rMin - 6); rMax = Math.min(proj.R + 6, rMax + 6);
      miniCtx.beginPath();
      miniCtx.arc(cx, cy, rMax, a0, a1);
      miniCtx.arc(cx, cy, rMin, a1, a0, true);
      miniCtx.closePath();
      miniCtx.fillStyle = "rgba(232,206,140,0.12)";
      miniCtx.fill();
      miniCtx.strokeStyle = "rgba(232,206,140,0.9)";
      miniCtx.lineWidth = 1;
      miniCtx.stroke();
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
        }
        highlightSet = null;
        // Drop any mounted nodes that are now hidden.
        for (const [id, el] of elements)
          if (visibleSet && !visibleSet.has(id)) { el.remove(); elements.delete(id); }
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
