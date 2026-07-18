registerDetail({
  long: "Analog Integrated Circuit Design develops the systematic craft of building precision amplifiers, " +
    "references, and data converters on a CMOS process. The course starts from analog-oriented MOS device " +
    "models, emphasizing transconductance, output resistance, and the trade-offs captured by the " +
    "transconductance-to-current ratio. Single-stage amplifiers, including common-source, common-gate, " +
    "and source-follower topologies, are analyzed for gain, swing, and bandwidth before the differential " +
    "pair is introduced as the workhorse of analog design. Current mirrors and voltage and current " +
    "references, culminating in the bandgap reference, provide the biasing backbone that fixes each " +
    "operating point over temperature and supply. Frequency response is treated carefully, with the Miller " +
    "effect, pole splitting, and the zero-value time-constant method used to estimate bandwidth. Feedback " +
    "theory then frames the design of the two-stage operational amplifier and its frequency compensation " +
    "for stable closed-loop behavior. Noise and distortion set the ultimate limits on dynamic range, and " +
    "the course concludes with the architecture of analog-to-digital and digital-to-analog converters " +
    "that bridge the analog and digital worlds.",
  topics: [
    "MOS device models for analog design",
    "Transconductance and intrinsic gain",
    "Single-stage amplifiers",
    "Differential pairs",
    "Current mirrors and active loads",
    "Voltage and current references",
    "Bandgap references",
    "Frequency response and the Miller effect",
    "Pole splitting and stability",
    "Feedback theory and topologies",
    "Two-stage op-amp design",
    "Frequency compensation",
    "Noise analysis",
    "Distortion and linearity",
    "Data converters: ADC and DAC architectures",
  ],
  recommended: [
    res("Design of Analog CMOS Integrated Circuits", "Behzad Razavi", { type: "textbook" }),
    res("Analysis and Design of Analog Integrated Circuits", "Paul Gray, Paul Hurst, Stephen Lewis & Robert Meyer", { type: "textbook" }),
  ],
  supplementary: [
    res("CMOS Analog Circuit Design", "Phillip Allen & Douglas Holberg", { type: "reference" }),
    res("Analog Design Essentials", "Willy Sansen", { type: "reference" }),
  ],
});
