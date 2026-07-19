/* ============================================================================
 *  KNOWLEDGE MAP — SHARED CONFIG
 * ----------------------------------------------------------------------------
 *  To add a whole new discipline: add a key here (label + an HSL hue for its
 *  accent color + border), then create js/data/<field>.js and list it in
 *  index.html. To add a subject: edit the relevant js/data/<field>.js file.
 * ==========================================================================*/

// Fields belong to families (natural & formal sciences, engineering & technology,
// health & life sciences, social sciences, humanities, arts & design). Their order
// here sets the left to right lane order in the graph, so related disciplines sit
// next to each other, and each family is given its own hue arc so members look
// visually related. Each field needs a label, a short `abbr` for the node badge,
// an HSL `hue`, and its `family`.
var FIELDS = {
  // --- Natural & formal sciences — greens & teals ---
  mathematics:      { label: "Mathematics",           abbr: "MATH",  family: "sciences",    hue: 96  },
  physics:          { label: "Physics",               abbr: "PHYS",  family: "sciences",    hue: 120 },
  chemistry:        { label: "Chemistry",             abbr: "CHEM",  family: "sciences",    hue: 150 },
  earthscience:     { label: "Earth Science",         abbr: "EASC",  family: "sciences",    hue: 161 },
  biology:          { label: "Biology",               abbr: "BIO",   family: "sciences",    hue: 172 },
  datascience:      { label: "Statistics & Data Science", abbr: "STAT", family: "sciences",  hue: 181 },
  cs:               { label: "Computer Science",      abbr: "CS",    family: "sciences",    hue: 190 },

  // --- Engineering & technology — blues & indigo ---
  matsci:           { label: "Materials Science",     abbr: "MATSE", family: "engineering", hue: 205 },
  mecheng:          { label: "Mechanical Eng.",       abbr: "MECH",  family: "engineering", hue: 211 },
  eleceng:          { label: "Electrical Eng.",       abbr: "EE",    family: "engineering", hue: 217 },
  civileng:         { label: "Civil Eng.",            abbr: "CIVE",  family: "engineering", hue: 223 },
  architecture:     { label: "Architecture",          abbr: "ARCH",  family: "engineering", hue: 228 },
  chemeng:          { label: "Chemical Eng.",         abbr: "CHE",   family: "engineering", hue: 233 },
  nucleng:          { label: "Nuclear Eng.",          abbr: "NUCE",  family: "engineering", hue: 238 },
  aeroeng:          { label: "Aerospace Eng.",        abbr: "AERO",  family: "engineering", hue: 244 },
  bioeng:           { label: "Biomedical Eng.",       abbr: "BME",   family: "engineering", hue: 249 },
  indeng:           { label: "Industrial Eng.",       abbr: "IE",    family: "engineering", hue: 253 },
  militaryscience:  { label: "Military Science",      abbr: "MIL",   family: "engineering", hue: 257 },

  // --- Health & life sciences — indigo → blue-violet ---
  agriculture:      { label: "Agriculture",           abbr: "AGRI",  family: "healthlife",  hue: 262 },
  medicine:         { label: "Medicine",              abbr: "MED",   family: "healthlife",  hue: 266 },
  nursing:          { label: "Nursing",               abbr: "NURS",  family: "healthlife",  hue: 269 },
  publichealth:     { label: "Public Health",         abbr: "PUBH",  family: "healthlife",  hue: 271 },
  sportsscience:    { label: "Sports Science",        abbr: "SPRT",  family: "healthlife",  hue: 274 },

  // --- Social sciences — violets & purples ---
  economics:        { label: "Economics",             abbr: "ECON",  family: "social",      hue: 278 },
  business:         { label: "Business",              abbr: "BUS",   family: "social",      hue: 283 },
  finance:          { label: "Finance",               abbr: "FIN",   family: "social",      hue: 286 },
  psychology:       { label: "Psychology",            abbr: "PSYC",  family: "social",      hue: 289 },
  education:        { label: "Education",              abbr: "EDUC",  family: "social",      hue: 295 },
  socialwork:       { label: "Social Work",           abbr: "SOCW",  family: "social",      hue: 298 },
  sociology:        { label: "Sociology",             abbr: "SOC",   family: "social",      hue: 300 },
  communication:    { label: "Media & Communication", abbr: "COMM",  family: "social",      hue: 305 },
  politicalscience: { label: "Political Science",     abbr: "POLS",  family: "social",      hue: 311 },
  publicpolicy:     { label: "Public Policy & Admin.", abbr: "PPA",   family: "social",     hue: 316 },
  anthropology:     { label: "Anthropology",          abbr: "ANTH",  family: "social",      hue: 322 },
  linguistics:      { label: "Linguistics",           abbr: "LING",  family: "social",      hue: 331 },
  geography:        { label: "Geography",              abbr: "GEOG",  family: "social",      hue: 337 },

  // --- Humanities — warm rose → red ---
  philosophy:       { label: "Philosophy",            abbr: "PHIL",  family: "humanities",  hue: 343 },
  history:          { label: "History",               abbr: "HIST",  family: "humanities",  hue: 351 },
  librarymuseum:    { label: "Library & Museum Studies", abbr: "LMS", family: "humanities",  hue: 355 },
  litstudies:       { label: "Literary Studies",      abbr: "LIT",   family: "humanities",  hue: 359 },
  theology:         { label: "Theology & Religion",   abbr: "THEO",  family: "humanities",  hue: 7   },
  law:              { label: "Law",                   abbr: "LAW",   family: "humanities",  hue: 15  },

  // --- Arts & design — orange ---
  performingarts:   { label: "Performing Arts",       abbr: "PERF",  family: "artsdesign",  hue: 23  },
  visualarts:       { label: "Visual Arts",           abbr: "ART",   family: "artsdesign",  hue: 31  },
  culinary:         { label: "Culinary Arts",         abbr: "CULA",  family: "artsdesign",  hue: 37  },
};

// Family display order & labels for the legend sections.
var FAMILIES = [
  { key: "sciences",    label: "Natural & Formal Sciences" },
  { key: "engineering", label: "Engineering & Technology" },
  { key: "healthlife",  label: "Health & Life Sciences" },
  { key: "social",      label: "Social Sciences" },
  { key: "humanities",  label: "Humanities" },
  { key: "artsdesign",  label: "Arts & Design" },
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
