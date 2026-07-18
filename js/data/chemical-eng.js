/* ============================================================================
 *  CHEMICAL ENGINEERING
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/chemeng/<id>.js; the `detail: true` flag
 *  tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Core chemical engineering science ---
  { id: "material-energy-balances", title: "Material & Energy Balances", field: "chemeng", detail: true, requires: ["general-chemistry", "calculus-2"] },
  { id: "cheme-thermodynamics", title: "Chemical Engineering Thermodynamics", field: "chemeng", detail: true, requires: ["chemical-thermodynamics", "material-energy-balances"] },
  { id: "transport-phenomena", title: "Transport Phenomena", field: "chemeng", detail: true, requires: ["fluid-dynamics"] },
  { id: "reaction-engineering", title: "Chemical Reaction Engineering", field: "chemeng", detail: true, requires: ["chemical-kinetics", "material-energy-balances"] },
  { id: "separation-processes", title: "Separation Processes", field: "chemeng", detail: true, requires: ["cheme-thermodynamics", "transport-phenomena"] },
  { id: "process-control-che", title: "Process Dynamics & Control", field: "chemeng", detail: true, requires: ["control-systems", "reaction-engineering"] },
  { id: "molecular-thermodynamics-che", title: "Molecular Thermodynamics", field: "chemeng", detail: true, requires: ["cheme-thermodynamics", "statistical-thermodynamics"] },

  // --- Process design, systems, safety & optimization ---
  { id: "process-design", title: "Process & Plant Design", field: "chemeng", detail: true, requires: ["separation-processes", "reaction-engineering"] },
  { id: "process-safety", title: "Process Safety", field: "chemeng", detail: true, requires: ["process-design"] },
  { id: "process-optimization", title: "Process Optimization", field: "chemeng", detail: true, requires: ["process-design", "optimization"] },
  { id: "process-systems-engineering", title: "Process Systems Engineering", field: "chemeng", detail: true, requires: ["process-control-che", "optimization"] },
  { id: "particle-technology", title: "Particle Technology", field: "chemeng", detail: true, requires: ["transport-phenomena"] },
  { id: "membrane-separations", title: "Membrane Processes", field: "chemeng", detail: true, requires: ["separation-processes"] },

  // --- Specialized reaction, bio, materials & energy ---
  { id: "biochemical-engineering", title: "Biochemical Engineering", field: "chemeng", detail: true, requires: ["reaction-engineering", "biochemistry"] },
  { id: "bioprocess-engineering", title: "Bioprocess Engineering", field: "chemeng", detail: true, requires: ["biochemical-engineering", "separation-processes"] },
  { id: "polymer-engineering", title: "Polymer Reaction & Processing Engineering", field: "chemeng", detail: true, requires: ["polymer-chemistry", "transport-phenomena"] },
  { id: "electrochemical-engineering", title: "Electrochemical Engineering", field: "chemeng", detail: true, requires: ["electrochemistry", "transport-phenomena"] },
  { id: "catalytic-reaction-engineering", title: "Catalytic Reaction Engineering", field: "chemeng", detail: true, requires: ["reaction-engineering", "catalysis"] },
  { id: "petroleum-refining", title: "Petroleum Refining & Petrochemicals", field: "chemeng", detail: true, requires: ["separation-processes", "reaction-engineering"] },

]);
