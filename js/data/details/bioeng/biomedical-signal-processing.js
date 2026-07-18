registerDetail({
  long: "Biomedical Signal Processing develops the mathematical and computational tools needed to " +
    "extract clinically meaningful information from the electrical and mechanical signals produced " +
    "by the human body. The course begins with the physiological origin and nature of biosignals - " +
    "the bioelectric activity of the heart, brain, and muscle - and the challenges of sampling and " +
    "digitizing them without aliasing or loss of diagnostic content. Because recordings are corrupted " +
    "by baseline wander, powerline interference, motion artifact, and physiological cross-talk, a " +
    "substantial part of the course is devoted to noise and artifact removal through digital filtering, " +
    "adaptive filters, and averaging of repetitive events. Spectral analysis and the power spectrum " +
    "reveal the frequency content of rhythms and evoked responses, while time-frequency methods such as " +
    "the short-time Fourier transform and wavelets track how that content changes over nonstationary " +
    "intervals. The methods are applied concretely to ECG processing and QRS detection, to EEG and " +
    "evoked-potential analysis, and to EMG interpretation of muscle activity. The course closes with " +
    "feature extraction and pattern classification, connecting signal descriptors to automated " +
    "diagnosis and monitoring. Students finish able to design a processing pipeline from raw electrode " +
    "voltage to a clinically interpretable measurement.",
  topics: [
    "Origin and nature of physiological signals",
    "Sampling and digitization of biosignals",
    "Aliasing, quantization, and the Nyquist criterion",
    "Noise and artifact sources in recordings",
    "Digital filtering of biosignals (FIR and IIR)",
    "Adaptive filtering and interference cancellation",
    "Signal averaging of repetitive events",
    "Spectral analysis and the power spectrum",
    "Time-frequency analysis and wavelets",
    "ECG signal processing and QRS detection",
    "Heart rate variability analysis",
    "EEG and evoked-potential analysis",
    "EMG analysis and muscle activity",
    "Feature extraction from biosignals",
    "Pattern classification and automated diagnosis",
  ],
  recommended: [
    res("Biomedical Signal Analysis", "Rangaraj M. Rangayyan", { type: "textbook" }),
    res("Bioelectrical Signal Processing in Cardiac and Neurological Applications", "Leif Sornmo and Pablo Laguna", { type: "textbook" }),
  ],
  supplementary: [
    res("Biomedical Digital Signal Processing", "Willis J. Tompkins", { type: "reference" }),
    res("The Scientist and Engineer's Guide to Digital Signal Processing", "Steven W. Smith", { type: "reference", free: true, url: "https://www.dspguide.com/" }),
  ],
});
