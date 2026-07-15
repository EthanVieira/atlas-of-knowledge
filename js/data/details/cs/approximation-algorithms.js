registerDetail({
  long: "Approximation algorithms provide provably near-optimal solutions to NP-hard optimization problems in polynomial time, trading exactness for guaranteed performance ratios. The course develops the major design paradigms: greedy and combinatorial algorithms, local search, and the powerful use of linear programming relaxations followed by deterministic or randomized rounding. It covers the primal–dual method and dual fitting as unifying frameworks, and introduces semidefinite programming through the celebrated MAX-CUT algorithm of Goemans and Williamson. Metric methods, including tree embeddings, are used to attack problems on graphs and networks, and the traveling salesman problem serves as a running case study. The course also treats approximation schemes—PTAS and FPTAS—that achieve arbitrarily good ratios. A complementary strand studies the limits of approximation: the PCP theorem yields inapproximability results, and the unique games conjecture explains the sharp thresholds observed for many problems. Students learn both how to construct algorithms and how to prove matching hardness bounds.",
  topics: [
    "Approximation ratios and performance guarantees",
    "Greedy and combinatorial algorithms",
    "Set cover and vertex cover",
    "Local search",
    "LP relaxation and rounding",
    "Randomized rounding",
    "The primal–dual method",
    "Dual fitting",
    "Semidefinite programming and MAX-CUT",
    "Metric methods and tree embeddings",
    "The traveling salesman problem",
    "Polynomial-time approximation schemes (PTAS/FPTAS)",
    "Hardness of approximation and the PCP theorem",
    "The unique games conjecture",
  ],
  recommended: [
    res("The Design of Approximation Algorithms", "David Williamson & David Shmoys", { type: "textbook", free: true, url: "https://www.designofapproxalgs.com/" }),
    res("Approximation Algorithms", "Vijay Vazirani", { type: "textbook" }),
  ],
  supplementary: [
    res("Combinatorial Optimization: Algorithms and Complexity", "Christos Papadimitriou & Kenneth Steiglitz", { type: "textbook" }),
    res("Geometric Approximation Algorithms", "Sariel Har-Peled", { type: "textbook" }),
    res("Approximation Algorithms for NP-Hard Problems", "Dorit Hochbaum", { type: "reference" }),
  ],
});
