registerDetail({
  long: "Production Planning and Inventory Control develops the quantitative models that decide how " +
    "much to make, when to make it, and how much stock to hold across a manufacturing system. The " +
    "course opens with demand forecasting and aggregate production planning, which set output, " +
    "workforce, and inventory levels over a medium-term horizon. It then builds the classical " +
    "inventory theory, starting with the economic order quantity and its cost trade-off between " +
    "ordering and holding, before adding demand uncertainty through safety stock, service levels, " +
    "and the single-period newsvendor model. Continuous-review (Q,r) and periodic-review policies " +
    "extend these ideas to ongoing replenishment under stochastic demand and lead time. The second " +
    "half turns to dependent-demand systems, covering master production scheduling, material " +
    "requirements planning, bills of material, and rough-cut capacity planning. The course closes " +
    "with just-in-time and pull production, contrasting them with push logic, and analyzes how " +
    "demand variability is amplified upstream as the bullwhip effect.",
  topics: [
    "Demand forecasting (moving averages, exponential smoothing)",
    "Aggregate production planning",
    "The economic order quantity (EOQ) and cost trade-offs",
    "Quantity discounts and the economic production quantity",
    "Inventory models with uncertainty and safety stock",
    "Service levels and the cost of stockouts",
    "The single-period newsvendor model",
    "Continuous-review (Q,r) policies",
    "Periodic-review policies",
    "Master production scheduling",
    "Material requirements planning (MRP) and bills of material",
    "Capacity planning and rough-cut capacity",
    "Just-in-time and pull production systems",
    "Push versus pull control",
    "The bullwhip effect and demand amplification",
  ],
  recommended: [
    res("Factory Physics", "Wallace J. Hopp and Mark L. Spearman", { type: "textbook" }),
    res("Production and Operations Analysis", "Steven Nahmias", { type: "textbook" }),
  ],
  supplementary: [
    res("Inventory Management and Production Planning and Scheduling", "Edward A. Silver, David F. Pyke and Rein Peterson", { type: "textbook" }),
    res("Foundations of Inventory Management", "Paul H. Zipkin", { type: "reference" }),
  ],
});
