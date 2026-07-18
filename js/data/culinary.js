/* ============================================================================
 *  CULINARY ARTS
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/culinary/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it. The craft is an art; its science
 *  reaches back into chemistry, biology and beyond via cross-field edges.
 * ==========================================================================*/
registerCourses([

  // --- Foundations & core technique --------------------------------------
  { id: "culinary-foundations", title: "Culinary Foundations & Technique", field: "culinary", detail: true, requires: [] },
  { id: "baking-pastry", title: "Baking & Pastry Arts", field: "culinary", detail: true, requires: ["culinary-foundations"] },
  { id: "garde-manger", title: "Garde Manger & Charcuterie", field: "culinary", detail: true, requires: ["culinary-foundations"] },
  { id: "butchery", title: "Meat Fabrication & Butchery", field: "culinary", detail: true, requires: ["culinary-foundations"] },
  { id: "food-safety", title: "Food Safety & Sanitation", field: "culinary", detail: true, requires: ["culinary-foundations"] },

  // --- Food science ------------------------------------------------------
  { id: "food-science", title: "Food Science", field: "culinary", detail: true, requires: ["culinary-foundations", "general-chemistry"] },
  { id: "food-chemistry", title: "Food Chemistry", field: "culinary", detail: true, requires: ["food-science", "organic-chemistry"] },
  { id: "food-microbiology", title: "Food Microbiology", field: "culinary", detail: true, requires: ["food-science", "microbiology"] },
  { id: "fermentation", title: "Fermentation Science", field: "culinary", detail: true, requires: ["food-microbiology"] },
  { id: "nutrition", title: "Nutrition & Dietetics", field: "culinary", detail: true, requires: ["food-science", "biochemistry"] },
  { id: "sensory-science", title: "Sensory Science & Evaluation", field: "culinary", detail: true, requires: ["food-science"] },
  { id: "molecular-gastronomy", title: "Molecular Gastronomy", field: "culinary", detail: true, requires: ["food-chemistry"] },
  { id: "food-engineering", title: "Food Processing & Engineering", field: "culinary", detail: true, requires: ["food-chemistry"] },

  // --- Cuisine, culture & beverage ---------------------------------------
  { id: "world-cuisines", title: "World Cuisines", field: "culinary", detail: true, requires: ["culinary-foundations"] },
  { id: "culinary-history", title: "History of Food & Gastronomy", field: "culinary", detail: true, requires: ["culinary-foundations"] },
  { id: "food-culture", title: "Food, Culture & Society", field: "culinary", detail: true, requires: ["culinary-foundations", "cultural-anthropology"] },
  { id: "wine-beverage", title: "Wine, Beverage & Pairing", field: "culinary", detail: true, requires: ["fermentation"] },
  { id: "sustainable-gastronomy", title: "Sustainable & Farm-to-Table Cuisine", field: "culinary", detail: true, requires: ["world-cuisines", "food-science"] },

  // --- Professional & applied --------------------------------------------
  { id: "bread-baking", title: "Artisan Bread Baking", field: "culinary", detail: true, requires: ["baking-pastry", "fermentation"] },
  { id: "confectionery", title: "Confectionery & Chocolate", field: "culinary", detail: true, requires: ["baking-pastry", "food-chemistry"] },
  { id: "plating-presentation", title: "Plating & Food Presentation", field: "culinary", detail: true, requires: ["culinary-foundations", "design-principles"] },
  { id: "menu-development", title: "Menu Development & Culinary R&D", field: "culinary", detail: true, requires: ["food-science"] },
  { id: "restaurant-management", title: "Restaurant & Foodservice Management", field: "culinary", detail: true, requires: ["culinary-foundations", "microeconomics"] },
  { id: "food-styling-photography", title: "Food Styling & Photography", field: "culinary", detail: true, requires: ["plating-presentation", "photography"] },

]);
