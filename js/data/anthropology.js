/* ============================================================================
 *  ANTHROPOLOGY
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/anthropology/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Core & four fields ------------------------------------------------
  { id: "anthropology", title: "Introduction to Anthropology", field: "anthropology", detail: true, requires: [] },

  // --- Cultural anthropology ---------------------------------------------
  { id: "cultural-anthropology", title: "Cultural Anthropology", field: "anthropology", detail: true, requires: ["anthropology"] },
  { id: "ethnography", title: "Ethnographic Methods", field: "anthropology", detail: true, requires: ["cultural-anthropology"] },
  { id: "anthropological-theory", title: "Anthropological Theory", field: "anthropology", detail: true, requires: ["cultural-anthropology"] },
  { id: "kinship-social-organization", title: "Kinship & Social Organization", field: "anthropology", detail: true, requires: ["cultural-anthropology"] },
  { id: "anthropology-of-religion", title: "Anthropology of Religion", field: "anthropology", detail: true, requires: ["cultural-anthropology", "religious-studies"] },
  { id: "economic-anthropology", title: "Economic Anthropology", field: "anthropology", detail: true, requires: ["cultural-anthropology", "microeconomics"] },
  { id: "political-anthropology", title: "Political Anthropology", field: "anthropology", detail: true, requires: ["cultural-anthropology", "political-science"] },
  { id: "medical-anthropology", title: "Medical Anthropology", field: "anthropology", detail: true, requires: ["cultural-anthropology"] },
  { id: "ecological-anthropology", title: "Ecological & Environmental Anthropology", field: "anthropology", detail: true, requires: ["cultural-anthropology"] },
  { id: "material-culture", title: "Material Culture Studies", field: "anthropology", detail: true, requires: ["archaeology", "cultural-anthropology"] },
  { id: "visual-anthropology", title: "Visual Anthropology", field: "anthropology", detail: true, requires: ["cultural-anthropology"] },
  { id: "applied-anthropology", title: "Applied & Development Anthropology", field: "anthropology", detail: true, requires: ["ethnography"] },

  // --- Linguistic anthropology -------------------------------------------
  { id: "linguistic-anthropology", title: "Linguistic Anthropology", field: "anthropology", detail: true, requires: ["anthropology", "linguistics"] },

  // --- Biological anthropology -------------------------------------------
  { id: "biological-anthropology", title: "Biological Anthropology", field: "anthropology", detail: true, requires: ["anthropology", "evolutionary-biology"] },
  { id: "primatology", title: "Primatology", field: "anthropology", detail: true, requires: ["biological-anthropology"] },
  { id: "paleoanthropology", title: "Paleoanthropology", field: "anthropology", detail: true, requires: ["biological-anthropology"] },
  { id: "forensic-anthropology", title: "Forensic Anthropology", field: "anthropology", detail: true, requires: ["biological-anthropology"] },

  // --- Archaeology -------------------------------------------------------
  { id: "archaeology", title: "Archaeology", field: "anthropology", detail: true, requires: ["anthropology"] },
  { id: "archaeological-theory", title: "Archaeological Theory & Method", field: "anthropology", detail: true, requires: ["archaeology"] },
  { id: "bioarchaeology", title: "Bioarchaeology", field: "anthropology", detail: true, requires: ["archaeology", "biological-anthropology"] },

]);
