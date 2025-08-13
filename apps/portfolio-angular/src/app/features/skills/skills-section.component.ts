import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SkillsService } from '../../core/services/skills.service';
import { SkillCategory } from '../../core/models/skills.model';

@Component({
  selector: 'app-skills-section',
  imports: [],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsSectionComponent {
  
  // Injection du service avec inject()
  private readonly skillsService = inject(SkillsService);

  // État local pour l'affichage
  readonly showStats = signal(false);

  // Propriétés réactives exposées du service
  readonly skillCategories = this.skillsService.skillCategories;
  readonly expandedCategories = this.skillsService.expandedCategories;
  readonly globalStats = this.skillsService.globalStats;
  readonly topSkills = this.skillsService.topSkills;

  // Méthodes pour la gestion des catégories
  toggleCategoryExpansion(categoryId: string): void {
    console.log('Toggling category:', categoryId, 'Current expanded:', this.expandedCategories());
    this.skillsService.toggleCategoryExpansion(categoryId);
    console.log('After toggle expanded:', this.expandedCategories());
  }

  isCategoryExpanded(categoryId: string): boolean {
    const isExpanded = this.skillsService.isCategoryExpanded(categoryId);
    return isExpanded;
  }

  // Méthodes pour les actions en lot
  expandAllCategories(): void {
    this.skillsService.expandAllCategories();
  }

  collapseAllCategories(): void {
    this.skillsService.collapseAllCategories();
  }

  // Méthodes utilitaires pour l'affichage
  toggleStats(): void {
    this.showStats.update(show => !show);
  }

  getCategorySkillCount(category: SkillCategory): number {
    return category.skills.length;
  }

  getCategoryAverageLevel(category: SkillCategory): number {
    const levels = category.skills.map(skill => skill.level);
    return Math.round(levels.reduce((sum, level) => sum + level, 0) / levels.length);
  }
}