registerDetail({
  long:
    "Metadata studies the structured data that describes information resources—'data about data'—and the standards and schemas used to create it across libraries, archives, museums, and the digital world. " +
    "Building on the organization of information, it broadens description beyond the traditional library catalog to the many metadata schemes that make digital and networked resources findable and usable. " +
    "The course begins with the concept and functions of metadata and its major types: descriptive metadata (for discovery), administrative metadata (for management and rights), structural metadata (relating parts to wholes), and preservation metadata. " +
    "It surveys the principal metadata standards and their uses: Dublin Core, MODS and METS, EAD for archival finding aids, and museum and cultural-heritage schemas such as CDWA and VRA Core, along with domain standards for images and other media. " +
    "The course develops the mechanics of metadata: schemas and element sets, controlled vocabularies and encoding, the use of XML and increasingly RDF, and the crucial question of interoperability—how metadata from different sources can be shared and combined, through crosswalks and harvesting. " +
    "Linked data and the semantic web are treated as the direction of the field, turning descriptive records into a web of connected data. " +
    "Metadata quality, application profiles, and the practical creation of metadata for digital collections round out a course central to modern information work.",
  topics: [
    "The concept and functions of metadata",
    "Descriptive, administrative, and structural metadata",
    "Preservation metadata",
    "Dublin Core",
    "MODS and METS",
    "EAD for archival description",
    "Museum and cultural-heritage schemas",
    "Metadata for images and media",
    "Schemas and element sets",
    "XML and RDF encoding",
    "Interoperability and crosswalks",
    "Metadata harvesting (OAI-PMH)",
    "Linked data and the semantic web",
    "Metadata quality and application profiles",
    "Creating metadata for digital collections",
  ],
  recommended: [
    res("Introduction to Metadata", "Murtha Baca (ed.), Getty Research Institute", { type: "textbook", free: true, url: "https://www.getty.edu/publications/intrometadata/" }),
    res("Metadata", "Marcia Lei Zeng & Jian Qin", { type: "textbook" }),
  ],
  supplementary: [
    res("Dublin Core Metadata Initiative — specifications", "DCMI", { type: "reference", free: true, url: "https://www.dublincore.org/specifications/" }),
    res("Metadata for Digital Collections", "Steven J. Miller", { type: "reference" }),
  ],
});
