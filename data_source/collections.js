import { MEDIA } from "./media";

export const COLLECTION_CATEGORIES = [
  { slug: "couture", name: "COUTURE", image: MEDIA.signatureForceOfNature.src },
  { slug: "bridal-ceremonial", name: "BRIDAL & CEREMONIAL", image: MEDIA.bridalHero.src },
  { slug: "toghu-heritage", name: "TOGHU / HERITAGE", image: MEDIA.comboHero.src },
  { slug: "occasion", name: "OCCASION", image: MEDIA.signatureForceOfNature.src },
  { slug: "menswear", name: "MENSWEAR", image: MEDIA.houseGownDark.src },
];

export const COLLECTIONS = [
  {
    slug: "combo-collection-2024",
    name: "Combo Collection",
    year: "2024",
    category: "Couture",
    verificationStatus: "verified",
    heroImage: MEDIA.comboHero.src,
    mobileHeroImage: MEDIA.comboHero.src,
    shortDescription: "A public ShaSha Designs reference featuring Michèle-Ange Minkata, photographed by Tammyclicks.",
    story: "A public ShaSha Designs reference from 2024.",
    looksCount: 1,
    credits: {
      model: "Michèle-Ange Minkata",
      photography: "Tammyclicks",
      styling: "ShaSha Designs Atelier",
      location: "Douala, Cameroon",
    },
    seo: {
      title: "Combo Collection 2024 | ShaSha Designs Couture",
      description: "Explore the Combo Collection 2024 by ShaSha Designs, featuring Michèle-Ange Minkata. Sculptural Cameroonian luxury couture from Douala.",
    },
  },
];
