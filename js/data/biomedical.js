/* ============================================================================
 *  BIOMEDICAL ENGINEERING
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/bioeng/<id>.js; the `detail: true` flag
 *  tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Mechanics, materials & transport ---
  { id: "biomechanics", title: "Biomechanics", field: "bioeng", detail: true, requires: ["statics", "physiology"] },
  { id: "biomaterials-bme", title: "Biomedical Materials & Devices", field: "bioeng", detail: true, requires: ["materials-science-intro", "biomechanics"] },
  { id: "biofluid-mechanics", title: "Biofluid Mechanics", field: "bioeng", detail: true, requires: ["fluid-mechanics-eng", "physiology"] },
  { id: "biotransport", title: "Biotransport Phenomena", field: "bioeng", detail: true, requires: ["transport-phenomena", "physiology"] },
  { id: "cellular-mechanics-bme", title: "Cell & Tissue Mechanics", field: "bioeng", detail: true, requires: ["biomechanics", "cell-biology"] },
  { id: "tissue-engineering", title: "Tissue Engineering & Regenerative Medicine", field: "bioeng", detail: true, requires: ["stem-cell-biology", "biomaterials-bme"] },

  // --- Signals, imaging, instrumentation & optics ---
  { id: "biomedical-signal-processing", title: "Biomedical Signal Processing", field: "bioeng", detail: true, requires: ["signals-and-systems", "physiology"] },
  { id: "medical-imaging", title: "Medical Imaging", field: "bioeng", detail: true, requires: ["signals-and-systems", "electromagnetism"] },
  { id: "biomedical-instrumentation", title: "Biomedical Instrumentation", field: "bioeng", detail: true, requires: ["electronics", "physiology"] },
  { id: "biomedical-optics", title: "Biomedical Optics", field: "bioeng", detail: true, requires: ["optics", "physiology"] },
  { id: "biosensors", title: "Biosensors", field: "bioeng", detail: true, requires: ["biomedical-instrumentation", "chemical-biology"] },
  { id: "neural-engineering", title: "Neural Engineering", field: "bioeng", detail: true, requires: ["neuroscience", "biomedical-signal-processing"] },

  // --- Modeling, devices & therapeutics ---
  { id: "physiological-modeling", title: "Physiological Systems Modeling", field: "bioeng", detail: true, requires: ["physiology", "ode"] },
  { id: "systems-physiology-bme", title: "Quantitative Systems Physiology", field: "bioeng", detail: true, requires: ["physiology", "systems-biology"] },
  { id: "computational-medicine", title: "Computational Medicine", field: "bioeng", detail: true, requires: ["bioinformatics", "physiological-modeling"] },
  { id: "rehabilitation-engineering", title: "Rehabilitation Engineering", field: "bioeng", detail: true, requires: ["biomechanics", "control-systems"] },
  { id: "drug-delivery-systems", title: "Drug Delivery Systems", field: "bioeng", detail: true, requires: ["biomaterials-bme", "biotransport"] },
  { id: "medical-device-design", title: "Medical Device Design & Regulation", field: "bioeng", detail: true, requires: ["biomaterials-bme", "biomedical-instrumentation"] },

]);
