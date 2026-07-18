registerDetail({
  long:
    "Causal inference is the branch of econometrics concerned with identifying the effect of a cause—the change in an outcome that a policy, treatment, or intervention actually produces—rather than mere correlation. " +
    "The course is organized around the potential-outcomes (Rubin causal) framework, which makes the fundamental problem of causal inference precise: we never observe the same unit both treated and untreated. " +
    "Randomized experiments are developed as the benchmark that solves this problem by design, and their logic motivates every observational method that follows. " +
    "The core of the course is the toolkit of quasi-experimental designs: instrumental variables and the interpretation of local average treatment effects, difference-in-differences and its recent extensions, regression discontinuity, and matching and propensity-score methods. " +
    "Each method is presented with its identifying assumptions, the situations that justify it, and the diagnostic and robustness checks that make a design credible. " +
    "The course emphasizes research design over mechanical estimation—the 'credibility revolution' view that a convincing source of variation matters more than statistical sophistication. " +
    "It also introduces directed acyclic graphs as a complementary language for reasoning about confounding and identification.",
  topics: [
    "The potential-outcomes framework",
    "The fundamental problem of causal inference",
    "Selection bias and confounding",
    "Randomized controlled trials as the benchmark",
    "Average, conditional, and local treatment effects",
    "Instrumental variables and LATE",
    "Difference-in-differences",
    "Recent advances in difference-in-differences (staggered adoption)",
    "Regression discontinuity designs (sharp and fuzzy)",
    "Matching and propensity-score methods",
    "Synthetic control methods",
    "Panel and fixed-effects strategies for causality",
    "Directed acyclic graphs and identification",
    "Sensitivity analysis and robustness",
    "Threats to validity and interpretation",
  ],
  recommended: [
    res("Causal Inference: The Mixtape", "Scott Cunningham", { type: "textbook", free: true, url: "https://mixtape.scunning.com/" }),
    res("The Effect: An Introduction to Research Design and Causality", "Nick Huntington-Klein", { type: "textbook", free: true, url: "https://theeffectbook.net/" }),
    res("Mostly Harmless Econometrics", "Joshua D. Angrist & Jorn-Steffen Pischke", { type: "textbook" }),
  ],
  supplementary: [
    res("Mastering 'Metrics: The Path from Cause to Effect", "Angrist & Pischke", { type: "textbook" }),
    res("Causal Inference for Statistics, Social, and Biomedical Sciences", "Guido W. Imbens & Donald B. Rubin", { type: "reference" }),
    res("Causality: Models, Reasoning, and Inference", "Judea Pearl", { type: "reference" }),
  ],
});
