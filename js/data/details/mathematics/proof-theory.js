registerDetail({
  cover: cover(96, "Proof Theory", "network", "Mathematics"),
  long: "Proof theory treats formal proofs as mathematical objects in their own right and studies their structure, transformations, and strength. Gentzen's natural deduction and sequent calculus provide the central formalisms, replacing axiom-heavy Hilbert systems with rules that mirror actual reasoning. The cut-elimination theorem, or Hauptsatz, shows that detours through lemmas can always be removed, yielding the subformula property and a wealth of consistency and conservativity results. Normalization gives an analogous analysis for natural deduction and, through the Curry–Howard correspondence, links proofs to programs and proof reduction to computation. Ordinal analysis assigns proof-theoretic ordinals that calibrate the consistency strength of theories, extending Gentzen's proof of the consistency of arithmetic. Reverse mathematics complements this by locating theorems within a hierarchy of subsystems of second-order arithmetic.",
  topics: [
    "Natural deduction",
    "The sequent calculus",
    "Structural rules",
    "Cut elimination and Gentzen's Hauptsatz",
    "The subformula property",
    "Normalization of proofs",
    "The Curry–Howard correspondence",
    "Ordinal notations",
    "Ordinal analysis",
    "Proof-theoretic ordinals",
    "Gentzen's consistency proof for arithmetic",
    "Intuitionistic and classical logic",
    "Reverse mathematics (overview)",
    "Functional interpretations",
  ],
  recommended: [
    res("Basic Proof Theory", "Troelstra & Schwichtenberg", { type: "textbook" }),
  ],
  supplementary: [
    res("Proof Theory", "Gaisi Takeuti", { type: "textbook" }),
  ],
});
