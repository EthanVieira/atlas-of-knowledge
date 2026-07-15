registerDetail({
  long:
    "Naive Set Theory develops the theory of sets informally but rigorously, providing the common " +
    "language in which nearly all of modern mathematics is expressed. Starting from the intuitive " +
    "notion of a collection, it builds the standard operations of union, intersection, and " +
    "complement, then constructs ordered pairs, relations, and functions from sets alone. The " +
    "course treats the natural numbers and mathematical induction set-theoretically, and explores " +
    "cardinality, showing via Cantor's theorem and the diagonal argument that infinities come in " +
    "different sizes. It introduces ordinals, the axiom of choice, and Zorn's lemma, while noting " +
    "the paradoxes that motivate the later axiomatic treatment.",
  topics: [
    "Sets, membership & subsets", "Union, intersection & complement",
    "Power sets & the empty set", "Ordered pairs & Cartesian products",
    "Relations & equivalence relations", "Functions as sets", "The natural numbers & induction",
    "Finite & infinite sets", "Cardinality & bijections", "Countable & uncountable sets",
    "Cantor's theorem & the diagonal argument", "Ordinals & well-ordering",
    "The axiom of choice & Zorn's lemma", "Russell's paradox & the need for axioms",
  ],
  recommended: [
    res("Naive Set Theory", "Paul Halmos", { type: "textbook" }),
    res("The Open Logic Text", "The Open Logic Project", { type: "textbook", free: true,
      url: "https://openlogicproject.org/" }),
  ],
  supplementary: [
    res("Elements of Set Theory", "Herbert Enderton", { type: "textbook" }),
  ],
});
