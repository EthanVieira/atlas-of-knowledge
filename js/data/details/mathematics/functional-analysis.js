registerDetail({
  cover: cover(96, "Functional Analysis", "vectors", "Mathematics"),
  long:
    "Functional analysis studies infinite-dimensional vector spaces equipped with a topology, treating " +
    "functions themselves as points in a space and linear operators as the maps between such spaces. The " +
    "central objects are normed, Banach, and Hilbert spaces, where completeness and geometry combine to " +
    "make analysis possible in infinitely many dimensions. Four pillars organize the theory: the " +
    "Hahn–Banach theorem on extending functionals, and the open mapping, closed graph, and uniform " +
    "boundedness theorems that flow from Baire category. Duality and the weak and weak-* topologies " +
    "reveal compactness where the norm topology offers none, culminating in results like Banach–Alaoglu. " +
    "Compact operators and the spectral theorem then generalize linear algebra to infinite dimensions, " +
    "providing the language for differential equations, quantum mechanics, and modern analysis.",
  topics: [
    "Normed & Banach spaces", "Hilbert spaces & orthogonality", "Bounded linear operators",
    "The Hahn–Banach theorem", "The Baire category theorem", "The open mapping theorem",
    "The closed graph theorem", "The uniform boundedness principle", "Dual spaces & reflexivity",
    "The Riesz representation theorem", "Weak & weak-* topologies", "The Banach–Alaoglu theorem",
    "Compact operators", "The Fredholm alternative", "Spectral theory of operators",
    "The spectral theorem for self-adjoint operators",
  ],
  recommended: [
    res("Functional Analysis, Sobolev Spaces and Partial Differential Equations", "Haim Brezis", { type: "textbook" }),
    res("Functional Analysis", "Peter D. Lax", { type: "textbook" }),
  ],
  supplementary: [
    res("Functional Analysis", "Walter Rudin", { type: "textbook" }),
  ],
});
