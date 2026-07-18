registerDetail({
  long: "Aeroelasticity studies the interaction of aerodynamic, elastic, and inertial forces on " +
    "flexible aircraft structures, the coupling captured by Collar's aeroelastic triangle. The " +
    "course introduces the typical-section model, a two-degree-of-freedom airfoil on bending " +
    "and torsional springs, as the workhorse for building physical intuition. Static " +
    "aeroelasticity is developed first, treating the divergence of a lifting surface where " +
    "aerodynamic moment overwhelms torsional stiffness, and control-surface reversal where " +
    "elastic twist cancels the effect of a deflected control. Dynamic phenomena require " +
    "unsteady aerodynamics, so the course develops Theodorsen's theory for harmonic motion and " +
    "indicial and Wagner approaches for arbitrary motion. These feed the central problem of " +
    "flutter, the self-excited bending-torsion instability, analyzed with the k and p-k methods " +
    "to find flutter speed and frequency. Gust and turbulence response and the resulting " +
    "dynamic loads are treated statistically, and limit-cycle oscillations introduce " +
    "nonlinear effects. The course closes with aeroservoelasticity, where active control laws " +
    "and structural dynamics interact and must be designed together.",
  topics: [
    "The aeroelastic triangle and coupling of forces",
    "The typical-section model",
    "Static aeroelasticity and load redistribution",
    "Wing divergence",
    "Control-surface effectiveness and reversal",
    "Unsteady aerodynamics fundamentals",
    "Theodorsen's theory for harmonic motion",
    "Indicial and Wagner functions for arbitrary motion",
    "Bending-torsion flutter",
    "Flutter analysis by the k and p-k methods",
    "Gust and turbulence response",
    "Dynamic loads and the discrete and continuous gust models",
    "Limit-cycle oscillations and nonlinear aeroelasticity",
    "Aeroservoelasticity and active control",
  ],
  recommended: [
    res("A Modern Course in Aeroelasticity", "Earl H. Dowell et al.", { type: "textbook" }),
    res("Aeroelasticity", "Raymond L. Bisplinghoff, Holt Ashley, and Robert L. Halfman", { type: "textbook" }),
  ],
  supplementary: [
    res("Introduction to Structural Dynamics and Aeroelasticity", "Dewey H. Hodges and G. Alvin Pierce", { type: "textbook" }),
    res("An Introduction to the Theory of Aeroelasticity", "Y. C. Fung", { type: "reference" }),
  ],
});
