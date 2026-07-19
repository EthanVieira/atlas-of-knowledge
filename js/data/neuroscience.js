/* ============================================================================
 *  NEUROSCIENCE
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/neuroscience/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it. Neuroscience is the study of the nervous
 *  system, from molecules to mind. It is the integrative home for the neural
 *  cluster scattered across the atlas: it builds on biology (`neuroscience`,
 *  `systems-neuroscience`, `immunology`), medicine (`pharmacology`,
 *  `pathophysiology`), psychology (`biological-psychology`, `emotion-motivation`,
 *  `abnormal-psychology`), statistics and biomedical engineering
 *  (`neural-engineering`) rather than repeating them.
 * ==========================================================================*/
registerCourses([

  // --- Cellular, molecular & developmental -------------------------------
  { id: "cellular-neuroscience", title: "Cellular Neuroscience", field: "neuroscience", detail: true, requires: ["neuroscience"] },
  { id: "molecular-neuroscience", title: "Molecular Neuroscience", field: "neuroscience", detail: true, requires: ["cellular-neuroscience"] },
  { id: "neurophysiology", title: "Neurophysiology", field: "neuroscience", detail: true, requires: ["cellular-neuroscience"] },
  { id: "neuropharmacology", title: "Neuropharmacology", field: "neuroscience", detail: true, requires: ["neurophysiology", "pharmacology"] },
  { id: "developmental-neuroscience", title: "Developmental Neuroscience", field: "neuroscience", detail: true, requires: ["cellular-neuroscience"] },
  { id: "neural-circuits", title: "Neural Circuits & Connectomics", field: "neuroscience", detail: true, requires: ["neurophysiology"] },

  // --- Systems, sensory & motor ------------------------------------------
  { id: "sensory-neuroscience", title: "Sensory Neuroscience", field: "neuroscience", detail: true, requires: ["neurophysiology", "systems-neuroscience"] },
  { id: "motor-neuroscience", title: "Motor Systems Neuroscience", field: "neuroscience", detail: true, requires: ["neurophysiology", "systems-neuroscience"] },
  { id: "neuroendocrinology", title: "Neuroendocrinology", field: "neuroscience", detail: true, requires: ["neurophysiology"] },
  { id: "neuroimmunology", title: "Neuroimmunology", field: "neuroscience", detail: true, requires: ["molecular-neuroscience", "immunology"] },

  // --- Behavioral & cognitive --------------------------------------------
  { id: "behavioral-neuroscience", title: "Behavioral Neuroscience", field: "neuroscience", detail: true, requires: ["neurophysiology", "biological-psychology"] },
  { id: "learning-memory-neuroscience", title: "Neuroscience of Learning & Memory", field: "neuroscience", detail: true, requires: ["neurophysiology"] },
  { id: "affective-neuroscience", title: "Affective Neuroscience", field: "neuroscience", detail: true, requires: ["behavioral-neuroscience", "emotion-motivation"] },
  { id: "sleep-circadian-neuroscience", title: "Sleep & Circadian Neuroscience", field: "neuroscience", detail: true, requires: ["neurophysiology"] },

  // --- Clinical & translational ------------------------------------------
  { id: "clinical-neuroscience", title: "Clinical Neuroscience", field: "neuroscience", detail: true, requires: ["neurophysiology", "pathophysiology"] },
  { id: "neurodegeneration", title: "Neurodegeneration & Neural Repair", field: "neuroscience", detail: true, requires: ["molecular-neuroscience"] },
  { id: "psychiatric-neuroscience", title: "Psychiatric Neuroscience", field: "neuroscience", detail: true, requires: ["behavioral-neuroscience", "abnormal-psychology"] },

  // --- Methods & frontiers -----------------------------------------------
  { id: "neuroimaging-methods", title: "Neuroimaging & Neural Data Methods", field: "neuroscience", detail: true, requires: ["neuroscience", "statistics"] },
  { id: "neuroengineering-bci", title: "Neuroengineering & Brain-Computer Interfaces", field: "neuroscience", detail: true, requires: ["neurophysiology", "neural-engineering"] },
  { id: "neuroethics", title: "Neuroethics", field: "neuroscience", detail: true, requires: ["clinical-neuroscience"] },

]);
