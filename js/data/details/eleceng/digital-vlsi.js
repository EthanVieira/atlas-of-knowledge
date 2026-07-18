registerDetail({
  long: "Digital VLSI Design focuses on the circuit-level and physical design of high-performance, " +
    "low-power digital integrated circuits in CMOS. The course begins with the static CMOS inverter as " +
    "the canonical gate, analyzing its transfer characteristic, delay, and energy before generalizing to " +
    "complementary, dynamic, and pass-transistor logic families. Transistor sizing and logical effort " +
    "provide a disciplined way to optimize gates and gate chains for speed. Interconnect is treated as a " +
    "first-class citizen, with resistance, capacitance, and wire delay increasingly dominating deep " +
    "submicron performance. Timing and clocking are examined through setup and hold constraints, clock " +
    "skew and jitter, and the choice of sequential elements such as latches and flip-flops. Low-power " +
    "design techniques, including supply and threshold scaling, clock gating, and power gating, address " +
    "the energy limits of modern chips. Memory design covers the SRAM and DRAM bitcell and the peripheral " +
    "circuits that surround it. The course closes with the physical design flow and design for " +
    "testability, tying circuit choices to manufacturable and verifiable silicon.",
  topics: [
    "The CMOS inverter and transistor sizing",
    "Static CMOS logic",
    "Dynamic logic families",
    "Pass-transistor and transmission-gate logic",
    "Logical effort and delay optimization",
    "Interconnect and wire delay",
    "Timing constraints: setup and hold",
    "Clock distribution, skew, and jitter",
    "Sequential elements: latches and flip-flops",
    "Low-power design techniques",
    "SRAM design",
    "DRAM design",
    "Physical design flow",
    "Design for testability",
    "Power and clock networks",
  ],
  recommended: [
    res("Digital Integrated Circuits: A Design Perspective", "Jan Rabaey, Anantha Chandrakasan & Borivoje Nikolic", { type: "textbook" }),
    res("CMOS VLSI Design: A Circuits and Systems Perspective", "Neil Weste & David Harris", { type: "textbook" }),
  ],
  supplementary: [
    res("CMOS Digital Integrated Circuits", "Sung-Mo Kang & Yusuf Leblebici", { type: "reference" }),
    res("Low Power Digital CMOS Design", "Anantha Chandrakasan & Robert Brodersen", { type: "reference" }),
  ],
});
