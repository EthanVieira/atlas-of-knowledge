registerDetail({
  cover: cover(96, "Category Theory", "network", "Mathematics"),
  long:
    "Category theory provides a bird's-eye view of mathematics, describing structures not by their " +
    "internal elements but by the maps between them. Its basic vocabulary of categories, functors and " +
    "natural transformations makes precise the idea that constructions in different fields are 'the " +
    "same', and universal properties characterize objects uniquely by how they interact with everything " +
    "else. Limits and colimits unify products, kernels, quotients and gluing under a single heading, " +
    "while adjunctions capture the ubiquitous pairing of free and forgetful constructions. The Yoneda " +
    "lemma, deceptively simple, shows that an object is completely determined by its web of incoming " +
    "morphisms. Building on these ideas the course introduces monads and, in overview, Kan extensions, " +
    "the abstractions that organize algebra, topology and theoretical computer science.",
  topics: [
    "Categories, objects & morphisms", "Functors",
    "Natural transformations", "Isomorphisms, mono- & epimorphisms",
    "Universal properties", "Products & coproducts",
    "Limits & colimits", "Adjunctions & the unit/counit",
    "The Yoneda lemma", "Representable functors",
    "Equivalence of categories", "Presheaves & the Yoneda embedding",
    "Monads & algebras", "Comonads",
    "Kan extensions (overview)", "Cartesian closed categories",
  ],
  recommended: [
    res("Categories for the Working Mathematician", "Saunders Mac Lane", { type: "textbook" }),
  ],
  supplementary: [
    res("Category Theory in Context", "Emily Riehl", { type: "notes", free: true,
      url: "https://math.jhu.edu/~eriehl/context.pdf" }),
    res("Basic Category Theory", "Tom Leinster", { type: "textbook", free: true,
      url: "https://arxiv.org/abs/1612.09375" }),
  ],
});
