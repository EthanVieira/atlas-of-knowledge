registerDetail({
  cover: cover(96, "Mathematical Statistics", "curve", "Mathematics"),
  long: "Mathematical statistics turns probability into a tool for learning from data, formalizing how we estimate unknown quantities and quantify our uncertainty about them. Point estimation methods—the method of moments and maximum likelihood—produce estimators whose quality is judged through concepts like sufficiency, unbiasedness, and the Cramér–Rao lower bound. Interval estimation and hypothesis testing let us make calibrated statements, with the Neyman–Pearson lemma characterizing optimal tests and likelihood-ratio tests extending the idea broadly. Bayesian inference offers a complementary paradigm in which prior beliefs are updated by data. The course ties everything together through linear regression, the workhorse model of applied statistics. Throughout, the emphasis is on the theory that justifies the procedures used across science.",
  topics: [
    "Populations & samples",
    "Point estimation",
    "The method of moments",
    "Maximum likelihood",
    "Sufficiency",
    "Unbiasedness & the Cramér–Rao bound",
    "Confidence intervals",
    "Hypothesis testing",
    "The Neyman–Pearson lemma",
    "Likelihood-ratio tests",
    "Bayesian inference",
    "Linear regression",
  ],
  recommended: [
    res("All of Statistics", "Larry Wasserman", { type: "textbook" }),
    res("Statistics for Applications", "MIT OCW 18.650", { type: "lectures", free: true, url: "https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/" }),
  ],
  supplementary: [
    res("Statistical Inference", "Casella & Berger", { type: "textbook" }),
  ],
});
