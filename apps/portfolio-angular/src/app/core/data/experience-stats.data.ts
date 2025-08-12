import { StatsConfig } from '../models/experience-stats.model';

export const STATS_CONFIG: StatsConfig = {
  'yearsOfExperience': {
    label: 'Années d\'expérience',
    colorClass: 'from-green-600 to-emerald-600',
    alwaysVisible: true,
    showPlus: true
  },
  'stages': {
    label: 'Stages réalisés',
    colorClass: 'from-blue-600 to-indigo-600',
    alwaysVisible: false
  },
  'apprenticeships': {
    label: 'Alternances réalisées',
    colorClass: 'from-purple-600 to-pink-600',
    alwaysVisible: false
  },
  'jobs': {
    label: 'Jobs réalisés',
    colorClass: 'from-violet-600 to-purple-600',
    alwaysVisible: false
  },
  'companies': {
    label: 'Entreprises',
    colorClass: 'from-orange-600 to-red-600',
    alwaysVisible: false
  }
};
