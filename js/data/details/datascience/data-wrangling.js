registerDetail({
  long:
    "Data Wrangling & Engineering develops the skills to acquire, clean, transform, and structure data into a form fit for analysis—the unglamorous but decisive work that consumes most of a data scientist's time and determines whether an analysis is possible at all. " +
    "Building on the introduction to data science, it treats seriously the craft that textbooks often skip. " +
    "The course begins with the reality that real data is messy—incomplete, inconsistent, and rarely in the shape an analysis needs—and the goal of producing clean, well-structured 'tidy' data in which each variable is a column and each observation a row. " +
    "It develops the acquisition of data from diverse sources: flat files and spreadsheets, relational databases and SQL, web APIs, and web scraping, and the handling of the many formats data arrives in, from CSV and JSON to text and semi-structured data. " +
    "The core transformations are treated in depth: filtering, selecting, and sorting; creating and recoding variables; aggregating and grouping; reshaping between wide and long forms; and joining and merging data from multiple sources. " +
    "The course develops the systematic handling of the perennial problems—missing data, inconsistent categories, dates and times, text and string cleaning, and duplicate and erroneous records. " +
    "It introduces the ideas of data pipelines, workflow automation, and reproducibility that make data preparation reliable and repeatable, giving the practical foundation that all downstream analysis depends on.",
  topics: [
    "Why data wrangling matters",
    "Tidy data principles",
    "Acquiring data from files and spreadsheets",
    "Databases and SQL for data",
    "Web APIs and scraping",
    "Data formats: CSV, JSON, text",
    "Filtering, selecting, and sorting",
    "Creating and recoding variables",
    "Aggregation and grouping",
    "Reshaping wide and long",
    "Joining and merging data",
    "Handling missing data",
    "Cleaning dates, times, and strings",
    "Deduplication and error correction",
    "Data pipelines and reproducibility",
  ],
  recommended: [
    res("R for Data Science", "Hadley Wickham, Mine Çetinkaya-Rundel & Garrett Grolemund", { type: "textbook", free: true, url: "https://r4ds.hadley.nz/" }),
    res("Python for Data Analysis", "Wes McKinney", { type: "textbook", free: true, url: "https://wesmckinney.com/book/" }),
  ],
  supplementary: [
    res("Principles of Data Wrangling", "Tye Rattenbury, Joseph M. Hellerstein, Jeffrey Heer, et al.", { type: "reference" }),
    res("Bad Data Handbook", "Q. Ethan McCallum (ed.)", { type: "reference" }),
  ],
});
