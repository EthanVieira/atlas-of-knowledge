registerDetail({
  long:
    "Computational physics teaches the numerical methods and programming techniques used to solve physical problems that resist closed-form analysis. " +
    "The course begins with the realities of finite-precision arithmetic—floating-point representation, rounding and truncation error, and numerical stability—before building up a toolkit of core algorithms for differentiation, quadrature, root finding, optimization, and linear algebra. " +
    "Students learn to integrate ordinary differential equations with Euler, Runge–Kutta, and symplectic leapfrog schemes, and to solve boundary-value and partial differential equations using finite-difference and relaxation methods. " +
    "Spectral techniques centered on the fast Fourier transform provide an efficient alternative for periodic and wave-like problems. " +
    "A substantial portion addresses stochastic methods: pseudorandom number generation, Monte Carlo integration and sampling, molecular dynamics, and Markov-chain simulation of statistical systems such as the Ising model via the Metropolis algorithm. " +
    "The course closes with an introduction to performance considerations—vectorization, algorithmic complexity, and parallel computing—so that simulations scale to research-relevant sizes. " +
    "Throughout, emphasis is placed on writing correct, well-tested code and on validating numerical results against known limits and conservation laws.",
  topics: [
    "Floating-point representation and numerical error",
    "Numerical differentiation",
    "Numerical integration and quadrature (trapezoidal, Simpson, Gaussian)",
    "Root finding and optimization",
    "Linear algebra and eigenvalue problems",
    "Interpolation and curve fitting",
    "ODE solvers: Euler and Runge–Kutta methods",
    "Symplectic and leapfrog integrators",
    "Boundary-value problems and the shooting method",
    "PDE solvers: finite-difference and relaxation methods",
    "The fast Fourier transform (FFT) and spectral methods",
    "Random number generation",
    "Monte Carlo integration and importance sampling",
    "Molecular dynamics simulation",
    "The Ising model and the Metropolis algorithm",
    "High-performance and parallel computing",
  ],
  recommended: [
    res("Computational Physics", "Mark Newman", {
      type: "textbook",
      free: true,
      url: "https://public.websites.umich.edu/~mejn/computational-physics/",
    }),
    res("Computational Physics", "Mark Newman", { type: "textbook" }),
    res("Computational Physics", "Jos Thijssen", { type: "textbook" }),
  ],
  supplementary: [
    res("Numerical Recipes: The Art of Scientific Computing", "William H. Press, Saul A. Teukolsky, William T. Vetterling, Brian P. Flannery", { type: "reference" }),
    res("A Survey of Computational Physics", "Rubin H. Landau, Manuel J. Páez, Cristian C. Bordeianu", { type: "textbook" }),
    res("An Introduction to Computer Simulation Methods", "Harvey Gould, Jan Tobochnik, Wolfgang Christian", { type: "textbook" }),
  ],
});
