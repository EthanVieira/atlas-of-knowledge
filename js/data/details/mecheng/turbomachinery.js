registerDetail({
  long: "Turbomachinery studies the rotating machines that add energy to or extract energy from a " +
    "fluid, including pumps, fans, compressors, and hydraulic, gas, and steam turbines. The course " +
    "begins with the Euler turbomachine equation, derived from angular-momentum conservation, which " +
    "relates the work exchanged to the change in swirl across a rotor. Velocity triangles at inlet " +
    "and outlet translate this into blade geometry and provide the language for stage analysis. " +
    "Dimensional analysis yields the dimensionless performance groups (head, flow, and power " +
    "coefficients) and specific speed, which classify machines and enable scaling between geometrically " +
    "similar designs. Radial machines are treated through centrifugal pumps and compressors, including " +
    "slip, diffuser action, and characteristic curves, while axial machines are developed through " +
    "cascade aerodynamics, degree of reaction, and repeating-stage design. Hydraulic turbines (Pelton, " +
    "Francis, and Kaplan) and thermal turbines are analyzed for efficiency and operating range. The " +
    "course closes with limits on performance, including cavitation and net positive suction head in " +
    "pumps, surge and stall in compressors, and losses that set achievable stage efficiency.",
  topics: [
    "The Euler turbomachine equation",
    "Velocity triangles and stage analysis",
    "Dimensional analysis and performance coefficients",
    "Specific speed and machine selection",
    "Centrifugal pumps and pump characteristics",
    "Fans and centrifugal compressors",
    "Slip factor and diffuser action",
    "Axial-flow cascades and blade aerodynamics",
    "Degree of reaction and repeating stages",
    "Axial compressors and gas turbines",
    "Steam turbines",
    "Hydraulic turbines (Pelton, Francis, Kaplan)",
    "Cavitation and net positive suction head",
    "Compressor surge and rotating stall",
    "Losses and stage efficiency",
  ],
  recommended: [
    res("Fluid Mechanics and Thermodynamics of Turbomachinery", "S. L. Dixon and C. A. Hall", { type: "textbook" }),
    res("Fundamentals of Turbomachinery", "William W. Peng", { type: "textbook" }),
  ],
  supplementary: [
    res("Principles of Turbomachinery", "R. K. Turton", { type: "textbook" }),
    res("Axial Flow Compressors", "Ronald H. Aungier", { type: "reference" }),
  ],
});
