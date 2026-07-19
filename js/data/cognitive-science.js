/* ============================================================================
 *  COGNITIVE SCIENCE
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/cognitivescience/<id>.js; the
 *  `detail: true` flag tells the renderer to fetch it. Cognitive science is the
 *  interdisciplinary study of the mind. It is deliberately a hub: it builds on
 *  psychology (cognitive, developmental, social, perception, memory, emotion),
 *  biology (neuroscience, cognitive neuroscience, animal behavior), linguistics
 *  (psycholinguistics), computer science (AI, machine/deep learning) and
 *  philosophy (philosophy of mind) rather than repeating them.
 * ==========================================================================*/
registerCourses([

  // --- Foundations & approaches ------------------------------------------
  { id: "foundations-cognitive-science", title: "Foundations of Cognitive Science", field: "cognitivescience", detail: true, requires: ["cognitive-psychology"] },
  { id: "computational-cognition", title: "Computational Theories of Cognition", field: "cognitivescience", detail: true, requires: ["foundations-cognitive-science", "artificial-intelligence"] },
  { id: "cognitive-modeling", title: "Cognitive Modeling & Architectures", field: "cognitivescience", detail: true, requires: ["computational-cognition"] },
  { id: "embodied-cognition", title: "Embodied & Situated Cognition", field: "cognitivescience", detail: true, requires: ["foundations-cognitive-science"] },
  { id: "consciousness", title: "Consciousness Studies", field: "cognitivescience", detail: true, requires: ["foundations-cognitive-science", "philosophy-of-mind"] },

  // --- Core cognitive domains --------------------------------------------
  { id: "perception-attention", title: "Perception & Attention", field: "cognitivescience", detail: true, requires: ["foundations-cognitive-science", "sensation-perception"] },
  { id: "memory-cognition", title: "Memory & Learning", field: "cognitivescience", detail: true, requires: ["foundations-cognitive-science", "human-memory"] },
  { id: "language-cognition", title: "Language & Cognition", field: "cognitivescience", detail: true, requires: ["foundations-cognitive-science", "psycholinguistics"] },
  { id: "reasoning-decision-making", title: "Reasoning & Decision Making", field: "cognitivescience", detail: true, requires: ["foundations-cognitive-science"] },
  { id: "concepts-knowledge-representation", title: "Concepts & Knowledge Representation", field: "cognitivescience", detail: true, requires: ["foundations-cognitive-science"] },
  { id: "cognitive-development", title: "Cognitive Development", field: "cognitivescience", detail: true, requires: ["foundations-cognitive-science", "developmental-psychology"] },
  { id: "social-cognition", title: "Social Cognition", field: "cognitivescience", detail: true, requires: ["foundations-cognitive-science", "social-psychology"] },
  { id: "spatial-cognition", title: "Spatial Cognition", field: "cognitivescience", detail: true, requires: ["foundations-cognitive-science"] },

  // --- Neural & computational --------------------------------------------
  { id: "neural-basis-cognition", title: "Neural Basis of Cognition", field: "cognitivescience", detail: true, requires: ["foundations-cognitive-science", "cognitive-neuroscience"] },
  { id: "connectionism", title: "Connectionism & Neural Networks", field: "cognitivescience", detail: true, requires: ["computational-cognition", "deep-learning"] },
  { id: "decision-neuroscience", title: "Decision Neuroscience", field: "cognitivescience", detail: true, requires: ["reasoning-decision-making", "neuroscience"] },

  // --- Applications & frontiers ------------------------------------------
  { id: "human-computer-interaction", title: "Human-Computer Interaction", field: "cognitivescience", detail: true, requires: ["foundations-cognitive-science"] },
  { id: "comparative-cognition", title: "Comparative & Animal Cognition", field: "cognitivescience", detail: true, requires: ["foundations-cognitive-science", "animal-behavior"] },
  { id: "affective-science", title: "Affective Science", field: "cognitivescience", detail: true, requires: ["foundations-cognitive-science", "emotion-motivation"] },
  { id: "cognition-artificial-intelligence", title: "Cognition & Artificial Intelligence", field: "cognitivescience", detail: true, requires: ["computational-cognition", "machine-learning"] },

]);
