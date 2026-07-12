/* ============================================================================
 *  BIOMEDICAL ENGINEERING
 * ==========================================================================*/
registerCourses([

  { id: "biomechanics", title: "Biomechanics", field: "bioeng",
    desc: "The mechanics of living tissues, movement and the musculoskeletal system.",
    requires: ["statics", "physiology"],
    topics: ["Tissue mechanics", "Musculoskeletal biomechanics", "Gait & motion analysis", "Fluid biomechanics", "Cell mechanics", "Orthopedic mechanics"],
    free: [R("Biomechanics notes", "Various")],
    paid: [R("Biomechanics: Mechanical Properties of Living Tissues", "Y. C. Fung")] },

  { id: "biomaterials-bme", title: "Biomedical Materials & Devices", field: "bioeng",
    desc: "Designing implants and devices that function safely inside the body.",
    requires: ["materials-science-intro", "biomechanics"],
    topics: ["Implant materials", "Device design", "Sterilization", "Failure & wear", "Drug-delivery devices", "Regulatory basics"],
    free: [R("Biomedical devices notes", "Various")],
    paid: [R("Biomaterials Science", "Ratner et al.")] },

  { id: "biomedical-signal-processing", title: "Biomedical Signal Processing", field: "bioeng",
    desc: "Extracting information from physiological signals like the ECG and EEG.",
    requires: ["signals-and-systems", "physiology"],
    topics: ["Physiological signals", "Filtering & denoising", "Spectral analysis", "Feature extraction", "ECG/EEG analysis", "Biosignal classification"],
    free: [R("Biomedical signal processing notes", "Various")],
    paid: [R("Biomedical Signal Processing", "Sörnmo & Laguna")] },

  { id: "medical-imaging", title: "Medical Imaging", field: "bioeng",
    desc: "The physics and engineering of seeing inside the body.",
    requires: ["signals-and-systems", "electromagnetism"],
    topics: ["X-ray & CT", "MRI", "Ultrasound", "Nuclear imaging (PET/SPECT)", "Image reconstruction", "Image processing"],
    free: [R("Medical imaging notes", "Various")],
    paid: [R("Medical Imaging Signals and Systems", "Prince & Links")] },

  { id: "biomedical-instrumentation", title: "Biomedical Instrumentation", field: "bioeng",
    desc: "The sensors and electronics that measure the body.",
    requires: ["electronics", "physiology"],
    topics: ["Biopotential electrodes", "Amplifiers & isolation", "Transducers & sensors", "Patient safety", "Measurement of physiological variables", "Wearables"],
    free: [R("Biomedical instrumentation notes", "Various")],
    paid: [R("Medical Instrumentation", "John Webster")] },

  { id: "tissue-engineering", title: "Tissue Engineering & Regenerative Medicine", field: "bioeng",
    desc: "Growing living tissues to repair or replace damaged ones.",
    requires: ["stem-cell-biology", "biomaterials-bme"],
    topics: ["Scaffolds", "Cell sourcing & stem cells", "Bioreactors", "Growth factors", "Vascularization", "3D bioprinting"],
    free: [R("Tissue engineering notes", "Various")],
    paid: [R("Principles of Tissue Engineering", "Lanza, Langer & Vacanti")] },

]);
