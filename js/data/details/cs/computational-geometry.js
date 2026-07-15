registerDetail({
  long: "Computational geometry studies algorithms and data structures for problems posed on points, lines, polygons, and other geometric objects, with applications in graphics, robotics, geographic information systems, and CAD. The course begins with geometric primitives and orientation tests, then develops convex hull algorithms—Graham scan, gift wrapping, and divide and conquer—as a first illustration of geometric algorithm design. The sweep-line paradigm is introduced through line-segment intersection and applied broadly. Polygon problems include triangulation and the art-gallery theorem, and low-dimensional linear programming shows how randomization tames worst cases. A major theme is geometric searching: orthogonal range searching with kd-trees and range trees, and point location via trapezoidal maps. The course develops Voronoi diagrams and their dual Delaunay triangulations, arrangements and the powerful geometric duality transform, and the combinatorial bounds provided by Davenport–Schinzel sequences. It closes with the practical concerns of robustness and degeneracy that arise when idealized real-arithmetic algorithms meet finite-precision computation.",
  topics: [
    "Geometric primitives and orientation tests",
    "Convex hulls (Graham scan, gift wrapping, divide and conquer)",
    "Line-segment intersection and the sweep-line paradigm",
    "Polygon triangulation",
    "The art-gallery problem",
    "Linear programming in low dimensions",
    "Orthogonal range searching (kd-trees, range trees)",
    "Point location and trapezoidal maps",
    "Voronoi diagrams",
    "Delaunay triangulation",
    "Arrangements and duality",
    "Geometric data structures",
    "Davenport–Schinzel sequences",
    "Robustness and degeneracy",
  ],
  recommended: [
    res("Computational Geometry: Algorithms and Applications", "Mark de Berg, Otfried Cheong, Marc van Kreveld & Mark Overmars", { type: "textbook" }),
  ],
  supplementary: [
    res("Computational Geometry in C", "Joseph O'Rourke", { type: "textbook" }),
    res("Discrete and Computational Geometry", "Satyan Devadoss & Joseph O'Rourke", { type: "textbook" }),
    res("Handbook of Discrete and Computational Geometry", "Jacob Goodman, Joseph O'Rourke & Csaba Tóth", { type: "reference" }),
  ],
});
