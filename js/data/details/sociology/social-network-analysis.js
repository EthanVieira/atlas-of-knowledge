registerDetail({
  long:
    "Social Network Analysis treats social structure not as a set of individual attributes but as a pattern of relationships, and gives it a rigorous formal and empirical treatment. " +
    "The course develops the graph-theoretic foundations—nodes, ties, directed and weighted relations, and the matrix representations that make networks computable. " +
    "It builds the core measures of position and importance: degree, betweenness, closeness, and eigenvector centrality, and their substantive interpretation as power, brokerage, and influence. " +
    "Structural concepts central to sociology are formalized: Granovetter's strength of weak ties, Burt's structural holes and brokerage, and the cohesive subgroups revealed by community-detection algorithms. " +
    "The course examines processes on networks—diffusion, contagion, and the spread of information, behavior, and disease—and how structure shapes them. " +
    "Statistical models for networks, from random-graph baselines to exponential random graph models (ERGMs) and stochastic actor-oriented models, let researchers test hypotheses about tie formation. " +
    "Applications range from friendship and organizational networks to online platforms, using software to analyze real relational data.",
  topics: [
    "Networks as social structure",
    "Graph representations and adjacency matrices",
    "Degree, paths, and connectivity",
    "Centrality: degree, betweenness, closeness, eigenvector",
    "The strength of weak ties",
    "Structural holes and brokerage",
    "Cohesion, cliques, and community detection",
    "Structural equivalence and roles",
    "Homophily and tie formation",
    "Diffusion and contagion on networks",
    "Small-world and scale-free structure",
    "Random-graph and network models",
    "Exponential random graph models (ERGMs)",
    "Dynamic and longitudinal networks",
    "Collecting and analyzing network data",
  ],
  recommended: [
    res("Networks, Crowds, and Markets", "David Easley & Jon Kleinberg", { type: "textbook", free: true, url: "https://www.cs.cornell.edu/home/kleinber/networks-book/" }),
    res("Social Network Analysis: Methods and Applications", "Stanley Wasserman & Katherine Faust", { type: "textbook" }),
    res("Networks", "Mark Newman", { type: "textbook" }),
  ],
  supplementary: [
    res("Analyzing Social Networks", "Stephen P. Borgatti, Martin G. Everett & Jeffrey C. Johnson", { type: "textbook" }),
    res("Social Network Analysis", "John Scott", { type: "textbook" }),
  ],
});
