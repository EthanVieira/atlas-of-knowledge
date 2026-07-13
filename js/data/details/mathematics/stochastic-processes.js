registerDetail({
  cover: cover(96, "Stochastic Processes", "waves", "Mathematics"),
  long: "Stochastic processes study systems that evolve randomly over time, from queues and populations to stock prices and diffusing particles. The theory begins with Markov chains, whose memoryless dynamics lead to stationary distributions and long-run behavior, and extends through Poisson processes to continuous-time Markov chains. Martingales provide a unifying language for fair games and for controlling expectations along a process. The centerpiece is Brownian motion, whose nowhere-differentiable paths demand a new calculus: the Itô integral and Itô's formula replace the ordinary chain rule. These tools let us pose and solve stochastic differential equations, and the Feynman–Kac formula ties their solutions back to partial differential equations. Applications span mathematical finance, physics, and engineering.",
  topics: [
    "Markov chains",
    "Stationary distributions",
    "Recurrence & transience",
    "Poisson processes",
    "Continuous-time Markov chains",
    "Martingales in continuous time",
    "Brownian motion",
    "The Itô integral",
    "Itô's formula",
    "Stochastic differential equations",
    "The Feynman–Kac formula",
    "Applications",
  ],
  recommended: [
    res("Brownian Motion and Stochastic Calculus", "Karatzas & Shreve", { type: "textbook" }),
    res("Stochastic Differential Equations", "Bernt Øksendal", { type: "textbook" }),
  ],
  supplementary: [
    res("Probability: Theory and Examples", "Rick Durrett", { type: "textbook", free: true, url: "https://services.math.duke.edu/~rtd/PTE/pte.html" }),
  ],
});
