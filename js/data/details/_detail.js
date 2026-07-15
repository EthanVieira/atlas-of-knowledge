/* ============================================================================
 *  COURSE DETAIL LAYER  (lazy-loaded)
 * ----------------------------------------------------------------------------
 *  Rich content for a course card — long description, full topic list, and
 *  split & tagged references — lives in one file per course, grouped into a
 *  subfolder per field (js/data/details/<field>/). Those files are NOT listed in
 *  index.html; the renderer injects them on demand the first time a card is
 *  opened (see loadDetail() in graph.js). This file holds the small shared
 *  runtime they need: the registry and a resource helper.
 *
 *  To give a course rich detail:
 *    1. add `detail: true` to it in its js/data/<field>.js entry, and
 *    2. create js/data/details/<field>/<id>.js that calls registerDetail({...}).
 *       The course id is taken from the file name — don't restate it.
 * ==========================================================================*/

window.KM_DETAILS = window.KM_DETAILS || {};
window.__kmDetailWaiters = window.__kmDetailWaiters || {};

// A detail file just calls registerDetail({ ...content }). The course id is NOT
// restated — it's taken from the file's own name (the loader injects
// details/<field>/<id>.js, so document.currentScript.src ends in "<id>.js").
// Passing an explicit id string as the first argument is still supported.
function registerDetail(idOrObj, maybeObj) {
  let id, obj;
  if (typeof idOrObj === "string") {
    id = idOrObj; obj = maybeObj;
  } else {
    obj = idOrObj;
    const src = (typeof document !== "undefined" && document.currentScript && document.currentScript.src) || "";
    const m = src.match(/([^/\\?#]+)\.js(?:[?#]|$)/);
    id = m ? decodeURIComponent(m[1]) : null;
  }
  if (!id) { if (typeof console !== "undefined") console.warn("registerDetail: could not determine course id"); return; }
  window.KM_DETAILS[id] = obj;
  const waiters = window.__kmDetailWaiters[id];
  if (waiters) {
    delete window.__kmDetailWaiters[id];
    for (const cb of waiters) cb(obj);
  }
}

// A tagged reference. opts: { url, type, free }.
//   type  — "textbook" | "lectures" | "video" | "notes" | "problems" |
//           "interactive" | "reference" (free-form; shown as a chip)
//   free  — true if the resource is freely/legally available online
function res(t, by, opts) {
  opts = opts || {};
  return { t: t, by: by, url: opts.url || null, type: opts.type || null, free: !!opts.free };
}
