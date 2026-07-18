registerDetail({
  long:
    "Structural Analysis is the study of how forces flow through structures and how those structures " +
    "respond in terms of internal forces, reactions, and deformations. It begins with the idea of load " +
    "paths, tracing how gravity, wind, and other actions travel from where they are applied down to the " +
    "supports and ultimately the foundation. For statically determinate beams, trusses, and frames, the " +
    "equations of equilibrium alone suffice to find reactions and member forces, which are visualized " +
    "through shear and bending moment diagrams. Deflections are computed using energy methods such as " +
    "virtual work along with geometric techniques like the moment-area and conjugate-beam methods. When " +
    "structures are statically indeterminate, compatibility of displacements must supplement equilibrium, " +
    "leading to the force (flexibility) method and to displacement methods such as slope-deflection and " +
    "moment distribution. Influence lines describe how a moving load changes a given response, a central " +
    "concern in bridge design, and the course culminates in the matrix stiffness method that underpins " +
    "modern structural analysis software.",
  topics: [
    "Loads, load paths, and structural idealization",
    "Equilibrium and support reactions",
    "Statically determinate beams and frames",
    "Analysis of trusses by joints and sections",
    "Shear and bending moment diagrams",
    "Deflections by the double integration method",
    "Moment-area and conjugate-beam methods",
    "Virtual work and energy methods",
    "Statically indeterminate structures",
    "The force (flexibility) method",
    "The slope-deflection method",
    "Moment distribution",
    "Influence lines for beams and trusses",
    "The matrix stiffness method",
    "Approximate analysis of frames",
  ],
  recommended: [
    res("Structural Analysis", "Russell C. Hibbeler", { type: "textbook" }),
    res("Structural Analysis", "Aslam Kassimali", { type: "textbook" }),
  ],
  supplementary: [
    res("Elementary Structural Analysis", "Norris, Wilbur, and Utku", { type: "textbook" }),
    res("Matrix Analysis of Structures", "Aslam Kassimali", { type: "reference" }),
  ],
});
