import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { HeroSectionComponent } from './features/hero/hero-section.component';
import { AboutSectionComponent } from './features/about/about-section.component';

@Component({
  imports: [
    RouterModule,
    NavigationComponent,
    HeroSectionComponent,
    AboutSectionComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'portfolio-angular';
}
