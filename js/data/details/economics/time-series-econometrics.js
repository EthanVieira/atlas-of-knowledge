registerDetail({
  long:
    "Time series econometrics develops the methods for modeling and forecasting data that arrive in sequence over time—GDP, prices, interest rates, and asset returns—where observations are serially dependent and the usual cross-sectional assumptions fail. " +
    "The course begins with the concepts of stationarity, autocorrelation, and the Wold decomposition, and builds the univariate ARMA and ARIMA models used to describe and forecast a single series. " +
    "Non-stationarity is treated carefully: unit-root tests, spurious regression, and the differencing and detrending that make series analyzable. " +
    "Cointegration and the error-correction model capture long-run equilibrium relationships among non-stationary series, one of the field's central contributions. " +
    "Multivariate dynamics are modeled with vector autoregressions (VARs), and the course develops impulse-response analysis and the identification strategies—including structural VARs—used to trace the effects of macroeconomic shocks. " +
    "Volatility clustering in financial data motivates the ARCH and GARCH family of conditional-variance models. " +
    "Throughout, the course balances estimation and inference with the practical craft of producing and evaluating forecasts.",
  topics: [
    "Stationarity, autocovariance, and ergodicity",
    "The Wold decomposition and lag operators",
    "Autoregressive and moving-average (ARMA) models",
    "Model identification, estimation, and diagnostics",
    "Forecasting and forecast evaluation",
    "Trends, seasonality, and ARIMA models",
    "Unit roots and tests (Dickey-Fuller, Phillips-Perron)",
    "Spurious regression",
    "Cointegration and the Engle-Granger method",
    "Error-correction models",
    "Vector autoregressions (VARs)",
    "Impulse-response and variance decomposition",
    "Structural VARs and identification",
    "Volatility models: ARCH and GARCH",
    "State-space models and the Kalman filter",
  ],
  recommended: [
    res("Time Series Analysis", "James D. Hamilton", { type: "textbook" }),
    res("Applied Econometric Time Series", "Walter Enders", { type: "textbook" }),
    res("Forecasting: Principles and Practice", "Rob J. Hyndman & George Athanasopoulos", { type: "interactive", free: true, url: "https://otexts.com/fpp3/" }),
  ],
  supplementary: [
    res("New Introduction to Multiple Time Series Analysis", "Helmut Lutkepohl", { type: "reference" }),
    res("Analysis of Financial Time Series", "Ruey S. Tsay", { type: "textbook" }),
    res("Time Series Analysis: Forecasting and Control", "Box, Jenkins, Reinsel & Ljung", { type: "reference" }),
  ],
});
