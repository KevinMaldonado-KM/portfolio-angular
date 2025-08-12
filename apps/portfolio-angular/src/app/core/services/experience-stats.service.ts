import { Injectable, inject, computed } from '@angular/core';
import { ExperienceService } from './experience.service';
import { ExperienceStats, StatDisplayItem } from '../models/experience-stats.model';
import { STATS_CONFIG } from '../data/experience-stats.data';

@Injectable({
  providedIn: 'root'
})
export class ExperienceStatsService {
  private readonly experienceService = inject(ExperienceService);

  // Statistiques calculées automatiquement
  readonly stats = computed((): ExperienceStats => {
    return this.experienceService.stats();
  });

  // Éléments à afficher avec configuration
  readonly displayItems = computed((): StatDisplayItem[] => {
    const stats = this.stats();
    const items: StatDisplayItem[] = [];

    // Années d'expérience (toujours visible)
    items.push({
      value: stats.yearsOfExperience,
      key: 'yearsOfExperience',
      ...STATS_CONFIG['yearsOfExperience']
    });

    // Stages (visible seulement si > 0)
    if (stats.stages > 0 || STATS_CONFIG['stages'].alwaysVisible) {
      items.push({
        value: stats.stages,
        key: 'stages',
        ...STATS_CONFIG['stages']
      });
    }

    // Alternances (visible seulement si > 0)
    if (stats.apprenticeships > 0 || STATS_CONFIG['apprenticeships'].alwaysVisible) {
      items.push({
        value: stats.apprenticeships,
        key: 'apprenticeships',
        ...STATS_CONFIG['apprenticeships']
      });
    }

    // CDI/CDD (visible seulement si > 0)
    if (stats.jobs > 0 || STATS_CONFIG['jobs'].alwaysVisible) {
      items.push({
        value: stats.jobs,
        key: 'jobs',
        ...STATS_CONFIG['jobs']
      });
    }

    // Entreprises (toujours visible si > 0)
    if (stats.companies > 0 || STATS_CONFIG['companies'].alwaysVisible) {
      items.push({
        value: stats.companies,
        key: 'companies',
        ...STATS_CONFIG['companies']
      });
    }

    return items;
  });

  // Nombre d'éléments pour calculer la grille
  readonly itemCount = computed(() => this.displayItems().length);

  // Classes CSS pour la grille responsive
  readonly gridClasses = computed(() => {
    const count = this.itemCount();
    const gridMap: Record<number, string> = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-3',
      4: 'grid-cols-2 md:grid-cols-4',
      5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
    };
    
    return `grid gap-6 ${gridMap[count] || 'grid-cols-2 md:grid-cols-3'}`;
  });
}
