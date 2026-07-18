registerDetail({
  long:
    "Process Optimization applies mathematical programming to find the best operating conditions and " +
    "designs for chemical processes under constraints. It starts with the art of formulation: choosing " +
    "decision variables, an objective function, and the equality and inequality constraints that encode " +
    "the physics and economics of a system. Linear programming and the simplex method solve the large " +
    "class of problems where relationships are linear, providing both solutions and sensitivity " +
    "information through duality. Nonlinear programming extends this to curved objectives and " +
    "constraints, with the Karush-Kuhn-Tucker conditions characterizing optimality and guiding " +
    "gradient-based algorithms for unconstrained and constrained search. Mixed-integer formulations and " +
    "superstructure optimization let engineers select among discrete alternatives such as which units " +
    "to include in a flowsheet. These methods scale up to the optimization of individual unit " +
    "operations and entire flowsheets, and increasingly to real-time optimization that continuously " +
    "adjusts a running plant. Surrogate and data-driven models bridge cases where rigorous simulations " +
    "are too costly to optimize directly, making expensive black-box problems tractable.",
  topics: [
    "Formulation of optimization problems",
    "Convexity and problem classification",
    "Linear programming and the simplex method",
    "Duality and sensitivity analysis",
    "Unconstrained optimization methods",
    "Gradient, Newton, and quasi-Newton methods",
    "Nonlinear programming and KKT conditions",
    "Constrained optimization algorithms",
    "Mixed-integer linear and nonlinear programming",
    "Superstructure optimization and synthesis",
    "Optimization of unit operations",
    "Flowsheet optimization",
    "Real-time optimization",
    "Surrogate and data-driven models",
    "Global optimization concepts",
  ],
  recommended: [
    res("Optimization of Chemical Processes", "Thomas Edgar, David Himmelblau and Leon Lasdon", { type: "textbook" }),
  ],
  supplementary: [
    res("Nonlinear Programming: Concepts, Algorithms, and Applications to Chemical Processes", "Lorenz Biegler", { type: "textbook" }),
    res("Numerical Optimization", "Jorge Nocedal and Stephen Wright", { type: "textbook" }),
  ],
});
