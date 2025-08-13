import { Injectable, signal, computed } from '@angular/core';
import { SkillCategory, SkillStats, Skill } from '../models/skills.model';
import { SKILLS_DATA } from '../data/skills.data';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  // État réactif avec signals
  private readonly _skillCategories = signal<SkillCategory[]>(SKILLS_DATA);
  private readonly _expandedCategories = signal<Record<string, boolean>>({});

  // Getters publics
  readonly skillCategories = this._skillCategories.asReadonly();
  readonly expandedCategories = this._expandedCategories.asReadonly();

  // Statistiques globales
  readonly globalStats = computed(() => {
    const allSkills = this._skillCategories().flatMap(cat => cat.skills);
    return this.calculateStats(allSkills);
  });

  // Top skills par niveau
  readonly topSkills = computed(() => {
    const allSkills = this._skillCategories().flatMap(cat => 
      cat.skills.map(skill => ({ ...skill, categoryId: cat.id, categoryName: cat.name }))
    );
    return allSkills
      .sort((a, b) => b.level - a.level)
      .slice(0, 10);
  });

  // Méthodes publiques pour la gestion d'état
  toggleCategoryExpansion(categoryId: string): void {
    const current = this._expandedCategories();
    const newExpanded = { ...current };
    
    newExpanded[categoryId] = !newExpanded[categoryId];
    
    this._expandedCategories.set(newExpanded);
  }

  isCategoryExpanded(categoryId: string): boolean {
    return this._expandedCategories()[categoryId] || false;
  }

  expandAllCategories(): void {
    const allIds = this._skillCategories().map(cat => cat.id);
    const expanded: Record<string, boolean> = {};
    allIds.forEach(id => expanded[id] = true);
    this._expandedCategories.set(expanded);
  }

  collapseAllCategories(): void {
    this._expandedCategories.set({});
  }

  // Méthodes utilitaires
  getCategoryById(categoryId: string): SkillCategory | undefined {
    return this._skillCategories().find(cat => cat.id === categoryId);
  }

  // Calcul des statistiques
  private calculateStats(skills: Skill[]): SkillStats {
    if (skills.length === 0) {
      return {
        totalSkills: 0,
        categoriesCount: 0,
        averageLevel: 0,
        topSkills: []
      };
    }

    const levels = skills.map(skill => skill.level);
    const totalSkills = skills.length;
    const averageLevel = Math.round(levels.reduce((sum, level) => sum + level, 0) / totalSkills);
    
    const topSkills = skills
      .sort((a, b) => b.level - a.level)
      .slice(0, 5);

    return {
      totalSkills,
      categoriesCount: this._skillCategories().length,
      averageLevel,
      topSkills
    };
  }
}
