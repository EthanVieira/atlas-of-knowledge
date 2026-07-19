/* ============================================================================
 *  LIBRARY & MUSEUM STUDIES
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/librarymuseum/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it. This is the study of collecting,
 *  organizing, preserving, and providing access to recorded knowledge and
 *  material culture across libraries, archives, and museums (the "GLAM"
 *  sector). It builds on computer science (databases), anthropology (material
 *  culture), visual arts (art history), history and law rather than repeating
 *  them.
 * ==========================================================================*/
registerCourses([

  // --- Foundations of library & information science ----------------------
  { id: "intro-library-information-science", title: "Foundations of Library & Information Science", field: "librarymuseum", detail: true, requires: [] },

  // --- Information organization & retrieval -------------------------------
  { id: "information-organization", title: "Organization of Information", field: "librarymuseum", detail: true, requires: ["intro-library-information-science"] },
  { id: "cataloging-classification", title: "Cataloging & Classification", field: "librarymuseum", detail: true, requires: ["information-organization"] },
  { id: "metadata", title: "Metadata", field: "librarymuseum", detail: true, requires: ["information-organization"] },
  { id: "information-retrieval-lis", title: "Information Retrieval & Search", field: "librarymuseum", detail: true, requires: ["information-organization"] },
  { id: "reference-information-services", title: "Reference & Information Services", field: "librarymuseum", detail: true, requires: ["intro-library-information-science"] },
  { id: "information-literacy", title: "Information Literacy Instruction", field: "librarymuseum", detail: true, requires: ["intro-library-information-science"] },

  // --- Libraries & collections -------------------------------------------
  { id: "collection-development", title: "Collection Development & Management", field: "librarymuseum", detail: true, requires: ["intro-library-information-science"] },
  { id: "library-management", title: "Library Management & Types of Libraries", field: "librarymuseum", detail: true, requires: ["intro-library-information-science"] },
  { id: "digital-libraries", title: "Digital Libraries", field: "librarymuseum", detail: true, requires: ["metadata", "databases"] },

  // --- Archives & records -------------------------------------------------
  { id: "archival-science", title: "Archival Science", field: "librarymuseum", detail: true, requires: ["intro-library-information-science"] },
  { id: "records-management", title: "Records Management", field: "librarymuseum", detail: true, requires: ["archival-science"] },

  // --- Preservation & conservation ---------------------------------------
  { id: "preservation-conservation", title: "Preservation of Library & Archival Materials", field: "librarymuseum", detail: true, requires: ["collection-development"] },
  { id: "digital-preservation", title: "Digital Preservation & Curation", field: "librarymuseum", detail: true, requires: ["preservation-conservation", "archival-science"] },

  // --- Museum studies -----------------------------------------------------
  { id: "museology", title: "Museum Studies (Museology)", field: "librarymuseum", detail: true, requires: ["intro-library-information-science"] },
  { id: "museum-collections-management", title: "Museum Collections Management", field: "librarymuseum", detail: true, requires: ["museology", "material-culture"] },
  { id: "curatorial-studies", title: "Curatorial Studies", field: "librarymuseum", detail: true, requires: ["museology", "art-history"] },
  { id: "exhibition-design", title: "Exhibition Design & Interpretation", field: "librarymuseum", detail: true, requires: ["curatorial-studies"] },
  { id: "museum-education", title: "Museum Education & Public Engagement", field: "librarymuseum", detail: true, requires: ["museology"] },
  { id: "heritage-studies", title: "Cultural Heritage Management", field: "librarymuseum", detail: true, requires: ["museology", "historiography"] },

  // --- Information policy & society ---------------------------------------
  { id: "information-policy", title: "Information Policy, Ethics & Society", field: "librarymuseum", detail: true, requires: ["intro-library-information-science", "intellectual-property-law"] },

  { id: "rare-books-special-collections", title: "Rare Books & Special Collections", field: "librarymuseum", detail: true, requires: ["collection-development", "archival-science"] },
  { id: "scholarly-communication", title: "Scholarly Communication & Bibliometrics", field: "librarymuseum", detail: true, requires: ["intro-library-information-science"] },
]);
