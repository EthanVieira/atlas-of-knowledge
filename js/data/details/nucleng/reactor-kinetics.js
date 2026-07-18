registerDetail({
  long:
    "Reactor Kinetics and Control studies how the neutron population and power of a nuclear reactor evolve in time when the balance between neutron production and loss is perturbed. " +
    "The course develops the point reactor kinetics equations, in which the spatially averaged neutron density is coupled to a set of delayed-neutron precursor concentrations. " +
    "Although delayed neutrons are less than one percent of all fission neutrons, they lengthen the effective neutron lifetime by orders of magnitude and make a reactor controllable. " +
    "Reactivity is introduced as the natural measure of departure from criticality, expressed in dollars and cents relative to the delayed-neutron fraction, and the danger of prompt criticality and the prompt jump is analyzed carefully. " +
    "Solving the kinetics equations for a step reactivity insertion leads to the inhour equation, the stable reactor period, and the physics of startup and source multiplication. " +
    "Reactivity feedback through fuel and moderator temperature coefficients, void effects, and the Doppler broadening of resonances determines whether a reactor is inherently stable. " +
    "Slow poisoning transients from xenon-135 and samarium-149 buildup, together with control-rod worth and rod-drop and rod-ejection analysis, complete the picture. " +
    "The course closes with reactor stability, feedback control loops, and the design of protection and control systems that keep power within safe bounds.",
  topics: [
    "The point reactor kinetics equations and precursor balance",
    "Prompt and delayed neutrons; effective delayed-neutron fraction",
    "Mean neutron generation time and effective lifetime",
    "Reactivity and the dollar and cent units",
    "Prompt criticality and the prompt jump approximation",
    "The inhour equation and its roots",
    "Stable reactor period and exponential response",
    "Reactor startup, source multiplication, and subcritical approach",
    "Reactivity feedback and the fuel temperature (Doppler) coefficient",
    "Moderator temperature and void coefficients of reactivity",
    "Xenon-135 poisoning, buildup, and oscillations",
    "Samarium-149 poisoning and equilibrium effects",
    "Control-rod worth and differential and integral worth curves",
    "Reactor transfer function and feedback stability",
    "Reactor control and protection systems",
  ],
  recommended: [
    res("Introduction to Nuclear Engineering", "John R. Lamarsh and Anthony J. Baratta", { type: "textbook" }),
    res("Introductory Nuclear Reactor Dynamics", "Karl O. Ott and Robert J. Neuhold", { type: "textbook" }),
  ],
  supplementary: [
    res("Nuclear Reactor Analysis", "James J. Duderstadt and Louis J. Hamilton", { type: "textbook" }),
    res("Nuclear Reactor Physics", "Weston M. Stacey", { type: "reference" }),
  ],
});
