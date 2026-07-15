registerDetail({
  long: "Synthetic biology applies engineering principles of abstraction, standardization, and modular design to build novel biological functions. The course begins with standardized parts and the BioBrick framework, then examines how promoters, ribosome binding sites, and terminators are characterized and tuned to set expression levels quantitatively. Students learn to construct genetic logic gates and digital circuits, and to design dynamical devices such as the toggle switch and the repressilator oscillator, along with feedback controllers that regulate cellular behavior. RNA devices and riboswitches, and CRISPR-based regulation and editing, provide programmable control over gene expression. The course covers metabolic engineering and pathway optimization for producing valuable compounds, as well as directed evolution, genome minimization, and whole-genome synthesis. Cell-free systems, biosensors, and the choice of chassis organisms round out the engineering toolkit. Finally, the course treats biosafety, biocontainment, and biosecurity as essential responsibilities in engineering living systems.",
  topics: [
    "Standardized biological parts and BioBricks",
    "Promoters, RBS, and terminators; tuning expression",
    "Genetic logic gates and digital circuits",
    "Toggle switches and oscillators (the repressilator)",
    "Feedback controllers in cells",
    "Riboswitches and RNA devices",
    "CRISPR-based regulation and editing",
    "Metabolic engineering and pathway optimization",
    "Directed evolution",
    "Genome minimization and synthesis",
    "Cell-free systems",
    "Biosensors",
    "Chassis organisms",
    "Biosafety, biocontainment, and biosecurity",
    "Modeling and characterization of genetic circuits",
  ],
  recommended: [
    res("Synthetic Biology: A Primer", "Baldwin, Bayer, Dickinson et al.", { type: "textbook", free: false }),
  ],
  supplementary: [
    res("An Introduction to Systems Biology", "Uri Alon", { type: "textbook" }),
    res("Genetic circuit design automation (Cello)", "Christopher Voigt lab", { type: "reference" }),
    res("Foundations for Engineering Biology", "Drew Endy", { type: "reference" }),
  ],
});
