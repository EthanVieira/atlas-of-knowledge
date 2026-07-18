registerDetail({
  long:
    "Microeconometrics is the econometrics of individual-level data—people, households, and firms—where outcomes are often discrete, censored, or otherwise limited, and where unobserved heterogeneity is pervasive. " +
    "The course develops the estimation frameworks that dominate applied microeconomics: maximum likelihood, generalized method of moments, and M-estimation, together with their large-sample properties and the inference they support. " +
    "Discrete-choice models—binary, multinomial, and ordered logit and probit, and the random-utility foundations of conditional and mixed logit—are treated in depth as the tools for modeling decisions among alternatives. " +
    "Models for censored and truncated data (Tobit) and for sample selection (the Heckman correction) address outcomes that are only partially observed. " +
    "Count-data models and duration (survival) analysis extend the toolkit to event frequencies and the timing of transitions. " +
    "Panel-data methods for nonlinear models and the control of unobserved heterogeneity are developed alongside the program-evaluation estimators used for causal questions. " +
    "The course culminates in structural estimation, in which economic models are taken directly to data, and modern simulation and nonparametric methods.",
  topics: [
    "Maximum likelihood and M-estimation",
    "Generalized method of moments (GMM)",
    "Binary choice: logit and probit",
    "Random-utility models and multinomial choice",
    "Conditional, nested, and mixed logit",
    "Ordered and sequential choice models",
    "Censoring and truncation (the Tobit model)",
    "Sample selection and the Heckman correction",
    "Count-data models (Poisson, negative binomial)",
    "Duration and survival analysis",
    "Nonlinear panel-data models",
    "Quantile regression",
    "Program evaluation and treatment effects",
    "Structural estimation of economic models",
    "Simulation-based and nonparametric methods",
  ],
  recommended: [
    res("Microeconometrics: Methods and Applications", "A. Colin Cameron & Pravin K. Trivedi", { type: "textbook" }),
    res("Econometric Analysis of Cross Section and Panel Data", "Jeffrey M. Wooldridge", { type: "textbook" }),
    res("Discrete Choice Methods with Simulation", "Kenneth E. Train", { type: "textbook", free: true, url: "https://eml.berkeley.edu/books/choice2.html" }),
  ],
  supplementary: [
    res("Microeconometrics Using Stata", "A. Colin Cameron & Pravin K. Trivedi", { type: "reference" }),
    res("Econometric Analysis", "William H. Greene", { type: "reference" }),
  ],
});
