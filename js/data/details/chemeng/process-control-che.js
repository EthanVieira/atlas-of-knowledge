registerDetail({
  long: "Process Dynamics and Control studies how chemical processes respond over time and how automatic " +
    "controllers keep them operating safely and profitably. The course begins with dynamic process " +
    "modeling from first principles, followed by linearization around an operating point to obtain " +
    "tractable linear models. Using the Laplace transform, these models become transfer functions, and " +
    "the responses of first-order, second-order, and higher-order systems to step, impulse, and " +
    "sinusoidal inputs are analyzed in depth. Feedback control is introduced through block diagrams, " +
    "closed-loop transfer functions, and the effects of proportional, integral, and derivative action. " +
    "Stability is assessed with the Routh criterion and, in the frequency domain, with the Bode and " +
    "Nyquist criteria, which also guide controller tuning and robustness. The course develops practical " +
    "PID tuning rules and then extends to enhanced structures including cascade, feedforward, and ratio " +
    "control. Finally it addresses multivariable systems, loop interaction and pairing, and an " +
    "introduction to model predictive control, connecting classical theory to modern industrial practice.",
  topics: [
    "Dynamic process modeling from first principles",
    "Linearization about an operating point",
    "The Laplace transform and transfer functions",
    "First-order system dynamics",
    "Second-order and higher-order dynamics",
    "Feedback control and block diagrams",
    "Closed-loop transfer functions",
    "PID controllers and their actions",
    "Stability analysis and the Routh criterion",
    "Frequency response and Bode plots",
    "The Bode and Nyquist stability criteria",
    "PID controller tuning methods",
    "Cascade, feedforward, and ratio control",
    "Multivariable control and loop interaction",
    "Introduction to model predictive control",
  ],
  recommended: [
    res("Process Dynamics and Control", "Dale E. Seborg, Thomas F. Edgar, Duncan A. Mellichamp, and Francis J. Doyle III", { type: "textbook" }),
    res("Chemical Process Control: An Introduction to Theory and Practice", "George Stephanopoulos", { type: "textbook" }),
  ],
  supplementary: [
    res("Process Systems Analysis and Control", "Donald R. Coughanowr and Steven E. LeBlanc", { type: "textbook" }),
    res("Process Control: Modeling, Design, and Simulation", "B. Wayne Bequette", { type: "reference" }),
  ],
});
