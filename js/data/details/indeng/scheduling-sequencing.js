registerDetail({
  long: "Scheduling and Sequencing addresses the problem of allocating scarce resources to tasks over time so as to optimize one or more performance measures, a problem that arises in manufacturing, computing, transportation, and project management. The course introduces the standard three-field notation and the performance measures - makespan, flow time, lateness, and tardiness - that formalize what a good schedule means. It works up through machine environments of increasing complexity, from single-machine and parallel-machine models to flow shops, where Johnson's rule gives an elegant optimal sequence, and job shops, which are among the hardest combinatorial problems. Complexity theory clarifies which scheduling problems are tractable and which are NP-hard, motivating the use of dispatching rules, heuristics, and branch-and-bound methods to find good or optimal solutions. The final part turns to project scheduling, developing the critical path method and PERT for planning networks of activities, and resource-constrained project scheduling for the realistic case where activities compete for limited resources.",
  topics: [
    "Scheduling notation",
    "Performance measures",
    "Single-machine scheduling",
    "Parallel-machine scheduling",
    "Flow-shop scheduling",
    "Johnson's rule",
    "Job-shop scheduling",
    "Complexity of scheduling problems",
    "Dispatching rules and heuristics",
    "Branch-and-bound for scheduling",
    "Project scheduling with CPM",
    "PERT",
    "Resource-constrained project scheduling",
    "Makespan and tardiness objectives",
  ],
  recommended: [
    res("Scheduling: Theory, Algorithms, and Systems", "Michael Pinedo", { type: "textbook" }),
  ],
  supplementary: [
    res("Theory of Scheduling", "Richard Conway, William Maxwell and Louis Miller", { type: "textbook" }),
    res("Planning and Scheduling in Manufacturing and Services", "Michael Pinedo", { type: "reference" }),
  ],
});
