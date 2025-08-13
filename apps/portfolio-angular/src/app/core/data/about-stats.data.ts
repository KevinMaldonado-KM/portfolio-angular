import { AboutStatsConfig } from '../models/about-stats.model';

export const ABOUT_STATS_CONFIG: AboutStatsConfig = {
  'experience': {
    label: 'Années d\'expérience',
    description: 'Expérience professionnelle continue',
    fallbackValue: '2+',
    isDynamic: true,
    source: 'experience',
    formatter: (value: number) => value > 0 ? `${value}+` : '1+'
  },
  'projects': {
    label: 'Projets réalisés avec succès',
    description: 'Projets réalisés avec succès',
    fallbackValue: '10+',
    isDynamic: true,
    source: 'projects',
    formatter: (value: number) => {
      // Calcul avec modulo 5 pour avoir des nombres ronds + X
      const roundedDown = Math.floor(value / 5) * 5;
      return roundedDown > 0 ? `${roundedDown}+` : '5+';
    }
  },
  'technologies': {
    label: 'Compétences maîtrisées',
    description: 'Stack technique diversifiée',
    fallbackValue: '15+',
    isDynamic: true,
    source: 'skills',
    formatter: (value: number) => {
      // Calcul avec modulo 5 pour avoir des nombres ronds + X
      const roundedDown = Math.floor(value / 5) * 5;
      return roundedDown > 0 ? `${roundedDown}+` : '5+';
    }
  },
  'certifications': {
    label: 'Certifications obtenues',
    description: 'Formation continue',
    fallbackValue: '1',
    isDynamic: true,
    source: 'certifications',
    formatter: (value: number) => value > 0 ? `${value}` : '0'
  }
};
