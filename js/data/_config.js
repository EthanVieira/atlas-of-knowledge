/* ============================================================================
 *  KNOWLEDGE MAP — SHARED CONFIG
 * ----------------------------------------------------------------------------
 *  To add a whole new discipline: add a key here (label + an HSL hue for its
 *  accent color + border), then create js/data/<field>.js and list it in
 *  index.html. To add a subject: edit the relevant js/data/<field>.js file.
 * ==========================================================================*/

// Fields belong to families (natural sciences, applied sciences, social sciences,
// humanities). Their order here sets the left to right lane order in the graph, so
// related disciplines sit next to each other, and each family is given its own
// hue arc so members look visually related. Each field needs a label, a short 
// `abbr` for the node badge, an HSL `hue`, and its `family`.
var FIELDS = {
  // --- Natural & formal sciences — greens & teals ---
  mathematics:      { label: "Mathematics",           abbr: "MATH",  family: "sciences",    hue: 96  },
  physics:          { label: "Physics",               abbr: "PHYS",  family: "sciences",    hue: 120 },
  chemistry:        { label: "Chemistry",             abbr: "CHEM",  family: "sciences",    hue: 150 },
  earthscience:     { label: "Earth Science",         abbr: "EASC",  family: "sciences",    hue: 161 },
  biology:          { label: "Biology",               abbr: "BIO",   family: "sciences",    hue: 172 },
  cs:               { label: "Computer Science",      abbr: "CS",    family: "sciences",    hue: 190 },

  // --- Applied sciences (engineering & medicine) — blues & indigo ---
  matsci:           { label: "Materials Science",     abbr: "MATSE", family: "applied",     hue: 205 },
  mecheng:          { label: "Mechanical Eng.",       abbr: "MECH",  family: "applied",     hue: 215 },
  eleceng:          { label: "Electrical Eng.",       abbr: "EE",    family: "applied",     hue: 225 },
  civileng:         { label: "Civil Eng.",            abbr: "CIVE",  family: "applied",     hue: 235 },
  architecture:     { label: "Architecture",          abbr: "ARCH",  family: "applied",     hue: 240 },
  chemeng:          { label: "Chemical Eng.",         abbr: "CHE",   family: "applied",     hue: 245 },
  nucleng:          { label: "Nuclear Eng.",          abbr: "NUCE",  family: "applied",     hue: 250 },
  aeroeng:          { label: "Aerospace Eng.",        abbr: "AERO",  family: "applied",     hue: 255 },
  agriculture:      { label: "Agriculture",           abbr: "AGRI",  family: "applied",     hue: 260 },
  bioeng:           { label: "Biomedical Eng.",       abbr: "BME",   family: "applied",     hue: 266 },
  medicine:         { label: "Medicine",              abbr: "MED",   family: "applied",     hue: 269 },
  indeng:           { label: "Industrial Eng.",       abbr: "IE",    family: "applied",     hue: 272 },

  // --- Social sciences — violets & purples ---
  economics:        { label: "Economics",             abbr: "ECON",  family: "social",      hue: 278 },
  business:         { label: "Business",              abbr: "BUS",   family: "social",      hue: 283 },
  finance:          { label: "Finance",               abbr: "FIN",   family: "social",      hue: 286 },
  psychology:       { label: "Psychology",            abbr: "PSYC",  family: "social",      hue: 289 },
  sociology:        { label: "Sociology",             abbr: "SOC",   family: "social",      hue: 300 },
  politicalscience: { label: "Political Science",     abbr: "POLS",  family: "social",      hue: 311 },
  anthropology:     { label: "Anthropology",          abbr: "ANTH",  family: "social",      hue: 322 },
  linguistics:      { label: "Linguistics",           abbr: "LING",  family: "social",      hue: 331 },
  geography:        { label: "Geography",              abbr: "GEOG",  family: "social",      hue: 337 },

  // --- Humanities — warm rose → red → orange ---
  philosophy:       { label: "Philosophy",            abbr: "PHIL",  family: "humanities",  hue: 343 },
  history:          { label: "History",               abbr: "HIST",  family: "humanities",  hue: 351 },
  litstudies:       { label: "Literary Studies",      abbr: "LIT",   family: "humanities",  hue: 359 },
  theology:         { label: "Theology & Religion",   abbr: "THEO",  family: "humanities",  hue: 7   },
  law:              { label: "Law",                   abbr: "LAW",   family: "humanities",  hue: 15  },
  performingarts:   { label: "Performing Arts",       abbr: "PERF",  family: "humanities",  hue: 23  },
  visualarts:       { label: "Visual Arts",           abbr: "ART",   family: "humanities",  hue: 31  },
  culinary:         { label: "Culinary Arts",         abbr: "CULA",  family: "humanities",  hue: 37  },
};

// Family display order & labels for the legend sections.
var FAMILIES = [
  { key: "sciences",    label: "Natural & Formal Sciences" },
  { key: "applied",     label: "Applied Sciences" },
  { key: "social",      label: "Social Sciences" },
  { key: "humanities",  label: "Humanities" },
];

// Depth zones for the radial layout: distance from the core = how far into a
// prerequisite chain a course sits. Each zone gets a hue used for its concentric
// guide ring (in the graph) and its legend swatch. Order = inner → outer.
var ZONES = [
  { label: "Foundations",  hue: 168, desc: "Entry points — little or no prerequisites (inner rings)." },
  { label: "Intermediate", hue: 43,  desc: "Builds on the foundations (middle rings)." },
  { label: "Advanced",     hue: 338, desc: "Capstones with deep prerequisite chains (outer rings)." },
];

function R(t, by, url) { return { t: t, by: by, url: url || null }; }

// The global registry. Each field file calls registerCourses([...]).
window.KNOWLEDGE_MAP = { FIELDS: FIELDS, FAMILIES: FAMILIES, ZONES: ZONES, COURSES: [] };

function registerCourses(list) {
  var arr = window.KNOWLEDGE_MAP.COURSES;
  for (var i = 0; i < list.length; i++) arr.push(list[i]);
}
