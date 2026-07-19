/* ============================================================================
 *  MECHANICAL ENGINEERING
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/mecheng/<id>.js; the `detail: true` flag
 *  tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Solid mechanics core ---
  { id: "statics", title: "Engineering Statics", field: "mecheng", detail: true, requires: ["general-physics", "calculus-3"] },
  { id: "engineering-dynamics", title: "Engineering Dynamics", field: "mecheng", detail: true, requires: ["statics", "ode"] },
  { id: "mechanics-of-materials", title: "Mechanics of Materials", field: "mecheng", detail: true, requires: ["statics"] },
  { id: "kinematics-of-machines", title: "Kinematics & Theory of Machines", field: "mecheng", detail: true, requires: ["engineering-dynamics"] },
  { id: "machine-design", title: "Machine Design", field: "mecheng", detail: true, requires: ["mechanics-of-materials", "engineering-dynamics"] },

  // --- Thermofluids ---
  { id: "engineering-thermodynamics", title: "Engineering Thermodynamics", field: "mecheng", detail: true, requires: ["thermodynamics"] },
  { id: "fluid-mechanics-eng", title: "Fluid Mechanics (Engineering)", field: "mecheng", detail: true, requires: ["engineering-dynamics"] },
  { id: "heat-transfer", title: "Heat Transfer", field: "mecheng", detail: true, requires: ["engineering-thermodynamics", "fluid-mechanics-eng"] },
  { id: "gas-dynamics", title: "Gas Dynamics & Compressible Flow", field: "mecheng", detail: true, requires: ["fluid-mechanics-eng", "engineering-thermodynamics"] },
  { id: "turbomachinery", title: "Turbomachinery", field: "mecheng", detail: true, requires: ["fluid-mechanics-eng", "engineering-thermodynamics"] },
  { id: "internal-combustion-engines", title: "Internal Combustion Engines", field: "mecheng", detail: true, requires: ["heat-transfer"] },
  { id: "hvac-refrigeration", title: "HVAC & Refrigeration", field: "mecheng", detail: true, requires: ["heat-transfer"] },

  // --- Dynamics, vibration & computation ---
  { id: "mechanical-vibrations", title: "Mechanical Vibrations", field: "mecheng", detail: true, requires: ["engineering-dynamics"] },
  { id: "finite-element-analysis", title: "Finite Element Analysis", field: "mecheng", detail: true, requires: ["mechanics-of-materials", "numerical-analysis"] },
  { id: "cfd-eng", title: "Computational Fluid Dynamics", field: "mecheng", detail: true, requires: ["fluid-mechanics-eng", "numerical-analysis"] },
  { id: "mechatronics", title: "Mechatronics", field: "mecheng", detail: true, requires: ["engineering-dynamics", "control-systems", "electronics"] },

  // --- Manufacturing & applied ---
  { id: "manufacturing", title: "Manufacturing Processes", field: "mecheng", detail: true, requires: ["mechanics-of-materials", "materials-science-intro"] },
  { id: "additive-manufacturing", title: "Additive Manufacturing", field: "mecheng", detail: true, requires: ["manufacturing"] },
  { id: "tribology", title: "Tribology", field: "mecheng", detail: true, requires: ["machine-design"] },
  { id: "fracture-fatigue", title: "Fracture Mechanics & Fatigue", field: "mecheng", detail: true, requires: ["mechanical-behavior-materials"] },
  { id: "acoustics-engineering", title: "Engineering Acoustics", field: "mecheng", detail: true, requires: ["mechanical-vibrations", "waves-oscillations"] },
  { id: "automotive-engineering", title: "Automotive Engineering", field: "mecheng", detail: true, requires: ["internal-combustion-engines"] },
  { id: "mems", title: "MEMS & Microsystems", field: "mecheng", detail: true, requires: ["microelectronics", "materials-science-intro"] },

]);
