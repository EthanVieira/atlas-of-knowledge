registerDetail({
  long:
    "Multivariate Statistics develops the analysis of data in which many variables are measured on each unit and must be studied together—the joint structure, dependence, and dimensionality of high-dimensional data. " +
    "Building on regression analysis, it extends statistical thinking from one response to many interrelated variables. " +
    "The course begins with the multivariate normal distribution and the tools of matrix algebra and covariance that underlie the field, and the description of multivariate data through mean vectors and covariance and correlation matrices. " +
    "It develops the two great families of multivariate methods. " +
    "The first is dimension reduction and structure: principal component analysis, which finds the directions of greatest variation and reduces dimensionality; factor analysis, which posits latent variables behind observed correlations; and canonical correlation. " +
    "The second is classification and grouping: discriminant analysis for assigning units to known groups, and cluster analysis for discovering groups in unlabeled data, along with multidimensional scaling for visualizing similarity. " +
    "The course treats multivariate inference—Hotelling's T-squared and multivariate analysis of variance (MANOVA)—as the multivariate analogues of the t-test and ANOVA. " +
    "Throughout, the geometry of multivariate data and the challenges of high dimensionality are emphasized, giving methods that are foundational both to classical multivariate analysis and to unsupervised machine learning.",
  topics: [
    "The multivariate normal distribution",
    "Covariance and correlation matrices",
    "Matrix algebra for statistics",
    "Principal component analysis",
    "Factor analysis",
    "Canonical correlation",
    "Discriminant analysis",
    "Cluster analysis",
    "Multidimensional scaling",
    "Hotelling's T-squared",
    "MANOVA",
    "Dimension reduction",
    "The geometry of multivariate data",
    "High-dimensional challenges",
    "Visualization of multivariate data",
  ],
  recommended: [
    res("Applied Multivariate Statistical Analysis", "Richard A. Johnson & Dean W. Wichern", { type: "textbook" }),
    res("An Introduction to Applied Multivariate Analysis with R", "Brian Everitt & Torsten Hothorn", { type: "textbook" }),
  ],
  supplementary: [
    res("Methods of Multivariate Analysis", "Alvin C. Rencher & William F. Christensen", { type: "reference" }),
    res("The Elements of Statistical Learning", "Trevor Hastie, Robert Tibshirani & Jerome Friedman", { type: "reference", free: true, url: "https://hastie.su.domains/ElemStatLearn/" }),
  ],
});
