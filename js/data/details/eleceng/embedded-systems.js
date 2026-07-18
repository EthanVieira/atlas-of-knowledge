registerDetail({
  long: "Embedded Systems studies the design of computing systems that live inside larger devices, where " +
    "software must interact directly and predictably with hardware. The course centers on the " +
    "microcontroller, examining its processor core, memory map, and peripheral set, typically through an " +
    "ARM Cortex-M platform. General-purpose input and output and memory-mapped registers are used to read " +
    "sensors and drive actuators, and interrupts are contrasted with polling as strategies for responding " +
    "to events. Timers and counters generate precise delays and pulse-width-modulated signals for motor " +
    "and power control. Serial communication protocols such as UART, SPI, and I2C connect the " +
    "microcontroller to displays, memories, and other chips, while analog interfacing through the ADC and " +
    "DAC bridges to the physical world. Real-time operating systems introduce tasks, scheduling, and the " +
    "timing guarantees that distinguish embedded software from general-purpose programming. The course " +
    "emphasizes firmware development, hardware and software co-design, and the low-power operating modes " +
    "that let battery-powered devices run for years.",
  topics: [
    "Microcontroller architecture",
    "Memory maps and memory-mapped I/O",
    "General-purpose input and output",
    "Interrupts and polling",
    "Timers, counters, and PWM",
    "UART serial communication",
    "SPI and I2C protocols",
    "Analog interfacing with ADC and DAC",
    "Real-time operating systems",
    "Task scheduling and timing",
    "Firmware development and debugging",
    "Hardware/software co-design",
    "Low-power operation and sleep modes",
    "Device drivers and peripheral control",
    "Finite-state machines in embedded software",
  ],
  recommended: [
    res("Embedded Systems: Introduction to ARM Cortex-M Microcontrollers", "Jonathan Valvano", { type: "textbook" }),
    res("Introduction to Embedded Systems", "Edward Lee & Sanjit Seshia", { type: "textbook", free: true, url: "https://ptolemy.berkeley.edu/books/leeseshia/" }),
  ],
  supplementary: [
    res("Making Embedded Systems", "Elecia White", { type: "reference" }),
    res("The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors", "Joseph Yiu", { type: "reference" }),
  ],
});
