registerDetail({
  long: "Linear and Integer Programming develops the theory and algorithms behind the most widely used models in optimization. It starts with the geometry of linear programs, where feasible regions are polyhedra and optimal solutions live at vertices, and it builds the simplex method as a principled walk along edges of that polyhedron. From there it moves to the revised simplex method for computational efficiency and to the ellipsoid and interior-point methods that establish polynomial-time solvability. Duality and complementary slackness provide certificates of optimality and connect primal and dual solutions. The integer side introduces formulations that capture logical and combinatorial structure, then branch-and-bound, cutting planes, and their fusion in branch-and-cut as the engines that solve them. Advanced decomposition ideas - Lagrangian relaxation, column generation, and Dantzig-Wolfe decomposition - let large structured problems be broken into tractable pieces. The course grounds all of this in computational modeling with modern solvers so that theory connects to practice.",
  topics: [
    "LP geometry and polyhedra",
    "The simplex method",
    "Revised simplex method",
    "Ellipsoid and interior-point methods",
    "LP duality",
    "Complementary slackness",
    "Integer programming formulations",
    "Branch-and-bound",
    "Cutting planes",
    "Branch-and-cut",
    "Lagrangian relaxation",
    "Column generation",
    "Dantzig-Wolfe decomposition",
    "Computational modeling and solvers",
  ],
  recommended: [
    res("Introduction to Linear Optimization", "Dimitris Bertsimas and John Tsitsiklis", { type: "textbook" }),
    res("Integer and Combinatorial Optimization", "George Nemhauser and Laurence Wolsey", { type: "textbook" }),
  ],
  supplementary: [
    res("Integer Programming", "Laurence Wolsey", { type: "textbook" }),
    res("Linear Programming and Network Flows", "Bazaraa, Jarvis and Sherali", { type: "reference" }),
  ],
});
