registerDetail({
  long:
    "Neutron Transport Theory provides the rigorous kinetic description of how neutrons move, scatter, are absorbed, and multiply in a reactor or shield. " +
    "It is built on the neutron transport (Boltzmann) equation, which balances the angular flux over position, direction, energy, and time. " +
    "The course distinguishes the angular flux from the scalar flux and develops the integral form of the transport equation alongside its differential form. " +
    "The diffusion approximation is derived as a low-order limit, and its regions of validity and failure near sources, boundaries, and strong absorbers are examined carefully. " +
    "Deterministic solution methods are treated in depth, including the discrete ordinates (SN) method, the spherical harmonics (PN) method, and the method of characteristics on realistic geometries. " +
    "Monte Carlo neutron transport is introduced as a stochastic alternative, with attention to variance reduction and statistical error. " +
    "Eigenvalue and fixed-source problems are formulated, and acceleration techniques such as diffusion synthetic acceleration are used to speed convergence of iterative solvers.",
  topics: [
    "The neutron transport (Boltzmann) equation",
    "Angular flux, scalar flux, and neutron current",
    "The integral form of the transport equation",
    "The diffusion approximation and its limits",
    "Legendre expansion of the scattering kernel",
    "The discrete ordinates (SN) method and quadrature sets",
    "Ray effects and spatial discretization schemes",
    "The spherical harmonics (PN) method",
    "The method of characteristics",
    "Monte Carlo neutron transport and variance reduction",
    "Eigenvalue (k-effective) and fixed-source problems",
    "Source iteration and its convergence",
    "Acceleration methods (diffusion synthetic acceleration)",
    "Boundary conditions and reflective symmetry",
    "Multigroup treatment of energy dependence",
  ],
  recommended: [
    res("Nuclear Reactor Physics", "Weston M. Stacey", { type: "textbook" }),
    res("Computational Methods of Neutron Transport", "E. E. Lewis and W. F. Miller", { type: "textbook" }),
  ],
  supplementary: [
    res("Nuclear Reactor Analysis", "James J. Duderstadt and Louis J. Hamilton", { type: "textbook" }),
    res("Linear Transport Theory", "Kenneth M. Case and Paul F. Zweifel", { type: "reference" }),
  ],
});
