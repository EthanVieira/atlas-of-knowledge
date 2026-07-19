registerDetail({
  long:
    "Survey sampling and design is the theory and practice of drawing samples from finite populations to estimate population quantities with quantified uncertainty. " +
    "It rests on the design-based framework, in which randomization in selection—not assumptions about the data—justifies inference through inclusion probabilities and the Horvitz-Thompson estimator. " +
    "The course develops the major probability designs: simple random sampling, stratified sampling, systematic sampling, cluster and multistage sampling, and probability-proportional-to-size selection. " +
    "For each it derives estimators of means, totals, and proportions, their variances, and confidence intervals, and it studies how sample size and allocation affect precision and cost. " +
    "Ratio and regression estimators and calibration use auxiliary information to improve efficiency. " +
    "Practical survey issues—questionnaire design, nonresponse and its adjustment, weighting, and total survey error—connect the mathematics to real data collection. " +
    "Applications span official statistics, public health, market research, and the social sciences.",
  topics: [
    "Finite populations and design-based inference",
    "Inclusion probabilities and the Horvitz-Thompson estimator",
    "Simple random sampling",
    "Stratified sampling and optimal allocation",
    "Systematic sampling",
    "Cluster and multistage sampling",
    "Probability-proportional-to-size sampling",
    "Estimation of means, totals, and proportions",
    "Variance estimation and confidence intervals",
    "Sample-size determination",
    "Ratio and regression estimators",
    "Calibration and auxiliary information",
    "Weighting and nonresponse adjustment",
    "Questionnaire design and total survey error",
  ],
  recommended: [
    res("Sampling: Design and Analysis", "Sharon L. Lohr", { type: "textbook" }),
    res("Sampling Techniques", "William G. Cochran", { type: "textbook" }),
  ],
  supplementary: [
    res("Model Assisted Survey Sampling", "Särndal, Swensson & Wretman", { type: "reference" }),
    res("Sampling of Populations: Methods and Applications", "Levy & Lemeshow", { type: "textbook" }),
  ],
});
