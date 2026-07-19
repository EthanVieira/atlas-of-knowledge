/* ============================================================================
 *  AGRICULTURE
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/agriculture/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it. Agriculture is an applied science: it
 *  builds crop, animal and food systems on top of biology, chemistry, earth
 *  science, geography and economics rather than repeating them.
 * ==========================================================================*/
registerCourses([

  // --- Foundations --------------------------------------------------------
  { id: "intro-agriculture", title: "Introduction to Agriculture", field: "agriculture", detail: true, requires: [] },
  { id: "agronomy", title: "Agronomy & Crop Science", field: "agriculture", detail: true, requires: ["intro-agriculture"] },
  { id: "soil-fertility", title: "Soil Fertility & Plant Nutrition", field: "agriculture", detail: true, requires: ["agronomy", "soil-science"] },

  // --- Crop & plant science ----------------------------------------------
  { id: "crop-physiology", title: "Crop Physiology", field: "agriculture", detail: true, requires: ["agronomy", "plant-physiology"] },
  { id: "plant-breeding", title: "Plant Breeding & Genetics", field: "agriculture", detail: true, requires: ["agronomy", "genetics"] },
  { id: "plant-pathology", title: "Plant Pathology", field: "agriculture", detail: true, requires: ["agronomy", "microbiology"] },
  { id: "horticulture", title: "Horticulture", field: "agriculture", detail: true, requires: ["agronomy"] },
  { id: "pest-management", title: "Entomology & Pest Management", field: "agriculture", detail: true, requires: ["agronomy"] },

  // --- Animal science -----------------------------------------------------
  { id: "animal-science", title: "Animal Science", field: "agriculture", detail: true, requires: ["intro-agriculture", "physiology"] },
  { id: "animal-nutrition", title: "Animal Nutrition", field: "agriculture", detail: true, requires: ["animal-science"] },
  { id: "animal-breeding", title: "Animal Breeding & Genetics", field: "agriculture", detail: true, requires: ["animal-science", "genetics"] },
  { id: "veterinary-science", title: "Veterinary Science & Animal Health", field: "agriculture", detail: true, requires: ["animal-science"] },
  { id: "aquaculture", title: "Aquaculture", field: "agriculture", detail: true, requires: ["animal-science"] },

  // --- Resources & sustainability ----------------------------------------
  { id: "agroecology", title: "Agroecology", field: "agriculture", detail: true, requires: ["agronomy", "ecology"] },
  { id: "irrigation-water", title: "Irrigation & Water Management", field: "agriculture", detail: true, requires: ["agronomy"] },
  { id: "agroforestry", title: "Agroforestry", field: "agriculture", detail: true, requires: ["agroecology"] },

  // --- Technology ---------------------------------------------------------
  { id: "agricultural-engineering", title: "Agricultural Engineering", field: "agriculture", detail: true, requires: ["intro-agriculture"] },
  { id: "precision-agriculture", title: "Precision Agriculture", field: "agriculture", detail: true, requires: ["agronomy", "gis"] },
  { id: "agricultural-biotechnology", title: "Agricultural Biotechnology", field: "agriculture", detail: true, requires: ["plant-breeding", "molecular-biology"] },
  { id: "post-harvest", title: "Post-Harvest Technology & Food Systems", field: "agriculture", detail: true, requires: ["agronomy"] },

  // --- Economics & policy -------------------------------------------------
  { id: "agricultural-economics", title: "Agricultural Economics", field: "agriculture", detail: true, requires: ["intro-agriculture", "microeconomics"] },
  { id: "farm-management", title: "Farm Management", field: "agriculture", detail: true, requires: ["agricultural-economics"] },
  { id: "food-policy", title: "Food Policy & Security", field: "agriculture", detail: true, requires: ["agricultural-economics"] },

  { id: "weed-science", title: "Weed Science", field: "agriculture", detail: true, requires: ["agronomy"] },
  { id: "agricultural-extension", title: "Agricultural Extension & Rural Development", field: "agriculture", detail: true, requires: ["intro-agriculture"] },
  { id: "rangeland-management", title: "Rangeland & Pasture Management", field: "agriculture", detail: true, requires: ["agroecology"] },
]);
