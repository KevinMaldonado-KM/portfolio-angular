export interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  current: boolean;
  achievements: string[];
  type: ExperienceType;
  technologies?: string[];
  links?: ExperienceLink[];
}

export interface ExperienceLink {
  label: string;
  url: string;
  icon?: string;
}

export type ExperienceType = 'apprentissage' | 'stage' | 'job';

export interface ExperienceTypeConfig {
  icon: string;
  colorClass: string;
  label: string;
}
