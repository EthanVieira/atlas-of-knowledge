/* ============================================================================
 *  NURSING
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/nursing/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it. Nursing is the health profession
 *  focused on the care of individuals, families, and communities. It builds on
 *  biology (`physiology`), medicine (`pharmacology`, `pathophysiology`,
 *  `public-health`), psychology (`abnormal-psychology`) and statistics rather
 *  than repeating them.
 * ==========================================================================*/
registerCourses([

  // --- Foundations & science ---------------------------------------------
  { id: "nursing-foundations", title: "Fundamentals of Nursing", field: "nursing", detail: true, requires: ["physiology"] },
  { id: "health-assessment", title: "Health Assessment", field: "nursing", detail: true, requires: ["nursing-foundations"] },
  { id: "nursing-pharmacology", title: "Pharmacology for Nursing", field: "nursing", detail: true, requires: ["nursing-foundations", "pharmacology"] },
  { id: "nursing-pathophysiology", title: "Pathophysiology for Nursing", field: "nursing", detail: true, requires: ["nursing-foundations", "pathophysiology"] },
  { id: "nursing-theory", title: "Nursing Theory & Conceptual Models", field: "nursing", detail: true, requires: ["nursing-foundations"] },
  { id: "nursing-ethics-law", title: "Nursing Ethics, Law & Professional Issues", field: "nursing", detail: true, requires: ["nursing-foundations"] },

  // --- Core clinical practice --------------------------------------------
  { id: "medical-surgical-nursing", title: "Medical-Surgical Nursing", field: "nursing", detail: true, requires: ["health-assessment", "nursing-pathophysiology"] },
  { id: "maternal-newborn-nursing", title: "Maternal & Newborn Nursing", field: "nursing", detail: true, requires: ["medical-surgical-nursing"] },
  { id: "pediatric-nursing", title: "Pediatric Nursing", field: "nursing", detail: true, requires: ["medical-surgical-nursing"] },
  { id: "psychiatric-mental-health-nursing", title: "Psychiatric & Mental Health Nursing", field: "nursing", detail: true, requires: ["nursing-foundations", "abnormal-psychology"] },
  { id: "gerontological-nursing", title: "Gerontological Nursing", field: "nursing", detail: true, requires: ["medical-surgical-nursing"] },
  { id: "critical-care-nursing", title: "Critical Care & Emergency Nursing", field: "nursing", detail: true, requires: ["medical-surgical-nursing"] },
  { id: "community-health-nursing", title: "Community & Public Health Nursing", field: "nursing", detail: true, requires: ["nursing-foundations", "public-health"] },

  // --- Science & scholarship of nursing ----------------------------------
  { id: "nursing-research-evidence", title: "Nursing Research & Evidence-Based Practice", field: "nursing", detail: true, requires: ["nursing-foundations", "statistics"] },
  { id: "nursing-informatics", title: "Nursing Informatics", field: "nursing", detail: true, requires: ["nursing-foundations"] },

  // --- Leadership & advanced practice ------------------------------------
  { id: "nursing-leadership-management", title: "Nursing Leadership & Management", field: "nursing", detail: true, requires: ["medical-surgical-nursing"] },
  { id: "nursing-education", title: "Nursing Education", field: "nursing", detail: true, requires: ["nursing-theory"] },
  { id: "palliative-hospice-nursing", title: "Palliative & Hospice Nursing", field: "nursing", detail: true, requires: ["medical-surgical-nursing"] },
  { id: "advanced-practice-nursing", title: "Advanced Practice Nursing", field: "nursing", detail: true, requires: ["medical-surgical-nursing", "nursing-pharmacology"] },
  { id: "nurse-anesthesia", title: "Nurse Anesthesia", field: "nursing", detail: true, requires: ["advanced-practice-nursing"] },

]);
