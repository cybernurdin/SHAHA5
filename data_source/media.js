/**
 * Media Registry for ShaSha Designs Concept
 * All photography assets are locally stored and tracked with verification status.
 */
export const MEDIA = {
  // Brand & Wordmark
  hero: {
    src: "/shasha/hero/shasha-sculptural-pearl-couture-front.png",
    alt: "ShaSha Designs High Couture Editorial Hero",
    credit: "ShaSha Designs Editorial Reference",
    source: "Douala Atelier Studio",
    usage: "Private concept preview",
    focusPosition: "50% 25%",
    width: 1920,
    height: 1080
  },
  comboHero: {
    src: "/shasha/hero/shasha-blue-white-signature-suit-full-look.png",
    alt: "Combo Collection 2024 - Featuring Michèle-Ange Minkata",
    credit: "Photography: Tammyclicks / Styling: ShaSha Designs",
    source: "Public ShaSha Designs Reference 2024",
    usage: "Private concept preview",
    focusPosition: "50% 30%",
    width: 1200,
    height: 1600
  },
  signatureForceOfNature: {
    src: "/shasha/campaigns/shasha-african-couture-runway-finale.webp",
    alt: "Mimie at AMVCA 2026",
    credit: "Design: ShaSha Designs / Client: Mimie / Event: AMVCA 2026",
    source: "Public AMVCA 2026 Editorial Reference",
    usage: "Private concept preview",
    focusPosition: "50% 20%",
    width: 1200,
    height: 1600
  },
  bridalHero: {
    src: "/shasha/hero/shasha-ivory-sculptural-bridal-gown.webp",
    alt: "ShaSha Bespoke Bridal Couture — Ethereal Ceremonial Silhouette",
    credit: "ShaSha Designs Atelier",
    source: "ShaSha Ceremonial Collection",
    usage: "Private concept preview",
    focusPosition: "50% 30%",
    width: 1200,
    height: 1600
  },
  atelierWorkspace: {
    src: "/shasha/atelier/process/shasha-atelier-workroom.webp",
    alt: "ShaSha Atelier Workspace in Bonamoussadi, Douala",
    credit: "Atelier Photography",
    source: "ShaSha Designs Douala",
    usage: "Private concept preview",
    focusPosition: "50% 50%",
    width: 1600,
    height: 1000
  },
  atelierSketching: {
    src: "/shasha/atelier/process/shasha-fashion-sketching.webp",
    alt: "Stage 01: Concept & Silhouette Sketching",
    credit: "Couture Design Notes",
    source: "ShaSha Atelier Archives",
    usage: "Private concept preview",
    focusPosition: "50% 50%",
    width: 1200,
    height: 1200
  },
  atelierDraping: {
    src: "/shasha/atelier/process/shasha-black-ivory-fabric-detail.webp",
    alt: "Stage 02: Tactile Textile Selection & Silk Draping",
    credit: "Textile Selection",
    source: "ShaSha Atelier Archives",
    usage: "Private concept preview",
    focusPosition: "50% 50%",
    width: 1200,
    height: 1200
  },
  atelierShears: {
    src: "/shasha/atelier/process/shasha-pattern-cutting.webp",
    alt: "Stage 03: Architectural Pattern Precision Cutting",
    credit: "Atelier cutting reference",
    source: "ShaSha Atelier Archives",
    usage: "Private concept preview",
    focusPosition: "50% 50%",
    width: 1200,
    height: 1200
  },
  atelierBeading: {
    src: "/shasha/atelier/process/shasha-couture-beadwork.webp",
    alt: "Stage 04: Hand-Embroidered Gold Thread Craftsmanship",
    credit: "Artisanal Embroidery",
    source: "ShaSha Atelier Archives",
    usage: "Private concept preview",
    focusPosition: "50% 50%",
    width: 1200,
    height: 1200
  },
  atelierFitting: {
    src: "/shasha/atelier/fittings/shasha-gown-fitting-session.webp",
    alt: "Stage 05: Personal Fitting & Sculptural Adjustments",
    credit: "Bespoke Fitting Session",
    source: "ShaSha Atelier Archives",
    usage: "Private concept preview",
    focusPosition: "50% 50%",
    width: 1200,
    height: 1200
  },
  atelierFinish: {
    src: "/shasha/couture/evening/shasha-black-gallery-evening-gown.webp",
    alt: "Stage 06: Final Couture Presentation & Quality Finish",
    credit: "Finished Gown Display",
    source: "ShaSha Atelier Archives",
    usage: "Private concept preview",
    focusPosition: "50% 50%",
    width: 1200,
    height: 1600
  },
  houseStitching: {
    src: "/shasha/atelier/process/shasha-textile-seam-detail.webp",
    alt: "Close-up macro detail of couture hand-stitching in Douala",
    credit: "Craft Detail Photography",
    source: "ShaSha Designs Atelier",
    usage: "Private concept preview",
    focusPosition: "50% 50%",
    width: 1200,
    height: 1200
  },
  houseHands: {
    src: "/shasha/atelier/process/shasha-hand-embroidery-process.webp",
    alt: "Hands working on structured textiles",
    credit: "Artisan Hands",
    source: "ShaSha Designs Atelier",
    usage: "Private concept preview",
    focusPosition: "50% 50%",
    width: 1200,
    height: 1200
  },
  houseGownDark: {
    src: "/shasha/bridal/gowns/shasha-ivory-sculptural-bridal-gown.webp",
    alt: "Minimalist Ivory Gown in Dark Void Studio",
    credit: "Editorial Campaign Photography",
    source: "ShaSha Designs Couture Archive",
    usage: "Private concept preview",
    focusPosition: "50% 30%",
    width: 1200,
    height: 1600
  },
  houseFounderPortrait: {
    src: "/shasha/about/shasha-designer-editorial-portrait.webp",
    alt: "Editorial portrait representing the creative direction of the house",
    credit: "House Portrait",
    source: "ShaSha Designs Founder Archive",
    usage: "Private concept preview",
    focusPosition: "50% 20%",
    width: 1200,
    height: 1600
  }
};

for (const media of Object.values(MEDIA)) {
  media.usage_status = media.usage;
  media.verification_status = "concept";
}
