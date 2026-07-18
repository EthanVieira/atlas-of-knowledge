registerDetail({
  long: "Microelectronics and VLSI studies how the metal-oxide-semiconductor transistor is built, " +
    "modeled, and assembled into the millions of gates that make up a modern integrated circuit. " +
    "The course begins with semiconductor device physics and the electrostatics of the pn junction, " +
    "then develops the MOS capacitor and the operation of the MOSFET in its cutoff, triode, and " +
    "saturation regions. Short-channel effects such as velocity saturation, threshold-voltage roll-off, " +
    "and drain-induced barrier lowering are examined as the geometry shrinks. The CMOS fabrication " +
    "sequence is traced through photolithography, oxidation, ion implantation, and metallization so that " +
    "layout and process constraints are understood together. The CMOS inverter is analyzed in detail, " +
    "including its voltage transfer characteristic, noise margins, propagation delay, and dynamic power " +
    "dissipation. These building blocks are extended to combinational and sequential CMOS logic, latches, " +
    "and flip-flops, and finally to the chip-level design flow from register-transfer description through " +
    "synthesis, placement, and routing. The course closes with device and interconnect scaling and the " +
    "physical limits that shape each new technology node.",
  topics: [
    "Semiconductor device physics",
    "The pn junction and diode electrostatics",
    "The MOS capacitor",
    "MOSFET operation and I-V characteristics",
    "Threshold voltage and body effect",
    "Short-channel effects",
    "CMOS fabrication and process technology",
    "Layout and design rules",
    "The CMOS inverter and voltage transfer characteristic",
    "Static and dynamic behavior of CMOS gates",
    "Combinational CMOS logic",
    "Sequential CMOS logic and storage elements",
    "Power dissipation and delay",
    "Chip-level design flow",
    "Device and interconnect scaling",
  ],
  recommended: [
    res("CMOS VLSI Design: A Circuits and Systems Perspective", "Neil Weste & David Harris", { type: "textbook" }),
    res("Fundamentals of Microelectronics", "Behzad Razavi", { type: "textbook" }),
  ],
  supplementary: [
    res("Device Electronics for Integrated Circuits", "Richard Muller & Theodore Kamins", { type: "reference" }),
    res("Physics of Semiconductor Devices", "Simon Sze & Kwok Ng", { type: "reference" }),
  ],
});
