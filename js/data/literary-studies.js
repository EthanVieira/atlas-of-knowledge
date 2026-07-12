/* ============================================================================
 *  LITERARY STUDIES
 * ==========================================================================*/
registerCourses([

  { id: "literature", title: "Literary Studies & Close Reading", field: "litstudies",
    desc: "Reading and interpreting literature with attention to form, language and meaning.",
    requires: [],
    topics: ["Close reading", "Genre & form", "Figurative language", "Voice & point of view", "Interpretation", "The literary canon"],
    free: [R("Open Yale Courses — English", "Yale", "https://oyc.yale.edu/english")],
    paid: [R("The Norton Anthology", "W. W. Norton")] },

  { id: "poetry-poetics", title: "Poetry & Poetics", field: "litstudies",
    desc: "The art of verse — meter, form, sound and the theory of poetry.",
    requires: ["literature"],
    topics: ["Meter & scansion", "Rhyme & sound", "Fixed forms", "Imagery & metaphor", "Free verse", "Poetic movements"],
    free: [R("Poetry foundations", "Poetry Foundation", "https://www.poetryfoundation.org/learn")],
    paid: [R("The Poem Itself", "Stanley Burnshaw")] },

  { id: "narrative-theory", title: "Narrative Theory", field: "litstudies",
    desc: "How stories are structured and told — the formal analysis of narrative.",
    requires: ["literature"],
    topics: ["Story vs discourse", "Plot & causality", "Narration & focalization", "Time in narrative", "Character", "Unreliable narration"],
    free: [R("Narratology notes", "Various")],
    paid: [R("Narrative Discourse", "Gérard Genette")] },

  { id: "literary-theory", title: "Literary Theory", field: "litstudies",
    desc: "The frameworks that guide interpretation — from formalism to poststructuralism.",
    requires: ["literature"],
    topics: ["Formalism & New Criticism", "Structuralism", "Psychoanalytic criticism", "Marxist criticism", "Feminist & gender theory", "Postcolonial theory"],
    free: [R("Introduction to Theory of Literature", "Paul Fry / Yale", "https://oyc.yale.edu/english/engl-300")],
    paid: [R("Literary Theory: An Introduction", "Terry Eagleton")] },

  { id: "critical-theory", title: "Critical Theory", field: "litstudies",
    desc: "The philosophical critique of culture, ideology and power underpinning the humanities.",
    requires: ["literary-theory", "continental-philosophy"],
    topics: ["The Frankfurt School", "Ideology & hegemony", "Deconstruction", "Discourse & power (Foucault)", "Postmodernism", "Cultural studies"],
    free: [R("Critical theory notes", "Various")],
    paid: [R("The Norton Anthology of Theory and Criticism", "Leitch et al.")] },

  { id: "comparative-literature", title: "Comparative Literature", field: "litstudies",
    desc: "Literature across languages, cultures and national traditions.",
    requires: ["literature"],
    topics: ["Cross-cultural reading", "Translation studies", "World literary systems", "Influence & intertextuality", "Genre across cultures", "Literature & the other arts"],
    free: [R("Comparative literature notes", "Various")],
    paid: [R("What Is World Literature?", "David Damrosch")] },

  { id: "rhetoric-composition", title: "Rhetoric & Composition", field: "litstudies",
    desc: "The theory and practice of effective, persuasive writing.",
    requires: ["literature"],
    topics: ["Classical rhetoric", "Argument & audience", "Style & voice", "The writing process", "Genre & discourse communities", "Digital rhetoric"],
    free: [R("Writing & rhetoric resources", "Purdue OWL", "https://owl.purdue.edu/")],
    paid: [R("The Elements of Style", "Strunk & White")] },

  { id: "creative-writing", title: "Creative Writing", field: "litstudies",
    desc: "The craft of writing fiction, poetry and creative nonfiction.",
    requires: ["literature"],
    topics: ["Craft of fiction", "Poetic craft", "Creative nonfiction", "Revision", "Workshop practice", "Voice & style"],
    free: [R("Creative writing resources", "Various")],
    paid: [R("The Art of Fiction", "John Gardner")] },

]);
