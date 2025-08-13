import { Injectable, inject, computed } from '@angular/core';
import { ExperienceStatsService } from './experience-stats.service';
import { EducationService } from './education.service';
import { AboutStat } from '../models/about-stats.model';
import { ABOUT_STATS_CONFIG } from '../data/about-stats.data';

@Injectable({
  providedIn: 'root'
})
export class AboutStatsService {
  private readonly experienceStatsService = inject(ExperienceStatsService);
  private readonly educationService = inject(EducationService);

  // Statistiques dynamiques calculées
  readonly stats = computed((): AboutStat[] => {
    const experienceStats = this.experienceStatsService.stats();
    const certificationStats = this.educationService.certificationStats();

    return Object.entries(ABOUT_STATS_CONFIG).map(([, config]) => {
      let value = config.fallbackValue;
      let description = config.description;

      // Calcul des valeurs dynamiques
      if (config.isDynamic) {
        switch (config.source) {
          case 'experience': {
            const years = experienceStats.yearsOfExperience;
            value = config.formatter ? config.formatter(years) : `${years}+`;
            description = `${years} années d'expérience professionnelle`;
            break;
          }
          case 'certifications': {
            const certCount = certificationStats.totalCertifications;
            value = config.formatter ? config.formatter(certCount) : `${certCount}+`;
            description = `${certCount} certifications professionnelles obtenues`;
            break;
          }
        }
      }

      return {
        value,
        label: config.label,
        description,
        isDynamic: config.isDynamic,
        source: config.source
      };
    });
  });

  /**
   * Obtient une statistique spécifique par clé
   */
  getStat(key: string): AboutStat | undefined {
    return this.stats().find(stat => 
      ABOUT_STATS_CONFIG[key]?.label === stat.label
    );
  }

  /**
   * Obtient toutes les statistiques dynamiques
   */
  getDynamicStats(): AboutStat[] {
    return this.stats().filter(stat => stat.isDynamic);
  }

  /**
   * Obtient toutes les statistiques statiques
   */
  getStaticStats(): AboutStat[] {
    return this.stats().filter(stat => !stat.isDynamic);
  }
}
