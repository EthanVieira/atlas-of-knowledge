registerDetail({
  long:
    "Communication Systems develops the principles that let information travel reliably over noisy, " +
    "band-limited channels, from the earliest analog links to modern digital transmission. The course " +
    "opens with a review of signals and spectra, using Fourier analysis to describe bandwidth, power, and " +
    "the effect of linear filtering. Analog modulation is treated in depth, covering amplitude modulation " +
    "in its several forms (conventional AM, double-sideband, and single-sideband) and angle modulation " +
    "through frequency and phase modulation. The transition to digital communication begins with sampling " +
    "and pulse modulation, then quantization and pulse-code modulation, which convert continuous waveforms " +
    "into bit streams. Students study digital baseband transmission, the origin of intersymbol " +
    "interference, and the pulse-shaping that controls it, before moving to passband schemes such as ASK, " +
    "FSK, PSK, and QAM. A central theme is the role of noise, where signal-to-noise ratio, optimal " +
    "detection, and matched filtering set the fundamental limits on performance. The course closes with an " +
    "introduction to channel coding, connecting error control to Shannon's view of capacity.",
  topics: [
    "Signals, spectra, and Fourier review",
    "Random processes and noise",
    "Amplitude modulation: AM, DSB, and SSB",
    "Angle modulation: FM and PM",
    "Superheterodyne receivers and demodulation",
    "Sampling theorem and pulse modulation",
    "Quantization and pulse-code modulation",
    "Digital baseband transmission",
    "Intersymbol interference and pulse shaping",
    "Nyquist criterion and eye diagrams",
    "Digital passband modulation: ASK, FSK, PSK, QAM",
    "Signal-space representation",
    "Noise and signal-to-noise ratio",
    "Optimal detection and matched filtering",
    "Probability of error analysis",
    "Introduction to channel coding",
  ],
  recommended: [
    res("Communication Systems", "Simon Haykin", { type: "textbook" }),
    res("Digital Communications", "John G. Proakis and Masoud Salehi", { type: "textbook" }),
  ],
  supplementary: [
    res("Principles of Digital Communication", "Robert G. Gallager", { type: "textbook" }),
    res("Digital Communications: Fundamentals and Applications", "Bernard Sklar", { type: "reference" }),
  ],
});
