registerDetail({
  long:
    "Statistical Computing develops the computational methods and tools that make modern statistics possible—the algorithms behind statistical procedures and the programming skills to implement, apply, and extend them. " +
    "Building on mathematical statistics and the foundations of programming, it sits at the intersection of statistics and computer science and underpins all of data science. " +
    "The course begins with computing environments for statistics—above all R, and increasingly Python—and the principles of writing correct, efficient, and reproducible statistical code, including good practices for data structures, functions, and workflow. " +
    "It develops the core numerical methods of statistics: numerical linear algebra for regression and its stable computation, optimization for maximum-likelihood and other estimation (Newton-Raphson, the EM algorithm, and gradient methods), and numerical integration. " +
    "The heart of the course is simulation: the generation of random numbers and random variables, the Monte Carlo method for estimating quantities that cannot be computed analytically, and the resampling methods—the bootstrap and permutation tests—that pervade modern practice. " +
    "Markov chain Monte Carlo for Bayesian computation is developed as a central application. " +
    "The course also treats computing with data at scale, vectorization and performance, and the tools of reproducible research—literate programming and version control—giving the computational fluency that applied statistics and data science demand.",
  topics: [
    "Statistical computing environments (R, Python)",
    "Reproducible statistical code",
    "Numerical linear algebra for statistics",
    "Optimization for estimation",
    "Newton-Raphson and the EM algorithm",
    "Numerical integration",
    "Random number generation",
    "Simulating random variables",
    "The Monte Carlo method",
    "The bootstrap and resampling",
    "Markov chain Monte Carlo",
    "Vectorization and performance",
    "Computing with data at scale",
    "Literate programming",
    "Reproducible research and version control",
  ],
  recommended: [
    res("Statistical Computing with R", "Maria L. Rizzo", { type: "textbook" }),
    res("Advanced R", "Hadley Wickham", { type: "textbook", free: true, url: "https://adv-r.hadley.nz/" }),
  ],
  supplementary: [
    res("Numerical Methods of Statistics", "John F. Monahan", { type: "reference" }),
    res("Python for Data Analysis", "Wes McKinney", { type: "reference", free: true, url: "https://wesmckinney.com/book/" }),
  ],
});
