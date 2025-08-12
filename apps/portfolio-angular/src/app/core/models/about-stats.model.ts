export interface AboutStat {
  value: string;
  label: string;
  description: string;
  isDynamic?: boolean;
  source?: 'experience' | 'projects' | 'technologies' | 'certifications';
}

export interface AboutStatsConfig {
  [key: string]: {
    label: string;
    description: string;
    fallbackValue: string;
    isDynamic: boolean;
    source?: 'experience' | 'projects' | 'technologies' | 'certifications';
    formatter?: (value: number) => string;
  };
}
