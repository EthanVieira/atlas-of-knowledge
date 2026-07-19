/* ============================================================================
 *  DESIGN
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/design/<id>.js; the `detail: true` flag
 *  tells the renderer to fetch it. This field is the design DISCIPLINE — process,
 *  research, interaction, product, strategy and systems — built on top of the
 *  visual-craft design courses in visual arts (`design-principles`,
 *  `graphic-design`, `ux-design`, `industrial-design`) and reaching into
 *  cognitive science (HCI), business (marketing, management) and computer
 *  science rather than repeating them.
 * ==========================================================================*/
registerCourses([

  // --- Foundations & theory ----------------------------------------------
  { id: "design-thinking", title: "Design Thinking & the Design Process", field: "design", detail: true, requires: ["design-principles"] },
  { id: "design-history", title: "History of Design", field: "design", detail: true, requires: ["design-principles"] },
  { id: "design-research", title: "Design Research & User Research", field: "design", detail: true, requires: ["design-thinking"] },
  { id: "design-theory-criticism", title: "Design Theory & Criticism", field: "design", detail: true, requires: ["design-principles"] },

  // --- Interaction & experience ------------------------------------------
  { id: "interaction-design", title: "Interaction Design", field: "design", detail: true, requires: ["design-thinking", "human-computer-interaction"] },
  { id: "service-design", title: "Service Design", field: "design", detail: true, requires: ["ux-design"] },
  { id: "information-architecture", title: "Information Architecture", field: "design", detail: true, requires: ["ux-design"] },
  { id: "inclusive-design", title: "Inclusive & Accessible Design", field: "design", detail: true, requires: ["ux-design"] },
  { id: "information-design", title: "Information Design & Data Visualization", field: "design", detail: true, requires: ["graphic-design"] },

  // --- Product & making ---------------------------------------------------
  { id: "product-design", title: "Product Design", field: "design", detail: true, requires: ["industrial-design"] },
  { id: "design-prototyping", title: "Prototyping & Making", field: "design", detail: true, requires: ["product-design"] },
  { id: "design-for-sustainability", title: "Design for Sustainability", field: "design", detail: true, requires: ["product-design"] },
  { id: "environmental-design", title: "Environmental & Spatial Design", field: "design", detail: true, requires: ["design-principles"] },
  { id: "computational-design", title: "Computational & Generative Design", field: "design", detail: true, requires: ["design-thinking", "programming-fundamentals"] },

  // --- Brand, strategy & systems -----------------------------------------
  { id: "branding-identity", title: "Branding & Identity Design", field: "design", detail: true, requires: ["graphic-design", "marketing"] },
  { id: "design-management", title: "Design Management", field: "design", detail: true, requires: ["design-thinking", "management-principles"] },
  { id: "strategic-design", title: "Strategic Design & Innovation", field: "design", detail: true, requires: ["design-thinking"] },
  { id: "systems-design", title: "Systems & Transition Design", field: "design", detail: true, requires: ["design-thinking"] },

  // --- Responsibility & futures ------------------------------------------
  { id: "design-ethics", title: "Design Ethics & Responsibility", field: "design", detail: true, requires: ["design-thinking"] },
  { id: "speculative-design", title: "Speculative & Critical Design", field: "design", detail: true, requires: ["design-theory-criticism"] },

]);
