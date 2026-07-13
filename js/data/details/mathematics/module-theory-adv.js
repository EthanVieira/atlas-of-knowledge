registerDetail({
  cover: cover(96, "Homological Algebra", "network", "Mathematics"),
  long:
    "Homological algebra measures the failure of exactness, extracting algebraic invariants from chains " +
    "of maps whose composites vanish. The subject begins with chain complexes and their homology, then " +
    "resolves modules by projective and injective objects so that functors can be 'derived' to record " +
    "the information they lose. The derived functors Ext and Tor emerge as the fundamental invariants, " +
    "classifying extensions and measuring the failure of the tensor product to be exact. Abelian " +
    "categories provide the natural axiomatic home for this machinery, freeing it from any particular " +
    "ring, while spectral sequences organize the bookkeeping of iterated derived functors. The course " +
    "closes with the constructions that first motivated the theory, the cohomology of groups and the " +
    "cohomology of sheaves. These tools are indispensable across algebraic topology, algebraic geometry " +
    "and number theory.",
  topics: [
    "Chain & cochain complexes", "Homology & cohomology",
    "Exact sequences & the snake lemma", "Long exact sequences",
    "Projective resolutions", "Injective resolutions",
    "Derived functors", "Ext & extensions", "Tor & flatness",
    "Abelian categories", "Additive & exact functors",
    "Double complexes & total complexes", "Spectral sequences",
    "Group cohomology (overview)", "Sheaf cohomology (overview)",
    "Derived categories (overview)",
  ],
  recommended: [
    res("An Introduction to Homological Algebra", "Charles Weibel", { type: "textbook" }),
    res("An Introduction to Homological Algebra", "Joseph Rotman", { type: "textbook" }),
  ],
  supplementary: [
    res("The Stacks Project: Homological Algebra", "Stacks Project", { type: "reference", free: true,
      url: "https://stacks.math.columbia.edu/" }),
  ],
});
