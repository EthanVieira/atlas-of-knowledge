/* ============================================================================
 *  PSYCHOLOGY
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/psychology/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Core & methods ----------------------------------------------------
  { id: "psychology", title: "Introduction to Psychology", field: "psychology", detail: true, requires: [] },
  { id: "research-methods-psych", title: "Research Methods & Statistics", field: "psychology", detail: true, requires: ["psychology", "statistics"] },
  { id: "psychometrics", title: "Psychometrics", field: "psychology", detail: true, requires: ["research-methods-psych", "linear-algebra"] },

  // --- Cognitive ---------------------------------------------------------
  { id: "cognitive-psychology", title: "Cognitive Psychology", field: "psychology", detail: true, requires: ["psychology"] },
  { id: "sensation-perception", title: "Sensation & Perception", field: "psychology", detail: true, requires: ["biological-psychology"] },
  { id: "learning-behavior", title: "Learning & Behavior", field: "psychology", detail: true, requires: ["psychology"] },
  { id: "human-memory", title: "Human Memory", field: "psychology", detail: true, requires: ["cognitive-psychology"] },
  { id: "cognitive-neuroscience", title: "Cognitive Neuroscience", field: "psychology", detail: true, requires: ["cognitive-psychology", "biological-psychology"] },

  // --- Biological & individual differences -------------------------------
  { id: "biological-psychology", title: "Biological Psychology", field: "psychology", detail: true, requires: ["psychology"] },
  { id: "neuropsychology", title: "Neuropsychology", field: "psychology", detail: true, requires: ["biological-psychology", "neuroscience"] },
  { id: "behavioral-genetics-psych", title: "Behavioral Genetics", field: "psychology", detail: true, requires: ["biological-psychology", "genetics"] },
  { id: "evolutionary-psychology", title: "Evolutionary Psychology", field: "psychology", detail: true, requires: ["psychology", "evolutionary-biology"] },

  // --- Developmental, social & personality -------------------------------
  { id: "developmental-psychology", title: "Developmental Psychology", field: "psychology", detail: true, requires: ["psychology"] },
  { id: "social-psychology", title: "Social Psychology", field: "psychology", detail: true, requires: ["psychology"] },
  { id: "personality-psychology", title: "Personality Psychology", field: "psychology", detail: true, requires: ["psychology"] },
  { id: "emotion-motivation", title: "Emotion & Motivation", field: "psychology", detail: true, requires: ["psychology"] },

  // --- Clinical & counseling ---------------------------------------------
  { id: "abnormal-psychology", title: "Abnormal Psychology", field: "psychology", detail: true, requires: ["psychology"] },
  { id: "clinical-psychology", title: "Clinical Psychology", field: "psychology", detail: true, requires: ["abnormal-psychology", "research-methods-psych"] },
  { id: "counseling-psychology", title: "Counseling & Psychotherapy", field: "psychology", detail: true, requires: ["clinical-psychology"] },
  { id: "forensic-psychology", title: "Forensic Psychology", field: "psychology", detail: true, requires: ["abnormal-psychology"] },

  // --- Applied -----------------------------------------------------------
  { id: "health-psychology", title: "Health Psychology", field: "psychology", detail: true, requires: ["psychology"] },
  { id: "educational-psychology", title: "Educational Psychology", field: "psychology", detail: true, requires: ["developmental-psychology"] },
  { id: "io-psychology", title: "Industrial-Organizational Psychology", field: "psychology", detail: true, requires: ["social-psychology", "research-methods-psych"] },

]);
