/* ============================================================================
 *  DENTISTRY
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/dentistry/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it. Dentistry is the health profession of
 *  the mouth, teeth, and craniofacial region. As a branch of the medical
 *  sciences it builds on medicine (anatomy, histology, pathology, pharmacology,
 *  public health), biology (physiology, microbiology) and even forensic science
 *  rather than repeating them.
 * ==========================================================================*/
registerCourses([

  // --- Basic dental sciences ---------------------------------------------
  { id: "intro-dentistry", title: "Introduction to Dentistry", field: "dentistry", detail: true, requires: ["human-anatomy"] },
  { id: "oral-anatomy-histology", title: "Oral Anatomy, Histology & Embryology", field: "dentistry", detail: true, requires: ["intro-dentistry", "histology"] },
  { id: "oral-physiology-biology", title: "Oral Biology & Physiology", field: "dentistry", detail: true, requires: ["intro-dentistry", "physiology"] },
  { id: "dental-materials", title: "Dental Materials", field: "dentistry", detail: true, requires: ["intro-dentistry"] },
  { id: "oral-microbiology", title: "Oral Microbiology", field: "dentistry", detail: true, requires: ["intro-dentistry", "microbiology"] },
  { id: "oral-pathology", title: "Oral & Maxillofacial Pathology", field: "dentistry", detail: true, requires: ["oral-microbiology", "general-pathology"] },
  { id: "dental-pharmacology", title: "Dental Pharmacology & Therapeutics", field: "dentistry", detail: true, requires: ["intro-dentistry", "pharmacology"] },
  { id: "dental-radiology", title: "Oral Radiology & Imaging", field: "dentistry", detail: true, requires: ["oral-anatomy-histology"] },

  // --- Clinical dentistry -------------------------------------------------
  { id: "cariology-operative-dentistry", title: "Cariology & Operative Dentistry", field: "dentistry", detail: true, requires: ["oral-pathology", "dental-materials"] },
  { id: "endodontics", title: "Endodontics", field: "dentistry", detail: true, requires: ["cariology-operative-dentistry"] },
  { id: "periodontology", title: "Periodontology", field: "dentistry", detail: true, requires: ["oral-pathology"] },
  { id: "prosthodontics", title: "Prosthodontics", field: "dentistry", detail: true, requires: ["dental-materials", "oral-anatomy-histology"] },
  { id: "oral-maxillofacial-surgery", title: "Oral & Maxillofacial Surgery", field: "dentistry", detail: true, requires: ["oral-anatomy-histology", "oral-pathology"] },
  { id: "orthodontics", title: "Orthodontics", field: "dentistry", detail: true, requires: ["oral-anatomy-histology"] },
  { id: "dental-anesthesia", title: "Dental Anesthesia & Pain Control", field: "dentistry", detail: true, requires: ["dental-pharmacology"] },
  { id: "oral-medicine", title: "Oral Medicine", field: "dentistry", detail: true, requires: ["oral-pathology", "pathophysiology"] },

  // --- Specialties & population ------------------------------------------
  { id: "pediatric-dentistry", title: "Pediatric Dentistry", field: "dentistry", detail: true, requires: ["cariology-operative-dentistry"] },
  { id: "implantology", title: "Dental Implantology", field: "dentistry", detail: true, requires: ["prosthodontics", "oral-maxillofacial-surgery"] },
  { id: "dental-public-health", title: "Dental Public Health", field: "dentistry", detail: true, requires: ["intro-dentistry", "public-health"] },
  { id: "forensic-odontology", title: "Forensic Odontology", field: "dentistry", detail: true, requires: ["oral-anatomy-histology", "forensic-science"] },

]);
