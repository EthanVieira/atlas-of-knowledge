registerDetail({
  long:
    "Fourier analysis decomposes functions into superpositions of waves, expressing periodic signals as " +
    "Fourier series and general functions through the Fourier transform. The core insight is that " +
    "differentiation becomes multiplication and convolution becomes pointwise product in frequency space, " +
    "turning hard analytic problems into algebraic ones. Questions of convergence, both pointwise and in " +
    "the mean, occupy a central place, along with the Plancherel and Parseval identities that make the " +
    "transform an isometry on L². Poisson summation links a function's samples to its spectrum, and the " +
    "theory of distributions extends the transform to objects like the delta function that are not " +
    "classical functions. These tools drive applications to partial differential equations, signal " +
    "processing, and the sampling theorem that underlies digital communication.",
  topics: [
    "Periodic functions & Fourier series", "Convergence of Fourier series", "Fejér & Dirichlet kernels",
    "Gibbs phenomenon", "The Fourier transform on the line", "Convolution",
    "The Schwartz class", "Plancherel & Parseval identities", "The inversion theorem",
    "Poisson summation", "Tempered distributions", "The delta function & derivatives of distributions",
    "Applications to the heat & wave equations", "The uncertainty principle",
    "Sampling & the Nyquist theorem", "The discrete Fourier transform",
  ],
  recommended: [
    res("Fourier Analysis: An Introduction", "Elias M. Stein & Rami Shakarchi", { type: "textbook" }),
    res("Fourier Analysis", "T. W. Körner", { type: "textbook" }),
  ],
  supplementary: [
    res("But what is a Fourier series?", "3Blue1Brown", { type: "video", free: true, url: "https://www.youtube.com/watch?v=r6sGWTCMz2k" }),
  ],
});
