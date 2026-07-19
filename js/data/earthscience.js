/* ============================================================================
 *  EARTH SCIENCE
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/earthscience/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Foundations ---
  { id: "physical-geology", title: "Physical Geology", field: "earthscience", detail: true, requires: [] },
  { id: "historical-geology", title: "Historical Geology", field: "earthscience", detail: true, requires: ["physical-geology"] },
  { id: "mineralogy", title: "Mineralogy", field: "earthscience", detail: true, requires: ["physical-geology", "general-chemistry"] },

  // --- Petrology & the solid Earth ---
  { id: "igneous-metamorphic-petrology", title: "Igneous & Metamorphic Petrology", field: "earthscience", detail: true, requires: ["mineralogy"] },
  { id: "sedimentology-stratigraphy", title: "Sedimentology & Stratigraphy", field: "earthscience", detail: true, requires: ["historical-geology"] },
  { id: "structural-geology", title: "Structural Geology", field: "earthscience", detail: true, requires: ["physical-geology"] },
  { id: "geomorphology", title: "Geomorphology", field: "earthscience", detail: true, requires: ["physical-geology"] },

  // --- Geophysics ---
  { id: "geophysics", title: "Geophysics", field: "earthscience", detail: true, requires: ["physical-geology", "classical-mechanics"] },
  { id: "seismology", title: "Seismology", field: "earthscience", detail: true, requires: ["geophysics"] },
  { id: "plate-tectonics", title: "Plate Tectonics & Geodynamics", field: "earthscience", detail: true, requires: ["structural-geology", "geophysics"] },
  { id: "volcanology", title: "Volcanology", field: "earthscience", detail: true, requires: ["igneous-metamorphic-petrology", "geophysics"] },

  // --- Geochemistry ---
  { id: "geochemistry", title: "Geochemistry", field: "earthscience", detail: true, requires: ["mineralogy", "physical-chemistry"] },
  { id: "isotope-geochemistry", title: "Isotope Geochemistry & Geochronology", field: "earthscience", detail: true, requires: ["geochemistry"] },

  // --- Hydrosphere & surface ---
  { id: "hydrogeology", title: "Hydrogeology", field: "earthscience", detail: true, requires: ["physical-geology", "calculus-3"] },
  { id: "soil-science", title: "Soil Science", field: "earthscience", detail: true, requires: ["physical-geology", "general-chemistry"] },
  { id: "glaciology", title: "Glaciology", field: "earthscience", detail: true, requires: ["geomorphology", "thermodynamics"] },
  { id: "oceanography", title: "Oceanography", field: "earthscience", detail: true, requires: ["physical-geology", "calculus-3"] },
  { id: "marine-geology", title: "Marine Geology", field: "earthscience", detail: true, requires: ["oceanography", "sedimentology-stratigraphy"] },

  // --- Atmosphere & climate ---
  { id: "atmospheric-science", title: "Atmospheric Science", field: "earthscience", detail: true, requires: ["thermodynamics"] },
  { id: "climatology", title: "Climate Science", field: "earthscience", detail: true, requires: ["atmospheric-science", "oceanography"] },
  { id: "paleoclimatology", title: "Paleoclimatology", field: "earthscience", detail: true, requires: ["historical-geology", "climatology"] },

  // --- Life & resources ---
  { id: "paleontology", title: "Paleontology", field: "earthscience", detail: true, requires: ["historical-geology", "evolutionary-biology"] },
  { id: "economic-geology", title: "Economic Geology & Ore Deposits", field: "earthscience", detail: true, requires: ["igneous-metamorphic-petrology", "geochemistry"] },
  { id: "petroleum-geology", title: "Petroleum Geology", field: "earthscience", detail: true, requires: ["sedimentology-stratigraphy", "structural-geology"] },
  { id: "environmental-geology", title: "Environmental & Engineering Geology", field: "earthscience", detail: true, requires: ["geomorphology", "hydrogeology"] },

  // --- Planetary & methods ---
  { id: "planetary-geology", title: "Planetary Geology", field: "earthscience", detail: true, requires: ["igneous-metamorphic-petrology", "geophysics"] },
  { id: "remote-sensing-gis", title: "Remote Sensing & GIS", field: "earthscience", detail: true, requires: ["physical-geology"] },

  { id: "surface-hydrology", title: "Hydrology", field: "earthscience", detail: true, requires: ["physical-geology"] },
  { id: "geodesy", title: "Geodesy", field: "earthscience", detail: true, requires: ["geophysics"] },
]);
