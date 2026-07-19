/* ============================================================================
 *  MATHEMATICS
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references,
 *  cover image) is lazy-loaded from js/data/details/mathematics/<id>.js; the
 *  `detail: true` flag tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Foundations ---
  { id: "arithmetic", title: "Arithmetic", field: "mathematics", detail: true, requires: [] },
  { id: "elementary-algebra", title: "Elementary Algebra", field: "mathematics", detail: true, requires: ["arithmetic"] },
  { id: "euclidean-geometry", title: "Euclidean Geometry", field: "mathematics", detail: true, requires: ["arithmetic"] },
  { id: "trigonometry", title: "Trigonometry", field: "mathematics", detail: true, requires: ["elementary-algebra", "euclidean-geometry"] },
  { id: "precalculus", title: "Precalculus", field: "mathematics", detail: true, requires: ["trigonometry"] },
  { id: "discrete-math", title: "Discrete Mathematics", field: "mathematics", detail: true, requires: ["elementary-algebra"] },
  { id: "proof-writing", title: "Mathematical Proof", field: "mathematics", detail: true, requires: ["discrete-math"] },
  { id: "mathematical-logic", title: "Mathematical Logic", field: "mathematics", detail: true, requires: ["discrete-math"] },
  { id: "set-theory", title: "Naive Set Theory", field: "mathematics", detail: true, requires: ["mathematical-logic"] },

  // --- Calculus & core ---
  { id: "calculus-1", title: "Calculus I — Differentiation", field: "mathematics", detail: true, requires: ["precalculus"] },
  { id: "calculus-2", title: "Calculus II — Integration & Series", field: "mathematics", detail: true, requires: ["calculus-1"] },
  { id: "calculus-3", title: "Calculus III — Multivariable", field: "mathematics", detail: true, requires: ["calculus-2"] },
  { id: "linear-algebra", title: "Linear Algebra", field: "mathematics", detail: true, requires: ["precalculus"] },
  { id: "ode", title: "Ordinary Differential Equations", field: "mathematics", detail: true, requires: ["calculus-2", "linear-algebra"] },

  // --- Analysis ---
  { id: "real-analysis", title: "Real Analysis", field: "mathematics", detail: true, requires: ["calculus-2", "proof-writing"] },
  { id: "complex-analysis", title: "Complex Analysis", field: "mathematics", detail: true, requires: ["real-analysis"] },
  { id: "measure-theory", title: "Measure Theory", field: "mathematics", detail: true, requires: ["real-analysis"] },
  { id: "functional-analysis", title: "Functional Analysis", field: "mathematics", detail: true, requires: ["linear-algebra", "point-set-topology"] },
  { id: "fourier-analysis", title: "Fourier Analysis", field: "mathematics", detail: true, requires: ["real-analysis", "linear-algebra"] },
  { id: "harmonic-analysis", title: "Harmonic Analysis", field: "mathematics", detail: true, requires: ["measure-theory", "functional-analysis", "fourier-analysis"] },
  { id: "pde", title: "Partial Differential Equations", field: "mathematics", detail: true, requires: ["ode", "functional-analysis"] },

  // --- Algebra ---
  { id: "abstract-algebra", title: "Abstract Algebra", field: "mathematics", detail: true, requires: ["linear-algebra", "proof-writing"] },
  { id: "group-theory", title: "Group Theory", field: "mathematics", detail: true, requires: ["abstract-algebra"] },
  { id: "ring-theory", title: "Ring & Module Theory", field: "mathematics", detail: true, requires: ["abstract-algebra"] },
  { id: "field-theory", title: "Field Theory", field: "mathematics", detail: true, requires: ["ring-theory"] },
  { id: "galois-theory", title: "Galois Theory", field: "mathematics", detail: true, requires: ["field-theory", "group-theory"] },
  { id: "commutative-algebra", title: "Commutative Algebra", field: "mathematics", detail: true, requires: ["field-theory"] },
  { id: "category-theory", title: "Category Theory", field: "mathematics", detail: true, requires: ["abstract-algebra"] },
  { id: "module-theory-adv", title: "Homological Algebra", field: "mathematics", detail: true, requires: ["ring-theory", "category-theory"] },
  { id: "representation-theory", title: "Representation Theory", field: "mathematics", detail: true, requires: ["group-theory", "ring-theory"] },
  { id: "lie-theory", title: "Lie Groups & Lie Algebras", field: "mathematics", detail: true, requires: ["representation-theory", "smooth-manifolds"] },

  // --- Number theory ---
  { id: "elementary-number-theory", title: "Elementary Number Theory", field: "mathematics", detail: true, requires: ["proof-writing"] },
  { id: "algebraic-number-theory", title: "Algebraic Number Theory", field: "mathematics", detail: true, requires: ["galois-theory", "commutative-algebra"] },
  { id: "analytic-number-theory", title: "Analytic Number Theory", field: "mathematics", detail: true, requires: ["complex-analysis", "elementary-number-theory"] },
  { id: "class-field-theory", title: "Class Field Theory", field: "mathematics", detail: true, requires: ["algebraic-number-theory"] },
  { id: "modular-forms", title: "Modular Forms", field: "mathematics", detail: true, requires: ["complex-analysis", "elementary-number-theory"] },
  { id: "elliptic-curves", title: "Elliptic Curves", field: "mathematics", detail: true, requires: ["algebraic-number-theory"] },
  { id: "p-adic-analysis", title: "p-adic Numbers & Analysis", field: "mathematics", detail: true, requires: ["algebraic-number-theory", "real-analysis"] },

  // --- Topology & geometry ---
  { id: "point-set-topology", title: "Point-Set Topology", field: "mathematics", detail: true, requires: ["real-analysis"] },
  { id: "algebraic-topology", title: "Algebraic Topology", field: "mathematics", detail: true, requires: ["point-set-topology", "group-theory"] },
  { id: "differential-geometry", title: "Differential Geometry", field: "mathematics", detail: true, requires: ["calculus-3", "linear-algebra"] },
  { id: "smooth-manifolds", title: "Smooth Manifolds", field: "mathematics", detail: true, requires: ["differential-geometry", "point-set-topology"] },
  { id: "riemannian-geometry", title: "Riemannian Geometry", field: "mathematics", detail: true, requires: ["smooth-manifolds"] },
  { id: "differential-topology", title: "Differential Topology", field: "mathematics", detail: true, requires: ["smooth-manifolds", "algebraic-topology"] },
  { id: "riemann-surfaces", title: "Riemann Surfaces", field: "mathematics", detail: true, requires: ["complex-analysis", "algebraic-topology"] },
  { id: "symplectic-geometry", title: "Symplectic Geometry", field: "mathematics", detail: true, requires: ["smooth-manifolds"] },

  // --- Algebraic geometry ---
  { id: "algebraic-geometry", title: "Algebraic Geometry (Varieties)", field: "mathematics", detail: true, requires: ["commutative-algebra", "galois-theory"] },
  { id: "sheaf-theory", title: "Sheaves & Cohomology", field: "mathematics", detail: true, requires: ["point-set-topology", "module-theory-adv"] },
  { id: "scheme-theory", title: "Scheme Theory", field: "mathematics", detail: true, requires: ["algebraic-geometry", "sheaf-theory"] },
  { id: "etale-cohomology", title: "Étale Cohomology", field: "mathematics", detail: true, requires: ["scheme-theory", "class-field-theory"] },
  { id: "arithmetic-geometry", title: "Arithmetic Geometry", field: "mathematics", detail: true, requires: ["elliptic-curves", "etale-cohomology"] },

  // --- Probability & applied ---
  { id: "probability", title: "Probability Theory", field: "mathematics", detail: true, requires: ["calculus-3"] },
  { id: "measure-probability", title: "Measure-Theoretic Probability", field: "mathematics", detail: true, requires: ["measure-theory", "probability"] },
  { id: "stochastic-processes", title: "Stochastic Processes", field: "mathematics", detail: true, requires: ["measure-probability"] },
  { id: "statistics", title: "Mathematical Statistics", field: "mathematics", detail: true, requires: ["probability"] },
  { id: "numerical-analysis", title: "Numerical Analysis", field: "mathematics", detail: true, requires: ["calculus-3", "linear-algebra"] },
  { id: "optimization", title: "Optimization", field: "mathematics", detail: true, requires: ["calculus-3", "linear-algebra"] },
  { id: "graph-theory", title: "Graph Theory", field: "mathematics", detail: true, requires: ["discrete-math"] },
  { id: "combinatorics", title: "Combinatorics", field: "mathematics", detail: true, requires: ["discrete-math"] },

  // --- Advanced logic & foundations ---
  { id: "computability-theory", title: "Computability Theory", field: "mathematics", detail: true, requires: ["mathematical-logic"] },
  { id: "model-theory", title: "Model Theory", field: "mathematics", detail: true, requires: ["mathematical-logic", "abstract-algebra"] },
  { id: "proof-theory", title: "Proof Theory", field: "mathematics", detail: true, requires: ["mathematical-logic"] },
  { id: "axiomatic-set-theory", title: "Axiomatic Set Theory", field: "mathematics", detail: true, requires: ["set-theory"] },
  { id: "forcing-large-cardinals", title: "Forcing & Large Cardinals", field: "mathematics", detail: true, requires: ["axiomatic-set-theory", "model-theory"] },
  { id: "type-theory", title: "Type Theory", field: "mathematics", detail: true, requires: ["mathematical-logic"] },

  // --- Beyond graduate: the modern frontier ---
  { id: "infinity-categories", title: "∞-Categories (Higher Category Theory)", field: "mathematics", detail: true, requires: ["category-theory", "algebraic-topology"] },
  { id: "homotopy-theory", title: "Stable Homotopy Theory", field: "mathematics", detail: true, requires: ["algebraic-topology", "category-theory"] },
  { id: "k-theory", title: "K-Theory", field: "mathematics", detail: true, requires: ["algebraic-topology", "module-theory-adv"] },
  { id: "topos-theory", title: "Topos Theory", field: "mathematics", detail: true, requires: ["sheaf-theory", "mathematical-logic"] },
  { id: "higher-topos-theory", title: "Higher Topos Theory", field: "mathematics", detail: true, requires: ["infinity-categories", "topos-theory"] },
  { id: "homotopy-type-theory", title: "Homotopy Type Theory", field: "mathematics", detail: true, requires: ["type-theory", "infinity-categories"] },
  { id: "derived-algebraic-geometry", title: "Derived Algebraic Geometry", field: "mathematics", detail: true, requires: ["scheme-theory", "infinity-categories"] },
  { id: "motives", title: "Motives & Motivic Cohomology", field: "mathematics", detail: true, requires: ["etale-cohomology", "k-theory", "derived-algebraic-geometry"] },
  { id: "perfectoid-spaces", title: "Perfectoid Spaces", field: "mathematics", detail: true, requires: ["arithmetic-geometry", "p-adic-analysis"] },
  { id: "langlands-program", title: "The Langlands Program", field: "mathematics", detail: true, requires: ["representation-theory", "modular-forms", "etale-cohomology"] },
  { id: "geometric-representation-theory", title: "Geometric Representation Theory", field: "mathematics", detail: true, requires: ["representation-theory", "algebraic-geometry", "infinity-categories"] },
  { id: "operator-algebras", title: "Operator Algebras", field: "mathematics", detail: true, requires: ["functional-analysis", "measure-theory"] },
  { id: "ergodic-theory", title: "Ergodic Theory", field: "mathematics", detail: true, requires: ["measure-theory", "dynamical-systems"] },
  { id: "dynamical-systems", title: "Dynamical Systems", field: "mathematics", detail: true, requires: ["ode", "real-analysis"] },

  { id: "calculus-of-variations", title: "Calculus of Variations", field: "mathematics", detail: true, requires: ["calculus-3", "ode"] },
]);
