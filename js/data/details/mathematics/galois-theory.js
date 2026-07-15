registerDetail({
  long:
    "Galois theory is one of the great unifications in mathematics, revealing that the symmetries of " +
    "the roots of a polynomial are governed by a finite group. Its centerpiece is the Galois " +
    "correspondence, an order-reversing dictionary between the intermediate fields of an extension and " +
    "the subgroups of its Galois group. With this dictionary questions about equations become questions " +
    "about groups: a polynomial is solvable by radicals exactly when its Galois group is solvable, which " +
    "explains at last why the general quintic has no formula. The theory illuminates cyclotomic and " +
    "Kummer extensions, gives a clean account of finite fields, and proves the primitive element " +
    "theorem. It closes with a look at the still-open inverse Galois problem, asking which groups can " +
    "occur as symmetry groups over the rationals.",
  topics: [
    "Normal & separable extensions", "Galois extensions & groups",
    "The fundamental theorem (Galois correspondence)", "Fixed fields",
    "Artin's theorem", "Splitting fields & Galois groups of polynomials",
    "Solvable groups & solvability by radicals", "Insolvability of the quintic",
    "Cyclotomic extensions", "Kummer theory & radical extensions",
    "Finite fields & their Galois groups", "The primitive element theorem",
    "Norm & trace", "Cyclic extensions & Hilbert 90",
    "The inverse Galois problem (overview)", "Constructibility applications",
  ],
  recommended: [
    res("Galois Theory", "Jean-Pierre Escofier", { type: "textbook" }),
    res("Galois Theory", "Ian Stewart", { type: "textbook" }),
  ],
  supplementary: [
    res("Fields and Galois Theory", "J.S. Milne", { type: "notes", free: true,
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf" }),
  ],
});
