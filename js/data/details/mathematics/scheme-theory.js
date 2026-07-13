registerDetail({
  cover: cover(96, "Scheme Theory", "orbit", "Mathematics"),
  long: "Scheme theory is Grothendieck's reworking of algebraic geometry that vastly extends the classical theory of varieties. Its basic building block is the spectrum of a commutative ring, whose points are prime ideals and which carries a structure sheaf of rings; general schemes are obtained by gluing such affine pieces. This framework accommodates nilpotents, arbitrary base rings, and arithmetic phenomena, allowing geometry over the integers and over non-algebraically-closed fields. Morphisms of schemes and their relative properties, such as being separated or proper, replace the ad hoc constructions of the classical theory, and fibered products give a robust notion of base change. Quasi-coherent and coherent sheaves, together with their cohomology, provide the invariants of the theory. The culmination includes Serre duality and the Riemann-Roch theorem, which relate cohomology to intersection-theoretic data on curves and beyond.",
  topics: [
    "Spec of a ring",
    "The structure sheaf",
    "Affine schemes",
    "General schemes & gluing",
    "Morphisms of schemes",
    "The functor of points",
    "Fibered products & base change",
    "Separated morphisms",
    "Proper morphisms",
    "Quasi-coherent & coherent sheaves",
    "Divisors & line bundles",
    "Sheaf cohomology of schemes",
    "Serre duality",
    "Riemann-Roch (overview)",
  ],
  recommended: [
    res("The Rising Sea: Foundations of Algebraic Geometry", "Ravi Vakil", { type: "notes", free: true, url: "https://math216.wordpress.com/" }),
    res("Algebraic Geometry", "Robin Hartshorne", { type: "textbook" }),
  ],
  supplementary: [
    res("The Stacks Project", "The Stacks Project", { type: "reference", free: true, url: "https://stacks.math.columbia.edu/" }),
    res("Algebraic Geometry I: Schemes", "Gortz & Wedhorn", { type: "textbook" }),
  ],
});
