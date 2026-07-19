registerDetail({
  long:
    "Introduction to Data Science surveys the interdisciplinary practice of extracting knowledge and value from data—the field that joins statistics, computing, and domain expertise to turn data into understanding and decisions. " +
    "Building on mathematical statistics and the foundations of programming, it gives the concepts, workflow, and skills that organize the rest of the data-science curriculum. " +
    "The course begins with what data science is and the data-science process: the cycle from framing a question, to acquiring and cleaning data, to exploration, modeling, and communication, and the idea that most of the effort lies in the unglamorous work before modeling. " +
    "It develops the practical foundations: working with data in a modern computing environment, importing and manipulating data of different kinds and from different sources, and the tabular, text, and structured formats data arrive in. " +
    "The course introduces each stage that later courses develop in depth—data wrangling and cleaning, exploratory data analysis, visualization, and predictive modeling—so students see the whole pipeline before specializing. " +
    "The relationship of data science to statistics and to machine learning is clarified, along with the reproducible, tool-based workflow (notebooks, version control) that professional data science requires. " +
    "Throughout, the course emphasizes asking good questions, the primacy of understanding the data and its provenance, and the responsibilities that come with drawing conclusions from data, giving a grounded orientation to the field.",
  topics: [
    "What is data science",
    "The data-science process",
    "Framing questions",
    "Data acquisition and sources",
    "Types and formats of data",
    "Working with data programmatically",
    "The data pipeline overview",
    "Data cleaning and wrangling (overview)",
    "Exploratory data analysis (overview)",
    "Data visualization (overview)",
    "Predictive modeling (overview)",
    "Data science vs. statistics vs. ML",
    "Reproducible workflows and notebooks",
    "Communicating results",
    "Responsible data science",
  ],
  recommended: [
    res("R for Data Science", "Hadley Wickham, Mine Çetinkaya-Rundel & Garrett Grolemund", { type: "textbook", free: true, url: "https://r4ds.hadley.nz/" }),
    res("Data Science from Scratch: First Principles with Python", "Joel Grus", { type: "textbook" }),
  ],
  supplementary: [
    res("Python Data Science Handbook", "Jake VanderPlas", { type: "reference", free: true, url: "https://jakevdp.github.io/PythonDataScienceHandbook/" }),
    res("Doing Data Science: Straight Talk from the Frontline", "Cathy O'Neil & Rachel Schutt", { type: "reference" }),
  ],
});
