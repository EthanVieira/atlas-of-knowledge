registerDetail({
  long:
    "Computational Linguistics develops formal and computational models of language, sitting at the interface of linguistics and computer science and providing the scientific foundation for natural language processing. " +
    "The course pursues two complementary goals: to build systems that process human language, and to use computational models as precise theories of how language works. " +
    "It begins with formal language theory and the Chomsky hierarchy, situating natural language within the classes of formal grammars and establishing the computational resources it demands. " +
    "The course develops grammars and parsing—context-free and beyond—and the algorithms that recover syntactic structure, alongside finite-state methods for morphology and phonology. " +
    "Computational semantics addresses how meaning representations can be built automatically. " +
    "The statistical and machine-learning turn is central: language models, from n-grams to neural and large language models, and the data-driven methods that now dominate the field. " +
    "The course examines corpus and empirical methods, evaluation, and the core NLP tasks—tagging, parsing, and semantic analysis—while reflecting on what modern language models do and do not reveal about human linguistic knowledge. " +
    "Throughout, it links engineering practice to linguistic theory.",
  topics: [
    "Formal language theory and the Chomsky hierarchy",
    "Finite-state methods for morphology and phonology",
    "Context-free grammars and parsing",
    "Probabilistic grammars and statistical parsing",
    "Part-of-speech tagging and sequence models",
    "Computational semantics",
    "Corpus methods and annotation",
    "N-gram language models",
    "Vector semantics and word embeddings",
    "Neural network models of language",
    "Large language models and transformers",
    "Machine translation",
    "Evaluation of language technologies",
    "Grammar formalisms and linguistic theory",
    "What language models tell us about language",
  ],
  recommended: [
    res("Speech and Language Processing (3rd ed. draft)", "Daniel Jurafsky & James H. Martin", { type: "textbook", free: true, url: "https://web.stanford.edu/~jurafsky/slp3/" }),
    res("Natural Language Processing with Python (NLTK book)", "Steven Bird, Ewan Klein & Edward Loper", { type: "interactive", free: true, url: "https://www.nltk.org/book/" }),
    res("Introduction to Natural Language Processing", "Jacob Eisenstein", { type: "textbook" }),
  ],
  supplementary: [
    res("Foundations of Statistical Natural Language Processing", "Christopher D. Manning & Hinrich Schütze", { type: "reference" }),
    res("The Handbook of Computational Linguistics and Natural Language Processing", "Alexander Clark, Chris Fox & Shalom Lappin (eds.)", { type: "reference" }),
  ],
});
