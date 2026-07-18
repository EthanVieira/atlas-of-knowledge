registerDetail({
  long:
    "Derivatives and Options studies the financial instruments whose value derives from an underlying asset—forwards, futures, swaps, and above all options—and the theory and practice of pricing and using them. " +
    "Building on investments and the mathematics of stochastic processes, the course develops one of the central achievements of modern finance. " +
    "It begins with the forward and futures contracts—the mechanics of the markets, the pricing of forwards and futures by arbitrage (cost of carry), and their use for hedging and speculation. " +
    "Swaps, especially interest-rate and currency swaps, are developed. " +
    "The heart of the course is options: the payoffs and properties of calls and puts, the fundamental bounds and put-call parity that arbitrage imposes, and the trading strategies built from them. " +
    "The course develops option pricing from first principles: the binomial model and risk-neutral valuation, the powerful idea that a derivative can be priced by replication and no-arbitrage, and its continuous-time culmination in the Black-Scholes-Merton model. " +
    "The 'Greeks'—the sensitivities of an option's value to the underlying, time, volatility, and rates—are developed as the tools of risk management, and the crucial role of volatility, implied volatility, and the volatility smile is examined. " +
    "Exotic options and other derivatives are surveyed. " +
    "The course gives both the theoretical framework of arbitrage-free pricing and the practical understanding to value, trade, and manage the risk of derivatives.",
  topics: [
    "Forwards and futures",
    "Pricing forwards by arbitrage (cost of carry)",
    "Hedging with futures",
    "Swaps",
    "Options: calls, puts, and payoffs",
    "Put-call parity and arbitrage bounds",
    "Option trading strategies",
    "The binomial option-pricing model",
    "Risk-neutral valuation",
    "Replication and no-arbitrage",
    "The Black-Scholes-Merton model",
    "The Greeks and hedging",
    "Volatility and the volatility smile",
    "Exotic options",
    "Managing a derivatives book",
  ],
  recommended: [
    res("Options, Futures, and Other Derivatives", "John C. Hull", { type: "textbook" }),
    res("Derivatives Markets", "Robert L. McDonald", { type: "textbook" }),
  ],
  supplementary: [
    res("Option Volatility and Pricing", "Sheldon Natenberg", { type: "reference" }),
    res("Options as a Strategic Investment", "Lawrence G. McMillan", { type: "reference" }),
  ],
});
