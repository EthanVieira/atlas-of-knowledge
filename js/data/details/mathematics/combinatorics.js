registerDetail({
  cover: cover(96, "Combinatorics", "network", "Mathematics"),
  long: "Combinatorics is the art of counting, arranging, and structuring discrete collections, blending clever elementary arguments with powerful general machinery. It begins with the basic principles of counting—permutations, combinations, and the binomial and multinomial theorems—then sharpens them with inclusion–exclusion and the pigeonhole principle. Recurrences and generating functions turn counting problems into algebra, letting closed forms and asymptotics fall out of formal power series. Beyond enumeration, the field embraces existence and extremal questions through Ramsey theory and the probabilistic method, which proves objects exist by showing a random construction succeeds. Order-theoretic tools like Möbius inversion on posets unify many results, and the course surveys designs and codes as structured combinatorial objects. The ideas permeate computer science, probability, and algebra.",
  topics: [
    "Basic counting principles",
    "Permutations & combinations",
    "The binomial theorem",
    "The multinomial theorem",
    "Inclusion–exclusion",
    "Recurrences",
    "Generating functions",
    "The pigeonhole principle",
    "Ramsey theory",
    "The probabilistic method",
    "Partially ordered sets",
    "Möbius inversion",
    "Designs & codes (overview)",
  ],
  recommended: [
    res("generatingfunctionology", "Herbert Wilf", { type: "textbook", free: true, url: "https://www2.math.upenn.edu/~wilf/gfology2.pdf" }),
    res("Enumerative Combinatorics", "Richard Stanley", { type: "textbook" }),
  ],
  supplementary: [
    res("A Course in Combinatorics", "van Lint & Wilson", { type: "textbook" }),
  ],
});
