/* ============================================================================
 *  APP BOOTSTRAP
 *  Wires the data -> layout -> renderer, plus completion tracking (localStorage),
 *  the toolbar, search, progress meter and legend.
 * ==========================================================================*/

(function () {
  const { FIELDS, COURSES } = window.KNOWLEDGE_MAP;

  // ---- Completion state (persisted) -------------------------------------
  const STORAGE_KEY = "knowledge-map.completed.v1";
  const completed = new Set(load());

  function load() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); }
    catch { return []; }
  }
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed])); }
    catch {}
  }

  // ---- Build layout (needed by the state's prerequisite checks) ----------
  const model = window.Layout.build(COURSES, FIELDS);

  // A course is "ready" when every prerequisite is already completed.
  function isReady(id) {
    const n = model.byId.get(id);
    return n ? n.requires.every(r => completed.has(r)) : false;
  }

  // Un-completing a course also un-completes anything that (transitively)
  // depends on it, so a completed course always has all its prereqs completed.
  function cascadeIncomplete(id) {
    const stack = [id], removed = [];
    while (stack.length) {
      const cur = stack.pop();
      if (completed.has(cur)) { completed.delete(cur); removed.push(cur); }
      const n = model.byId.get(cur);
      if (n) for (const childId of n.children)
        if (completed.has(childId)) stack.push(childId);
    }
    return removed;
  }

  const state = {
    isComplete: id => completed.has(id),
    isReady,
    // Returns { ok, reason?, cascaded? } so the UI can give feedback.
    toggle(id) {
      if (completed.has(id)) {
        const removed = cascadeIncomplete(id);
        save(); updateProgress();
        return { ok: true, cascaded: removed.length - 1 };
      }
      if (!isReady(id)) return { ok: false, reason: "locked" };
      completed.add(id);
      save(); updateProgress();
      return { ok: true };
    },
    reset() { completed.clear(); save(); updateProgress(); },
  };

  // ---- Renderer ----------------------------------------------------------
  const viewport = document.getElementById("viewport");
  let openId = null;   // currently expanded course (mirrored into the URL)
  const graph = window.Graph.create({
    root: viewport,
    model,
    fields: FIELDS,
    state,
    onSelect: (node) => {
      if (node) graph.setHighlight(ancestors(node.id));
      // when closing (node null) leave highlight as-is; empty-space click clears it
      openId = node ? node.id : null;
      updateHash();
    },
    onGoalToggle: (id) => setGoal(goalId === id ? null : id),
  });

  function ancestors(id) {
    const seen = new Set([id]);
    const stack = [id];
    const byId = model.byId;
    while (stack.length) {
      const cur = byId.get(stack.pop());
      for (const r of cur.requires) if (!seen.has(r)) { seen.add(r); stack.push(r); }
    }
    return seen;
  }

  // ---- Goal / study plan -------------------------------------------------
  // A single "goal" course is persisted; the panel shows the ordered path of
  // prerequisites leading to it, with progress and the next actionable step.
  const $g = sel => document.querySelector(sel);
  const GOAL_KEY = "knowledge-map.goal.v1";
  let goalId = localStorage.getItem(GOAL_KEY) || null;
  if (goalId && !model.byId.has(goalId)) goalId = null;

  const goalPanel = $g("#goal-panel");
  const goalTitleEl = $g("#goal-title");
  const goalBarEl = $g("#goal-bar");
  const goalStatsEl = $g("#goal-stats");
  const goalStepsEl = $g("#goal-steps");

  function setGoal(id) {
    goalId = id || null;
    try { goalId ? localStorage.setItem(GOAL_KEY, goalId) : localStorage.removeItem(GOAL_KEY); }
    catch {}
    graph.setGoal(goalId);
    if (goalId) setGoalCollapsed(false);   // reveal the plan when a goal is chosen
    renderGoalPanel();
    updateHash();
    if (goalId) toast(`Goal set: ${model.byId.get(goalId).title}`);
  }

  // Collapse / expand the panel body (state persists), mirroring the legend.
  const goalCollapseBtn = $g("#goal-collapse");
  const GOAL_COLLAPSE_KEY = "knowledge-map.goal.collapsed";
  function setGoalCollapsed(c) {
    goalPanel.classList.toggle("collapsed", c);
    goalCollapseBtn.setAttribute("aria-expanded", String(!c));
    goalCollapseBtn.title = c ? "Expand" : "Collapse";
    try { localStorage.setItem(GOAL_COLLAPSE_KEY, c ? "1" : "0"); } catch {}
  }
  setGoalCollapsed(localStorage.getItem(GOAL_COLLAPSE_KEY) === "1");
  goalCollapseBtn.addEventListener("click",
    () => setGoalCollapsed(!goalPanel.classList.contains("collapsed")));

  function renderGoalPanel() {
    const node = goalId && model.byId.get(goalId);
    if (!node) { goalPanel.hidden = true; return; }
    goalPanel.hidden = false;
    const steps = graph.pathTo(goalId);        // ordered: prereqs first, goal last
    const total = steps.length;
    const done = steps.reduce((c, n) => c + (completed.has(n.id) ? 1 : 0), 0);
    const pct = total ? Math.round((done / total) * 100) : 0;
    const next = steps.find(n => !completed.has(n.id));

    goalTitleEl.textContent = node.title;
    goalBarEl.style.width = pct + "%";
    goalStatsEl.innerHTML = next
      ? `<span>${done} / ${total} done</span>`
        + `<button class="goal-next" data-id="${next.id}" title="Go to the next step">Next: ${next.title}</button>`
      : `<span class="goal-complete">✦ Path complete — ${total} / ${total}</span>`;

    goalStepsEl.innerHTML = steps.map(n => {
      const cls = completed.has(n.id) ? "done"
        : (next && n.id === next.id) ? "next"
        : isReady(n.id) ? "ready" : "locked";
      return `<li class="goal-step ${cls}" data-id="${n.id}" title="${n.title}">`
        + `<span class="gs-mark" style="--field-hue:${FIELDS[n.field]?.hue ?? 44}"></span>`
        + `<span class="gs-title">${n.title}</span></li>`;
    }).join("");
  }

  // Frame + highlight the whole goal path.
  goalTitleEl.addEventListener("click", () => {
    if (!goalId) return;
    const ids = graph.pathTo(goalId).map(n => n.id);
    graph.setHighlight(new Set(ids));
    graph.frameNodes(ids);
  });
  // Step / next clicks fly to that course and open it.
  function goalGoto(e) {
    const el = e.target.closest("[data-id]");
    if (el) graph.focusNode(el.dataset.id, true);
  }
  goalStepsEl.addEventListener("click", goalGoto);
  goalStatsEl.addEventListener("click", goalGoto);

  // Drag the panel by its header (position persists).
  (function makeGoalDraggable() {
    const head = goalPanel.querySelector(".goal-head");
    const POS_KEY = "knowledge-map.goal.pos.v1";
    const W = 244;
    try {
      const p = JSON.parse(localStorage.getItem(POS_KEY) || "null");
      if (p && typeof p.left === "number") {
        goalPanel.style.left = Math.max(4, Math.min(p.left, innerWidth - W - 4)) + "px";
        goalPanel.style.top = Math.max(52, Math.min(p.top, innerHeight - 60)) + "px";
      }
    } catch {}
    let drag = null;
    head.addEventListener("pointerdown", (e) => {
      if (e.target.closest("#goal-collapse")) return;   // let the collapse button work
      const r = goalPanel.getBoundingClientRect();
      drag = { dx: e.clientX - r.left, dy: e.clientY - r.top, w: r.width };
      try { head.setPointerCapture(e.pointerId); } catch {}
      goalPanel.classList.add("dragging");
      e.preventDefault();
    });
    head.addEventListener("pointermove", (e) => {
      if (!drag) return;
      const left = Math.max(4, Math.min(innerWidth - drag.w - 4, e.clientX - drag.dx));
      const top = Math.max(52, Math.min(innerHeight - 40, e.clientY - drag.dy));
      goalPanel.style.left = left + "px";
      goalPanel.style.top = top + "px";
    });
    const end = (e) => {
      if (!drag) return;
      drag = null;
      goalPanel.classList.remove("dragging");
      try { head.releasePointerCapture(e.pointerId); } catch {}
      const r = goalPanel.getBoundingClientRect();
      try { localStorage.setItem(POS_KEY, JSON.stringify({ left: r.left, top: r.top })); } catch {}
    };
    head.addEventListener("pointerup", end);
    head.addEventListener("pointercancel", end);
  })();

  // Restore a persisted goal on load.
  if (goalId) { graph.setGoal(goalId); renderGoalPanel(); }

  // ---- Toolbar buttons ---------------------------------------------------
  const $ = sel => document.querySelector(sel);
  $("#zoom-in").addEventListener("click", () => graph.zoomBy(1.3));
  $("#zoom-out").addEventListener("click", () => graph.zoomBy(1 / 1.3));
  $("#zoom-fit").addEventListener("click", () => { graph.clearHighlight(); graph.fit(); });
  $("#reset-progress").addEventListener("click", () => {
    if (confirm("Clear all completion progress? This cannot be undone.")) {
      state.reset(); graph.scheduleRender();
    }
  });

  // ---- Export / import progress -----------------------------------------
  $("#export-progress").addEventListener("click", exportProgress);
  $("#import-progress").addEventListener("click", () => $("#import-file").click());
  $("#import-file").addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) importProgress(file);
    e.target.value = "";                 // allow re-importing the same file
  });

  function exportProgress() {
    const data = {
      app: "atlas-of-knowledge", version: 1,
      exportedAt: new Date().toISOString(),
      completed: [...completed],
      goal: goalId || null,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "atlas-of-knowledge-progress.json";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 0);
    toast(`Exported ${completed.size} completed course${completed.size === 1 ? "" : "s"}.`);
  }

  function importProgress(file) {
    const reader = new FileReader();
    reader.onload = () => {
      let data;
      try { data = JSON.parse(reader.result); } catch { data = null; }
      if (!data || !Array.isArray(data.completed)) {
        toast("That file isn't a valid progress export."); return;
      }
      completed.clear();
      for (const id of data.completed) if (model.byId.has(id)) completed.add(id);
      sanitizeCompleted();               // enforce the prereqs-first invariant
      save();
      setGoal(data.goal && model.byId.has(data.goal) ? data.goal : null);
      updateProgress();
      graph.scheduleRender();
      toast(`Imported ${completed.size} completed course${completed.size === 1 ? "" : "s"}.`);
    };
    reader.readAsText(file);
  }

  // Drop any completed course whose prerequisites aren't (transitively) complete.
  function sanitizeCompleted() {
    let changed = true;
    while (changed) {
      changed = false;
      for (const id of [...completed]) {
        const n = model.byId.get(id);
        if (n && !n.requires.every(r => completed.has(r))) { completed.delete(id); changed = true; }
      }
    }
  }

  // ---- Deep-linking: shareable URL hash ---------------------------------
  // The hash mirrors filter + goal + open course, so a view is bookmarkable.
  let applyingHash = false;
  function updateHash() {
    if (applyingHash) return;
    const p = new URLSearchParams();
    if (selected.size < allFieldKeys.length) p.set("fields", [...selected].join(","));
    if (goalId) p.set("goal", goalId);
    if (openId) p.set("open", openId);
    const s = p.toString();
    try { history.replaceState(null, "", s ? "#" + s : location.pathname + location.search); }
    catch {}
  }
  function applyHash() {
    const raw = location.hash.replace(/^#/, "");
    if (!raw) return;
    const p = new URLSearchParams(raw);
    if (p.has("fields")) {
      applyingHash = true;
      const fs = (p.get("fields") || "").split(",").filter(k => FIELDS[k]);
      selected.clear(); fs.forEach(k => selected.add(k));
      syncFilter();
      applyingHash = false;
    }
    if (p.has("goal")) {
      const g = p.get("goal");
      if (model.byId.has(g)) { goalId = g; graph.setGoal(g); setGoalCollapsed(false); renderGoalPanel(); }
    }
    if (p.has("open")) {
      const o = p.get("open");
      if (model.byId.has(o)) { openId = o; graph.focusNode(o, true); }
    }
    updateHash();
  }

  // ---- Field filter ------------------------------------------------------
  // A checkbox for every field (grouped by family) plus an "All fields" master
  // toggle. All checked = the big picture (no filter); a subset shows only those
  // fields' courses plus their full prerequisite chains (across fields).
  const filterBtn = $("#field-filter");
  const filterPanel = $("#field-filter-panel");
  const filterLabel = $("#field-filter-label");
  const allFieldKeys = Object.keys(FIELDS);
  const selected = new Set(allFieldKeys);          // start showing everything
  {
    const fams = window.KNOWLEDGE_MAP.FAMILIES || [];
    let html = `<label class="km-filter-all">`
      + `<input type="checkbox" id="km-filter-master" checked /><span>✦ All fields</span></label>`
      + `<div class="km-filter-groups">`;
    for (const fam of fams) {
      const fields = Object.entries(FIELDS).filter(([, f]) => f.family === fam.key);
      if (!fields.length) continue;
      html += `<div class="km-filter-group"><div class="km-filter-group-title">${fam.label}</div>`
        + fields.map(([k, f]) =>
            `<label class="km-filter-opt"><input type="checkbox" data-field="${k}" checked />`
            + `<span class="swatch" style="--field-hue:${f.hue}"></span>${f.label}</label>`).join("")
        + `</div>`;
    }
    filterPanel.innerHTML = html + `</div>`;
  }
  const masterBox = $("#km-filter-master");
  const fieldBoxes = [...filterPanel.querySelectorAll("input[data-field]")];

  // Reflect the `selected` set into the checkboxes, button label and graph.
  function syncFilter() {
    const n = selected.size, total = allFieldKeys.length;
    for (const box of fieldBoxes) box.checked = selected.has(box.dataset.field);
    masterBox.checked = n === total;
    masterBox.indeterminate = n > 0 && n < total;
    filterLabel.textContent =
      n === total ? "✦ All fields"
      : n === 0   ? "No fields"
      : n === 1   ? (FIELDS[[...selected][0]]?.label ?? "1 field")
      :             `${n} fields`;
    filterBtn.classList.toggle("km-active", n !== total);
    // All selected → no filter (whole atlas); otherwise the chosen subset.
    graph.setFilter(n === total ? null : [...selected]);
    updateHash();
  }
  function showAllFields() { allFieldKeys.forEach(k => selected.add(k)); syncFilter(); }

  filterPanel.addEventListener("change", (e) => {
    const t = e.target;
    if (t === masterBox) {
      if (masterBox.checked) allFieldKeys.forEach(k => selected.add(k));
      else selected.clear();
    } else if (t.dataset && t.dataset.field) {
      if (t.checked) selected.add(t.dataset.field);
      else selected.delete(t.dataset.field);
    }
    syncFilter();
  });

  // Open/close the dropdown panel.
  function setFilterOpen(open) {
    filterPanel.hidden = !open;
    filterBtn.setAttribute("aria-expanded", String(open));
  }
  filterBtn.addEventListener("click", (e) => { e.stopPropagation(); setFilterOpen(filterPanel.hidden); });
  filterPanel.addEventListener("click", (e) => e.stopPropagation());
  document.addEventListener("click", () => setFilterOpen(false));

  // Discover: suggest a course whose prerequisites are all satisfied. "Smart"
  // mode advances your goal (or picks the highest-leverage course); otherwise a
  // random pick. When fields are filtered, only discover from those fields.
  const smartBox = $("#discover-smart");
  const SMART_KEY = "knowledge-map.discover-smart";
  smartBox.checked = localStorage.getItem(SMART_KEY) === "1";
  smartBox.addEventListener("change", () => {
    try { localStorage.setItem(SMART_KEY, smartBox.checked ? "1" : "0"); } catch {}
  });

  const rnd = arr => arr[Math.floor(Math.random() * arr.length)];

  // Highest-leverage available course: prefer the next actionable step on the
  // goal path, else the course that immediately unlocks the most others.
  function smartPick(ready) {
    const readyIds = new Set(ready.map(c => c.id));
    if (goalId && model.byId.has(goalId)) {
      const next = graph.pathTo(goalId)
        .find(n => !completed.has(n.id) && isReady(n.id) && readyIds.has(n.id));
      if (next) return next;
    }
    const scored = ready.map(c => {
      const node = model.byId.get(c.id);
      let immediate = 0;                     // children this course would unlock now
      for (const chId of node.children) {
        if (completed.has(chId)) continue;
        const ch = model.byId.get(chId);
        if (ch.requires.every(r => r === c.id || completed.has(r))) immediate++;
      }
      return { c, score: immediate * 100 + node.children.length };
    });
    const best = Math.max(...scored.map(s => s.score));
    return rnd(scored.filter(s => s.score === best)).c;
  }

  $("#random-course").addEventListener("click", () => {
    const fields = graph.getFilter();            // null = whole atlas, else array
    if (fields && !fields.length) { toast("No fields are selected to discover from."); return; }
    const pool = fields ? COURSES.filter(c => fields.includes(c.field)) : COURSES;
    const ready = pool.filter(c => !completed.has(c.id) && isReady(c.id));
    if (!ready.length) {
      const anyLeft = pool.some(c => !completed.has(c.id));
      const scope = !fields ? "the atlas"
        : fields.length === 1 ? (FIELDS[fields[0]]?.label ?? "this field")
        : "the selected fields";
      toast(anyLeft
        ? `No courses are unlocked in ${scope} yet — complete a prerequisite first.`
        : fields
          ? `You've completed all of ${scope}. Bravo! ✦`
          : "You've completed the entire atlas. Bravo! ✦");
      return;
    }
    const pick = smartBox.checked ? smartPick(ready) : rnd(ready);
    graph.focusNode(pick.id, true);
    toast(`${smartBox.checked ? "Suggested" : "Random"}: ${pick.title}`);
  });

  // ---- Transient toast ---------------------------------------------------
  const toastEl = $("#toast");
  let toastTimer = null;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2600);
  }

  // ---- Search ------------------------------------------------------------
  const searchInput = $("#search");
  const results = $("#search-results");
  let activeIdx = -1, current = [];

  function renderResults(list) {
    current = list; activeIdx = -1;
    if (!list.length) { results.hidden = true; results.innerHTML = ""; return; }
    results.hidden = false;
    results.innerHTML = list.map((n, i) =>
      `<li data-id="${n.id}" data-i="${i}">
         <span class="dot" style="--field-hue:${FIELDS[n.field]?.hue ?? 44}"></span>
         <span class="r-title">${n.title}</span>
         <span class="r-field">${FIELDS[n.field]?.label ?? n.field}</span>
       </li>`).join("");
  }

  function goTo(id) {
    if (graph.getFilter()) showAllFields();  // search jumps across the whole atlas
    graph.focusNode(id, true);
    searchInput.value = "";
    results.hidden = true;
  }

  searchInput.addEventListener("input", () => {
    renderResults(graph.search(searchInput.value));
  });
  searchInput.addEventListener("keydown", (e) => {
    if (results.hidden) return;
    if (e.key === "ArrowDown") { e.preventDefault(); activeIdx = Math.min(activeIdx + 1, current.length - 1); markActive(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); activeIdx = Math.max(activeIdx - 1, 0); markActive(); }
    else if (e.key === "Enter") {
      e.preventDefault();
      const pick = current[activeIdx >= 0 ? activeIdx : 0];
      if (pick) goTo(pick.id);
    } else if (e.key === "Escape") { results.hidden = true; }
  });
  function markActive() {
    [...results.children].forEach((li, i) =>
      li.classList.toggle("active", i === activeIdx));
  }
  results.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (li) goTo(li.dataset.id);
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".km-search")) results.hidden = true;
  });

  // ---- Progress meter ----------------------------------------------------
  const progressText = $("#progress-text");
  const progressBar = $("#progress-bar");
  function updateProgress() {
    const total = COURSES.length;
    const done = completed.size;
    const pct = total ? Math.round((done / total) * 100) : 0;
    progressText.textContent = `${done} / ${total} completed`;
    progressBar.style.width = pct + "%";
    renderGoalPanel();       // keep the goal meter / next-step in sync
    updateFieldProgress();   // keep the per-field legend rings in sync
  }
  updateProgress();

  // ---- Legend: depth zones (concentric ring hues) ------------------------
  const ZONES = window.KNOWLEDGE_MAP.ZONES || [];
  $("#zone-legend").innerHTML = ZONES.map(z =>
    `<span class="km-legend-item zone-item" title="${z.desc}">`
    + `<span class="zone-swatch" style="--zh:${z.hue}"></span>${z.label}</span>`).join("");

  // ---- Legend / field key (grouped into family sections) -----------------
  const legend = $("#field-legend");
  const FAMILIES = window.KNOWLEDGE_MAP.FAMILIES ||
    [{ key: null, label: "" }];
  legend.innerHTML = FAMILIES.map(fam => {
    const items = Object.entries(FIELDS)
      .filter(([, f]) => f.family === fam.key)
      .map(([k, f]) =>
        `<button type="button" class="km-legend-item" data-field="${k}" title="Fly to ${f.label}">`
        + `<span class="field-prog" style="--field-hue:${f.hue};--pct:0"></span>${f.label}</button>`)
      .join("");
    if (!items) return "";
    return `<div class="km-legend-group">
        <div class="km-legend-group-title">${fam.label}</div>
        <div class="km-legend-items">${items}</div>
      </div>`;
  }).join("");

  // Clicking a field in the legend flies the camera to that constellation. If it
  // is currently filtered out, bring it into view first, then frame it.
  legend.addEventListener("click", (e) => {
    const btn = e.target.closest(".km-legend-item");
    if (!btn) return;
    const key = btn.dataset.field;
    if (!selected.has(key)) { selected.add(key); syncFilter(); }
    if (!graph.focusField(key)) toast(`${FIELDS[key]?.label ?? key} has no courses to show.`);
  });

  // Per-field completion, shown as a small ring on each legend field button.
  function updateFieldProgress() {
    const el = document.getElementById("field-legend");
    if (!el) return;
    const totals = {}, dones = {};
    for (const c of COURSES) {
      totals[c.field] = (totals[c.field] || 0) + 1;
      if (completed.has(c.id)) dones[c.field] = (dones[c.field] || 0) + 1;
    }
    el.querySelectorAll(".km-legend-item[data-field]").forEach(btn => {
      const f = btn.dataset.field, tot = totals[f] || 0, dn = dones[f] || 0;
      const prog = btn.querySelector(".field-prog");
      if (prog) prog.style.setProperty("--pct", tot ? Math.round((dn / tot) * 100) : 0);
      btn.title = `${(FIELDS[f] || {}).label ?? f} — ${dn}/${tot} done · click to fly`;
    });
  }
  updateFieldProgress();

  // Collapsible legend (remembers its state).
  const legendEl = $("#legend");
  const legendToggle = $("#legend-toggle");
  const LEGEND_KEY = "knowledge-map.legend.collapsed";
  function setLegendCollapsed(c) {
    legendEl.classList.toggle("collapsed", c);
    legendToggle.setAttribute("aria-expanded", String(!c));
    legendToggle.title = c ? "Expand legend" : "Collapse legend";
    try { localStorage.setItem(LEGEND_KEY, c ? "1" : "0"); } catch {}
  }
  setLegendCollapsed(localStorage.getItem(LEGEND_KEY) === "1");
  legendToggle.addEventListener("click", () =>
    setLegendCollapsed(!legendEl.classList.contains("collapsed")));

  // ---- Minimap -----------------------------------------------------------
  graph.attachMinimap($("#minimap"));

  // ---- Keyboard shortcuts ------------------------------------------------
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT") return;
    if (e.key === "+" || e.key === "=") graph.zoomBy(1.3);
    else if (e.key === "-" || e.key === "_") graph.zoomBy(1 / 1.3);
    else if (e.key === "0" || e.key === "f") { graph.clearHighlight(); graph.fit(); }
    else if (e.key === "/") { e.preventDefault(); searchInput.focus(); }
  });

  // Apply any shareable state from the URL hash, then paint.
  applyHash();
  graph.scheduleRender();

  console.log(`[knowledge-map] ${COURSES.length} courses across ${model.levels.length} levels loaded.`);
})();
