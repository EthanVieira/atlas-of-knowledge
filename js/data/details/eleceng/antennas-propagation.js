registerDetail({
  long:
    "Antennas and Propagation studies how currents on conducting structures launch electromagnetic waves " +
    "into space and how those waves travel between transmitter and receiver. The course begins with " +
    "radiation fundamentals, deriving fields from oscillating sources and defining the parameters that " +
    "characterize any antenna, including radiation pattern, directivity, gain, efficiency, input " +
    "impedance, bandwidth, and polarization. It then analyzes canonical wire antennas such as the " +
    "infinitesimal and half-wave dipole, the monopole over a ground plane, and small loops, connecting " +
    "current distributions to far-field behavior. Aperture and horn antennas introduce the equivalence " +
    "principle and Fourier relationships between aperture fields and patterns, while microstrip and patch " +
    "antennas address the low-profile designs used in modern wireless devices. A major theme is antenna " +
    "arrays, where element spacing and excitation control beam direction and shape, leading naturally to " +
    "phased arrays and beamforming. The course also covers radio-wave propagation, including free-space, " +
    "ground-wave, and multipath models, and shows how to construct link budgets. It concludes with the " +
    "practical methods used to measure gain, pattern, and impedance in anechoic and far-field ranges.",
  topics: [
    "Radiation mechanism and far-field derivation",
    "Antenna parameters: pattern, directivity, and gain",
    "Input impedance, bandwidth, and efficiency",
    "Polarization and axial ratio",
    "Infinitesimal and half-wave dipoles",
    "Monopoles and image theory",
    "Loop antennas",
    "Aperture antennas and the equivalence principle",
    "Horn antennas",
    "Microstrip and patch antennas",
    "Linear and planar antenna arrays",
    "Array factor and beam steering",
    "Phased arrays and beamforming",
    "Radio-wave propagation models",
    "Link budgets and the Friis equation",
    "Antenna measurement techniques",
  ],
  recommended: [
    res("Antenna Theory: Analysis and Design", "Constantine A. Balanis", { type: "textbook" }),
  ],
  supplementary: [
    res("Antennas", "John D. Kraus and Ronald J. Marhefka", { type: "textbook" }),
    res("Antennas and Wave Propagation", "Warren L. Stutzman and Gary A. Thiele", { type: "reference" }),
  ],
});
