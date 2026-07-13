registerDetail({
  cover: cover(96, "Representation Theory", "orbit", "Mathematics"),
  long:
    "Representation theory studies abstract algebraic structures by realizing their elements as linear " +
    "transformations, turning group and algebra problems into the concrete language of matrices. For " +
    "finite groups Maschke's theorem guarantees that representations break into irreducible pieces, and " +
    "Schur's lemma pins down the maps between them. Characters, the traces of these matrices, satisfy " +
    "beautiful orthogonality relations that make the character table a compact and computable fingerprint " +
    "of a group. Induction and restriction relate the representations of a group to those of its " +
    "subgroups, and the symmetric groups receive an especially elegant combinatorial treatment via " +
    "Young diagrams. The course closes with an overview of Lie algebra representations and highest " +
    "weight theory, the gateway to the continuous symmetries of physics and geometry.",
  topics: [
    "Representations & G-modules", "Subrepresentations & irreducibility",
    "Maschke's theorem", "Schur's lemma",
    "Complete reducibility", "Characters",
    "Orthogonality relations", "Character tables",
    "Regular representation", "Induced & restricted representations",
    "Frobenius reciprocity", "Tensor products of representations",
    "Representations of the symmetric group", "Young diagrams & tableaux",
    "Lie algebra representations (overview)", "Highest weights (overview)",
  ],
  recommended: [
    res("Representation Theory: A First Course", "Fulton & Harris", { type: "textbook" }),
    res("Linear Representations of Finite Groups", "Jean-Pierre Serre", { type: "textbook" }),
  ],
  supplementary: [
    res("Introduction to Representation Theory", "Etingof et al.", { type: "notes", free: true,
      url: "https://math.mit.edu/~etingof/reprbook.pdf" }),
  ],
});
