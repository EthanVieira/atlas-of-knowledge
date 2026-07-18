registerDetail({
  long:
    "Power Electronics concerns the efficient conversion and control of electrical energy using switching " +
    "semiconductor devices, spanning applications from milliwatt supplies to multi-megawatt drives. The " +
    "course begins with the power semiconductor switches that make conversion possible, including diodes, " +
    "MOSFETs, and IGBTs, and the switching and conduction losses that limit efficiency and set thermal " +
    "constraints. Rectifiers are studied in both uncontrolled and phase-controlled forms as the classic " +
    "route from AC to DC. The heart of the course is the family of DC-DC converters, where buck, boost, " +
    "and buck-boost topologies are analyzed in continuous and discontinuous conduction. Averaged and " +
    "small-signal modeling gives the tools to design feedback controllers that regulate output despite " +
    "load and line variation. Inverters and pulse-width modulation techniques cover the DC-to-AC " +
    "direction needed for motor drives and grid interfaces. Magnetics and transformer design, together " +
    "with thermal management, ground the subject in real components, and resonant converters introduce " +
    "soft switching for higher frequency and efficiency.",
  topics: [
    "Power semiconductor switches: diodes, MOSFETs, IGBTs",
    "Switching and conduction losses",
    "Gate drive and device characteristics",
    "Uncontrolled and controlled rectifiers",
    "Buck, boost, and buck-boost converters",
    "Continuous and discontinuous conduction modes",
    "Averaged and small-signal converter modeling",
    "Feedback control of converters",
    "Inverters and DC-to-AC conversion",
    "Pulse-width modulation techniques",
    "Magnetics and transformer design",
    "Thermal management and heat sinking",
    "Resonant converters and soft switching",
    "Isolated converter topologies",
    "Electromagnetic interference and filtering",
  ],
  recommended: [
    res("Fundamentals of Power Electronics", "Robert W. Erickson and Dragan Maksimovic", { type: "textbook" }),
    res("Power Electronics: Converters, Applications, and Design", "Ned Mohan, Tore Undeland, and William Robbins", { type: "textbook" }),
  ],
  supplementary: [
    res("Power Electronics: Circuits, Devices, and Applications", "Muhammad H. Rashid", { type: "reference" }),
    res("Principles of Power Electronics", "John G. Kassakian, Martin F. Schlecht, and George C. Verghese", { type: "textbook" }),
  ],
});
