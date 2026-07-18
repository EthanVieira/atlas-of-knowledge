registerDetail({
  long: "Computational Fluid Dynamics teaches how the governing equations of fluid motion are solved " +
    "numerically on a discrete mesh. The course starts from the conservation laws for mass, momentum, " +
    "and energy, examining the Navier-Stokes equations in both differential and integral form and the " +
    "mathematical character of elliptic, parabolic, and hyperbolic problems. Finite-difference and, " +
    "more centrally, finite-volume discretizations are developed, with the finite-volume method " +
    "enforcing conservation over control volumes. Convection-diffusion transport receives careful " +
    "attention, comparing central, upwind, hybrid, and higher-order schemes and the trade-off between " +
    "accuracy and boundedness. Because pressure and velocity are coupled in incompressible flow, the " +
    "course develops staggered grids and pressure-correction algorithms such as SIMPLE and its " +
    "variants. Structured and unstructured grid generation is discussed alongside the treatment of " +
    "boundary conditions and mesh quality. Turbulence is addressed through Reynolds averaging and " +
    "common closure models, together with an introduction to large-eddy simulation. The course closes " +
    "with the analysis of stability, consistency, and convergence, and with practical guidance on " +
    "verification and validation of simulation results.",
  topics: [
    "Conservation laws and Navier-Stokes equations",
    "Classification of PDEs in fluid flow",
    "Finite-difference discretization",
    "Finite-volume method",
    "Convection-diffusion schemes",
    "Upwind and higher-order schemes",
    "Staggered grids",
    "Pressure-velocity coupling and SIMPLE",
    "Structured and unstructured grid generation",
    "Boundary conditions and mesh quality",
    "Reynolds-averaged Navier-Stokes modeling",
    "Turbulence closure models",
    "Large-eddy simulation",
    "Stability, consistency, and convergence",
    "Verification and validation",
  ],
  recommended: [
    res("An Introduction to Computational Fluid Dynamics: The Finite Volume Method", "H. K. Versteeg & W. Malalasekera", { type: "textbook" }),
    res("Computational Methods for Fluid Dynamics", "Joel H. Ferziger, Milovan Peric & Robert L. Street", { type: "textbook" }),
  ],
  supplementary: [
    res("Computational Fluid Dynamics: The Basics with Applications", "John D. Anderson", { type: "textbook" }),
    res("Numerical Heat Transfer and Fluid Flow", "Suhas V. Patankar", { type: "textbook" }),
  ],
});
