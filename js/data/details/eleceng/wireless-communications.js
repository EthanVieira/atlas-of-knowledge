registerDetail({
  long:
    "Wireless Communications studies how information is carried over radio channels whose behavior varies " +
    "randomly in time, frequency, and space, and how system design copes with that variability. The " +
    "course begins with the wireless channel itself, describing large-scale path loss and shadowing that " +
    "set the average received power over distance. It then examines small-scale fading caused by " +
    "multipath propagation, introducing delay spread, coherence bandwidth, Doppler shift, and coherence " +
    "time. Statistical models such as Rayleigh and Rician fading capture the resulting envelope " +
    "distributions and their impact on error rates. Because fading severely degrades performance, the " +
    "course develops diversity techniques in time, frequency, and space, along with digital modulation " +
    "and equalization strategies suited to dispersive channels. Modern multicarrier methods, especially " +
    "OFDM, are studied as a way to combat frequency-selective fading, alongside spread spectrum and CDMA " +
    "for multiple access. The treatment of multiple-antenna MIMO systems shows how spatial multiplexing " +
    "and diversity dramatically raise capacity. Cellular concepts, frequency reuse, and capacity analysis " +
    "tie these ideas together into practical network design.",
  topics: [
    "The wireless channel and path loss",
    "Shadowing and log-normal models",
    "Small-scale fading and multipath",
    "Delay spread and coherence bandwidth",
    "Doppler shift and time selectivity",
    "Statistical fading models: Rayleigh and Rician",
    "Diversity techniques: time, frequency, space",
    "Digital modulation over fading channels",
    "Equalization of dispersive channels",
    "OFDM and multicarrier modulation",
    "Spread spectrum and CDMA",
    "Multiple-antenna MIMO systems",
    "Spatial multiplexing and beamforming",
    "Cellular concepts and frequency reuse",
    "Capacity of wireless channels",
  ],
  recommended: [
    res("Wireless Communications", "Andrea Goldsmith", { type: "textbook" }),
    res("Fundamentals of Wireless Communication", "David Tse and Pramod Viswanath", { type: "textbook" }),
  ],
  supplementary: [
    res("Wireless Communications: Principles and Practice", "Theodore S. Rappaport", { type: "textbook" }),
    res("Wireless Communications", "Andreas F. Molisch", { type: "reference" }),
  ],
});
