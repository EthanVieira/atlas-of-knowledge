registerDetail({
  long:
    "Social choice theory studies how the preferences or judgments of many individuals can be aggregated into a coherent collective decision, and why every appealing method of doing so runs into limits. " +
    "Its founding result, Arrow's impossibility theorem, shows that no rule for aggregating ordinal preferences can simultaneously satisfy a short list of seemingly innocuous conditions without becoming dictatorial. " +
    "The course develops the formal apparatus of preference relations, social welfare functions, and the axioms—unanimity, independence of irrelevant alternatives, non-dictatorship—that these results turn on. " +
    "It analyzes concrete voting rules (majority rule, the Borda count, approval voting) and their vulnerabilities, including Condorcet cycles and the manipulability exposed by the Gibbard-Satterthwaite theorem. " +
    "Restricting the domain of admissible preferences, as with single-peakedness and the median-voter theorem, is studied as a route around the impossibilities. " +
    "The course also treats cardinal and interpersonal approaches, bargaining and fair-division solutions, and the more recent theory of judgment aggregation. " +
    "It sits at the intersection of economics, political science, and philosophy, giving a rigorous vocabulary for debates about democracy, welfare, and fairness.",
  topics: [
    "Preference relations and rationality axioms",
    "Social welfare functions and social choice functions",
    "Arrow's impossibility theorem",
    "Independence of irrelevant alternatives and its role",
    "Majority rule and Condorcet cycles",
    "Scoring rules: the Borda count and approval voting",
    "Single-peaked preferences and the median-voter theorem",
    "The Gibbard-Satterthwaite manipulability theorem",
    "Strategy-proofness and restricted domains",
    "Sen's liberal paradox",
    "Cardinal utility and interpersonal comparisons",
    "Bargaining solutions (Nash, Kalai-Smorodinsky)",
    "Fair division and envy-freeness",
    "Judgment aggregation and the discursive dilemma",
    "Applications to welfare economics and voting",
  ],
  recommended: [
    res("Social Choice Theory", "Stanford Encyclopedia of Philosophy", { type: "reference", free: true, url: "https://plato.stanford.edu/entries/social-choice/" }),
    res("Collective Choice and Social Welfare", "Amartya Sen", { type: "textbook" }),
    res("Social Choice and Individual Values", "Kenneth J. Arrow", { type: "textbook" }),
  ],
  supplementary: [
    res("The Theory of Committees and Elections", "Duncan Black", { type: "reference" }),
    res("Handbook of Social Choice and Welfare", "Arrow, Sen & Suzumura (eds.)", { type: "reference" }),
    res("Fair Division and Collective Welfare", "Herve Moulin", { type: "textbook" }),
  ],
});
