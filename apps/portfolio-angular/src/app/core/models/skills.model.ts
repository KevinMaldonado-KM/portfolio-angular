export interface Skill {
  name: string;
  level: number;
  description?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description?: string;
  color?: string;
  skills: Skill[];
}

export interface SkillStats {
  totalSkills: number;
  categoriesCount: number;
  averageLevel: number;
  topSkills: Skill[];
}
