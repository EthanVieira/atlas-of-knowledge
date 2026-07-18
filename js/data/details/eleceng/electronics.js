registerDetail({
  long: "Electronics studies how semiconductor devices are used to build the amplifiers, filters, and " +
    "signal-processing circuits at the heart of modern systems. The course opens with the physics of " +
    "the pn junction and the semiconductor diode, and applies it to rectifiers, clippers, clampers, " +
    "and voltage regulators. Bipolar junction transistors and MOSFETs are introduced through their " +
    "large-signal characteristics and the biasing networks that place a device at a stable operating " +
    "point. Small-signal models then linearize each device around that operating point, allowing the " +
    "systematic design and analysis of single-stage amplifiers and their gain, input and output " +
    "impedance, and bandwidth. Multistage amplifiers, current mirrors, and differential pairs extend " +
    "these ideas toward integrated-circuit design and lead naturally to the operational amplifier. " +
    "The ideal and non-ideal op-amp is used to build inverting and non-inverting amplifiers, " +
    "integrators, comparators, and active filters. The course closes with negative feedback and its " +
    "effect on gain and bandwidth, the stability of feedback loops, and the conditions that turn a " +
    "feedback amplifier into a sinusoidal oscillator.",
  topics: [
    "Semiconductor diodes and the pn junction",
    "Rectifiers, clippers, and voltage regulation",
    "BJT operation and characteristics",
    "MOSFET operation and characteristics",
    "Transistor biasing and operating point",
    "Small-signal models",
    "Single-stage amplifiers",
    "Multistage and differential amplifiers",
    "Current mirrors and active loads",
    "Operational amplifiers and op-amp circuits",
    "Active filters",
    "Frequency response and bandwidth",
    "Negative feedback and stability",
    "Oscillators",
    "Power amplifiers and output stages",
  ],
  recommended: [
    res("Microelectronic Circuits", "Adel Sedra & Kenneth Smith", { type: "textbook" }),
    res("The Art of Electronics", "Paul Horowitz & Winfield Hill", { type: "textbook" }),
  ],
  supplementary: [
    res("Microelectronics", "Behzad Razavi", { type: "textbook" }),
    res("Design of Analog CMOS Integrated Circuits", "Behzad Razavi", { type: "reference" }),
  ],
});
