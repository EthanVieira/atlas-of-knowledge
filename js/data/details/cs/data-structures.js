registerDetail({
  long: "Data Structures studies how to organize data so that it can be stored, retrieved, and manipulated efficiently, a skill at the heart of all " +
    "practical programming. The course opens with asymptotic (Big-O) analysis, giving students a vocabulary for comparing the time and space costs of " +
    "different designs. It then surveys the foundational linear structures such as dynamic arrays, linked lists, stacks, and queues, before moving to " +
    "the associative and tree-based structures that make fast search possible: hash tables, binary search trees, and self-balancing trees like AVL and " +
    "red-black trees. Priority queues built on heaps, tries for string keys, and disjoint-set forests round out the toolkit, while graphs and their " +
    "traversals introduce the structures underlying networks and maps. Throughout, students implement these structures and analyze their operations, " +
    "including an introduction to amortized analysis. The course builds the intuition needed to choose the right structure for a given problem and " +
    "prepares students for the study of algorithms.",
  topics: [
    "Asymptotic (Big-O) analysis",
    "Arrays and dynamic arrays",
    "Linked lists",
    "Stacks and queues",
    "Recursion and the call stack",
    "Hash tables and hashing",
    "Binary search trees",
    "Balanced trees (AVL, red-black)",
    "Heaps and priority queues",
    "Tries",
    "Graphs and their representations",
    "Graph traversal (BFS, DFS)",
    "Disjoint-set (union-find)",
    "Amortized analysis (introduction)",
  ],
  recommended: [
    res("Open Data Structures", "Pat Morin", { type: "textbook", free: true, url: "https://opendatastructures.org/" }),
    res("Introduction to Algorithms", "Cormen, Leiserson, Rivest, and Stein", { type: "textbook" }),
    res("Algorithms, 4th Edition", "Robert Sedgewick and Kevin Wayne", { type: "textbook" }),
  ],
  supplementary: [
    res("Data Structures and Algorithm Analysis in C++", "Mark Allen Weiss", { type: "textbook" }),
    res("The Algorithm Design Manual", "Steven S. Skiena", { type: "reference" }),
  ],
});
