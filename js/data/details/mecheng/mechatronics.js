registerDetail({
  long: "Mechatronics integrates mechanical systems with electronics, sensors, and computation to " +
    "create engineered products that sense, decide, and act. The course begins with the sensors used " +
    "to measure position, velocity, force, temperature, and other quantities, and the actuators - " +
    "electric motors, solenoids, and hydraulic and pneumatic devices - that produce motion. Signal " +
    "conditioning is developed through amplification, filtering, and analog-to-digital conversion, " +
    "along with the data-acquisition chain that brings physical measurements into a processor. " +
    "Microcontrollers are studied as the embedded brains of a system, covering their architecture, " +
    "digital and analog input and output, timers, interrupts, and the programming needed to drive " +
    "them. Interfacing circuits connect low-power logic to real-world loads, and pulse-width " +
    "modulation with motor-driver electronics regulates the speed and torque of DC, stepper, and " +
    "servo motors. Feedback control laws such as PID are implemented in software and tuned against " +
    "the dynamics of the plant. The course emphasizes real-time constraints and the disciplined " +
    "integration of mechanical, electrical, and software subsystems, culminating in the design and " +
    "testing of a working mechatronic device.",
  topics: [
    "Sensors and measurement principles",
    "Actuators and their characteristics",
    "Signal conditioning and amplification",
    "Analog-to-digital conversion and data acquisition",
    "Microcontroller architecture",
    "Embedded programming",
    "Digital and analog input/output",
    "Timers, interrupts, and real-time systems",
    "Analog and digital interfacing circuits",
    "Pulse-width modulation",
    "DC, stepper, and servo motors and drives",
    "Feedback control implementation and PID tuning",
    "System modeling and dynamics",
    "System integration and testing",
    "Reliability and noise considerations",
  ],
  recommended: [
    res("Introduction to Mechatronics and Measurement Systems", "David G. Alciatore & Michael B. Histand", { type: "textbook" }),
    res("Mechatronics: Electronic Control Systems in Mechanical and Electrical Engineering", "W. Bolton", { type: "textbook" }),
  ],
  supplementary: [
    res("Mechatronics: Principles and Applications", "Godfrey C. Onwubolu", { type: "textbook" }),
    res("Sensors and Actuators: Engineering System Instrumentation", "Clarence W. de Silva", { type: "textbook" }),
  ],
});
