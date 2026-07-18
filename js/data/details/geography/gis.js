registerDetail({
  long:
    "Geographic Information Systems (GIS) studies the computer-based systems for capturing, storing, analyzing, and displaying geographic information—the technology that has transformed geography and countless other fields that use spatial data. " +
    "Building on cartography, the course develops both the concepts and the practical skills of GIS. " +
    "It begins with the fundamental question of how the geographic world is represented digitally: the two great data models—vector (points, lines, and polygons) and raster (grids of cells)—and the crucial linkage of spatial features to attribute data. " +
    "The course develops georeferencing, coordinate systems, and the acquisition and quality of spatial data, including data from surveying, GPS, and existing sources. " +
    "The core of the course is spatial analysis with GIS: querying and selecting data, measuring and computing spatial relationships, the powerful operation of overlay (combining layers to answer questions), buffering and proximity analysis, and the analysis of terrain and networks. " +
    "The course treats the management and structuring of geographic databases, and the production of maps and other outputs from GIS. " +
    "It develops the practical use of GIS software through hands-on work, and considers the applications of GIS across geography, planning, environment, business, and government. " +
    "The course also addresses the concepts of geographic information science that underlie the technology, and the issues of data quality, uncertainty, and ethics in a data-driven, geospatial world.",
  topics: [
    "What is GIS?",
    "Geographic information and its representation",
    "The vector data model",
    "The raster data model",
    "Spatial data and attributes",
    "Coordinate systems and georeferencing",
    "Acquiring spatial data (GPS, surveys, sources)",
    "Data quality and uncertainty",
    "Querying and selecting data",
    "Vector overlay analysis",
    "Buffering and proximity",
    "Raster and terrain analysis",
    "Network analysis",
    "Geodatabases and data management",
    "Map production and GIS applications",
  ],
  recommended: [
    res("Geographic Information Science and Systems", "Paul A. Longley, Michael F. Goodchild, David J. Maguire & David W. Rhind", { type: "textbook" }),
    res("QGIS (free and open-source GIS, with documentation)", "QGIS Project", { type: "interactive", free: true, url: "https://www.qgis.org/" }),
  ],
  supplementary: [
    res("GIS Fundamentals: A First Text on Geographic Information Systems", "Paul Bolstad", { type: "textbook" }),
    res("Introduction to Geographic Information Systems", "Kang-tsung Chang", { type: "textbook" }),
  ],
});
