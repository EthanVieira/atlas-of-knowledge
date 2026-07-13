registerDetail({
  cover: cover(96, "Real Analysis", "waves", "Mathematics"),
  long:
    "Real analysis rebuilds calculus on rigorous foundations. It starts by pinning down what the " +
    "real numbers actually are — a complete ordered field — and uses completeness to make precise " +
    "the notions of limit, continuity and convergence that calculus took on faith. With ε–δ " +
    "arguments and the topology of the real line you prove the great theorems (Bolzano–Weierstrass, " +
    "the extreme and intermediate value theorems, the mean value theorem) and construct the " +
    "Riemann integral. The course ends with sequences and series of functions, where uniform " +
    "convergence explains when limits, derivatives and integrals may be exchanged. It is often the " +
    "first course where mathematical proof, not computation, is the whole point.",
  topics: [
    "The real numbers & the completeness axiom", "Suprema & infima",
    "Sequences & their limits", "Cauchy sequences",
    "Series & convergence tests", "Metric spaces",
    "Open, closed & compact sets", "The Bolzano–Weierstrass theorem",
    "Continuity & uniform continuity", "The extreme & intermediate value theorems",
    "Differentiation & the mean value theorem", "Taylor's theorem",
    "The Riemann integral", "The fundamental theorem of calculus",
    "Sequences & series of functions", "Uniform convergence", "Power series",
  ],
  recommended: [
    res("Principles of Mathematical Analysis", "Walter Rudin", { type: "textbook" }),
    res("Understanding Analysis", "Stephen Abbott", { type: "textbook" }),
    res("Basic Analysis I", "Jiří Lebl", { type: "textbook", free: true,
      url: "https://www.jirka.org/ra/" }),
  ],
  supplementary: [
    res("Analysis I", "Terence Tao", { type: "textbook" }),
    res("Real Analysis (lectures)", "Francis Su / Harvey Mudd", { type: "video", free: true,
      url: "https://www.youtube.com/playlist?list=PL0E754696F72137EC" }),
    res("Introduction to Real Analysis", "William F. Trench", { type: "textbook", free: true,
      url: "https://digitalcommons.trinity.edu/mono/7/" }),
    res("A Problem Book in Real Analysis", "Aksoy & Khamsi", { type: "problems" }),
  ],
});
