/* ============================================================================
 *  ECONOMICS
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/economics/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Principles --------------------------------------------------------
  { id: "microeconomics", title: "Microeconomics", field: "economics", detail: true, requires: [] },
  { id: "macroeconomics", title: "Macroeconomics", field: "economics", detail: true, requires: ["microeconomics"] },
  { id: "mathematical-economics", title: "Mathematical Economics", field: "economics", detail: true, requires: ["microeconomics", "calculus-3", "linear-algebra"] },

  // --- Intermediate theory ----------------------------------------------
  { id: "intermediate-microeconomics", title: "Intermediate Microeconomics", field: "economics", detail: true, requires: ["microeconomics", "calculus-3"] },
  { id: "intermediate-macroeconomics", title: "Intermediate Macroeconomics", field: "economics", detail: true, requires: ["macroeconomics"] },
  { id: "game-theory", title: "Game Theory", field: "economics", detail: true, requires: ["microeconomics", "probability"] },
  { id: "mechanism-design", title: "Mechanism Design", field: "economics", detail: true, requires: ["game-theory", "mathematical-economics"] },
  { id: "auction-theory", title: "Auction Theory", field: "economics", detail: true, requires: ["mechanism-design"] },

  // --- General equilibrium & social choice ------------------------------
  { id: "general-equilibrium", title: "General Equilibrium Theory", field: "economics", detail: true, requires: ["intermediate-microeconomics", "mathematical-economics", "real-analysis"] },
  { id: "social-choice", title: "Social Choice Theory", field: "economics", detail: true, requires: ["mathematical-economics"] },

  // --- Behavioral & experimental ----------------------------------------
  { id: "behavioral-economics", title: "Behavioral Economics", field: "economics", detail: true, requires: ["intermediate-microeconomics", "psychology"] },
  { id: "experimental-economics", title: "Experimental Economics", field: "economics", detail: true, requires: ["microeconomics", "statistics"] },

  // --- Applied fields ----------------------------------------------------
  { id: "industrial-organization", title: "Industrial Organization", field: "economics", detail: true, requires: ["game-theory", "intermediate-microeconomics"] },
  { id: "labor-economics", title: "Labor Economics", field: "economics", detail: true, requires: ["intermediate-microeconomics", "econometrics"] },
  { id: "public-economics", title: "Public Economics", field: "economics", detail: true, requires: ["intermediate-microeconomics"] },
  { id: "international-economics", title: "International Economics", field: "economics", detail: true, requires: ["intermediate-microeconomics", "intermediate-macroeconomics"] },
  { id: "development-economics", title: "Development Economics", field: "economics", detail: true, requires: ["intermediate-microeconomics", "econometrics"] },
  { id: "environmental-economics", title: "Environmental & Resource Economics", field: "economics", detail: true, requires: ["intermediate-microeconomics"] },
  { id: "monetary-economics", title: "Monetary Economics", field: "economics", detail: true, requires: ["intermediate-macroeconomics"] },
  { id: "economic-growth", title: "Economic Growth", field: "economics", detail: true, requires: ["intermediate-macroeconomics", "mathematical-economics"] },
  { id: "macroeconomic-dynamics", title: "Macroeconomic Dynamics (DSGE)", field: "economics", detail: true, requires: ["economic-growth", "stochastic-processes"] },

  // --- Finance -----------------------------------------------------------
  { id: "financial-economics", title: "Financial Economics", field: "economics", detail: true, requires: ["intermediate-microeconomics", "probability"] },
  { id: "asset-pricing", title: "Asset Pricing", field: "economics", detail: true, requires: ["financial-economics", "stochastic-processes"] },

  // --- Econometrics ------------------------------------------------------
  { id: "econometrics", title: "Econometrics", field: "economics", detail: true, requires: ["statistics", "microeconomics"] },
  { id: "causal-inference-econ", title: "Causal Inference", field: "economics", detail: true, requires: ["econometrics"] },
  { id: "time-series-econometrics", title: "Time Series Econometrics", field: "economics", detail: true, requires: ["econometrics", "stochastic-processes"] },
  { id: "microeconometrics", title: "Microeconometrics", field: "economics", detail: true, requires: ["econometrics"] },

  { id: "history-economic-thought", title: "History of Economic Thought", field: "economics", detail: true, requires: ["macroeconomics"] },
  { id: "urban-regional-economics", title: "Urban & Regional Economics", field: "economics", detail: true, requires: ["intermediate-microeconomics"] },
]);
