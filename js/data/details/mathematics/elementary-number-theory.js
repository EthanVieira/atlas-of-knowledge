registerDetail({
  cover: cover(96, "Number Theory", "orbit", "Mathematics"),
  long:
    "Elementary number theory studies the deep structure of the integers using tools that require no more than careful proof. It begins with divisibility, the Euclidean algorithm, and the fundamental theorem of arithmetic, then develops the arithmetic of congruences and modular systems. Central results include the Chinese remainder theorem, Fermat's little theorem, Euler's theorem, and the theory of primitive roots. The crown jewel of the elementary theory is Gauss's law of quadratic reciprocity, which governs when a number is a square modulo a prime. Along the way one meets multiplicative arithmetic functions, Diophantine equations, and continued fractions. The subject rewards concreteness and computation while pointing toward the abstractions of algebraic and analytic number theory.",
  topics: [
    "Divisibility & the division algorithm",
    "The Euclidean algorithm & Bézout's identity",
    "Primes & unique factorization",
    "Congruences & modular arithmetic",
    "The Chinese remainder theorem",
    "Fermat's little theorem & Euler's theorem",
    "Euler's totient & the group of units",
    "Primitive roots & indices",
    "Quadratic residues & the Legendre symbol",
    "Quadratic reciprocity",
    "Arithmetic functions & multiplicativity",
    "Möbius inversion",
    "Diophantine equations & Pythagorean triples",
    "Continued fractions & Pell's equation",
    "Sums of squares",
  ],
  recommended: [
    res("Elementary Number Theory", "William Stein", { type: "textbook", free: true, url: "https://wstein.org/ent/" }),
    res("An Introduction to the Theory of Numbers", "Hardy & Wright", { type: "textbook" }),
  ],
  supplementary: [
    res("A Classical Introduction to Modern Number Theory", "Ireland & Rosen", { type: "textbook" }),
  ],
});
