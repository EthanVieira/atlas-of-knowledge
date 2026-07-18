registerDetail({
  long:
    "Financial Risk Management studies the identification, measurement, and control of the risks that financial institutions and portfolios face—a discipline whose importance was underscored by the crises that poor risk management helped produce. " +
    "Building on derivatives and probability, the course develops the modern practice of quantitative risk management. " +
    "It begins with the taxonomy of financial risks—market risk, credit risk, liquidity risk, and operational risk—and the framework and governance of risk management in an institution. " +
    "The core of the course is the measurement of market risk. " +
    "Value at Risk (VaR)—the estimation of the loss that will not be exceeded with a given confidence over a given horizon—is developed through its main approaches: the parametric (variance-covariance) method, historical simulation, and Monte Carlo simulation, along with their assumptions and limitations. " +
    "The course develops the modeling of the volatility and correlation on which risk measures depend, including the GARCH family and the crucial problem of fat tails and extreme events, and the coherent risk measure of expected shortfall that addresses VaR's shortcomings. " +
    "Stress testing and scenario analysis, back-testing, and the management of tail risk are developed. " +
    "The course examines the measurement and management of credit and liquidity risk, the hedging of risk with derivatives, and the regulatory framework (the Basel accords) that governs bank risk. " +
    "It gives both the quantitative tools and the practical judgment to measure and manage financial risk.",
  topics: [
    "Types of financial risk",
    "The risk-management framework",
    "Market risk",
    "Value at Risk (VaR)",
    "Parametric VaR",
    "Historical simulation",
    "Monte Carlo simulation for risk",
    "Volatility and correlation modeling",
    "Fat tails and extreme value theory",
    "Expected shortfall and coherent measures",
    "Stress testing and scenario analysis",
    "Back-testing risk models",
    "Credit and liquidity risk management",
    "Hedging and risk mitigation",
    "Regulation and the Basel accords",
  ],
  recommended: [
    res("Value at Risk: The New Benchmark for Managing Financial Risk", "Philippe Jorion", { type: "textbook" }),
    res("Risk Management and Financial Institutions", "John C. Hull", { type: "textbook" }),
  ],
  supplementary: [
    res("Quantitative Risk Management: Concepts, Techniques and Tools", "Alexander J. McNeil, Rüdiger Frey & Paul Embrechts", { type: "reference" }),
    res("Financial Risk Manager Handbook", "Philippe Jorion & GARP", { type: "textbook" }),
  ],
});
