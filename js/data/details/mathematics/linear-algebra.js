registerDetail({
  long:
    "Linear algebra is the study of vectors, the spaces they live in, and the linear maps " +
    "between those spaces. Starting from systems of linear equations, it abstracts to vector " +
    "spaces, bases and dimension, then to the matrices that represent linear transformations in " +
    "coordinates. The central drama is finding structure inside a transformation — eigenvalues, " +
    "diagonalization and the spectral theorem reveal the directions a map simply stretches — " +
    "while inner products add geometry: length, angle and orthogonality. It is the computational " +
    "and conceptual backbone of nearly all of applied mathematics, from differential equations " +
    "to computer graphics and machine learning.",
  topics: [
    "Systems of linear equations", "Gaussian elimination & row reduction",
    "Matrices & matrix algebra", "Vector spaces & subspaces",
    "Span, linear independence", "Basis & dimension",
    "Linear maps & their matrices", "The rank–nullity theorem",
    "Change of basis", "Determinants", "Eigenvalues & eigenvectors",
    "Diagonalization", "Inner product spaces", "Orthogonality & Gram–Schmidt",
    "Orthogonal & unitary operators", "The spectral theorem",
    "Singular value decomposition", "Jordan canonical form",
  ],
  recommended: [
    res("Linear Algebra Done Right", "Sheldon Axler", { type: "textbook" }),
    res("Linear Algebra (18.06)", "Gilbert Strang / MIT OCW", { type: "lectures", free: true,
      url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/" }),
    res("Introduction to Linear Algebra", "Gilbert Strang", { type: "textbook" }),
  ],
  supplementary: [
    res("Essence of Linear Algebra", "3Blue1Brown", { type: "video", free: true,
      url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" }),
    res("Linear Algebra", "Jim Hefferon", { type: "textbook", free: true,
      url: "https://hefferon.net/linearalgebra/" }),
    res("A First Course in Linear Algebra", "Rob Beezer", { type: "interactive", free: true,
      url: "http://linear.ups.edu/" }),
    res("The Art of Linear Algebra", "Kenji Hiranabe", { type: "reference", free: true,
      url: "https://github.com/kenjihiranabe/The-Art-of-Linear-Algebra" }),
  ],
});
