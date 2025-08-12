import { Injectable, signal, computed } from '@angular/core';
import { Experience, ExperienceType } from '../models/experience.model';
import { EXPERIENCES_DATA, EXPERIENCE_TYPE_CONFIGS } from '../data/experience.data';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  
  // Signal pour les données reactives
  private readonly experiences = signal<Experience[]>(EXPERIENCES_DATA);

  // Propriétés computed pour l'exposition publique
  readonly allExperiences = computed(() => this.experiences());
  
  // Computed pour des données dérivées
  readonly experiencesByType = computed(() => {
    const experiences = this.experiences();
    const groupedByType: Record<ExperienceType, Experience[]> = {
      'apprentissage': [],
      'stage': [],
      'job': []
    };
    
    experiences.forEach(exp => {
      if (groupedByType[exp.type]) {
        groupedByType[exp.type].push(exp);
      }
    });
    
    return groupedByType;
  });

  readonly experiencesCount = computed(() => this.experiences().length);

  readonly latestExperience = computed(() => {
    const experiences = this.experiences();
    return experiences.length > 0 ? experiences[0] : null;
  });

  readonly experiencesByYear = computed(() => {
    const experiences = this.experiences();
    const groupedByYear: Record<string, Experience[]> = {};
    
    experiences.forEach(exp => {
      // Extraire l'année depuis la période (format attendu: "MM/YYYY - MM/YYYY" ou "MM/YYYY - En cours")
      const yearMatch = exp.period.match(/(\d{4})/);
      const year = yearMatch ? yearMatch[1] : 'Unknown';
      
      if (!groupedByYear[year]) {
        groupedByYear[year] = [];
      }
      groupedByYear[year].push(exp);
    });
    
    return groupedByYear;
  });

  // Computed pour les statistiques automatiques
  readonly stats = computed(() => {
    const experiences = this.experiences();
    const byType = this.experiencesByType();
    const uniqueCompanies = new Set(experiences.map(exp => exp.company));
    
    // Calcul précis des années d'expérience en analysant les périodes
    let totalMonths = 0;
    
    experiences.forEach(exp => {
      const period = exp.period;
      
      // Parsing des différents formats de période
      // Format: "MM/YYYY – MM/YYYY" ou "MM/YYYY – Aujourd'hui" ou "MM/YYYY – 09/2025"
      const periodMatch = period.match(/(\d{2})\/(\d{4})\s*[–-]\s*(.+)/);
      
      if (periodMatch) {
        const startMonth = parseInt(periodMatch[1]);
        const startYear = parseInt(periodMatch[2]);
        const endPart = periodMatch[3].trim();
        
        let endMonth: number;
        let endYear: number;
        
        if (endPart.toLowerCase().includes('aujourd') || endPart.toLowerCase().includes('en cours')) {
          // Période en cours - utiliser la date actuelle
          const now = new Date();
          endMonth = now.getMonth() + 1; // getMonth() retourne 0-11
          endYear = now.getFullYear();
        } else {
          // Analyser la date de fin
          const endMatch = endPart.match(/(\d{2})\/(\d{4})/);
          if (endMatch) {
            endMonth = parseInt(endMatch[1]);
            endYear = parseInt(endMatch[2]);
          } else {
            // Fallback si le format n'est pas reconnu
            endMonth = 12;
            endYear = startYear;
          }
        }
        
        // Calculer la différence en mois
        const monthsDiff = (endYear - startYear) * 12 + (endMonth - startMonth) + 1; // +1 pour inclure le mois de début
        totalMonths += Math.max(0, monthsDiff);
      }
    });
    
    // Convertir en années et arrondir à l'inférieur
    const yearsOfExperience = Math.floor(totalMonths / 12);

    return {
      yearsOfExperience,
      stages: byType.stage.length,
      apprenticeships: byType.apprentissage.length,
      jobs: byType.job.length,
      companies: uniqueCompanies.size,
      totalExperiences: experiences.length
    };
  });

  /**
   * Obtient l'icône pour un type d'expérience
   */
  getTypeIcon(type: ExperienceType): string {
    return EXPERIENCE_TYPE_CONFIGS[type]?.icon || 'fas fa-briefcase';
  }

  /**
   * Obtient la classe de couleur pour un type d'expérience
   */
  getTypeColor(type: ExperienceType): string {
    return EXPERIENCE_TYPE_CONFIGS[type]?.colorClass || 'from-gray-500 to-gray-600';
  }

  /**
   * Obtient le label pour un type d'expérience
   */
  getTypeLabel(type: ExperienceType): string {
    return EXPERIENCE_TYPE_CONFIGS[type]?.label || '';
  }

  /**
   * Obtient la couleur de timeline pour un type d'expérience
   */
  getTimelineColor(type: ExperienceType): string {
    const colorMap = {
      'apprentissage': '#10b981', // emerald-500
      'stage': '#3b82f6', // blue-500
      'job': '#8b5cf6' // violet-500
    };
    return colorMap[type] || '#6b7280'; // gray-500
  }

  /**
   * Filtre les expériences par type
   */
  getExperiencesByType(type: ExperienceType): Experience[] {
    return this.experiences().filter(exp => exp.type === type);
  }

  /**
   * Recherche des expériences par mot-clé
   */
  searchExperiences(keyword: string): Experience[] {
    const lowerKeyword = keyword.toLowerCase();
    return this.experiences().filter(exp => 
      exp.position.toLowerCase().includes(lowerKeyword) ||
      exp.company.toLowerCase().includes(lowerKeyword) ||
      exp.achievements.some(achievement => achievement.toLowerCase().includes(lowerKeyword)) ||
      (exp.technologies && exp.technologies.some(tech => tech.toLowerCase().includes(lowerKeyword)))
    );
  }

  /**
   * Ajoute une nouvelle expérience (pour les futures fonctionnalités d'édition)
   */
  addExperience(experience: Experience): void {
    this.experiences.update(current => [experience, ...current]);
  }

  /**
   * Met à jour une expérience existante en utilisant une combinaison unique
   */
  updateExperience(company: string, position: string, updates: Partial<Experience>): void {
    this.experiences.update(current =>
      current.map(exp => 
        exp.company === company && exp.position === position 
          ? { ...exp, ...updates } 
          : exp
      )
    );
  }

  /**
   * Supprime une expérience en utilisant une combinaison unique
   */
  removeExperience(company: string, position: string): void {
    this.experiences.update(current => 
      current.filter(exp => !(exp.company === company && exp.position === position))
    );
  }
}
