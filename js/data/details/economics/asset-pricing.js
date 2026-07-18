registerDetail({
  long:
    "Asset pricing is the theory of how the prices of financial claims are determined by risk, time, and investors' preferences, developed at the level used in graduate finance and macro-finance research. " +
    "Its central organizing principle is that the price of any asset equals the expectation of its payoff discounted by a stochastic discount factor (SDF), and the course shows how nearly every model in the field is a specification of that single equation. " +
    "The consumption-based CAPM connects the SDF to the marginal utility of consumption, and the course confronts it with the equity-premium and risk-free-rate puzzles that have driven decades of research. " +
    "Factor models—the CAPM, Fama-French, and their descendants—are developed both as empirical workhorses and as SDF specifications, alongside the econometrics of estimating and testing them. " +
    "Continuous-time methods introduce Ito calculus, the fundamental theorem of asset pricing, and risk-neutral valuation for derivatives. " +
    "The term structure of interest rates and dynamic portfolio choice are treated with the same recursive tools. " +
    "The course closes with the frontier: long-run risk, habit formation, rare disasters, and behavioral models that attempt to resolve the empirical puzzles.",
  topics: [
    "The stochastic discount factor and the pricing equation",
    "The consumption-based CAPM",
    "The equity-premium and risk-free-rate puzzles",
    "Mean-variance frontier and the Hansen-Jagannathan bound",
    "Factor models: CAPM, Fama-French, and beyond",
    "The econometrics of asset pricing (GMM)",
    "Complete markets and risk-neutral pricing",
    "The fundamental theorems of asset pricing",
    "Continuous-time finance and Ito's lemma",
    "The term structure of interest rates",
    "Dynamic portfolio choice",
    "Long-run risk and habit-formation models",
    "Rare disasters and tail risk",
    "Return predictability and market efficiency",
    "Behavioral and intermediary asset pricing",
  ],
  recommended: [
    res("Asset Pricing", "John H. Cochrane", { type: "textbook" }),
    res("Dynamic Asset Pricing Theory", "Darrell Duffie", { type: "textbook" }),
  ],
  supplementary: [
    res("Asset Pricing and Portfolio Choice Theory", "Kerry E. Back", { type: "textbook" }),
    res("Financial Asset Pricing Theory", "Claus Munk", { type: "reference" }),
    res("Stochastic Calculus for Finance II", "Steven E. Shreve", { type: "reference" }),
  ],
});
