/* ============================================================================
 *  PHILOSOPHY
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/philosophy/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Foundations -------------------------------------------------------
  { id: "intro-philosophy", title: "Introduction to Philosophy", field: "philosophy", detail: true, requires: [] },
  { id: "logic-philosophy", title: "Philosophical Logic", field: "philosophy", detail: true, requires: ["intro-philosophy"] },

  // --- Core systematic branches -----------------------------------------
  { id: "epistemology", title: "Epistemology", field: "philosophy", detail: true, requires: ["intro-philosophy"] },
  { id: "metaphysics", title: "Metaphysics", field: "philosophy", detail: true, requires: ["intro-philosophy"] },
  { id: "ethics", title: "Ethics", field: "philosophy", detail: true, requires: ["intro-philosophy"] },
  { id: "metaethics", title: "Metaethics", field: "philosophy", detail: true, requires: ["ethics", "epistemology"] },
  { id: "applied-ethics", title: "Applied Ethics", field: "philosophy", detail: true, requires: ["ethics"] },
  { id: "aesthetics", title: "Aesthetics", field: "philosophy", detail: true, requires: ["intro-philosophy"] },
  { id: "political-philosophy", title: "Political Philosophy", field: "philosophy", detail: true, requires: ["ethics"] },
  { id: "philosophy-of-mind", title: "Philosophy of Mind", field: "philosophy", detail: true, requires: ["metaphysics", "epistemology"] },
  { id: "philosophy-of-language", title: "Philosophy of Language", field: "philosophy", detail: true, requires: ["logic-philosophy"] },

  // --- Philosophy of science & formal methods ----------------------------
  { id: "philosophy-of-science", title: "Philosophy of Science", field: "philosophy", detail: true, requires: ["epistemology", "logic-philosophy"] },
  { id: "philosophy-of-mathematics", title: "Philosophy of Mathematics", field: "philosophy", detail: true, requires: ["logic-philosophy", "mathematical-logic"] },
  { id: "philosophy-of-physics", title: "Philosophy of Physics", field: "philosophy", detail: true, requires: ["philosophy-of-science", "quantum-mechanics"] },
  { id: "philosophy-of-biology", title: "Philosophy of Biology", field: "philosophy", detail: true, requires: ["philosophy-of-science"] },
  { id: "philosophy-of-religion", title: "Philosophy of Religion", field: "philosophy", detail: true, requires: ["metaphysics", "epistemology"] },
  { id: "decision-theory", title: "Decision & Rational Choice Theory", field: "philosophy", detail: true, requires: ["logic-philosophy", "probability"] },
  { id: "formal-epistemology", title: "Formal Epistemology", field: "philosophy", detail: true, requires: ["epistemology", "probability"] },

  // --- Traditions & history of philosophy --------------------------------
  { id: "ancient-philosophy", title: "Ancient Philosophy", field: "philosophy", detail: true, requires: ["intro-philosophy"] },
  { id: "medieval-philosophy", title: "Medieval Philosophy", field: "philosophy", detail: true, requires: ["ancient-philosophy"] },
  { id: "modern-philosophy", title: "Early Modern Philosophy", field: "philosophy", detail: true, requires: ["ancient-philosophy"] },
  { id: "kant", title: "Kant & German Idealism", field: "philosophy", detail: true, requires: ["modern-philosophy"] },
  { id: "nineteenth-century-philosophy", title: "19th-Century Philosophy", field: "philosophy", detail: true, requires: ["kant"] },
  { id: "analytic-philosophy", title: "Analytic Philosophy", field: "philosophy", detail: true, requires: ["philosophy-of-language"] },
  { id: "continental-philosophy", title: "Continental Philosophy", field: "philosophy", detail: true, requires: ["nineteenth-century-philosophy"] },
  { id: "phenomenology", title: "Phenomenology & Existentialism", field: "philosophy", detail: true, requires: ["continental-philosophy"] },
  { id: "chinese-philosophy", title: "Chinese Philosophy", field: "philosophy", detail: true, requires: ["intro-philosophy"] },

  { id: "indian-philosophy", title: "Indian Philosophy", field: "philosophy", detail: true, requires: ["intro-philosophy"] },
  { id: "pragmatism", title: "Pragmatism", field: "philosophy", detail: true, requires: ["nineteenth-century-philosophy"] },
]);
