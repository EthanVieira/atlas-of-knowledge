registerDetail({
  long:
    "Computational Finance studies the numerical methods and programming techniques used to solve the problems of quantitative finance that have no closed-form solution—the practical engine of modern derivatives pricing, risk management, and quantitative investing. " +
    "Building on mathematical finance and the foundations of programming, the course develops the computational toolkit of the quant. " +
    "It begins with the numerical solution of the problems of pricing. " +
    "Tree and lattice methods (binomial and trinomial) are developed for pricing options, including American options with early exercise. " +
    "Monte Carlo simulation is developed in depth as the workhorse for pricing complex and path-dependent derivatives and for risk: the simulation of stochastic processes, variance-reduction techniques, and the handling of high-dimensional problems and early exercise (least-squares Monte Carlo). " +
    "Finite-difference methods for solving the partial differential equations of option pricing (such as Black-Scholes) are developed. " +
    "The course treats the numerical problems of calibration—fitting models to market prices—and optimization, and the estimation of the Greeks. " +
    "It develops the practical implementation of these methods in code, the handling of financial data, and the software engineering of pricing and risk systems. " +
    "Performance, accuracy, and the management of model risk are emphasized. " +
    "The course gives the computational skills to implement the models of quantitative finance and to build the tools that price derivatives and measure risk in practice.",
  topics: [
    "Numerical methods in finance",
    "Binomial and trinomial trees",
    "Pricing American options",
    "Monte Carlo simulation",
    "Simulating stochastic processes",
    "Variance-reduction techniques",
    "Least-squares Monte Carlo",
    "Finite-difference methods",
    "Solving the pricing PDE",
    "Model calibration",
    "Optimization in finance",
    "Computing the Greeks",
    "Handling financial data",
    "Implementation and software engineering",
    "Accuracy, performance, and model risk",
  ],
  recommended: [
    res("Monte Carlo Methods in Financial Engineering", "Paul Glasserman", { type: "textbook" }),
    res("Python for Finance: Mastering Data-Driven Finance", "Yves Hilpisch", { type: "textbook" }),
  ],
  supplementary: [
    res("Quantitative Economics (Python lectures)", "Sargent & Stachurski / QuantEcon", { type: "interactive", free: true, url: "https://quantecon.org/lectures/" }),
    res("Implementing Derivatives Models", "Les Clewlow & Chris Strickland", { type: "reference" }),
  ],
});
