registerDetail({
  long:
    "Auction theory studies how to sell—and how bidders behave—when the value of what is for sale is private and uncertain, making it one of the most successful and empirically consequential branches of applied microeconomic theory. " +
    "The course analyzes the four standard formats (English, Dutch, first-price sealed-bid, and second-price/Vickrey) within the independent-private-values model and derives equilibrium bidding strategies. " +
    "The revenue-equivalence theorem shows that, under broad conditions, all standard auctions yield the same expected revenue, a benchmark whose failure conditions organize the whole field. " +
    "Building on mechanism design, the course derives the revenue-maximizing (optimal) auction and the role of reserve prices. " +
    "The common-values model introduces the winner's curse and the strategic shading that rational bidders adopt to avoid it, with implications for how information affects revenue. " +
    "Extensions cover risk aversion, affiliated values, collusion, and entry, as well as multi-unit and combinatorial auctions where bidders value packages of goods. " +
    "The theory has directly shaped the design of spectrum auctions, electricity markets, treasury sales, and online advertising exchanges.",
  topics: [
    "Auction formats: English, Dutch, first-price, and Vickrey",
    "The independent-private-values model",
    "Equilibrium bidding strategies",
    "The revenue-equivalence theorem",
    "Optimal auctions and reserve prices (Myerson)",
    "Common values and the winner's curse",
    "Affiliated values and the linkage principle",
    "Risk aversion and its effect on revenue",
    "Entry, participation, and endogenous bidder pools",
    "Collusion and bidder rings",
    "Multi-unit and uniform-price auctions",
    "Combinatorial auctions and package bidding",
    "The simultaneous multiple-round auction",
    "Double auctions and market design",
    "Applications: spectrum, electricity, and online advertising",
  ],
  recommended: [
    res("Auction Theory", "Vijay Krishna", { type: "textbook" }),
    res("Auctions: Theory and Practice", "Paul Klemperer", { type: "textbook", free: true, url: "https://www.nuffield.ox.ac.uk/economics/papers/2004/w9/AuctionsTheoryPractice.pdf" }),
  ],
  supplementary: [
    res("Putting Auction Theory to Work", "Paul Milgrom", { type: "textbook" }),
    res("An Introduction to Auction Theory", "Flavio M. Menezes & Paulo K. Monteiro", { type: "textbook" }),
    res("The Handbook of Market Design", "Vulkan, Roth & Neeman (eds.)", { type: "reference" }),
  ],
});
