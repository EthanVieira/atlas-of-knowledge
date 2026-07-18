/* ============================================================================
 *  ARCHITECTURE
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/architecture/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it. Architecture bridges art and
 *  engineering: its structures come from civil eng and physics, its design
 *  from the visual arts, its computation from CS.
 * ==========================================================================*/
registerCourses([

  // --- Design core -------------------------------------------------------
  { id: "architecture-intro", title: "Introduction to Architecture", field: "architecture", detail: true, requires: [] },
  { id: "architectural-drawing", title: "Architectural Drawing & Representation", field: "architecture", detail: true, requires: ["architecture-intro", "drawing-painting"] },
  { id: "architectural-design-studio", title: "Architectural Design Studio", field: "architecture", detail: true, requires: ["architecture-intro", "design-principles"] },
  { id: "building-construction", title: "Building Construction & Materials", field: "architecture", detail: true, requires: ["architecture-intro"] },

  // --- Building science & technology -------------------------------------
  { id: "architectural-structures", title: "Structural Systems for Architecture", field: "architecture", detail: true, requires: ["architecture-intro", "statics"] },
  { id: "building-environmental-systems", title: "Environmental Systems & Building Physics", field: "architecture", detail: true, requires: ["building-construction", "thermodynamics"] },
  { id: "architectural-acoustics-lighting", title: "Architectural Lighting & Acoustics", field: "architecture", detail: true, requires: ["building-environmental-systems"] },
  { id: "sustainable-design", title: "Sustainable & Green Building Design", field: "architecture", detail: true, requires: ["building-environmental-systems"] },
  { id: "building-information-modeling", title: "BIM & Digital Practice", field: "architecture", detail: true, requires: ["architectural-drawing"] },
  { id: "parametric-design", title: "Parametric & Computational Design", field: "architecture", detail: true, requires: ["architectural-design-studio", "programming-fundamentals"] },
  { id: "digital-fabrication", title: "Digital Fabrication & Tectonics", field: "architecture", detail: true, requires: ["building-construction", "parametric-design"] },
  { id: "architectural-visualization", title: "Architectural Visualization & Rendering", field: "architecture", detail: true, requires: ["building-information-modeling"] },

  // --- Urban, landscape & specialized ------------------------------------
  { id: "urban-design", title: "Urban Design", field: "architecture", detail: true, requires: ["architectural-design-studio"] },
  { id: "urban-planning", title: "Urban & Regional Planning", field: "architecture", detail: true, requires: ["urban-design", "urban-sociology"] },
  { id: "landscape-architecture", title: "Landscape Architecture", field: "architecture", detail: true, requires: ["architectural-design-studio"] },
  { id: "interior-architecture", title: "Interior Architecture & Design", field: "architecture", detail: true, requires: ["architectural-design-studio"] },
  { id: "housing", title: "Housing & Community Design", field: "architecture", detail: true, requires: ["urban-design"] },
  { id: "site-planning", title: "Site Planning & Analysis", field: "architecture", detail: true, requires: ["architectural-design-studio"] },

  // --- History, preservation & profession --------------------------------
  { id: "vernacular-architecture", title: "Vernacular & World Architecture", field: "architecture", detail: true, requires: ["architectural-history"] },
  { id: "historic-preservation", title: "Historic Preservation", field: "architecture", detail: true, requires: ["architectural-history", "building-construction"] },
  { id: "architectural-professional-practice", title: "Architectural Professional Practice", field: "architecture", detail: true, requires: ["architectural-design-studio", "building-construction"] },

]);
