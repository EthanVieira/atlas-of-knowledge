registerDetail({
  long: "Computational Aerodynamics develops the numerical methods used to predict aerodynamic " +
    "flows when closed-form solutions are unavailable. The course starts from the governing " +
    "equations of aerodynamics - the potential, Euler, and Navier-Stokes equations - and their " +
    "mathematical classification into elliptic, parabolic, and hyperbolic behavior. For " +
    "attached inviscid flow it develops panel methods that discretize the surface with source " +
    "and doublet distributions, and vortex-lattice methods that model lifting surfaces and " +
    "wakes. Compressible and rotational effects are captured with finite-volume Euler solvers " +
    "that resolve shocks through flux schemes, and viscous flows are treated with Navier-Stokes " +
    "solvers closed by turbulence models such as Spalart-Allmaras and k-omega. Practical " +
    "solution depends on grid and mesh generation, structured and unstructured, together with " +
    "boundary conditions and far-field treatments that keep the domain finite. The course " +
    "stresses convergence, verification, and validation so that results can be trusted, and it " +
    "closes with aerodynamic shape optimization and the adjoint method that makes " +
    "gradient-based design tractable.",
  topics: [
    "Governing equations of aerodynamics",
    "Classification of partial differential equations",
    "Panel methods for potential flow",
    "Vortex-lattice methods for lifting surfaces",
    "Finite-volume discretization",
    "Euler solvers and flux schemes for shocks",
    "Navier-Stokes solvers for viscous flow",
    "Turbulence models for aerodynamics",
    "Structured and unstructured grid generation",
    "Boundary conditions and far-field treatment",
    "Time integration and iterative convergence",
    "Verification and validation",
    "Aerodynamic shape optimization",
    "Adjoint methods and gradient-based design",
  ],
  recommended: [
    res("Computational Fluid Dynamics: The Basics with Applications", "John D. Anderson", { type: "textbook" }),
  ],
  supplementary: [
    res("Computational Fluid Mechanics and Heat Transfer", "John C. Tannehill, Dale A. Anderson, and Richard H. Pletcher", { type: "textbook" }),
    res("Low-Speed Aerodynamics", "Joseph Katz and Allen Plotkin", { type: "reference" }),
  ],
});
