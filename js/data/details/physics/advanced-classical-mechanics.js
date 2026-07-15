registerDetail({
  long:
    "Advanced Classical Mechanics is the graduate treatment of the analytical formalism, taking the " +
    "Lagrangian and Hamiltonian pictures introduced at the undergraduate level and developing them " +
    "into a complete and elegant theory of dynamics. It centres on the Hamiltonian formulation and " +
    "the geometry of phase space: Poisson brackets, canonical transformations and the generating " +
    "functions that produce them, culminating in Hamilton–Jacobi theory and the action-angle " +
    "variables that make integrable systems transparent and expose adiabatic invariants. From there " +
    "it treats rigid-body motion and the heavy symmetric top in depth, canonical perturbation theory, " +
    "and the transition from discrete systems to classical field theory via a Lagrangian density. The " +
    "course closes with the modern understanding of Hamiltonian chaos and the KAM theorem, the point " +
    "at which integrability breaks down. Throughout, the deep structural connections to quantum " +
    "mechanics and statistical mechanics — Poisson brackets to commutators, phase space to Hilbert " +
    "space — are made explicit, which is why this material is the standard first course of a graduate " +
    "physics education.",
  topics: [
    "Variational principles & Hamilton's principle", "D'Alembert's principle & constraints",
    "Lagrangian mechanics revisited", "Symmetries, Noether's theorem & conservation laws",
    "The Legendre transform & Hamilton's equations", "Phase space & Liouville's theorem",
    "Poisson brackets & the canonical structure", "Canonical transformations & generating functions",
    "Hamilton–Jacobi theory", "Action-angle variables & integrable systems",
    "Adiabatic invariants", "Rigid-body dynamics & Euler's equations",
    "The heavy symmetric top", "Small oscillations & normal modes",
    "Canonical perturbation theory", "Relativistic mechanics (Lagrangian form)",
    "Continuous systems & classical field theory", "Hamiltonian chaos & the KAM theorem",
  ],
  recommended: [
    res("Classical Mechanics", "Goldstein, Poole & Safko", { type: "textbook" }),
    res("Mechanics (Course of Theoretical Physics, Vol. 1)", "L. D. Landau & E. M. Lifshitz", { type: "textbook" }),
    res("Classical Dynamics", "David Tong", { type: "notes", free: true,
      url: "https://www.damtp.cam.ac.uk/user/tong/dynamics.html" }),
  ],
  supplementary: [
    res("Mathematical Methods of Classical Mechanics", "V. I. Arnold", { type: "textbook" }),
    res("Classical Dynamics: A Contemporary Approach", "José & Saletan", { type: "textbook" }),
    res("Structure and Interpretation of Classical Mechanics", "Sussman & Wisdom", { type: "textbook" }),
  ],
});
