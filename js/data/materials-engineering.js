/* ============================================================================
 *  MATERIALS SCIENCE & ENGINEERING
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/matsci/<id>.js; the `detail: true` flag
 *  tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  { id: "materials-science-intro", title: "Introduction to Materials Science", field: "matsci", detail: true, requires: ["general-chemistry", "general-physics"] },
  { id: "thermodynamics-of-materials", title: "Thermodynamics of Materials", field: "matsci", detail: true, requires: ["materials-science-intro", "thermodynamics"] },
  { id: "phase-transformations", title: "Phase Transformations & Kinetics", field: "matsci", detail: true, requires: ["thermodynamics-of-materials"] },
  { id: "mechanical-behavior-materials", title: "Mechanical Behavior of Materials", field: "matsci", detail: true, requires: ["mechanics-of-materials", "materials-science-intro"] },
  { id: "electronic-materials", title: "Electronic & Optical Materials", field: "matsci", detail: true, requires: ["materials-science-intro", "solid-state-physics"] },
  { id: "biomaterials", title: "Biomaterials", field: "matsci", detail: true, requires: ["materials-science-intro", "biochemistry"] },
  { id: "nanomaterials-eng", title: "Nanomaterials Engineering", field: "matsci", detail: true, requires: ["materials-science-intro", "nanochemistry"] },
  { id: "structure-characterization", title: "Structure & Characterization of Materials", field: "matsci", detail: true, requires: ["materials-science-intro", "crystallography"] },
  { id: "ceramics", title: "Ceramics & Glasses", field: "matsci", detail: true, requires: ["materials-science-intro", "thermodynamics-of-materials"] },
  { id: "physical-metallurgy", title: "Physical Metallurgy", field: "matsci", detail: true, requires: ["phase-transformations", "mechanical-behavior-materials"] },
  { id: "polymers-mse", title: "Polymeric Materials", field: "matsci", detail: true, requires: ["materials-science-intro", "polymer-chemistry"] },
  { id: "composites", title: "Composite Materials", field: "matsci", detail: true, requires: ["mechanical-behavior-materials", "polymers-mse"] },
  { id: "semiconductor-materials", title: "Semiconductor Materials", field: "matsci", detail: true, requires: ["electronic-materials"] },
  { id: "magnetic-materials", title: "Magnetic & Functional Materials", field: "matsci", detail: true, requires: ["electronic-materials"] },
  { id: "corrosion", title: "Corrosion & Degradation", field: "matsci", detail: true, requires: ["thermodynamics-of-materials", "electrochemistry"] },
  { id: "computational-materials", title: "Computational Materials Science", field: "matsci", detail: true, requires: ["materials-science-intro", "electronic-structure-theory"] },
  { id: "energy-materials", title: "Materials for Energy", field: "matsci", detail: true, requires: ["electronic-materials", "electrochemistry"] },
  { id: "soft-matter", title: "Soft Matter", field: "matsci", detail: true, requires: ["statistical-mechanics", "polymers-mse"] },
  { id: "materials-failure", title: "Failure Analysis & Reliability", field: "matsci", detail: true, requires: ["mechanical-behavior-materials"] },
  { id: "surface-engineering-mse", title: "Surface Engineering & Thin Films", field: "matsci", detail: true, requires: ["materials-science-intro", "surface-chemistry"] },

]);
