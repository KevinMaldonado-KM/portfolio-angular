export interface AboutStat {
  value: string;
  label: string;
  description: string;
  isDynamic?: boolean;
  source?: 'experience' | 'projects' | 'technologies' | 'certifications' | 'skills';
}

export interface AboutStatsConfig {
  [key: string]: {
    label: string;
    description: string;
    fallbackValue: string;
    isDynamic: boolean;
    source?: 'experience' | 'projects' | 'technologies' | 'certifications' | 'skills';
    formatter?: (value: number) => string;
  };
}
