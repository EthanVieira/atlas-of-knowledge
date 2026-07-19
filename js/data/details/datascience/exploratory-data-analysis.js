registerDetail({
  long:
    "Exploratory Data Analysis develops the practice of examining data openly and visually to discover its structure, patterns, and surprises before formal modeling—the attitude and methods pioneered by John Tukey that put understanding the data first. " +
    "Building on the introduction to data science, it develops the systematic yet open-ended detective work that any serious analysis begins with. " +
    "The course begins with the philosophy of EDA: that one should look at data with an open mind, let it suggest hypotheses rather than only test them, and resist the rush to modeling before the data is understood. " +
    "It develops the examination of single variables—distributions, center, spread, and shape, and the detection of skewness and outliers through histograms, boxplots, and density plots—and of relationships between variables through scatterplots, cross-tabulation, and conditioning. " +
    "The course treats the classic tools and ideas of the Tukey tradition—stem-and-leaf displays, the five-number summary, resistant statistics, and re-expression (transformation) to simplify structure. " +
    "The crucial, practical work of understanding data quality is central: finding and understanding missing values, errors, and anomalies, and what they reveal. " +
    "Multivariate exploration through faceting, dimension reduction, and interactive graphics, and the iterative dialogue between exploration and question-refinement, round out a course that instills the habit—foundational to all good data analysis—of truly looking at the data.",
  topics: [
    "The philosophy of EDA",
    "Tukey and exploratory analysis",
    "Distributions of single variables",
    "Center, spread, and shape",
    "Histograms, boxplots, and density plots",
    "Detecting skewness and outliers",
    "Relationships and scatterplots",
    "Cross-tabulation and conditioning",
    "The five-number summary",
    "Resistant and robust statistics",
    "Re-expression and transformation",
    "Missing values and data quality",
    "Anomaly detection in exploration",
    "Multivariate and faceted exploration",
    "From exploration to questions",
  ],
  recommended: [
    res("Exploratory Data Analysis", "John W. Tukey", { type: "textbook" }),
    res("R for Data Science", "Hadley Wickham, Mine Çetinkaya-Rundel & Garrett Grolemund", { type: "textbook", free: true, url: "https://r4ds.hadley.nz/" }),
  ],
  supplementary: [
    res("Exploratory Data Analysis with Python (and pandas)", "Wes McKinney", { type: "reference", free: true, url: "https://wesmckinney.com/book/" }),
    res("Making Sense of Data I", "Glenn J. Myatt & Wayne P. Johnson", { type: "reference" }),
  ],
});
