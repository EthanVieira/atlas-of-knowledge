registerDetail({
  cover: cover(96, "Arithmetic", "vectors", "Mathematics"),
  long:
    "Arithmetic is the foundation of all mathematics, concerned with numbers and the basic " +
    "operations that combine them. It begins with the natural numbers and place-value notation, " +
    "then builds up addition, subtraction, multiplication, and division as reliable procedures. " +
    "From there it develops fractions, decimals, and percentages, along with the concepts of " +
    "factors, multiples, and primes that expose the multiplicative structure of the integers. " +
    "The course also introduces negative numbers, ratios, and proportional reasoning, giving " +
    "students the numerical fluency that every later branch of mathematics depends upon.",
  topics: [
    "Place value & the base-ten system", "Addition & subtraction", "Multiplication & division",
    "Order of operations", "Factors, multiples & divisibility", "Prime numbers & prime factorization",
    "Greatest common divisor & least common multiple", "Fractions & equivalent fractions",
    "Decimals & decimal arithmetic", "Ratios & proportions", "Percentages",
    "Negative numbers & the integers", "Exponents & powers of ten", "Estimation & rounding",
  ],
  recommended: [
    res("Arithmetic", "Khan Academy", { type: "lectures", free: true,
      url: "https://www.khanacademy.org/math/arithmetic" }),
    res("Prealgebra", "Art of Problem Solving", { type: "textbook" }),
  ],
  supplementary: [
    res("Prealgebra", "Art of Problem Solving", { type: "textbook" }),
  ],
});
