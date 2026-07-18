registerDetail({
  long:
    "Nuclear Reactor Physics develops the theory that governs how a self-sustaining fission chain reaction is created, controlled, and shut down in a reactor core. " +
    "It begins with neutron interactions and microscopic and macroscopic cross sections, the fission process, and the release of prompt and delayed neutrons. " +
    "The slowing down of fast neutrons through elastic and inelastic scattering leads to the concepts of lethargy, moderation, and the balance between moderation and absorption. " +
    "The four-factor and six-factor formulas assemble these processes into the effective multiplication factor that decides whether a system is subcritical, critical, or supercritical. " +
    "Neutron diffusion theory, in one-group and multigroup form, describes how the neutron flux is distributed in space, and the criticality condition ties the reactor geometry and material buckling together. " +
    "Reflectors, critical size, and flux flattening are studied for realistic core designs, along with the effect of control poisons and fission-product buildup on reactivity. " +
    "The course closes by connecting steady-state flux distributions to reactivity feedback, providing the foundation for kinetics, control, and reactor operation.",
  topics: [
    "Neutron interactions and microscopic/macroscopic cross sections",
    "The fission process and prompt and delayed neutrons",
    "Neutron slowing down, lethargy, and moderation",
    "Moderating ratio and choice of moderator",
    "The four-factor and six-factor formulas",
    "The effective multiplication factor and reactivity",
    "Neutron diffusion theory and Fick's law",
    "The one-group diffusion equation and boundary conditions",
    "Multigroup diffusion and energy-group collapse",
    "Criticality, buckling, and critical size and geometry",
    "Reflectors, reflector savings, and flux flattening",
    "Bare and reflected reactor flux distributions",
    "Reactivity and control-rod worth",
    "Fission-product poisoning (xenon and samarium)",
    "Reactivity coefficients and temperature feedback",
  ],
  recommended: [
    res("Introduction to Nuclear Engineering", "John R. Lamarsh and Anthony J. Baratta", { type: "textbook" }),
    res("Nuclear Reactor Analysis", "James J. Duderstadt and Louis J. Hamilton", { type: "textbook" }),
  ],
  supplementary: [
    res("Nuclear Reactor Physics", "Weston M. Stacey", { type: "textbook" }),
    res("Nuclear Reactor Theory", "George I. Bell and Samuel Glasstone", { type: "reference" }),
  ],
});
