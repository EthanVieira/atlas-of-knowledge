registerDetail({
  long: "Randomized algorithms use random choices during computation to achieve simplicity, efficiency, or guarantees that deterministic methods struggle to match. The course begins with the probabilistic method and the distinction between Las Vegas and Monte Carlo algorithms, and builds a core analytical toolkit around linearity of expectation, the union bound, and concentration inequalities from Markov and Chebyshev up to Chernoff bounds. These tools are applied to classic algorithms such as randomized quicksort and selection, and to hashing with universal hash families and fingerprinting via the Karp–Rabin method. A major theme is random walks and Markov chains, including mixing times and Markov chain Monte Carlo sampling. The course also develops randomized rounding of linear programs, dimensionality reduction through the Johnson–Lindenstrauss lemma, and streaming and sketching techniques for high-volume data. It closes with derandomization, showing how randomness can sometimes be reduced or removed while preserving performance. Throughout, the emphasis is on rigorous probabilistic analysis of correctness and running time.",
  topics: [
    "The probabilistic method",
    "Las Vegas vs Monte Carlo algorithms",
    "Linearity of expectation",
    "Concentration inequalities (Markov, Chebyshev, Chernoff)",
    "The union bound",
    "Randomized quicksort and selection",
    "Hashing and universal hash families",
    "Fingerprinting and the Karp–Rabin algorithm",
    "Random walks and Markov chains",
    "Mixing times",
    "Markov chain Monte Carlo",
    "Randomized rounding of LPs",
    "Dimensionality reduction (Johnson–Lindenstrauss)",
    "Streaming and sketching",
    "Derandomization",
  ],
  recommended: [
    res("Randomized Algorithms", "Rajeev Motwani & Prabhakar Raghavan", { type: "textbook" }),
    res("Probability and Computing", "Michael Mitzenmacher & Eli Upfal", { type: "textbook" }),
  ],
  supplementary: [
    res("The Probabilistic Method", "Noga Alon & Joel Spencer", { type: "textbook" }),
    res("Concentration of Measure for the Analysis of Randomized Algorithms", "Devdatt Dubhashi & Alessandro Panconesi", { type: "textbook" }),
    res("Markov Chains and Mixing Times", "David Levin & Yuval Peres", { type: "reference" }),
  ],
});
