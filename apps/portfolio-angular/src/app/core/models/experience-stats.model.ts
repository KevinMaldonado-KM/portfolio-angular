export interface ExperienceStats {
  yearsOfExperience: number;
  stages: number;
  apprenticeships: number;
  jobs: number;
  companies: number;
  totalExperiences: number;
}

export interface StatDisplayItem {
  value: number;
  label: string;
  colorClass: string;
  key: string;
  showPlus?: boolean;
}

export interface StatsConfig {
  [key: string]: {
    label: string;
    colorClass: string;
    alwaysVisible?: boolean;
    showPlus?: boolean;
  };
}
