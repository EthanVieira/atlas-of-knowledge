registerDetail({
  cover: cover(96, "Complex Analysis", "curve", "Mathematics"),
  long:
    "Complex analysis studies functions of a single complex variable, where the mere assumption of " +
    "differentiability turns out to be astonishingly rigid. A function that is complex-differentiable " +
    "on an open set is automatically infinitely differentiable and locally given by a convergent power " +
    "series, a phenomenon with no counterpart in real analysis. The subject's engine is contour " +
    "integration, from which Cauchy's theorem and integral formula unlock the residue calculus, the " +
    "argument principle, and powerful methods for evaluating real integrals. Geometrically, holomorphic " +
    "maps are conformal, preserving angles, which leads to the theory of conformal equivalence and the " +
    "remarkable Riemann mapping theorem. Analytic continuation then extends functions beyond their " +
    "original domains, revealing the global structure that makes the theory so unified and elegant.",
  topics: [
    "Complex numbers & the Riemann sphere", "Holomorphic functions", "The Cauchy–Riemann equations",
    "Power series & analyticity", "Contour integration", "Cauchy's theorem",
    "Cauchy's integral formula", "Liouville's theorem & the fundamental theorem of algebra",
    "Laurent series & singularities", "The residue theorem", "Evaluating real integrals",
    "The argument principle & Rouché's theorem", "Conformal maps & Möbius transformations",
    "The Riemann mapping theorem", "Analytic continuation", "Harmonic functions",
  ],
  recommended: [
    res("Complex Analysis", "Elias M. Stein & Rami Shakarchi", { type: "textbook" }),
    res("Complex Analysis", "George Cain", { type: "notes", free: true, url: "https://people.math.gatech.edu/~cain/winter99/complex.html" }),
  ],
  supplementary: [
    res("Complex Analysis", "Lars Ahlfors", { type: "textbook" }),
    res("Visual Complex Analysis", "Tristan Needham", { type: "textbook" }),
  ],
});
