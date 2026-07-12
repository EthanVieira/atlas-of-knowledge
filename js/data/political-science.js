/* ============================================================================
 *  POLITICAL SCIENCE (social sciences)
 * ==========================================================================*/
registerCourses([

  { id: "political-science", title: "Introduction to Political Science", field: "politicalscience",
    desc: "The systematic study of politics, power and government.",
    requires: [],
    topics: ["States & sovereignty", "Political systems", "Institutions", "Political behavior", "Ideologies", "Power & legitimacy"],
    free: [R("Introduction to Political Science", "OpenStax / OER", "https://openstax.org/subjects/social-sciences")],
    paid: [R("Principles of Comparative Politics", "Clark, Golder & Golder")] },

  { id: "political-theory", title: "Political Theory", field: "politicalscience",
    desc: "The great questions of political life — justice, liberty, power and legitimacy — through the canon.",
    requires: ["political-science", "political-philosophy"],
    topics: ["Classical political thought", "Social contract theory", "Liberalism", "Marxism", "Republicanism", "Contemporary theories of justice"],
    free: [R("Political theory notes", "Various")],
    paid: [R("Political Thinkers", "Boucher & Kelly")] },

  { id: "comparative-politics", title: "Comparative Politics", field: "politicalscience",
    desc: "Comparing political systems to explain how they work and why they differ.",
    requires: ["political-science"],
    topics: ["Regime types", "Democratization", "Electoral systems", "Party systems", "State capacity", "Political violence"],
    free: [R("Comparative politics notes", "Various")],
    paid: [R("Principles of Comparative Politics", "Clark, Golder & Golder")] },

  { id: "international-relations", title: "International Relations", field: "politicalscience",
    desc: "How states and other actors interact in the global arena — conflict, cooperation and order.",
    requires: ["political-science"],
    topics: ["Realism & liberalism", "Constructivism", "War & security", "International institutions", "Political economy of trade", "Global governance"],
    free: [R("International relations notes", "Various")],
    paid: [R("World Politics", "Frieden, Lake & Schultz")] },

  { id: "public-policy", title: "Public Policy", field: "politicalscience",
    desc: "How governments make, implement and evaluate policy.",
    requires: ["political-science", "microeconomics"],
    topics: ["The policy process", "Agenda setting", "Policy analysis", "Implementation", "Program evaluation", "Cost–benefit analysis"],
    free: [R("Public policy notes", "Various")],
    paid: [R("Understanding Public Policy", "Thomas Dye")] },

  { id: "political-economy", title: "Political Economy", field: "politicalscience",
    desc: "The interplay of politics and economics in shaping institutions and outcomes.",
    requires: ["political-science", "microeconomics"],
    topics: ["Collective action", "Institutions & growth", "The political business cycle", "Redistribution", "Rent-seeking", "Development & governance"],
    free: [R("Political economy notes", "Various")],
    paid: [R("Why Nations Fail", "Acemoglu & Robinson")] },

  { id: "quantitative-political-science", title: "Quantitative Political Analysis", field: "politicalscience",
    desc: "Statistical and formal methods for studying political phenomena.",
    requires: ["political-science", "statistics"],
    topics: ["Survey research", "Regression for political data", "Causal inference in politics", "Formal models", "Text as data", "Experiments in political science"],
    free: [R("Quantitative Social Science (companion)", "Kosuke Imai", "https://qss.princeton.press/")],
    paid: [R("Quantitative Social Science", "Kosuke Imai")] },

]);
