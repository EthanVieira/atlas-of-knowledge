registerDetail({
  long: "Transport Phenomena presents momentum, heat, and mass transfer as a single unified subject built " +
    "on the deep analogy among the three transport processes. The course starts with molecular " +
    "transport, introducing viscosity, thermal conductivity, and diffusivity as the coefficients that " +
    "relate fluxes to gradients through Newton's, Fourier's, and Fick's laws. Shell balances on simple " +
    "geometries yield velocity, temperature, and concentration profiles and build intuition before the " +
    "general equations of change are derived. The equations of continuity, motion (Navier-Stokes), and " +
    "energy are then applied to laminar flow, conduction, and diffusion problems in closed form. " +
    "Boundary-layer theory and dimensional analysis extend the treatment to convective transport, " +
    "where friction factors, Nusselt numbers, and Sherwood numbers correlate interphase transfer. " +
    "Turbulent transport is introduced through time-averaging and eddy diffusivities, emphasizing the " +
    "parallels among the three fields. The course concludes with interphase transfer coefficients and " +
    "multicomponent diffusion, giving students a rigorous mechanistic basis for the design of " +
    "separations, reactors, and thermal equipment.",
  topics: [
    "The analogy among momentum, heat, and mass transfer",
    "Viscosity and Newton's law of viscosity",
    "Shell momentum balances and velocity profiles",
    "The equation of continuity",
    "The equations of motion (Navier-Stokes)",
    "Thermal conductivity and Fourier's law",
    "Shell energy balances and temperature profiles",
    "The energy equation",
    "Diffusivity and Fick's law of diffusion",
    "Shell mass balances and concentration profiles",
    "Boundary-layer theory and dimensional analysis",
    "Turbulent transport and eddy diffusivities",
    "Interphase transfer coefficients (friction, Nusselt, Sherwood)",
    "Free and forced convection correlations",
    "Multicomponent diffusion and the Maxwell-Stefan equations",
  ],
  recommended: [
    res("Transport Phenomena", "R. Byron Bird, Warren E. Stewart, and Edwin N. Lightfoot", { type: "textbook" }),
    res("Analysis of Transport Phenomena", "William M. Deen", { type: "textbook" }),
  ],
  supplementary: [
    res("Fundamentals of Momentum, Heat, and Mass Transfer", "James R. Welty, Charles E. Wicks, Robert E. Wilson, and Gregory L. Rorrer", { type: "textbook" }),
    res("Transport Processes and Separation Process Principles", "Christie John Geankoplis", { type: "reference" }),
  ],
});
