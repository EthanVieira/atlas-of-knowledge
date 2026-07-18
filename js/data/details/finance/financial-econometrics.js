registerDetail({
  long:
    "Financial Econometrics studies the statistical analysis of financial data—the methods for modeling the returns, volatility, and relationships of financial markets, and for testing financial theories against the evidence. " +
    "Building on time-series econometrics, the course develops the econometric techniques specific to the distinctive features of financial data. " +
    "It begins with the stylized facts of asset returns that any model must confront: the near-unpredictability of returns, the fat tails and non-normality of their distribution, and above all the clustering of volatility—the tendency of turbulent periods to cluster together. " +
    "The heart of the course is the modeling of time-varying volatility, the ARCH and GARCH family of models that capture volatility clustering and are central to risk management and option pricing, and their many extensions. " +
    "The course develops the modeling and testing of return predictability and market efficiency, and the estimation and testing of asset-pricing models such as the CAPM and factor models on real data. " +
    "It treats the analysis of high-frequency and intraday data, the modeling of correlations and the covariance of many assets (multivariate GARCH and beyond), and the estimation of value at risk and tail risk from data. " +
    "The measurement of realized volatility and the use of high-frequency data, and modern machine-learning approaches to financial prediction, are examined. " +
    "The course gives the empirical tools to analyze financial markets, estimate risk, and test financial models with data.",
  topics: [
    "The stylized facts of asset returns",
    "Fat tails and non-normality",
    "Testing return predictability",
    "Market efficiency in the data",
    "Volatility clustering",
    "ARCH and GARCH models",
    "Extensions of GARCH",
    "Estimating and testing the CAPM",
    "Factor models in the data",
    "Event studies",
    "Multivariate volatility and correlation",
    "Value at Risk from data",
    "High-frequency and realized volatility",
    "Modeling extreme risk",
    "Machine learning in financial econometrics",
  ],
  recommended: [
    res("The Econometrics of Financial Markets", "John Y. Campbell, Andrew W. Lo & A. Craig MacKinlay", { type: "textbook" }),
    res("Analysis of Financial Time Series", "Ruey S. Tsay", { type: "textbook" }),
  ],
  supplementary: [
    res("Financial Econometrics: Models and Methods", "Oliver Linton", { type: "textbook" }),
    res("Empirical Market Microstructure", "Joel Hasbrouck", { type: "reference" }),
  ],
});
