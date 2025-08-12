import { Education, EducationType, EducationTypeConfig } from '../models/education.model';

export const EDUCATION_DATA: Education[] = [
  {
    institution: 'Aix-Marseille Université',
    degree: 'Master Ingénierie du Développement Logiciel',
    location: 'Marseille, France',
    period: '2023 – 2025',
    description: 'Formation spécialisée en conception logicielle, architectures distribuées, et intégration de solutions cloud.',
    type: 'university',
    level: 'master'
  },
  {
    institution: 'Aix-Marseille Université',
    degree: 'Licence Informatique',
    location: 'Aix-en-Provence, France',
    period: '2022 – 2023',
    description: 'Cursus renforcé en programmation orientée objet, algorithmique avancée et structures de données.',
    type: 'university',
    level: 'bachelor'
  },
  {
    institution: 'IUT d\'Aix-Marseille',
    degree: 'DUT Informatique',
    location: 'Aix-en-Provence, France',
    period: '2020 – 2022',
    description: 'Formation professionnalisante axée sur le développement web, base de données et réseaux.',
    type: 'university',
    level: 'dut'
  },
  {
    institution: 'Lycée Thiers',
    degree: 'Baccalauréat Scientifique – Sciences de l\'Ingénieur',
    location: 'Marseille, France',
    period: '2020',
    mention: 'Mention Bien',
    description: 'Participation à des projets technologiques de fin d\'année en électronique embarquée.',
    type: 'secondary',
    level: 'baccalaureate'
  }
];

export const EDUCATION_TYPE_CONFIGS: Record<EducationType, EducationTypeConfig> = {
  'university': {
    icon: 'fas fa-university',
    colorClass: 'from-blue-600 to-indigo-600',
    label: 'Université'
  },
  'secondary': {
    icon: 'fas fa-graduation-cap',
    colorClass: 'from-purple-600 to-pink-600',
    label: 'Enseignement Secondaire'
  }
};
