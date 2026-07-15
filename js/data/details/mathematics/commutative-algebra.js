registerDetail({
  long:
    "Commutative algebra is the study of commutative rings and their modules, and it serves as the " +
    "local language of algebraic geometry and algebraic number theory. Localization lets one zoom in " +
    "on a single prime, turning global questions into local ones, while primary decomposition " +
    "generalizes the factorization of ideals. Integral extensions with the going-up and going-down " +
    "theorems, together with Noether normalization, control how prime ideals lift and descend between " +
    "rings. Hilbert's Nullstellensatz then ties this machinery to geometry, matching radical ideals " +
    "with the vanishing loci of polynomials. The course develops dimension theory, completions, regular " +
    "local rings and flatness, the notions that let one measure and compare the local structure of " +
    "spaces. These tools underpin the modern treatment of schemes and of singularities.",
  topics: [
    "Rings, ideals & modules", "Localization & local rings",
    "Prime spectrum & Zariski topology", "Primary decomposition",
    "Integral extensions", "Going-up & going-down",
    "Noether normalization", "Hilbert's Nullstellensatz",
    "Krull dimension", "Dimension theory & systems of parameters",
    "Filtrations & completions", "Graded rings & Hilbert functions",
    "Regular local rings", "Depth & Cohen-Macaulay rings",
    "Flatness", "Discrete valuation & Dedekind domains",
  ],
  recommended: [
    res("Introduction to Commutative Algebra", "Atiyah & Macdonald", { type: "textbook" }),
    res("Commutative Algebra", "David Eisenbud", { type: "textbook" }),
  ],
  supplementary: [
    res("Commutative Ring Theory", "Hideyuki Matsumura", { type: "textbook" }),
    res("The Stacks Project: Commutative Algebra", "Stacks Project", { type: "reference", free: true,
      url: "https://stacks.math.columbia.edu/" }),
  ],
});
