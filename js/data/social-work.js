/* ============================================================================
 *  SOCIAL WORK
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/socialwork/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it. Social work is the applied profession
 *  of helping individuals, families, and communities and pursuing social
 *  justice. It builds on sociology, psychology (human behavior, clinical),
 *  and public policy (social policy) rather than repeating them.
 * ==========================================================================*/
registerCourses([

  // --- Foundations & knowledge base --------------------------------------
  { id: "intro-social-work", title: "Introduction to Social Work", field: "socialwork", detail: true, requires: ["sociology"] },
  { id: "human-behavior-social-environment", title: "Human Behavior & the Social Environment", field: "socialwork", detail: true, requires: ["intro-social-work", "developmental-psychology"] },
  { id: "social-welfare-policy", title: "Social Welfare Policy & Services", field: "socialwork", detail: true, requires: ["intro-social-work", "social-policy"] },
  { id: "social-work-research", title: "Social Work Research Methods", field: "socialwork", detail: true, requires: ["intro-social-work", "social-research-methods"] },
  { id: "social-work-ethics", title: "Social Work Values & Ethics", field: "socialwork", detail: true, requires: ["intro-social-work"] },

  // --- Practice methods ---------------------------------------------------
  { id: "generalist-practice", title: "Generalist Social Work Practice", field: "socialwork", detail: true, requires: ["intro-social-work"] },
  { id: "clinical-social-work", title: "Clinical Social Work", field: "socialwork", detail: true, requires: ["human-behavior-social-environment", "abnormal-psychology"] },
  { id: "group-work", title: "Social Work with Groups", field: "socialwork", detail: true, requires: ["generalist-practice"] },
  { id: "community-organizing", title: "Community Organizing & Macro Practice", field: "socialwork", detail: true, requires: ["intro-social-work"] },
  { id: "family-social-work", title: "Family Social Work", field: "socialwork", detail: true, requires: ["human-behavior-social-environment", "family-sociology"] },

  // --- Fields of practice -------------------------------------------------
  { id: "child-welfare", title: "Child Welfare", field: "socialwork", detail: true, requires: ["social-welfare-policy"] },
  { id: "medical-social-work", title: "Health & Medical Social Work", field: "socialwork", detail: true, requires: ["clinical-social-work", "medical-sociology"] },
  { id: "mental-health-social-work", title: "Mental Health & Behavioral Social Work", field: "socialwork", detail: true, requires: ["clinical-social-work"] },
  { id: "gerontological-social-work", title: "Gerontological Social Work", field: "socialwork", detail: true, requires: ["human-behavior-social-environment"] },
  { id: "school-social-work", title: "School Social Work", field: "socialwork", detail: true, requires: ["generalist-practice"] },
  { id: "addiction-social-work", title: "Substance Use & Addiction", field: "socialwork", detail: true, requires: ["clinical-social-work"] },
  { id: "forensic-social-work", title: "Forensic & Criminal Justice Social Work", field: "socialwork", detail: true, requires: ["social-welfare-policy", "criminology"] },

  // --- Cross-cutting ------------------------------------------------------
  { id: "diversity-social-justice", title: "Diversity, Oppression & Social Justice", field: "socialwork", detail: true, requires: ["intro-social-work"] },
  { id: "crisis-trauma-intervention", title: "Crisis & Trauma Intervention", field: "socialwork", detail: true, requires: ["clinical-social-work"] },
  { id: "social-work-administration", title: "Human Services Administration", field: "socialwork", detail: true, requires: ["community-organizing"] },

  { id: "field-education", title: "Field Education & Practicum", field: "socialwork", detail: true, requires: ["generalist-practice"] },
  { id: "international-social-work", title: "International & Global Social Work", field: "socialwork", detail: true, requires: ["intro-social-work"] },
]);
