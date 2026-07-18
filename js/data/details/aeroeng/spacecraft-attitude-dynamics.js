registerDetail({
  long: "Spacecraft Attitude Dynamics and Control studies how a satellite's orientation evolves " +
    "under internal and external torques and how it is sensed and commanded to a desired pointing. " +
    "The course builds rigid-body kinematics and rotational dynamics, expressing angular momentum " +
    "and Euler's equations in body-fixed frames and relating angular velocity to changes in " +
    "orientation. Attitude is represented in several equivalent ways - Euler angles, the direction " +
    "cosine matrix, and quaternions - each with its own strengths and singularities. Torque-free " +
    "motion reveals the stability of spin about the principal axes and the role of energy " +
    "dissipation, after which environmental disturbance torques from gravity gradient, aerodynamic " +
    "drag, solar radiation pressure, and residual magnetic dipoles are quantified. The hardware " +
    "side covers attitude sensors such as star trackers, sun sensors, and gyroscopes, together with " +
    "actuators including reaction wheels, thrusters, and magnetic torquers. Attitude determination " +
    "algorithms from TRIAD and QUEST through the Kalman filter fuse these measurements, and the " +
    "course closes with feedback control laws that stabilize and slew the spacecraft while managing " +
    "momentum.",
  topics: [
    "Rigid-body kinematics and rotational dynamics",
    "Angular momentum and the inertia tensor",
    "Euler's equations of motion",
    "Euler angles and the direction cosine matrix",
    "Quaternions and attitude parameterizations",
    "Torque-free motion and spin stability",
    "Gravity-gradient and environmental disturbance torques",
    "Solar radiation pressure and magnetic torques",
    "Star trackers, sun sensors, and gyroscopes",
    "Reaction wheels and momentum management",
    "Thrusters and magnetic torquers",
    "Attitude determination with TRIAD and QUEST",
    "Kalman filtering for attitude estimation",
    "Feedback control laws and slew maneuvers",
    "Spin, dual-spin, and three-axis stabilization",
  ],
  recommended: [
    res("Spacecraft Dynamics and Control: A Practical Engineering Approach", "Marcel J. Sidi", { type: "textbook" }),
  ],
  supplementary: [
    res("Analytical Mechanics of Space Systems", "Hanspeter Schaub and John L. Junkins", { type: "textbook" }),
    res("Spacecraft Attitude Dynamics", "Peter C. Hughes", { type: "reference" }),
  ],
});
