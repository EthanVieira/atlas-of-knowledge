/* ============================================================================
 *  MATERIALS SCIENCE & ENGINEERING
 * ==========================================================================*/
registerCourses([

  { id: "materials-science-intro", title: "Introduction to Materials Science", field: "matsci",
    desc: "How the structure of materials at every scale determines their properties.",
    requires: ["general-chemistry", "classical-mechanics"],
    topics: ["Atomic bonding", "Crystal structures", "Defects", "The four classes of materials", "Structure–property relations", "Processing"],
    free: [R("Fundamentals of Materials Science", "MIT OCW 3.091", "https://ocw.mit.edu/courses/3-091sc-introduction-to-solid-state-chemistry-fall-2010/")],
    paid: [R("Materials Science and Engineering: An Introduction", "William Callister")] },

  { id: "thermodynamics-of-materials", title: "Thermodynamics of Materials", field: "matsci",
    desc: "The thermodynamic driving forces behind phase stability and microstructure.",
    requires: ["materials-science-intro", "thermodynamics"],
    topics: ["Free energy of materials", "Solutions & mixing", "Phase diagrams", "Chemical potential", "Interfaces & surfaces", "Defect thermodynamics"],
    free: [R("Thermodynamics of materials notes", "Various")],
    paid: [R("Thermodynamics in Materials Science", "DeHoff")] },

  { id: "phase-transformations", title: "Phase Transformations & Kinetics", field: "matsci",
    desc: "How microstructures evolve — diffusion, nucleation and transformation.",
    requires: ["thermodynamics-of-materials"],
    topics: ["Diffusion", "Nucleation & growth", "Solidification", "Precipitation", "Martensitic transformations", "Microstructure control"],
    free: [R("Phase transformations notes", "Various")],
    paid: [R("Phase Transformations in Metals and Alloys", "Porter & Easterling")] },

  { id: "mechanical-behavior-materials", title: "Mechanical Behavior of Materials", field: "matsci",
    desc: "Why materials deform, harden and fracture — from dislocations to fatigue.",
    requires: ["mechanics-of-materials", "materials-science-intro"],
    topics: ["Elasticity & plasticity", "Dislocations", "Strengthening mechanisms", "Fracture mechanics", "Fatigue", "Creep"],
    free: [R("Mechanical behavior notes", "Various")],
    paid: [R("Mechanical Behavior of Materials", "Meyers & Chawla")] },

  { id: "electronic-materials", title: "Electronic & Optical Materials", field: "matsci",
    desc: "The materials behind semiconductors, magnets and photonic devices.",
    requires: ["materials-science-intro", "solid-state-physics"],
    topics: ["Semiconductors", "Dielectrics", "Magnetic materials", "Optical materials", "Thin films", "Device materials"],
    free: [R("Electronic materials notes", "Various")],
    paid: [R("Electronic Properties of Materials", "Rolf Hummel")] },

  { id: "biomaterials", title: "Biomaterials", field: "matsci",
    desc: "Materials designed to interface with living systems.",
    requires: ["materials-science-intro", "biochemistry"],
    topics: ["Biocompatibility", "Polymeric biomaterials", "Ceramics & metals in medicine", "Degradable materials", "Surface engineering", "Host response"],
    free: [R("Biomaterials notes", "Various")],
    paid: [R("Biomaterials Science", "Ratner, Hoffman, Schoen & Lemons")] },

  { id: "nanomaterials-eng", title: "Nanomaterials Engineering", field: "matsci",
    desc: "Engineering materials whose properties are governed by nanoscale structure.",
    requires: ["materials-science-intro", "nanochemistry"],
    topics: ["Nanostructure synthesis", "Quantum confinement", "Nanomechanics", "2D materials", "Self-assembly", "Nanocomposites"],
    free: [R("Nanomaterials notes", "Various")],
    paid: [R("Nanostructures and Nanomaterials", "Cao & Wang")] },

]);
