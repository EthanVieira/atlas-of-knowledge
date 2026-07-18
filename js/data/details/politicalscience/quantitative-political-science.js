registerDetail({
  long:
    "Quantitative Political Analysis develops the statistical and computational methods political scientists use to measure political phenomena and test theories against data. " +
    "The course begins with the logic of empirical inquiry—concepts and their measurement, the movement from theory to testable hypothesis, and the distinction between description, prediction, and causal explanation. " +
    "It builds the core of applied statistics for political data: probability, sampling and survey methodology, estimation, and hypothesis testing. " +
    "Linear regression is developed as the workhorse for modeling relationships among political variables, followed by models for the binary and categorical outcomes ubiquitous in political science, such as vote choice and conflict onset. " +
    "The credibility revolution in causal inference receives central attention: randomized experiments, and the quasi-experimental designs (instrumental variables, difference-in-differences, regression discontinuity) that identify effects from observational data. " +
    "The course introduces newer tools—text as data and machine learning for measurement—and the practice of reproducible research using statistical software. " +
    "Throughout, it stresses careful interpretation and the assumptions on which every empirical claim depends.",
  topics: [
    "From theory to measurement and hypothesis",
    "Description, prediction, and causation",
    "Probability and statistical inference",
    "Survey research and sampling",
    "Linear regression and its interpretation",
    "Multiple regression and control",
    "Binary and categorical outcome models",
    "Randomized experiments in political science",
    "Instrumental variables",
    "Difference-in-differences",
    "Regression discontinuity designs",
    "Panel and time-series data",
    "Text as data",
    "Machine learning for measurement",
    "Reproducible research and statistical computing",
  ],
  recommended: [
    res("Quantitative Social Science: An Introduction", "Kosuke Imai", { type: "textbook" }),
    res("Quantitative Social Science (data & code companion)", "Kosuke Imai", { type: "interactive", free: true, url: "https://qss.princeton.press/" }),
    res("The Fundamentals of Political Science Research", "Paul M. Kellstedt & Guy D. Whitten", { type: "textbook" }),
  ],
  supplementary: [
    res("Data Analysis Using Regression and Multilevel/Hierarchical Models", "Andrew Gelman & Jennifer Hill", { type: "reference" }),
    res("Designing Social Inquiry", "Gary King, Robert O. Keohane & Sidney Verba", { type: "reference" }),
  ],
});
