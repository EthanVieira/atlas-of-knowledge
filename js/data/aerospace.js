/* ============================================================================
 *  AEROSPACE ENGINEERING
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/aeroeng/<id>.js; the `detail: true` flag
 *  tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Aerodynamics & flight ---
  { id: "aerodynamics", title: "Aerodynamics", field: "aeroeng", detail: true, requires: ["fluid-mechanics-eng"] },
  { id: "flight-mechanics", title: "Flight Mechanics", field: "aeroeng", detail: true, requires: ["engineering-dynamics", "aerodynamics"] },
  { id: "high-speed-aerodynamics", title: "High-Speed Aerodynamics", field: "aeroeng", detail: true, requires: ["aerodynamics"] },
  { id: "computational-aerodynamics", title: "Computational Aerodynamics", field: "aeroeng", detail: true, requires: ["aerodynamics", "cfd-eng"] },
  { id: "hypersonics", title: "Hypersonic Flow & Vehicles", field: "aeroeng", detail: true, requires: ["high-speed-aerodynamics", "heat-transfer"] },
  { id: "aeroelasticity", title: "Aeroelasticity", field: "aeroeng", detail: true, requires: ["aerospace-structures", "aerodynamics"] },

  // --- Propulsion, combustion & structures ---
  { id: "propulsion", title: "Aerospace Propulsion", field: "aeroeng", detail: true, requires: ["engineering-thermodynamics", "fluid-mechanics-eng"] },
  { id: "rocket-propulsion", title: "Rocket Propulsion", field: "aeroeng", detail: true, requires: ["propulsion"] },
  { id: "air-breathing-propulsion", title: "Air-Breathing Propulsion", field: "aeroeng", detail: true, requires: ["propulsion"] },
  { id: "combustion-propulsion", title: "Combustion", field: "aeroeng", detail: true, requires: ["propulsion", "chemical-kinetics"] },
  { id: "aerospace-structures", title: "Aerospace Structures", field: "aeroeng", detail: true, requires: ["mechanics-of-materials"] },
  { id: "aerospace-materials", title: "Aerospace Materials & Structures", field: "aeroeng", detail: true, requires: ["aerospace-structures", "composites"] },

  // --- Space, guidance & integrated design ---
  { id: "orbital-mechanics", title: "Orbital Mechanics & Astrodynamics", field: "aeroeng", detail: true, requires: ["classical-mechanics", "ode"] },
  { id: "spacecraft-attitude-dynamics", title: "Spacecraft Attitude Dynamics & Control", field: "aeroeng", detail: true, requires: ["orbital-mechanics", "control-systems"] },
  { id: "avionics-control", title: "Guidance, Navigation & Control", field: "aeroeng", detail: true, requires: ["control-systems", "flight-mechanics"] },
  { id: "satellite-systems", title: "Satellite Systems Engineering", field: "aeroeng", detail: true, requires: ["avionics-control", "communication-systems"] },
  { id: "spacecraft-design", title: "Spacecraft Design", field: "aeroeng", detail: true, requires: ["orbital-mechanics", "aerospace-structures"] },
  { id: "aircraft-design", title: "Aircraft Design", field: "aeroeng", detail: true, requires: ["flight-mechanics", "aerospace-structures", "propulsion"] },

]);
