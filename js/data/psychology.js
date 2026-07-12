/* ============================================================================
 *  PSYCHOLOGY
 * ==========================================================================*/
registerCourses([

  { id: "psychology", title: "Introduction to Psychology", field: "psychology",
    desc: "The scientific study of mind and behavior.",
    requires: [],
    topics: ["History & approaches", "The brain & behavior", "Sensation & perception", "Learning", "Memory", "Emotion & motivation"],
    free: [R("Introduction to Psychology", "Paul Bloom / Yale", "https://oyc.yale.edu/psychology/psyc-110")],
    paid: [R("Psychology", "Peter Gray")] },

  { id: "research-methods-psych", title: "Research Methods & Statistics", field: "psychology",
    desc: "How psychology tests its claims: experimental design, measurement and statistical inference.",
    requires: ["psychology", "statistics"],
    topics: ["Experimental design", "Reliability & validity", "Sampling", "Statistical testing", "Replication & the open-science movement", "Ethics of research"],
    free: [R("Research methods notes", "Various")],
    paid: [R("Research Methods in Psychology", "Morling")] },

  { id: "cognitive-psychology", title: "Cognitive Psychology", field: "psychology",
    desc: "The mental processes of perception, attention, memory, language and thought.",
    requires: ["psychology"],
    topics: ["Attention", "Working & long-term memory", "Language processing", "Concepts & categories", "Reasoning & decision-making", "Problem solving"],
    free: [R("Cognitive psychology notes", "Various")],
    paid: [R("Cognitive Psychology", "Sternberg & Sternberg")] },

  { id: "developmental-psychology", title: "Developmental Psychology", field: "psychology",
    desc: "How mind and behavior change across the lifespan.",
    requires: ["psychology"],
    topics: ["Cognitive development (Piaget)", "Attachment", "Language acquisition", "Moral development", "Adolescence", "Aging"],
    free: [R("Developmental psychology notes", "Various")],
    paid: [R("Developmental Psychology", "David Shaffer")] },

  { id: "social-psychology", title: "Social Psychology", field: "psychology",
    desc: "How people think about, influence and relate to one another.",
    requires: ["psychology"],
    topics: ["Attitudes & persuasion", "Conformity & obedience", "Group dynamics", "Prejudice & stereotyping", "Attribution", "Prosocial & aggressive behavior"],
    free: [R("Social psychology notes", "Various")],
    paid: [R("Social Psychology", "Elliot Aronson et al.")] },

  { id: "personality-psychology", title: "Personality Psychology", field: "psychology",
    desc: "The structure and origins of individual differences in thought, feeling and behavior.",
    requires: ["psychology"],
    topics: ["Trait theories (Big Five)", "Psychodynamic approaches", "Humanistic theories", "Behavioral genetics of personality", "Assessment", "Consistency & change"],
    free: [R("Personality psychology notes", "Various")],
    paid: [R("Personality: Theory and Research", "Cervone & Pervin")] },

  { id: "biological-psychology", title: "Biological Psychology", field: "psychology",
    desc: "The biological bases of behavior — brain, hormones and genes.",
    requires: ["psychology"],
    topics: ["Neurons & neurotransmission", "Brain structures & function", "Hormones & behavior", "Sleep & arousal", "Psychopharmacology", "Behavioral genetics"],
    free: [R("Biological psychology notes", "Various")],
    paid: [R("Biological Psychology", "James Kalat")] },

  { id: "abnormal-psychology", title: "Abnormal Psychology", field: "psychology",
    desc: "The nature, causes and classification of psychological disorders.",
    requires: ["psychology"],
    topics: ["Classification (DSM)", "Anxiety & mood disorders", "Schizophrenia", "Personality disorders", "Etiological models", "Assessment & diagnosis"],
    free: [R("Abnormal psychology notes", "Various")],
    paid: [R("Abnormal Psychology", "Ronald Comer")] },

  { id: "clinical-psychology", title: "Clinical Psychology", field: "psychology",
    desc: "The assessment and treatment of mental disorders.",
    requires: ["abnormal-psychology", "research-methods-psych"],
    topics: ["Psychological assessment", "Psychotherapy approaches", "Cognitive-behavioral therapy", "Evidence-based practice", "Clinical trials", "Professional ethics"],
    free: [R("Clinical psychology notes", "Various")],
    paid: [R("Clinical Psychology: Science and Practice", "Kramer, Bernstein & Phares")] },

  { id: "psychometrics", title: "Psychometrics", field: "psychology",
    desc: "The theory and technique of psychological measurement.",
    requires: ["research-methods-psych", "linear-algebra"],
    topics: ["Classical test theory", "Reliability & validity", "Factor analysis", "Item response theory", "Scaling", "Test construction"],
    free: [R("Psychometrics notes", "Various")],
    paid: [R("Psychometric Theory", "Nunnally & Bernstein")] },

]);
