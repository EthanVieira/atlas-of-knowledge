/* ============================================================================
 *  PERFORMING ARTS
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/performingarts/<id>.js; the
 *  `detail: true` flag tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Music: theory & analysis ------------------------------------------
  { id: "music-theory", title: "Music Theory", field: "performingarts", detail: true, requires: [] },
  { id: "counterpoint", title: "Counterpoint", field: "performingarts", detail: true, requires: ["music-theory"] },
  { id: "form-and-analysis", title: "Musical Form & Analysis", field: "performingarts", detail: true, requires: ["music-theory"] },
  { id: "jazz-studies", title: "Jazz Theory & Improvisation", field: "performingarts", detail: true, requires: ["music-theory"] },

  // --- Music: history & scholarship --------------------------------------
  { id: "music-history", title: "Music History", field: "performingarts", detail: true, requires: ["music-theory"] },
  { id: "musicology", title: "Musicology", field: "performingarts", detail: true, requires: ["music-history"] },
  { id: "ethnomusicology", title: "Ethnomusicology", field: "performingarts", detail: true, requires: ["music-theory", "cultural-anthropology"] },
  { id: "popular-music-studies", title: "Popular Music Studies", field: "performingarts", detail: true, requires: ["music-history"] },
  { id: "music-cognition", title: "Music Cognition & Psychology", field: "performingarts", detail: true, requires: ["music-theory", "cognitive-psychology"] },

  // --- Music: creation & performance -------------------------------------
  { id: "music-composition", title: "Composition & Orchestration", field: "performingarts", detail: true, requires: ["music-theory"] },
  { id: "performance-practice", title: "Performance & Interpretation", field: "performingarts", detail: true, requires: ["music-theory"] },
  { id: "conducting", title: "Conducting", field: "performingarts", detail: true, requires: ["performance-practice"] },
  { id: "opera-studies", title: "Opera & Musical Theatre", field: "performingarts", detail: true, requires: ["music-history", "theatre-studies"] },

  // --- Music: technology --------------------------------------------------
  { id: "music-technology", title: "Music Technology", field: "performingarts", detail: true, requires: ["music-theory", "digital-signal-processing"] },
  { id: "audio-engineering", title: "Audio Engineering & Production", field: "performingarts", detail: true, requires: ["music-technology"] },

  // --- Theatre -----------------------------------------------------------
  { id: "theatre-studies", title: "Theatre Studies", field: "performingarts", detail: true, requires: [] },
  { id: "acting-directing", title: "Acting & Directing", field: "performingarts", detail: true, requires: ["theatre-studies"] },
  { id: "playwriting", title: "Playwriting & Dramaturgy", field: "performingarts", detail: true, requires: ["theatre-studies", "creative-writing"] },
  { id: "scenography", title: "Scenography & Stage Design", field: "performingarts", detail: true, requires: ["theatre-studies", "design-principles"] },
  { id: "performance-studies", title: "Performance Studies", field: "performingarts", detail: true, requires: ["theatre-studies", "cultural-anthropology"] },

  // --- Dance -------------------------------------------------------------
  { id: "dance-studies", title: "Dance Studies", field: "performingarts", detail: true, requires: [] },
  { id: "choreography", title: "Choreography", field: "performingarts", detail: true, requires: ["dance-studies"] },
  { id: "dance-history", title: "Dance History", field: "performingarts", detail: true, requires: ["dance-studies"] },

  // --- Film & screen -----------------------------------------------------
  { id: "film-studies", title: "Film Studies", field: "performingarts", detail: true, requires: [] },
  { id: "cinematography", title: "Cinematography & Film Production", field: "performingarts", detail: true, requires: ["film-studies"] },
  { id: "screenwriting", title: "Screenwriting", field: "performingarts", detail: true, requires: ["film-studies", "creative-writing"] },
  { id: "film-theory", title: "Film Theory", field: "performingarts", detail: true, requires: ["film-studies", "critical-theory"] },

]);
