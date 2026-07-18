registerDetail({
  long:
    "Macroeconomic dynamics is the graduate-level core of quantitative macroeconomics, teaching the recursive methods used to build, solve, and estimate dynamic stochastic general-equilibrium (DSGE) models. " +
    "The course develops dynamic programming and the Bellman equation as the central tool, establishing existence and characterization of value and policy functions and the theory behind them. " +
    "The stochastic neoclassical growth model and the Ramsey problem serve as the workhorses through which recursive competitive equilibrium is defined and computed. " +
    "Real business cycle theory is developed as the benchmark in which fluctuations arise from technology shocks in a frictionless economy, and its successes and failures are assessed against the data. " +
    "New Keynesian DSGE models then add nominal rigidities, monopolistic competition, and monetary policy, providing the framework used by central banks for policy analysis. " +
    "Because these models rarely have closed-form solutions, the course covers numerical methods: linearization and perturbation, value- and policy-function iteration, and projection methods. " +
    "It closes with the calibration and estimation of DSGE models and the incorporation of heterogeneity, incomplete markets, and the Bewley-Aiyagari class of models.",
  topics: [
    "Dynamic programming and the Bellman equation",
    "Existence and properties of the value function",
    "The stochastic growth model",
    "Recursive competitive equilibrium",
    "The Ramsey problem and optimal policy",
    "Real business cycle theory",
    "Calibration and moment matching",
    "New Keynesian DSGE models",
    "Nominal rigidities and monopolistic competition",
    "Linearization, log-linearization, and perturbation methods",
    "Value- and policy-function iteration",
    "Projection and spectral methods",
    "Estimating DSGE models (Bayesian methods)",
    "Incomplete markets and heterogeneous agents",
    "The Bewley-Huggett-Aiyagari framework",
  ],
  recommended: [
    res("Recursive Macroeconomic Theory", "Lars Ljungqvist & Thomas J. Sargent", { type: "textbook" }),
    res("Recursive Methods in Economic Dynamics", "Stokey, Lucas & Prescott", { type: "textbook" }),
    res("Quantitative Economics (Python/Julia lectures)", "Sargent & Stachurski / QuantEcon", { type: "interactive", free: true, url: "https://quantecon.org/lectures/" }),
  ],
  supplementary: [
    res("Advanced Macroeconomics", "David Romer", { type: "textbook" }),
    res("Economic Dynamics in Discrete Time", "Jianjun Miao", { type: "reference" }),
    res("Structural Macroeconometrics", "David N. DeJong & Chetan Dave", { type: "reference" }),
  ],
});
