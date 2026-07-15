registerDetail({
  long: "Single-cell genomics measures molecular state one cell at a time, resolving the heterogeneity that bulk assays average away. The course begins with the experimental technologies for isolating and barcoding individual cells, contrasting droplet-based and plate-based single-cell RNA-seq protocols and their biases. A large portion is devoted to the computational pipeline: quality control, normalization, feature selection, and dimensionality reduction with PCA, UMAP, and t-SNE. Students learn to correct batch effects and integrate datasets, cluster cells, and annotate cell types, then perform differential expression and infer developmental trajectories through pseudotime and RNA velocity. The course extends beyond the transcriptome to single-cell ATAC-seq, multi-omics, and spatial transcriptomics, and to inferring cell-cell interactions and building reference atlases. Statistical and deep-learning methods, including variational autoencoders, are treated as the modern engine for modeling this high-dimensional, sparse data. Emphasis is placed on reproducible, well-founded analysis rather than turnkey tool use.",
  topics: [
    "Single-cell isolation and barcoding technologies",
    "Single-cell RNA-seq protocols (droplet, plate-based)",
    "Quality control and normalization",
    "Feature selection and dimensionality reduction (PCA, UMAP, t-SNE)",
    "Batch-effect correction and data integration",
    "Clustering and cell-type annotation",
    "Differential expression testing",
    "Trajectory inference and pseudotime",
    "RNA velocity",
    "Single-cell ATAC-seq and multi-omics",
    "Spatial transcriptomics",
    "Cell-cell interaction inference",
    "Atlas building and reference mapping",
    "Statistical and deep-learning methods for single-cell data",
    "Doublet detection and ambient RNA correction",
  ],
  recommended: [
    res("Single-cell best practices", "Theis lab", { type: "interactive", free: true, url: "https://www.sc-best-practices.org/" }),
  ],
  supplementary: [
    res("Orchestrating Single-Cell Analysis with Bioconductor", "Amezquita, Lun, Hicks et al.", { type: "reference" }),
    res("Deep learning for single-cell analysis (scvi-tools)", "Yosef & Regev labs", { type: "notes" }),
    res("Analysis of single cell RNA-seq data (course)", "Hemberg lab", { type: "notes" }),
  ],
});
