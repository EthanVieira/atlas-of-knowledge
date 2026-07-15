registerDetail({
  long: "Digital signal processing concerns the representation, analysis, and transformation of signals in discrete time, and forms the mathematical backbone of audio, image, and communications technology. The course begins by relating continuous- and discrete-time signals through sampling, the Nyquist theorem, aliasing, and reconstruction, then develops the theory of discrete-time LTI systems via convolution and impulse response. Transform methods are central: the z-transform with its region of convergence, the discrete-time Fourier transform, and the discrete Fourier transform, made practical by the fast Fourier transform. Building on these, the course treats digital filter design for both FIR and IIR filters, the role of windowing, and spectral analysis of finite data records. Multirate techniques—decimation and interpolation—show how sampling rates can be changed efficiently. Finally, the course examines the effects of finite word-length arithmetic and quantization on real implementations, and surveys applications across audio, image, and communication systems, connecting theory to engineering practice.",
  topics: [
    "Continuous- vs discrete-time signals",
    "Sampling and the Nyquist theorem",
    "Aliasing and reconstruction",
    "Discrete-time systems and LTI systems",
    "Convolution and impulse response",
    "The z-transform and region of convergence",
    "The discrete-time Fourier transform",
    "The discrete Fourier transform (DFT)",
    "The fast Fourier transform (FFT)",
    "Digital filter design (FIR and IIR)",
    "Windowing",
    "Spectral analysis",
    "Multirate signal processing (decimation, interpolation)",
    "Quantization and finite word-length effects",
    "Applications (audio, image, communications)",
  ],
  recommended: [
    res("Discrete-Time Signal Processing (MIT OCW 6.341)", "MIT", { type: "lectures", free: true, url: "https://ocw.mit.edu/courses/6-341-discrete-time-signal-processing-fall-2005/" }),
    res("Discrete-Time Signal Processing", "Alan Oppenheim & Ronald Schafer", { type: "textbook" }),
  ],
  supplementary: [
    res("Understanding Digital Signal Processing", "Richard Lyons", { type: "textbook" }),
    res("Signals and Systems", "Alan Oppenheim, Alan Willsky & Hamid Nawab", { type: "textbook" }),
    res("The Scientist and Engineer's Guide to Digital Signal Processing", "Steven Smith", { type: "reference" }),
  ],
});
