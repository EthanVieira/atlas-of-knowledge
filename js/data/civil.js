/* ============================================================================
 *  CIVIL ENGINEERING
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/civileng/<id>.js; the `detail: true` flag
 *  tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Structural engineering ---
  { id: "structural-analysis", title: "Structural Analysis", field: "civileng", detail: true, requires: ["mechanics-of-materials"] },
  { id: "structural-design", title: "Structural Design", field: "civileng", detail: true, requires: ["structural-analysis"] },
  { id: "reinforced-concrete-design", title: "Reinforced Concrete Design", field: "civileng", detail: true, requires: ["structural-design"] },
  { id: "steel-design", title: "Steel Structures Design", field: "civileng", detail: true, requires: ["structural-design"] },
  { id: "bridge-engineering", title: "Bridge Engineering", field: "civileng", detail: true, requires: ["structural-design"] },
  { id: "earthquake-engineering", title: "Earthquake Engineering", field: "civileng", detail: true, requires: ["structural-analysis", "engineering-dynamics"] },
  { id: "structural-fem", title: "Advanced Structural Analysis (FEM)", field: "civileng", detail: true, requires: ["structural-analysis", "finite-element-analysis"] },

  // --- Geotechnical & water ---
  { id: "geotechnical-engineering", title: "Geotechnical Engineering", field: "civileng", detail: true, requires: ["mechanics-of-materials", "fluid-mechanics-eng"] },
  { id: "foundation-engineering", title: "Foundation Engineering", field: "civileng", detail: true, requires: ["geotechnical-engineering"] },
  { id: "hydraulics-water", title: "Hydraulics & Water Resources", field: "civileng", detail: true, requires: ["fluid-mechanics-eng"] },
  { id: "hydrology", title: "Hydrology", field: "civileng", detail: true, requires: ["hydraulics-water", "statistics"] },
  { id: "environmental-engineering", title: "Environmental Engineering", field: "civileng", detail: true, requires: ["general-chemistry", "fluid-mechanics-eng"] },
  { id: "wastewater-treatment", title: "Water & Wastewater Treatment", field: "civileng", detail: true, requires: ["environmental-engineering"] },
  { id: "coastal-engineering", title: "Coastal & Ocean Engineering", field: "civileng", detail: true, requires: ["hydraulics-water"] },

  // --- Transportation, surveying, materials & management ---
  { id: "transportation-engineering", title: "Transportation Engineering", field: "civileng", detail: true, requires: ["statistics"] },
  { id: "pavement-materials", title: "Pavement & Highway Materials", field: "civileng", detail: true, requires: ["transportation-engineering", "materials-science-intro"] },
  { id: "surveying-geomatics", title: "Surveying & Geomatics", field: "civileng", detail: true, requires: ["trigonometry"] },
  { id: "gis-remote-sensing", title: "GIS & Remote Sensing", field: "civileng", detail: true, requires: ["surveying-geomatics"] },
  { id: "construction-management", title: "Construction Engineering & Management", field: "civileng", detail: true, requires: ["structural-design"] },
  { id: "construction-materials", title: "Civil Engineering Materials", field: "civileng", detail: true, requires: ["materials-science-intro"] },

]);
