/* ============================================================================
 *  VETERINARY MEDICINE
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/vetmedicine/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it. Veterinary medicine is the health
 *  profession of animals. As applied comparative biology and clinical medicine
 *  it builds on biology (comparative anatomy, physiology, microbiology,
 *  immunology, zoology, animal behavior), medicine (pathology, pharmacology,
 *  public health) and agriculture (animal science) rather than repeating them.
 * ==========================================================================*/
registerCourses([

  // --- Basic veterinary sciences -----------------------------------------
  { id: "intro-veterinary-medicine", title: "Introduction to Veterinary Medicine", field: "vetmedicine", detail: true, requires: ["physiology"] },
  { id: "veterinary-anatomy", title: "Veterinary Anatomy", field: "vetmedicine", detail: true, requires: ["intro-veterinary-medicine", "comparative-anatomy"] },
  { id: "veterinary-physiology", title: "Veterinary Physiology", field: "vetmedicine", detail: true, requires: ["intro-veterinary-medicine"] },
  { id: "veterinary-pathology", title: "Veterinary Pathology", field: "vetmedicine", detail: true, requires: ["veterinary-anatomy", "general-pathology"] },
  { id: "veterinary-pharmacology", title: "Veterinary Pharmacology", field: "vetmedicine", detail: true, requires: ["intro-veterinary-medicine", "pharmacology"] },
  { id: "veterinary-microbiology", title: "Veterinary Microbiology", field: "vetmedicine", detail: true, requires: ["intro-veterinary-medicine", "microbiology"] },
  { id: "veterinary-parasitology", title: "Veterinary Parasitology", field: "vetmedicine", detail: true, requires: ["veterinary-microbiology"] },
  { id: "veterinary-immunology", title: "Veterinary Immunology", field: "vetmedicine", detail: true, requires: ["intro-veterinary-medicine", "immunology"] },

  // --- Clinical foundations ----------------------------------------------
  { id: "veterinary-clinical-pathology", title: "Veterinary Clinical Pathology", field: "vetmedicine", detail: true, requires: ["veterinary-pathology"] },
  { id: "veterinary-diagnostic-imaging", title: "Veterinary Diagnostic Imaging", field: "vetmedicine", detail: true, requires: ["veterinary-anatomy"] },
  { id: "veterinary-anesthesia", title: "Veterinary Anesthesia & Analgesia", field: "vetmedicine", detail: true, requires: ["veterinary-pharmacology"] },
  { id: "veterinary-surgery", title: "Veterinary Surgery", field: "vetmedicine", detail: true, requires: ["veterinary-anatomy", "veterinary-anesthesia"] },
  { id: "veterinary-internal-medicine", title: "Veterinary Internal Medicine", field: "vetmedicine", detail: true, requires: ["veterinary-pathology", "veterinary-pharmacology"] },
  { id: "theriogenology", title: "Theriogenology (Reproduction)", field: "vetmedicine", detail: true, requires: ["veterinary-physiology"] },

  // --- Species & practice areas ------------------------------------------
  { id: "small-animal-medicine", title: "Small Animal Medicine", field: "vetmedicine", detail: true, requires: ["veterinary-internal-medicine"] },
  { id: "large-animal-food-medicine", title: "Food & Production Animal Medicine", field: "vetmedicine", detail: true, requires: ["veterinary-internal-medicine", "animal-science"] },
  { id: "equine-medicine", title: "Equine Medicine", field: "vetmedicine", detail: true, requires: ["veterinary-internal-medicine"] },
  { id: "wildlife-exotic-medicine", title: "Wildlife, Zoo & Exotic Animal Medicine", field: "vetmedicine", detail: true, requires: ["veterinary-internal-medicine"] },

  // --- Population health & welfare ---------------------------------------
  { id: "veterinary-public-health", title: "Veterinary Public Health & One Health", field: "vetmedicine", detail: true, requires: ["intro-veterinary-medicine", "public-health"] },
  { id: "animal-welfare-ethics", title: "Animal Welfare & Ethics", field: "vetmedicine", detail: true, requires: ["intro-veterinary-medicine", "animal-behavior"] },

  { id: "veterinary-toxicology", title: "Veterinary Toxicology", field: "vetmedicine", detail: true, requires: ["veterinary-pharmacology"] },
  { id: "avian-poultry-medicine", title: "Avian & Poultry Medicine", field: "vetmedicine", detail: true, requires: ["veterinary-internal-medicine"] },
]);
