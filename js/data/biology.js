/* ============================================================================
 *  BIOLOGY
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/biology/<id>.js; the `detail: true` flag
 *  tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Foundations ---
  { id: "introductory-biology", title: "Introductory Biology", field: "biology", detail: true, requires: [] },
  { id: "cell-biology", title: "Cell Biology", field: "biology", detail: true, requires: ["introductory-biology"] },
  { id: "genetics", title: "Genetics", field: "biology", detail: true, requires: ["cell-biology"] },
  { id: "molecular-biology", title: "Molecular Biology", field: "biology", detail: true, requires: ["cell-biology", "organic-chemistry"] },
  { id: "microbiology", title: "Microbiology", field: "biology", detail: true, requires: ["cell-biology", "genetics"] },

  // --- Molecular & cellular branch ---
  { id: "cell-signaling", title: "Cell Signaling", field: "biology", detail: true, requires: ["cell-biology", "biochemistry"] },
  { id: "developmental-biology", title: "Developmental Biology", field: "biology", detail: true, requires: ["cell-biology", "genetics", "molecular-biology"] },
  { id: "stem-cell-biology", title: "Stem Cell Biology", field: "biology", detail: true, requires: ["developmental-biology"] },
  { id: "epigenetics", title: "Epigenetics", field: "biology", detail: true, requires: ["molecular-biology", "genetics"] },
  { id: "immunology", title: "Immunology", field: "biology", detail: true, requires: ["cell-biology", "molecular-biology"] },
  { id: "virology", title: "Virology", field: "biology", detail: true, requires: ["microbiology", "molecular-biology"] },
  { id: "cancer-biology", title: "Cancer Biology", field: "biology", detail: true, requires: ["cell-biology", "genetics", "cell-signaling"] },
  { id: "structural-biology", title: "Structural Biology", field: "biology", detail: true, requires: ["biochemistry"] },

  // --- Physiology & neuroscience ---
  { id: "physiology", title: "Physiology", field: "biology", detail: true, requires: ["cell-biology", "biochemistry"] },
  { id: "endocrinology", title: "Endocrinology", field: "biology", detail: true, requires: ["physiology", "cell-signaling"] },
  { id: "neuroscience", title: "Neuroscience", field: "biology", detail: true, requires: ["cell-biology", "physiology"] },
  { id: "systems-neuroscience", title: "Systems Neuroscience", field: "biology", detail: true, requires: ["neuroscience"] },
  { id: "computational-neuroscience", title: "Computational Neuroscience", field: "biology", detail: true, requires: ["neuroscience", "ode", "probability"] },
  { id: "cognitive-neuroscience", title: "Cognitive Neuroscience", field: "biology", detail: true, requires: ["neuroscience", "psychology"] },

  // --- Evolution & ecology ---
  { id: "evolutionary-biology", title: "Evolutionary Biology", field: "biology", detail: true, requires: ["genetics"] },
  { id: "population-genetics", title: "Population Genetics", field: "biology", detail: true, requires: ["genetics", "probability", "statistics"] },
  { id: "quantitative-genetics", title: "Quantitative Genetics", field: "biology", detail: true, requires: ["population-genetics", "statistics"] },
  { id: "phylogenetics", title: "Phylogenetics", field: "biology", detail: true, requires: ["evolutionary-biology", "statistics", "algorithms"] },
  { id: "molecular-evolution", title: "Molecular Evolution", field: "biology", detail: true, requires: ["evolutionary-biology", "phylogenetics", "molecular-biology"] },
  { id: "ecology", title: "Ecology", field: "biology", detail: true, requires: ["evolutionary-biology", "statistics"] },
  { id: "behavioral-ecology", title: "Behavioral Ecology", field: "biology", detail: true, requires: ["ecology", "evolutionary-biology"] },
  { id: "evo-devo", title: "Evolutionary Developmental Biology", field: "biology", detail: true, requires: ["evolutionary-biology", "developmental-biology"] },

  // --- Quantitative & systems ---
  { id: "biophysics", title: "Biophysics", field: "biology", detail: true, requires: ["cell-biology", "thermodynamics"] },
  { id: "systems-biology", title: "Systems Biology", field: "biology", detail: true, requires: ["molecular-biology", "ode"] },
  { id: "genomics", title: "Genomics", field: "biology", detail: true, requires: ["genetics", "molecular-biology", "bioinformatics"] },
  { id: "single-cell-genomics", title: "Single-Cell Genomics", field: "biology", detail: true, requires: ["genomics", "machine-learning"] },
  { id: "computational-biology", title: "Computational Biology", field: "biology", detail: true, requires: ["bioinformatics", "machine-learning"] },
  { id: "synthetic-biology", title: "Synthetic Biology", field: "biology", detail: true, requires: ["molecular-biology", "systems-biology", "genetics"] },
  { id: "microbiome", title: "Microbiome Science", field: "biology", detail: true, requires: ["microbiology", "genomics"] },

]);
