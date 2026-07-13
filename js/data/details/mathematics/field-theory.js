registerDetail({
  cover: cover(96, "Field Theory", "network", "Mathematics"),
  long:
    "Field theory studies the arithmetic of division: sets in which every nonzero element can be " +
    "inverted, and the towers of extensions that arise from adjoining new elements. The central theme " +
    "is measuring how one field sits inside another, using the degree of an extension and the minimal " +
    "polynomial of an algebraic element. Splitting fields and the algebraic closure provide the natural " +
    "arena in which polynomials factor completely, while the theory of finite fields classifies every " +
    "field with finitely many elements. Separability and normality single out the well-behaved " +
    "extensions on which Galois theory rests, and transcendence bases handle the elements no polynomial " +
    "can capture. Together these ideas prepare the ground for the Galois correspondence and for the " +
    "classical impossibility results of ruler-and-compass geometry.",
  topics: [
    "Fields & characteristic", "Field extensions & degree",
    "Algebraic vs transcendental elements", "Minimal polynomials",
    "Simple extensions", "Splitting fields", "Algebraic closure",
    "Finite fields", "The Frobenius endomorphism", "Separable extensions",
    "Normal extensions", "Perfect fields", "Primitive element theorem",
    "Transcendence bases & degree", "Constructible numbers",
    "Cyclotomic extensions",
  ],
  recommended: [
    res("Abstract Algebra", "Dummit & Foote", { type: "textbook" }),
    res("Field and Galois Theory", "Patrick Morandi", { type: "textbook" }),
  ],
  supplementary: [
    res("Fields and Galois Theory", "J.S. Milne", { type: "notes", free: true,
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf" }),
  ],
});
