/* ============================================================================
 *  BUSINESS
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/business/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it. Business is applied social science:
 *  its foundations reach into economics, statistics, psychology and beyond.
 * ==========================================================================*/
registerCourses([

  // --- Foundations -------------------------------------------------------
  { id: "intro-business", title: "Introduction to Business", field: "business", detail: true, requires: [] },
  { id: "financial-accounting", title: "Financial Accounting", field: "business", detail: true, requires: ["intro-business"] },
  { id: "managerial-accounting", title: "Managerial Accounting", field: "business", detail: true, requires: ["financial-accounting"] },
  { id: "management-principles", title: "Principles of Management", field: "business", detail: true, requires: ["intro-business"] },

  // --- People & organization ---------------------------------------------
  { id: "organizational-behavior", title: "Organizational Behavior", field: "business", detail: true, requires: ["management-principles", "psychology"] },
  { id: "human-resource-management", title: "Human Resource Management", field: "business", detail: true, requires: ["organizational-behavior"] },
  { id: "leadership", title: "Leadership", field: "business", detail: true, requires: ["organizational-behavior"] },
  { id: "negotiation", title: "Negotiation & Conflict Resolution", field: "business", detail: true, requires: ["organizational-behavior", "game-theory"] },

  // --- Marketing ---------------------------------------------------------
  { id: "marketing", title: "Marketing Management", field: "business", detail: true, requires: ["intro-business", "microeconomics"] },
  { id: "consumer-behavior", title: "Consumer Behavior", field: "business", detail: true, requires: ["marketing", "social-psychology"] },
  { id: "digital-marketing", title: "Digital Marketing", field: "business", detail: true, requires: ["marketing"] },
  { id: "brand-management", title: "Brand Management", field: "business", detail: true, requires: ["marketing"] },

  // --- Finance & accounting ----------------------------------------------
  { id: "corporate-finance", title: "Corporate Finance", field: "business", detail: true, requires: ["managerial-accounting", "microeconomics"] },
  { id: "investments", title: "Investments & Portfolio Management", field: "business", detail: true, requires: ["corporate-finance", "financial-economics"] },
  { id: "financial-analysis", title: "Financial Statement Analysis & Valuation", field: "business", detail: true, requires: ["corporate-finance"] },

  // --- Operations, information & analytics -------------------------------
  { id: "operations-management", title: "Operations Management", field: "business", detail: true, requires: ["management-principles", "statistics"] },
  { id: "supply-chain-management", title: "Supply Chain Management", field: "business", detail: true, requires: ["operations-management"] },
  { id: "information-systems", title: "Management Information Systems", field: "business", detail: true, requires: ["intro-business"] },
  { id: "business-analytics", title: "Business Analytics", field: "business", detail: true, requires: ["information-systems", "statistics"] },

  // --- Strategy, ventures & context --------------------------------------
  { id: "business-strategy", title: "Strategic Management", field: "business", detail: true, requires: ["marketing", "corporate-finance", "operations-management"] },
  { id: "entrepreneurship", title: "Entrepreneurship & New Ventures", field: "business", detail: true, requires: ["marketing", "corporate-finance"] },
  { id: "international-business", title: "International Business", field: "business", detail: true, requires: ["business-strategy", "international-economics"] },
  { id: "business-ethics", title: "Business Ethics & CSR", field: "business", detail: true, requires: ["management-principles", "applied-ethics"] },
  { id: "business-law", title: "Business Law", field: "business", detail: true, requires: ["intro-business"] },

]);
