registerDetail({
  long:
    "Regression Analysis is the workhorse of applied statistics—the modeling of how a response variable depends on one or more predictors, and the foundation of most statistical practice and much of machine learning. " +
    "Building on mathematical statistics, it develops the theory and practice of the linear model and its many extensions. " +
    "The course begins with simple and multiple linear regression: the model and its assumptions, estimation by ordinary least squares, and the geometry and algebra of the fit. " +
    "It develops inference for regression—the sampling distributions of the estimates, confidence intervals, and hypothesis tests—and the interpretation of coefficients, including the pitfalls of interpretation and the difference between association and causation. " +
    "Model building is treated in depth: the choice of predictors, the handling of categorical variables and interactions, polynomial and transformation terms, and the crucial diagnostics that check the assumptions—residual analysis, leverage and influence, multicollinearity, and remedies for their violation. " +
    "The course extends the linear model to the generalized linear model, above all logistic regression for binary outcomes and Poisson regression for counts, unifying a wide range of methods under one framework. " +
    "Regularization (ridge and lasso), model selection, and the bias-variance trade-off connect regression to modern high-dimensional practice. " +
    "The course gives the modeling competence—and the habits of diagnostic skepticism—on which the rest of applied statistics and statistical learning build.",
  topics: [
    "Simple and multiple linear regression",
    "Ordinary least squares",
    "Assumptions of the linear model",
    "Inference for regression coefficients",
    "Interpreting coefficients",
    "Categorical predictors and interactions",
    "Transformations and polynomial terms",
    "Residual analysis and diagnostics",
    "Leverage, influence, and outliers",
    "Multicollinearity",
    "Generalized linear models",
    "Logistic regression",
    "Poisson and count regression",
    "Regularization: ridge and lasso",
    "Model selection and bias-variance",
  ],
  recommended: [
    res("Applied Linear Statistical Models", "Michael H. Kutner, Christopher J. Nachtsheim, John Neter & William Li", { type: "textbook" }),
    res("An Introduction to Statistical Learning", "Gareth James, Daniela Witten, Trevor Hastie & Robert Tibshirani", { type: "textbook", free: true, url: "https://www.statlearning.com/" }),
  ],
  supplementary: [
    res("Regression Modeling Strategies", "Frank E. Harrell Jr.", { type: "reference" }),
    res("Regression and Other Stories", "Andrew Gelman, Jennifer Hill & Aki Vehtari", { type: "reference", free: true, url: "https://avehtari.github.io/ROS-Examples/" }),
  ],
});
