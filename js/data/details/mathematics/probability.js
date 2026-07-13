registerDetail({
  cover: cover(96, "Probability Theory", "waves", "Mathematics"),
  long: "Probability theory is the mathematics of uncertainty, providing a rigorous framework for reasoning about random phenomena. It begins with sample spaces, events, and the axioms that govern how probabilities combine, then develops the powerful ideas of conditioning and independence. Random variables translate outcomes into numbers, letting us summarize behavior through expectation, variance, and entire distributions. The theory culminates in limit theorems—the law of large numbers and the central limit theorem—that explain why averages stabilize and why the bell curve appears everywhere. These tools underpin statistics, machine learning, physics, and finance.",
  topics: [
    "Sample spaces & events",
    "Axioms of probability",
    "Conditional probability & Bayes' theorem",
    "Independence",
    "Random variables",
    "Discrete distributions",
    "Continuous distributions",
    "Expectation & variance",
    "Joint distributions",
    "Covariance & correlation",
    "Moment generating functions",
    "Conditional expectation",
    "The law of large numbers",
    "The central limit theorem",
  ],
  recommended: [
    res("Introduction to Probability", "Blitzstein & Hwang", { type: "textbook" }),
    res("Statistics 110", "Joe Blitzstein / Harvard", { type: "lectures", free: true, url: "https://projects.iq.harvard.edu/stat110" }),
  ],
  supplementary: [
    res("A First Course in Probability", "Sheldon Ross", { type: "textbook" }),
  ],
});
