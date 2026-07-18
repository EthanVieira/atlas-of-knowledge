registerDetail({
  long: "Spacecraft Design guides students through the iterative synthesis of a complete vehicle from " +
    "mission requirements to a balanced, buildable configuration. The course starts by translating " +
    "mission requirements into a concept of operations and derived subsystem specifications, then " +
    "develops the configuration and structural design that packages instruments, tanks, and " +
    "avionics while carrying launch loads. Thermal design establishes heat balances and budgets, " +
    "and propulsion selection is driven by the delta-v budget that sums every maneuver the mission " +
    "demands. Attitude and power budgets set the size of reaction wheels, arrays, and batteries, " +
    "while mass and link budgets keep the design within launch capability and communications " +
    "capacity. The launch environment imposes quasi-static and vibration loads that size primary " +
    "structure, and the course follows the vehicle into assembly, integration, and test where the " +
    "design is verified. Throughout, reliability analysis and design margins are managed so that " +
    "the converged design closes on mass, power, and performance with confidence.",
  topics: [
    "Mission requirements and concept of operations",
    "Requirements flow-down to subsystems",
    "Configuration and structural design",
    "Launch environment and load cases",
    "Thermal design and heat budgets",
    "Propulsion selection and delta-v budget",
    "Attitude control budget",
    "Electrical power budget",
    "Mass budget and margins",
    "Communications link budget",
    "Design iteration and budget closure",
    "Reliability and redundancy analysis",
    "Assembly, integration, and test",
    "Verification and validation",
    "Design margins and risk management",
  ],
  recommended: [
    res("Space Mission Engineering: The New SMAD", "James R. Wertz, David F. Everett, and Jeffery J. Puschell", { type: "textbook" }),
    res("Fundamentals of Spacecraft Attitude Determination and Control", "F. Landis Markley and John L. Crassidis", { type: "textbook" }),
  ],
  supplementary: [
    res("Elements of Spacecraft Design", "Charles D. Brown", { type: "textbook" }),
    res("Spacecraft Structures and Mechanisms: From Concept to Launch", "Thomas P. Sarafin", { type: "reference" }),
  ],
});
