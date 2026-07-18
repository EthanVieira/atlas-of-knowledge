/* ============================================================================
 *  LAW
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/law/<id>.js; the `detail: true` flag
 *  tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Foundations & theory ----------------------------------------------
  { id: "intro-law", title: "Foundations of Law", field: "law", detail: true, requires: [] },
  { id: "jurisprudence", title: "Jurisprudence (Philosophy of Law)", field: "law", detail: true, requires: ["intro-law", "political-philosophy"] },
  { id: "legal-ethics", title: "Legal Ethics & Professional Responsibility", field: "law", detail: true, requires: ["intro-law"] },
  { id: "comparative-law", title: "Comparative Law", field: "law", detail: true, requires: ["jurisprudence"] },
  { id: "legal-history", title: "Legal History", field: "law", detail: true, requires: ["jurisprudence", "modern-history"] },

  // --- Public law --------------------------------------------------------
  { id: "constitutional-law", title: "Constitutional Law", field: "law", detail: true, requires: ["intro-law"] },
  { id: "administrative-law", title: "Administrative Law", field: "law", detail: true, requires: ["constitutional-law"] },
  { id: "criminal-law", title: "Criminal Law", field: "law", detail: true, requires: ["intro-law"] },
  { id: "criminal-procedure", title: "Criminal Procedure", field: "law", detail: true, requires: ["criminal-law"] },
  { id: "environmental-law", title: "Environmental Law", field: "law", detail: true, requires: ["administrative-law"] },
  { id: "tax-law", title: "Tax Law", field: "law", detail: true, requires: ["intro-law", "public-economics"] },

  // --- Private law -------------------------------------------------------
  { id: "contract-law", title: "Contract Law", field: "law", detail: true, requires: ["intro-law"] },
  { id: "tort-law", title: "Tort Law", field: "law", detail: true, requires: ["intro-law"] },
  { id: "property-law", title: "Property Law", field: "law", detail: true, requires: ["intro-law"] },
  { id: "intellectual-property-law", title: "Intellectual Property Law", field: "law", detail: true, requires: ["property-law"] },
  { id: "corporate-law", title: "Corporate Law", field: "law", detail: true, requires: ["contract-law"] },
  { id: "commercial-law", title: "Commercial Law", field: "law", detail: true, requires: ["contract-law"] },
  { id: "labor-law", title: "Labor & Employment Law", field: "law", detail: true, requires: ["contract-law"] },
  { id: "family-law", title: "Family Law", field: "law", detail: true, requires: ["intro-law"] },

  // --- Procedure & evidence ----------------------------------------------
  { id: "civil-procedure", title: "Civil Procedure", field: "law", detail: true, requires: ["intro-law"] },
  { id: "evidence-law", title: "Evidence", field: "law", detail: true, requires: ["intro-law"] },

  // --- Economic regulation -----------------------------------------------
  { id: "law-and-economics", title: "Law & Economics", field: "law", detail: true, requires: ["jurisprudence", "microeconomics"] },
  { id: "antitrust-law", title: "Antitrust & Competition Law", field: "law", detail: true, requires: ["law-and-economics"] },

  // --- International -----------------------------------------------------
  { id: "international-law", title: "International Law", field: "law", detail: true, requires: ["intro-law", "international-relations"] },
  { id: "human-rights-law", title: "International Human Rights Law", field: "law", detail: true, requires: ["international-law"] },

]);
