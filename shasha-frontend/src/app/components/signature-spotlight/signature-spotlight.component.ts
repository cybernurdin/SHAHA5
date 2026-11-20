import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShashaService } from '../../services/shasha.service';

@Component({
  selector: 'app-signature-spotlight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signature-spotlight.component.html',
  styleUrl: './signature-spotlight.component.scss'
})
export class SignatureSpotlightComponent {
  readonly shasha = inject(ShashaService);

  openForceOfNatureModal(): void {
    const look = this.shasha.looks().find(l => l.id === 'look-03-force-of-nature');
    if (look) {
      this.shasha.openLookDetail(look);
    }
  }
}
