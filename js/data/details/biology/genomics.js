registerDetail({
  long: "Genomics studies the structure, function, evolution, and analysis of whole genomes. The course surveys the sequencing technologies that made the field possible, from Sanger chemistry through short-read next-generation sequencing to long-read single-molecule platforms, and examines the computational problems of assembling and annotating the resulting data. Students learn how genes are predicted, how genomes are organized around repetitive and regulatory elements, and how comparative and evolutionary genomics reveals conservation and selection across species. Functional genomics is developed through transcriptomics (RNA-seq), gene knockouts, and assays of chromatin state such as ChIP-seq and ATAC-seq. The course connects genome-wide variation to phenotype through GWAS and the study of structural variation. Metagenomics, pan-genomes, and personal genomics extend the scope from single reference genomes to populations, communities, and individuals. Throughout, the emphasis is on the quantitative and statistical reasoning needed to turn raw sequence into biological insight.",
  topics: [
    "Genome sequencing technologies (Sanger, NGS, long-read)",
    "Genome assembly",
    "Genome annotation",
    "Gene prediction",
    "Comparative and evolutionary genomics",
    "Genome organization and repetitive elements",
    "Transcriptomics (RNA-seq)",
    "Functional genomics and gene knockouts",
    "Epigenomics (ChIP-seq, ATAC-seq)",
    "Regulatory genomics and enhancers",
    "Human genome variation and GWAS",
    "Structural variation",
    "Metagenomics",
    "Pan-genomes and personal genomics",
    "Read mapping and variant calling",
  ],
  recommended: [
    res("Rosalind - genomics problems", "Rosalind", { type: "problems", free: true, url: "https://rosalind.info/" }),
    res("Genomes", "T. A. Brown", { type: "textbook", free: false }),
    res("Bioinformatics and Functional Genomics", "Jonathan Pevsner", { type: "textbook", free: false }),
  ],
  supplementary: [
    res("Molecular Biology of the Gene", "Watson et al.", { type: "textbook" }),
    res("Genome-Scale Algorithm Design", "Makinen, Belazzougui, Cunial & Tomescu", { type: "textbook" }),
  ],
});
