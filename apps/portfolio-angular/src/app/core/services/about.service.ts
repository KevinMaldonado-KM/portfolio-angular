import { Injectable, signal, computed } from '@angular/core';
import { AboutProfile, PersonalInfo, QuickStat, CoreValue } from '../models/about.model';
import { ABOUT_PROFILE_DATA } from '../data/about.data';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  
  // Signal pour les données reactives
  private readonly aboutProfile = signal<AboutProfile>(ABOUT_PROFILE_DATA);

  // Propriétés computed pour l'exposition publique
  readonly profile = computed(() => this.aboutProfile());
  readonly personalInfo = computed(() => this.aboutProfile().personalInfo);
  readonly story = computed(() => this.aboutProfile().story);
  readonly quickStats = computed(() => this.aboutProfile().quickStats);
  readonly coreValues = computed(() => this.aboutProfile().coreValues);
  readonly callToAction = computed(() => this.aboutProfile().callToAction);
  
  // Computed pour des données dérivées
  readonly fullName = computed(() => this.personalInfo().name);
  
  readonly valuesByCategory = computed(() => {
    const values = this.coreValues();
    const categories = [...new Set(values.map(v => v.category).filter(Boolean))];
    return categories.reduce((acc, category) => {
      if (category) {
        acc[category] = values.filter(v => v.category === category);
      }
      return acc;
    }, {} as Record<string, CoreValue[]>);
  });

  readonly statisticsTotal = computed(() => {
    const stats = this.quickStats();
    return stats.reduce((total, stat) => {
      const numericValue = parseInt(stat.value.replace(/\D/g, '')) || 0;
      return total + numericValue;
    }, 0);
  });

  /**
   * Met à jour le profil about (pour les futures fonctionnalités d'édition)
   */
  updateProfile(profile: Partial<AboutProfile>): void {
    this.aboutProfile.update(current => ({ ...current, ...profile }));
  }

  /**
   * Met à jour les informations personnelles
   */
  updatePersonalInfo(info: Partial<PersonalInfo>): void {
    this.aboutProfile.update(current => ({
      ...current,
      personalInfo: { ...current.personalInfo, ...info }
    }));
  }

  /**
   * Ajoute une statistique rapide
   */
  addQuickStat(stat: QuickStat): void {
    this.aboutProfile.update(current => ({
      ...current,
      quickStats: [...current.quickStats, stat]
    }));
  }

  /**
   * Ajoute une valeur fondamentale
   */
  addCoreValue(value: CoreValue): void {
    this.aboutProfile.update(current => ({
      ...current,
      coreValues: [...current.coreValues, value]
    }));
  }

  /**
   * Action du call to action
   */
  handleCallToAction(): void {
    const cta = this.callToAction();
    switch (cta.buttonAction) {
      case 'contact': {
        // Logique pour aller à la section contact
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      }
      case 'email': {
        window.location.href = 'mailto:kevin.maldonado.contact@gmail.com';
        break;
      }
      default: {
        console.log('Action CTA:', cta.buttonAction);
      }
    }
  }
}
