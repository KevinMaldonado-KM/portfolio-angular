import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { HeroSectionComponent } from './features/hero/hero-section.component';
import { AboutSectionComponent } from './features/about/about-section.component';
import { ExperienceSectionComponent } from './features/experience/experience-section.component';
import { EducationSectionComponent } from './features/education/education-section.component';
@Component({
  imports: [
    RouterModule,
    NavigationComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'portfolio-angular';
}
