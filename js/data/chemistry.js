/* ============================================================================
 *  CHEMISTRY
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/chemistry/<id>.js; the `detail: true` flag
 *  tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Foundations ---
  { id: "general-chemistry", title: "General Chemistry", field: "chemistry", detail: true, requires: [] },
  { id: "analytical-chemistry", title: "Analytical Chemistry", field: "chemistry", detail: true, requires: ["general-chemistry"] },
  { id: "inorganic-chemistry", title: "Inorganic Chemistry", field: "chemistry", detail: true, requires: ["general-chemistry"] },
  { id: "organic-chemistry", title: "Organic Chemistry", field: "chemistry", detail: true, requires: ["general-chemistry"] },
  { id: "physical-chemistry", title: "Physical Chemistry", field: "chemistry", detail: true, requires: ["general-chemistry", "calculus-3"] },

  // --- Physical chemistry branch ---
  { id: "chemical-thermodynamics", title: "Chemical Thermodynamics", field: "chemistry", detail: true, requires: ["physical-chemistry", "thermodynamics"] },
  { id: "chemical-kinetics", title: "Chemical Kinetics", field: "chemistry", detail: true, requires: ["physical-chemistry"] },
  { id: "quantum-chemistry", title: "Quantum Chemistry", field: "chemistry", detail: true, requires: ["physical-chemistry", "linear-algebra"] },
  { id: "spectroscopy", title: "Molecular Spectroscopy", field: "chemistry", detail: true, requires: ["quantum-chemistry"] },
  { id: "statistical-thermodynamics", title: "Statistical Thermodynamics", field: "chemistry", detail: true, requires: ["physical-chemistry", "statistical-mechanics"] },
  { id: "electrochemistry", title: "Electrochemistry", field: "chemistry", detail: true, requires: ["chemical-thermodynamics"] },
  { id: "surface-chemistry", title: "Surface & Interface Chemistry", field: "chemistry", detail: true, requires: ["physical-chemistry"] },
  { id: "photochemistry", title: "Photochemistry", field: "chemistry", detail: true, requires: ["spectroscopy"] },
  { id: "electronic-structure-theory", title: "Electronic Structure Theory", field: "chemistry", detail: true, requires: ["quantum-chemistry", "numerical-analysis"] },
  { id: "computational-chemistry", title: "Computational Chemistry", field: "chemistry", detail: true, requires: ["electronic-structure-theory", "programming-fundamentals"] },
  { id: "reaction-dynamics", title: "Chemical Reaction Dynamics", field: "chemistry", detail: true, requires: ["chemical-kinetics", "quantum-chemistry"] },

  // --- Organic branch ---
  { id: "physical-organic-chemistry", title: "Physical Organic Chemistry", field: "chemistry", detail: true, requires: ["organic-chemistry", "chemical-kinetics"] },
  { id: "organic-synthesis", title: "Organic Synthesis", field: "chemistry", detail: true, requires: ["organic-chemistry"] },
  { id: "organometallic-chemistry", title: "Organometallic Chemistry", field: "chemistry", detail: true, requires: ["organic-chemistry", "inorganic-chemistry"] },
  { id: "polymer-chemistry", title: "Polymer Chemistry", field: "chemistry", detail: true, requires: ["organic-chemistry", "physical-chemistry"] },
  { id: "medicinal-chemistry", title: "Medicinal Chemistry", field: "chemistry", detail: true, requires: ["organic-chemistry", "biochemistry"] },
  { id: "natural-product-synthesis", title: "Natural Product Total Synthesis", field: "chemistry", detail: true, requires: ["organic-synthesis", "physical-organic-chemistry"] },

  // --- Inorganic / materials branch ---
  { id: "coordination-chemistry", title: "Coordination Chemistry", field: "chemistry", detail: true, requires: ["inorganic-chemistry", "quantum-chemistry"] },
  { id: "solid-state-chemistry", title: "Solid State Chemistry", field: "chemistry", detail: true, requires: ["inorganic-chemistry"] },
  { id: "crystallography", title: "Crystallography", field: "chemistry", detail: true, requires: ["solid-state-chemistry"] },
  { id: "materials-chemistry", title: "Materials Chemistry", field: "chemistry", detail: true, requires: ["solid-state-chemistry", "physical-chemistry"] },
  { id: "nanochemistry", title: "Nanochemistry & Nanomaterials", field: "chemistry", detail: true, requires: ["materials-chemistry", "surface-chemistry"] },
  { id: "catalysis", title: "Catalysis", field: "chemistry", detail: true, requires: ["chemical-kinetics", "organometallic-chemistry", "surface-chemistry"] },
  { id: "bioinorganic-chemistry", title: "Bioinorganic Chemistry", field: "chemistry", detail: true, requires: ["coordination-chemistry", "biochemistry"] },

  // --- Analytical branch ---
  { id: "instrumental-analysis", title: "Instrumental Analysis", field: "chemistry", detail: true, requires: ["analytical-chemistry"] },
  { id: "separation-science", title: "Separation Science & Chromatography", field: "chemistry", detail: true, requires: ["analytical-chemistry"] },

  // --- Chemical biology bridge ---
  { id: "biochemistry", title: "Biochemistry", field: "chemistry", detail: true, requires: ["organic-chemistry", "molecular-biology"] },
  { id: "enzymology", title: "Enzymology", field: "chemistry", detail: true, requires: ["biochemistry", "chemical-kinetics"] },
  { id: "chemical-biology", title: "Chemical Biology", field: "chemistry", detail: true, requires: ["biochemistry", "organic-chemistry"] },

]);
