registerDetail({
  cover: cover(96, "Calculus II", "curve", "Mathematics"),
  long:
    "Calculus II is the integral half of single-variable calculus. It starts from the definite " +
    "integral as a limit of Riemann sums, ties differentiation and integration together through " +
    "the fundamental theorem, and then builds a toolkit of techniques — substitution, parts, " +
    "trigonometric and partial-fraction methods — for evaluating antiderivatives in closed form. " +
    "Those tools are put to work computing areas, volumes and arc lengths, and solving the first " +
    "separable differential equations. The course then pivots to the infinite: sequences, series " +
    "and the convergence tests, culminating in power and Taylor series, which represent functions " +
    "as infinite polynomials and set the stage for analysis.",
  topics: [
    "The definite integral & Riemann sums", "The fundamental theorem of calculus",
    "Integration by substitution", "Integration by parts",
    "Trigonometric integrals & substitution", "Partial fractions",
    "Improper integrals", "Numerical integration",
    "Areas, volumes & arc length", "Separable differential equations",
    "Sequences", "Series & convergence tests",
    "Power series & radius of convergence", "Taylor & Maclaurin series",
    "Parametric curves", "Polar coordinates",
  ],
  recommended: [
    res("Calculus", "James Stewart", { type: "textbook" }),
    res("Single Variable Calculus (18.01)", "MIT OpenCourseWare", { type: "lectures", free: true,
      url: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/" }),
    res("Calculus, Vol. 1", "Tom M. Apostol", { type: "textbook" }),
  ],
  supplementary: [
    res("Essence of Calculus", "3Blue1Brown", { type: "video", free: true,
      url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" }),
    res("Calculus", "Michael Spivak", { type: "textbook" }),
    res("Paul's Online Notes — Calculus II", "Paul Dawkins", { type: "notes", free: true,
      url: "https://tutorial.math.lamar.edu/Classes/CalcII/CalcII.aspx" }),
    res("Active Calculus", "Matt Boelkins", { type: "interactive", free: true,
      url: "https://activecalculus.org/" }),
  ],
});
