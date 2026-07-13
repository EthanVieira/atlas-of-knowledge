registerDetail({
  cover: cover(96, "Graph Theory", "network", "Mathematics"),
  long: "Graph theory studies networks of vertices joined by edges, a deceptively simple object that models everything from road maps and social ties to molecules and algorithms. The subject develops structural ideas—trees, connectivity, and cycles—alongside classical existence questions such as when a graph admits an Eulerian or Hamiltonian tour. Matchings and Hall's theorem, planarity and Kuratowski's characterization, and graph coloring reveal deep interplay between combinatorial constraints and geometry. Flows and the max-flow min-cut theorem connect graphs to optimization and duality. The course reaches toward extremal and probabilistic frontiers—Turán-type results, Ramsey theory, and the theory of random graphs—where counting and structure meet. Its results are foundational for computer science and combinatorial optimization.",
  topics: [
    "Graphs & subgraphs",
    "Trees & spanning trees",
    "Connectivity",
    "Eulerian graphs",
    "Hamiltonian graphs",
    "Matchings & Hall's theorem",
    "Planarity",
    "Kuratowski's theorem",
    "Graph coloring",
    "Chromatic number",
    "Flows & max-flow min-cut",
    "Extremal graph theory",
    "Ramsey theory",
    "Random graphs",
  ],
  recommended: [
    res("Graph Theory", "Reinhard Diestel", { type: "textbook", free: true, url: "https://diestel-graph-theory.com/" }),
    res("Introduction to Graph Theory", "Douglas West", { type: "textbook" }),
  ],
  supplementary: [
    res("Modern Graph Theory", "Béla Bollobás", { type: "textbook" }),
  ],
});
