import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ProjectsService } from '../../core/services/projects.service';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-projects-section',
  imports: [],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSectionComponent {
  
  private readonly projectsService = inject(ProjectsService);

  // Modal state
  readonly selectedProject = signal<Project | null>(null);
  readonly isModalOpen = signal<boolean>(false);

  // Propriétés réactives du service
  readonly activeFilter = this.projectsService.activeFilter;
  readonly categories = this.projectsService.categories;
  readonly filteredProjects = this.projectsService.filteredProjects;

  // Méthodes déléguées au service
  setActiveFilter(category: string): void {
    this.projectsService.setActiveFilter(category);
  }

  getFilterButtonClasses(category: string): string {
    return this.projectsService.getFilterButtonClasses(category, this.activeFilter());
  }

  getProjectTypeIcon(type: 'academic' | 'personal' | 'professional'): string {
    return this.projectsService.getProjectTypeIcon(type);
  }

  getProjectTypeLabel(type: 'academic' | 'personal' | 'professional'): string {
    return this.projectsService.getProjectTypeLabel(type);
  }

  getLevelBadgeClasses(level: 'beginner' | 'intermediate' | 'advanced'): string {
    return this.projectsService.getLevelBadgeClasses(level);
  }

  getLevelLabel(level: 'beginner' | 'intermediate' | 'advanced'): string {
    return this.projectsService.getProjectLevelLabel(level);
  }

  // Modal methods
  openProjectModal(project: Project): void {
    this.selectedProject.set(project);
    this.isModalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal(): void {
    this.isModalOpen.set(false);
    this.selectedProject.set(null);
    document.body.style.overflow = 'auto';
  }

  // Méthodes utilitaires pour l'interface
  openGithub(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  openDemo(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  getInstitutionShortName(institution: string): string {
    if (institution === 'Aix-Marseille Université') {
      return 'AMU';
    }
    if (institution === 'Udemy - Auto-formation') {
      return 'Udemy';
    }
    if (institution === 'Projet Personnel') {
      return 'Personnel';
    }
    return institution;
  }
}
