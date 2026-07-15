registerDetail({
  long:
    "Nonlinear physics and chaos studies dynamical systems in which the response is not proportional to the input, giving rise to behavior that has no analog in linear theory. " +
    "The course develops a geometric, qualitative approach: rather than seeking exact solutions, students analyze flows in phase space, locate fixed points, and classify their stability through linearization. " +
    "One-dimensional flows introduce bifurcations—saddle-node, transcritical, and pitchfork—where the qualitative structure of a system changes as a parameter is varied, and two-dimensional phase-plane analysis adds limit cycles, the Poincaré–Bendixson theorem, and the Hopf bifurcation. " +
    "Nonlinear oscillators such as the van der Pol equation, together with forced and damped systems, illustrate resonance, entrainment, and the onset of complex motion. " +
    "The heart of the course is deterministic chaos: sensitive dependence on initial conditions, the logistic map and its period-doubling route to chaos, Lyapunov exponents, and strange attractors with their fractal geometry. " +
    "Later topics broaden the view to spatially extended and collective phenomena, including solitons, pattern formation, and synchronization of coupled oscillators. " +
    "The treatment emphasizes physical intuition and worked examples drawn from mechanics, circuits, biology, and fluids.",
  topics: [
    "Flows on the line",
    "Fixed points and linear stability analysis",
    "Saddle-node, transcritical, and pitchfork bifurcations",
    "Phase-plane analysis in two dimensions",
    "Limit cycles and the Poincaré–Bendixson theorem",
    "The Hopf bifurcation",
    "Nonlinear oscillators and the van der Pol equation",
    "Forced oscillators and resonance",
    "Chaos and sensitive dependence on initial conditions",
    "The logistic map and period doubling",
    "Lyapunov exponents",
    "Strange attractors and fractals",
    "The Lorenz equations",
    "Solitons",
    "Pattern formation",
    "Synchronization of coupled oscillators",
  ],
  recommended: [
    res("Nonlinear Dynamics and Chaos (lectures)", "Steven Strogatz", {
      type: "lectures",
      free: true,
      url: "https://www.youtube.com/playlist?list=PLbN57C5Zdl6j_qJA-pARJnKsmROzPnO9V",
    }),
    res("Nonlinear Dynamics and Chaos", "Steven Strogatz", { type: "textbook" }),
  ],
  supplementary: [
    res("Chaos: An Introduction to Dynamical Systems", "Kathleen T. Alligood, Tim D. Sauer, James A. Yorke", { type: "textbook" }),
    res("Nonlinear Dynamics and Chaos with Applications", "Steven H. Strogatz", { type: "problems" }),
    res("Differential Equations, Dynamical Systems, and an Introduction to Chaos", "Morris W. Hirsch, Stephen Smale, Robert L. Devaney", { type: "textbook" }),
  ],
});
