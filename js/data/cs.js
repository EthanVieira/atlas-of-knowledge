/* ============================================================================
 *  COMPUTER SCIENCE
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/cs/<id>.js; the `detail: true` flag
 *  tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Foundations ---
  { id: "programming-fundamentals", title: "Programming Fundamentals", field: "cs", detail: true, requires: [] },
  { id: "digital-logic", title: "Digital Logic & Systems", field: "cs", detail: true, requires: ["discrete-math"] },
  { id: "data-structures", title: "Data Structures", field: "cs", detail: true, requires: ["programming-fundamentals"] },
  { id: "algorithms", title: "Algorithms", field: "cs", detail: true, requires: ["data-structures", "discrete-math"] },
  { id: "theory-of-computation", title: "Theory of Computation", field: "cs", detail: true, requires: ["discrete-math"] },

  // --- Systems ---
  { id: "computer-architecture", title: "Computer Architecture", field: "cs", detail: true, requires: ["digital-logic", "programming-fundamentals"] },
  { id: "operating-systems", title: "Operating Systems", field: "cs", detail: true, requires: ["computer-architecture", "data-structures"] },
  { id: "computer-networks", title: "Computer Networks", field: "cs", detail: true, requires: ["operating-systems"] },
  { id: "databases", title: "Database Systems", field: "cs", detail: true, requires: ["data-structures", "algorithms"] },
  { id: "concurrency", title: "Concurrency & Parallelism", field: "cs", detail: true, requires: ["operating-systems"] },
  { id: "distributed-systems", title: "Distributed Systems", field: "cs", detail: true, requires: ["operating-systems", "computer-networks"] },
  { id: "programming-languages", title: "Programming Languages", field: "cs", detail: true, requires: ["theory-of-computation"] },
  { id: "compilers", title: "Compilers", field: "cs", detail: true, requires: ["programming-languages", "data-structures"] },
  { id: "programming-language-theory", title: "Programming Language Theory", field: "cs", detail: true, requires: ["programming-languages", "mathematical-logic"] },
  { id: "formal-verification", title: "Formal Verification", field: "cs", detail: true, requires: ["programming-language-theory", "mathematical-logic"] },
  { id: "cryptography", title: "Cryptography", field: "cs", detail: true, requires: ["elementary-number-theory", "algorithms"] },
  { id: "computer-security", title: "Computer Security", field: "cs", detail: true, requires: ["operating-systems", "computer-networks", "cryptography"] },
  { id: "software-engineering", title: "Software Engineering", field: "cs", detail: true, requires: ["data-structures"] },

  // --- Theory ---
  { id: "computational-complexity", title: "Computational Complexity", field: "cs", detail: true, requires: ["theory-of-computation", "algorithms"] },
  { id: "advanced-algorithms", title: "Advanced Algorithms", field: "cs", detail: true, requires: ["algorithms"] },
  { id: "randomized-algorithms", title: "Randomized Algorithms", field: "cs", detail: true, requires: ["algorithms", "probability"] },
  { id: "approximation-algorithms", title: "Approximation Algorithms", field: "cs", detail: true, requires: ["advanced-algorithms", "computational-complexity"] },
  { id: "computational-geometry", title: "Computational Geometry", field: "cs", detail: true, requires: ["algorithms", "linear-algebra"] },
  { id: "information-theory", title: "Information Theory", field: "cs", detail: true, requires: ["probability"] },
  { id: "quantum-computing", title: "Quantum Computing", field: "cs", detail: true, requires: ["linear-algebra", "algorithms"] },
  { id: "digital-signal-processing", title: "Digital Signal Processing", field: "cs", detail: true, requires: ["fourier-analysis", "linear-algebra"] },

  // --- Artificial intelligence & ML ---
  { id: "artificial-intelligence", title: "Artificial Intelligence", field: "cs", detail: true, requires: ["algorithms", "probability"] },
  { id: "machine-learning", title: "Machine Learning", field: "cs", detail: true, requires: ["linear-algebra", "probability", "algorithms"] },
  { id: "deep-learning", title: "Deep Learning", field: "cs", detail: true, requires: ["machine-learning", "optimization"] },
  { id: "reinforcement-learning", title: "Reinforcement Learning", field: "cs", detail: true, requires: ["machine-learning"] },
  { id: "computer-vision", title: "Computer Vision", field: "cs", detail: true, requires: ["deep-learning", "linear-algebra"] },
  { id: "natural-language-processing", title: "Natural Language Processing", field: "cs", detail: true, requires: ["deep-learning"] },
  { id: "probabilistic-graphical-models", title: "Probabilistic Graphical Models", field: "cs", detail: true, requires: ["machine-learning", "probability"] },
  { id: "statistical-learning-theory", title: "Statistical Learning Theory", field: "cs", detail: true, requires: ["machine-learning", "probability"] },
  { id: "computer-graphics", title: "Computer Graphics", field: "cs", detail: true, requires: ["linear-algebra", "algorithms"] },
  { id: "bioinformatics", title: "Bioinformatics", field: "cs", detail: true, requires: ["algorithms", "molecular-biology", "statistics"] },
  { id: "robotics", title: "Robotics", field: "cs", detail: true, requires: ["linear-algebra", "machine-learning", "classical-mechanics"] },

]);
