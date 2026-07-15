registerDetail({
  long:
    "Calculus III lifts calculus into two and three dimensions. It begins with the geometry of " +
    "space — vectors, dot and cross products, and curves traced by moving particles — then " +
    "generalizes the derivative: partial derivatives, the gradient, directional derivatives and " +
    "the multivariable chain rule, with Lagrange multipliers for constrained optimization. The " +
    "integral generalizes too, to double and triple integrals evaluated in rectangular, polar, " +
    "cylindrical and spherical coordinates. The course closes with vector calculus proper — line " +
    "and surface integrals, grad, div and curl, and the great integral theorems of Green, Stokes " +
    "and Gauss that unify them — the mathematics behind fluid flow and electromagnetism.",
  topics: [
    "Vectors & the geometry of space", "Dot & cross products",
    "Curves & motion in space", "Functions of several variables",
    "Partial derivatives", "The gradient & directional derivatives",
    "The multivariable chain rule", "Optimization & Lagrange multipliers",
    "Double & triple integrals", "Change of variables & the Jacobian",
    "Polar, cylindrical & spherical coordinates", "Vector fields",
    "Line integrals & conservative fields", "Grad, div & curl",
    "Green's theorem", "Surface integrals & flux",
    "Stokes' theorem", "The divergence theorem",
  ],
  recommended: [
    res("Vector Calculus", "Marsden & Tromba", { type: "textbook" }),
    res("Multivariable Calculus (18.02)", "MIT OpenCourseWare", { type: "lectures", free: true,
      url: "https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/" }),
    res("Calculus: Early Transcendentals", "James Stewart", { type: "textbook" }),
  ],
  supplementary: [
    res("Div, Grad, Curl, and All That", "H. M. Schey", { type: "textbook" }),
    res("Multivariable Calculus", "Khan Academy", { type: "video", free: true,
      url: "https://www.khanacademy.org/math/multivariable-calculus" }),
    res("Vector Calculus", "Michael Corral", { type: "textbook", free: true,
      url: "https://www.mecmath.net/" }),
    res("Paul's Online Notes — Calculus III", "Paul Dawkins", { type: "notes", free: true,
      url: "https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx" }),
  ],
});
