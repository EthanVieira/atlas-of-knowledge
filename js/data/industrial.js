/* ============================================================================
 *  INDUSTRIAL ENGINEERING
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/indeng/<id>.js; the `detail: true` flag
 *  tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Operations research & optimization ---
  { id: "operations-research", title: "Operations Research", field: "indeng", detail: true, requires: ["linear-algebra", "probability"] },
  { id: "linear-integer-programming", title: "Linear & Integer Programming", field: "indeng", detail: true, requires: ["operations-research"] },
  { id: "network-optimization", title: "Network Flows & Optimization", field: "indeng", detail: true, requires: ["operations-research"] },
  { id: "applied-stochastic-models", title: "Applied Stochastic Models", field: "indeng", detail: true, requires: ["operations-research"] },
  { id: "queueing-theory", title: "Queueing Theory", field: "indeng", detail: true, requires: ["applied-stochastic-models"] },
  { id: "discrete-event-simulation", title: "Discrete-Event Simulation", field: "indeng", detail: true, requires: ["applied-stochastic-models", "statistics"] },
  { id: "scheduling-sequencing", title: "Scheduling & Sequencing", field: "indeng", detail: true, requires: ["linear-integer-programming"] },

  // --- Production, logistics & quality ---
  { id: "production-planning", title: "Production Planning & Inventory Control", field: "indeng", detail: true, requires: ["operations-research"] },
  { id: "supply-chain", title: "Supply Chain Engineering", field: "indeng", detail: true, requires: ["production-planning"] },
  { id: "facility-logistics", title: "Facility Layout & Logistics", field: "indeng", detail: true, requires: ["operations-research"] },
  { id: "quality-engineering", title: "Quality Engineering & SPC", field: "indeng", detail: true, requires: ["statistics"] },
  { id: "lean-six-sigma", title: "Lean & Six Sigma", field: "indeng", detail: true, requires: ["quality-engineering"] },
  { id: "reliability-engineering", title: "Reliability Engineering", field: "indeng", detail: true, requires: ["applied-stochastic-models"] },

  // --- Human factors, economics, decision & analytics ---
  { id: "human-factors", title: "Human Factors & Ergonomics", field: "indeng", detail: true, requires: ["statistics"] },
  { id: "work-systems", title: "Work Design & Measurement", field: "indeng", detail: true, requires: ["human-factors"] },
  { id: "engineering-economics", title: "Engineering Economy", field: "indeng", detail: true, requires: ["calculus-1"] },
  { id: "decision-analysis", title: "Decision & Risk Analysis", field: "indeng", detail: true, requires: ["probability", "engineering-economics"] },
  { id: "systems-engineering-ie", title: "Systems Engineering", field: "indeng", detail: true, requires: ["operations-research"] },
  { id: "operations-analytics", title: "Operations Analytics", field: "indeng", detail: true, requires: ["discrete-event-simulation", "machine-learning"] },

]);
