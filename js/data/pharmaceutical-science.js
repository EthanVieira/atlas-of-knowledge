/* ============================================================================
 *  PHARMACEUTICAL SCIENCES
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/pharmascience/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it. Pharmaceutical sciences is the study of
 *  medicines — their design, formulation, action, and use. It builds on
 *  chemistry (`organic-chemistry`, `medicinal-chemistry`, `analytical-chemistry`),
 *  medicine (`pharmacology`, `pathophysiology`, `epidemiology`), biology
 *  (`molecular-biology`, `genetics`) and economics rather than repeating them.
 * ==========================================================================*/
registerCourses([

  // --- Foundations & drug chemistry --------------------------------------
  { id: "intro-pharmaceutical-sciences", title: "Introduction to Pharmaceutical Sciences", field: "pharmascience", detail: true, requires: ["organic-chemistry"] },
  { id: "pharmaceutical-analysis", title: "Pharmaceutical Analysis", field: "pharmascience", detail: true, requires: ["intro-pharmaceutical-sciences", "analytical-chemistry"] },
  { id: "pharmacognosy", title: "Pharmacognosy & Natural Products", field: "pharmascience", detail: true, requires: ["intro-pharmaceutical-sciences"] },

  // --- Pharmacology & disposition ----------------------------------------
  { id: "pharmacology-principles", title: "Principles of Pharmacology", field: "pharmascience", detail: true, requires: ["intro-pharmaceutical-sciences", "pharmacology"] },
  { id: "pharmacokinetics", title: "Pharmacokinetics", field: "pharmascience", detail: true, requires: ["pharmacology-principles"] },
  { id: "toxicology", title: "Toxicology", field: "pharmascience", detail: true, requires: ["pharmacology-principles"] },
  { id: "pharmacogenomics", title: "Pharmacogenomics", field: "pharmascience", detail: true, requires: ["pharmacology-principles", "genetics"] },

  // --- Pharmaceutics & formulation ---------------------------------------
  { id: "pharmaceutics", title: "Pharmaceutics & Dosage Forms", field: "pharmascience", detail: true, requires: ["intro-pharmaceutical-sciences"] },
  { id: "biopharmaceutics", title: "Biopharmaceutics", field: "pharmascience", detail: true, requires: ["pharmaceutics", "pharmacokinetics"] },
  { id: "pharmaceutical-technology", title: "Pharmaceutical Manufacturing & Technology", field: "pharmascience", detail: true, requires: ["pharmaceutics"] },
  { id: "novel-drug-delivery", title: "Drug Delivery Systems", field: "pharmascience", detail: true, requires: ["pharmaceutics"] },

  // --- Drug discovery & biotechnology ------------------------------------
  { id: "drug-discovery-development", title: "Drug Discovery & Development", field: "pharmascience", detail: true, requires: ["medicinal-chemistry", "pharmacology-principles"] },
  { id: "pharmaceutical-biotechnology", title: "Pharmaceutical Biotechnology", field: "pharmascience", detail: true, requires: ["intro-pharmaceutical-sciences", "molecular-biology"] },

  // --- Pharmacy practice -------------------------------------------------
  { id: "pharmacy-practice", title: "Pharmacy Practice & Dispensing", field: "pharmascience", detail: true, requires: ["pharmacology-principles"] },
  { id: "pharmacotherapy", title: "Pharmacotherapeutics", field: "pharmascience", detail: true, requires: ["pharmacology-principles", "pathophysiology"] },
  { id: "clinical-pharmacy", title: "Clinical Pharmacy", field: "pharmascience", detail: true, requires: ["pharmacotherapy"] },
  { id: "pharmacy-administration", title: "Pharmacy Administration & Management", field: "pharmascience", detail: true, requires: ["pharmacy-practice"] },

  // --- Safety, policy & economics ----------------------------------------
  { id: "regulatory-affairs-pharmacovigilance", title: "Regulatory Affairs & Pharmacovigilance", field: "pharmascience", detail: true, requires: ["drug-discovery-development"] },
  { id: "pharmacoepidemiology", title: "Pharmacoepidemiology", field: "pharmascience", detail: true, requires: ["pharmacology-principles", "epidemiology"] },
  { id: "pharmacoeconomics", title: "Pharmacoeconomics & Outcomes", field: "pharmascience", detail: true, requires: ["pharmacy-administration", "microeconomics"] },

]);
