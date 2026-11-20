export interface Collection {
  slug: string;
  name: string;
  year: string;
  category: string;
  verificationStatus: string;
  heroImage: string;
  shortDescription: string;
  story: string;
  looksCount: number;
  credits: {
    model?: string;
    photography?: string;
    styling?: string;
    location?: string;
  };
}

export interface CoutureLook {
  id: string;
  title: string;
  category: 'couture' | 'bridal' | 'toghu' | 'tailoring' | 'sculptural';
  categoryLabel: string;
  collection: string;
  image: string;
  detailImage?: string;
  subtitle: string;
  description: string;
  fabric: string;
  hours: number;
  featuredClient?: string;
  event?: string;
  highlights: string[];
  priceOnApplication: boolean;
  edition?: string;
}

export interface AtelierStep {
  step: string;
  title: string;
  duration: string;
  subtitle: string;
  description: string;
  image: string;
  craftFocus: string;
}

export interface ConsultationForm {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  fittingType: 'Douala Atelier' | 'Virtual International' | 'VIP Private Trunk Show';
  preferredDate: string;
  notes: string;
}
