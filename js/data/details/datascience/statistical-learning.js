registerDetail({
  long:
    "Statistical Learning is the statistical foundation of machine learning—the principled study of methods that learn patterns and make predictions from data, understood through the lens of statistics rather than pure computation. " +
    "Building on regression analysis and machine learning, it unifies the two perspectives, giving the modeling depth and inferential care of statistics to the predictive power of machine learning. " +
    "The course begins with the framework of learning from data: the distinction between supervised and unsupervised learning, the goal of prediction versus inference, and the central concepts of overfitting, model flexibility, and the bias-variance trade-off that govern how well a model generalizes. " +
    "It develops the assessment of models through training and test error, cross-validation, and the bootstrap. " +
    "The supervised methods are treated as a coherent family: linear and penalized regression (ridge, lasso, and elastic net), classification methods (logistic regression, discriminant analysis, and k-nearest neighbors), and the tree-based methods—decision trees, bagging, random forests, and boosting—that dominate applied practice. " +
    "Support vector machines and an introduction to neural networks connect to the broader machine-learning landscape. " +
    "Unsupervised learning—principal components and clustering—is developed for finding structure without labels. " +
    "Throughout, the course emphasizes when and why methods work, the interpretation of models, and the disciplined evaluation of predictive performance, giving the conceptual backbone for responsible machine-learning practice.",
  topics: [
    "Supervised vs. unsupervised learning",
    "Prediction vs. inference",
    "Overfitting and model flexibility",
    "The bias-variance trade-off",
    "Training, test error, and cross-validation",
    "The bootstrap for learning",
    "Penalized regression: ridge and lasso",
    "Classification methods",
    "K-nearest neighbors",
    "Decision trees",
    "Bagging and random forests",
    "Boosting",
    "Support vector machines",
    "Neural networks (introduction)",
    "Unsupervised learning: PCA and clustering",
  ],
  recommended: [
    res("An Introduction to Statistical Learning", "Gareth James, Daniela Witten, Trevor Hastie & Robert Tibshirani", { type: "textbook", free: true, url: "https://www.statlearning.com/" }),
    res("The Elements of Statistical Learning", "Trevor Hastie, Robert Tibshirani & Jerome Friedman", { type: "textbook", free: true, url: "https://hastie.su.domains/ElemStatLearn/" }),
  ],
  supplementary: [
    res("Pattern Recognition and Machine Learning", "Christopher M. Bishop", { type: "reference" }),
    res("Computer Age Statistical Inference", "Bradley Efron & Trevor Hastie", { type: "reference", free: true, url: "https://hastie.su.domains/CASI/" }),
  ],
});
