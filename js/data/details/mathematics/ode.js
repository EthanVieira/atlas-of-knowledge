registerDetail({
  cover: cover(96, "Differential Equations", "waves", "Mathematics"),
  long:
    "Ordinary differential equations relate an unknown function to its derivatives, and solving " +
    "one means recovering the function from the law governing its rate of change — the native " +
    "language of physics, engineering and biology. The course develops closed-form methods for " +
    "first-order equations and for linear equations of higher order, then the Laplace transform, " +
    "which turns calculus problems into algebra. Linear algebra enters through systems of ODEs, " +
    "solved by eigenvalues and matrix exponentials, and the qualitative viewpoint enters through " +
    "phase portraits and stability, which describe solutions you cannot write down. It closes with " +
    "series solutions and the numerical schemes used when no formula exists.",
  topics: [
    "First-order ODEs (separable, linear, exact)", "Integrating factors",
    "Existence & uniqueness (Picard–Lindelöf)", "Second-order linear ODEs",
    "Homogeneous & particular solutions", "Undetermined coefficients",
    "Variation of parameters", "Mechanical & electrical oscillations",
    "The Laplace transform", "Series solutions & special functions",
    "Systems of linear ODEs", "Eigenvalue methods & the matrix exponential",
    "Phase-plane analysis & stability", "Nonlinear systems & linearization",
    "Numerical methods (Euler, Runge–Kutta)",
  ],
  recommended: [
    res("Elementary Differential Equations and Boundary Value Problems", "Boyce & DiPrima", { type: "textbook" }),
    res("Differential Equations (18.03)", "MIT OpenCourseWare", { type: "lectures", free: true,
      url: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/" }),
    res("Ordinary Differential Equations", "Tenenbaum & Pollard", { type: "textbook" }),
  ],
  supplementary: [
    res("Differential Equations (visual intro)", "3Blue1Brown", { type: "video", free: true,
      url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNPOjrT6KVlfJuKtYTftqH6" }),
    res("Notes on Diffy Qs", "Jiří Lebl", { type: "textbook", free: true,
      url: "https://www.jirka.org/diffyqs/" }),
    res("Differential Equations, Dynamical Systems & an Introduction to Chaos", "Hirsch, Smale & Devaney", { type: "textbook" }),
    res("Paul's Online Notes — Differential Equations", "Paul Dawkins", { type: "notes", free: true,
      url: "https://tutorial.math.lamar.edu/Classes/DE/DE.aspx" }),
  ],
});
