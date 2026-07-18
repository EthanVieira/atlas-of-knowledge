/* ============================================================================
 *  LITERARY STUDIES
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/litstudies/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Foundations & theory ----------------------------------------------
  { id: "literature", title: "Literary Studies & Close Reading", field: "litstudies", detail: true, requires: [] },
  { id: "literary-theory", title: "Literary Theory", field: "litstudies", detail: true, requires: ["literature"] },
  { id: "critical-theory", title: "Critical Theory", field: "litstudies", detail: true, requires: ["literary-theory", "continental-philosophy"] },
  { id: "narrative-theory", title: "Narrative Theory", field: "litstudies", detail: true, requires: ["literature"] },

  // --- Craft & rhetoric --------------------------------------------------
  { id: "rhetoric-composition", title: "Rhetoric & Composition", field: "litstudies", detail: true, requires: ["literature"] },
  { id: "creative-writing", title: "Creative Writing", field: "litstudies", detail: true, requires: ["literature"] },

  // --- Genre & mode ------------------------------------------------------
  { id: "poetry-poetics", title: "Poetry & Poetics", field: "litstudies", detail: true, requires: ["literature"] },
  { id: "the-novel", title: "The Novel", field: "litstudies", detail: true, requires: ["narrative-theory"] },
  { id: "science-fiction-studies", title: "Science Fiction & Fantasy", field: "litstudies", detail: true, requires: ["modern-literature"] },

  // --- Periods -----------------------------------------------------------
  { id: "classical-literature", title: "Classical Literature", field: "litstudies", detail: true, requires: ["literature"] },
  { id: "medieval-literature", title: "Medieval Literature", field: "litstudies", detail: true, requires: ["literature"] },
  { id: "renaissance-literature", title: "Renaissance & Early Modern Literature", field: "litstudies", detail: true, requires: ["literature"] },
  { id: "shakespeare-studies", title: "Shakespeare", field: "litstudies", detail: true, requires: ["renaissance-literature"] },
  { id: "romanticism", title: "Romanticism", field: "litstudies", detail: true, requires: ["literature"] },
  { id: "modern-literature", title: "Modern & Contemporary Literature", field: "litstudies", detail: true, requires: ["literature"] },
  { id: "literary-modernism", title: "Literary Modernism", field: "litstudies", detail: true, requires: ["modern-literature"] },

  // --- Comparative & global ----------------------------------------------
  { id: "comparative-literature", title: "Comparative Literature", field: "litstudies", detail: true, requires: ["literature"] },
  { id: "world-literature", title: "World Literature", field: "litstudies", detail: true, requires: ["comparative-literature"] },
  { id: "translation-studies", title: "Translation Studies", field: "litstudies", detail: true, requires: ["comparative-literature"] },
  { id: "postcolonial-literature", title: "Postcolonial Literature & Theory", field: "litstudies", detail: true, requires: ["critical-theory"] },

  // --- Critical approaches -----------------------------------------------
  { id: "feminist-criticism", title: "Feminist & Gender Criticism", field: "litstudies", detail: true, requires: ["literary-theory"] },
  { id: "ecocriticism", title: "Ecocriticism & Environmental Humanities", field: "litstudies", detail: true, requires: ["critical-theory"] },

  // --- Text, book & tools ------------------------------------------------
  { id: "textual-criticism", title: "Textual Criticism & Book History", field: "litstudies", detail: true, requires: ["literature"] },
  { id: "digital-humanities", title: "Digital Humanities", field: "litstudies", detail: true, requires: ["literature", "programming-fundamentals"] },

]);
