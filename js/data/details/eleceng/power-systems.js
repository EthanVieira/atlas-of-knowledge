registerDetail({
  long:
    "Power Systems and Energy studies the generation, transmission, and distribution of electric power " +
    "across the interconnected grid, emphasizing steady-state analysis, fault behavior, and dynamic " +
    "stability. The course begins with balanced three-phase circuits and the per-unit system, which " +
    "normalizes quantities across transformers and voltage levels to simplify large-network calculations. " +
    "Transformer models and transmission-line parameters, including series impedance and shunt " +
    "capacitance, lead to short, medium, and long line models used throughout system studies. Power-flow " +
    "analysis is developed as the central computational task, solved with the Gauss-Seidel and " +
    "Newton-Raphson methods to determine bus voltages and line flows under given loading. Symmetrical " +
    "components provide the framework for analyzing unbalanced faults, and students compute currents for " +
    "symmetric and asymmetric faults that drive protection design. Protective relaying and circuit-breaker " +
    "coordination are examined to ensure selective, reliable isolation of faults. The course addresses " +
    "power system stability, from transient rotor-angle swings to steady-state and voltage stability, and " +
    "concludes with the challenges of integrating renewable generation and modern power electronics into " +
    "the grid.",
  topics: [
    "Balanced three-phase circuits",
    "The per-unit system",
    "Transformer models and connections",
    "Transmission-line parameters",
    "Short, medium, and long line models",
    "Power-flow formulation",
    "Gauss-Seidel and Newton-Raphson power flow",
    "Symmetrical components",
    "Balanced three-phase fault analysis",
    "Unsymmetrical fault analysis",
    "Protective relaying and coordination",
    "Circuit breakers and switchgear",
    "Transient and rotor-angle stability",
    "Voltage stability and reactive power",
    "Economic dispatch and unit commitment",
    "Renewable and grid integration",
  ],
  recommended: [
    res("Power System Analysis and Design", "J. Duncan Glover, Thomas Overbye and Mulukutla S. Sarma", { type: "textbook" }),
    res("Power Systems Analysis", "Arthur R. Bergen and Vijay Vittal", { type: "textbook" }),
  ],
  supplementary: [
    res("Power System Analysis", "John J. Grainger and William D. Stevenson", { type: "textbook" }),
    res("Power System Stability and Control", "Prabha Kundur", { type: "reference" }),
  ],
});
