/* ============================================================================
 *  ANTHROPOLOGY (social sciences)
 * ==========================================================================*/
registerCourses([

  { id: "anthropology", title: "Introduction to Anthropology", field: "anthropology",
    desc: "The holistic study of humanity across cultures, biology, language and time.",
    requires: [],
    topics: ["The four fields", "Culture concept", "Fieldwork", "Human diversity", "Kinship", "Comparative method"],
    free: [R("Perspectives: An Open Introduction to Cultural Anthropology", "Society for Anthropology in Community Colleges", "https://perspectives.pressbooks.com/")],
    paid: [R("Anthropology", "Ember, Ember & Peregrine")] },

  { id: "cultural-anthropology", title: "Cultural Anthropology", field: "anthropology",
    desc: "The comparative study of human cultures, meaning and social practice.",
    requires: ["anthropology"],
    topics: ["Ethnographic method", "Kinship & marriage", "Religion & ritual", "Economic anthropology", "Political organization", "Globalization"],
    free: [R("Cultural anthropology notes", "Various")],
    paid: [R("Cultural Anthropology", "Conrad Kottak")] },

  { id: "biological-anthropology", title: "Biological Anthropology", field: "anthropology",
    desc: "Human evolution, variation and our place among the primates.",
    requires: ["anthropology", "evolutionary-biology"],
    topics: ["Primatology", "Human evolution", "The fossil record", "Human variation", "Paleoanthropology", "Evolutionary medicine"],
    free: [R("Explorations: An Open Invitation to Biological Anthropology", "American Anthropological Association", "https://explorations.americananthro.org/")],
    paid: [R("Biological Anthropology", "Stanford & Allen")] },

  { id: "archaeology", title: "Archaeology", field: "anthropology",
    desc: "Reconstructing past human societies from their material remains.",
    requires: ["anthropology"],
    topics: ["Excavation & survey", "Dating methods", "Stratigraphy", "Material culture", "Bioarchaeology", "Interpreting the past"],
    free: [R("Archaeology notes", "Various")],
    paid: [R("Archaeology: Theories, Methods, and Practice", "Renfrew & Bahn")] },

  { id: "linguistic-anthropology", title: "Linguistic Anthropology", field: "anthropology",
    desc: "How language shapes and reflects culture and social life.",
    requires: ["anthropology", "linguistics"],
    topics: ["Language & culture", "Linguistic relativity", "Language socialization", "Discourse & performance", "Language ideology", "Endangered languages"],
    free: [R("Linguistic anthropology notes", "Various")],
    paid: [R("Linguistic Anthropology", "Alessandro Duranti")] },

  { id: "ethnography", title: "Ethnographic Methods", field: "anthropology",
    desc: "The craft of understanding a way of life through immersive fieldwork.",
    requires: ["cultural-anthropology"],
    topics: ["Participant observation", "Fieldnotes", "Interviewing", "Reflexivity & ethics", "Thick description", "Writing ethnography"],
    free: [R("Ethnographic methods notes", "Various")],
    paid: [R("Writing Ethnographic Fieldnotes", "Emerson, Fretz & Shaw")] },

]);
