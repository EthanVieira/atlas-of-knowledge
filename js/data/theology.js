/* ============================================================================
 *  THEOLOGY & RELIGIOUS STUDIES
 * ==========================================================================*/
registerCourses([

  { id: "religious-studies", title: "Religious Studies", field: "theology",
    desc: "The academic, comparative and critical study of religion as a human phenomenon.",
    requires: [],
    topics: ["What is religion?", "Myth & ritual", "The sacred & profane", "Religious experience", "Methods in the study of religion", "Secularization"],
    free: [R("Religious studies notes", "Various")],
    paid: [R("The Sacred and the Profane", "Mircea Eliade")] },

  { id: "comparative-religion", title: "Comparative Religion", field: "theology",
    desc: "The world's religious traditions studied side by side.",
    requires: ["religious-studies"],
    topics: ["Hinduism", "Buddhism", "Judaism", "Christianity", "Islam", "Indigenous & new religions"],
    free: [R("World religions notes", "Various")],
    paid: [R("The World's Religions", "Huston Smith")] },

  { id: "biblical-studies", title: "Biblical Studies", field: "theology",
    desc: "The critical study of the Hebrew Bible and New Testament in their historical contexts.",
    requires: ["religious-studies"],
    topics: ["Textual criticism", "The historical-critical method", "Hebrew Bible", "New Testament", "Canon formation", "Hermeneutics"],
    free: [R("Introduction to the New Testament", "Dale Martin / Yale", "https://oyc.yale.edu/religious-studies/rlst-152")],
    paid: [R("The New Oxford Annotated Bible", "Oxford University Press")] },

  { id: "history-of-religions", title: "History of Religions", field: "theology",
    desc: "How religious traditions arose, spread and transformed through history.",
    requires: ["religious-studies", "world-history"],
    topics: ["Ancient religions", "Axial age", "Spread of world religions", "Religion & empire", "Reform movements", "Religion in modernity"],
    free: [R("History of religions notes", "Various")],
    paid: [R("A History of God", "Karen Armstrong")] },

  { id: "systematic-theology", title: "Systematic Theology", field: "theology",
    desc: "The coherent articulation of religious doctrine and its philosophical foundations.",
    requires: ["religious-studies", "philosophy-of-religion"],
    topics: ["Doctrine of God", "Revelation & scripture", "Creation & humanity", "Christology / doctrine", "Eschatology", "Theological method"],
    free: [R("Systematic theology notes", "Various")],
    paid: [R("Church Dogmatics (selections)", "Karl Barth")] },

  { id: "mysticism", title: "Mysticism & Contemplative Traditions", field: "theology",
    desc: "The pursuit of direct experience of the divine across traditions.",
    requires: ["comparative-religion"],
    topics: ["Mystical experience", "Christian mysticism", "Sufism", "Kabbalah", "Contemplative practice in Asian traditions", "Interpretations of mysticism"],
    free: [R("Mysticism notes", "Various")],
    paid: [R("Mysticism", "Evelyn Underhill")] },

  { id: "ethics-and-religion", title: "Religious Ethics", field: "theology",
    desc: "How religious traditions reason about the good life and moral action.",
    requires: ["comparative-religion", "ethics"],
    topics: ["Divine command theory", "Natural law", "Virtue in religious traditions", "Comparative religious ethics", "Bioethics & religion", "Social justice traditions"],
    free: [R("Religious ethics notes", "Various")],
    paid: [R("Ethics from a Theocentric Perspective", "James Gustafson")] },

]);
