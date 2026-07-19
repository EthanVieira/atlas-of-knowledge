registerDetail({
  long:
    "Design of Experiments studies how to plan experiments so that the data they produce answer the questions of interest efficiently and with valid causal conclusions—the statistics of gathering data, not just analyzing it. " +
    "Building on mathematical statistics, it develops the principles and standard designs that make experiments informative and their analysis clean. " +
    "The course begins with the foundational principles that Fisher established: randomization, replication, and blocking, and the way good design controls variability and licenses causal inference. " +
    "It develops the analysis that designs are built around—the analysis of variance (ANOVA)—and the basic single-factor experiment, including multiple comparisons among treatments. " +
    "The core designs are treated systematically: randomized complete block designs, Latin squares, and above all factorial designs, which study several factors at once and reveal their interactions far more efficiently than one-factor-at-a-time experimentation. " +
    "Fractional factorial designs and the ideas of screening and confounding are developed for experiments with many factors, along with response-surface methods for optimization. " +
    "The course treats blocking, nested and split-plot designs, random and mixed effects, and the crucial practical questions of sample size and power. " +
    "Applications from agriculture and industry to clinical trials and online A/B testing ground the methods, giving the ability to design experiments that yield trustworthy answers.",
  topics: [
    "Randomization, replication, blocking",
    "Design and causal inference",
    "Analysis of variance (ANOVA)",
    "Single-factor experiments",
    "Multiple comparisons",
    "Randomized complete block designs",
    "Latin squares",
    "Factorial designs",
    "Interactions",
    "Fractional factorial and screening designs",
    "Confounding",
    "Response-surface methods",
    "Split-plot and nested designs",
    "Random and mixed effects",
    "Sample size and power",
  ],
  recommended: [
    res("Design and Analysis of Experiments", "Douglas C. Montgomery", { type: "textbook" }),
    res("Statistics for Experimenters: Design, Innovation, and Discovery", "George E. P. Box, J. Stuart Hunter & William G. Hunter", { type: "textbook" }),
  ],
  supplementary: [
    res("The Design of Experiments", "Ronald A. Fisher", { type: "reference" }),
    res("Trustworthy Online Controlled Experiments: A Practical Guide to A/B Testing", "Ron Kohavi, Diane Tang & Ya Xu", { type: "reference" }),
  ],
});
