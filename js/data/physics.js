/* ============================================================================
 *  PHYSICS
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/physics/<id>.js; the `detail: true` flag
 *  tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Classical core ---
  { id: "classical-mechanics", title: "Classical Mechanics", field: "physics", detail: true, requires: ["calculus-3", "ode"] },
  { id: "waves-oscillations", title: "Waves & Oscillations", field: "physics", detail: true, requires: ["classical-mechanics", "ode"] },
  { id: "thermodynamics", title: "Thermodynamics", field: "physics", detail: true, requires: ["calculus-3", "classical-mechanics"] },
  { id: "electromagnetism", title: "Electromagnetism", field: "physics", detail: true, requires: ["calculus-3", "ode"] },
  { id: "special-relativity", title: "Special Relativity", field: "physics", detail: true, requires: ["classical-mechanics", "electromagnetism"] },
  { id: "optics", title: "Optics", field: "physics", detail: true, requires: ["electromagnetism", "waves-oscillations"] },
  { id: "continuum-mechanics", title: "Continuum Mechanics", field: "physics", detail: true, requires: ["classical-mechanics", "calculus-3"] },
  { id: "fluid-dynamics", title: "Fluid Dynamics", field: "physics", detail: true, requires: ["continuum-mechanics", "pde"] },
  { id: "classical-electrodynamics", title: "Classical Electrodynamics", field: "physics", detail: true, requires: ["electromagnetism", "special-relativity", "pde"] },

  // --- Statistical & thermal ---
  { id: "statistical-mechanics", title: "Statistical Mechanics", field: "physics", detail: true, requires: ["classical-mechanics", "probability", "thermodynamics"] },
  { id: "kinetic-theory", title: "Kinetic Theory", field: "physics", detail: true, requires: ["statistical-mechanics", "thermodynamics"] },
  { id: "nonequilibrium-stat-mech", title: "Non-equilibrium Statistical Mechanics", field: "physics", detail: true, requires: ["statistical-mechanics", "stochastic-processes"] },
  { id: "phase-transitions", title: "Phase Transitions & Critical Phenomena", field: "physics", detail: true, requires: ["statistical-mechanics"] },

  // --- Quantum ---
  { id: "quantum-mechanics", title: "Quantum Mechanics", field: "physics", detail: true, requires: ["linear-algebra", "ode", "classical-mechanics"] },
  { id: "advanced-quantum-mechanics", title: "Advanced Quantum Mechanics", field: "physics", detail: true, requires: ["quantum-mechanics"] },
  { id: "atomic-molecular-optical", title: "Atomic, Molecular & Optical Physics", field: "physics", detail: true, requires: ["advanced-quantum-mechanics", "optics"] },
  { id: "quantum-optics", title: "Quantum Optics", field: "physics", detail: true, requires: ["advanced-quantum-mechanics", "electromagnetism"] },
  { id: "nuclear-physics", title: "Nuclear Physics", field: "physics", detail: true, requires: ["advanced-quantum-mechanics"] },

  // --- Quantum field theory & high energy ---
  { id: "quantum-field-theory", title: "Quantum Field Theory", field: "physics", detail: true, requires: ["advanced-quantum-mechanics", "electromagnetism", "special-relativity"] },
  { id: "renormalization-group", title: "The Renormalization Group", field: "physics", detail: true, requires: ["quantum-field-theory", "statistical-mechanics"] },
  { id: "gauge-theory", title: "Gauge Theory", field: "physics", detail: true, requires: ["quantum-field-theory", "lie-theory"] },
  { id: "particle-physics", title: "Particle Physics", field: "physics", detail: true, requires: ["quantum-field-theory"] },
  { id: "standard-model", title: "The Standard Model", field: "physics", detail: true, requires: ["gauge-theory", "particle-physics"] },
  { id: "conformal-field-theory", title: "Conformal Field Theory", field: "physics", detail: true, requires: ["quantum-field-theory", "complex-analysis"] },
  { id: "supersymmetry", title: "Supersymmetry", field: "physics", detail: true, requires: ["quantum-field-theory", "gauge-theory"] },
  { id: "string-theory", title: "String Theory", field: "physics", detail: true, requires: ["quantum-field-theory", "general-relativity", "conformal-field-theory"] },

  // --- Gravitation & cosmology ---
  { id: "general-relativity", title: "General Relativity", field: "physics", detail: true, requires: ["riemannian-geometry", "special-relativity"] },
  { id: "cosmology", title: "Cosmology", field: "physics", detail: true, requires: ["general-relativity", "statistical-mechanics"] },
  { id: "astrophysics", title: "Astrophysics", field: "physics", detail: true, requires: ["classical-mechanics", "thermodynamics", "quantum-mechanics"] },
  { id: "black-hole-physics", title: "Black Hole Physics", field: "physics", detail: true, requires: ["general-relativity", "quantum-field-theory"] },
  { id: "quantum-gravity", title: "Quantum Gravity", field: "physics", detail: true, requires: ["general-relativity", "quantum-field-theory"] },
  { id: "ads-cft", title: "AdS/CFT & Holography", field: "physics", detail: true, requires: ["string-theory", "conformal-field-theory", "general-relativity"] },

  // --- Condensed matter ---
  { id: "solid-state-physics", title: "Solid State Physics", field: "physics", detail: true, requires: ["quantum-mechanics", "statistical-mechanics"] },
  { id: "many-body-physics", title: "Quantum Many-Body Theory", field: "physics", detail: true, requires: ["advanced-quantum-mechanics", "statistical-mechanics"] },
  { id: "condensed-matter-theory", title: "Condensed Matter Theory", field: "physics", detail: true, requires: ["solid-state-physics", "quantum-field-theory"] },
  { id: "superconductivity", title: "Superconductivity & Superfluidity", field: "physics", detail: true, requires: ["condensed-matter-theory", "many-body-physics"] },
  { id: "topological-phases", title: "Topological Phases of Matter", field: "physics", detail: true, requires: ["condensed-matter-theory", "algebraic-topology"] },
  { id: "plasma-physics", title: "Plasma Physics", field: "physics", detail: true, requires: ["classical-electrodynamics", "fluid-dynamics", "statistical-mechanics"] },

  // --- Computational & nonlinear ---
  { id: "computational-physics", title: "Computational Physics", field: "physics", detail: true, requires: ["classical-mechanics", "numerical-analysis", "programming-fundamentals"] },
  { id: "nonlinear-physics", title: "Nonlinear Physics & Chaos", field: "physics", detail: true, requires: ["classical-mechanics", "dynamical-systems"] },

]);
