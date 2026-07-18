registerDetail({
  long: "Digital Design introduces the theory and practice of building systems from binary logic, moving " +
    "from first principles to synthesizable hardware descriptions. The course opens with number systems, " +
    "binary and hexadecimal representation, and the Boolean algebra that underlies all combinational " +
    "circuits. Truth tables, Karnaugh maps, and algebraic manipulation are used to minimize logic and to " +
    "design adders, multiplexers, decoders, and comparators. Sequential logic is then developed through " +
    "latches, flip-flops, registers, and counters, leading to the systematic design of finite-state " +
    "machines in both Mealy and Moore forms. Hardware description languages such as Verilog and VHDL are " +
    "introduced so that designs can be specified, simulated, and synthesized rather than drawn gate by " +
    "gate. Register-transfer-level design connects datapaths and controllers into complete digital systems, " +
    "and timing analysis addresses propagation delay, setup and hold requirements, and the hazards that " +
    "arise in real circuits. The course closes with programmable logic, FPGAs, and the mapping of a " +
    "register-transfer design onto physical devices.",
  topics: [
    "Number systems and binary arithmetic",
    "Boolean algebra and logic gates",
    "Combinational logic design",
    "Karnaugh maps and logic minimization",
    "Adders, multiplexers, and decoders",
    "Latches and flip-flops",
    "Registers and counters",
    "Finite-state machines: Mealy and Moore",
    "Hardware description languages (Verilog/VHDL)",
    "Register-transfer-level design",
    "Datapath and controller design",
    "Timing analysis and clocking",
    "Hazards and glitches",
    "FPGAs and programmable logic",
    "Memory and storage elements",
  ],
  recommended: [
    res("Digital Design", "M. Morris Mano & Michael Ciletti", { type: "textbook" }),
    res("Digital Design and Computer Architecture", "David Harris & Sarah Harris", { type: "textbook" }),
  ],
  supplementary: [
    res("Contemporary Logic Design", "Randy Katz & Gaetano Borriello", { type: "reference" }),
    res("Fundamentals of Digital Logic with Verilog Design", "Stephen Brown & Zvonko Vranesic", { type: "reference" }),
  ],
});
