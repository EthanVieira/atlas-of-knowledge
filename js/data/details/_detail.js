/* ============================================================================
 *  COURSE DETAIL LAYER  (lazy-loaded)
 * ----------------------------------------------------------------------------
 *  Rich content for a course card — long description, full topic list, split &
 *  tagged references, and a generated cover image — lives in one file per
 *  course, grouped into a subfolder per field (js/data/details/<field>/). Those
 *  files are NOT listed in index.html; the renderer injects them on demand the
 *  first time a card is opened (see loadDetail() in graph.js). This file holds
 *  the small shared runtime they need: the registry, a resource helper, and the
 *  cover-image generator.
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

function escapeXml(s) {
  return String(s).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" }[c]));
}

// --- Cover image generator ------------------------------------------------
// Builds a themed SVG "book cover" as a data URI: a gradient in the field's
// hue, a faint mathematical motif, and the course title. Kept parametric so a
// detail file is a one-liner: cover(hue, "Title", "curve", "Mathematics").
const KM_MOTIFS = {
  curve: s => `<g fill="none" stroke="${s}" opacity="0.6">
      <path d="M330 175 H612 M360 205 V35" stroke-width="1" opacity="0.3"/>
      <path d="M348 170 C 430 60, 468 60, 500 112 S 560 182, 606 92" stroke-width="2.6"/>
      <line x1="452" y1="150" x2="588" y2="66" stroke-width="1.4" opacity="0.5"/>
      <circle cx="516" cy="110" r="5" fill="${s}" stroke="none"/>
    </g>`,
  vectors: s => `<g stroke="${s}" fill="none">
      <g stroke-width="1" opacity="0.35">
        <path d="M330 45 H612 M330 85 H612 M330 125 H612 M330 165 H612 M330 205 H612"/>
        <path d="M370 25 V215 M420 25 V215 M470 25 V215 M520 25 V215 M570 25 V215"/>
      </g>
      <g stroke-width="3.2" opacity="0.9">
        <line x1="470" y1="150" x2="566" y2="92"/>
        <line x1="470" y1="150" x2="506" y2="58"/>
      </g>
    </g>`,
  waves: s => `<g fill="none" stroke="${s}">
      <path d="M330 118 q 20 -52 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0" stroke-width="2.6" opacity="0.7"/>
      <path d="M330 118 q 20 -30 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0" stroke-width="1.6" opacity="0.4"/>
      <path d="M330 118 q 20 -12 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0" stroke-width="1" opacity="0.28"/>
    </g>`,
  orbit: s => {
    let dots = "";
    for (let i = 0; i < 6; i++) {
      const a = -Math.PI / 2 + i * Math.PI / 3;
      dots += `<circle cx="${(480 + 72 * Math.cos(a)).toFixed(0)}" cy="${(112 + 72 * Math.sin(a)).toFixed(0)}" r="6.5" fill="${s}" stroke="none"/>`;
    }
    return `<g fill="none" stroke="${s}" opacity="0.6">
      <circle cx="480" cy="112" r="72" stroke-width="2"/>
      <circle cx="480" cy="112" r="44" stroke-width="1" opacity="0.4"/>${dots}</g>`;
  },
  network: s => {
    const p = [[362, 62], [468, 40], [566, 84], [402, 156], [512, 176], [594, 138]];
    const e = [[0, 1], [1, 2], [0, 3], [1, 4], [3, 4], [4, 5], [2, 5], [1, 3]];
    const lines = e.map(([a, b]) =>
      `<line x1="${p[a][0]}" y1="${p[a][1]}" x2="${p[b][0]}" y2="${p[b][1]}"/>`).join("");
    const nodes = p.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6.5" fill="${s}" stroke="none"/>`).join("");
    return `<g stroke="${s}"><g stroke-width="1.6" opacity="0.5">${lines}</g>${nodes}</g>`;
  },
};

function cover(hue, title, motif, eyebrow) {
  const W = 640, H = 240;
  const s = `hsl(${hue} 70% 82%)`;
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">` +
    `<defs>` +
      `<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
        `<stop offset="0" stop-color="hsl(${hue} 44% 15%)"/>` +
        `<stop offset="1" stop-color="hsl(${hue} 40% 31%)"/>` +
      `</linearGradient>` +
      `<radialGradient id="v" cx="0.72" cy="0.15" r="0.9">` +
        `<stop offset="0" stop-color="hsl(${hue} 65% 58%)" stop-opacity="0.4"/>` +
        `<stop offset="1" stop-color="hsl(${hue} 65% 58%)" stop-opacity="0"/>` +
      `</radialGradient>` +
    `</defs>` +
    `<rect width="${W}" height="${H}" fill="url(#g)"/>` +
    `<rect width="${W}" height="${H}" fill="url(#v)"/>` +
    (KM_MOTIFS[motif] ? KM_MOTIFS[motif](s) : "") +
    `<text x="30" y="${H - 66}" fill="hsl(${hue} 45% 84%)" font-family="Georgia,'Times New Roman',serif" font-size="16" letter-spacing="3" opacity="0.85">${escapeXml((eyebrow || "").toUpperCase())}</text>` +
    `<text x="28" y="${H - 26}" fill="#f4ecd6" font-family="Georgia,'Times New Roman',serif" font-size="38" font-weight="600">${escapeXml(title)}</text>` +
    `</svg>`;
  return "data:image/svg+xml," + encodeURIComponent(svg);
}
