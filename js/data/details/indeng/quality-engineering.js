registerDetail({
  long: "Quality Engineering and Statistical Process Control develops the statistical methods used to " +
    "monitor, control, and improve manufacturing and service processes. The course starts with the " +
    "dimensions of quality and the cost of quality, framing prevention, appraisal, and failure costs " +
    "as the economic case for control. It then builds statistical process control from its " +
    "foundation in variation, distinguishing common-cause from special-cause variation and " +
    "introducing the Shewhart control chart. Variables charts such as the Xbar-R and Xbar-S charts " +
    "are developed alongside attributes charts (p, np, c, and u) for defectives and defects. Process " +
    "capability analysis links the control chart to specification limits through the capability " +
    "indices Cp and Cpk, while measurement systems analysis and gauge repeatability and " +
    "reproducibility studies quantify the error contributed by the measurement process itself. The " +
    "course also covers acceptance sampling plans for lot disposition and the more sensitive CUSUM " +
    "and EWMA charts for detecting small shifts. It closes with an overview of design of experiments " +
    "as the engine of process improvement.",
  topics: [
    "Dimensions of quality and the cost of quality",
    "Variation and the statistical basis of control",
    "Common-cause versus special-cause variation",
    "Shewhart control chart fundamentals",
    "Variables control charts (Xbar-R, Xbar-S)",
    "Attributes control charts (p, np, c, u)",
    "Rational subgrouping and chart design",
    "Process capability analysis (Cp, Cpk)",
    "Measurement systems analysis and gauge R&R",
    "Acceptance sampling by attributes",
    "Operating characteristic curves",
    "CUSUM control charts",
    "EWMA control charts",
    "Design of experiments overview",
    "Six Sigma and quality improvement",
  ],
  recommended: [
    res("Introduction to Statistical Quality Control", "Douglas C. Montgomery", { type: "textbook" }),
    res("Juran's Quality Handbook", "Joseph M. Juran and Joseph A. DeFeo", { type: "reference" }),
  ],
  supplementary: [
    res("Statistical Quality Control", "Eugene L. Grant and Richard S. Leavenworth", { type: "textbook" }),
    res("Quality Control and Industrial Statistics", "Acheson J. Duncan", { type: "reference" }),
  ],
});
