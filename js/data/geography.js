/* ============================================================================
 *  GEOGRAPHY
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/geography/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it. Geography is the spatial bridge: its
 *  physical side reaches into earth science and biology, its human side into
 *  economics, sociology, political science and beyond.
 * ==========================================================================*/
registerCourses([

  // --- Foundations & spatial methods -------------------------------------
  { id: "geography-intro", title: "Introduction to Geography", field: "geography", detail: true, requires: [] },
  { id: "geographic-thought", title: "Geographic Thought & Theory", field: "geography", detail: true, requires: ["geography-intro"] },
  { id: "cartography", title: "Cartography & Map Design", field: "geography", detail: true, requires: ["geography-intro"] },
  { id: "gis", title: "Geographic Information Systems (GIS)", field: "geography", detail: true, requires: ["cartography"] },
  { id: "spatial-analysis", title: "Spatial Analysis & Geostatistics", field: "geography", detail: true, requires: ["gis", "statistics"] },
  { id: "geocomputation", title: "Geocomputation & Spatial Data Science", field: "geography", detail: true, requires: ["spatial-analysis", "programming-fundamentals"] },

  // --- Physical geography ------------------------------------------------
  { id: "physical-geography", title: "Physical Geography", field: "geography", detail: true, requires: ["geography-intro"] },
  { id: "biogeography", title: "Biogeography", field: "geography", detail: true, requires: ["physical-geography", "ecology"] },

  // --- Human geography ---------------------------------------------------
  { id: "human-geography", title: "Human Geography", field: "geography", detail: true, requires: ["geography-intro"] },
  { id: "population-geography", title: "Population Geography & Migration", field: "geography", detail: true, requires: ["human-geography", "statistics"] },
  { id: "economic-geography", title: "Economic Geography", field: "geography", detail: true, requires: ["human-geography", "microeconomics"] },
  { id: "urban-geography", title: "Urban Geography", field: "geography", detail: true, requires: ["human-geography", "urban-sociology"] },
  { id: "political-geography", title: "Political Geography & Geopolitics", field: "geography", detail: true, requires: ["human-geography", "political-science"] },
  { id: "cultural-geography", title: "Cultural Geography", field: "geography", detail: true, requires: ["human-geography", "cultural-anthropology"] },
  { id: "development-geography", title: "Geographies of Development", field: "geography", detail: true, requires: ["human-geography", "development-economics"] },
  { id: "health-geography", title: "Health & Medical Geography", field: "geography", detail: true, requires: ["human-geography", "epidemiology"] },

  // --- Environment, hazards & regional -----------------------------------
  { id: "environmental-geography", title: "Environmental Geography", field: "geography", detail: true, requires: ["physical-geography", "human-geography"] },
  { id: "climate-change-geography", title: "Geographies of Climate Change", field: "geography", detail: true, requires: ["climatology", "environmental-geography"] },
  { id: "hazards-geography", title: "Natural Hazards & Disaster Geography", field: "geography", detail: true, requires: ["physical-geography", "human-geography"] },
  { id: "conservation-geography", title: "Conservation & Biodiversity Geography", field: "geography", detail: true, requires: ["biogeography", "environmental-geography"] },
  { id: "regional-geography", title: "Regional Geography of the World", field: "geography", detail: true, requires: ["physical-geography", "human-geography"] },

]);
