/* ============================================================================
 *  MEDICINE
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/medicine/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it. Prerequisites reach into biology,
 *  chemistry, mathematics and beyond — medicine sits atop the sciences.
 * ==========================================================================*/
registerCourses([

  // --- Preclinical: structure & function ---------------------------------
  { id: "human-anatomy", title: "Human Anatomy", field: "medicine", detail: true, requires: ["introductory-biology"] },
  { id: "histology", title: "Histology", field: "medicine", detail: true, requires: ["human-anatomy", "cell-biology"] },
  { id: "embryology", title: "Embryology & Human Development", field: "medicine", detail: true, requires: ["human-anatomy", "developmental-biology"] },
  { id: "medical-physiology", title: "Medical Physiology", field: "medicine", detail: true, requires: ["physiology", "human-anatomy"] },
  { id: "neuroanatomy", title: "Neuroanatomy & Clinical Neuroscience", field: "medicine", detail: true, requires: ["neuroscience", "human-anatomy"] },

  // --- Preclinical: molecular & mechanism --------------------------------
  { id: "medical-biochemistry", title: "Medical Biochemistry & Nutrition", field: "medicine", detail: true, requires: ["biochemistry"] },
  { id: "medical-genetics", title: "Medical & Clinical Genetics", field: "medicine", detail: true, requires: ["genetics"] },
  { id: "medical-microbiology", title: "Medical Microbiology", field: "medicine", detail: true, requires: ["microbiology", "immunology"] },
  { id: "general-pathology", title: "General Pathology", field: "medicine", detail: true, requires: ["histology", "medical-physiology"] },
  { id: "pathophysiology", title: "Systemic Pathology & Pathophysiology", field: "medicine", detail: true, requires: ["general-pathology"] },
  { id: "pharmacology", title: "Medical Pharmacology", field: "medicine", detail: true, requires: ["medical-physiology", "medical-biochemistry"] },

  // --- Clinical foundations & population health --------------------------
  { id: "clinical-skills", title: "Clinical Medicine & Physical Diagnosis", field: "medicine", detail: true, requires: ["medical-physiology"] },
  { id: "medical-ethics", title: "Medical Ethics & Professionalism", field: "medicine", detail: true, requires: ["applied-ethics"] },
  { id: "epidemiology", title: "Epidemiology & Biostatistics", field: "medicine", detail: true, requires: ["statistics"] },
  { id: "evidence-based-medicine", title: "Evidence-Based Medicine", field: "medicine", detail: true, requires: ["epidemiology"] },
  { id: "public-health", title: "Public Health & Preventive Medicine", field: "medicine", detail: true, requires: ["epidemiology", "sociology"] },

  // --- Diagnostics -------------------------------------------------------
  { id: "radiology", title: "Diagnostic Radiology & Imaging", field: "medicine", detail: true, requires: ["general-pathology"] },
  { id: "laboratory-medicine", title: "Laboratory Medicine & Clinical Pathology", field: "medicine", detail: true, requires: ["general-pathology", "medical-microbiology"] },

  // --- Clinical specialties ----------------------------------------------
  { id: "internal-medicine", title: "Internal Medicine", field: "medicine", detail: true, requires: ["pathophysiology", "pharmacology", "clinical-skills"] },
  { id: "surgery", title: "Surgery", field: "medicine", detail: true, requires: ["clinical-skills", "pathophysiology"] },
  { id: "pediatrics", title: "Pediatrics", field: "medicine", detail: true, requires: ["internal-medicine", "embryology"] },
  { id: "obstetrics-gynecology", title: "Obstetrics & Gynecology", field: "medicine", detail: true, requires: ["internal-medicine", "embryology"] },
  { id: "psychiatry", title: "Psychiatry", field: "medicine", detail: true, requires: ["clinical-skills", "abnormal-psychology"] },
  { id: "neurology", title: "Neurology", field: "medicine", detail: true, requires: ["neuroanatomy", "internal-medicine"] },
  { id: "emergency-medicine", title: "Emergency Medicine", field: "medicine", detail: true, requires: ["internal-medicine", "surgery"] },
  { id: "family-medicine", title: "Family Medicine & Primary Care", field: "medicine", detail: true, requires: ["pediatrics"] },
  { id: "anesthesiology", title: "Anesthesiology", field: "medicine", detail: true, requires: ["pharmacology", "surgery"] },
  { id: "infectious-disease", title: "Infectious Diseases", field: "medicine", detail: true, requires: ["internal-medicine", "medical-microbiology"] },
  { id: "oncology", title: "Oncology", field: "medicine", detail: true, requires: ["internal-medicine", "cancer-biology"] },

  { id: "ophthalmology", title: "Ophthalmology", field: "medicine", detail: true, requires: ["clinical-skills", "pathophysiology"] },
  { id: "dermatology", title: "Dermatology", field: "medicine", detail: true, requires: ["clinical-skills", "pathophysiology"] },
  { id: "otolaryngology", title: "Otolaryngology (ENT)", field: "medicine", detail: true, requires: ["clinical-skills", "pathophysiology"] },
]);
