registerDetail({
  long:
    "Big Data Systems studies the computational infrastructure and methods for working with data too large or fast to handle on a single machine—the engineering side of data science, where scale changes what is possible and how it must be done. " +
    "Building on the introduction to data science and database systems, it develops the distributed systems and programming models that data at scale requires. " +
    "The course begins with the nature and challenges of big data—the volume, velocity, and variety that overwhelm traditional tools—and the fundamental shift to distributed storage and computation across clusters of commodity machines. " +
    "It develops the foundational ideas: distributed file systems (such as HDFS) and the MapReduce programming model that made large-scale processing tractable, and their evolution into modern engines such as Apache Spark that keep data in memory and support richer computation. " +
    "The course treats the landscape of large-scale data storage beyond the relational database: NoSQL systems (key-value, document, column, and graph stores), data warehouses, and data lakes, and the trade-offs (consistency, availability, partitioning) that distributed data forces. " +
    "The processing of streaming and real-time data, and the building of data pipelines and workflows, are developed. " +
    "The course also introduces scalable machine learning and the practicalities of cloud computing for data, along with the performance and cost considerations of working at scale, giving the systems literacy that lets data scientists work with data of any size.",
  topics: [
    "The challenges of big data",
    "Volume, velocity, and variety",
    "Distributed storage and computation",
    "Distributed file systems (HDFS)",
    "The MapReduce model",
    "Apache Spark and in-memory computation",
    "NoSQL databases",
    "Data warehouses and data lakes",
    "The CAP theorem and trade-offs",
    "Streaming and real-time data",
    "Data pipelines and workflows",
    "Scalable machine learning",
    "Cloud computing for data",
    "Performance and cost at scale",
    "Big data architecture",
  ],
  recommended: [
    res("Designing Data-Intensive Applications", "Martin Kleppmann", { type: "textbook" }),
    res("Mining of Massive Datasets", "Jure Leskovec, Anand Rajaraman & Jeffrey D. Ullman", { type: "textbook", free: true, url: "http://www.mmds.org/" }),
  ],
  supplementary: [
    res("Spark: The Definitive Guide", "Bill Chambers & Matei Zaharia", { type: "reference" }),
    res("Hadoop: The Definitive Guide", "Tom White", { type: "reference" }),
  ],
});
