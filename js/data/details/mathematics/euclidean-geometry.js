registerDetail({
  long:
    "Euclidean Geometry studies points, lines, angles, and figures in the plane through the " +
    "axiomatic method first set out in Euclid's Elements. Beginning from a small set of " +
    "postulates and definitions, it derives a vast web of theorems by rigorous deductive proof. " +
    "Students learn the congruence and similarity of triangles, properties of parallel lines, " +
    "circles, polygons, and the Pythagorean theorem. Beyond specific results, the course teaches " +
    "students to reason logically and to construct valid arguments, making it a first genuine " +
    "encounter with mathematical proof. Compass-and-straightedge constructions ground the " +
    "abstract theory in concrete practice.",
  topics: [
    "Points, lines, planes & angles", "Euclid's postulates & the axiomatic method",
    "Angle relationships & parallel lines", "Triangle congruence (SSS, SAS, ASA)",
    "Similar triangles & proportionality", "The Pythagorean theorem", "Circles, chords & tangents",
    "Inscribed angles & cyclic quadrilaterals", "Polygons & interior angle sums",
    "Area & perimeter of plane figures", "Compass & straightedge constructions",
    "Quadrilaterals & their properties", "Loci & concurrency (centroid, incenter, circumcenter)",
    "Introduction to geometric proof",
  ],
  recommended: [
    res("Geometry", "Khan Academy", { type: "lectures", free: true,
      url: "https://www.khanacademy.org/math/geometry" }),
    res("Kiselev's Geometry", "A. P. Kiselev", { type: "textbook" }),
  ],
  supplementary: [
    res("Geometry: Euclid and Beyond", "Robin Hartshorne", { type: "textbook" }),
  ],
});
