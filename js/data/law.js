/* ============================================================================
 *  LAW (humanities)
 * ==========================================================================*/
registerCourses([

  { id: "intro-law", title: "Foundations of Law", field: "law",
    desc: "How legal systems work — sources of law, legal reasoning and the institutions of justice.",
    requires: [],
    topics: ["Common vs civil law", "Sources of law", "Legal reasoning & precedent", "Courts & procedure", "Rights & duties", "The rule of law"],
    free: [R("Foundations of law notes", "Various")],
    paid: [R("Introduction to Law", "Barnett & others")] },

  { id: "jurisprudence", title: "Jurisprudence (Philosophy of Law)", field: "law",
    desc: "The nature of law itself — what law is, and its relation to morality and justice.",
    requires: ["intro-law", "political-philosophy"],
    topics: ["Natural law", "Legal positivism", "Legal realism", "Law & morality", "Theories of justice", "Interpretation & adjudication"],
    free: [R("SEP — Philosophy of Law", "Stanford Encyclopedia of Philosophy", "https://plato.stanford.edu/entries/lawphil-nature/")],
    paid: [R("The Concept of Law", "H. L. A. Hart")] },

  { id: "constitutional-law", title: "Constitutional Law", field: "law",
    desc: "The fundamental law structuring government and protecting rights.",
    requires: ["intro-law"],
    topics: ["Separation of powers", "Federalism", "Judicial review", "Fundamental rights", "Equal protection", "Constitutional interpretation"],
    free: [R("Constitutional law notes", "Various")],
    paid: [R("Constitutional Law", "Erwin Chemerinsky")] },

  { id: "criminal-law", title: "Criminal Law", field: "law",
    desc: "The law of offenses against the state — culpability, defenses and punishment.",
    requires: ["intro-law"],
    topics: ["Actus reus & mens rea", "Homicide", "Inchoate crimes", "Defenses", "Theories of punishment", "Criminal procedure"],
    free: [R("Criminal law notes", "Various")],
    paid: [R("Criminal Law", "Joshua Dressler")] },

  { id: "contract-law", title: "Contract Law", field: "law",
    desc: "The law of enforceable agreements — formation, performance and breach.",
    requires: ["intro-law"],
    topics: ["Offer & acceptance", "Consideration", "Terms & interpretation", "Breach & remedies", "Defenses to enforcement", "Third parties"],
    free: [R("Contract law notes", "Various")],
    paid: [R("Contracts", "Farnsworth")] },

  { id: "tort-law", title: "Tort Law", field: "law",
    desc: "Civil wrongs and the law of compensation for harm.",
    requires: ["intro-law"],
    topics: ["Negligence", "Intentional torts", "Strict liability", "Causation", "Damages", "Defenses"],
    free: [R("Tort law notes", "Various")],
    paid: [R("Torts", "Dobbs, Hayden & Bublick")] },

  { id: "property-law", title: "Property Law", field: "law",
    desc: "The law governing ownership and use of land and things.",
    requires: ["intro-law"],
    topics: ["Possession & ownership", "Estates in land", "Landlord–tenant", "Easements & servitudes", "Transfers", "Takings"],
    free: [R("Property law notes", "Various")],
    paid: [R("Property", "Dukeminier et al.")] },

  { id: "international-law", title: "International Law", field: "law",
    desc: "The rules governing relations between states and across borders.",
    requires: ["intro-law", "international-relations"],
    topics: ["Sources of international law", "Statehood & sovereignty", "Treaties", "Human rights law", "Law of armed conflict", "International courts"],
    free: [R("International law notes", "Various")],
    paid: [R("International Law", "Malcolm Shaw")] },

  { id: "law-and-economics", title: "Law & Economics", field: "law",
    desc: "The economic analysis of legal rules and their effects on behavior.",
    requires: ["jurisprudence", "microeconomics"],
    topics: ["Efficiency & the Coase theorem", "Economics of property", "Economics of contract & tort", "Crime & deterrence", "Litigation", "Regulation"],
    free: [R("Law and economics notes", "Various")],
    paid: [R("Economic Analysis of Law", "Richard Posner")] },

]);
