import { Injectable, signal, computed } from '@angular/core';
import { Education, EducationType } from '../models/education.model';
import { EDUCATION_DATA, EDUCATION_TYPE_CONFIGS } from '../data/education.data';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  
  // Signals pour les données reactives
  private readonly educations = signal<Education[]>(EDUCATION_DATA);

  // Propriétés computed pour l'exposition publique
  readonly allEducations = computed(() => this.educations());
  
  // Computed pour des données dérivées
  readonly educationsByType = computed(() => {
    const educations = this.educations();
    const groupedByType: Record<EducationType, Education[]> = {
      'university': [],
      'secondary': []
    };
    
    educations.forEach(edu => {
      if (groupedByType[edu.type]) {
        groupedByType[edu.type].push(edu);
      }
    });
    
    return groupedByType;
  });

  readonly latestEducation = computed(() => {
    const educations = this.educations();
    return educations.length > 0 ? educations[0] : null;
  });

  /**
   * Obtient l'icône pour un type d'éducation
   */
  getTypeIcon(type: EducationType): string {
    return EDUCATION_TYPE_CONFIGS[type]?.icon || 'fas fa-graduation-cap';
  }

  /**
   * Obtient la classe de couleur pour un type d'éducation
   */
  getTypeColor(type: EducationType): string {
    return EDUCATION_TYPE_CONFIGS[type]?.colorClass || 'from-gray-500 to-gray-600';
  }

  /**
   * Obtient le label pour un type d'éducation
   */
  getTypeLabel(type: EducationType): string {
    return EDUCATION_TYPE_CONFIGS[type]?.label || '';
  }

  /**
   * Filtre les éducations par type
   */
  getEducationsByType(type: EducationType): Education[] {
    return this.educations().filter(edu => edu.type === type);
  }

  /**
   * Recherche des éducations par mot-clé
   */
  searchEducations(keyword: string): Education[] {
    const lowerKeyword = keyword.toLowerCase();
    return this.educations().filter(edu => 
      edu.degree.toLowerCase().includes(lowerKeyword) ||
      edu.institution.toLowerCase().includes(lowerKeyword) ||
      (edu.description && edu.description.toLowerCase().includes(lowerKeyword))
    );
  }

  /**
   * Ajoute une nouvelle éducation
   */
  addEducation(education: Education): void {
    this.educations.update(current => [education, ...current]);
  }

}
