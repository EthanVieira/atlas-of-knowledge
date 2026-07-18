registerDetail({
  long:
    "Financial economics applies the tools of microeconomics to the allocation of resources across time and states of the world under uncertainty, explaining how risk is priced and capital is allocated through financial markets. " +
    "The course begins with choice under uncertainty and portfolio theory, deriving mean-variance optimization and the efficient frontier from investor preferences over risk and return. " +
    "The Capital Asset Pricing Model (CAPM) then links an asset's expected return to its systematic risk, and the arbitrage pricing theory generalizes this to multiple factors. " +
    "A unifying idea—no-arbitrage pricing and the existence of a stochastic discount factor—is developed and used to price both primitive assets and derivatives. " +
    "The course covers the efficient-markets hypothesis and the empirical evidence for and against it, including the anomalies that motivate factor models and behavioral finance. " +
    "Options and other derivatives are introduced through replication and risk-neutral valuation, leading to the Black-Scholes framework. " +
    "The final part treats corporate finance essentials—capital structure, the Modigliani-Miller theorem, and the market microstructure that governs how prices actually form.",
  topics: [
    "Choice under uncertainty and expected utility",
    "Risk aversion and stochastic dominance",
    "Portfolio choice and mean-variance analysis",
    "The efficient frontier and diversification",
    "The Capital Asset Pricing Model (CAPM)",
    "Arbitrage Pricing Theory and factor models",
    "No-arbitrage and the stochastic discount factor",
    "Complete and incomplete markets",
    "The efficient-markets hypothesis",
    "Market anomalies and factor investing",
    "Fixed income and the term structure of interest rates",
    "Options, forwards, and futures",
    "Risk-neutral valuation and Black-Scholes",
    "Corporate finance and Modigliani-Miller",
    "Market microstructure and price formation",
  ],
  recommended: [
    res("Financial Theory (Open Yale ECON 251)", "John Geanakoplos", { type: "lectures", free: true, url: "https://oyc.yale.edu/economics/econ-251" }),
    res("Investments", "Zvi Bodie, Alex Kane & Alan J. Marcus", { type: "textbook" }),
    res("Financial Decisions and Markets", "John Y. Campbell", { type: "textbook" }),
  ],
  supplementary: [
    res("Principles of Financial Economics", "Stephen F. LeRoy & Jan Werner", { type: "textbook" }),
    res("Intermediate Financial Theory", "Jean-Pierre Danthine & John B. Donaldson", { type: "textbook" }),
    res("Options, Futures, and Other Derivatives", "John C. Hull", { type: "reference" }),
  ],
});
