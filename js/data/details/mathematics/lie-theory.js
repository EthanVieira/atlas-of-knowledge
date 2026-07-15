registerDetail({
  long:
    "Lie theory unites analysis, algebra and geometry in the study of continuous symmetry. A Lie group " +
    "is a group that is also a smooth manifold, and the exponential map linearizes it near the identity " +
    "to produce its Lie algebra, where the noncommutativity is encoded in the Lie bracket. This passage " +
    "from a curved group to a linear algebra is what makes the theory so powerful, converting hard " +
    "geometric questions into tractable algebraic ones. For semisimple Lie algebras the structure is " +
    "governed by root systems, Cartan subalgebras and the Killing form, leading to a complete and " +
    "remarkably clean classification. Highest weight theory then describes all finite-dimensional " +
    "representations, and the Weyl character formula computes their characters explicitly. These results " +
    "are foundational for modern geometry, number theory and theoretical physics.",
  topics: [
    "Lie groups & smooth structure", "The exponential map",
    "Lie algebras", "The Lie bracket",
    "One-parameter subgroups", "Representations of Lie groups & algebras",
    "The adjoint representation", "Nilpotent & solvable Lie algebras",
    "Semisimple Lie algebras", "Cartan subalgebras",
    "Root systems & Weyl groups", "The Killing form",
    "Classification of semisimple Lie algebras", "Dynkin diagrams",
    "Highest weight theory", "The Weyl character formula (overview)",
  ],
  recommended: [
    res("Introduction to Lie Algebras and Representation Theory", "James Humphreys", { type: "textbook" }),
    res("Lie Groups, Lie Algebras, and Representations", "Brian Hall", { type: "textbook" }),
  ],
  supplementary: [
    res("Introduction to Lie Groups and Lie Algebras", "Kirillov Jr.", { type: "notes", free: true,
      url: "https://pi.math.cornell.edu/~apkirillov/" }),
  ],
});
