/* ============================================================================
 *  MILITARY SCIENCE
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/militaryscience/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it. Military science is an applied,
 *  professional discipline — the study of the organization and use of armed
 *  force — that builds on political science (security & conflict studies),
 *  history (military history), economics (game theory, microeconomics),
 *  industrial engineering (operations research) and computer science
 *  (cryptography) rather than repeating them.
 * ==========================================================================*/
registerCourses([

  // --- Foundations --------------------------------------------------------
  { id: "intro-military-science", title: "Foundations of Military Science", field: "militaryscience", detail: true, requires: [] },
  { id: "military-theory", title: "Theory & Philosophy of War", field: "militaryscience", detail: true, requires: ["intro-military-science"] },

  // --- Strategy & operations ---------------------------------------------
  { id: "strategic-studies", title: "Strategic Studies", field: "militaryscience", detail: true, requires: ["military-theory", "international-security"] },
  { id: "operational-art", title: "Operational Art & Campaign Planning", field: "militaryscience", detail: true, requires: ["military-theory", "military-history"] },
  { id: "tactics", title: "Tactics & Small-Unit Operations", field: "militaryscience", detail: true, requires: ["military-theory"] },
  { id: "deterrence-coercion", title: "Deterrence, Coercion & Game Theory", field: "militaryscience", detail: true, requires: ["strategic-studies", "game-theory"] },
  { id: "irregular-warfare", title: "Irregular Warfare & Counterinsurgency", field: "militaryscience", detail: true, requires: ["strategic-studies", "conflict-studies"] },

  // --- Domains of warfare -------------------------------------------------
  { id: "land-warfare", title: "Land Warfare", field: "militaryscience", detail: true, requires: ["tactics"] },
  { id: "sea-power", title: "Naval Strategy & Sea Power", field: "militaryscience", detail: true, requires: ["strategic-studies"] },
  { id: "air-power", title: "Air & Space Power", field: "militaryscience", detail: true, requires: ["strategic-studies"] },
  { id: "cyber-warfare", title: "Cyber Warfare", field: "militaryscience", detail: true, requires: ["strategic-studies", "cryptography"] },

  // --- Functions & enablers ----------------------------------------------
  { id: "military-logistics", title: "Military Logistics & Sustainment", field: "militaryscience", detail: true, requires: ["intro-military-science", "operations-research"] },
  { id: "military-intelligence", title: "Military Intelligence & Reconnaissance", field: "militaryscience", detail: true, requires: ["intro-military-science"] },
  { id: "command-control", title: "Command, Control & C4ISR", field: "militaryscience", detail: true, requires: ["operational-art"] },
  { id: "military-leadership", title: "Military Leadership & Command", field: "militaryscience", detail: true, requires: ["intro-military-science"] },
  { id: "military-ethics-law", title: "Ethics & Law of Armed Conflict", field: "militaryscience", detail: true, requires: ["military-theory"] },

  // --- Technology, economics & society -----------------------------------
  { id: "defense-technology", title: "Weapons Systems & Defense Technology", field: "militaryscience", detail: true, requires: ["intro-military-science"] },
  { id: "defense-economics", title: "Defense Economics & Acquisition", field: "militaryscience", detail: true, requires: ["intro-military-science", "microeconomics"] },
  { id: "nuclear-strategy", title: "Nuclear Strategy & Arms Control", field: "militaryscience", detail: true, requires: ["deterrence-coercion"] },
  { id: "civil-military-relations", title: "Civil-Military Relations", field: "militaryscience", detail: true, requires: ["intro-military-science", "comparative-politics"] },

]);
