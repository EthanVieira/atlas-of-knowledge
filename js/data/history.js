/* ============================================================================
 *  HISTORY
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/history/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Foundations & surveys ---------------------------------------------
  { id: "historiography", title: "Historiography & Method", field: "history", detail: true, requires: [] },
  { id: "world-history", title: "World History", field: "history", detail: true, requires: [] },

  // --- Chronological spine -----------------------------------------------
  { id: "ancient-history", title: "Ancient History", field: "history", detail: true, requires: ["world-history", "historiography"] },
  { id: "medieval-history", title: "Medieval History", field: "history", detail: true, requires: ["ancient-history"] },
  { id: "early-modern-history", title: "Early Modern History", field: "history", detail: true, requires: ["medieval-history"] },
  { id: "modern-history", title: "Modern History", field: "history", detail: true, requires: ["early-modern-history"] },

  // --- Thematic ----------------------------------------------------------
  { id: "economic-history", title: "Economic History", field: "history", detail: true, requires: ["modern-history", "microeconomics"] },
  { id: "history-of-science", title: "History of Science", field: "history", detail: true, requires: ["world-history", "philosophy-of-science"] },
  { id: "intellectual-history", title: "Intellectual History", field: "history", detail: true, requires: ["world-history", "intro-philosophy"] },
  { id: "cultural-history", title: "Cultural History", field: "history", detail: true, requires: ["intellectual-history"] },
  { id: "social-history", title: "Social History", field: "history", detail: true, requires: ["modern-history"] },
  { id: "gender-history", title: "Gender & Women's History", field: "history", detail: true, requires: ["social-history"] },
  { id: "military-history", title: "Military History", field: "history", detail: true, requires: ["modern-history"] },
  { id: "history-of-technology", title: "History of Technology", field: "history", detail: true, requires: ["history-of-science"] },
  { id: "history-of-medicine", title: "History of Medicine", field: "history", detail: true, requires: ["history-of-science"] },
  { id: "environmental-history", title: "Environmental History", field: "history", detail: true, requires: ["modern-history"] },
  { id: "global-history", title: "Global & World History", field: "history", detail: true, requires: ["economic-history"] },

  // --- Regional ----------------------------------------------------------
  { id: "american-history", title: "American History", field: "history", detail: true, requires: ["modern-history"] },
  { id: "european-history", title: "European History", field: "history", detail: true, requires: ["modern-history"] },
  { id: "east-asian-history", title: "East Asian History", field: "history", detail: true, requires: ["world-history"] },
  { id: "south-asian-history", title: "South Asian History", field: "history", detail: true, requires: ["world-history"] },
  { id: "middle-eastern-history", title: "Middle Eastern History", field: "history", detail: true, requires: ["medieval-history"] },
  { id: "african-history", title: "African History", field: "history", detail: true, requires: ["world-history"] },
  { id: "latin-american-history", title: "Latin American History", field: "history", detail: true, requires: ["early-modern-history"] },

]);
