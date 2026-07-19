/* ============================================================================
 *  PUBLIC POLICY & ADMINISTRATION
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/publicpolicy/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it. Public policy & administration is the
 *  professional, applied discipline of designing, analyzing, and delivering
 *  government action. It builds directly on political science's `public-policy`
 *  and `public-administration`, and links out to economics (public economics,
 *  cost-benefit), medicine (public health), and the social sciences rather than
 *  repeating them.
 * ==========================================================================*/
registerCourses([

  // --- Policy analysis & process -----------------------------------------
  { id: "policy-analysis", title: "Policy Analysis", field: "publicpolicy", detail: true, requires: ["public-policy"] },
  { id: "policy-process", title: "The Policy Process", field: "publicpolicy", detail: true, requires: ["public-policy"] },
  { id: "program-evaluation", title: "Program Evaluation", field: "publicpolicy", detail: true, requires: ["policy-analysis", "statistics"] },
  { id: "cost-benefit-analysis", title: "Cost-Benefit Analysis", field: "publicpolicy", detail: true, requires: ["policy-analysis", "public-economics"] },
  { id: "policy-implementation", title: "Policy Implementation", field: "publicpolicy", detail: true, requires: ["policy-process"] },
  { id: "regulation-governance", title: "Regulation & Regulatory Policy", field: "publicpolicy", detail: true, requires: ["public-policy"] },

  // --- Public management --------------------------------------------------
  { id: "public-management", title: "Public Management", field: "publicpolicy", detail: true, requires: ["public-administration"] },
  { id: "public-budgeting", title: "Public Budgeting & Financial Management", field: "publicpolicy", detail: true, requires: ["public-administration"] },
  { id: "public-personnel-hrm", title: "Public Human Resource Management", field: "publicpolicy", detail: true, requires: ["public-management"] },
  { id: "performance-management", title: "Performance Management & Measurement", field: "publicpolicy", detail: true, requires: ["public-management"] },
  { id: "e-government", title: "Digital Government", field: "publicpolicy", detail: true, requires: ["public-management"] },
  { id: "intergovernmental-relations", title: "Intergovernmental Relations & Federalism", field: "publicpolicy", detail: true, requires: ["public-administration"] },

  // --- Governance, ethics & accountability -------------------------------
  { id: "public-sector-ethics", title: "Public Sector Ethics & Accountability", field: "publicpolicy", detail: true, requires: ["public-administration"] },
  { id: "collaborative-governance", title: "Collaborative Governance & Partnerships", field: "publicpolicy", detail: true, requires: ["public-management"] },
  { id: "comparative-public-administration", title: "Comparative Public Administration", field: "publicpolicy", detail: true, requires: ["public-administration", "comparative-politics"] },
  { id: "nonprofit-management", title: "Nonprofit Management", field: "publicpolicy", detail: true, requires: ["public-administration"] },

  // --- Policy domains -----------------------------------------------------
  { id: "social-policy", title: "Social Policy & the Welfare State", field: "publicpolicy", detail: true, requires: ["public-policy"] },
  { id: "health-policy", title: "Health Policy", field: "publicpolicy", detail: true, requires: ["public-policy", "public-health"] },
  { id: "environmental-policy", title: "Environmental Policy", field: "publicpolicy", detail: true, requires: ["public-policy", "environmental-economics"] },
  { id: "development-administration", title: "Development Administration", field: "publicpolicy", detail: true, requires: ["public-administration", "development-politics"] },

]);
