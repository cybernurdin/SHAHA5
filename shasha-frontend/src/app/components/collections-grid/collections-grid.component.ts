import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShashaService } from '../../services/shasha.service';
import { CoutureLook } from '../../models/shasha.models';

@Component({
  selector: 'app-collections-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collections-grid.component.html',
  styleUrl: './collections-grid.component.scss'
})
export class CollectionsGridComponent {
  readonly shasha = inject(ShashaService);

  readonly categories = [
    { id: 'all', label: 'All Silhouettes' },
    { id: 'couture', label: 'Couture Gowns' },
    { id: 'bridal', label: 'Bespoke Bridal' },
    { id: 'toghu', label: 'Toghu Heritage' },
    { id: 'tailoring', label: 'Statement Tailoring' },
    { id: 'sculptural', label: 'Sculptural Art' }
  ];

  selectCategory(catId: string): void {
    this.shasha.setCategory(catId);
  }

  openLook(look: CoutureLook): void {
    this.shasha.openLookDetail(look);
  }

  toggleWishlist(event: Event, look: CoutureLook): void {
    event.stopPropagation();
    this.shasha.toggleWishlist(look);
  }

  inquireWhatsApp(event: Event, look: CoutureLook): void {
    event.stopPropagation();
    const message = `Hello ShaSha Designs Atelier, I would like to inquire about the "${look.title}" from the ${look.collection}.`;
    window.open(this.shasha.getWhatsAppLink(message), '_blank');
  }
}
