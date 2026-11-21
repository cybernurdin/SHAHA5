import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { CollectionsGridComponent } from './components/collections-grid/collections-grid.component';
import { SignatureSpotlightComponent } from './components/signature-spotlight/signature-spotlight.component';
import { ShashaService } from './services/shasha.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    CollectionsGridComponent,
    SignatureSpotlightComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly shasha = inject(ShashaService);
}
