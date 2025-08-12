import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ExperienceService } from '../../core/services/experience.service';
import { ExperienceStatsComponent } from './experience-stats/experience-stats.component';

@Component({
  selector: 'app-experience-section',
  imports: [ExperienceStatsComponent],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSectionComponent {
  
  // Injection du service et exposition directe pour le template
  readonly experienceService = inject(ExperienceService);
}
