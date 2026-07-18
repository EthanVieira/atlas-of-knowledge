registerDetail({
  long:
    "Radiation Shielding and Transport teaches how to design barriers that reduce photon and neutron dose rates to acceptable levels around reactors, accelerators, and radioactive sources. " +
    "For photons the course develops exponential attenuation, the linear and mass attenuation coefficients, and the buildup factor that accounts for scattered radiation. " +
    "Point-kernel methods are used to integrate the contributions of distributed sources through complex shield geometries for practical gamma-ray shielding design. " +
    "Neutron shielding is treated through slowing down, removal cross sections, and the combined moderation and absorption needed to attenuate fast and thermal neutrons. " +
    "Deep-penetration problems are addressed with deterministic discrete ordinates and Monte Carlo methods, including variance reduction for thick shields. " +
    "Special effects such as skyshine, duct streaming, and secondary gamma production are analyzed because they often dominate dose in real facilities. " +
    "The course closes with dose-rate calculation and applied shielding design for reactors, accelerators, and spent-fuel transport and storage casks.",
  topics: [
    "Photon attenuation and attenuation coefficients",
    "The buildup factor and scattered radiation",
    "Point-kernel methods for distributed sources",
    "Gamma-ray shielding design",
    "Neutron slowing down and removal cross sections",
    "Neutron shielding materials and hydrogenous media",
    "Secondary gamma-ray production in shields",
    "Deep-penetration transport problems",
    "Discrete ordinates methods for shielding",
    "Monte Carlo methods and variance reduction for shielding",
    "Skyshine and radiation streaming through ducts",
    "Dose-rate calculation from fluence-to-dose conversion",
    "Shielding for nuclear reactors",
    "Shielding for accelerators",
    "Shielding for spent-fuel casks and storage",
  ],
  recommended: [
    res("Radiation Shielding", "J. Kenneth Shultis and Richard E. Faw", { type: "textbook" }),
    res("Measurement and Detection of Radiation", "Nicholas Tsoulfanidis and Sheldon Landsberger", { type: "textbook" }),
  ],
  supplementary: [
    res("Fundamentals of Nuclear Science and Engineering", "J. Kenneth Shultis and Richard E. Faw", { type: "textbook" }),
    res("Radiation Protection and Dosimetry", "Michael G. Stabin", { type: "reference" }),
  ],
});
