registerDetail({
  long:
    "Nuclear Thermal-Hydraulics addresses the generation, transport, and removal of the enormous heat produced by fission and is the discipline that ultimately limits reactor power. " +
    "The course begins with the volumetric heat source set by the fission rate and the axial and radial power distribution across the core. " +
    "Heat conduction within cylindrical fuel pellets, across the fuel-clad gap, and through the cladding sets the fuel centerline temperature that must stay below melting. " +
    "Single-phase convective heat transfer and the associated correlations describe how the coolant carries heat away in normal operation. " +
    "As power rises the coolant may boil, so the course develops two-phase flow, flow regimes, void fraction models, and the boiling curve from nucleate through transition to film boiling. " +
    "The critical heat flux and departure from nucleate boiling define the thermal margin that separates safe operation from clad overheating. " +
    "Pressure drop and flow distribution in rod bundles, natural circulation, and coolant thermodynamic cycles connect the core to the balance of plant. " +
    "The course concludes with integrated core thermal design, hot-channel factors, and the safety margins that govern licensed power limits.",
  topics: [
    "Fission heat generation and volumetric power density",
    "Axial and radial power distributions and hot-channel factors",
    "Heat conduction in fuel pellets and the gap conductance",
    "Cladding temperature and fuel centerline temperature limits",
    "Single-phase convective heat transfer correlations",
    "Two-phase flow regimes and void fraction models",
    "Boiling heat transfer and the boiling curve",
    "Nucleate, transition, and film boiling",
    "Critical heat flux and departure from nucleate boiling",
    "Pressure drop and friction in rod bundles",
    "Flow distribution and subchannel analysis",
    "Natural circulation and buoyancy-driven flow",
    "Coolant thermodynamic cycles and plant efficiency",
    "Core thermal design and thermal margins",
    "Departure-from-nucleate-boiling ratio and design limits",
  ],
  recommended: [
    res("Nuclear Systems Volume I: Thermal Hydraulic Fundamentals", "Neil E. Todreas and Mujid S. Kazimi", { type: "textbook" }),
    res("Convective Boiling and Condensation", "John G. Collier and John R. Thome", { type: "textbook" }),
  ],
  supplementary: [
    res("Nuclear Heat Transport", "M. M. El-Wakil", { type: "textbook" }),
    res("Fundamentals of Heat and Mass Transfer", "Frank P. Incropera and David P. DeWitt", { type: "reference" }),
  ],
});
