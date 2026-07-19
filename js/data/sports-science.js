/* ============================================================================
 *  SPORTS SCIENCE
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/sportsscience/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it. Sports science is an applied health
 *  science: it builds on medicine (anatomy, pathophysiology, epidemiology),
 *  biology (physiology, neuroscience), biomedical engineering (biomechanics),
 *  culinary (nutrition), psychology and sociology rather than repeating them.
 * ==========================================================================*/
registerCourses([

  // --- Foundations --------------------------------------------------------
  { id: "intro-sports-science", title: "Introduction to Sports Science", field: "sportsscience", detail: true, requires: [] },
  { id: "functional-anatomy", title: "Functional Anatomy & Kinesiology", field: "sportsscience", detail: true, requires: ["intro-sports-science", "human-anatomy"] },
  { id: "exercise-physiology", title: "Exercise Physiology", field: "sportsscience", detail: true, requires: ["intro-sports-science", "physiology"] },
  { id: "sport-biomechanics", title: "Sport Biomechanics", field: "sportsscience", detail: true, requires: ["functional-anatomy", "biomechanics"] },
  { id: "motor-control-learning", title: "Motor Control & Learning", field: "sportsscience", detail: true, requires: ["intro-sports-science", "neuroscience"] },
  { id: "sports-research-methods", title: "Research Methods in Sport & Exercise", field: "sportsscience", detail: true, requires: ["intro-sports-science", "statistics"] },

  // --- Training & performance --------------------------------------------
  { id: "strength-conditioning", title: "Strength & Conditioning", field: "sportsscience", detail: true, requires: ["exercise-physiology", "sport-biomechanics"] },
  { id: "sports-nutrition", title: "Sports Nutrition", field: "sportsscience", detail: true, requires: ["exercise-physiology", "nutrition"] },
  { id: "sport-psychology", title: "Sport & Exercise Psychology", field: "sportsscience", detail: true, requires: ["intro-sports-science", "psychology"] },
  { id: "skill-acquisition", title: "Skill Acquisition", field: "sportsscience", detail: true, requires: ["motor-control-learning"] },
  { id: "performance-analysis", title: "Performance Analysis", field: "sportsscience", detail: true, requires: ["sports-research-methods", "sport-biomechanics"] },

  // --- Health, clinical & rehabilitation ---------------------------------
  { id: "sports-medicine", title: "Sports Medicine", field: "sportsscience", detail: true, requires: ["exercise-physiology", "functional-anatomy"] },
  { id: "sports-injury-rehabilitation", title: "Sports Injury & Rehabilitation", field: "sportsscience", detail: true, requires: ["sports-medicine"] },
  { id: "clinical-exercise-physiology", title: "Clinical Exercise Physiology", field: "sportsscience", detail: true, requires: ["exercise-physiology", "pathophysiology"] },
  { id: "physical-activity-health", title: "Physical Activity & Public Health", field: "sportsscience", detail: true, requires: ["exercise-physiology", "epidemiology"] },

  // --- Applied & professional --------------------------------------------
  { id: "coaching-science", title: "Coaching Science", field: "sportsscience", detail: true, requires: ["skill-acquisition", "sport-psychology"] },
  { id: "motor-development", title: "Motor Development", field: "sportsscience", detail: true, requires: ["motor-control-learning", "developmental-psychology"] },
  { id: "adapted-physical-activity", title: "Adapted Physical Activity", field: "sportsscience", detail: true, requires: ["exercise-physiology"] },
  { id: "sport-technology", title: "Sport Technology & Wearables", field: "sportsscience", detail: true, requires: ["performance-analysis"] },
  { id: "sport-sociology", title: "Sociology of Sport", field: "sportsscience", detail: true, requires: ["intro-sports-science", "sociology"] },

  { id: "sport-management", title: "Sport Management & Business", field: "sportsscience", detail: true, requires: ["intro-sports-science", "management-principles"] },
]);
