/* ============================================================================
 *  NUCLEAR ENGINEERING
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/nucleng/<id>.js; the `detail: true` flag
 *  tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Foundations: reactor physics, radiation & materials ---
  { id: "reactor-physics", title: "Nuclear Reactor Physics", field: "nucleng", detail: true, requires: ["nuclear-physics"] },
  { id: "neutron-transport", title: "Neutron Transport Theory", field: "nucleng", detail: true, requires: ["reactor-physics", "pde"] },
  { id: "radiation-detection", title: "Radiation Detection & Measurement", field: "nucleng", detail: true, requires: ["nuclear-physics", "electronics"] },
  { id: "nuclear-materials", title: "Nuclear Materials", field: "nucleng", detail: true, requires: ["materials-science-intro", "nuclear-physics"] },
  { id: "health-physics", title: "Health Physics & Radiation Protection", field: "nucleng", detail: true, requires: ["nuclear-physics"] },
  { id: "radiation-shielding", title: "Radiation Shielding & Transport", field: "nucleng", detail: true, requires: ["neutron-transport"] },

  // --- Reactor engineering ---
  { id: "reactor-kinetics", title: "Reactor Kinetics & Control", field: "nucleng", detail: true, requires: ["reactor-physics", "control-systems"] },
  { id: "nuclear-thermal-hydraulics", title: "Nuclear Thermal-Hydraulics", field: "nucleng", detail: true, requires: ["heat-transfer", "reactor-physics"] },
  { id: "computational-reactor-physics", title: "Computational Reactor Physics", field: "nucleng", detail: true, requires: ["neutron-transport", "numerical-analysis"] },
  { id: "reactor-safety", title: "Nuclear Reactor Safety & Risk", field: "nucleng", detail: true, requires: ["nuclear-thermal-hydraulics", "reactor-kinetics"] },
  { id: "nuclear-reactor-design", title: "Nuclear Reactor Design", field: "nucleng", detail: true, requires: ["nuclear-thermal-hydraulics", "reactor-kinetics", "nuclear-materials"] },
  { id: "advanced-reactors", title: "Advanced Reactor Concepts", field: "nucleng", detail: true, requires: ["nuclear-reactor-design", "reactor-safety"] },

  // --- Fuel cycle, fusion & applications ---
  { id: "nuclear-fuel-cycle", title: "Nuclear Fuel Cycle", field: "nucleng", detail: true, requires: ["reactor-physics", "physical-chemistry"] },
  { id: "radioactive-waste", title: "Radioactive Waste Management", field: "nucleng", detail: true, requires: ["nuclear-fuel-cycle"] },
  { id: "nuclear-nonproliferation", title: "Nuclear Security & Nonproliferation", field: "nucleng", detail: true, requires: ["nuclear-fuel-cycle", "radiation-detection"] },
  { id: "fusion-engineering", title: "Nuclear Fusion Engineering", field: "nucleng", detail: true, requires: ["plasma-physics", "nuclear-materials"] },
  { id: "radioisotope-production", title: "Radioisotope Production & Applications", field: "nucleng", detail: true, requires: ["reactor-physics", "radiation-detection"] },
  { id: "medical-physics", title: "Radiation Medical Physics", field: "nucleng", detail: true, requires: ["radiation-detection", "health-physics"] },

]);
