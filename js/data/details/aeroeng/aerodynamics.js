registerDetail({
  long: "Aerodynamics is the study of the forces and moments that air exerts on a body moving " +
    "through it, and the flow fields that produce them. The course opens with the fundamental " +
    "aerodynamic variables - pressure, density, temperature, and velocity - and the definitions " +
    "of lift, drag, and moment through pressure and shear-stress distributions. The governing " +
    "conservation laws are developed in integral and differential form as the continuity, " +
    "momentum, and energy equations, then specialized to inviscid incompressible flow where " +
    "Bernoulli's equation and potential flow with elementary singularities apply. Airfoil " +
    "behavior is treated with thin-airfoil theory and the Kutta condition, which fix the " +
    "circulation and hence the lift, before finite wings are analyzed with Prandtl's " +
    "lifting-line theory and the resulting downwash and induced drag. The course then decomposes " +
    "total drag into induced, parasite, and wave contributions and extends the analysis to " +
    "subsonic compressible flow through compressibility corrections. It closes with viscous " +
    "effects, developing boundary layers, skin friction, flow separation, and the stall that " +
    "limits maximum lift.",
  topics: [
    "Fundamental aerodynamic variables and forces",
    "Lift, drag, and moment from pressure and shear distributions",
    "Continuity, momentum, and energy equations",
    "Inviscid incompressible flow and Bernoulli's equation",
    "Potential flow and elementary singularities",
    "Thin-airfoil theory and the Kutta condition",
    "Circulation and the Kutta-Joukowski theorem",
    "Finite wings and Prandtl lifting-line theory",
    "Downwash and induced drag",
    "Parasite drag and wave drag",
    "Subsonic compressible flow and compressibility corrections",
    "Boundary layers and skin friction",
    "Laminar-to-turbulent transition",
    "Flow separation and stall",
    "Maximum lift and high-lift devices",
  ],
  recommended: [
    res("Fundamentals of Aerodynamics", "John D. Anderson", { type: "textbook" }),
    res("Aerodynamics for Engineers", "John J. Bertin and Russell M. Cummings", { type: "textbook" }),
    res("16.100 Aerodynamics", "MIT OpenCourseWare", { type: "lectures", free: true, url: "https://ocw.mit.edu/courses/16-100-aerodynamics-fall-2005/" }),
  ],
  supplementary: [
    res("Foundations of Aerodynamics", "Arnold M. Kuethe and Chuen-Yen Chow", { type: "textbook" }),
    res("Theory of Wing Sections", "Ira H. Abbott and Albert E. von Doenhoff", { type: "reference" }),
  ],
});
