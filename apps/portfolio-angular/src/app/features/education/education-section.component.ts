import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationService } from '../../core/services/education.service';
import { Education, EducationType } from '../../core/models/education.model';
import { CertificationsComponent } from './certifications/certifications.component';

interface StatCard {
  icon: string;
  value: number | string;
  label: string;
}

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CommonModule, CertificationsComponent],
  templateUrl: './education-section.component.html',
  styleUrl: './education-section.component.scss'
})
export class EducationSectionComponent {
  
  // Injection du service avec inject()
  private readonly educationService = inject(EducationService);

  // Signals pour l'état du composant - plus de ngOnInit nécessaire !
  readonly selectedType = signal<EducationType | 'all'>('all');
  readonly visibleItems = signal<number>(0);
  readonly scrollProgress = signal<number>(0);
  readonly animationComplete = signal<boolean>(false);

  // Computed properties utilisant le service - reactives automatiquement
  readonly educations = computed(() => this.educationService.allEducations());

  // Types disponibles basés sur les données du service
  availableTypes = computed(() => {
    const types: (EducationType | 'all')[] = ['all'];
    const educationTypes = new Set(this.educations().map((edu: Education) => edu.type));
    types.push(...Array.from(educationTypes) as EducationType[]);
    return types;
  });

  // Éducations filtrées
  filteredEducations = computed(() => {
    const type = this.selectedType();
    if (type === 'all') {
      return this.educations();
    }
    return this.educations().filter((edu: Education) => edu.type === type);
  });

  // Statistiques calculées - reactives automatiquement
  readonly stats = computed((): StatCard[] => {
    const educations = this.educations().filter(edu => edu.type !== 'secondary'); // Exclure le bac
    const highestLevel = this.getHighestEducationLevel();
    
    return [
      {
        icon: 'fas fa-university',
        value: educations.filter((e: Education) => e.type === 'university').length,
        label: 'Diplômes'
      },
      {
        icon: 'fas fa-medal',
        value: highestLevel,
        label: 'Niveau'
      },
    ];
  });

  // Constructor avec effet automatique pour l'initialisation
  constructor() {
    // Auto-initialiser l'affichage des items
    setTimeout(() => {
      this.visibleItems.set(this.filteredEducations().length);
      this.animationComplete.set(true);
    }, 1000);
  }

  // Méthodes publiques - plus besoin de lifecycle hooks
  selectType(type: EducationType | 'all'): void {
    this.selectedType.set(type);
    this.visibleItems.set(0);
    
    // Réanimer les items avec un délai
    setTimeout(() => {
      this.visibleItems.set(this.filteredEducations().length);
    }, 100);
  }

  // Méthodes computed pour la visibilité et le tracking
  isVisible(index: number): boolean {
    return index < this.visibleItems();
  }
  
  trackEducation(index: number, education: Education): string {
    return education.institution + education.degree;
  }

  // Méthodes helper pour les icônes et labels
  getEducationIcon(type: EducationType): string {
    return this.educationService.getTypeIcon(type);
  }

  getEducationLabel(type: EducationType | 'all'): string {
    if (type === 'all') return 'Toutes';
    return this.educationService.getTypeLabel(type);
  }

  // Méthodes privées
  private getHighestEducationLevel(): string {
    const educations = this.educations().filter(edu => edu.type !== 'secondary');
    
    let maxLevel = 0;
    for (const education of educations) {
      // Chercher un pattern BAC+X dans le titre ou la description
      const bacMatch = education.degree.match(/BAC\+(\d+)/i) || 
                       education.description?.match(/BAC\+(\d+)/i) ||
                       education.institution.match(/BAC\+(\d+)/i);
      
      if (bacMatch) {
        const level = parseInt(bacMatch[1], 10);
        maxLevel = Math.max(maxLevel, level);
      } else {
        // Fallback: essayer de déduire selon les mots-clés
        const degree = education.degree.toLowerCase();
        if (degree.includes('master') || degree.includes('ingénieur')) {
          maxLevel = Math.max(maxLevel, 5);
        } else if (degree.includes('licence') || degree.includes('bachelor')) {
          maxLevel = Math.max(maxLevel, 3);
        } else if (degree.includes('dut') || degree.includes('bts')) {
          maxLevel = Math.max(maxLevel, 2);
        }
      }
    }
    
    return maxLevel > 0 ? `BAC+${maxLevel}` : 'N/A';
  }
}
