registerDetail({
  long:
    "Group theory studies symmetry in its purest algebraic form: sets equipped with a single " +
    "associative operation, an identity and inverses. Starting from the basic definitions it builds " +
    "toward powerful structural results, using group actions to translate abstract questions into " +
    "combinatorics and geometry. The Sylow theorems dissect a finite group through its prime-power " +
    "subgroups, while composition series and the Jordan-Holder theorem reveal the simple groups as " +
    "the indivisible building blocks. Along the way the course develops solvable and nilpotent groups, " +
    "free groups and presentations, and the semidirect products that assemble complicated groups from " +
    "simpler pieces. The result is the language of symmetry that pervades Galois theory, representation " +
    "theory, topology and much of modern mathematics.",
  topics: [
    "Groups, subgroups & cosets", "Normal subgroups & quotients",
    "Homomorphisms & isomorphism theorems", "Group actions",
    "Orbit-stabilizer theorem", "The class equation", "p-groups",
    "The Sylow theorems", "Solvable groups", "Nilpotent groups",
    "Composition series & Jordan-Holder", "Simple groups & simplicity of A_n",
    "Free groups & presentations", "Semidirect products",
    "Symmetric & alternating groups", "Abelian groups & structure theorem",
  ],
  recommended: [
    res("Abstract Algebra", "Dummit & Foote", { type: "textbook" }),
    res("An Introduction to the Theory of Groups", "Joseph Rotman", { type: "textbook" }),
  ],
  supplementary: [
    res("Group Theory", "J.S. Milne", { type: "notes", free: true,
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf" }),
  ],
});
