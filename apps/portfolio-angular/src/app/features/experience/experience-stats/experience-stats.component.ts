import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceStatsService } from '../../../core/services/experience-stats.service';

@Component({
  selector: 'app-experience-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-stats.component.html',
  styleUrl: './experience-stats.component.scss'
})
export class ExperienceStatsComponent {
  readonly statsService = inject(ExperienceStatsService);
}
