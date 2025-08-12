import { Injectable, signal, computed } from '@angular/core';
import { HeroProfile, SocialLink, SkillHighlight } from '../models/hero.model';
import { HERO_PROFILE_DATA, SOCIAL_LINKS_DATA, HIGHLIGHTED_SKILLS_DATA } from '../data/hero.data';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  // Signaux pour les données reactives
  private readonly heroProfile = signal<HeroProfile>(HERO_PROFILE_DATA);
  private readonly socialLinks = signal<SocialLink[]>(SOCIAL_LINKS_DATA);
  private readonly highlightedSkills = signal<SkillHighlight[]>(HIGHLIGHTED_SKILLS_DATA);

  // Propriétés computed pour l'exposition publique
  readonly profile = computed(() => this.heroProfile());
  readonly social = computed(() => this.socialLinks());
  readonly skills = computed(() => this.highlightedSkills());
  
  // Computed pour des données dérivées
  readonly fullName = computed(() => 
    `${this.heroProfile().firstName} ${this.heroProfile().lastName}`
  );
  
  readonly skillNames = computed(() => 
    this.highlightedSkills().map(skill => skill.name)
  );

  readonly socialByName = computed(() => {
    const links = this.socialLinks();
    return (name: string) => links.find(link => link.name.toLowerCase() === name.toLowerCase());
  });

  /**
   * Télécharge le CV
   */
  downloadCV(): void {
    const cvConfig = this.heroProfile().cvFile;
    
    // Créer un lien temporaire pour télécharger le fichier
    const link = document.createElement('a');
    link.href = cvConfig.path;
    link.download = cvConfig.fileName;
    link.target = '_blank';
    
    // Ajouter le lien au DOM, le cliquer, puis le supprimer
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /**
   * Met à jour le profil hero (pour les futures fonctionnalités d'édition)
   */
  updateProfile(profile: Partial<HeroProfile>): void {
    this.heroProfile.update(current => ({ ...current, ...profile }));
  }

  /**
   * Ajoute un lien social
   */
  addSocialLink(link: SocialLink): void {
    this.socialLinks.update(current => [...current, link]);
  }

  /**
   * Ajoute une compétence mise en avant
   */
  addSkillHighlight(skill: SkillHighlight): void {
    this.highlightedSkills.update(current => [...current, skill]);
  }
}
