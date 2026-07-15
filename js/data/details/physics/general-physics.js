registerDetail({
  long:
    "General Physics is the calculus-based introductory sequence that surveys the whole of classical " +
    "physics and a first taste of the modern, laying the groundwork every later course assumes. It " +
    "begins with mechanics — kinematics, Newton's laws, work and energy, momentum, rotation and " +
    "gravitation — then develops oscillations and waves, and the thermal physics of heat, the gas " +
    "laws and entropy. The second half covers electricity and magnetism from Coulomb's law through " +
    "circuits to Maxwell's equations and electromagnetic waves, followed by geometric and physical " +
    "optics. It closes with the early twentieth-century revolutions: special relativity and the " +
    "first ideas of quantum physics. The emphasis is on building physical intuition and quantitative " +
    "problem-solving across the breadth of the subject before the dedicated upper-level courses treat " +
    "each area in depth.",
  topics: [
    "Measurement, units & vectors", "Kinematics in one and two dimensions",
    "Newton's laws & forces", "Work, energy & power", "Momentum & collisions",
    "Rotational motion & angular momentum", "Gravitation",
    "Oscillations & simple harmonic motion", "Waves & sound",
    "Fluids", "Temperature, heat & the gas laws",
    "The laws of thermodynamics & entropy", "Electric charge & fields",
    "Electric potential & capacitance", "Current, resistance & DC circuits",
    "Magnetic fields & induction", "Maxwell's equations & electromagnetic waves",
    "Geometric & physical optics", "Special relativity (introduction)",
    "Early quantum physics (introduction)",
  ],
  recommended: [
    res("University Physics with Modern Physics", "Young & Freedman", { type: "textbook" }),
    res("Fundamentals of Physics", "Halliday, Resnick & Walker", { type: "textbook" }),
    res("University Physics", "OpenStax", { type: "textbook", free: true,
      url: "https://openstax.org/details/books/university-physics-volume-1" }),
  ],
  supplementary: [
    res("The Feynman Lectures on Physics", "Feynman, Leighton & Sands", { type: "reference", free: true,
      url: "https://www.feynmanlectures.caltech.edu/" }),
    res("Classical Mechanics (8.01)", "MIT OpenCourseWare", { type: "lectures", free: true,
      url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/" }),
    res("Physics", "Khan Academy", { type: "video", free: true,
      url: "https://www.khanacademy.org/science/physics" }),
    res("Physics for Scientists and Engineers", "Serway & Jewett", { type: "textbook" }),
  ],
});
