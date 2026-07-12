/* ============================================================================
 *  CIVIL ENGINEERING
 * ==========================================================================*/
registerCourses([

  { id: "structural-analysis", title: "Structural Analysis", field: "civileng",
    desc: "Determining forces and deformations in structures under load.",
    requires: ["statics", "mechanics-of-materials"],
    topics: ["Determinate structures", "Trusses & frames", "Deflections", "Indeterminate structures", "Influence lines", "Matrix stiffness method"],
    free: [R("Structural analysis notes", "Various")],
    paid: [R("Structural Analysis", "Russell Hibbeler")] },

  { id: "structural-design", title: "Structural Design", field: "civileng",
    desc: "Designing safe, efficient structures in steel, concrete and timber.",
    requires: ["structural-analysis"],
    topics: ["Design codes & loads", "Reinforced concrete", "Steel design", "Limit-state design", "Connections", "Structural systems"],
    free: [R("Structural design notes", "Various")],
    paid: [R("Design of Reinforced Concrete", "Jack McCormac")] },

  { id: "geotechnical-engineering", title: "Geotechnical Engineering", field: "civileng",
    desc: "The mechanics of soil and rock, and the design of foundations.",
    requires: ["mechanics-of-materials", "fluid-mechanics-eng"],
    topics: ["Soil classification", "Effective stress", "Consolidation & settlement", "Shear strength", "Slope stability", "Foundation design"],
    free: [R("Geotechnical engineering notes", "Various")],
    paid: [R("Principles of Geotechnical Engineering", "Braja Das")] },

  { id: "hydraulics-water", title: "Hydraulics & Water Resources", field: "civileng",
    desc: "The engineering of water flow — from pipe networks to rivers and hydrology.",
    requires: ["fluid-mechanics-eng"],
    topics: ["Open-channel flow", "Pipe networks", "Hydrology", "Hydraulic structures", "Groundwater", "Water distribution"],
    free: [R("Hydraulics notes", "Various")],
    paid: [R("Water-Resources Engineering", "David Chin")] },

  { id: "transportation-engineering", title: "Transportation Engineering", field: "civileng",
    desc: "Planning and designing systems that move people and goods.",
    requires: ["statics", "statistics"],
    topics: ["Traffic flow theory", "Highway design", "Pavement design", "Transportation planning", "Traffic control", "Public transit"],
    free: [R("Transportation engineering notes", "Various")],
    paid: [R("Traffic and Highway Engineering", "Garber & Hoel")] },

  { id: "environmental-engineering", title: "Environmental Engineering", field: "civileng",
    desc: "Protecting human and environmental health — water, air and waste.",
    requires: ["general-chemistry", "fluid-mechanics-eng"],
    topics: ["Water & wastewater treatment", "Air pollution control", "Solid waste", "Environmental chemistry", "Environmental modeling", "Sustainability"],
    free: [R("Environmental engineering notes", "Various")],
    paid: [R("Introduction to Environmental Engineering", "Davis & Cornwell")] },

  { id: "construction-management", title: "Construction Engineering & Management", field: "civileng",
    desc: "Planning, scheduling and managing the delivery of built projects.",
    requires: ["structural-design"],
    topics: ["Project planning", "Scheduling (CPM)", "Cost estimation", "Construction methods", "Contracts", "Safety & risk"],
    free: [R("Construction management notes", "Various")],
    paid: [R("Construction Management", "Halpin & Senior")] },

]);
