registerDetail({
  cover: cover(96, "Point-Set Topology", "network", "Mathematics"),
  long: "Point-set topology, also called general topology, provides the abstract framework in which continuity, convergence, and limits make sense beyond metric spaces. Starting from the axioms of open sets, it develops topological spaces from bases and subbases and equips them with the subspace, product, and quotient topologies. Central invariants such as compactness and connectedness capture, respectively, a finiteness property and an intuitive notion of being 'in one piece.' The separation axioms and results like Urysohn's lemma and the metrization theorems clarify when a space behaves like a familiar metric space. Tychonoff's theorem, that arbitrary products of compact spaces are compact, is a cornerstone with deep consequences across analysis. The course closes with a first look at the fundamental group, bridging toward algebraic topology.",
  topics: [
    "Topological spaces & open sets",
    "Bases & subbases",
    "Subspace topology",
    "Product topology",
    "Quotient topology",
    "Continuity & homeomorphism",
    "Compactness",
    "Tychonoff's theorem",
    "Connectedness & path-connectedness",
    "Separation axioms",
    "Urysohn's lemma",
    "Metrization theorems",
    "Countability axioms",
    "Nets & filters",
    "The fundamental group (intro)",
  ],
  recommended: [
    res("Topology", "James Munkres", { type: "textbook" }),
    res("Topology Without Tears", "Sidney Morris", { type: "textbook", free: true, url: "https://www.topologywithouttears.net/" }),
  ],
  supplementary: [
    res("General Topology", "Stephen Willard", { type: "textbook" }),
  ],
});
