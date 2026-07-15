registerDetail({
  long: "Theory of Computation asks what problems can be solved by machines, how those machines can be classified, and where the ultimate limits of " +
    "computation lie. The course develops a hierarchy of abstract models of increasing power, beginning with finite automata and the regular languages " +
    "they recognize, characterized equivalently by regular expressions. Context-free grammars and pushdown automata extend this power to nested and " +
    "recursive structure, with pumping lemmas providing tools to prove that certain languages fall outside each class. Turing machines and the " +
    "Church-Turing thesis then capture the notion of algorithmic computation in full generality, leading to the central results on decidability and " +
    "recognizability, the undecidability of the halting problem, and reductions that transfer undecidability between problems. Rice's theorem generalizes " +
    "these limits to essentially all nontrivial properties of programs, and a brief look at the arithmetic hierarchy and at time and space complexity " +
    "points toward complexity theory. The course is proof-oriented, training students to reason precisely about languages, machines, and the boundary " +
    "between the computable and the uncomputable.",
  topics: [
    "Finite automata (DFA, NFA)",
    "Regular expressions and regular languages",
    "The pumping lemma for regular languages",
    "Context-free grammars and languages",
    "Pushdown automata",
    "The pumping lemma for context-free languages",
    "Turing machines and their variants",
    "The Church-Turing thesis",
    "Decidability and recognizability",
    "The halting problem",
    "Reducibility and undecidability",
    "Rice's theorem",
    "The arithmetic hierarchy (introduction)",
    "Time and space complexity (introduction)",
  ],
  recommended: [
    res("Introduction to the Theory of Computation", "Michael Sipser", { type: "textbook" }),
    res("Introduction to Automata Theory, Languages, and Computation", "Hopcroft, Motwani, and Ullman", { type: "textbook" }),
  ],
  supplementary: [
    res("Computational Complexity: A Modern Approach", "Sanjeev Arora and Boaz Barak", { type: "textbook" }),
    res("Elements of the Theory of Computation", "Harry Lewis and Christos Papadimitriou", { type: "textbook" }),
    res("Automata Theory (Stanford, Jeff Ullman)", "Jeff Ullman", { type: "lectures" }),
  ],
});
