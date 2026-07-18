registerDetail({
  long: "Medical Imaging develops the physics and mathematics behind the major modalities used to see " +
    "inside the human body without cutting it open. The course establishes a common framework of " +
    "imaging system fundamentals - the point spread function, contrast, spatial resolution, noise, " +
    "and signal-to-noise ratio - so that every modality can be compared on equal footing of image " +
    "quality. It then works through X-ray physics and projection radiography, explaining attenuation, " +
    "beam hardening, and the formation of a shadow image. Computed tomography extends projection data " +
    "into cross-sectional reconstruction, developed rigorously through the Radon transform, the " +
    "Fourier slice theorem, and filtered backprojection. Nuclear medicine introduces emission imaging " +
    "with PET and SPECT, where the source is a radiotracer inside the patient rather than an external " +
    "beam. Magnetic resonance imaging is treated from spin physics through relaxation, k-space, and " +
    "pulse sequence design, while ultrasound imaging covers acoustic propagation, echo formation, and " +
    "Doppler measurement of flow. The course closes with image processing methods for enhancement, " +
    "restoration, and quantitative analysis, leaving students able to reason about why a given " +
    "modality produces the contrast and artifacts that it does.",
  topics: [
    "Imaging system fundamentals and the point spread function",
    "Contrast, resolution, noise, and SNR",
    "Image quality metrics and detectability",
    "X-ray physics and attenuation",
    "Projection radiography and image formation",
    "The Radon transform and the Fourier slice theorem",
    "Computed tomography and filtered backprojection",
    "Nuclear medicine and radiotracers",
    "PET and SPECT emission imaging",
    "Magnetic resonance imaging physics",
    "MRI pulse sequences and k-space",
    "Ultrasound imaging and echo formation",
    "Doppler ultrasound and flow measurement",
    "Reconstruction algorithms and Fourier methods",
    "Medical image processing and enhancement",
  ],
  recommended: [
    res("Medical Imaging Signals and Systems", "Jerry L. Prince and Jonathan M. Links", { type: "textbook" }),
    res("The Essential Physics of Medical Imaging", "Jerrold T. Bushberg, J. Anthony Seibert, Edwin M. Leidholdt, and John M. Boone", { type: "textbook" }),
  ],
  supplementary: [
    res("Principles of Computerized Tomographic Imaging", "Avinash C. Kak and Malcolm Slaney", { type: "reference", free: true, url: "https://www.slaney.org/pct/pct-toc.html" }),
    res("Foundations of Medical Imaging", "Zang-Hee Cho, Joie P. Jones, and Manbir Singh", { type: "reference" }),
  ],
});
