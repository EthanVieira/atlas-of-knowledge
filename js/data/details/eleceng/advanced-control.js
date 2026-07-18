registerDetail({
  long: "Advanced and Optimal Control extends the state-space framework into the design of controllers " +
    "that are provably optimal, robust, and capable of handling nonlinear behavior. The course begins " +
    "with full state-feedback design and pole placement, then addresses the practical reality that " +
    "the full state is rarely measured by introducing observers and the separation principle that " +
    "lets estimator and controller be designed independently. Optimal control is developed through " +
    "the linear quadratic regulator, in which a quadratic cost balances performance against control " +
    "effort and yields a feedback law from the Riccati equation, and is extended to noisy systems " +
    "through LQG and Kalman-based control. The mathematical foundations of optimality are treated " +
    "using the calculus of variations and Pontryagin's minimum principle, alongside dynamic " +
    "programming and the Hamilton-Jacobi-Bellman equation. The course then turns to robust control, " +
    "where H-infinity methods provide guarantees in the presence of model uncertainty and " +
    "disturbances. It closes with an introduction to nonlinear systems and Lyapunov stability theory, " +
    "giving students the tools to analyze and stabilize systems that fall outside the reach of linear " +
    "methods.",
  topics: [
    "State-feedback design and pole placement",
    "Observers and state estimation",
    "The separation principle",
    "Linear quadratic regulator (LQR)",
    "Riccati equations",
    "LQG and Kalman-based control",
    "Calculus of variations",
    "Pontryagin's minimum principle",
    "Dynamic programming and the HJB equation",
    "Robust control and model uncertainty",
    "H-infinity control",
    "Loop transfer recovery",
    "Nonlinear systems",
    "Lyapunov stability theory",
    "Feedback linearization",
  ],
  recommended: [
    res("Optimal Control Theory: An Introduction", "Donald Kirk", { type: "textbook" }),
    res("Nonlinear Systems", "Hassan Khalil", { type: "textbook" }),
  ],
  supplementary: [
    res("Linear Optimal Control Systems", "Huibert Kwakernaak & Raphael Sivan", { type: "reference" }),
    res("Applied Optimal Control", "Arthur Bryson & Yu-Chi Ho", { type: "reference" }),
  ],
});
