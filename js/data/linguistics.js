/* ============================================================================
 *  LINGUISTICS
 * ==========================================================================*/
registerCourses([

  { id: "linguistics", title: "Introduction to Linguistics", field: "linguistics",
    desc: "The scientific study of language: its structure, use and diversity.",
    requires: [],
    topics: ["What is language?", "Levels of structure", "Language universals", "Descriptive vs prescriptive", "Language & the mind", "The world's languages"],
    free: [R("Introduction to Linguistics", "MIT OCW 24.900", "https://ocw.mit.edu/courses/24-900-introduction-to-linguistics-spring-2022/")],
    paid: [R("Language Files", "Ohio State University Press")] },

  { id: "phonetics", title: "Phonetics", field: "linguistics",
    desc: "The physical sounds of speech — how they are produced, transmitted and perceived.",
    requires: ["linguistics"],
    topics: ["Articulatory phonetics", "The IPA", "Acoustic phonetics", "Auditory perception", "Prosody", "Speech analysis"],
    free: [R("Phonetics notes", "Various")],
    paid: [R("A Course in Phonetics", "Peter Ladefoged")] },

  { id: "phonology", title: "Phonology", field: "linguistics",
    desc: "The sound systems of languages — how sounds pattern and function.",
    requires: ["phonetics"],
    topics: ["Phonemes & allophones", "Distinctive features", "Phonological rules", "Syllable structure", "Stress & tone", "Optimality theory"],
    free: [R("Phonology notes", "Various")],
    paid: [R("Introducing Phonology", "David Odden")] },

  { id: "morphology", title: "Morphology", field: "linguistics",
    desc: "The structure of words — how meaningful units combine.",
    requires: ["linguistics"],
    topics: ["Morphemes", "Inflection & derivation", "Word formation", "Compounding", "Morphological typology", "Productivity"],
    free: [R("Morphology notes", "Various")],
    paid: [R("What is Morphology?", "Aronoff & Fudeman")] },

  { id: "syntax", title: "Syntax", field: "linguistics",
    desc: "The structure of sentences — the rules that combine words into phrases and clauses.",
    requires: ["linguistics"],
    topics: ["Constituency", "Phrase structure", "The X-bar schema", "Movement & transformations", "Government & binding", "Minimalism"],
    free: [R("Syntax notes", "Various")],
    paid: [R("Syntax: A Generative Introduction", "Andrew Carnie")] },

  { id: "semantics", title: "Semantics", field: "linguistics",
    desc: "Linguistic meaning — how words and sentences denote and combine to convey truth conditions.",
    requires: ["syntax", "logic-philosophy"],
    topics: ["Truth-conditional semantics", "Compositionality", "Quantification", "Lexical semantics", "Tense & aspect", "Type theory for meaning"],
    free: [R("Semantics notes", "Various")],
    paid: [R("Semantics in Generative Grammar", "Heim & Kratzer")] },

  { id: "pragmatics", title: "Pragmatics", field: "linguistics",
    desc: "Meaning in context — implicature, presupposition and language in use.",
    requires: ["semantics"],
    topics: ["Speech acts", "Gricean implicature", "Presupposition", "Deixis", "Politeness", "Discourse & context"],
    free: [R("Pragmatics notes", "Various")],
    paid: [R("Pragmatics", "Stephen Levinson")] },

  { id: "historical-linguistics", title: "Historical Linguistics", field: "linguistics",
    desc: "How languages change over time and how they are related.",
    requires: ["phonology", "morphology"],
    topics: ["Sound change", "The comparative method", "Language families", "Reconstruction", "Semantic change", "Language contact"],
    free: [R("Historical linguistics notes", "Various")],
    paid: [R("Historical Linguistics", "Lyle Campbell")] },

  { id: "sociolinguistics", title: "Sociolinguistics", field: "linguistics",
    desc: "Language in its social context — variation, dialects and change in progress.",
    requires: ["linguistics"],
    topics: ["Language variation", "Dialects & registers", "Language & identity", "Code-switching", "Language attitudes", "Language policy"],
    free: [R("Sociolinguistics notes", "Various")],
    paid: [R("An Introduction to Sociolinguistics", "Ronald Wardhaugh")] },

  { id: "psycholinguistics", title: "Psycholinguistics", field: "linguistics",
    desc: "The cognitive processes of producing, comprehending and acquiring language.",
    requires: ["linguistics", "psychology"],
    topics: ["Language acquisition", "Sentence processing", "Word recognition", "Speech production", "Bilingualism", "Language & the brain"],
    free: [R("Psycholinguistics notes", "Various")],
    paid: [R("Psycholinguistics", "Fernández & Cairns")] },

  { id: "computational-linguistics", title: "Computational Linguistics", field: "linguistics",
    desc: "Formal and computational models of language, bridging to natural language processing.",
    requires: ["linguistics", "natural-language-processing"],
    topics: ["Formal grammars", "Parsing", "Computational semantics", "Corpus linguistics", "Statistical models of language", "Language & LLMs"],
    free: [R("Speech and Language Processing", "Jurafsky & Martin", "https://web.stanford.edu/~jurafsky/slp3/")],
    paid: [R("Speech and Language Processing", "Jurafsky & Martin")] },

]);
