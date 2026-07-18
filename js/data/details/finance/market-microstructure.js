registerDetail({
  long:
    "Market Microstructure studies the fine-grained process by which securities are actually traded—how prices form, how orders are matched, and how the design of markets affects liquidity, price discovery, and the cost of trading. " +
    "Building on financial markets, the course zooms in from the broad view of markets to the mechanics of the trade itself. " +
    "It begins with the architecture of markets: the types of trading systems (quote-driven dealer markets and order-driven limit-order markets), the order types, and the roles of the participants—market makers, brokers, and the many kinds of traders. " +
    "The course develops the central problem of the field: the sources of the bid-ask spread and the cost of trading. " +
    "It analyzes the components of the spread—order-processing costs, inventory risk borne by market makers, and, crucially, the adverse-selection cost of trading against better-informed counterparties. " +
    "The theory of informed trading and how information becomes incorporated into prices—price discovery—is developed through the classic microstructure models. " +
    "The course examines liquidity and its measurement, market impact and the price effect of trading, and the resulting problem of optimal execution—how to trade a large order without moving the price against oneself. " +
    "The design and regulation of markets, the effects of fragmentation and dark pools, and the transformation wrought by high-frequency and electronic trading are examined. " +
    "The course gives the tools to understand trading costs, price formation, and the design of the markets in which finance operates.",
  topics: [
    "The mechanics of trading",
    "Market architecture and trading systems",
    "Order types and the limit-order book",
    "Market participants and their roles",
    "Market makers and dealers",
    "The bid-ask spread and its components",
    "Inventory models",
    "Adverse selection and informed trading",
    "Price discovery",
    "Liquidity and its measurement",
    "Market impact",
    "Optimal execution",
    "Market design and fragmentation",
    "Dark pools",
    "High-frequency and electronic trading",
  ],
  recommended: [
    res("Market Microstructure Theory", "Maureen O'Hara", { type: "textbook" }),
    res("Trading and Exchanges: Market Microstructure for Practitioners", "Larry Harris", { type: "textbook" }),
  ],
  supplementary: [
    res("Empirical Market Microstructure", "Joel Hasbrouck", { type: "reference" }),
    res("Algorithmic and High-Frequency Trading", "Álvaro Cartea, Sebastian Jaimungal & José Penalva", { type: "reference" }),
  ],
});
