registerDetail({
  long:
    "AdS/CFT is a concrete realization of the holographic principle: an exact duality between a " +
    "gravitational theory in anti-de Sitter space and a conformal field theory living on its " +
    "boundary in one fewer dimension. The course motivates the correspondence through the large-N " +
    "limit of gauge theories and the geometry of AdS, then establishes the field-operator " +
    "dictionary that maps bulk fields to boundary operators and lets one compute holographic " +
    "correlation functions. It develops the holographic renormalization group, Wilson loops, and " +
    "the identification of bulk black holes with thermal states of the boundary theory, giving a " +
    "geometric handle on finite-temperature field theory. A central theme is entanglement entropy " +
    "and the Ryu-Takayanagi prescription, which ties boundary quantum information to bulk geometry " +
    "and underlies modern work on bulk reconstruction. Applications extend to strongly coupled QCD-" +
    "like theories and condensed-matter systems. This is a research-level course assuming string " +
    "theory, conformal field theory, and general relativity.",
  topics: [
    "the holographic principle",
    "anti-de Sitter space and its symmetries",
    "the large-N limit of gauge theories",
    "the AdS/CFT correspondence",
    "the field-operator dictionary",
    "holographic correlation functions",
    "holographic renormalization and the holographic RG",
    "Wilson loops",
    "black holes and thermal field theory",
    "the Hawking-Page transition",
    "entanglement entropy and Ryu-Takayanagi",
    "conformal field theory and the conformal group",
    "applications to QCD (AdS/QCD)",
    "applications to condensed matter (AdS/CMT)",
    "bulk reconstruction",
    "the fluid-gravity correspondence",
  ],
  recommended: [
    res("Large N Field Theories, String Theory and Gravity", "Aharony et al.", {
      type: "notes",
      free: true,
      url: "https://arxiv.org/abs/hep-th/9905111",
    }),
    res("Gauge/Gravity Duality", "Ammon & Erdmenger", { type: "textbook" }),
  ],
  supplementary: [
    res("Holographic Duality in Condensed Matter Physics", "Zaanen et al.", { type: "textbook" }),
    res("TASI Lectures on the Holographic Principle", "Bousso", { type: "notes" }),
    res("String Theory (Vols. 1-2)", "Joseph Polchinski", { type: "textbook" }),
  ],
});
