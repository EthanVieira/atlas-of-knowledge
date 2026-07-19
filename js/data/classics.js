/* ============================================================================
 *  CLASSICS
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/classics/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it. Classics is the study of the ancient
 *  Greek and Roman world — its languages, literature, history, and material
 *  culture. It cross-links to history (ancient history), literary studies,
 *  anthropology (archaeology), the arts and law rather than repeating them.
 * ==========================================================================*/
registerCourses([

  // --- Languages & philology ---------------------------------------------
  { id: "intro-classical-studies", title: "Introduction to Classical Studies", field: "classics", detail: true, requires: [] },
  { id: "ancient-greek-language", title: "Ancient Greek", field: "classics", detail: true, requires: ["intro-classical-studies"] },
  { id: "latin-language", title: "Latin", field: "classics", detail: true, requires: ["intro-classical-studies"] },
  { id: "classical-philology", title: "Classical Philology & Textual Criticism", field: "classics", detail: true, requires: ["ancient-greek-language", "latin-language"] },
  { id: "papyrology-epigraphy", title: "Papyrology & Epigraphy", field: "classics", detail: true, requires: ["classical-philology"] },

  // --- Literature ---------------------------------------------------------
  { id: "greek-literature", title: "Greek Literature", field: "classics", detail: true, requires: ["ancient-greek-language"] },
  { id: "latin-literature", title: "Latin Literature", field: "classics", detail: true, requires: ["latin-language"] },
  { id: "epic-poetry", title: "Classical Epic", field: "classics", detail: true, requires: ["greek-literature", "poetry-poetics"] },
  { id: "greek-tragedy-drama", title: "Greek Tragedy & Drama", field: "classics", detail: true, requires: ["greek-literature", "theatre-studies"] },
  { id: "ancient-rhetoric", title: "Ancient Rhetoric & Oratory", field: "classics", detail: true, requires: ["latin-literature"] },

  // --- History & material culture ----------------------------------------
  { id: "greek-history", title: "Ancient Greek History", field: "classics", detail: true, requires: ["intro-classical-studies", "ancient-history"] },
  { id: "roman-history", title: "Roman History", field: "classics", detail: true, requires: ["intro-classical-studies", "ancient-history"] },
  { id: "hellenistic-world", title: "The Hellenistic World", field: "classics", detail: true, requires: ["greek-history"] },
  { id: "late-antiquity", title: "Late Antiquity", field: "classics", detail: true, requires: ["roman-history"] },
  { id: "classical-archaeology", title: "Classical Archaeology", field: "classics", detail: true, requires: ["intro-classical-studies", "archaeology"] },
  { id: "roman-law", title: "Roman Law", field: "classics", detail: true, requires: ["roman-history", "legal-history"] },

  // --- Culture, thought & reception --------------------------------------
  { id: "classical-mythology", title: "Classical Mythology", field: "classics", detail: true, requires: ["intro-classical-studies"] },
  { id: "greek-roman-religion", title: "Greek & Roman Religion", field: "classics", detail: true, requires: ["intro-classical-studies"] },
  { id: "classical-art-architecture", title: "Greek & Roman Art & Architecture", field: "classics", detail: true, requires: ["intro-classical-studies", "art-history"] },
  { id: "classical-reception", title: "Classical Reception & Tradition", field: "classics", detail: true, requires: ["intro-classical-studies", "comparative-literature"] },

]);
