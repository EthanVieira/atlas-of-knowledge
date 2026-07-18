registerDetail({
  long:
    "Mechanism design is often called 'reverse game theory': instead of taking the rules of a game as given and predicting behavior, it starts from a desired social outcome and asks how to design rules so that self-interested agents, acting on private information, are led to bring it about. " +
    "The course builds on the revelation principle, which lets the designer restrict attention without loss to incentive-compatible direct mechanisms in which truth-telling is optimal. " +
    "The central tension is between incentive compatibility and other goals—efficiency, budget balance, and participation—captured in impossibility results such as the Myerson-Satterthwaite theorem. " +
    "For settings with transferable utility, the Vickrey-Clarke-Groves mechanisms achieve efficient outcomes, and the course analyzes their revenue and budget properties. " +
    "Optimal-mechanism analysis, following Myerson, characterizes the revenue-maximizing design and introduces the virtual-value and envelope techniques that dominate the modern literature. " +
    "Implementation theory asks when desired outcomes can be achieved as equilibria under weaker informational assumptions. " +
    "Applications range from auctions and public-goods provision to regulation, taxation, and the matching markets that allocate students, doctors, and organs.",
  topics: [
    "Social choice functions and implementation",
    "The revelation principle and direct mechanisms",
    "Dominant-strategy incentive compatibility",
    "The Gibbard-Satterthwaite theorem",
    "Vickrey-Clarke-Groves mechanisms",
    "Bayesian incentive compatibility",
    "The Myerson-Satterthwaite impossibility theorem",
    "Optimal mechanisms and virtual values",
    "The revenue-equivalence theorem",
    "Efficiency, budget balance, and participation constraints",
    "Public-goods mechanisms and free-riding",
    "Nash and subgame-perfect implementation",
    "Matching markets and stability",
    "The deferred-acceptance algorithm",
    "Applications to regulation, taxation, and market design",
  ],
  recommended: [
    res("An Introduction to the Theory of Mechanism Design", "Tilman Borgers", { type: "textbook" }),
    res("Putting Auction Theory to Work", "Paul Milgrom", { type: "textbook" }),
  ],
  supplementary: [
    res("Microeconomic Theory (ch. 23)", "Mas-Colell, Whinston & Green", { type: "reference" }),
    res("Game Theory and Mechanism Design", "Y. Narahari", { type: "textbook" }),
    res("Who Gets What - and Why", "Alvin E. Roth", { type: "reference" }),
  ],
});
