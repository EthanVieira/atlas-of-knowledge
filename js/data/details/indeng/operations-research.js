registerDetail({
  long: "Operations Research is the discipline of applying analytical models to help make better decisions in complex systems, from supply chains to airlines to hospitals. It begins with the modeling process: translating a messy real-world problem into a precise mathematical program with an objective, decision variables, and constraints. Linear programming is the workhorse, and the simplex method provides an elegant, geometric algorithm that moves along the vertices of a feasible polyhedron toward optimality. Duality and sensitivity analysis deepen the picture, revealing shadow prices and showing how solutions respond to changing data. The course then surveys the great families of structured models - transportation, assignment, and network problems - along with integer programming and deterministic dynamic programming for problems with indivisibilities and stages. It closes with an introduction to stochastic models, including Markov chains, queueing, and decision analysis, which bring uncertainty into the modeling toolkit. Together these techniques form a coherent language for optimizing the operation of organizations.",
  topics: [
    "The OR modeling process",
    "Linear programming formulation",
    "The simplex method",
    "Duality theory",
    "Sensitivity analysis",
    "Transportation problems",
    "Assignment problems",
    "Network models",
    "Integer programming overview",
    "Deterministic dynamic programming",
    "Markov chains",
    "Queueing overview",
    "Decision analysis basics",
    "Shadow prices",
  ],
  recommended: [
    res("Introduction to Operations Research", "Frederick Hillier and Gerald Lieberman", { type: "textbook" }),
    res("Operations Research: Applications and Algorithms", "Wayne Winston", { type: "textbook" }),
  ],
  supplementary: [
    res("Introduction to Linear Optimization", "Dimitris Bertsimas and John Tsitsiklis", { type: "textbook" }),
    res("Model Building in Mathematical Programming", "H. Paul Williams", { type: "reference" }),
  ],
});
