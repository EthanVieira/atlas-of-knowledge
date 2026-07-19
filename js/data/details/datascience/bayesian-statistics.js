registerDetail({
  long:
    "Bayesian Statistics develops the approach to inference that treats probability as a measure of belief and updates it with data through Bayes' theorem—a coherent and increasingly practical alternative and complement to classical (frequentist) statistics. " +
    "Building on mathematical statistics, it develops both the philosophy and the computational machinery of the Bayesian approach. " +
    "The course begins with the Bayesian framework: the prior distribution encoding what is known before the data, the likelihood, and the posterior distribution that combines them, and the interpretation of probability as degree of belief. " +
    "It develops the elements of Bayesian modeling—the choice of priors (informative, weakly informative, and conjugate), and the derivation and interpretation of posteriors—and Bayesian inference through credible intervals, point estimates, and prediction. " +
    "The conceptual comparison with frequentist inference is treated honestly, along with the strengths of the Bayesian approach for hierarchical and complex models. " +
    "The computational heart of the modern field is developed: because posteriors are rarely tractable, the course introduces Markov chain Monte Carlo (MCMC)—the Metropolis-Hastings and Gibbs samplers and modern Hamiltonian Monte Carlo—and the practical use of probabilistic programming languages such as Stan. " +
    "Hierarchical and multilevel models, Bayesian model checking and comparison, and applied case studies round out a course that gives a powerful, flexible, and increasingly standard toolkit for modeling under uncertainty.",
  topics: [
    "Probability as degree of belief",
    "Bayes' theorem and updating",
    "Priors, likelihood, and posteriors",
    "Choosing priors",
    "Conjugate models",
    "Credible intervals and estimation",
    "Bayesian vs. frequentist inference",
    "Bayesian prediction",
    "Markov chain Monte Carlo",
    "Metropolis-Hastings and Gibbs sampling",
    "Hamiltonian Monte Carlo and Stan",
    "Hierarchical and multilevel models",
    "Model checking and comparison",
    "Probabilistic programming",
    "Applied Bayesian case studies",
  ],
  recommended: [
    res("Bayesian Data Analysis", "Andrew Gelman, John B. Carlin, Hal S. Stern, et al.", { type: "textbook", free: true, url: "http://www.stat.columbia.edu/~gelman/book/" }),
    res("Statistical Rethinking: A Bayesian Course with Examples in R and Stan", "Richard McElreath", { type: "textbook" }),
  ],
  supplementary: [
    res("A Student's Guide to Bayesian Statistics", "Ben Lambert", { type: "reference" }),
    res("Doing Bayesian Data Analysis", "John K. Kruschke", { type: "reference" }),
  ],
});
