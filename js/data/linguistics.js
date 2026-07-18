/* ============================================================================
 *  LINGUISTICS
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/linguistics/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Core & structural levels ------------------------------------------
  { id: "linguistics", title: "Introduction to Linguistics", field: "linguistics", detail: true, requires: [] },
  { id: "phonetics", title: "Phonetics", field: "linguistics", detail: true, requires: ["linguistics"] },
  { id: "phonology", title: "Phonology", field: "linguistics", detail: true, requires: ["phonetics"] },
  { id: "morphology", title: "Morphology", field: "linguistics", detail: true, requires: ["linguistics"] },
  { id: "syntax", title: "Syntax", field: "linguistics", detail: true, requires: ["linguistics"] },
  { id: "semantics", title: "Semantics", field: "linguistics", detail: true, requires: ["syntax", "logic-philosophy"] },
  { id: "pragmatics", title: "Pragmatics", field: "linguistics", detail: true, requires: ["semantics"] },

  // --- Meaning, logic & the lexicon --------------------------------------
  { id: "formal-semantics", title: "Formal Semantics", field: "linguistics", detail: true, requires: ["semantics", "mathematical-logic"] },
  { id: "lexicography", title: "Lexicology & Lexicography", field: "linguistics", detail: true, requires: ["morphology", "semantics"] },
  { id: "semiotics", title: "Semiotics", field: "linguistics", detail: true, requires: ["linguistics", "philosophy-of-language"] },

  // --- Language, mind & brain --------------------------------------------
  { id: "psycholinguistics", title: "Psycholinguistics", field: "linguistics", detail: true, requires: ["linguistics", "psychology"] },
  { id: "neurolinguistics", title: "Neurolinguistics", field: "linguistics", detail: true, requires: ["psycholinguistics", "neuroscience"] },
  { id: "language-acquisition", title: "First Language Acquisition", field: "linguistics", detail: true, requires: ["psycholinguistics"] },
  { id: "second-language-acquisition", title: "Second Language Acquisition", field: "linguistics", detail: true, requires: ["language-acquisition"] },
  { id: "cognitive-linguistics", title: "Cognitive Linguistics", field: "linguistics", detail: true, requires: ["semantics", "psycholinguistics"] },
  { id: "language-evolution", title: "Origins & Evolution of Language", field: "linguistics", detail: true, requires: ["psycholinguistics", "evolutionary-biology"] },

  // --- Language in society ------------------------------------------------
  { id: "sociolinguistics", title: "Sociolinguistics", field: "linguistics", detail: true, requires: ["linguistics"] },
  { id: "discourse-analysis", title: "Discourse Analysis", field: "linguistics", detail: true, requires: ["pragmatics", "sociolinguistics"] },

  // --- Historical & comparative ------------------------------------------
  { id: "historical-linguistics", title: "Historical Linguistics", field: "linguistics", detail: true, requires: ["phonology", "morphology"] },
  { id: "linguistic-typology", title: "Linguistic Typology", field: "linguistics", detail: true, requires: ["morphology", "syntax"] },

  // --- Computational, empirical & applied --------------------------------
  { id: "computational-linguistics", title: "Computational Linguistics", field: "linguistics", detail: true, requires: ["linguistics", "natural-language-processing"] },
  { id: "corpus-linguistics", title: "Corpus Linguistics", field: "linguistics", detail: true, requires: ["linguistics", "statistics"] },
  { id: "language-documentation", title: "Language Documentation & Fieldwork", field: "linguistics", detail: true, requires: ["phonetics", "morphology"] },
  { id: "sign-language-linguistics", title: "Sign Language Linguistics", field: "linguistics", detail: true, requires: ["phonology", "syntax"] },

]);
