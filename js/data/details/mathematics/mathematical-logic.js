registerDetail({
  long:
    "Mathematical Logic makes mathematical reasoning itself an object of study, treating proofs " +
    "and statements as formal objects that can be analyzed with mathematical precision. It begins " +
    "with propositional logic and its truth-functional semantics, then develops first-order " +
    "predicate logic with quantifiers, models, and formal deduction. Central results tie syntax " +
    "to semantics: the soundness and completeness theorems show that provability and truth " +
    "coincide, while the compactness and Löwenheim–Skolem theorems reveal the surprising limits " +
    "of what first-order theories can pin down. The course culminates in Gödel's incompleteness " +
    "theorems, which show that any sufficiently strong consistent theory contains true statements " +
    "it cannot prove.",
  topics: [
    "Propositional logic & connectives", "Truth tables & tautologies",
    "Formal proof systems & deduction", "First-order (predicate) logic & quantifiers",
    "Structures, models & interpretations", "Satisfaction & logical consequence",
    "Soundness theorem", "Completeness theorem", "The compactness theorem",
    "Löwenheim–Skolem theorems", "Decidability & the decision problem",
    "Computability & recursive functions", "Gödel's first incompleteness theorem",
    "Gödel's second incompleteness theorem",
  ],
  recommended: [
    res("forall x: Calgary", "P. D. Magnus, Tim Button et al.", { type: "textbook", free: true,
      url: "https://forallx.openlogicproject.org/" }),
    res("A Mathematical Introduction to Logic", "Herbert Enderton", { type: "textbook" }),
  ],
  supplementary: [
    res("The Open Logic Text", "The Open Logic Project", { type: "textbook", free: true,
      url: "https://openlogicproject.org/" }),
    res("Mathematical Logic", "Ebbinghaus, Flum & Thomas", { type: "textbook" }),
  ],
});
