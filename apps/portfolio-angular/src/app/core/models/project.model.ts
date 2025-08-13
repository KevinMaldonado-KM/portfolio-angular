export interface Project {
  id: string;
  title: string;
  description: string;
  institution: string;
  period: string;
  technologies: string[];
  type: ProjectType;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  level: ProjectLevel;
  teamSize?: number;
}

export type ProjectType = 'academic' | 'personal' | 'professional';

export type ProjectLevel = 'beginner' | 'intermediate' | 'advanced';

export interface ProjectStats {
  totalProjects: number;
  academicProjects: number;
  personalProjects: number;
  professionalProjects: number;
  featuredProjects: number;
  totalTechnologies: number;
  projectsByLevel: Record<ProjectLevel, number>;
  recentProjects: Project[];
}

export interface ProjectFilter {
  type?: ProjectType;
  level?: ProjectLevel;
  featured?: boolean;
  technologies?: string[];
  institution?: string;
}

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  academic: 'Académique',
  personal: 'Personnel',
  professional: 'Professionnel'
};

export const PROJECT_LEVEL_LABELS: Record<ProjectLevel, string> = {
  beginner: 'Débutant',
  intermediate: 'Intermédiaire',
  advanced: 'Avancé'
};

export const PROJECT_TYPE_ICONS: Record<ProjectType, string> = {
  academic: '🎓',
  personal: '💡',
  professional: '💼'
};
