registerDetail({
  long: "Queueing Theory is the mathematical study of waiting lines, providing tools to predict congestion, delay, and resource utilization in systems ranging from call centers to factories to computer networks. The course opens with the standard vocabulary and Kendall notation for describing queues by their arrival process, service distribution, number of servers, and capacity. Little's law, a remarkably general relationship between average queue length, arrival rate, and waiting time, threads through the entire subject. The M/M/1 queue serves as the analytical starting point, and the M/M/c and M/M/c/K systems extend the analysis to multiple servers and finite capacity. Relaxing the exponential service assumption leads to the M/G/1 queue and the Pollaczek-Khinchine formula, which quantifies how service variability inflates delay. Networks of queues and Jackson networks let interconnected service stations be analyzed together, while priority queues, bounds, and approximations handle more complex disciplines. Applications in service operations and manufacturing systems ground the theory in the design and staffing of real systems.",
  topics: [
    "Queueing terminology",
    "Kendall notation",
    "Little's law",
    "The M/M/1 queue",
    "M/M/c systems",
    "M/M/c/K systems",
    "The M/G/1 queue",
    "The Pollaczek-Khinchine formula",
    "Networks of queues",
    "Jackson networks",
    "Priority queues",
    "Bounds and approximations",
    "Queueing in service systems",
    "Queueing in manufacturing systems",
  ],
  recommended: [
    res("Fundamentals of Queueing Theory", "Donald Gross, John Shortle, James Thompson and Carl Harris", { type: "textbook" }),
    res("Queueing Systems", "Leonard Kleinrock", { type: "textbook" }),
  ],
  supplementary: [
    res("Introduction to Probability Models", "Sheldon Ross", { type: "textbook" }),
    res("Stochastic Modeling and the Theory of Queues", "Ronald Wolff", { type: "reference" }),
  ],
});
