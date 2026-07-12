/* ============================================================================
 *  ELECTRICAL ENGINEERING
 * ==========================================================================*/
registerCourses([

  { id: "circuit-analysis", title: "Circuit Analysis", field: "eleceng",
    desc: "The foundational analysis of electrical circuits — the language of all electronics.",
    requires: ["ode", "calculus-3"],
    topics: ["Kirchhoff's laws", "Nodal & mesh analysis", "Thévenin/Norton equivalents", "RLC transients", "AC steady state & phasors", "Frequency response"],
    free: [R("Circuits and Electronics", "MIT OCW 6.002", "https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/")],
    paid: [R("Fundamentals of Electric Circuits", "Sadiku & Alexander")] },

  { id: "electronics", title: "Electronics", field: "eleceng",
    desc: "Semiconductor devices and the analog circuits built from them.",
    requires: ["circuit-analysis"],
    topics: ["Diodes", "Transistors (BJT, MOSFET)", "Amplifiers", "Operational amplifiers", "Filters", "Feedback & stability"],
    free: [R("Electronics notes", "Various")],
    paid: [R("Microelectronic Circuits", "Sedra & Smith")] },

  { id: "signals-and-systems", title: "Signals & Systems", field: "eleceng",
    desc: "The mathematics of signals and linear systems underpinning communications and control.",
    requires: ["ode", "linear-algebra", "fourier-analysis"],
    topics: ["LTI systems", "Convolution", "Fourier series & transforms", "The Laplace transform", "Sampling", "Frequency response"],
    free: [R("Signals and Systems", "MIT OCW 6.003", "https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/")],
    paid: [R("Signals and Systems", "Oppenheim & Willsky")] },

  { id: "control-systems", title: "Control Systems", field: "eleceng",
    desc: "Designing feedback to make dynamic systems behave as desired.",
    requires: ["signals-and-systems", "ode"],
    topics: ["Feedback & stability", "Root locus", "Bode & Nyquist", "PID control", "State-space control", "Controllability & observability"],
    free: [R("Control systems notes", "Various")],
    paid: [R("Modern Control Engineering", "Katsuhiko Ogata")] },

  { id: "electromagnetics-engineering", title: "Engineering Electromagnetics", field: "eleceng",
    desc: "Fields and waves for engineering — transmission lines, antennas and microwaves.",
    requires: ["electromagnetism"],
    topics: ["Transmission lines", "Waveguides", "Antennas", "Radiation & propagation", "Microwave engineering", "EM compatibility"],
    free: [R("Engineering electromagnetics notes", "Various")],
    paid: [R("Engineering Electromagnetics", "William Hayt")] },

  { id: "communication-systems", title: "Communication Systems", field: "eleceng",
    desc: "Transmitting information reliably over channels — modulation, coding and noise.",
    requires: ["signals-and-systems", "probability", "information-theory"],
    topics: ["Analog & digital modulation", "Noise & SNR", "Sampling & quantization", "Channel coding", "Detection theory", "Wireless systems"],
    free: [R("Communication systems notes", "Various")],
    paid: [R("Communication Systems", "Simon Haykin")] },

  { id: "power-systems", title: "Power Systems & Energy", field: "eleceng",
    desc: "Generating, transmitting and distributing electrical power at scale.",
    requires: ["circuit-analysis", "electromagnetics-engineering"],
    topics: ["Three-phase power", "Transformers & machines", "Transmission & distribution", "Power flow", "Protection", "Renewable integration"],
    free: [R("Power systems notes", "Various")],
    paid: [R("Power System Analysis and Design", "Glover, Overbye & Sarma")] },

  { id: "microelectronics", title: "Microelectronics & VLSI", field: "eleceng",
    desc: "The physics and design of integrated circuits — from the transistor to the chip.",
    requires: ["electronics", "solid-state-physics"],
    topics: ["Semiconductor device physics", "CMOS fabrication", "Digital VLSI design", "Timing & power", "Analog IC design", "Design automation"],
    free: [R("VLSI notes", "Various")],
    paid: [R("CMOS VLSI Design", "Weste & Harris")] },

  { id: "embedded-systems", title: "Embedded Systems", field: "eleceng",
    desc: "Computers embedded in the physical world — microcontrollers, firmware and real-time constraints.",
    requires: ["electronics", "computer-architecture"],
    topics: ["Microcontrollers", "Peripherals & I/O", "Interrupts", "Real-time operating systems", "Firmware", "Hardware/software co-design"],
    free: [R("Embedded systems notes", "Various")],
    paid: [R("Embedded Systems", "Jonathan Valvano")] },

]);
