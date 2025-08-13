import { Injectable, computed, signal } from '@angular/core';
import { 
  Project, 
  ProjectStats, 
  ProjectFilter, 
  ProjectType, 
  ProjectLevel,
  PROJECT_TYPE_LABELS,
  PROJECT_LEVEL_LABELS,
  PROJECT_TYPE_ICONS
} from '../models/project.model';
import { PROJECTS_DATA, PROJECT_CATEGORIES, QUICK_STATS } from '../data/projects.data';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  // État réactif avec signals
  private readonly _projects = signal<Project[]>(PROJECTS_DATA);
  private readonly _activeFilter = signal<string>('Tous');

  // Propriétés publiques en lecture seule
  readonly projects = this._projects.asReadonly();
  readonly activeFilter = this._activeFilter.asReadonly();
  readonly categories = PROJECT_CATEGORIES;

  // Projets filtrés
  readonly filteredProjects = computed(() => {
    const filter = this._activeFilter();
    const allProjects = this._projects();

    if (filter === 'Tous') {
      return allProjects;
    }

    if (filter === 'Projets phares') {
      return allProjects.filter(project => project.featured);
    }

    const typeMap: Record<string, ProjectType> = {
      'Académique': 'academic',
      'Personnel': 'personal',
      'Professionnel': 'professional'
    };

    const filterType = typeMap[filter];
    return filterType ? allProjects.filter(project => project.type === filterType) : allProjects;
  });

  // Statistiques globales
  readonly globalStats = computed((): ProjectStats => {
    const allProjects = this._projects();
    const technologies = [...new Set(allProjects.flatMap(p => p.technologies))];

    return {
      totalProjects: allProjects.length,
      academicProjects: allProjects.filter(p => p.type === 'academic').length,
      personalProjects: allProjects.filter(p => p.type === 'personal').length,
      professionalProjects: allProjects.filter(p => p.type === 'professional').length,
      featuredProjects: allProjects.filter(p => p.featured).length,
      totalTechnologies: technologies.length,
      projectsByLevel: {
        beginner: allProjects.filter(p => p.level === 'beginner').length,
        intermediate: allProjects.filter(p => p.level === 'intermediate').length,
        advanced: allProjects.filter(p => p.level === 'advanced').length
      },
      recentProjects: this.getRecentProjects(3)
    };
  });

  // Projets par type
  readonly academicProjects = computed(() => 
    this._projects().filter(project => project.type === 'academic')
  );

  readonly personalProjects = computed(() => 
    this._projects().filter(project => project.type === 'personal')
  );

  readonly professionalProjects = computed(() => 
    this._projects().filter(project => project.type === 'professional')
  );

  readonly featuredProjects = computed(() => 
    this._projects().filter(project => project.featured)
  );

  // Méthodes publiques pour la gestion des filtres
  setActiveFilter(category: string): void {
    this._activeFilter.set(category);
  }

  resetFilter(): void {
    this._activeFilter.set('Tous');
  }

  // Méthodes utilitaires
  getProjectById(id: string): Project | undefined {
    return this._projects().find(project => project.id === id);
  }

  getProjectsByType(type: ProjectType): Project[] {
    return this._projects().filter(project => project.type === type);
  }

  getProjectsByLevel(level: ProjectLevel): Project[] {
    return this._projects().filter(project => project.level === level);
  }

  getProjectsByTechnology(technology: string): Project[] {
    return this._projects().filter(project => 
      project.technologies.some(tech => 
        tech.toLowerCase().includes(technology.toLowerCase())
      )
    );
  }

  getRecentProjects(count = 5): Project[] {
    return this._projects()
      .sort((a, b) => {
        // Tri par période (approximatif basé sur l'année)
        const yearA = parseInt(a.period.split(' ').pop() || '0');
        const yearB = parseInt(b.period.split(' ').pop() || '0');
        return yearB - yearA;
      })
      .slice(0, count);
  }

  getAllTechnologies(): string[] {
    const technologies = this._projects().flatMap(project => project.technologies);
    return [...new Set(technologies)].sort();
  }

  getTechnologyCount(technology: string): number {
    return this._projects().filter(project => 
      project.technologies.some(tech => 
        tech.toLowerCase() === technology.toLowerCase()
      )
    ).length;
  }

  // Méthodes pour les labels et icônes
  getProjectTypeLabel(type: ProjectType): string {
    return PROJECT_TYPE_LABELS[type] || type;
  }

  getProjectLevelLabel(level: ProjectLevel): string {
    return PROJECT_LEVEL_LABELS[level] || level;
  }

  getProjectTypeIcon(type: ProjectType): string {
    return PROJECT_TYPE_ICONS[type] || '🚀';
  }

  getLevelBadgeClasses(level: ProjectLevel): string {
    const classes: Record<ProjectLevel, string> = {
      'beginner': 'bg-green-100 text-green-800',
      'intermediate': 'bg-yellow-100 text-yellow-800',
      'advanced': 'bg-red-100 text-red-800'
    };
    return classes[level] || 'bg-gray-100 text-gray-800';
  }

  getFilterButtonClasses(category: string, activeFilter: string): string {
    const baseClasses = 'px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105';
    
    if (activeFilter === category) {
      return baseClasses + ' bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg';
    }
    
    return baseClasses + ' bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600';
  }

  // Recherche avancée
  searchProjects(filter: ProjectFilter): Project[] {
    let results = this._projects();

    if (filter.type) {
      results = results.filter(p => p.type === filter.type);
    }

    if (filter.level) {
      results = results.filter(p => p.level === filter.level);
    }

    if (filter.featured !== undefined) {
      results = results.filter(p => p.featured === filter.featured);
    }

    if (filter.technologies && filter.technologies.length > 0) {
      results = results.filter(p => 
        filter.technologies?.some(tech => 
          p.technologies.some(pTech => 
            pTech.toLowerCase().includes(tech.toLowerCase())
          )
        )
      );
    }

    if (filter.institution) {
      results = results.filter(p => 
        filter.institution && p.institution.toLowerCase().includes(filter.institution.toLowerCase())
      );
    }

    return results;
  }

  // Données statistiques rapides
  getQuickStats() {
    return QUICK_STATS;
  }
}
