/* ============================================================================
 *  EDUCATION
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/education/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it. Education is a social science: it
 *  builds on psychology (learning, development, educational psychology),
 *  sociology (sociology of education), and linguistics (language acquisition)
 *  rather than repeating them.
 * ==========================================================================*/
registerCourses([

  // --- Foundations --------------------------------------------------------
  { id: "foundations-of-education", title: "Foundations of Education", field: "education", detail: true, requires: [] },
  { id: "philosophy-of-education", title: "Philosophy of Education", field: "education", detail: true, requires: ["foundations-of-education"] },
  { id: "learning-theories", title: "Learning Theories", field: "education", detail: true, requires: ["educational-psychology"] },
  { id: "educational-research", title: "Educational Research Methods", field: "education", detail: true, requires: ["foundations-of-education", "statistics"] },

  // --- Curriculum & instruction ------------------------------------------
  { id: "curriculum-studies", title: "Curriculum Studies", field: "education", detail: true, requires: ["foundations-of-education"] },
  { id: "instructional-design", title: "Instructional Design", field: "education", detail: true, requires: ["learning-theories"] },
  { id: "pedagogy", title: "Pedagogy & Teaching Methods", field: "education", detail: true, requires: ["learning-theories"] },
  { id: "educational-assessment", title: "Educational Assessment & Measurement", field: "education", detail: true, requires: ["learning-theories", "statistics"] },
  { id: "classroom-management", title: "Classroom Management", field: "education", detail: true, requires: ["pedagogy"] },
  { id: "educational-technology", title: "Educational Technology", field: "education", detail: true, requires: ["instructional-design"] },

  // --- Learners & inclusion ----------------------------------------------
  { id: "special-education", title: "Special Education", field: "education", detail: true, requires: ["educational-psychology"] },
  { id: "early-childhood-education", title: "Early Childhood Education", field: "education", detail: true, requires: ["developmental-psychology"] },
  { id: "literacy-education", title: "Literacy Education", field: "education", detail: true, requires: ["pedagogy", "language-acquisition"] },
  { id: "bilingual-education", title: "Bilingual & Language Education", field: "education", detail: true, requires: ["pedagogy", "second-language-acquisition"] },
  { id: "multicultural-education", title: "Multicultural Education", field: "education", detail: true, requires: ["foundations-of-education", "sociology-of-education"] },

  // --- Levels & contexts -------------------------------------------------
  { id: "higher-education", title: "Higher Education Studies", field: "education", detail: true, requires: ["foundations-of-education"] },
  { id: "adult-education", title: "Adult Education & Lifelong Learning", field: "education", detail: true, requires: ["foundations-of-education"] },

  // --- Systems, policy & leadership --------------------------------------
  { id: "educational-leadership", title: "Educational Leadership & Administration", field: "education", detail: true, requires: ["foundations-of-education"] },
  { id: "education-policy", title: "Education Policy", field: "education", detail: true, requires: ["foundations-of-education", "sociology-of-education"] },
  { id: "comparative-education", title: "Comparative & International Education", field: "education", detail: true, requires: ["foundations-of-education"] },
  { id: "economics-of-education", title: "Economics of Education", field: "education", detail: true, requires: ["foundations-of-education", "microeconomics"] },

  // --- Subject-area teaching ---------------------------------------------
  { id: "mathematics-education", title: "Mathematics Education", field: "education", detail: true, requires: ["pedagogy"] },
  { id: "science-education", title: "Science Education", field: "education", detail: true, requires: ["pedagogy"] },

]);
