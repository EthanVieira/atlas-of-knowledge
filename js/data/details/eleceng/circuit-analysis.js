registerDetail({
  long: "Circuit Analysis develops the systematic methods used to predict the behavior of electrical " +
    "networks built from resistors, capacitors, inductors, and independent and dependent sources. " +
    "The course begins with the fundamental conservation laws, Ohm's law together with Kirchhoff's " +
    "current and voltage laws, and organizes them into the powerful nodal and mesh analysis " +
    "procedures that reduce any linear circuit to a solvable system of equations. Network theorems " +
    "such as superposition, source transformation, and the Thevenin and Norton equivalents provide " +
    "compact ways to model complicated subnetworks and to reason about maximum power transfer. The " +
    "transient response of first-order RC and RL circuits and second-order RLC circuits is analyzed " +
    "through their natural and forced responses, damping, and characteristic time constants. For " +
    "sinusoidal excitation the course introduces phasors and complex impedance, turning differential " +
    "equations into algebra and enabling the study of AC steady state, average and complex power, " +
    "and power factor correction. The final topics cover frequency response, resonance in tuned " +
    "circuits, and the two-port network parameters used to characterize amplifiers and filters as " +
    "reusable building blocks.",
  topics: [
    "Ohm's law and Kirchhoff's current and voltage laws",
    "Series and parallel reduction and dividers",
    "Nodal analysis",
    "Mesh analysis",
    "Superposition and source transformation",
    "Thevenin and Norton equivalents",
    "Maximum power transfer",
    "First-order RC and RL transients",
    "Second-order RLC transients and damping",
    "Sinusoidal steady state and phasors",
    "Complex impedance and admittance",
    "AC power, complex power, and power factor",
    "Frequency response and Bode plots",
    "Resonance and quality factor",
    "Two-port network parameters",
  ],
  recommended: [
    res("Fundamentals of Electric Circuits", "Charles Alexander & Matthew Sadiku", { type: "textbook" }),
    res("Electric Circuits", "James Nilsson & Susan Riedel", { type: "textbook" }),
    res("6.002 Circuits and Electronics", "MIT OpenCourseWare", { type: "lectures", free: true, url: "https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/" }),
  ],
  supplementary: [
    res("Basic Circuit Theory", "Charles Desoer & Ernest Kuh", { type: "reference" }),
    res("Engineering Circuit Analysis", "William Hayt, Jack Kemmerly & Steven Durbin", { type: "textbook" }),
  ],
});
