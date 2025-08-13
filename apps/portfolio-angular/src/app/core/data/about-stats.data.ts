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
    label: 'Projets scolaires/professionnels',
    description: 'Projets réalisés avec succès',
    fallbackValue: '10+',
    isDynamic: false, // Pour l'instant statique
  },
  'technologies': {
    label: 'Technologies maîtrisées',
    description: 'Stack technique diversifiée',
    fallbackValue: '15+',
    isDynamic: false, // Pour l'instant statique
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
