/* ============================================================================
 *  PERFORMING ARTS
 * ==========================================================================*/
registerCourses([

  { id: "music-theory", title: "Music Theory", field: "performingarts",
    desc: "The grammar of music: pitch, rhythm, harmony and form.",
    requires: [],
    topics: ["Notation & rhythm", "Scales & keys", "Intervals & chords", "Harmony & voice leading", "Counterpoint", "Musical form"],
    free: [R("musictheory.net", "musictheory.net", "https://www.musictheory.net/")],
    paid: [R("Tonal Harmony", "Kostka & Payne")] },

  { id: "music-history", title: "Music History", field: "performingarts",
    desc: "Western and world music through the ages — styles, composers and contexts.",
    requires: ["music-theory"],
    topics: ["Medieval & Renaissance", "Baroque", "Classical & Romantic", "20th-century music", "World musics", "Popular music"],
    free: [R("Music history notes", "Various")],
    paid: [R("A History of Western Music", "Burkholder, Grout & Palisca")] },

  { id: "music-composition", title: "Composition & Orchestration", field: "performingarts",
    desc: "Creating original music and writing idiomatically for instruments and voices.",
    requires: ["music-theory"],
    topics: ["Melody & motif", "Harmonic language", "Form & development", "Orchestration", "Instrumentation", "Contemporary techniques"],
    free: [R("Composition resources", "Various")],
    paid: [R("The Study of Orchestration", "Samuel Adler")] },

  { id: "performance-practice", title: "Performance & Conducting", field: "performingarts",
    desc: "The art of interpreting and leading musical performance.",
    requires: ["music-theory"],
    topics: ["Interpretation", "Technique", "Ensemble playing", "Conducting", "Historically informed performance", "Rehearsal craft"],
    free: [R("Performance practice notes", "Various")],
    paid: [R("The Grammar of Conducting", "Max Rudolf")] },

  { id: "ethnomusicology", title: "Ethnomusicology", field: "performingarts",
    desc: "The study of music as culture, across the world's traditions.",
    requires: ["music-theory", "cultural-anthropology"],
    topics: ["Music & culture", "Fieldwork & transcription", "World music traditions", "Music & identity", "Ritual & music", "Globalization of music"],
    free: [R("Ethnomusicology notes", "Various")],
    paid: [R("The Study of Ethnomusicology", "Bruno Nettl")] },

  { id: "theatre-studies", title: "Theatre Studies", field: "performingarts",
    desc: "Drama as literature and as live performance — text, staging and history.",
    requires: [],
    topics: ["Dramatic structure", "History of theatre", "Genres & styles", "Staging & production", "Dramatic theory", "Contemporary theatre"],
    free: [R("Theatre studies notes", "Various")],
    paid: [R("Theatre: The Lively Art", "Wilson & Goldfarb")] },

  { id: "acting-directing", title: "Acting & Directing", field: "performingarts",
    desc: "The craft of embodying character and shaping performance.",
    requires: ["theatre-studies"],
    topics: ["Acting method & technique", "Character & objectives", "Voice & movement", "Directing & blocking", "Rehearsal process", "Collaboration"],
    free: [R("Acting & directing notes", "Various")],
    paid: [R("An Actor Prepares", "Konstantin Stanislavski")] },

  { id: "dance-studies", title: "Dance Studies", field: "performingarts",
    desc: "Dance as art form, technique and cultural practice.",
    requires: [],
    topics: ["Dance techniques", "Choreography", "History of dance", "Notation", "Dance & culture", "The moving body"],
    free: [R("Dance studies notes", "Various")],
    paid: [R("The Dance Experience", "Nadel & Strauss")] },

  { id: "film-studies", title: "Film Studies", field: "performingarts",
    desc: "The analysis of film as art, language and cultural form.",
    requires: [],
    topics: ["Mise-en-scène", "Cinematography", "Editing & montage", "Sound", "Film history", "Film theory"],
    free: [R("Film studies resources", "Various")],
    paid: [R("Film Art: An Introduction", "Bordwell & Thompson")] },

]);
