registerDetail({
  long:
    "Spatial Analysis and Geostatistics studies the quantitative analysis of geographic data—the statistical and mathematical methods for detecting, describing, and explaining spatial patterns and relationships. " +
    "Building on GIS and statistics, the course develops the distinctive challenges and methods of analyzing data that has location. " +
    "It begins with the fundamental nature of spatial data and the problems that distinguish it from ordinary statistics: spatial autocorrelation (the tendency of nearby things to be similar, which violates the independence assumptions of classical statistics), the modifiable areal unit problem, and edge and scale effects. " +
    "The course develops the analysis of spatial point patterns—testing whether events are clustered, dispersed, or random—and the measurement of spatial autocorrelation through indices such as Moran's I and the detection of local clusters and hot spots. " +
    "It develops spatial interpolation and geostatistics—the estimation of values at unsampled locations, including inverse-distance weighting and kriging, and the modeling of spatial dependence through the variogram. " +
    "Spatial regression, which accounts for spatial effects in modeling relationships, and geographically weighted regression, which allows relationships to vary across space, are examined. " +
    "The course treats the analysis of areal and network data and spatial sampling. " +
    "It develops both the conceptual understanding and the practical application of these methods, equipping students to analyze geographic data rigorously and to avoid the pitfalls that spatial data presents.",
  topics: [
    "The nature of spatial data",
    "Spatial autocorrelation",
    "The modifiable areal unit problem",
    "Scale and edge effects",
    "Point pattern analysis",
    "Clustering and dispersion",
    "Measuring spatial autocorrelation (Moran's I)",
    "Local indicators and hot-spot analysis",
    "Spatial interpolation",
    "Geostatistics and kriging",
    "The variogram and spatial dependence",
    "Spatial regression",
    "Geographically weighted regression",
    "Areal and network data analysis",
    "Spatial sampling and inference",
  ],
  recommended: [
    res("Geographic Information Analysis", "David O'Sullivan & David J. Unwin", { type: "textbook" }),
    res("Quantitative Geography: Perspectives on Spatial Data Analysis", "A. Stewart Fotheringham, Chris Brunsdon & Martin Charlton", { type: "textbook" }),
  ],
  supplementary: [
    res("Interactive Spatial Data Analysis", "Trevor C. Bailey & Anthony C. Gatrell", { type: "reference" }),
    res("Applied Spatial Data Analysis with R", "Roger S. Bivand, Edzer Pebesma & Virgilio Gómez-Rubio", { type: "reference" }),
  ],
});
