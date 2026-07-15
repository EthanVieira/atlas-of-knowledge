registerDetail({
  long: "Measure-theoretic probability rebuilds the subject on the rigorous foundation of measure theory, resolving the paradoxes that elementary treatments leave open. Probabilities become measures on σ-algebras, random variables become measurable functions, and expectation becomes the Lebesgue integral—a unification that handles discrete, continuous, and mixed distributions uniformly. This machinery makes precise the notions of convergence needed to prove the strong law of large numbers and the central limit theorem via characteristic functions. Conditional expectation is recast as a projection defined through the Radon–Nikodym theorem, opening the door to martingales and their convergence theorems. The course closes with a first look at Brownian motion, the bridge to stochastic analysis. It is the standard graduate gateway to modern probability.",
  topics: [
    "Probability spaces & σ-algebras",
    "Random variables as measurable functions",
    "Expectation as the Lebesgue integral",
    "Independence",
    "The Borel–Cantelli lemmas",
    "Modes of convergence",
    "Laws of large numbers",
    "Characteristic functions",
    "Weak convergence",
    "The central limit theorem",
    "Conditional expectation",
    "Martingales",
    "Martingale convergence",
    "Brownian motion (introduction)",
  ],
  recommended: [
    res("Probability: Theory and Examples", "Rick Durrett", { type: "textbook", free: true, url: "https://services.math.duke.edu/~rtd/PTE/pte.html" }),
    res("Probability with Martingales", "David Williams", { type: "textbook" }),
  ],
  supplementary: [
    res("Probability and Measure", "Patrick Billingsley", { type: "textbook" }),
  ],
});
