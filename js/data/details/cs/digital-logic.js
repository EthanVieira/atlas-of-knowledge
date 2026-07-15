registerDetail({
  long: "Digital Logic and Systems explains how the abstract world of software is ultimately realized in physical hardware built from simple switches. " +
    "The course begins with number systems and binary representation, then develops Boolean algebra as the mathematical language of digital circuits. " +
    "Students learn to design and minimize combinational logic using truth tables, canonical forms, and Karnaugh maps, and to assemble gates into " +
    "adders, multiplexers, decoders, and a complete arithmetic logic unit. The second half turns to sequential logic, introducing latches, flip-flops, " +
    "registers, and finite-state machines that give circuits memory and the ability to compute over time. Along the way the course covers memory " +
    "technologies, timing and clocking, and hardware description languages used to specify real designs. The material culminates in building a simple " +
    "but complete processor, connecting logic gates all the way up to a machine that can execute instructions.",
  topics: [
    "Number systems and binary representation",
    "Boolean algebra and logic gates",
    "Truth tables and canonical forms",
    "Karnaugh maps and minimization",
    "Combinational circuits (adders, multiplexers, decoders)",
    "The arithmetic logic unit (ALU)",
    "Latches and flip-flops",
    "Sequential circuits and registers",
    "Finite-state machines",
    "Counters and shift registers",
    "Memory elements (SRAM, DRAM)",
    "Timing and clocking",
    "Hardware description languages",
    "Building a simple processor",
  ],
  recommended: [
    res("The Elements of Computing Systems (Nand2Tetris)", "Noam Nisan and Shimon Schocken", { type: "interactive", free: true, url: "https://www.nand2tetris.org/" }),
    res("Digital Design and Computer Architecture", "David Harris and Sarah Harris", { type: "textbook" }),
  ],
  supplementary: [
    res("Digital Design", "M. Morris Mano and Michael Ciletti", { type: "textbook" }),
    res("Code: The Hidden Language of Computer Hardware and Software", "Charles Petzold", { type: "reference" }),
    res("Computer Organization and Design", "David A. Patterson and John L. Hennessy", { type: "textbook" }),
  ],
});
