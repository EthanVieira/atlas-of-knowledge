registerDetail({
  long:
    "Information Retrieval & Search studies how information systems find and rank the resources relevant to a user's need—the science behind catalogs, databases, and search engines, seen from the perspective of the information professional. " +
    "Building on the organization of information, it develops both the systems that retrieve information and the human side of searching for it. " +
    "The course begins with the information retrieval problem: matching a user's query against a store of documents, and the core measures of success, precision and recall, and the trade-off between them. " +
    "It develops the models of retrieval—Boolean retrieval and the structured searching of databases, and the vector-space and probabilistic models that underlie ranked, relevance-based search—and the indexing and term-weighting (such as TF-IDF) that make retrieval efficient and effective. " +
    "Query languages, controlled-vocabulary versus keyword searching, and search strategy and the reference interview connect the system to the searcher. " +
    "The course examines web search and how engines crawl, index, and rank the web, including the role of links and, increasingly, learning-based ranking. " +
    "Relevance, evaluation, and the behavior of real searchers are treated, along with the design of discovery systems and the enduring skills of expert searching in bibliographic and specialized databases. " +
    "The course gives the conceptual and practical grasp of retrieval that underlies reference work and digital libraries alike.",
  topics: [
    "The information retrieval problem",
    "Precision, recall, and relevance",
    "Boolean and database searching",
    "The vector-space model",
    "Probabilistic and ranked retrieval",
    "Indexing and term weighting (TF-IDF)",
    "Controlled vocabulary vs. keyword search",
    "Query languages and search strategy",
    "The reference interview and searching",
    "Web search: crawling and ranking",
    "Link analysis",
    "Evaluation of retrieval systems",
    "Search and information behavior",
    "Discovery systems",
    "Expert searching in specialized databases",
  ],
  recommended: [
    res("Introduction to Information Retrieval", "Christopher D. Manning, Prabhakar Raghavan & Hinrich Schütze", { type: "textbook", free: true, url: "https://nlp.stanford.edu/IR-book/" }),
    res("Search: How the Data Explosion Makes Us Smarter", "Stefan Weitz", { type: "textbook" }),
  ],
  supplementary: [
    res("Modern Information Retrieval", "Ricardo Baeza-Yates & Berthier Ribeiro-Neto", { type: "reference" }),
    res("Online Searching: A Guide to Finding Quality Information Efficiently and Effectively", "Karen Markey", { type: "reference" }),
  ],
});
