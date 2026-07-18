registerDetail({
  long: "Network Flows and Optimization studies a beautifully unified class of optimization problems defined on graphs, where nodes and arcs model everything from road systems to communication networks to project logic. The course develops the vocabulary of graphs and then works through the canonical problems in order of increasing generality. Shortest-path algorithms such as Dijkstra and Bellman-Ford find least-cost routes, minimum spanning trees connect nodes at least cost, and maximum-flow methods push as much as possible through a capacitated network. The max-flow/min-cut theorem is the theoretical centerpiece, linking flows to combinatorial cuts and duality. The minimum-cost flow problem generalizes many of these, and the network simplex method specializes the simplex algorithm to exploit network structure for great efficiency. Assignment and transportation problems appear as special cases, and multicommodity flows extend the framework to shared networks. Throughout, applications in logistics and transportation motivate the algorithms and show why network models are among the most practically important in operations research.",
  topics: [
    "Network models and graph terminology",
    "Shortest paths with Dijkstra",
    "Bellman-Ford algorithm",
    "Minimum spanning trees",
    "Maximum flow and min-cut",
    "The max-flow/min-cut theorem",
    "Minimum-cost flow",
    "The network simplex method",
    "Assignment as network flow",
    "Transportation as network flow",
    "Multicommodity flows",
    "Residual networks and augmenting paths",
    "Applications in logistics",
    "Applications in transportation",
  ],
  recommended: [
    res("Network Flows: Theory, Algorithms, and Applications", "Ravindra Ahuja, Thomas Magnanti and James Orlin", { type: "textbook" }),
  ],
  supplementary: [
    res("Introduction to Linear Optimization", "Dimitris Bertsimas and John Tsitsiklis", { type: "textbook" }),
    res("Combinatorial Optimization: Algorithms and Complexity", "Christos Papadimitriou and Kenneth Steiglitz", { type: "reference" }),
  ],
});
