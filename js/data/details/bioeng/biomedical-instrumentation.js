registerDetail({
  long: "Biomedical Instrumentation covers the design of the devices that measure physiological variables " +
    "and turn them into usable electrical signals. The course begins with the general instrumentation " +
    "system - the sensor, signal conditioning, processing, and display stages - and the specifications " +
    "of accuracy, sensitivity, and dynamic range that govern each. It then examines the origin of " +
    "biopotentials in excitable cells and how those potentials are picked up by biopotential electrodes " +
    "across the electrode-electrolyte interface, including half-cell potentials, polarization, and " +
    "motion artifact. Amplifier design is central: the differential and instrumentation amplifier, " +
    "common-mode rejection, and the filtering needed to recover microvolt signals from a noisy body " +
    "surface. Because these circuits connect directly to patients, isolation, leakage current limits, " +
    "and electrical safety receive careful treatment. The course surveys sensors and transducers for " +
    "physiological variables - pressure, flow, displacement, and temperature - and applies them to the " +
    "measurement of blood pressure, blood flow, respiration, and body temperature, along with chemical " +
    "and gas sensing. It concludes with wearable and wireless monitoring, connecting classical " +
    "instrumentation to modern continuous and ambulatory measurement. Students leave able to specify " +
    "and critique a measurement chain from electrode to recorded value.",
  topics: [
    "The general instrumentation system and its stages",
    "Measurement specifications: accuracy, sensitivity, dynamic range",
    "Origin of biopotentials in excitable cells",
    "Biopotential electrodes and the electrode-electrolyte interface",
    "Half-cell potentials, polarization, and motion artifact",
    "Biopotential amplifiers and differential amplification",
    "The instrumentation amplifier and common-mode rejection",
    "Isolation, leakage current, and patient safety",
    "Sensors and transducers for physiological variables",
    "Measurement of blood pressure",
    "Measurement of blood flow and cardiac output",
    "Measurement of respiration",
    "Temperature measurement and thermal sensors",
    "Chemical and gas sensing",
    "Wearable and wireless physiological monitoring",
  ],
  recommended: [
    res("Medical Instrumentation: Application and Design", "John G. Webster", { type: "textbook" }),
    res("Introduction to Biomedical Equipment Technology", "Joseph J. Carr and John M. Brown", { type: "textbook" }),
  ],
  supplementary: [
    res("Bioinstrumentation", "John D. Enderle", { type: "reference" }),
    res("Principles of Applied Biomedical Instrumentation", "L. A. Geddes and L. E. Baker", { type: "reference" }),
  ],
});
