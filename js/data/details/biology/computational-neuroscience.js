registerDetail({
  long: "Computational neuroscience uses mathematical models and analysis to explain how nervous systems compute, combining neuroscience with tools from differential equations and probability. The course begins with biophysical models of single neurons, from the conductance-based Hodgkin-Huxley equations to reduced integrate-and-fire models, and treats cable theory to understand how dendrites shape signals. Students then move from single cells to how neurons encode information, applying information theory and spike-train statistics to quantify the neural code and building decoders that recover stimuli or behavior from population activity. The course develops network models, including attractor and recurrent dynamics, that support memory and computation. A major thread is synaptic plasticity and learning, covering Hebbian rules and spike-timing-dependent plasticity, along with reinforcement learning as a model of reward-driven behavior. Throughout, normative and Bayesian theories frame neural computation as approximately optimal inference, tying mechanism to function.",
  topics: [
    "the Hodgkin-Huxley model",
    "integrate-and-fire neurons",
    "cable theory and dendritic computation",
    "synaptic models",
    "neural coding and information theory",
    "the neural code and spike-train statistics",
    "decoding and population codes",
    "receptive fields and feature detection",
    "network models and attractor dynamics",
    "recurrent networks",
    "synaptic plasticity and learning rules (Hebbian, STDP)",
    "reinforcement learning in the brain",
    "models of memory",
    "Bayesian and normative theories",
  ],
  recommended: [
    res("Neuronal Dynamics", "Gerstner et al.", { type: "textbook", free: true, url: "https://neuronaldynamics.epfl.ch/" }),
    res("Theoretical Neuroscience", "Dayan & Abbott", { type: "textbook" }),
  ],
  supplementary: [
    res("Spikes: Exploring the Neural Code", "Rieke et al.", { type: "textbook" }),
    res("Biophysics of Computation", "Koch", { type: "reference" }),
    res("Principles of Computational Modelling in Neuroscience", "Sterratt et al.", { type: "textbook" }),
  ],
});
