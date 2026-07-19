/* ============================================================================
 *  STATISTICS & DATA SCIENCE
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/datascience/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it. This field is the science of learning
 *  from data: it builds on mathematics (`statistics`, `probability`) and
 *  computer science (`programming-fundamentals`, `machine-learning`,
 *  `databases`) rather than repeating them, and elaborates the applied
 *  statistical methods and the data-science pipeline on top.
 * ==========================================================================*/
registerCourses([

  // --- Core statistical methods ------------------------------------------
  { id: "regression-analysis", title: "Regression Analysis", field: "datascience", detail: true, requires: ["statistics"] },
  { id: "bayesian-statistics", title: "Bayesian Statistics", field: "datascience", detail: true, requires: ["statistics"] },
  { id: "experimental-design", title: "Design of Experiments", field: "datascience", detail: true, requires: ["statistics"] },
  { id: "nonparametric-statistics", title: "Nonparametric Statistics", field: "datascience", detail: true, requires: ["statistics"] },

  // --- Advanced & specialized methods ------------------------------------
  { id: "multivariate-statistics", title: "Multivariate Statistics", field: "datascience", detail: true, requires: ["regression-analysis"] },
  { id: "time-series-analysis", title: "Time Series Analysis", field: "datascience", detail: true, requires: ["regression-analysis"] },
  { id: "survival-analysis", title: "Survival Analysis", field: "datascience", detail: true, requires: ["regression-analysis"] },
  { id: "causal-inference", title: "Causal Inference", field: "datascience", detail: true, requires: ["regression-analysis"] },
  { id: "statistical-learning", title: "Statistical Learning", field: "datascience", detail: true, requires: ["regression-analysis", "machine-learning"] },
  { id: "spatial-statistics", title: "Spatial Statistics", field: "datascience", detail: true, requires: ["regression-analysis", "gis"] },
  { id: "biostatistics", title: "Biostatistics", field: "datascience", detail: true, requires: ["regression-analysis", "experimental-design"] },

  // --- Statistical computing ---------------------------------------------
  { id: "statistical-computing", title: "Statistical Computing", field: "datascience", detail: true, requires: ["statistics", "programming-fundamentals"] },

  // --- Data science pipeline ---------------------------------------------
  { id: "intro-data-science", title: "Introduction to Data Science", field: "datascience", detail: true, requires: ["statistics", "programming-fundamentals"] },
  { id: "exploratory-data-analysis", title: "Exploratory Data Analysis", field: "datascience", detail: true, requires: ["intro-data-science"] },
  { id: "data-wrangling", title: "Data Wrangling & Engineering", field: "datascience", detail: true, requires: ["intro-data-science"] },
  { id: "data-visualization", title: "Data Visualization", field: "datascience", detail: true, requires: ["intro-data-science"] },
  { id: "big-data-systems", title: "Big Data Systems", field: "datascience", detail: true, requires: ["intro-data-science", "databases"] },
  { id: "data-ethics", title: "Data Ethics & Privacy", field: "datascience", detail: true, requires: ["intro-data-science"] },

]);
