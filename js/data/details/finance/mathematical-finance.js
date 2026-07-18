registerDetail({
  long:
    "Mathematical Finance develops the rigorous mathematical theory of pricing and hedging financial derivatives in continuous time—the elegant framework at the foundation of modern quantitative finance. " +
    "Building on derivatives and the theory of stochastic processes, the course provides the mathematical machinery that the earlier, more intuitive treatment of derivatives assumed. " +
    "It develops the modeling of asset prices as continuous-time stochastic processes, centered on Brownian motion and geometric Brownian motion, and the stochastic calculus—Itô's lemma and the Itô integral—needed to work with them. " +
    "The central results are the fundamental theorems of asset pricing, which connect the absence of arbitrage to the existence of an equivalent martingale (risk-neutral) measure, and market completeness to its uniqueness. " +
    "The course develops the martingale approach to pricing—valuing a derivative as the discounted expectation of its payoff under the risk-neutral measure—and the change of measure (Girsanov's theorem) that underlies it. " +
    "The Black-Scholes model is derived rigorously, both through the replicating-portfolio PDE and through the martingale method, and extended. " +
    "The course develops the pricing of a range of derivatives, the modeling of interest rates and the term structure (short-rate and forward-rate models), and the treatment of stochastic volatility and jumps. " +
    "It gives the mathematical foundation for research and advanced practice in quantitative finance.",
  topics: [
    "Continuous-time models of asset prices",
    "Brownian motion",
    "Stochastic calculus and Itô's lemma",
    "Geometric Brownian motion",
    "Arbitrage and the martingale measure",
    "The fundamental theorems of asset pricing",
    "Risk-neutral valuation",
    "Change of measure (Girsanov)",
    "The Black-Scholes PDE and formula",
    "Replication and completeness",
    "Numeraires and pricing",
    "Interest-rate models and the term structure",
    "Stochastic volatility models",
    "Jump processes in finance",
    "Beyond Black-Scholes",
  ],
  recommended: [
    res("Stochastic Calculus for Finance II: Continuous-Time Models", "Steven E. Shreve", { type: "textbook" }),
    res("Arbitrage Theory in Continuous Time", "Tomas Björk", { type: "textbook" }),
  ],
  supplementary: [
    res("The Concepts and Practice of Mathematical Finance", "Mark S. Joshi", { type: "textbook" }),
    res("Options, Futures, and Other Derivatives", "John C. Hull", { type: "reference" }),
  ],
});
