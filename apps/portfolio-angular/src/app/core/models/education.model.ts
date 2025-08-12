export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  description?: string;
  type: EducationType;
  level: EducationLevel;
  mention?: string;
}

export type EducationType = 'university' | 'secondary';
export type EducationLevel = 'master' | 'bachelor' | 'dut' | 'baccalaureate' | 'certification';

export interface EducationTypeConfig {
  icon: string;
  colorClass: string;
  label: string;
}
