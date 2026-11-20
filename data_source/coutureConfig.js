export const COUTURE_CONFIG = {
  pricingStatus: "concept",
  budgetRanges: [
    { id: "concept_range_1", label: "Concept range A", labelFr: "Fourchette concept A" },
    { id: "concept_range_2", label: "Concept range B", labelFr: "Fourchette concept B" },
    { id: "concept_range_3", label: "Concept range C", labelFr: "Fourchette concept C" },
    { id: "prefer_discuss", label: "Prefer to discuss", labelFr: "Préfère en discuter" },
  ],
  upload: { bucket: "couture-inspirations", maxFiles: 5, maxBytes: 10 * 1024 * 1024, mimeTypes: ["image/jpeg", "image/png", "image/webp"] },
  milestones: ["Order Confirmed", "Design / Review", "Measurements Confirmed", "Production", "Finishing", "Ready", "Delivery / Collection", "Completed"],
};
