/* ============================================================================
 *  MEDIA & COMMUNICATION
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/communication/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it. Communication is a social science with
 *  three branches — communication studies, journalism, and media/cultural
 *  studies — that build on sociology, linguistics (semiotics, discourse),
 *  psychology, political science and business rather than repeating them.
 * ==========================================================================*/
registerCourses([

  // --- Foundations & theory ----------------------------------------------
  { id: "intro-communication", title: "Introduction to Communication", field: "communication", detail: true, requires: [] },
  { id: "communication-theory", title: "Communication Theory", field: "communication", detail: true, requires: ["intro-communication"] },
  { id: "media-theory", title: "Media & Society", field: "communication", detail: true, requires: ["intro-communication"] },
  { id: "communication-research-methods", title: "Communication Research Methods", field: "communication", detail: true, requires: ["intro-communication", "statistics"] },
  { id: "rhetoric", title: "Rhetoric & Persuasion", field: "communication", detail: true, requires: ["intro-communication"] },

  // --- Interpersonal & organizational ------------------------------------
  { id: "interpersonal-communication", title: "Interpersonal Communication", field: "communication", detail: true, requires: ["communication-theory"] },
  { id: "organizational-communication", title: "Organizational Communication", field: "communication", detail: true, requires: ["communication-theory"] },
  { id: "intercultural-communication", title: "Intercultural Communication", field: "communication", detail: true, requires: ["communication-theory", "cultural-sociology"] },

  // --- Mass media & effects ----------------------------------------------
  { id: "mass-communication", title: "Mass Communication & Media Effects", field: "communication", detail: true, requires: ["communication-theory", "social-psychology"] },
  { id: "political-communication", title: "Political Communication", field: "communication", detail: true, requires: ["mass-communication", "political-behavior"] },

  // --- Journalism ---------------------------------------------------------
  { id: "journalism", title: "News Reporting & Writing", field: "communication", detail: true, requires: ["intro-communication"] },
  { id: "investigative-journalism", title: "Investigative Journalism", field: "communication", detail: true, requires: ["journalism"] },
  { id: "digital-journalism", title: "Digital & Data Journalism", field: "communication", detail: true, requires: ["journalism", "statistics"] },
  { id: "media-law-ethics", title: "Media Law & Ethics", field: "communication", detail: true, requires: ["journalism"] },
  { id: "broadcast-journalism", title: "Broadcast & Multimedia Journalism", field: "communication", detail: true, requires: ["journalism"] },

  // --- Media & cultural studies ------------------------------------------
  { id: "media-studies", title: "Media Studies", field: "communication", detail: true, requires: ["media-theory", "semiotics"] },
  { id: "cultural-studies", title: "Cultural Studies", field: "communication", detail: true, requires: ["media-studies", "cultural-sociology"] },
  { id: "film-television-studies", title: "Film & Television Studies", field: "communication", detail: true, requires: ["media-studies"] },
  { id: "digital-media-society", title: "Digital Media & Society", field: "communication", detail: true, requires: ["media-theory"] },

  // --- Strategic communication -------------------------------------------
  { id: "public-relations", title: "Public Relations", field: "communication", detail: true, requires: ["communication-theory"] },
  { id: "advertising", title: "Advertising", field: "communication", detail: true, requires: ["communication-theory", "marketing"] },
  { id: "strategic-communication", title: "Strategic & Integrated Communication", field: "communication", detail: true, requires: ["public-relations", "advertising"] },

]);
