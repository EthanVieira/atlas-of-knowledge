/* ============================================================================
 *  SOCIOLOGY
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/sociology/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Foundations & methods ---------------------------------------------
  { id: "sociology", title: "Introduction to Sociology", field: "sociology", detail: true, requires: [] },
  { id: "sociological-theory", title: "Sociological Theory", field: "sociology", detail: true, requires: ["sociology"] },
  { id: "social-research-methods", title: "Social Research Methods", field: "sociology", detail: true, requires: ["sociology", "statistics"] },
  { id: "social-network-analysis", title: "Social Network Analysis", field: "sociology", detail: true, requires: ["social-research-methods", "graph-theory"] },
  { id: "demography", title: "Demography", field: "sociology", detail: true, requires: ["social-research-methods"] },
  { id: "computational-social-science", title: "Computational Social Science", field: "sociology", detail: true, requires: ["social-network-analysis", "machine-learning"] },

  // --- Stratification & difference ---------------------------------------
  { id: "social-stratification", title: "Social Stratification", field: "sociology", detail: true, requires: ["sociological-theory"] },
  { id: "race-ethnicity-studies", title: "Race & Ethnicity", field: "sociology", detail: true, requires: ["social-stratification"] },
  { id: "gender-sociology", title: "Gender & Sexuality Studies", field: "sociology", detail: true, requires: ["social-stratification"] },
  { id: "sociology-of-education", title: "Sociology of Education", field: "sociology", detail: true, requires: ["social-stratification"] },
  { id: "criminology", title: "Criminology", field: "sociology", detail: true, requires: ["sociology"] },
  { id: "medical-sociology", title: "Medical Sociology", field: "sociology", detail: true, requires: ["sociology"] },
  { id: "family-sociology", title: "Sociology of the Family", field: "sociology", detail: true, requires: ["sociology"] },

  // --- Institutions, culture & change ------------------------------------
  { id: "economic-sociology", title: "Economic Sociology", field: "sociology", detail: true, requires: ["sociology", "microeconomics"] },
  { id: "work-organizations", title: "Work & Organizations", field: "sociology", detail: true, requires: ["economic-sociology"] },
  { id: "political-sociology", title: "Political Sociology", field: "sociology", detail: true, requires: ["sociological-theory", "political-science"] },
  { id: "social-movements", title: "Social Movements & Collective Action", field: "sociology", detail: true, requires: ["political-sociology"] },
  { id: "cultural-sociology", title: "Cultural Sociology", field: "sociology", detail: true, requires: ["sociological-theory"] },
  { id: "urban-sociology", title: "Urban Sociology", field: "sociology", detail: true, requires: ["sociology"] },
  { id: "sociology-of-religion", title: "Sociology of Religion", field: "sociology", detail: true, requires: ["sociology", "religious-studies"] },
  { id: "environmental-sociology", title: "Environmental Sociology", field: "sociology", detail: true, requires: ["sociological-theory"] },
  { id: "globalization-studies", title: "Globalization", field: "sociology", detail: true, requires: ["sociological-theory", "economic-sociology"] },

]);
