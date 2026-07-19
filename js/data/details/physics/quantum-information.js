registerDetail({
  long:
    "Quantum information science studies how information is stored, processed, and transmitted using the laws of quantum mechanics. " +
    "It begins with the qubit and the mathematics of state vectors, density matrices, and the Bloch sphere, then builds unitary quantum gates and circuits as the primitives of computation. " +
    "Entanglement is the central resource: Bell states, the CHSH inequality, and protocols such as superdense coding and quantum teleportation show how correlations with no classical analogue enable new tasks. " +
    "Landmark algorithms—Deutsch-Jozsa, Grover's search, and Shor's factoring algorithm—demonstrate quantum speedups, while the quantum Fourier transform and phase estimation supply their common machinery. " +
    "Because real qubits decohere, the course develops quantum error correction, stabilizer codes, and the threshold theorem for fault-tolerant computation. " +
    "Quantum information theory quantifies entanglement and channel capacities through von Neumann entropy, and quantum key distribution provides provably secure communication. " +
    "Throughout, the interplay between physical realizations and abstract information-theoretic limits shapes the field.",
  topics: [
    "Qubits, state vectors, and the Bloch sphere",
    "Density matrices and mixed states",
    "Quantum gates and circuit model",
    "Entanglement and Bell states",
    "Bell inequalities and the CHSH test",
    "Quantum teleportation and superdense coding",
    "The no-cloning theorem",
    "The quantum Fourier transform and phase estimation",
    "Grover's search algorithm",
    "Shor's factoring algorithm",
    "Quantum error-correcting and stabilizer codes",
    "Fault tolerance and the threshold theorem",
    "Von Neumann entropy and quantum channels",
    "Quantum key distribution (BB84)",
    "Decoherence and open quantum systems",
  ],
  recommended: [
    res("Quantum Computation and Quantum Information", "Nielsen & Chuang", { type: "textbook" }),
    res("Quantum Information Science I & II", "Isaac Chuang (MIT OpenCourseWare)", { type: "lectures", free: true, url: "https://ocw.mit.edu/courses/8-370x-quantum-information-science-i-spring-2018/" }),
  ],
  supplementary: [
    res("Quantum Computing Since Democritus", "Scott Aaronson", { type: "reference" }),
    res("An Introduction to Quantum Computing", "Kaye, Laflamme & Mosca", { type: "textbook" }),
    res("Lecture Notes on Quantum Computation", "John Preskill", { type: "notes", free: true, url: "http://theory.caltech.edu/~preskill/ph229/" }),
  ],
});
