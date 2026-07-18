registerDetail({
  long: "Finite Element Analysis develops the theory and practice of approximating the solution of " +
    "boundary value problems by dividing a domain into simple elements. The course begins by " +
    "contrasting the strong form of a governing differential equation with its weak, or variational, " +
    "form, showing how the method of weighted residuals and the principle of minimum potential energy " +
    "lead to the same discrete equations. Interpolation is built from shape functions defined over " +
    "each element, and element stiffness matrices and load vectors are derived first for bars and " +
    "beams and then for two-dimensional elasticity. Assembly of element contributions into a global " +
    "system, followed by application of essential and natural boundary conditions, produces the linear " +
    "equations that are solved for nodal unknowns. Isoparametric elements map distorted shapes to a " +
    "parent domain, and Gaussian quadrature provides the numerical integration needed to form their " +
    "matrices efficiently. Questions of accuracy are addressed through convergence requirements, " +
    "element quality, locking, and error estimation with adaptive refinement. The course concludes " +
    "with extensions to dynamic problems, including consistent mass matrices and time integration, " +
    "and to material and geometric nonlinearity solved by incremental-iterative schemes.",
  topics: [
    "Strong versus weak form",
    "Method of weighted residuals and Galerkin's method",
    "Variational principles and minimum potential energy",
    "Shape and interpolation functions",
    "Bar and beam element formulation",
    "Two-dimensional elasticity elements",
    "Assembly of global matrices",
    "Essential and natural boundary conditions",
    "Isoparametric mapping",
    "Gaussian quadrature and numerical integration",
    "Convergence, element quality, and locking",
    "Error estimation and adaptive refinement",
    "Consistent mass and dynamic FEA",
    "Time integration schemes",
    "Material and geometric nonlinearity",
  ],
  recommended: [
    res("The Finite Element Method: Its Basis and Fundamentals", "O. C. Zienkiewicz, R. L. Taylor & J. Z. Zhu", { type: "textbook" }),
    res("Concepts and Applications of Finite Element Analysis", "Robert D. Cook, David S. Malkus, Michael E. Plesha & Robert J. Witt", { type: "textbook" }),
    res("The Finite Element Method: Linear Static and Dynamic Finite Element Analysis", "Thomas J. R. Hughes", { type: "textbook" }),
  ],
  supplementary: [
    res("A First Course in the Finite Element Method", "Daryl L. Logan", { type: "textbook" }),
    res("The Finite Element Method for Solid and Structural Mechanics", "O. C. Zienkiewicz & R. L. Taylor", { type: "textbook" }),
  ],
});
