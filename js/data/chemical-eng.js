/* ============================================================================
 *  CHEMICAL ENGINEERING
 * ==========================================================================*/
registerCourses([

  { id: "material-energy-balances", title: "Material & Energy Balances", field: "chemeng",
    desc: "The conservation-law bookkeeping at the heart of all process engineering.",
    requires: ["general-chemistry", "calculus-3"],
    topics: ["Process variables", "Material balances", "Reactive systems", "Energy balances", "Recycle & purge", "Combined balances"],
    free: [R("Material & energy balances notes", "Various")],
    paid: [R("Elementary Principles of Chemical Processes", "Felder & Rousseau")] },

  { id: "cheme-thermodynamics", title: "Chemical Engineering Thermodynamics", field: "chemeng",
    desc: "Phase and reaction equilibria for the design of chemical processes.",
    requires: ["chemical-thermodynamics", "material-energy-balances"],
    topics: ["Equations of state", "Phase equilibria (VLE/LLE)", "Activity models", "Reaction equilibrium", "Thermodynamics of mixtures", "Process energy analysis"],
    free: [R("ChemE thermodynamics notes", "Various")],
    paid: [R("Introduction to Chemical Engineering Thermodynamics", "Smith, Van Ness & Abbott")] },

  { id: "transport-phenomena", title: "Transport Phenomena", field: "chemeng",
    desc: "The unified treatment of momentum, heat and mass transfer.",
    requires: ["fluid-dynamics", "heat-transfer", "pde"],
    topics: ["Momentum transport", "Energy transport", "Mass transport", "Boundary layers", "Analogies", "Multicomponent diffusion"],
    free: [R("Transport phenomena notes", "Various")],
    paid: [R("Transport Phenomena", "Bird, Stewart & Lightfoot")] },

  { id: "reaction-engineering", title: "Chemical Reaction Engineering", field: "chemeng",
    desc: "Designing reactors — where kinetics, transport and thermodynamics meet.",
    requires: ["chemical-kinetics", "material-energy-balances"],
    topics: ["Rate laws & stoichiometry", "Batch, CSTR & PFR reactors", "Non-isothermal reactors", "Catalysis & diffusion", "Residence-time distribution", "Reactor design"],
    free: [R("Reaction engineering notes", "Various")],
    paid: [R("Elements of Chemical Reaction Engineering", "H. Scott Fogler")] },

  { id: "separation-processes", title: "Separation Processes", field: "chemeng",
    desc: "Unit operations that separate mixtures — distillation, absorption and more.",
    requires: ["cheme-thermodynamics", "transport-phenomena"],
    topics: ["Distillation", "Absorption & stripping", "Extraction", "Membranes", "Adsorption", "Staged & continuous contactors"],
    free: [R("Separation processes notes", "Various")],
    paid: [R("Separation Process Principles", "Seader, Henley & Roper")] },

  { id: "process-control-che", title: "Process Dynamics & Control", field: "chemeng",
    desc: "Keeping chemical processes stable and on-spec through feedback control.",
    requires: ["control-systems", "reaction-engineering"],
    topics: ["Process dynamics", "Feedback control", "Controller tuning", "Cascade & feedforward", "Multivariable control", "Model predictive control"],
    free: [R("Process control notes", "Various")],
    paid: [R("Process Dynamics and Control", "Seborg et al.")] },

  { id: "process-design", title: "Process & Plant Design", field: "chemeng",
    desc: "Synthesizing and optimizing complete chemical plants.",
    requires: ["separation-processes", "reaction-engineering"],
    topics: ["Flowsheet synthesis", "Process simulation", "Heat integration", "Economics & optimization", "Safety (HAZOP)", "Sustainability"],
    free: [R("Process design notes", "Various")],
    paid: [R("Analysis, Synthesis and Design of Chemical Processes", "Turton et al.")] },

]);
