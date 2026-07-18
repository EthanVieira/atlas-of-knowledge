registerDetail({
  long:
    "Formal Semantics models natural-language meaning with the precision of logic, set theory, and the lambda calculus, treating the interpretation of sentences as a rigorous compositional computation. " +
    "The course builds on the Montagovian program, which showed that natural languages can be given a model-theoretic semantics as systematic as that of formal logic. " +
    "It develops the type-theoretic apparatus in which every expression is assigned a semantic type, and functional application and lambda abstraction combine meanings in step with the syntax. " +
    "Truth is defined relative to a model, and the course works through the interpretation of predicates, connectives, and above all quantifiers, using generalized quantifier theory to analyze noun phrases and scope ambiguities. " +
    "Intensionality is treated through possible-world semantics, giving an account of modality, propositional attitudes, and the failure of substitution in opaque contexts. " +
    "The course covers the semantics of tense and aspect, definiteness and presupposition, and dynamic approaches to anaphora and discourse. " +
    "Throughout, students learn to write explicit semantic derivations, gaining the technical fluency needed for research in semantics and its interfaces.",
  topics: [
    "Model-theoretic semantics and the Montague program",
    "Semantic types and the typed lambda calculus",
    "Functional application and composition",
    "Sets, relations, and functions for meaning",
    "Truth in a model",
    "Generalized quantifiers",
    "Scope and quantifier raising",
    "Lambda abstraction and variable binding",
    "Intensionality and possible worlds",
    "Modality and propositional attitudes",
    "Tense and aspect",
    "Definiteness and presupposition",
    "Dynamic semantics and discourse representation",
    "Focus and alternative semantics",
    "The syntax-semantics interface",
  ],
  recommended: [
    res("Semantics in Generative Grammar", "Irene Heim & Angelika Kratzer", { type: "textbook" }),
    res("Meaning and Grammar: An Introduction to Semantics", "Gennaro Chierchia & Sally McConnell-Ginet", { type: "textbook" }),
    res("Invitation to Formal Semantics", "Elizabeth Coppock & Lucas Champollion", { type: "textbook", free: true, url: "https://eecoppock.info/bootcamp/semantics-boot-camp.pdf" }),
  ],
  supplementary: [
    res("Mathematical Methods in Linguistics", "Barbara H. Partee, Alice ter Meulen & Robert E. Wall", { type: "reference" }),
    res("Logic, Language, and Meaning (Vols. 1-2)", "L. T. F. Gamut", { type: "reference" }),
  ],
});
