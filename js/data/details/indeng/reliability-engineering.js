registerDetail({
  long: "Reliability Engineering develops the probabilistic models used to predict, measure, and " +
    "improve how long systems function before they fail. The course begins with the basic " +
    "reliability measures - the reliability function, failure density, and the hazard (failure) " +
    "rate - and the bathtub curve that describes infant mortality, useful life, and wear-out. It " +
    "then studies the common life distributions, especially the exponential, Weibull, and lognormal " +
    "models, and how their parameters are estimated. System reliability is built up from components " +
    "using series, parallel, and k-out-of-n structures and reliability block diagrams, with " +
    "redundancy introduced to raise system reliability. Qualitative and quantitative failure " +
    "analysis is covered through fault-tree analysis and failure-mode and effects analysis " +
    "(FMEA/FMECA). The course treats life testing with complete and censored data and accelerated " +
    "life testing that shortens test time through elevated stress. It closes with maintainability, " +
    "availability, and the modeling of repairable systems, connecting reliability to maintenance " +
    "policy and life-cycle cost.",
  topics: [
    "Reliability measures and the hazard function",
    "The bathtub curve",
    "The exponential life distribution",
    "The Weibull distribution and Weibull analysis",
    "The lognormal and other life distributions",
    "Series, parallel, and k-out-of-n systems",
    "Reliability block diagrams",
    "Redundancy and system reliability",
    "Fault-tree analysis",
    "Failure-mode and effects analysis (FMEA/FMECA)",
    "Life testing with complete and censored data",
    "Parameter estimation and probability plotting",
    "Accelerated life testing",
    "Maintainability and availability",
    "Repairable systems and maintenance policy",
  ],
  recommended: [
    res("An Introduction to Reliability and Maintainability Engineering", "Charles E. Ebeling", { type: "textbook" }),
    res("System Reliability Theory", "Marvin Rausand and Arnljot Hoyland", { type: "textbook" }),
  ],
  supplementary: [
    res("Reliability Engineering and Risk Analysis", "Mohammad Modarres, Mark Kaminskiy and Vasiliy Krivtsov", { type: "reference" }),
    res("Practical Reliability Engineering", "Patrick D. T. O'Connor and Andre Kleyner", { type: "textbook" }),
  ],
});
