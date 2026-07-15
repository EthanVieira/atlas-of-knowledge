registerDetail({
  long:
    "Calculus I develops the differential calculus from the ground up. It begins with the " +
    "limit — the rigorous idea of a quantity approaching a value — and uses it to define " +
    "continuity and the derivative, the instantaneous rate at which one quantity changes with " +
    "respect to another. From a handful of differentiation rules you build the machinery to " +
    "analyse how functions grow, where they peak, and how they can be approximated locally by " +
    "straight lines. The course closes by reversing the process: antiderivatives and a first " +
    "glimpse of the integral, setting up the fundamental theorem that ties the two halves of " +
    "calculus together.",
  topics: [
    "Limits & one-sided limits", "Continuity & the intermediate value theorem",
    "The derivative & differentiability", "Power, product & quotient rules",
    "The chain rule", "Implicit differentiation",
    "Derivatives of trig, exponential & log functions", "Related rates",
    "Linear approximation & differentials", "Extrema & critical points",
    "The mean value theorem", "First & second derivative tests",
    "L'Hôpital's rule", "Curve sketching", "Optimization",
    "Antiderivatives & the area problem", "Newton's method",
  ],
  recommended: [
    res("Calculus", "Michael Spivak", { type: "textbook" }),
    res("Single Variable Calculus (18.01)", "MIT OpenCourseWare", { type: "lectures", free: true,
      url: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/" }),
    res("Calculus", "James Stewart", { type: "textbook" }),
  ],
  supplementary: [
    res("Essence of Calculus", "3Blue1Brown", { type: "video", free: true,
      url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" }),
    res("Calculus", "Gilbert Strang (MIT)", { type: "textbook", free: true,
      url: "https://ocw.mit.edu/ans7870/resources/Strang/Edited/Calculus/Calculus.pdf" }),
    res("Paul's Online Notes — Calculus I", "Paul Dawkins", { type: "notes", free: true,
      url: "https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx" }),
    res("Active Calculus", "Matt Boelkins", { type: "interactive", free: true,
      url: "https://activecalculus.org/" }),
  ],
});
