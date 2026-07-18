registerDetail({
  long:
    "Radiation Detection and Measurement covers the physical principles, instruments, and statistical methods used to detect and quantify ionizing radiation. " +
    "It starts from the ways charged particles, photons, and neutrons deposit energy in matter, since every detector relies on converting that energy into a measurable signal. " +
    "Counting statistics and error propagation are treated early, establishing how the random nature of radioactive decay limits measurement precision. " +
    "Gas-filled detectors are studied across the ionization, proportional, and Geiger-Muller regimes, followed by scintillation detectors coupled to photomultiplier tubes. " +
    "Semiconductor detectors, including high-purity germanium and silicon devices, are examined for their superior energy resolution in gamma-ray and charged-particle spectroscopy. " +
    "Neutron detection strategies based on conversion reactions and moderation are presented alongside the pulse-processing electronics that shape, amplify, and sort detector signals. " +
    "The course closes with detector energy resolution, efficiency, dead time, and timing and coincidence techniques that underpin modern spectroscopy systems.",
  topics: [
    "Interaction of charged particles, photons, and neutrons with matter",
    "Counting statistics and error propagation",
    "General detector properties: efficiency and dead time",
    "Ionization chambers",
    "Proportional counters and gas multiplication",
    "Geiger-Muller counters",
    "Scintillation detectors and light output",
    "Photomultiplier tubes and photodiodes",
    "Semiconductor detectors (HPGe and silicon)",
    "Gamma-ray spectroscopy and peak analysis",
    "Alpha and beta spectroscopy",
    "Neutron detection and moderated detectors",
    "Pulse processing electronics and shaping",
    "Energy resolution and the Fano factor",
    "Timing, coincidence, and anticoincidence methods",
  ],
  recommended: [
    res("Radiation Detection and Measurement", "Glenn F. Knoll", { type: "textbook" }),
  ],
  supplementary: [
    res("Measurement and Detection of Radiation", "Nicholas Tsoulfanidis and Sheldon Landsberger", { type: "textbook" }),
    res("Techniques for Nuclear and Particle Physics Experiments", "William R. Leo", { type: "reference" }),
  ],
});
