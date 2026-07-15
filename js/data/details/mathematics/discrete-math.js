registerDetail({
  long:
    "Discrete mathematics is the mathematics of distinct, countable structures — the natural " +
    "habitat of computer science. It gathers the essential tools for reasoning precisely: formal " +
    "logic and proof, sets and relations, and induction. On that base it builds combinatorics " +
    "(the art of counting without listing), the elementary number theory behind cryptography, and " +
    "graph theory, the study of networks of nodes and edges. Less a single subject than a toolkit, " +
    "it trains the habits of rigorous argument and structural thinking that every later course in " +
    "theory and algorithms assumes.",
  topics: [
    "Propositional & predicate logic", "Methods of proof",
    "Sets, relations & functions", "Mathematical induction & recursion",
    "Counting & the pigeonhole principle", "Permutations & combinations",
    "The binomial theorem", "Inclusion–exclusion",
    "Recurrence relations", "Generating functions (introduction)",
    "Modular arithmetic", "Graphs & trees",
    "Graph traversal & connectivity", "Boolean algebra",
  ],
  recommended: [
    res("Mathematics for Computer Science (6.042)", "Lehman, Leighton & Meyer / MIT", { type: "lectures", free: true,
      url: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/" }),
    res("Concrete Mathematics", "Graham, Knuth & Patashnik", { type: "textbook" }),
    res("Discrete Mathematics and Its Applications", "Kenneth Rosen", { type: "textbook" }),
  ],
  supplementary: [
    res("Discrete Mathematics: An Open Introduction", "Oscar Levin", { type: "interactive", free: true,
      url: "https://discrete.openmathbooks.org/" }),
    res("Applied Combinatorics", "Keller & Trotter", { type: "textbook", free: true,
      url: "https://www.appliedcombinatorics.org/" }),
    res("Book of Proof", "Richard Hammack", { type: "textbook", free: true,
      url: "https://www.people.vcu.edu/~rhammack/BookOfProof/" }),
  ],
});
