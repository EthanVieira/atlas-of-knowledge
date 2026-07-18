registerDetail({
  long: "Control Systems studies how feedback is used to make dynamic systems behave in desired ways, " +
    "combining modeling, analysis, and design into a single engineering discipline. The course begins " +
    "by modeling physical systems and reducing them to transfer functions and block diagrams that " +
    "capture the relationship between inputs and outputs. The transient and steady-state response of " +
    "first- and second-order systems is characterized through rise time, overshoot, settling time, " +
    "and steady-state error, and the role of poles and zeros in shaping that response is made " +
    "explicit. Feedback is introduced as the central tool for improving performance and rejecting " +
    "disturbances, and stability is assessed using the Routh-Hurwitz criterion and the root locus, " +
    "which shows how closed-loop poles migrate as a gain is varied. Frequency-domain methods based on " +
    "Bode and Nyquist plots provide complementary insight into stability margins and lead directly to " +
    "loop-shaping design. The course covers the tuning of PID controllers and the design of lead and " +
    "lag compensators to meet performance specifications. It closes with the state-space " +
    "representation and the structural concepts of controllability and observability that underpin " +
    "modern control.",
  topics: [
    "System modeling and transfer functions",
    "Block diagrams and signal-flow graphs",
    "Transient response of first- and second-order systems",
    "Steady-state error and system type",
    "Feedback and its effects",
    "Routh-Hurwitz stability criterion",
    "Root locus analysis and design",
    "Bode plots and stability margins",
    "Nyquist criterion",
    "Frequency-domain design",
    "PID control and tuning",
    "Lead and lag compensation",
    "State-space representation",
    "Controllability and observability",
    "Disturbance rejection and sensitivity",
  ],
  recommended: [
    res("Feedback Control of Dynamic Systems", "Gene Franklin, J. David Powell & Abbas Emami-Naeini", { type: "textbook" }),
    res("Modern Control Engineering", "Katsuhiko Ogata", { type: "textbook" }),
  ],
  supplementary: [
    res("Automatic Control Systems", "Farid Golnaraghi & Benjamin Kuo", { type: "textbook" }),
    res("Control Systems Engineering", "Norman Nise", { type: "reference" }),
  ],
});
