registerDetail({
  long:
    "Neuroimaging & Neural Data Methods studies the techniques used to observe the living brain and to analyze the data they produce—the methods that have transformed neuroscience by making the human brain, and the activity of neurons, observable. " +
    "Building on introductory neuroscience and statistics, it develops both how the major methods work and, crucially, how to analyze and interpret the complex, high-dimensional data they generate. " +
    "The course begins with the range of methods and the fundamental trade-offs among them in spatial resolution, temporal resolution, and invasiveness—the reason no single method suffices. " +
    "It develops the major human neuroimaging methods: structural imaging (MRI) of brain anatomy, and functional imaging—above all functional MRI, its basis in the blood-oxygen-level-dependent signal, and its power and its serious limitations—along with the electrophysiological methods (EEG and MEG) that trade spatial for temporal precision, and diffusion imaging of white-matter connections. " +
    "The methods that record neurons directly—from single-unit recording to modern large-scale recording and calcium imaging—are treated. " +
    "The analytical heart of the course develops the statistics and computation of neural data: the processing pipeline for imaging data, the statistical modeling of brain activity and the crucial multiple-comparisons problem, and modern approaches including multivariate pattern analysis, functional connectivity, and machine learning applied to neural data. " +
    "The course confronts the pitfalls—the reproducibility problems and the dangers of overinterpreting brain images—and the principles of rigorous, reproducible neuroscience. " +
    "The course gives the methodological literacy to conduct and critically evaluate the study of the brain.",
  topics: [
    "The range of neuroimaging methods",
    "Spatial, temporal, and invasiveness trade-offs",
    "Structural MRI",
    "Functional MRI and the BOLD signal",
    "Limits of fMRI",
    "EEG and MEG",
    "Diffusion imaging and connectivity",
    "Single-unit and large-scale recording",
    "Calcium imaging",
    "Neuroimaging data pipelines",
    "Statistical modeling of brain data",
    "The multiple-comparisons problem",
    "Multivariate pattern analysis",
    "Machine learning for neural data",
    "Reproducibility in neuroscience",
  ],
  recommended: [
    res("Functional Magnetic Resonance Imaging", "Scott A. Huettel, Allen W. Song & Gregory McCarthy", { type: "textbook" }),
    res("Handbook of Functional MRI Data Analysis", "Russell A. Poldrack, Jeanette A. Mumford & Thomas E. Nichols", { type: "textbook" }),
  ],
  supplementary: [
    res("Introduction to Neuroimaging Analysis", "Mark Jenkinson & Michael Chappell", { type: "reference" }),
    res("Analyzing Neural Time Series Data: Theory and Practice", "Mike X Cohen", { type: "reference" }),
  ],
});
