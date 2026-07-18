registerDetail({
  long: "Signals and Systems develops the mathematical language used to describe signals and the linear " +
    "time-invariant systems that process them. The course begins by classifying continuous-time and " +
    "discrete-time signals and by defining the basic operations and elementary signals, including the " +
    "impulse and step, from which more complex signals are built. Linear time-invariant systems are " +
    "characterized by their impulse response, and the convolution integral and convolution sum are " +
    "derived as the fundamental input-output relationships. Fourier series and the continuous and " +
    "discrete-time Fourier transforms are introduced to represent signals in the frequency domain and " +
    "to reveal how systems reshape a signal's spectrum. The Laplace transform generalizes these ideas " +
    "for continuous-time systems, providing the transfer function and a framework for analyzing " +
    "stability and transient behavior, while the z-transform plays the same role for discrete-time " +
    "systems. Sampling theory connects the continuous and discrete worlds, establishing the Nyquist " +
    "criterion and explaining aliasing and reconstruction. The course concludes with frequency " +
    "response and the design and interpretation of filters as a unifying application of the theory.",
  topics: [
    "Continuous-time and discrete-time signals",
    "Signal operations and elementary signals",
    "Linear time-invariant systems",
    "Impulse response and convolution",
    "Fourier series",
    "Continuous-time Fourier transform",
    "Discrete-time Fourier transform",
    "The Laplace transform",
    "Transfer functions and stability",
    "The z-transform",
    "Sampling and the Nyquist theorem",
    "Aliasing and reconstruction",
    "Frequency response",
    "Filtering and filter design",
    "System interconnection and feedback",
  ],
  recommended: [
    res("Signals and Systems", "Alan Oppenheim & Alan Willsky", { type: "textbook" }),
    res("Linear Systems and Signals", "B. P. Lathi", { type: "textbook" }),
    res("6.003 Signals and Systems", "MIT OpenCourseWare", { type: "lectures", free: true, url: "https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/" }),
  ],
  supplementary: [
    res("Signals and Systems", "Simon Haykin & Barry Van Veen", { type: "textbook" }),
    res("Fundamentals of Signals and Systems Using the Web and MATLAB", "Edward Kamen & Bonnie Heck", { type: "reference" }),
  ],
});
