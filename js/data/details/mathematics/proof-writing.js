registerDetail({
  long:
    "Mathematical Proof teaches the craft of rigorous argument that underlies all of higher " +
    "mathematics. It begins with the language of logic and sets, then develops the standard " +
    "proof techniques: direct proof, proof by contrapositive, proof by contradiction, and " +
    "mathematical induction. Students learn to read and write precise definitions, to unpack " +
    "quantifiers, and to reason carefully about functions, relations, and cardinality. The " +
    "course emphasizes clear mathematical writing as much as logical correctness, since a proof " +
    "must communicate as well as convince. It is the bridge from computational mathematics to " +
    "the abstract, theorem-and-proof style of the university curriculum.",
  topics: [
    "Statements, connectives & truth tables", "Quantifiers & their negation",
    "Sets, subsets & set operations", "Direct proof", "Proof by contrapositive",
    "Proof by contradiction", "Mathematical induction & strong induction",
    "Proofs involving divisibility & congruence", "Functions: injective, surjective, bijective",
    "Relations & equivalence relations", "Cardinality & countability",
    "Proof by cases & exhaustion", "Disproof & counterexamples", "Writing clear mathematical prose",
  ],
  recommended: [
    res("Book of Proof", "Richard Hammack", { type: "textbook", free: true,
      url: "https://www.people.vcu.edu/~rhammack/BookOfProof/" }),
    res("How to Prove It", "Daniel Velleman", { type: "textbook" }),
  ],
  supplementary: [
    res("Proofs: A Long-Form Mathematics Textbook", "Jay Cummings", { type: "textbook" }),
  ],
});
