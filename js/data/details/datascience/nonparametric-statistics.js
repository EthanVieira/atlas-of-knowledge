registerDetail({
  long:
    "Nonparametric Statistics develops methods that make few assumptions about the form of the underlying distribution—inference that is robust and valid when the classical assumptions of normality and specific parametric models fail. " +
    "Building on mathematical statistics, it provides the tools for analyzing data that are ordinal, heavily skewed, or otherwise ill-suited to parametric methods. " +
    "The course begins with the motivation for distribution-free methods and the trade-off between the robustness of nonparametric procedures and the efficiency of parametric ones when assumptions hold. " +
    "It develops the classical rank-based tests as counterparts to the standard parametric tests: the sign test and Wilcoxon signed-rank test for one and paired samples, the Mann-Whitney-Wilcoxon test for two samples, and the Kruskal-Wallis and Friedman tests for several groups, along with rank correlation. " +
    "The course treats the theory of rank statistics and the use of permutation and randomization tests, which derive their validity directly from the design rather than from distributional assumptions. " +
    "Resampling methods—the bootstrap and the jackknife—are developed as a powerful, computer-intensive approach to standard errors, confidence intervals, and inference in situations where analytic results are unavailable. " +
    "Nonparametric density estimation and smoothing (kernel methods) and nonparametric regression round out a course that gives flexible, assumption-light methods central to both classical statistics and modern data analysis.",
  topics: [
    "Why distribution-free methods",
    "Robustness vs. efficiency",
    "The sign and Wilcoxon signed-rank tests",
    "The Mann-Whitney-Wilcoxon test",
    "Kruskal-Wallis and Friedman tests",
    "Rank correlation",
    "Theory of rank statistics",
    "Permutation and randomization tests",
    "The bootstrap",
    "The jackknife",
    "Bootstrap confidence intervals",
    "Kernel density estimation",
    "Smoothing methods",
    "Nonparametric regression",
    "Robust statistics",
  ],
  recommended: [
    res("Nonparametric Statistical Methods", "Myles Hollander, Douglas A. Wolfe & Eric Chicken", { type: "textbook" }),
    res("All of Nonparametric Statistics", "Larry Wasserman", { type: "textbook" }),
  ],
  supplementary: [
    res("An Introduction to the Bootstrap", "Bradley Efron & Robert J. Tibshirani", { type: "reference" }),
    res("Permutation, Parametric, and Bootstrap Tests of Hypotheses", "Phillip Good", { type: "reference" }),
  ],
});
