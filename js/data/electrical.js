/* ============================================================================
 *  ELECTRICAL ENGINEERING
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/eleceng/<id>.js; the `detail: true` flag
 *  tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Circuits, signals & control ---
  { id: "circuit-analysis", title: "Circuit Analysis", field: "eleceng", detail: true, requires: ["ode"] },
  { id: "electronics", title: "Electronics", field: "eleceng", detail: true, requires: ["circuit-analysis"] },
  { id: "signals-and-systems", title: "Signals & Systems", field: "eleceng", detail: true, requires: ["ode"] },
  { id: "control-systems", title: "Control Systems", field: "eleceng", detail: true, requires: ["signals-and-systems"] },
  { id: "advanced-control", title: "Advanced & Optimal Control", field: "eleceng", detail: true, requires: ["control-systems"] },
  { id: "estimation-filtering", title: "Estimation & Filtering", field: "eleceng", detail: true, requires: ["signals-and-systems", "probability"] },

  // --- Fields, EM, RF & power ---
  { id: "electromagnetics-engineering", title: "Engineering Electromagnetics", field: "eleceng", detail: true, requires: ["electromagnetism"] },
  { id: "rf-microwave", title: "RF & Microwave Engineering", field: "eleceng", detail: true, requires: ["electromagnetics-engineering"] },
  { id: "antennas-propagation", title: "Antennas & Propagation", field: "eleceng", detail: true, requires: ["electromagnetics-engineering"] },
  { id: "photonics", title: "Photonics & Optoelectronics", field: "eleceng", detail: true, requires: ["electromagnetics-engineering", "quantum-mechanics"] },
  { id: "power-systems", title: "Power Systems & Energy", field: "eleceng", detail: true, requires: ["circuit-analysis", "electromagnetics-engineering"] },
  { id: "electric-machines", title: "Electric Machines & Drives", field: "eleceng", detail: true, requires: ["electromagnetics-engineering", "circuit-analysis"] },

  // --- Integrated circuits, digital & embedded ---
  { id: "microelectronics", title: "Microelectronics & VLSI", field: "eleceng", detail: true, requires: ["electronics", "solid-state-physics"] },
  { id: "analog-ic-design", title: "Analog Integrated Circuit Design", field: "eleceng", detail: true, requires: ["microelectronics"] },
  { id: "digital-design-ee", title: "Digital Design", field: "eleceng", detail: true, requires: ["electronics", "digital-logic"] },
  { id: "digital-vlsi", title: "Digital VLSI Design", field: "eleceng", detail: true, requires: ["microelectronics", "digital-logic"] },
  { id: "embedded-systems", title: "Embedded Systems", field: "eleceng", detail: true, requires: ["electronics", "computer-architecture"] },
  { id: "instrumentation-measurement", title: "Instrumentation & Measurement", field: "eleceng", detail: true, requires: ["electronics"] },

  // --- Communications & power conversion ---
  { id: "communication-systems", title: "Communication Systems", field: "eleceng", detail: true, requires: ["signals-and-systems", "information-theory"] },
  { id: "wireless-communications", title: "Wireless Communications", field: "eleceng", detail: true, requires: ["communication-systems"] },
  { id: "power-electronics", title: "Power Electronics", field: "eleceng", detail: true, requires: ["electronics", "control-systems"] },
  { id: "renewable-energy-systems", title: "Renewable Energy Systems", field: "eleceng", detail: true, requires: ["power-systems", "power-electronics"] },

]);
