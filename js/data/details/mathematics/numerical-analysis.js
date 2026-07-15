registerDetail({
  long: "Numerical analysis is the study of algorithms that approximate the solutions of continuous mathematical problems, together with the errors those approximations incur. Because computers represent numbers in finite precision, the subject begins with floating-point arithmetic and the twin notions of conditioning—how sensitive a problem is—and stability—how well an algorithm controls error. From this foundation it builds reliable methods for root finding, interpolation, differentiation, and integration. Numerical linear algebra forms the computational core, with LU, QR, and singular value decompositions powering the solution of linear systems, least squares, and eigenvalue problems. Iterative methods extend these ideas to the large, sparse systems that arise from discretizing differential equations. The result is the algorithmic backbone of scientific computing and engineering simulation.",
  topics: [
    "Floating-point arithmetic & error",
    "Conditioning & stability",
    "Root finding: bisection",
    "Root finding: Newton's method",
    "Interpolation & splines",
    "Numerical differentiation",
    "Numerical integration (quadrature)",
    "LU decomposition",
    "QR decomposition",
    "The singular value decomposition",
    "Iterative methods",
    "Eigenvalue algorithms",
    "Finite differences for ODEs",
    "Finite differences for PDEs",
  ],
  recommended: [
    res("Numerical Analysis", "Burden & Faires", { type: "textbook" }),
    res("Numerical Linear Algebra", "Trefethen & Bau", { type: "textbook" }),
  ],
  supplementary: [
    res("An Introduction to Numerical Analysis", "Süli & Mayers", { type: "textbook" }),
  ],
});
