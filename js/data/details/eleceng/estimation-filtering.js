registerDetail({
  long: "Estimation and Filtering studies how to extract the best possible information about a system " +
    "from noisy and incomplete measurements, a problem central to navigation, tracking, and signal " +
    "processing. The course opens with a review of random variables and random processes, including " +
    "correlation, power spectral density, and the state-space models that describe systems driven by " +
    "noise. Classical estimation theory is developed through minimum-variance unbiased estimators, " +
    "maximum likelihood, maximum a posteriori, and the Bayesian viewpoint, together with the " +
    "Cramer-Rao bound that limits achievable accuracy. The Wiener filter is introduced as the optimal " +
    "linear filter for stationary signals, and the discrete Kalman filter is then derived in detail " +
    "as its recursive, time-varying generalization for dynamic systems. Nonlinear estimation is " +
    "addressed through the extended and unscented Kalman filters, which handle systems whose dynamics " +
    "or measurements are not linear. Adaptive filters such as LMS and RLS are studied for situations " +
    "where the signal statistics are unknown or changing, and particle filters are introduced for " +
    "highly nonlinear and non-Gaussian problems. The course concludes with applications in target " +
    "tracking and navigation that tie the methods together.",
  topics: [
    "Random variables and random processes",
    "Correlation and power spectral density",
    "State-space models with noise",
    "Minimum-variance unbiased estimation",
    "Maximum likelihood estimation",
    "Maximum a posteriori and Bayesian estimation",
    "Cramer-Rao lower bound",
    "The Wiener filter",
    "The discrete Kalman filter",
    "Extended Kalman filter",
    "Unscented Kalman filter",
    "Adaptive filters (LMS and RLS)",
    "Particle filters",
    "Smoothing and prediction",
    "Applications in tracking and navigation",
  ],
  recommended: [
    res("Optimal State Estimation", "Dan Simon", { type: "textbook" }),
    res("Fundamentals of Statistical Signal Processing: Estimation Theory", "Steven Kay", { type: "textbook" }),
  ],
  supplementary: [
    res("Applied Optimal Estimation", "Arthur Gelb", { type: "reference" }),
    res("Adaptive Filter Theory", "Simon Haykin", { type: "textbook" }),
  ],
});
