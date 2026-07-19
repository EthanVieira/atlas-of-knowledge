/* ============================================================================
 *  POLITICAL SCIENCE
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/politicalscience/<id>.js; the
 *  `detail: true` flag tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Foundations, theory & methods -------------------------------------
  { id: "political-science", title: "Introduction to Political Science", field: "politicalscience", detail: true, requires: [] },
  { id: "political-theory", title: "Political Theory", field: "politicalscience", detail: true, requires: ["political-science", "political-philosophy"] },
  { id: "democratic-theory", title: "Democratic Theory", field: "politicalscience", detail: true, requires: ["political-theory"] },
  { id: "comparative-politics", title: "Comparative Politics", field: "politicalscience", detail: true, requires: ["political-science"] },
  { id: "quantitative-political-science", title: "Quantitative Political Analysis", field: "politicalscience", detail: true, requires: ["political-science", "statistics"] },
  { id: "formal-political-theory", title: "Formal Political Theory", field: "politicalscience", detail: true, requires: ["game-theory", "political-science"] },

  // --- Domestic institutions & behavior ----------------------------------
  { id: "american-politics", title: "American Politics", field: "politicalscience", detail: true, requires: ["political-science"] },
  { id: "public-policy", title: "Public Policy", field: "politicalscience", detail: true, requires: ["political-science", "microeconomics"] },
  { id: "public-administration", title: "Public Administration", field: "politicalscience", detail: true, requires: ["public-policy"] },
  { id: "political-behavior", title: "Political Behavior", field: "politicalscience", detail: true, requires: ["quantitative-political-science"] },
  { id: "electoral-systems", title: "Elections & Electoral Systems", field: "politicalscience", detail: true, requires: ["comparative-politics", "social-choice"] },
  { id: "political-psychology", title: "Political Psychology", field: "politicalscience", detail: true, requires: ["political-behavior", "social-psychology"] },
  { id: "judicial-politics", title: "Judicial Politics & Public Law", field: "politicalscience", detail: true, requires: ["comparative-politics"] },

  // --- International relations --------------------------------------------
  { id: "international-relations", title: "International Relations", field: "politicalscience", detail: true, requires: ["political-science"] },
  { id: "international-security", title: "International Security", field: "politicalscience", detail: true, requires: ["international-relations"] },
  { id: "foreign-policy-analysis", title: "Foreign Policy Analysis", field: "politicalscience", detail: true, requires: ["international-relations"] },
  { id: "international-political-economy", title: "International Political Economy", field: "politicalscience", detail: true, requires: ["international-relations", "political-economy"] },
  { id: "human-rights-politics", title: "Human Rights", field: "politicalscience", detail: true, requires: ["international-relations", "political-theory"] },
  { id: "conflict-studies", title: "Conflict & Peace Studies", field: "politicalscience", detail: true, requires: ["international-relations", "game-theory"] },

  // --- Comparative & development ------------------------------------------
  { id: "political-economy", title: "Political Economy", field: "politicalscience", detail: true, requires: ["political-science", "microeconomics"] },
  { id: "democratization", title: "Democratization & Regimes", field: "politicalscience", detail: true, requires: ["comparative-politics"] },
  { id: "development-politics", title: "Politics of Development", field: "politicalscience", detail: true, requires: ["comparative-politics", "development-economics"] },

  { id: "political-parties", title: "Political Parties & Interest Groups", field: "politicalscience", detail: true, requires: ["political-behavior"] },
  { id: "international-organizations", title: "International Organizations & Global Governance", field: "politicalscience", detail: true, requires: ["international-relations"] },
  { id: "gender-politics", title: "Gender & Politics", field: "politicalscience", detail: true, requires: ["political-science"] },
  { id: "legislative-politics", title: "Legislative Politics", field: "politicalscience", detail: true, requires: ["american-politics"] },
]);
