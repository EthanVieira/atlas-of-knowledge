registerDetail({
  long: "Discrete-Event Simulation teaches how to model, build, and analyze computer simulations of systems whose state changes at discrete points in time, such as queues, production lines, and logistics networks. The course begins with the discrete-event world view and the two dominant modeling styles: the event-scheduling approach that advances a simulation clock from event to event, and the process-interaction approach that describes the life cycle of entities. Because randomness drives these models, students study random-number generation and the algorithms that transform uniform numbers into random variates from arbitrary distributions. Input data modeling and distribution fitting connect the simulation to real data, while output analysis and confidence intervals ensure that conclusions are statistically sound rather than artifacts of a single run. The distinction between terminating and steady-state simulation shapes how experiments are designed and analyzed. Variance-reduction techniques improve efficiency, verification and validation build credibility, and simulation optimization closes the loop by searching for the best system configuration.",
  topics: [
    "The discrete-event world view",
    "Event-scheduling approach",
    "Process-interaction approach",
    "Random-number generation",
    "Generating random variates",
    "Input data modeling",
    "Distribution fitting",
    "Output analysis",
    "Confidence intervals",
    "Terminating vs steady-state simulation",
    "Variance-reduction techniques",
    "Verification and validation",
    "Simulation optimization",
    "The simulation clock and event list",
  ],
  recommended: [
    res("Simulation Modeling and Analysis", "Averill Law", { type: "textbook" }),
    res("Discrete-Event System Simulation", "Jerry Banks, John Carson, Barry Nelson and David Nicol", { type: "textbook" }),
  ],
  supplementary: [
    res("Simulation", "Sheldon Ross", { type: "textbook" }),
    res("Handbook of Simulation", "Jerry Banks", { type: "reference" }),
  ],
});
