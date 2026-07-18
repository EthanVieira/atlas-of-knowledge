registerDetail({
  long: "Chemical Reaction Engineering is the study of how to design and analyze reactors in which chemical " +
    "transformations occur, combining reaction kinetics with the conservation laws. It begins with the " +
    "general mole balance and the definitions of rate laws, reaction order, and stoichiometry expressed " +
    "in terms of conversion. These tools are applied to the ideal reactor types, the batch reactor, the " +
    "continuous stirred-tank reactor (CSTR), the plug-flow reactor (PFR), and the packed-bed reactor " +
    "(PBR), to derive design equations and size reactors for a target conversion. Reactors in series and " +
    "in parallel are compared, and multiple-reaction systems bring in the crucial questions of yield and " +
    "selectivity. Non-isothermal operation couples the mole balance to an energy balance, revealing " +
    "adiabatic temperature rise, multiple steady states, and reactor stability. Heterogeneous catalysis " +
    "introduces adsorption, surface reaction, and rate-limiting steps together with internal and external " +
    "diffusion effects. The course closes with residence-time distribution theory and models for " +
    "non-ideal reactors, giving engineers a framework to diagnose and correct real reactor behavior.",
  topics: [
    "Rate laws, reaction order, and the Arrhenius dependence",
    "Stoichiometry and conversion",
    "The general mole balance",
    "Batch reactor design",
    "CSTR design and sizing",
    "PFR and PBR design and sizing",
    "Reactors in series and Levenspiel plots",
    "Multiple reactions, yield, and selectivity",
    "Energy balances and non-isothermal reactor design",
    "Adiabatic operation and multiple steady states",
    "Heterogeneous catalysis and adsorption isotherms",
    "Rate-limiting steps and LHHW kinetics",
    "Internal and external diffusion limitations",
    "Residence-time distribution (RTD)",
    "Non-ideal reactor models (dispersion, tanks-in-series)",
  ],
  recommended: [
    res("Elements of Chemical Reaction Engineering", "H. Scott Fogler", { type: "textbook" }),
    res("Chemical Reaction Engineering", "Octave Levenspiel", { type: "textbook" }),
  ],
  supplementary: [
    res("Chemical Reactor Analysis and Design Fundamentals", "James B. Rawlings and John G. Ekerdt", { type: "textbook" }),
    res("Chemical Reactor Analysis and Design", "Gilbert F. Froment, Kenneth B. Bischoff, and Juray De Wilde", { type: "reference" }),
  ],
});
