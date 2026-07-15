registerDetail({
  long:
    "Abstract algebra studies the structures that arise when you keep only the essential rules of " +
    "arithmetic — a set with operations satisfying a few axioms. Groups capture symmetry and " +
    "reversible operations; rings capture addition-and-multiplication systems like the integers " +
    "and polynomials; fields are where division is always possible. The unifying idea is the " +
    "morphism, a map preserving structure, together with the isomorphism theorems that follow. " +
    "Along the way you meet Lagrange's theorem, group actions and the Sylow theorems, and the " +
    "arithmetic of ideals and factorization — the language underpinning number theory, geometry " +
    "and much of modern mathematics.",
  topics: [
    "Groups, subgroups & cyclic groups", "Cosets & Lagrange's theorem",
    "Normal subgroups & quotient groups", "Homomorphisms & the isomorphism theorems",
    "Group actions & orbit–stabilizer", "The Sylow theorems",
    "Direct & semidirect products", "Rings, integral domains & fields",
    "Ideals & quotient rings", "Ring homomorphisms",
    "Polynomial rings", "PIDs, UFDs & Euclidean domains",
    "Field extensions (introduction)", "Modules (introduction)",
  ],
  recommended: [
    res("Abstract Algebra", "Dummit & Foote", { type: "textbook" }),
    res("Algebra", "Michael Artin", { type: "textbook" }),
    res("Abstract Algebra (E-222)", "Benedict Gross / Harvard", { type: "video", free: true,
      url: "https://www.youtube.com/playlist?list=PLelIK3uylPMGzHBuR3hLMHrYfMqWWsmx5" }),
  ],
  supplementary: [
    res("Abstract Algebra: Theory and Applications", "Tom Judson", { type: "interactive", free: true,
      url: "http://abstract.ups.edu/" }),
    res("Group Theory (notes)", "J. S. Milne", { type: "notes", free: true,
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf" }),
    res("Algebra: Chapter 0", "Paolo Aluffi", { type: "textbook" }),
    res("Visual Group Theory", "Nathan Carter", { type: "textbook" }),
  ],
});
