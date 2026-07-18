registerDetail({
  long:
    "Advanced Structural Analysis develops the finite element method as the computational engine behind " +
    "modern structural engineering practice. It begins by reviewing matrix structural analysis and the " +
    "direct stiffness method, in which member stiffness matrices are assembled into a global system whose " +
    "solution yields nodal displacements and member forces. Bar and truss elements introduce axial " +
    "stiffness and the role of coordinate transformation, while beam and frame elements add bending, " +
    "shear, and rotational degrees of freedom. The assembly process, application of boundary conditions, " +
    "and equation solving are treated systematically so that students can implement and verify their own " +
    "codes. Continuum elements for plane stress and plane strain, along with plate and shell elements, " +
    "extend the method from skeletal structures to two- and three-dimensional bodies. The course then " +
    "addresses geometric and material nonlinearity, including large displacements and inelastic response, " +
    "and covers dynamic and buckling analysis through eigenvalue problems. Throughout, emphasis falls on " +
    "sound modeling practice, mesh refinement, and verification so that numerical results can be trusted.",
  topics: [
    "Review of matrix structural analysis",
    "The direct stiffness method",
    "Bar and truss elements",
    "Beam and frame elements",
    "Coordinate transformation and assembly",
    "Boundary conditions and equation solving",
    "Shape functions and interpolation",
    "Plane stress and plane strain elements",
    "Plate and shell elements",
    "Geometric nonlinearity and large displacements",
    "Material nonlinearity and inelastic analysis",
    "Dynamic analysis and eigenvalue problems",
    "Buckling and stability analysis",
    "Modeling practice, mesh refinement, and verification",
  ],
  recommended: [
    res("Matrix Structural Analysis", "William McGuire, Richard H. Gallagher, and Ronald D. Ziemian", { type: "textbook" }),
  ],
  supplementary: [
    res("The Finite Element Method: Its Basis and Fundamentals", "O. C. Zienkiewicz, R. L. Taylor, and J. Z. Zhu", { type: "reference" }),
    res("Concepts and Applications of Finite Element Analysis", "Robert D. Cook et al.", { type: "textbook" }),
  ],
});
