registerDetail({
  long: "Heat Transfer studies the rates at which thermal energy moves through and between bodies, " +
    "extending thermodynamics from equilibrium end states to the mechanisms and time scales of " +
    "energy transport. The course begins with conduction, deriving the heat equation and solving " +
    "steady one- and two-dimensional problems, thermal resistance networks, and extended surfaces " +
    "such as fins. Transient conduction is developed through the lumped-capacitance model and the " +
    "analytical and numerical solution of time-dependent problems. Convection is introduced through " +
    "the velocity and thermal boundary layers, with correlations for forced convection in external " +
    "and internal flows and for free convection driven by buoyancy. Boiling and condensation extend " +
    "convection to phase change and its very high heat-transfer coefficients. Radiation is treated " +
    "through blackbody behavior, surface properties, view factors, and enclosure exchange among gray " +
    "diffuse surfaces. The course concludes with heat-exchanger analysis using the log-mean " +
    "temperature difference and effectiveness-NTU methods for design and rating.",
  topics: [
    "Conduction and the heat equation",
    "Thermal resistance networks",
    "Extended surfaces and fin analysis",
    "Two-dimensional steady conduction",
    "Lumped-capacitance transient analysis",
    "Transient conduction in solids",
    "Numerical methods for conduction",
    "Velocity and thermal boundary layers",
    "Forced convection: external flow",
    "Forced convection: internal pipe flow",
    "Free (natural) convection",
    "Boiling and condensation",
    "Blackbody radiation and surface properties",
    "View factors and enclosure radiation exchange",
    "Heat exchangers: LMTD and effectiveness-NTU",
  ],
  recommended: [
    res("Fundamentals of Heat and Mass Transfer", "Theodore L. Bergman, Adrienne S. Lavine, Frank P. Incropera, and David P. DeWitt", { type: "textbook" }),
    res("Heat and Mass Transfer: Fundamentals and Applications", "Yunus A. Cengel and Afshin J. Ghajar", { type: "textbook" }),
  ],
  supplementary: [
    res("A Heat Transfer Textbook", "John H. Lienhard IV and John H. Lienhard V", { type: "textbook", free: true, url: "https://ahtt.mit.edu/" }),
    res("Convective Heat and Mass Transfer", "William M. Kays, Michael E. Crawford, and Bernhard Weigand", { type: "textbook" }),
  ],
});
