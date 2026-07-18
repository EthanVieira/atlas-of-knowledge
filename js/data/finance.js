/* ============================================================================
 *  FINANCE
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/finance/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it. Finance sits atop business, economics
 *  and mathematics — it builds on corporate finance, investments, asset
 *  pricing and stochastic processes rather than repeating them.
 * ==========================================================================*/
registerCourses([

  // --- Markets & instruments ---------------------------------------------
  { id: "financial-markets", title: "Financial Markets & Institutions", field: "finance", detail: true, requires: ["corporate-finance"] },
  { id: "fixed-income", title: "Fixed Income Securities", field: "finance", detail: true, requires: ["investments"] },
  { id: "derivatives", title: "Derivatives & Options", field: "finance", detail: true, requires: ["investments", "stochastic-processes"] },
  { id: "credit-risk", title: "Credit Risk & Structured Products", field: "finance", detail: true, requires: ["fixed-income", "derivatives"] },

  // --- Quantitative finance ----------------------------------------------
  { id: "mathematical-finance", title: "Mathematical Finance", field: "finance", detail: true, requires: ["derivatives"] },
  { id: "financial-risk-management", title: "Financial Risk Management", field: "finance", detail: true, requires: ["derivatives"] },
  { id: "computational-finance", title: "Computational Finance", field: "finance", detail: true, requires: ["mathematical-finance", "programming-fundamentals"] },
  { id: "financial-econometrics", title: "Financial Econometrics", field: "finance", detail: true, requires: ["time-series-econometrics"] },
  { id: "algorithmic-trading", title: "Algorithmic & Quantitative Trading", field: "finance", detail: true, requires: ["computational-finance", "machine-learning"] },

  // --- Investment & asset management --------------------------------------
  { id: "behavioral-finance", title: "Behavioral Finance", field: "finance", detail: true, requires: ["investments", "behavioral-economics"] },
  { id: "sustainable-finance", title: "Sustainable & ESG Finance", field: "finance", detail: true, requires: ["investments"] },
  { id: "market-microstructure", title: "Market Microstructure", field: "finance", detail: true, requires: ["financial-markets"] },

  // --- Corporate & alternative investments -------------------------------
  { id: "mergers-acquisitions", title: "Mergers & Acquisitions", field: "finance", detail: true, requires: ["corporate-finance"] },
  { id: "private-equity-vc", title: "Private Equity & Venture Capital", field: "finance", detail: true, requires: ["corporate-finance"] },
  { id: "real-estate-finance", title: "Real Estate Finance & Investment", field: "finance", detail: true, requires: ["corporate-finance"] },
  { id: "commodities-energy-finance", title: "Commodities & Energy Finance", field: "finance", detail: true, requires: ["derivatives"] },

  // --- Banking, global & regulation --------------------------------------
  { id: "banking", title: "Banking & Financial Intermediation", field: "finance", detail: true, requires: ["financial-markets"] },
  { id: "international-finance", title: "International Finance", field: "finance", detail: true, requires: ["financial-markets", "international-economics"] },
  { id: "financial-regulation", title: "Financial Regulation & Compliance", field: "finance", detail: true, requires: ["financial-markets"] },
  { id: "insurance-actuarial", title: "Insurance & Actuarial Finance", field: "finance", detail: true, requires: ["financial-risk-management", "statistics"] },

  // --- Financial technology ----------------------------------------------
  { id: "fintech", title: "Financial Technology (FinTech)", field: "finance", detail: true, requires: ["financial-markets", "programming-fundamentals"] },
  { id: "blockchain-finance", title: "Blockchain & Decentralized Finance", field: "finance", detail: true, requires: ["fintech"] },

]);
