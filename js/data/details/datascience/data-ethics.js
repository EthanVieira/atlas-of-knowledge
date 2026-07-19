registerDetail({
  long:
    "Data Ethics & Privacy examines the moral, social, and legal responsibilities that come with collecting, analyzing, and acting on data—the recognition that data science is not a neutral technical activity but one with real consequences for real people. " +
    "Building on the introduction to data science, it develops the critical awareness and practical principles that responsible practice requires. " +
    "The course begins with why ethics matters in data science, through cases where data and algorithms have caused harm, and the ways in which claims of objectivity can conceal bias and value choices. " +
    "It develops the central issue of fairness and bias: how bias enters data and models through historical inequity, unrepresentative data, and proxy variables, the competing formal definitions of algorithmic fairness and the impossibility of satisfying all at once, and the disparate impact that automated decisions can have. " +
    "Privacy is treated in depth: the value of privacy, the ways data can re-identify supposedly anonymous individuals, and the technical approaches to protecting it, including k-anonymity and differential privacy, alongside the legal frameworks such as the GDPR. " +
    "The course examines transparency, interpretability, and accountability in automated decision-making, informed consent and the ethics of data collection, and the broader questions of surveillance, power, and the concentration of data. " +
    "Professional codes and the practical governance of data and models round out a course that prepares data scientists to anticipate harm and to build systems that are fair, private, and accountable.",
  topics: [
    "Why ethics matters in data science",
    "The myth of neutral data",
    "How bias enters data and models",
    "Definitions of algorithmic fairness",
    "Disparate impact and discrimination",
    "The value of privacy",
    "Re-identification and anonymization",
    "Differential privacy",
    "Data protection law (GDPR)",
    "Transparency and interpretability",
    "Accountability for automated decisions",
    "Informed consent and data collection",
    "Surveillance and power",
    "Professional codes and governance",
    "Building responsible systems",
  ],
  recommended: [
    res("Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy", "Cathy O'Neil", { type: "textbook" }),
    res("Fairness and Machine Learning: Limitations and Opportunities", "Solon Barocas, Moritz Hardt & Arvind Narayanan", { type: "textbook", free: true, url: "https://fairmlbook.org/" }),
  ],
  supplementary: [
    res("The Ethical Algorithm: The Science of Socially Aware Algorithm Design", "Michael Kearns & Aaron Roth", { type: "reference" }),
    res("Data Feminism", "Catherine D'Ignazio & Lauren F. Klein", { type: "reference", free: true, url: "https://data-feminism.mitpress.mit.edu/" }),
  ],
});
