registerDetail({
  long:
    "Data Visualization develops the principles and practice of representing data graphically—turning numbers into pictures that reveal structure, communicate findings, and support reasoning, one of the most powerful and most abused tools in data science. " +
    "Building on the introduction to data science, it joins the science of visual perception to the craft of graphic design for data. " +
    "The course begins with why visualization works and how it can mislead: the human visual system and which visual encodings (position, length, color, area) it reads accurately, and the principles—associated with Tufte and Cleveland—of graphical excellence, integrity, and the avoidance of chartjunk and distortion. " +
    "It develops a grammar of graphics: the systematic mapping of data variables to visual channels that underlies modern visualization tools, and the principled choice of chart type for the question and the data. " +
    "The course treats the visualization of the major data types and tasks—distributions, comparisons, relationships, trends over time, part-to-whole, and spatial and geographic data—and the effective use of color, scale, annotation, and small multiples. " +
    "The design of visualizations for exploration versus for communication and presentation is distinguished, along with the crafting of a clear visual narrative. " +
    "Interactive and web-based visualization and dashboards are introduced, together with the ethics of honest visualization, giving the ability to see data clearly and to show it truthfully.",
  topics: [
    "Why visualization works",
    "Visual perception and encoding",
    "Accurate vs. misleading encodings",
    "Graphical excellence and integrity (Tufte)",
    "Chartjunk and distortion",
    "The grammar of graphics",
    "Choosing the right chart",
    "Visualizing distributions and comparisons",
    "Relationships and trends over time",
    "Part-to-whole and spatial data",
    "Color, scale, and annotation",
    "Small multiples",
    "Exploration vs. communication",
    "Visual narrative and dashboards",
    "Interactive visualization and ethics",
  ],
  recommended: [
    res("The Visual Display of Quantitative Information", "Edward R. Tufte", { type: "textbook" }),
    res("Fundamentals of Data Visualization", "Claus O. Wilke", { type: "textbook", free: true, url: "https://clauswilke.com/dataviz/" }),
  ],
  supplementary: [
    res("Storytelling with Data: A Data Visualization Guide for Business Professionals", "Cole Nussbaumer Knaflic", { type: "reference" }),
    res("The Grammar of Graphics", "Leland Wilkinson", { type: "reference" }),
  ],
});
