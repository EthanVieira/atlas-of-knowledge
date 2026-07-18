registerDetail({
  long: "Orbital Mechanics and Astrodynamics develops the mathematical description of how " +
    "spacecraft and natural bodies move under gravity, and how that motion is measured and " +
    "controlled. The course begins with the two-body problem, deriving the equation of relative " +
    "motion, the conservation of energy and angular momentum, and the conic-section orbits that " +
    "result. Orbits are parameterized by the classical orbital elements and related through the " +
    "coordinate frames and time systems used to track them, while Kepler's equation connects " +
    "position to time of flight for elliptic, parabolic, and hyperbolic paths. From noisy " +
    "observations the course reconstructs orbits through orbit determination, then turns to " +
    "changing them with impulsive maneuvers, Hohmann and bi-elliptic transfers, and plane " +
    "changes. Lambert's problem ties two position vectors and a transfer time into a unique " +
    "trajectory, forming the basis for interplanetary transfers analyzed with patched conics and " +
    "gravity assists. The treatment closes with gravitational perturbations that make real orbits " +
    "drift and with the relative motion equations that govern rendezvous and proximity operations.",
  topics: [
    "The two-body problem and the equation of relative motion",
    "Conservation of energy and angular momentum",
    "Conic-section orbits and the orbit equation",
    "Classical orbital elements and coordinate frames",
    "Time systems and Julian dates",
    "Kepler's equation and time of flight",
    "Orbit determination from observations",
    "Impulsive maneuvers and the vis-viva equation",
    "Hohmann and bi-elliptic transfers",
    "Plane changes and combined maneuvers",
    "Lambert's problem and trajectory targeting",
    "Interplanetary trajectories and patched conics",
    "Gravity assists and flybys",
    "Gravitational perturbations and J2 effects",
    "Relative motion, rendezvous, and proximity operations",
  ],
  recommended: [
    res("Orbital Mechanics for Engineering Students", "Howard D. Curtis", { type: "textbook" }),
    res("Fundamentals of Astrodynamics and Applications", "David A. Vallado", { type: "textbook" }),
  ],
  supplementary: [
    res("Fundamentals of Astrodynamics", "Roger R. Bate, Donald D. Mueller, and Jerry E. White", { type: "textbook" }),
    res("An Introduction to the Mathematics and Methods of Astrodynamics", "Richard H. Battin", { type: "reference" }),
  ],
});
