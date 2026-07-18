registerDetail({
  long:
    "RF and Microwave Engineering treats the design of circuits and systems at frequencies where " +
    "wavelengths are comparable to component dimensions and lumped-element intuition breaks down. The " +
    "course begins with transmission-line theory as the workhorse for distributed circuits, then " +
    "introduces the scattering matrix and S-parameters as the natural description of multiport networks " +
    "that are hard to characterize with voltages and currents alone. Students learn to design impedance " +
    "matching networks using lumped elements, quarter-wave transformers, and single- and double-stub " +
    "tuners, working fluently with the Smith chart. Microwave network analysis is developed through " +
    "impedance, admittance, and transmission matrices, along with signal-flow graphs for cascaded " +
    "components. A substantial portion covers passive components, including directional couplers, power " +
    "dividers, filters, and resonators, and the coupling structures used to realize them. The course then " +
    "turns to active design, addressing microwave amplifier gain and stability, low-noise and power " +
    "amplifiers, and oscillator design. Noise figure and its role in receiver sensitivity tie the " +
    "material to practical communication and radar front ends.",
  topics: [
    "Transmission-line theory and distributed circuits",
    "The Smith chart",
    "Scattering parameters and the scattering matrix",
    "Impedance and admittance matrices",
    "Signal-flow graphs",
    "Impedance matching networks",
    "Single- and double-stub tuning",
    "Directional couplers and power dividers",
    "Microwave filter design",
    "Resonators and Q factor",
    "Microwave amplifier gain and stability",
    "Low-noise and power amplifiers",
    "Microwave oscillator design",
    "Noise figure and receiver sensitivity",
    "Mixers and frequency conversion",
  ],
  recommended: [
    res("Microwave Engineering", "David M. Pozar", { type: "textbook" }),
  ],
  supplementary: [
    res("Foundations for Microwave Engineering", "Robert E. Collin", { type: "textbook" }),
    res("Microwave Transistor Amplifiers: Analysis and Design", "Guillermo Gonzalez", { type: "reference" }),
  ],
});
