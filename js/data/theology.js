/* ============================================================================
 *  THEOLOGY & RELIGIOUS STUDIES
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/theology/<id>.js; the `detail: true`
 *  flag tells the renderer to fetch it.
 * ==========================================================================*/
registerCourses([

  // --- Foundations & methods ---------------------------------------------
  { id: "religious-studies", title: "Religious Studies", field: "theology", detail: true, requires: [] },
  { id: "comparative-religion", title: "Comparative Religion", field: "theology", detail: true, requires: ["religious-studies"] },
  { id: "history-of-religions", title: "History of Religions", field: "theology", detail: true, requires: ["religious-studies", "world-history"] },
  { id: "religion-and-society", title: "Religion & Society", field: "theology", detail: true, requires: ["religious-studies", "sociology"] },

  // --- Scripture & sacred texts ------------------------------------------
  { id: "biblical-studies", title: "Biblical Studies", field: "theology", detail: true, requires: ["religious-studies"] },
  { id: "hebrew-bible", title: "Hebrew Bible / Old Testament", field: "theology", detail: true, requires: ["biblical-studies"] },
  { id: "new-testament", title: "New Testament Studies", field: "theology", detail: true, requires: ["biblical-studies"] },

  // --- World religious traditions ----------------------------------------
  { id: "islamic-studies", title: "Islamic Studies", field: "theology", detail: true, requires: ["comparative-religion"] },
  { id: "buddhist-studies", title: "Buddhist Studies", field: "theology", detail: true, requires: ["comparative-religion"] },
  { id: "hindu-studies", title: "Hindu Studies", field: "theology", detail: true, requires: ["comparative-religion"] },
  { id: "jewish-studies", title: "Jewish Studies", field: "theology", detail: true, requires: ["comparative-religion", "biblical-studies"] },
  { id: "east-asian-religions", title: "East Asian Religions", field: "theology", detail: true, requires: ["comparative-religion"] },
  { id: "mysticism", title: "Mysticism & Contemplative Traditions", field: "theology", detail: true, requires: ["comparative-religion"] },

  // --- Christian theology -------------------------------------------------
  { id: "church-history", title: "History of Christianity", field: "theology", detail: true, requires: ["history-of-religions"] },
  { id: "systematic-theology", title: "Systematic Theology", field: "theology", detail: true, requires: ["religious-studies", "philosophy-of-religion"] },
  { id: "christian-theology", title: "Christian Doctrine", field: "theology", detail: true, requires: ["systematic-theology"] },
  { id: "practical-theology", title: "Practical & Pastoral Theology", field: "theology", detail: true, requires: ["systematic-theology"] },

  // --- Ethics & engagement -----------------------------------------------
  { id: "ethics-and-religion", title: "Religious Ethics", field: "theology", detail: true, requires: ["comparative-religion", "ethics"] },
  { id: "moral-theology", title: "Moral Theology", field: "theology", detail: true, requires: ["ethics-and-religion", "systematic-theology"] },
  { id: "theology-and-science", title: "Theology & Science", field: "theology", detail: true, requires: ["systematic-theology", "philosophy-of-science"] },
  { id: "feminist-theology", title: "Feminist & Liberation Theology", field: "theology", detail: true, requires: ["systematic-theology", "critical-theory"] },

]);
