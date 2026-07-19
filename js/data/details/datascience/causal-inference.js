registerDetail({
  long:
    "Causal Inference develops the statistical framework for answering causal questions—what is the effect of a treatment, policy, or intervention?—from data, tackling the fundamental problem that correlation is not causation. " +
    "Building on regression analysis, it provides the concepts and methods that let analysts reason rigorously about cause and effect, a skill central to science, medicine, economics, and policy. " +
    "The course begins with the fundamental problem of causal inference—that we never observe the same unit both treated and untreated—and the two dominant formal frameworks: the potential-outcomes (Rubin causal) model and the causal graphs (directed acyclic graphs) of Pearl. " +
    "It develops the central concept of confounding and the assumptions—ignorability, positivity, and consistency—under which causal effects can be identified, and the use of DAGs to reason about which variables to adjust for and which to leave alone (avoiding colliders and over-control). " +
    "The gold standard of the randomized experiment is treated as the benchmark, followed by the methods for causal inference from observational data: matching and propensity scores, inverse-probability weighting, regression adjustment, and doubly robust estimation. " +
    "The quasi-experimental designs central to the social sciences—instrumental variables, difference-in-differences, and regression discontinuity—are developed, along with sensitivity analysis for unmeasured confounding and an introduction to mediation. " +
    "The course gives the conceptual clarity and the methods to move, carefully, from data to causal claims.",
  topics: [
    "The fundamental problem of causal inference",
    "Correlation vs. causation",
    "Potential outcomes (Rubin model)",
    "Causal graphs and DAGs",
    "Confounding",
    "Identification assumptions",
    "Colliders and over-control",
    "Randomized experiments as benchmark",
    "Matching and propensity scores",
    "Inverse-probability weighting",
    "Doubly robust estimation",
    "Instrumental variables",
    "Difference-in-differences",
    "Regression discontinuity",
    "Sensitivity analysis and mediation",
  ],
  recommended: [
    res("Causal Inference: What If", "Miguel A. Hernán & James M. Robins", { type: "textbook", free: true, url: "https://www.hsph.harvard.edu/miguel-hernan/causal-inference-book/" }),
    res("Causal Inference for Statistics, Social, and Biomedical Sciences", "Guido W. Imbens & Donald B. Rubin", { type: "textbook" }),
  ],
  supplementary: [
    res("Causality: Models, Reasoning, and Inference", "Judea Pearl", { type: "reference" }),
    res("The Book of Why: The New Science of Cause and Effect", "Judea Pearl & Dana Mackenzie", { type: "reference" }),
  ],
});
