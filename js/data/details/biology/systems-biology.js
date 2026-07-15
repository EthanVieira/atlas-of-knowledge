registerDetail({
  long: "Systems biology seeks the design principles that govern how networks of genes, proteins, and metabolites produce robust cellular behavior. The course begins by representing transcription networks as directed graphs and analyzing the dynamics of gene expression with ordinary differential equations. A central theme is the recurrence of network motifs, such as autoregulation and the feed-forward loop, whose statistical over-representation reflects the useful dynamical functions they perform. Students study how bacterial chemotaxis achieves exact adaptation and robustness, how kinetic proofreading improves fidelity, and how metabolic networks are analyzed with flux balance analysis. Stochastic gene expression and intrinsic noise are treated quantitatively, alongside the circuits that generate oscillations, bistable switches, and spatial patterns. The course closes with questions of optimality and evolutionary design, and the practical craft of building, fitting, and inferring parameters for dynamical models. The perspective is quantitative throughout, connecting molecular mechanism to measurable systems-level function.",
  topics: [
    "Transcription networks and their graph representation",
    "The dynamics of gene expression",
    "Network motifs: negative and positive autoregulation",
    "Feed-forward loops and their dynamical functions",
    "Design principles of biological circuits",
    "Robustness and bacterial chemotaxis",
    "Kinetic proofreading and fidelity",
    "Metabolic networks and flux balance analysis",
    "Stochastic gene expression and noise",
    "Oscillators and the cell cycle",
    "Bistability and genetic switches",
    "Cell-cell communication and pattern formation",
    "Optimality and evolutionary design",
    "Modeling with ODEs",
    "Model fitting and parameter inference",
  ],
  recommended: [
    res("An Introduction to Systems Biology: Design Principles of Biological Circuits", "Uri Alon", { type: "textbook", free: true, url: "https://www.weizmann.ac.il/mcb/UriAlon/introduction-systems-biology-design-principles-biological-circuits" }),
    res("An Introduction to Systems Biology", "Uri Alon", { type: "textbook", free: false }),
  ],
  supplementary: [
    res("Systems Biology: A Textbook", "Klipp, Liebermeister, Wierling & Kowald", { type: "textbook" }),
    res("Physical Biology of the Cell", "Phillips, Kondev, Theriot & Garcia", { type: "textbook" }),
    res("An Introduction to Systems Biology (video lectures)", "Uri Alon", { type: "lectures" }),
  ],
});
