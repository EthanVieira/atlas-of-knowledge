registerDetail({
  cover: cover(96, "Measure Theory", "waves", "Mathematics"),
  long:
    "Measure theory provides the modern foundation for integration, probability, and much of analysis " +
    "by asking a deceptively simple question: how do we assign a consistent notion of size to subsets " +
    "of a space? Starting from σ-algebras and measures, it constructs Lebesgue measure via outer measure " +
    "and Carathéodory's criterion, repairing the defects of the Riemann integral. The Lebesgue integral " +
    "that results is defined for a vast class of measurable functions and behaves beautifully under " +
    "limits, as captured by the monotone convergence, Fatou, and dominated convergence theorems. Product " +
    "measures and the Fubini–Tonelli theorems justify interchanging the order of integration, while the " +
    "Lᵖ spaces and the Radon–Nikodym theorem tie the theory to functional analysis and probability. The " +
    "course closes with differentiation of measures and the fundamental theorem of calculus in its full " +
    "Lebesgue generality.",
  topics: [
    "σ-algebras & measurable spaces", "Measures & their properties", "Outer measure & Carathéodory's criterion",
    "Lebesgue measure on the line", "Measurable functions", "The Lebesgue integral",
    "The monotone convergence theorem", "Fatou's lemma", "The dominated convergence theorem",
    "Modes of convergence", "Product measures & Fubini–Tonelli", "Lᵖ spaces & inequalities",
    "Signed measures & Hahn–Jordan decomposition", "The Radon–Nikodym theorem",
    "Differentiation of measures", "The Lebesgue differentiation theorem",
  ],
  recommended: [
    res("Real Analysis: Modern Techniques and Their Applications", "Gerald B. Folland", { type: "textbook" }),
    res("An Introduction to Measure Theory", "Terence Tao", { type: "textbook", free: true, url: "https://terrytao.wordpress.com/books/an-introduction-to-measure-theory/" }),
  ],
  supplementary: [
    res("Real and Complex Analysis", "Walter Rudin", { type: "textbook" }),
    res("Real Analysis", "H. L. Royden & P. M. Fitzpatrick", { type: "textbook" }),
  ],
});
