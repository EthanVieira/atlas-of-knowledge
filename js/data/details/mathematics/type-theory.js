registerDetail({
  cover: cover(96, "Type Theory", "network", "Mathematics"),
  long: "Type theory is a foundational framework in which every term carries a type, unifying logic, computation, and the foundations of mathematics. Starting from the simply typed lambda-calculus, the Curry–Howard correspondence reveals that propositions are types and proofs are programs, so that normalization of terms corresponds to the simplification of proofs. Richer systems add polymorphism through System F, dependency through dependent types, and inductively defined data through inductive types, arranged into universes to avoid paradox. The calculus of constructions and Martin-Löf type theory provide expressive foundations in which ordinary mathematics can be formalized. These theories are realized in proof assistants such as Coq, Agda, and Lean, where machine-checked proofs and verified programs are written in the same language. The subject sits at the intersection of mathematical logic, programming language theory, and constructive mathematics.",
  topics: [
    "The simply typed lambda-calculus",
    "Beta reduction and normalization",
    "The Curry–Howard correspondence",
    "System F and polymorphism",
    "Dependent types",
    "Inductive types",
    "Universes",
    "The calculus of constructions",
    "Propositions as types",
    "Martin-Löf type theory",
    "Identity types and equality",
    "Proof assistants (Coq, Agda, Lean)",
    "Constructive logic",
    "Type checking and inference",
  ],
  recommended: [
    res("Type Theory and Formal Proof", "Nederpelt & Geuvers", { type: "textbook" }),
    res("Software Foundations", "Pierce et al.", { url: "https://softwarefoundations.cis.upenn.edu/", type: "interactive", free: true }),
  ],
  supplementary: [
    res("Types and Programming Languages", "Benjamin Pierce", { type: "textbook" }),
  ],
});
