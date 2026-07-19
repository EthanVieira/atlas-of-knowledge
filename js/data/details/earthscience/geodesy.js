registerDetail({
  long:
    "Geodesy is the science of measuring the size, shape, orientation, and gravity field of the Earth and how they change over time. " +
    "It distinguishes the physical surface from mathematical reference figures—the ellipsoid and the geoid, the equipotential surface that defines mean sea level and the direction of gravity. " +
    "Geometric geodesy develops reference ellipsoids, geodetic and geocentric coordinates, map projections, and datums used to position points on the Earth. " +
    "Physical geodesy relates the gravity field to mass distribution through potential theory, spherical-harmonic expansions, and the boundary-value problems that yield geoid heights and gravity anomalies. " +
    "Satellite geodesy and GNSS provide precise global positioning, while missions measuring gravity and altimetry map the field and monitor sea level. " +
    "The course covers height systems, coordinate transformations, and the least-squares adjustment of geodetic networks. " +
    "Modern geodesy detects plate motion, crustal deformation, Earth rotation, and mass redistribution, tying measurement to geophysics and climate.",
  topics: [
    "The geoid, ellipsoid, and physical surface",
    "Geodetic reference systems and datums",
    "Geodetic and geocentric coordinates",
    "Map projections",
    "Gravity, potential theory, and the geopotential",
    "Spherical-harmonic representation of gravity",
    "Geoid determination and gravity anomalies",
    "Height systems and vertical datums",
    "Satellite geodesy and GNSS positioning",
    "Satellite altimetry and gravity missions",
    "Coordinate transformations",
    "Least-squares adjustment of networks",
    "Earth rotation and reference frames",
    "Crustal deformation and plate motion",
  ],
  recommended: [
    res("Physical Geodesy", "Hofmann-Wellenhof & Moritz", { type: "textbook" }),
    res("Geodesy", "Wolfgang Torge & Jürgen Müller", { type: "textbook" }),
  ],
  supplementary: [
    res("GNSS - Global Navigation Satellite Systems", "Hofmann-Wellenhof, Lichtenegger & Wasle", { type: "reference" }),
    res("Geometric Geodesy", "Richard H. Rapp", { type: "notes" }),
  ],
});
