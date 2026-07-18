registerDetail({
  long:
    "Process Systems Engineering treats a chemical plant as an integrated system of interacting units, " +
    "control loops, and business decisions, and develops the modeling and computational methods to " +
    "design and operate it as a whole. It organizes models into a hierarchy, from simple shortcut " +
    "relations to rigorous first-principles descriptions, and uses both steady-state and dynamic " +
    "flowsheet simulation to predict behavior. Degrees-of-freedom analysis clarifies how many " +
    "specifications a model requires and which variables remain free for optimization or control. " +
    "Plantwide control design addresses the challenge of coordinating dozens of loops so that recycle " +
    "streams, inventories, and disturbances do not destabilize the whole plant. Above the single-plant " +
    "level, scheduling, planning, and supply chain optimization align production with demand and " +
    "enterprise economics. Data reconciliation and gross error detection turn noisy measurements into " +
    "consistent estimates of the true process state, supporting monitoring and optimization. " +
    "Increasingly, digital twins and advanced analytics fuse these models with live data to predict, " +
    "diagnose, and optimize operations in real time.",
  topics: [
    "Process modeling hierarchy and abstraction levels",
    "Steady-state flowsheet simulation",
    "Dynamic flowsheet simulation",
    "Degrees-of-freedom analysis",
    "Sequential-modular and equation-oriented solving",
    "Recycle convergence and tearing",
    "Plantwide control design",
    "Control structure selection and pairing",
    "Process scheduling",
    "Production planning",
    "Supply chain and enterprise-wide optimization",
    "Data reconciliation and gross error detection",
    "Process monitoring and fault diagnosis",
    "Digital twins",
    "Advanced analytics and machine learning in operations",
  ],
  recommended: [
    res("Systematic Methods of Chemical Process Design", "Lorenz Biegler, Ignacio Grossmann and Arthur Westerberg", { type: "textbook" }),
  ],
  supplementary: [
    res("Plantwide Process Control", "William Luyben, Bjorn Tyreus and Michael Luyben", { type: "textbook" }),
    res("Chemical Process: Design and Integration", "Robin Smith", { type: "textbook" }),
  ],
});
