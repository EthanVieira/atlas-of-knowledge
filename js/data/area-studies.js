/* ============================================================================
 *  AREA STUDIES
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/areastudies/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it. Area studies is the interdisciplinary,
 *  region-focused study of the world's peoples and places. Because it cuts
 *  across disciplines by region, it cross-links into history (`world-history`),
 *  literary studies (`comparative-literature`), sociology, political science
 *  and theology (`comparative-religion`) rather than repeating them.
 * ==========================================================================*/
registerCourses([

  // --- Foundations & theory ----------------------------------------------
  { id: "intro-area-studies", title: "Introduction to Area Studies", field: "areastudies", detail: true, requires: ["world-history"] },
  { id: "area-studies-theory", title: "Theory & Method of Area Studies", field: "areastudies", detail: true, requires: ["intro-area-studies"] },
  { id: "postcolonial-orientalism", title: "Orientalism & Postcolonial Studies", field: "areastudies", detail: true, requires: ["intro-area-studies", "comparative-literature"] },
  { id: "global-transnational-studies", title: "Global & Transnational Studies", field: "areastudies", detail: true, requires: ["intro-area-studies"] },
  { id: "comparative-area-methods", title: "Comparative & Regional Research Methods", field: "areastudies", detail: true, requires: ["area-studies-theory", "social-research-methods"] },

  // --- World regions ------------------------------------------------------
  { id: "east-asian-studies", title: "East Asian Studies", field: "areastudies", detail: true, requires: ["intro-area-studies"] },
  { id: "southeast-asian-studies", title: "Southeast Asian Studies", field: "areastudies", detail: true, requires: ["intro-area-studies"] },
  { id: "south-asian-studies", title: "South Asian Studies", field: "areastudies", detail: true, requires: ["intro-area-studies"] },
  { id: "central-asian-studies", title: "Central & Inner Asian Studies", field: "areastudies", detail: true, requires: ["intro-area-studies"] },
  { id: "middle-eastern-studies", title: "Middle Eastern & North African Studies", field: "areastudies", detail: true, requires: ["intro-area-studies"] },
  { id: "african-studies", title: "African Studies", field: "areastudies", detail: true, requires: ["intro-area-studies"] },
  { id: "latin-american-studies", title: "Latin American & Caribbean Studies", field: "areastudies", detail: true, requires: ["intro-area-studies"] },
  { id: "european-studies", title: "European Studies", field: "areastudies", detail: true, requires: ["intro-area-studies"] },
  { id: "russian-eurasian-studies", title: "Russian, East European & Eurasian Studies", field: "areastudies", detail: true, requires: ["intro-area-studies"] },

  // --- Thematic & comparative --------------------------------------------
  { id: "diaspora-migration-studies", title: "Diaspora & Migration Studies", field: "areastudies", detail: true, requires: ["intro-area-studies"] },
  { id: "borderlands-studies", title: "Borderlands & Frontier Studies", field: "areastudies", detail: true, requires: ["intro-area-studies"] },
  { id: "indigenous-studies", title: "Indigenous Studies", field: "areastudies", detail: true, requires: ["intro-area-studies"] },
  { id: "area-political-economy", title: "Comparative Regional Political Economy", field: "areastudies", detail: true, requires: ["intro-area-studies", "comparative-politics"] },
  { id: "area-studies-religion", title: "Religion & Region", field: "areastudies", detail: true, requires: ["intro-area-studies", "comparative-religion"] },
  { id: "area-studies-development", title: "Development in Regional Context", field: "areastudies", detail: true, requires: ["intro-area-studies", "development-politics"] },

  { id: "pacific-oceania-studies", title: "Pacific & Oceania Studies", field: "areastudies", detail: true, requires: ["intro-area-studies"] },
  { id: "north-american-studies", title: "North American Studies", field: "areastudies", detail: true, requires: ["intro-area-studies"] },
]);
