registerDetail({
  long:
    "Survival Analysis develops the statistics of time-to-event data—how long until a patient relapses, a machine fails, or a customer churns—where the defining challenge is censoring: for many units the event has not yet happened when observation ends. " +
    "Building on regression analysis, it develops the special methods that make valid inference possible when outcomes are partially observed. " +
    "The course begins with the fundamental quantities of the field: the survival function, the hazard function, and their relationship, and the problem of censoring and truncation that ordinary methods cannot handle. " +
    "It develops nonparametric estimation of the survival curve through the Kaplan-Meier estimator, and the comparison of survival between groups with the log-rank test. " +
    "The heart of the course is regression for survival data: the semiparametric Cox proportional-hazards model, which relates covariates to the hazard without specifying its baseline shape, and its estimation, interpretation, and the crucial checking of the proportional-hazards assumption. " +
    "Parametric survival models (exponential, Weibull, and accelerated failure time models) are treated, along with time-varying covariates, stratification, and competing risks. " +
    "The course draws its applications from biostatistics and clinical trials, reliability engineering, and the analysis of durations in economics and the social sciences, giving the essential toolkit for one of the most widely used families of statistical methods.",
  topics: [
    "Time-to-event data",
    "Censoring and truncation",
    "The survival function",
    "The hazard function",
    "Kaplan-Meier estimation",
    "The log-rank test",
    "The Cox proportional-hazards model",
    "Interpreting hazard ratios",
    "Checking proportional hazards",
    "Parametric survival models",
    "Weibull and exponential models",
    "Accelerated failure time models",
    "Time-varying covariates",
    "Competing risks",
    "Applications in trials and reliability",
  ],
  recommended: [
    res("Applied Survival Analysis: Regression Modeling of Time-to-Event Data", "David W. Hosmer, Stanley Lemeshow & Susanne May", { type: "textbook" }),
    res("Survival Analysis: A Self-Learning Text", "David G. Kleinbaum & Mitchel Klein", { type: "textbook" }),
  ],
  supplementary: [
    res("Modeling Survival Data: Extending the Cox Model", "Terry M. Therneau & Patricia M. Grambsch", { type: "reference" }),
    res("The Statistical Analysis of Failure Time Data", "John D. Kalbfleisch & Ross L. Prentice", { type: "reference" }),
  ],
});
