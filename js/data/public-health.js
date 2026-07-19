/* ============================================================================
 *  PUBLIC HEALTH
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/publichealth/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it. Public health is the science and art of
 *  protecting and improving the health of populations. It builds on medicine
 *  (`public-health`, `epidemiology`, `infectious-disease`), statistics & data
 *  science (`biostatistics`), sociology, economics, public policy and culinary
 *  (`nutrition`) rather than repeating them.
 * ==========================================================================*/
registerCourses([

  // --- Core disciplines ---------------------------------------------------
  { id: "epidemiologic-methods", title: "Epidemiologic Methods", field: "publichealth", detail: true, requires: ["epidemiology", "biostatistics"] },
  { id: "environmental-health", title: "Environmental Health", field: "publichealth", detail: true, requires: ["public-health"] },
  { id: "social-behavioral-health", title: "Social & Behavioral Health", field: "publichealth", detail: true, requires: ["public-health"] },
  { id: "health-systems-management", title: "Health Systems & Management", field: "publichealth", detail: true, requires: ["public-health"] },
  { id: "global-health", title: "Global Health", field: "publichealth", detail: true, requires: ["public-health"] },

  // --- Epidemiology applications -----------------------------------------
  { id: "infectious-disease-epidemiology", title: "Infectious Disease Epidemiology", field: "publichealth", detail: true, requires: ["epidemiologic-methods", "infectious-disease"] },
  { id: "chronic-disease-epidemiology", title: "Chronic Disease Epidemiology", field: "publichealth", detail: true, requires: ["epidemiologic-methods"] },
  { id: "outbreak-investigation", title: "Outbreak Investigation & Field Epidemiology", field: "publichealth", detail: true, requires: ["epidemiologic-methods"] },
  { id: "public-health-surveillance", title: "Public Health Surveillance", field: "publichealth", detail: true, requires: ["epidemiologic-methods"] },

  // --- Determinants & populations ----------------------------------------
  { id: "social-determinants-health", title: "Social Determinants of Health", field: "publichealth", detail: true, requires: ["social-behavioral-health", "medical-sociology"] },
  { id: "health-promotion", title: "Health Promotion & Education", field: "publichealth", detail: true, requires: ["social-behavioral-health"] },
  { id: "maternal-child-health", title: "Maternal & Child Health", field: "publichealth", detail: true, requires: ["epidemiologic-methods"] },
  { id: "public-health-nutrition", title: "Public Health Nutrition", field: "publichealth", detail: true, requires: ["public-health", "nutrition"] },
  { id: "occupational-health", title: "Occupational Health & Safety", field: "publichealth", detail: true, requires: ["environmental-health"] },

  // --- Systems, economics, policy & global -------------------------------
  { id: "health-economics", title: "Health Economics", field: "publichealth", detail: true, requires: ["health-systems-management", "microeconomics"] },
  { id: "health-policy-advocacy", title: "Health Policy & Advocacy", field: "publichealth", detail: true, requires: ["health-systems-management", "health-policy"] },
  { id: "global-health-security", title: "Global Health Security & Pandemic Preparedness", field: "publichealth", detail: true, requires: ["global-health", "infectious-disease-epidemiology"] },
  { id: "planetary-health", title: "Planetary Health & One Health", field: "publichealth", detail: true, requires: ["environmental-health"] },
  { id: "public-health-ethics", title: "Public Health Ethics & Law", field: "publichealth", detail: true, requires: ["public-health"] },
  { id: "program-planning-evaluation", title: "Program Planning & Evaluation", field: "publichealth", detail: true, requires: ["social-behavioral-health"] },

]);
