/* ============================================================================
 *  SOCIOLOGY (social sciences)
 * ==========================================================================*/
registerCourses([

  { id: "sociology", title: "Introduction to Sociology", field: "sociology",
    desc: "The systematic study of society, social behavior and social institutions.",
    requires: [],
    topics: ["The sociological imagination", "Culture & socialization", "Social structure", "Institutions", "Deviance", "Social change"],
    free: [R("Introduction to Sociology", "OpenStax", "https://openstax.org/details/books/introduction-sociology-3e")],
    paid: [R("The Sociological Imagination", "C. Wright Mills")] },

  { id: "sociological-theory", title: "Sociological Theory", field: "sociology",
    desc: "The classical and contemporary frameworks for explaining social life.",
    requires: ["sociology"],
    topics: ["Marx", "Weber", "Durkheim", "Functionalism", "Conflict theory", "Symbolic interactionism"],
    free: [R("Sociological theory notes", "Various")],
    paid: [R("Classical Sociological Theory", "Ritzer & Stepnisky")] },

  { id: "social-research-methods", title: "Social Research Methods", field: "sociology",
    desc: "How sociology gathers and analyzes evidence — quantitative and qualitative.",
    requires: ["sociology", "statistics"],
    topics: ["Research design", "Surveys", "Interviews & ethnography", "Sampling", "Measurement", "Mixed methods"],
    free: [R("Social research methods notes", "Various")],
    paid: [R("Social Research Methods", "Alan Bryman")] },

  { id: "social-stratification", title: "Social Stratification", field: "sociology",
    desc: "The structure of inequality: class, status, race, gender and mobility.",
    requires: ["sociological-theory"],
    topics: ["Class & status", "Social mobility", "Race & ethnicity", "Gender inequality", "Poverty", "Global inequality"],
    free: [R("Stratification notes", "Various")],
    paid: [R("Social Stratification", "David Grusky (ed.)")] },

  { id: "economic-sociology", title: "Economic Sociology", field: "sociology",
    desc: "How social relations, networks and institutions shape economic action.",
    requires: ["sociology", "microeconomics"],
    topics: ["Embeddedness", "Markets as social structures", "Networks & trust", "Institutions", "The sociology of money", "Organizations"],
    free: [R("Economic sociology notes", "Various")],
    paid: [R("The Handbook of Economic Sociology", "Smelser & Swedberg")] },

  { id: "social-network-analysis", title: "Social Network Analysis", field: "sociology",
    desc: "Modeling social structure as networks of relationships.",
    requires: ["social-research-methods", "graph-theory"],
    topics: ["Nodes & ties", "Centrality", "Community detection", "Structural holes", "Diffusion & contagion", "Network models"],
    free: [R("Networks (companion)", "David Easley & Jon Kleinberg", "https://www.cs.cornell.edu/home/kleinber/networks-book/")],
    paid: [R("Social Network Analysis", "Wasserman & Faust")] },

  { id: "demography", title: "Demography", field: "sociology",
    desc: "The statistical study of human populations — birth, death, migration and structure.",
    requires: ["social-research-methods", "statistics"],
    topics: ["Fertility & mortality", "Life tables", "Migration", "Population projection", "The demographic transition", "Age structure"],
    free: [R("Demography notes", "Various")],
    paid: [R("The Methods and Materials of Demography", "Siegel & Swanson")] },

  { id: "criminology", title: "Criminology", field: "sociology",
    desc: "The study of crime, its causes, and society's responses.",
    requires: ["sociology"],
    topics: ["Theories of crime", "Deviance", "Policing & punishment", "The criminal justice system", "Victimology", "Crime & inequality"],
    free: [R("Criminology notes", "Various")],
    paid: [R("Criminology", "Larry Siegel")] },

]);
