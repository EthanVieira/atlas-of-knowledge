registerDetail({
  long: "Computational Medicine applies data science, mechanistic modeling, and simulation to " +
    "clinical problems, turning the growing volume of health data into tools that improve diagnosis " +
    "and treatment. The course begins with the realities of clinical data and electronic health " +
    "records, including their noise, missingness, and biases, and develops the preprocessing and " +
    "phenotyping needed to define meaningful cohorts. Machine learning methods for diagnosis and " +
    "prognosis are introduced with careful attention to evaluation, calibration, and the risks of " +
    "overfitting and dataset shift. Medical image analysis and segmentation extend these ideas to " +
    "radiology and pathology, while patient-specific and mechanistic modeling brings physiological " +
    "simulation to bear on treatment planning. Predictive models of disease progression let " +
    "clinicians anticipate trajectories rather than react to events, and clinical decision support " +
    "systems package these predictions for use at the bedside. The course closes with the demanding " +
    "questions of validation, regulation, and deployment, where a model must prove itself safe, " +
    "fair, and reliable before it can guide real care.",
  topics: [
    "Clinical data and electronic health records",
    "Data preprocessing and cleaning",
    "Cohort definition and phenotyping",
    "Machine learning for diagnosis and prognosis",
    "Model evaluation and calibration",
    "Medical image analysis and segmentation",
    "Patient-specific and mechanistic modeling",
    "Physiological simulation for treatment planning",
    "Predictive models of disease progression",
    "Time-series and longitudinal modeling",
    "Clinical decision support",
    "Bias, fairness, and dataset shift",
    "Validation and deployment in the clinic",
    "Regulation of clinical software",
    "Interpretability and clinician trust",
  ],
  recommended: [
    res("Computational Medicine: Tools and Challenges", "Raimond L. Winslow, Natalia Trayanova, Donald Geman, and Michael I. Miller", { type: "textbook" }),
    res("Machine Learning for Healthcare (MIT 6.S897)", "David Sontag and Peter Szolovits", { type: "lectures", free: true, url: "https://ocw.mit.edu/courses/6-s897-machine-learning-for-healthcare-spring-2019/" }),
  ],
  supplementary: [
    res("Deep Medicine", "Eric Topol", { type: "reference" }),
    res("Secondary Analysis of Electronic Health Records", "MIT Critical Data", { type: "reference" }),
  ],
});
