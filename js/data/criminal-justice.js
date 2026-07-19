/* ============================================================================
 *  CRIMINOLOGY & CRIMINAL JUSTICE
 * ----------------------------------------------------------------------------
 *  Course nodes: id, title, field and prerequisites — the graph's structure.
 *  Everything shown on an opened card (description, topics, tagged references)
 *  is lazy-loaded from js/data/details/criminaljustice/<id>.js; the
 *  `detail: true` flag tells the renderer to fetch it. This field studies crime,
 *  its causes and control, and the institutions of justice. It builds on
 *  sociology's `criminology`, and cross-links to law (criminal law &
 *  procedure), psychology (forensic psychology), public policy and statistics
 *  rather than repeating them.
 * ==========================================================================*/
registerCourses([

  // --- Criminological theory & method ------------------------------------
  { id: "criminological-theory", title: "Criminological Theory", field: "criminaljustice", detail: true, requires: ["criminology"] },
  { id: "crime-measurement", title: "Crime Measurement & Statistics", field: "criminaljustice", detail: true, requires: ["criminology", "statistics"] },
  { id: "deviance-social-control", title: "Deviance & Social Control", field: "criminaljustice", detail: true, requires: ["criminology"] },
  { id: "penology-corrections-theory", title: "Punishment & Penology", field: "criminaljustice", detail: true, requires: ["criminological-theory"] },

  // --- Types of crime ----------------------------------------------------
  { id: "violent-crime", title: "Violent Crime", field: "criminaljustice", detail: true, requires: ["criminological-theory"] },
  { id: "white-collar-crime", title: "White-Collar & Corporate Crime", field: "criminaljustice", detail: true, requires: ["criminological-theory"] },
  { id: "organized-crime", title: "Organized Crime", field: "criminaljustice", detail: true, requires: ["criminological-theory"] },
  { id: "cybercrime", title: "Cybercrime & Digital Forensics", field: "criminaljustice", detail: true, requires: ["criminological-theory"] },
  { id: "drugs-crime", title: "Drugs & Crime", field: "criminaljustice", detail: true, requires: ["criminological-theory"] },
  { id: "terrorism-political-violence", title: "Terrorism & Political Violence", field: "criminaljustice", detail: true, requires: ["criminological-theory"] },

  // --- The criminal justice system ---------------------------------------
  { id: "policing", title: "Policing & Law Enforcement", field: "criminaljustice", detail: true, requires: ["criminology"] },
  { id: "courts-criminal-procedure", title: "Courts & Criminal Procedure", field: "criminaljustice", detail: true, requires: ["criminology", "criminal-procedure"] },
  { id: "corrections", title: "Corrections & Prisons", field: "criminaljustice", detail: true, requires: ["penology-corrections-theory"] },
  { id: "juvenile-justice", title: "Juvenile Justice", field: "criminaljustice", detail: true, requires: ["criminological-theory"] },
  { id: "victimology", title: "Victimology", field: "criminaljustice", detail: true, requires: ["criminology"] },

  // --- Forensic & applied ------------------------------------------------
  { id: "forensic-science", title: "Forensic Science", field: "criminaljustice", detail: true, requires: ["criminology"] },
  { id: "criminal-psychology", title: "Criminal & Forensic Psychology", field: "criminaljustice", detail: true, requires: ["criminological-theory", "forensic-psychology"] },
  { id: "crime-prevention", title: "Crime Prevention & Security", field: "criminaljustice", detail: true, requires: ["criminological-theory"] },

  // --- Policy & critical -------------------------------------------------
  { id: "criminal-justice-policy", title: "Criminal Justice Policy & Reform", field: "criminaljustice", detail: true, requires: ["criminology", "public-policy"] },
  { id: "critical-criminology", title: "Critical Criminology", field: "criminaljustice", detail: true, requires: ["criminological-theory"] },

  { id: "comparative-criminology", title: "Comparative & International Criminology", field: "criminaljustice", detail: true, requires: ["criminological-theory"] },
  { id: "race-ethnicity-crime", title: "Race, Ethnicity & Crime", field: "criminaljustice", detail: true, requires: ["criminological-theory", "race-ethnicity-studies"] },
  { id: "restorative-justice", title: "Restorative Justice", field: "criminaljustice", detail: true, requires: ["penology-corrections-theory"] },
]);
