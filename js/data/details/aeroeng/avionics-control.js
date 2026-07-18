registerDetail({
  long: "Guidance, Navigation and Control unifies the three functions that let a vehicle know where " +
    "it is, decide where to go, and command the actuators to get there. The course opens with GNC " +
    "system architecture and the flow of information among navigation, guidance, and control loops. " +
    "Guidance laws are developed from geometric rules such as pursuit and proportional navigation, " +
    "which convert relative motion into steering commands for intercept and homing problems. " +
    "Navigation centers on inertial navigation systems, developing the mechanization equations that " +
    "propagate position, velocity, and attitude from accelerometer and gyroscope data, along with " +
    "the error growth that limits them. The Kalman filter provides the statistical framework for " +
    "estimating navigation states and fusing complementary sensors, and GPS is introduced and " +
    "tightly integrated with the inertial solution to bound drift. The control side covers autopilot " +
    "design, flight control systems, and stability augmentation that shape the vehicle's dynamic " +
    "response, closing the loop from sensed state back to actuator command.",
  topics: [
    "GNC system architecture and loop structure",
    "Guidance laws and pursuit guidance",
    "Proportional navigation and intercept geometry",
    "Inertial sensors: accelerometers and gyroscopes",
    "Inertial navigation system mechanization",
    "Navigation error propagation and drift",
    "The Kalman filter for navigation",
    "GPS positioning and measurement models",
    "GPS/INS integration and sensor fusion",
    "Complementary filtering",
    "Autopilot design and inner-outer loops",
    "Flight control systems",
    "Stability augmentation systems",
    "Aircraft equations of motion and simulation",
    "Handling qualities and control law evaluation",
  ],
  recommended: [
    res("Aircraft Control and Simulation", "Brian L. Stevens, Frank L. Lewis, and Eric N. Johnson", { type: "textbook" }),
  ],
  supplementary: [
    res("Applied Optimal Estimation", "Arthur Gelb", { type: "reference" }),
    res("Modern Inertial Technology: Navigation, Guidance, and Control", "Anthony Lawrence", { type: "reference" }),
  ],
});
