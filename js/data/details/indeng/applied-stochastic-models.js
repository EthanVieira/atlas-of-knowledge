registerDetail({
  long: "Applied Stochastic Models equips students to build and analyze probabilistic models of systems that evolve randomly over time. After reviewing the probability foundations, the course centers on the Poisson process, the fundamental model of random arrivals, and its many characterizations and properties. Discrete-time Markov chains introduce the memoryless dependence structure that makes analysis tractable, and the classification of states and computation of steady-state distributions reveal long-run behavior. Continuous-time Markov chains and the special case of birth-death processes extend these ideas to systems that change state at random times, underpinning much of queueing and reliability theory. Renewal theory generalizes the Poisson process and provides limit theorems for long-run averages. Markov reward and decision processes bring optimization into the stochastic setting, letting one choose actions to maximize expected performance. The course emphasizes applications in reliability, inventory, and operations, showing how random walks and these models illuminate real engineering systems.",
  topics: [
    "Review of probability",
    "The Poisson process",
    "Discrete-time Markov chains",
    "Classification of states",
    "Steady-state distributions",
    "Continuous-time Markov chains",
    "Birth-death processes",
    "Renewal theory",
    "Markov reward processes",
    "Markov decision processes",
    "Random walks",
    "Applications in reliability",
    "Applications in operations",
    "First-passage times",
  ],
  recommended: [
    res("Introduction to Probability Models", "Sheldon Ross", { type: "textbook" }),
    res("Dynamic Probabilistic Systems", "Ronald Howard", { type: "textbook" }),
  ],
  supplementary: [
    res("Stochastic Processes", "Sheldon Ross", { type: "textbook" }),
    res("Markov Chains and Mixing Times", "Levin, Peres and Wilmer", { type: "reference" }),
  ],
});
