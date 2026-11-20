import { Injectable, signal, computed } from '@angular/core';
import { Collection, CoutureLook, AtelierStep, ConsultationForm } from '../models/shasha.models';

@Injectable({
  providedIn: 'root'
})
export class ShashaService {
  // Brand contacts & constants
  readonly phone = '+237 673 967 583';
  readonly phoneAlt = '+237 674 798 007';
  readonly studioLocation = 'Bonamoussadi, Douala, Cameroon';
  readonly instagram = '@shasha_designs5';

  // Language state
  readonly language = signal<'en' | 'fr'>('en');

  // Curated Collections
  readonly collections = signal<Collection[]>([
    {
      slug: 'combo-collection-2024',
      name: 'Combo Collection',
      year: '2024',
      category: 'Couture',
      verificationStatus: 'Verified Atelier Reference',
      heroImage: '/shasha/hero/shasha-blue-white-signature-suit-full-look.png',
      shortDescription: 'Signature architectural tailoring blending cobalt silk brocade and pristine ivory geometry, featuring Michèle-Ange Minkata.',
      story: 'Presented as an homage to Cameroonian modernism, the Combo Collection redefines high-octane African tailoring with strict geometric cutouts, hand-stitched piping, and couture draping.',
      looksCount: 6,
      credits: {
        model: 'Michèle-Ange Minkata',
        photography: 'Tammyclicks',
        styling: 'ShaSha Designs Atelier',
        location: 'Douala, Cameroon'
      }
    },
    {
      slug: 'force-of-nature',
      name: 'The Force of Nature',
      year: '2026',
      category: 'Red Carpet & Galas',
      verificationStatus: 'AMVCA 2026 Spotlight',
      heroImage: '/shasha/campaigns/shasha-african-couture-runway-finale.webp',
      shortDescription: 'The headline-making red carpet creation commissioned for artist Mimie at the Africa Magic Viewers’ Choice Awards (AMVCA).',
      story: 'A masterclass in organic drama, this silhouette fuses cascading structured ruffles, burnished bronze metallics, and sculpted bodice architecture celebrating West & Central African feminine power.',
      looksCount: 4,
      credits: {
        model: 'Mimie',
        photography: 'Red Carpet AMVCA Media',
        styling: 'ShaSha Designs VIP Concierge',
        location: 'Lagos & Douala'
      }
    },
    {
      slug: 'reine-des-grassfields',
      name: 'Reine des Grassfields',
      year: '2025/2026',
      category: 'Toghu Heritage',
      verificationStatus: 'Heritage Royal Archive',
      heroImage: '/shasha/hero/shasha-purple-embellished-silhouette.webp',
      shortDescription: 'Elevating sacred Bamenda Toghu needlework into contemporary high-fashion couture eveningwear.',
      story: 'Over 220 hours of needlepoint by master artisans in North-West Cameroon, translating ancestral symbols of wisdom, sovereignty, and abundance into pure silk and heavy velvet.',
      looksCount: 8,
      credits: {
        model: 'Atelier Archives',
        styling: 'ShaSha Designs',
        location: 'Bonamoussadi Atelier, Douala'
      }
    },
    {
      slug: 'ceremonial-bridal',
      name: 'Bespoke Ceremonial & Bridal',
      year: 'Continuous',
      category: 'Bridal',
      verificationStatus: 'Couture Private Client',
      heroImage: '/shasha/hero/shasha-ivory-sculptural-bridal-gown.webp',
      shortDescription: 'Sculptural ivory micro-pleats, delicate crystal beadwork, and custom corsetry made to royal measure.',
      story: 'Crafted exclusively through private atelier consultation in Douala or via our international virtual measurement service.',
      looksCount: 5,
      credits: {
        styling: 'ShaSha Haute Couture Bridal',
        location: 'Douala, Cameroon'
      }
    }
  ]);

  // Full Looks Archive
  readonly looks = signal<CoutureLook[]>([
    {
      id: 'look-01-pearl-sculpture',
      title: 'Sculptural Pearl Column Gown',
      category: 'sculptural',
      categoryLabel: 'Sculptural Couture',
      collection: 'Combo Collection',
      image: '/shasha/hero/shasha-sculptural-pearl-couture-front.png',
      subtitle: 'Ivory structural column with organic pearl constellation',
      description: 'Hand-molded structured architectural bustier overlaid with genuine freshwater seed pearls, flowing into a minimalist floor-skimming ivory crepe column.',
      fabric: 'Heavy Crepe de Chine, Organza, Freshwater Seed Pearls',
      hours: 180,
      featuredClient: 'Editorial Flagship Look',
      highlights: ['Hand-placed seed pearls', 'Internal couture boning', 'Concealed Obsidian zip', 'Floor-length dramatic sweep'],
      priceOnApplication: true,
      edition: 'Bespoke Atelier Order'
    },
    {
      id: 'look-02-combo-suit',
      title: 'Cobalt & Ivory Architectural Ensemble',
      category: 'tailoring',
      categoryLabel: 'Statement Tailoring',
      collection: 'Combo Collection',
      image: '/shasha/hero/shasha-blue-white-signature-suit-full-look.png',
      subtitle: 'As worn by Michèle-Ange Minkata — Photographed by Tammyclicks',
      description: 'Signature tailored masterpiece pairing vivid Cameroonian cobalt blue with razor-sharp ivory lapels and architectural shoulder crests.',
      fabric: 'Italian Wool Twill, Heavy Silk Brocade, Satin Inlays',
      hours: 140,
      featuredClient: 'Michèle-Ange Minkata',
      event: 'Combo Collection Campaign',
      highlights: ['Sculpted Pagoda shoulders', 'Hand-stitched silk lining', 'Double-breasted sharp fastening', 'High-waisted cigarette trouser'],
      priceOnApplication: true,
      edition: 'Signature Series'
    },
    {
      id: 'look-03-force-of-nature',
      title: 'The Force of Nature AMVCA Gown',
      category: 'couture',
      categoryLabel: 'Red Carpet Couture',
      collection: 'The Force of Nature',
      image: '/shasha/campaigns/shasha-african-couture-runway-finale.webp',
      subtitle: 'Created for singer Mimie at the AMVCA 2026 Red Carpet',
      description: 'A viral cultural spectacle created in the Douala atelier, fusing high-fashion dynamism with dramatic layered tiers and sculptural gold accents.',
      fabric: 'Metallic Organza, Silk Taffeta, Toghu Embroidered Appliqués',
      hours: 240,
      featuredClient: 'Mimie',
      event: 'AMVCA 2026 Awards',
      highlights: ['Multi-dimensional sculptural tiers', 'Hand-gilded Toghu accents', 'Full red-carpet train', 'Custom corseted support'],
      priceOnApplication: true,
      edition: 'Museum & Red Carpet Archive'
    },
    {
      id: 'look-04-ivory-bridal',
      title: 'L’Impératrice Bridal Silhouette',
      category: 'bridal',
      categoryLabel: 'Bespoke Bridal',
      collection: 'Bespoke Ceremonial',
      image: '/shasha/hero/shasha-ivory-sculptural-bridal-gown.webp',
      subtitle: 'Ethereal ceremonial silhouette with micro-pleated draping',
      description: 'Constructed for brides who demand modern poise and timeless grandeur. An undulating neckline cascades into fine pleating that dances with movement.',
      fabric: 'Pure Silk Mikado, French Chantilly, Glass Micro-beads',
      hours: 210,
      highlights: ['Hand-pleated Mikado drapery', 'Hidden cathedral veil anchoring', 'Obsidian & Gold silk label', 'Custom measurement fit'],
      priceOnApplication: true,
      edition: 'Bespoke Only'
    },
    {
      id: 'look-05-toghu-purple',
      title: 'Royal Grassfields Toghu Eveningwear',
      category: 'toghu',
      categoryLabel: 'Toghu Heritage',
      collection: 'Reine des Grassfields',
      image: '/shasha/hero/shasha-purple-embellished-silhouette.webp',
      subtitle: 'Sacred North-West Cameroon embroidery reimagined',
      description: 'Deep royal amethyst velvet detailed with traditional geometric Toghu embroidery, celebrating Grassfields royalty with contemporary body-skimming lines.',
      fabric: 'Silk-Cotton Velvet, Hand-spun Toghu Thread, Gold bullion',
      hours: 260,
      highlights: ['Certified master artisan Toghu stitching', 'Sovereign pattern symbolism', 'High-mandarin collar detail', 'Side-slit couture hemline'],
      priceOnApplication: true,
      edition: 'Numbered Atelier Piece'
    },
    {
      id: 'look-06-red-empress',
      title: 'Scarlet Empress Gala Gown',
      category: 'couture',
      categoryLabel: 'Red Carpet Couture',
      collection: 'The Force of Nature',
      image: '/shasha/hero/shasha-red-embellished-silk-gown.webp',
      subtitle: 'Intense crimson silk with tone-on-tone crystal embroideries',
      description: 'Daring architectural corsetry with hand-applied ruby crystals that reflect flash photography effortlessly. A favorite for prestigious galas in Douala, Lagos, and Paris.',
      fabric: 'Duchess Silk Satin, Swarovski Crystals, Ruby Bugle Beads',
      hours: 195,
      highlights: ['Over 12,000 hand-set crystals', 'Sculpted sweetheart neckline', 'Internal waist cincher', 'Weightless movement structure'],
      priceOnApplication: true,
      edition: 'Made to Order'
    }
  ]);

  // Atelier Journey Steps
  readonly atelierSteps = signal<AtelierStep[]>([
    {
      step: '01',
      title: 'Concept & Silhouette Sketching',
      duration: 'Week 1',
      subtitle: 'Translating African Heritage into High-Fashion Architectural Lines',
      description: 'Every ShaSha gown begins with intimate dialogue with the client. Our Creative Director drafts exclusive hand sketches in our Bonamoussadi studio, establishing the silhouette, neckline, and structural volume.',
      image: '/shasha/atelier/process/shasha-fashion-sketching.webp',
      craftFocus: 'Hand-drawn fashion croquis, moodboard curation, silhouette proportion balance.'
    },
    {
      step: '02',
      title: 'Tactile Textile Selection & Silk Draping',
      duration: 'Week 2',
      subtitle: 'Sourcing Rare Brocades, Raw Silks & Grassfields Woven Fabrics',
      description: 'We curate textiles that communicate weight, dignity, and sensory luxury. From Italian wool twills to bespoke Toghu fabrics woven in Cameroon’s North-West region.',
      image: '/shasha/atelier/process/shasha-black-ivory-fabric-detail.webp',
      craftFocus: 'Fabric drape testing, tension checks, custom dyeing, textural contrast.'
    },
    {
      step: '03',
      title: 'Architectural Pattern Precision Cutting',
      duration: 'Weeks 3 - 4',
      subtitle: 'Sharp 90-Degree Geometric Precision & Tailoring Geometry',
      description: 'True to the ShaSha design ethos of sharp geometry and impeccable fit, master cutters draft individual toiles to the millimetre, honoring the wearer’s body with sculptured elegance.',
      image: '/shasha/atelier/process/shasha-pattern-cutting.webp',
      craftFocus: 'Zero-tolerance pattern alignment, bespoke toile construction, balance lines.'
    },
    {
      step: '04',
      title: 'Toghu & Gold Thread Hand-Embroidery',
      duration: 'Weeks 4 - 6',
      subtitle: 'Over 200 Hours of Artisanal Cameroon Needlework',
      description: 'Dedicated embroiderers stitch traditional and geometric motifs by hand. Gold threads, iridescent glass beads, and ancestral Toghu symbols take weeks of patient craftsmanship.',
      image: '/shasha/atelier/process/shasha-couture-beadwork.webp',
      craftFocus: 'Hand-beading, gold bullion embroidery, relief stitch textures.'
    },
    {
      step: '05',
      title: 'Personal Fitting & Final Sculptural Polish',
      duration: 'Week 7',
      subtitle: 'Atelier Fitting in Douala or White-Glove Global Delivery',
      description: 'The moment of transformation. The client enters the private fitting suite in Douala (or engages via virtual high-definition fitting) for final micro-adjustments before VIP delivery.',
      image: '/shasha/atelier/fittings/shasha-gown-fitting-session.webp',
      craftFocus: 'Micro-hem adjustments, corsetry tension perfection, final hand press.'
    }
  ]);

  // Active Category filter
  readonly selectedCategory = signal<string>('all');

  // Filtered looks
  readonly filteredLooks = computed(() => {
    const cat = this.selectedCategory();
    const all = this.looks();
    if (cat === 'all') return all;
    return all.filter(l => l.category === cat);
  });

  // Modal & Drawer State
  readonly activeLookModal = signal<CoutureLook | null>(null);
  readonly isWishlistOpen = signal<boolean>(false);
  readonly isConsultationOpen = signal<boolean>(false);
  readonly consultationPrefillService = signal<string>('Custom Haute Couture Gown');

  // Private Selection / Wishlist (with localStorage persistence)
  readonly wishlist = signal<CoutureLook[]>(this.loadWishlist());

  // Ambient sound / runway feel toggle
  readonly isPlayingAmbient = signal<boolean>(false);

  constructor() {}

  private loadWishlist(): CoutureLook[] {
    try {
      const data = localStorage.getItem('shasha_private_selection');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  saveWishlist(): void {
    try {
      localStorage.setItem('shasha_private_selection', JSON.stringify(this.wishlist()));
    } catch (e) {
      console.warn('Storage error:', e);
    }
  }

  toggleWishlist(look: CoutureLook): void {
    const list = this.wishlist();
    const exists = list.some(item => item.id === look.id);
    if (exists) {
      this.wishlist.set(list.filter(item => item.id !== look.id));
    } else {
      this.wishlist.set([...list, look]);
    }
    this.saveWishlist();
  }

  isInWishlist(id: string): boolean {
    return this.wishlist().some(item => item.id === id);
  }

  openLookDetail(look: CoutureLook): void {
    this.activeLookModal.set(look);
  }

  closeLookDetail(): void {
    this.activeLookModal.set(null);
  }

  openWishlist(): void {
    this.isWishlistOpen.set(true);
  }

  closeWishlist(): void {
    this.isWishlistOpen.set(false);
  }

  openConsultation(service: string = 'Custom Haute Couture Gown'): void {
    this.consultationPrefillService.set(service);
    this.isConsultationOpen.set(true);
  }

  closeConsultation(): void {
    this.isConsultationOpen.set(false);
  }

  setCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  toggleLanguage(): void {
    this.language.set(this.language() === 'en' ? 'fr' : 'en');
  }

  toggleAmbient(): void {
    this.isPlayingAmbient.set(!this.isPlayingAmbient());
  }

  getWhatsAppLink(customMessage?: string): string {
    const base = 'https://wa.me/237673967583';
    const text = customMessage || 'Hello ShaSha Designs Atelier, I am interested in booking a private couture consultation.';
    return `${base}?text=${encodeURIComponent(text)}`;
  }
}
