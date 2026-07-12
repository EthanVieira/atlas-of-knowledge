/* ============================================================================
 *  VISUAL ARTS (humanities)
 * ==========================================================================*/
registerCourses([

  { id: "art-history", title: "Art History", field: "visualarts",
    desc: "The visual arts across cultures and eras — style, meaning and context.",
    requires: [],
    topics: ["Prehistoric to classical", "Medieval & Renaissance", "Baroque", "Modernism", "Non-Western traditions", "Contemporary art"],
    free: [R("Smarthistory", "Smarthistory", "https://smarthistory.org/")],
    paid: [R("Gardner's Art Through the Ages", "Fred Kleiner")] },

  { id: "drawing-painting", title: "Drawing & Painting", field: "visualarts",
    desc: "The foundational studio skills of representation in line, tone and color.",
    requires: [],
    topics: ["Line & gesture", "Value & light", "Perspective", "Color theory", "Composition", "Media & techniques"],
    free: [R("Drawing & painting resources", "Various")],
    paid: [R("The Natural Way to Draw", "Kimon Nicolaïdes")] },

  { id: "design-principles", title: "Design Principles", field: "visualarts",
    desc: "The visual language of composition — the grammar shared by all design disciplines.",
    requires: [],
    topics: ["Elements of design", "Balance & hierarchy", "Color & contrast", "Typography basics", "Grid systems", "Gestalt principles"],
    free: [R("Design principles resources", "Various")],
    paid: [R("The Elements of Graphic Design", "Alex White")] },

  { id: "sculpture", title: "Sculpture & 3D Form", field: "visualarts",
    desc: "Making form in three dimensions — modeling, carving, casting and construction.",
    requires: ["drawing-painting"],
    topics: ["Modeling & carving", "Casting", "Assemblage & construction", "Materials", "Space & volume", "Installation"],
    free: [R("Sculpture resources", "Various")],
    paid: [R("The Sculpture Reference", "Arthur Williams")] },

  { id: "printmaking", title: "Printmaking", field: "visualarts",
    desc: "The art of the multiple — relief, intaglio, lithography and screen printing.",
    requires: ["drawing-painting"],
    topics: ["Relief printing", "Intaglio", "Lithography", "Screen printing", "Editioning", "Contemporary print media"],
    free: [R("Printmaking resources", "Various")],
    paid: [R("Printmaking: A Complete Guide", "Beth Grabowski & Bill Fick")] },

  { id: "photography", title: "Photography", field: "visualarts",
    desc: "Making images with light — technique, composition and photographic vision.",
    requires: [],
    topics: ["Exposure & the camera", "Light & composition", "Digital & analog process", "Editing", "Genres of photography", "History of photography"],
    free: [R("Photography resources", "Various")],
    paid: [R("The Photographer's Eye", "Michael Freeman")] },

  { id: "graphic-design", title: "Graphic Design", field: "visualarts",
    desc: "Visual communication through type, image and layout.",
    requires: ["design-principles"],
    topics: ["Typography", "Layout & grids", "Branding & identity", "Color systems", "Editorial design", "Design process"],
    free: [R("Graphic design resources", "Various")],
    paid: [R("Thinking with Type", "Ellen Lupton")] },

  { id: "digital-media-art", title: "Digital & New Media Art", field: "visualarts",
    desc: "Art made with computation, code and interactivity.",
    requires: ["design-principles", "computer-graphics"],
    topics: ["Generative art", "Creative coding", "Interactive media", "Motion & video", "3D & virtual media", "Data as material"],
    free: [R("The Nature of Code", "Daniel Shiffman", "https://natureofcode.com/")],
    paid: [R("Digital Art", "Christiane Paul")] },

  { id: "architectural-history", title: "History & Theory of Architecture", field: "visualarts",
    desc: "The built environment as art — its history, styles and theory.",
    requires: ["art-history"],
    topics: ["Ancient & classical architecture", "Gothic & Renaissance", "Modernism", "Postmodernism", "Urbanism", "Architectural theory"],
    free: [R("Architectural history notes", "Various")],
    paid: [R("A Global History of Architecture", "Ching, Jarzombek & Prakash")] },

  { id: "art-criticism", title: "Art Theory & Criticism", field: "visualarts",
    desc: "The interpretation and critique of visual art.",
    requires: ["art-history", "critical-theory"],
    topics: ["Formal analysis", "Iconography", "Modernist criticism", "Semiotics of art", "Institutional critique", "Contemporary criticism"],
    free: [R("Art criticism notes", "Various")],
    paid: [R("Art Since 1900", "Foster, Krauss, Bois & Buchloh")] },

]);
