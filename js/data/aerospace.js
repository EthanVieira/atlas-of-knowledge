/* ============================================================================
 *  AEROSPACE ENGINEERING
 * ==========================================================================*/
registerCourses([

  { id: "aerodynamics", title: "Aerodynamics", field: "aeroeng",
    desc: "The forces of air on moving bodies — lift, drag and the design of wings.",
    requires: ["fluid-mechanics-eng"],
    topics: ["Airfoil theory", "Lift & drag", "Potential flow", "Compressible flow", "Shock waves", "Boundary layers & viscous effects"],
    free: [R("Aerodynamics", "MIT OCW 16.100", "https://ocw.mit.edu/courses/16-100-aerodynamics-fall-2005/")],
    paid: [R("Fundamentals of Aerodynamics", "John Anderson")] },

  { id: "flight-mechanics", title: "Flight Mechanics", field: "aeroeng",
    desc: "The performance, stability and control of aircraft in flight.",
    requires: ["engineering-dynamics", "aerodynamics"],
    topics: ["Aircraft performance", "Static stability", "Dynamic stability", "Equations of motion", "Flight envelope", "Handling qualities"],
    free: [R("Flight mechanics notes", "Various")],
    paid: [R("Flight Stability and Automatic Control", "Robert Nelson")] },

  { id: "propulsion", title: "Aerospace Propulsion", field: "aeroeng",
    desc: "How aircraft and rockets generate thrust.",
    requires: ["engineering-thermodynamics", "fluid-mechanics-eng"],
    topics: ["Thermodynamic cycles", "Gas turbines & jet engines", "Rocket propulsion", "Nozzles", "Combustion", "Performance analysis"],
    free: [R("Propulsion notes", "Various")],
    paid: [R("Elements of Propulsion", "Mattingly")] },

  { id: "aerospace-structures", title: "Aerospace Structures", field: "aeroeng",
    desc: "Lightweight structures that withstand flight loads.",
    requires: ["mechanics-of-materials"],
    topics: ["Thin-walled structures", "Aeroelasticity", "Composite materials", "Fatigue & fracture", "Structural dynamics", "Failure & safety"],
    free: [R("Aerospace structures notes", "Various")],
    paid: [R("Aircraft Structures for Engineering Students", "T. H. G. Megson")] },

  { id: "orbital-mechanics", title: "Orbital Mechanics & Astrodynamics", field: "aeroeng",
    desc: "The motion of spacecraft — orbits, transfers and mission design.",
    requires: ["classical-mechanics", "ode"],
    topics: ["Two-body problem", "Orbital elements", "Orbital maneuvers", "Hohmann transfers", "Interplanetary trajectories", "Perturbations"],
    free: [R("Orbital mechanics notes", "Various")],
    paid: [R("Orbital Mechanics for Engineering Students", "Howard Curtis")] },

  { id: "avionics-control", title: "Guidance, Navigation & Control", field: "aeroeng",
    desc: "The systems that steer aircraft and spacecraft.",
    requires: ["control-systems", "flight-mechanics"],
    topics: ["Guidance laws", "Inertial navigation", "Kalman filtering", "Autopilots", "Sensor fusion", "GPS/INS integration"],
    free: [R("GNC notes", "Various")],
    paid: [R("Aircraft Control and Simulation", "Stevens, Lewis & Johnson")] },

]);
