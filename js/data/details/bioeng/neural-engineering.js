registerDetail({
  long: "Neural Engineering applies engineering principles to understand, interface with, and repair the " +
    "nervous system. The course begins with the neurophysiology of excitable cells and the biophysics " +
    "of the action potential, establishing the Hodgkin-Huxley framework that governs how neurons " +
    "generate and propagate signals. It then examines the electrode-tissue interface and the " +
    "biocompatibility challenges that determine how long an implanted device can record or stimulate " +
    "reliably. Both extracellular and intracellular recording techniques are developed, followed by the " +
    "neural signal processing needed to detect spikes and separate them by source through spike " +
    "sorting. On the stimulation side, the course covers functional electrical stimulation to restore " +
    "movement, deep brain stimulation for movement and psychiatric disorders, and sensory prostheses " +
    "including the cochlear and retinal implant. Brain-computer interfaces bring recording and decoding " +
    "together, translating neural activity into control signals, and the course closes with neural " +
    "decoding algorithms and closed-loop systems that adapt stimulation to ongoing brain state. " +
    "Students finish able to reason about the full loop from ion channel to implanted device to " +
    "behavioral output.",
  topics: [
    "Neurophysiology and excitable cells",
    "The action potential and Hodgkin-Huxley model",
    "The electrode-tissue interface",
    "Biocompatibility and the foreign body response",
    "Extracellular neural recording",
    "Intracellular and patch-clamp recording",
    "Neural signal processing",
    "Spike detection and spike sorting",
    "Functional electrical stimulation",
    "Deep brain stimulation",
    "Cochlear prostheses",
    "Retinal prostheses",
    "Brain-computer interfaces",
    "Neural decoding algorithms",
    "Closed-loop neural systems",
  ],
  recommended: [
    res("Neural Engineering", "Bin He", { type: "textbook" }),
    res("Principles of Neural Science", "Eric R. Kandel, James H. Schwartz, and Thomas M. Jessell", { type: "textbook" }),
  ],
  supplementary: [
    res("Theoretical Neuroscience", "Peter Dayan and L. F. Abbott", { type: "reference" }),
    res("Spikes: Exploring the Neural Code", "Fred Rieke, David Warland, Rob de Ruyter van Steveninck, and William Bialek", { type: "reference" }),
  ],
});
