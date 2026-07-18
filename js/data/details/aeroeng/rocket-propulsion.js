registerDetail({
  long: "Rocket Propulsion covers the analysis and design of the reaction engines that carry " +
    "vehicles beyond the reach of air-breathing flight, from launch boosters to interplanetary " +
    "spacecraft. The course opens with the ideal rocket equation, relating mission delta-v to " +
    "exhaust velocity and propellant mass fraction, and uses it to frame the tyranny of staging " +
    "and payload budgets. Nozzle theory follows, developing isentropic expansion through a " +
    "converging-diverging nozzle, the conditions for optimum expansion, and the definitions of " +
    "thrust, specific impulse, and thrust coefficient. Chemical rockets are grounded in " +
    "thermochemistry and equilibrium combustion, which set the chamber temperature and gas " +
    "properties that determine performance. The major chemical architectures are then studied in " +
    "turn: solid propellant motors with their grain geometry and burn-rate behavior, liquid " +
    "engines with their injectors, feed systems, and cooling, and hybrid rockets that combine " +
    "solid and liquid elements. Electric propulsion is introduced through ion and Hall-effect " +
    "thrusters, whose high specific impulse suits deep-space and stationkeeping missions. The " +
    "course closes with multistage vehicle performance and the optimization of staging for a " +
    "given mission.",
  topics: [
    "The ideal rocket equation and mission delta-v",
    "Exhaust velocity and propellant mass fraction",
    "Nozzle theory and isentropic expansion",
    "Optimum expansion and nozzle geometry",
    "Thrust, specific impulse, and thrust coefficient",
    "Chemical rocket thermochemistry and equilibrium",
    "Solid propellant rockets and grain design",
    "Burn rate and internal ballistics",
    "Liquid propellant engines and feed systems",
    "Injectors, cooling, and combustion chambers",
    "Hybrid rockets",
    "Electric propulsion: ion thrusters",
    "Hall-effect thrusters",
    "Staging and multistage performance",
    "Mission design and propulsion selection",
  ],
  recommended: [
    res("Rocket Propulsion Elements", "George P. Sutton and Oscar Biblarz", { type: "textbook" }),
    res("Modern Engineering for Design of Liquid-Propellant Rocket Engines", "Dieter K. Huzel and David H. Huang", { type: "reference" }),
  ],
  supplementary: [
    res("Space Propulsion Analysis and Design", "Ronald W. Humble, Gary N. Henry, and Wiley J. Larson", { type: "reference" }),
    res("Fundamentals of Electric Propulsion: Ion and Hall Thrusters", "Dan M. Goebel and Ira Katz", { type: "textbook", free: true, url: "https://descanso.jpl.nasa.gov/SciTechBook/series1/Goebel__cmprsd_opt.pdf" }),
  ],
});
