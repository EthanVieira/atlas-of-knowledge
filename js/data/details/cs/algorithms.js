registerDetail({
  long: "Algorithms is the study of general strategies for solving computational problems and of the mathematical tools used to prove that solutions are " +
    "correct and efficient. Building on data structures and discrete mathematics, the course develops rigorous asymptotic analysis, recurrences, and the " +
    "master theorem before surveying the major algorithm design paradigms. Students learn divide and conquer, greedy methods, and dynamic programming, " +
    "applying each to classic problems in sorting, selection, and optimization. A substantial treatment of graph algorithms covers shortest paths, " +
    "minimum spanning trees, and an introduction to network flow, while string algorithms and randomization broaden the toolkit. The course closes with " +
    "the theory of intractability: reductions, NP-completeness, and the idea of approximation algorithms for problems that admit no known efficient exact " +
    "solution. Throughout, the emphasis is on proving correctness and analyzing running time, not merely coding, so that students can design and evaluate " +
    "algorithms for problems they have never seen.",
  topics: [
    "Asymptotic analysis and recurrences",
    "The master theorem",
    "Divide and conquer",
    "Sorting and selection",
    "Greedy algorithms",
    "Dynamic programming",
    "Shortest-path algorithms",
    "Minimum spanning trees",
    "Network flow (introduction)",
    "String algorithms",
    "Hashing and randomization (introduction)",
    "Amortized analysis",
    "Reductions",
    "Intractability and NP-completeness (introduction)",
    "Approximation algorithms (introduction)",
  ],
  recommended: [
    res("Introduction to Algorithms (MIT OCW 6.006)", "Erik Demaine, Jason Ku, and Justin Solomon", { type: "lectures", free: true, url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/" }),
    res("Algorithms", "Jeff Erickson", { type: "textbook", free: true, url: "https://jeffe.cs.illinois.edu/teaching/algorithms/" }),
    res("Introduction to Algorithms", "Cormen, Leiserson, Rivest, and Stein", { type: "textbook" }),
    res("Algorithm Design", "Jon Kleinberg and Eva Tardos", { type: "textbook" }),
  ],
  supplementary: [
    res("The Algorithm Design Manual", "Steven S. Skiena", { type: "reference" }),
    res("Algorithms", "Sanjoy Dasgupta, Christos Papadimitriou, and Umesh Vazirani", { type: "textbook" }),
  ],
});
