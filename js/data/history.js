/* ============================================================================
 *  HISTORY (humanities)
 * ==========================================================================*/
registerCourses([

  { id: "historiography", title: "Historiography & Method", field: "history",
    desc: "How historians work: sources, evidence, interpretation and the writing of history.",
    requires: [],
    topics: ["Primary vs secondary sources", "Source criticism", "Schools of history", "Causation in history", "Historical argument", "Bias & perspective"],
    free: [R("Historiography notes", "Various")],
    paid: [R("What is History?", "E. H. Carr")] },

  { id: "world-history", title: "World History", field: "history",
    desc: "The human story across civilizations, exchange, revolutions and the modern world.",
    requires: [],
    topics: ["Early civilizations", "Classical empires", "The medieval world", "Global exchange", "Revolutions", "The modern era"],
    free: [R("World History", "Khan Academy", "https://www.khanacademy.org/humanities/world-history")],
    paid: [R("Worlds Together, Worlds Apart", "Tignor et al.")] },

  { id: "ancient-history", title: "Ancient History", field: "history",
    desc: "The civilizations of antiquity — Mesopotamia, Egypt, Greece and Rome.",
    requires: ["world-history", "historiography"],
    topics: ["The first cities", "Ancient Egypt", "Classical Greece", "The Roman Republic & Empire", "Ancient economies", "Late antiquity"],
    free: [R("Ancient history notes", "Various")],
    paid: [R("SPQR: A History of Ancient Rome", "Mary Beard")] },

  { id: "medieval-history", title: "Medieval History", field: "history",
    desc: "Europe and its neighbors from the fall of Rome to the Renaissance.",
    requires: ["ancient-history"],
    topics: ["The early Middle Ages", "Feudalism", "The medieval church", "The Islamic world", "Crusades & trade", "Towns & universities"],
    free: [R("Medieval history notes", "Various")],
    paid: [R("The Inheritance of Rome", "Chris Wickham")] },

  { id: "early-modern-history", title: "Early Modern History", field: "history",
    desc: "The Renaissance to the Enlightenment — a world remade by exploration, reformation and revolution.",
    requires: ["medieval-history"],
    topics: ["The Renaissance", "The Reformation", "The age of exploration", "Absolutism", "The Scientific Revolution", "The Enlightenment"],
    free: [R("Early modern history notes", "Various")],
    paid: [R("The Pursuit of Glory: Europe 1648–1815", "Tim Blanning")] },

  { id: "modern-history", title: "Modern History", field: "history",
    desc: "The making of the contemporary world from the age of revolutions to the present.",
    requires: ["early-modern-history"],
    topics: ["Industrial Revolution", "Nationalism & empire", "The World Wars", "The Cold War", "Decolonization", "Globalization"],
    free: [R("Modern history notes", "Various")],
    paid: [R("The Age of Extremes", "Eric Hobsbawm")] },

  { id: "economic-history", title: "Economic History", field: "history",
    desc: "The long-run history of growth, trade, industry and living standards.",
    requires: ["modern-history", "microeconomics"],
    topics: ["Pre-industrial economies", "The Industrial Revolution", "Globalization & trade", "Money & finance in history", "The Great Divergence", "Growth & inequality over time"],
    free: [R("Economic history notes", "Various")],
    paid: [R("A Concise Economic History of the World", "Cameron & Neal")] },

  { id: "history-of-science", title: "History of Science", field: "history",
    desc: "How scientific knowledge and its institutions developed across cultures and centuries.",
    requires: ["world-history", "philosophy-of-science"],
    topics: ["Ancient & medieval science", "The Scientific Revolution", "The rise of the disciplines", "Science & society", "Big science", "Scientific change"],
    free: [R("History of science notes", "Various")],
    paid: [R("The Structure of Scientific Revolutions", "Thomas Kuhn")] },

  { id: "intellectual-history", title: "Intellectual History", field: "history",
    desc: "The history of ideas and the thinkers, texts and contexts that shaped them.",
    requires: ["world-history", "intro-philosophy"],
    topics: ["The history of ideas", "Contextual method", "Political & religious thought", "The Enlightenment", "Modern ideologies", "Reception & influence"],
    free: [R("Intellectual history notes", "Various")],
    paid: [R("The Great Chain of Being", "Arthur Lovejoy")] },

]);
