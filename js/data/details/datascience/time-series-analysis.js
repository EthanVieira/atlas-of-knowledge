registerDetail({
  long:
    "Time Series Analysis develops the statistics of data observed over time, where the central fact is that observations are correlated—dependence across time that both complicates analysis and provides the basis for forecasting. " +
    "Building on regression analysis, it develops the models and methods for describing, understanding, and predicting temporally ordered data. " +
    "The course begins with the fundamental concepts: trend, seasonality, and the notion of stationarity, and the autocorrelation and partial autocorrelation functions that summarize a series' temporal dependence. " +
    "It develops the classical Box-Jenkins framework in depth: autoregressive (AR), moving-average (MA), and ARMA models for stationary series, and ARIMA models that handle trends through differencing, together with the practical cycle of model identification, estimation, diagnostic checking, and forecasting. " +
    "Seasonal ARIMA models and the modeling of seasonality are treated, along with forecasting and the assessment of forecast accuracy. " +
    "The course extends to more advanced topics: spectral analysis and the frequency-domain view of time series, state-space models and the Kalman filter, and models of changing volatility (ARCH and GARCH) important in finance. " +
    "Vector autoregressions for multiple series and an introduction to the connections with modern machine-learning approaches to forecasting round out a course that gives the tools to analyze and forecast the many important processes that unfold over time.",
  topics: [
    "Trend, seasonality, and stationarity",
    "Autocorrelation and partial autocorrelation",
    "White noise and random walks",
    "Autoregressive (AR) models",
    "Moving-average (MA) models",
    "ARMA and ARIMA models",
    "The Box-Jenkins method",
    "Differencing and unit roots",
    "Seasonal ARIMA",
    "Forecasting and accuracy",
    "Spectral analysis",
    "State-space models and the Kalman filter",
    "ARCH and GARCH volatility models",
    "Vector autoregression",
    "Machine learning for forecasting",
  ],
  recommended: [
    res("Forecasting: Principles and Practice", "Rob J. Hyndman & George Athanasopoulos", { type: "textbook", free: true, url: "https://otexts.com/fpp3/" }),
    res("Time Series Analysis and Its Applications: With R Examples", "Robert H. Shumway & David S. Stoffer", { type: "textbook" }),
  ],
  supplementary: [
    res("Time Series Analysis: Forecasting and Control", "George E. P. Box, Gwilym M. Jenkins, Gregory C. Reinsel & Greta M. Ljung", { type: "reference" }),
    res("Introduction to Time Series and Forecasting", "Peter J. Brockwell & Richard A. Davis", { type: "reference" }),
  ],
});
