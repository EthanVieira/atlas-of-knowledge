registerDetail({
  long: "Optimization is the mathematics of making the best choice subject to constraints, and it sits at the heart of modern engineering, economics, and machine learning. The theory centers on convexity: for convex sets and functions, local optima are global, and a rich duality theory—expressed through Lagrange multipliers and the KKT conditions—characterizes solutions and certifies optimality. Linear programming and its simplex method give way to quadratic, second-order cone, and semidefinite programs as the models grow richer. On the algorithmic side, gradient and subgradient methods, Newton and quasi-Newton methods, and interior-point methods provide efficient, scalable ways to actually compute solutions. The course spans both unconstrained and constrained problems, uniting geometric intuition with practical computation.",
  topics: [
    "Convex sets",
    "Convex functions",
    "Linear programming",
    "The simplex method",
    "Duality",
    "The KKT conditions",
    "Lagrange multipliers",
    "Quadratic programming",
    "Second-order cone programming",
    "Gradient & subgradient methods",
    "Newton & quasi-Newton methods",
    "Interior-point methods",
    "Unconstrained optimization",
    "Constrained optimization",
  ],
  recommended: [
    res("Convex Optimization", "Boyd & Vandenberghe", { type: "textbook", free: true, url: "https://web.stanford.edu/~boyd/cvxbook/" }),
    res("Numerical Optimization", "Nocedal & Wright", { type: "textbook" }),
  ],
  supplementary: [
    res("Convex Optimization (print)", "Boyd & Vandenberghe", { type: "textbook" }),
  ],
});
