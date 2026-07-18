/* ============================================================================
 *  VISUAL ARTS
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/visualarts/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Art history, theory & the museum ----------------------------------
  { id: "art-history", title: "Art History", field: "visualarts", detail: true, requires: [] },
  { id: "modern-art", title: "Modern Art", field: "visualarts", detail: true, requires: ["art-history"] },
  { id: "art-criticism", title: "Art Theory & Criticism", field: "visualarts", detail: true, requires: ["art-history", "critical-theory"] },
  { id: "contemporary-art", title: "Contemporary Art", field: "visualarts", detail: true, requires: ["art-criticism"] },
  { id: "visual-culture", title: "Visual Culture & Studies", field: "visualarts", detail: true, requires: ["art-criticism"] },
  { id: "non-western-art", title: "Non-Western & Global Art", field: "visualarts", detail: true, requires: ["art-history"] },
  { id: "architectural-history", title: "History & Theory of Architecture", field: "visualarts", detail: true, requires: ["art-history"] },
  { id: "museum-studies", title: "Museum Studies & Curation", field: "visualarts", detail: true, requires: ["art-history"] },
  { id: "art-conservation", title: "Art Conservation", field: "visualarts", detail: true, requires: ["art-history", "general-chemistry"] },

  // --- Studio: drawing, painting & the printed/photographic image --------
  { id: "drawing-painting", title: "Drawing & Painting", field: "visualarts", detail: true, requires: [] },
  { id: "color-theory", title: "Color Theory", field: "visualarts", detail: true, requires: ["drawing-painting"] },
  { id: "figure-drawing", title: "Figure Drawing & Anatomy for Artists", field: "visualarts", detail: true, requires: ["drawing-painting"] },
  { id: "painting-media", title: "Painting Media & Techniques", field: "visualarts", detail: true, requires: ["color-theory"] },
  { id: "printmaking", title: "Printmaking", field: "visualarts", detail: true, requires: ["drawing-painting"] },
  { id: "illustration", title: "Illustration", field: "visualarts", detail: true, requires: ["drawing-painting", "design-principles"] },
  { id: "photography", title: "Photography", field: "visualarts", detail: true, requires: [] },
  { id: "photojournalism", title: "Photojournalism & Documentary", field: "visualarts", detail: true, requires: ["photography"] },

  // --- Studio: three dimensions ------------------------------------------
  { id: "sculpture", title: "Sculpture & 3D Form", field: "visualarts", detail: true, requires: ["drawing-painting"] },
  { id: "ceramics-art", title: "Ceramics (Studio Art)", field: "visualarts", detail: true, requires: ["sculpture"] },

  // --- Design ------------------------------------------------------------
  { id: "design-principles", title: "Design Principles", field: "visualarts", detail: true, requires: [] },
  { id: "graphic-design", title: "Graphic Design", field: "visualarts", detail: true, requires: ["design-principles"] },
  { id: "typography", title: "Typography", field: "visualarts", detail: true, requires: ["graphic-design"] },
  { id: "industrial-design", title: "Industrial & Product Design", field: "visualarts", detail: true, requires: ["design-principles"] },
  { id: "fashion-design", title: "Fashion & Textile Design", field: "visualarts", detail: true, requires: ["design-principles"] },
  { id: "ux-design", title: "UX & Interaction Design", field: "visualarts", detail: true, requires: ["digital-media-art"] },

  // --- Digital, new media & motion ---------------------------------------
  { id: "digital-media-art", title: "Digital & New Media Art", field: "visualarts", detail: true, requires: ["design-principles", "computer-graphics"] },
  { id: "motion-graphics", title: "Motion Graphics", field: "visualarts", detail: true, requires: ["graphic-design", "digital-media-art"] },
  { id: "3d-modeling-animation", title: "3D Modeling & Animation", field: "visualarts", detail: true, requires: ["digital-media-art"] },

]);
