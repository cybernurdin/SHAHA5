const media = (src, alt, desktopPosition, mobilePosition, quality, verification = "concept") => ({
  src, alt, desktopPosition, mobilePosition, quality, verification,
});

export const EDITORIAL_MEDIA = {
  pearlHero: media("/shasha/hero/shasha-sculptural-pearl-couture-profile.png", "Sculptural pearl couture with an architectural raffia shoulder treatment", "100% 50%", "50% 18%", "hero_quality"),
  featherPortrait: media("/shasha/couture/feather/shasha-black-feather-couture-shoulder-bird.png", "Black feather couture portrait", "50% 20%", "50% 16%", "editorial_quality"),
  featherProfile: media("/shasha/couture/feather/shasha-black-feather-couture-profile.png", "Black feather couture profile", "50% 18%", "50% 14%", "editorial_quality"),
  bridal: media("/shasha/bridal/gowns/shasha-white-lace-bridal-gown-portrait.png", "White lace bridal couture", "50% 20%", "52% 18%", "editorial_quality"),
  purple: media("/shasha/couture/evening/shasha-purple-embellished-gown-full-length.png", "Purple embellished evening couture", "50% 16%", "50% 12%", "editorial_quality"),
  redSuit: media("/shasha/tailoring/statement/shasha-red-embellished-suit-studio.png", "Red embellished statement tailoring", "50% 18%", "50% 14%", "editorial_quality"),
  blueSuit: media("/shasha/tailoring/statement/shasha-blue-white-signature-suit-full-look.png", "Blue and white signature tailoring", "50% 18%", "50% 14%", "editorial_quality", "verified_reference"),
  blueSuitPortrait: media("/shasha/tailoring/statement/shasha-blue-white-signature-suit-portrait.png", "Portrait of blue and white signature tailoring", "50% 18%", "50% 14%", "editorial_quality", "verified_reference"),
  blueSuitDetail: media("/shasha/tailoring/statement/shasha-blue-white-signature-suit-closeup.png", "Detail of blue and white signature tailoring", "50% 35%", "50% 28%", "detail_only", "verified_reference"),
  beadwork: media("/shasha/atelier/process/shasha-couture-beadwork.webp", "Close detail of couture beadwork", "50% 50%", "50% 50%", "detail_only"),
  embroidery: media("/shasha/atelier/process/shasha-hand-embroidery-process.webp", "Hand embroidery process", "50% 50%", "50% 50%", "detail_only"),
  heritage: media("/shasha/bridal/traditional/shasha-black-gold-traditional-mermaid-gown.png", "Black and gold traditional ceremonial gown", "50% 18%", "50% 14%", "editorial_quality"),
  heritageDetail: media("/shasha/bridal/traditional/shasha-yellow-embellished-traditional-look.png", "Embellished traditional ceremonial look", "50% 20%", "50% 16%", "editorial_quality"),
  housePortrait: media("/shasha/about/shasha-designer-editorial-portrait.webp", "Editorial portrait representing the house", "50% 18%", "50% 14%", "editorial_quality"),
  worn: media("/shasha/campaigns/shasha-african-couture-runway-finale.webp", "ShaSha Designs public editorial reference", "50% 45%", "50% 45%", "editorial_quality", "verified_reference"),
};
