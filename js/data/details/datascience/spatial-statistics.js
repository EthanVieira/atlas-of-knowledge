registerDetail({
  long:
    "Spatial Statistics develops the analysis of data that carry a location—where the guiding principle, Tobler's first law of geography, is that near things are more related than distant things, so that spatial dependence must be modeled rather than ignored. " +
    "Building on regression analysis and geographic information systems, it joins statistical modeling to spatially referenced data. " +
    "The course begins with the nature of spatial data and the three broad types the field distinguishes: geostatistical (continuous) data measured at points, areal (lattice) data aggregated over regions, and spatial point patterns of events. " +
    "It develops the description and testing of spatial dependence—spatial autocorrelation and statistics such as Moran's I—and the consequences of ignoring it. " +
    "For geostatistical data, the course develops the variogram as the description of spatial correlation and kriging as the optimal method for spatial prediction and mapping. " +
    "For areal data, spatial regression models—spatial lag and spatial error models, and conditional and simultaneous autoregressive models—extend regression to account for neighborhood dependence. " +
    "The analysis of spatial point patterns, tests for clustering, and an introduction to spatio-temporal data round out the methods. " +
    "Applications from epidemiology and environmental science to ecology and the social sciences ground a course that gives the tools to analyze the spatial data that geographic information systems make abundant.",
  topics: [
    "The nature of spatial data",
    "Tobler's first law of geography",
    "Geostatistical, areal, and point data",
    "Spatial autocorrelation",
    "Moran's I and spatial dependence",
    "The variogram",
    "Kriging and spatial prediction",
    "Spatial interpolation and mapping",
    "Spatial regression models",
    "Spatial lag and spatial error models",
    "Conditional and simultaneous autoregression",
    "Spatial point patterns",
    "Tests for clustering",
    "Spatio-temporal data",
    "Applications across disciplines",
  ],
  recommended: [
    res("Applied Spatial Data Analysis with R", "Roger S. Bivand, Edzer Pebesma & Virgilio Gómez-Rubio", { type: "textbook" }),
    res("Statistics for Spatial Data", "Noel Cressie", { type: "textbook" }),
  ],
  supplementary: [
    res("Spatial Statistics and Modeling", "Carlo Gaetan & Xavier Guyon", { type: "reference" }),
    res("Geographic Data Science with Python", "Sergio Rey, Dani Arribas-Bel & Levi Wolf", { type: "reference", free: true, url: "https://geographicdata.science/book/intro.html" }),
  ],
});
