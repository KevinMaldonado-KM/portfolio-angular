import { ChangeDetectionStrategy, Component, inject, computed, OnInit } from '@angular/core';
import { HeroService } from '../../core/services/hero.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent implements OnInit {
  
  // Injection des services avec la nouvelle syntaxe inject()
  private readonly heroService = inject(HeroService);
  private readonly seoService = inject(SeoService);

  // Exposition des signaux computed pour le template
  readonly profile = this.heroService.profile;
  readonly socialLinks = this.heroService.social;
  readonly highlightedSkills = this.heroService.skillNames;
  readonly fullName = this.heroService.fullName;

  // Computed pour des données spécifiques au composant si nécessaire
  readonly avatarInitials = computed(() => this.profile().avatar.initials);
  readonly hasAvatar = computed(() => !!this.profile().avatar.imageUrl);

  ngOnInit(): void {
    // Optimisation SEO pour la page d'accueil
    this.seoService.setHomeSeo();
  }

  /**
   * Télécharge le CV via le service
   */
  downloadCV(): void {
    this.heroService.downloadCV();
  }

  /**
   * Navigate vers la section projets avec un scroll smooth
   */
  scrollToProjects(): void {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
