import { Experience, ExperienceTypeConfig } from '../models/experience.model';

export const EXPERIENCE_TYPE_CONFIGS: Record<string, ExperienceTypeConfig> = {
  apprentissage: {
    icon: 'fas fa-graduation-cap',
    colorClass: 'from-green-500 to-emerald-500',
    label: 'Apprentissage'
  },
  stage: {
    icon: 'fas fa-user-graduate',
    colorClass: 'from-blue-500 to-indigo-500',
    label: 'Stage'
  },
  job: {
    icon: 'fas fa-briefcase',
    colorClass: 'from-purple-500 to-pink-500',
    label: 'CDI/CDD'
  }
};

export const EXPERIENCES_DATA: Experience[] = [
  {
    company: 'Poolstar',
    position: 'Apprenti Développeur Logiciel',
    location: 'Rousset, France',
    period: '09/2024 – 09/2025',
    current: false,
    type: 'apprentissage',
    technologies: ['C#', '.NET Framework', '.NET MVC', 'Blazor', 'LINQ', 'JavaScript', 'jQuery', 'Ajax', 'Swagger', 'API REST', 'IoT', 'Pulsar', 'OpenAI', 'n8n', 'PWA', 'Bootstrap', 'JavaScript'],
    achievements: [
      'Déploiement d\'une architecture temps réel IoT (Pulsar) connectée à l\'ERP pour le suivi et la maintenance des équipements vendus (pompes à chaleur, électrolyseurs connectés, …)',
      'Automatisation du traitement des tickets SAV multilingues via OpenAI + n8n, réduisant le temps de résolution des tickets de 40 %',
      'Développement d\'un CRM mobile intégré à une PWA logistique, accélérant les cycles de vente terrain',
      'Refactorisation des modules ERP critiques (catalogue, inventaire) pour une meilleure ergonomie et stabilité'
    ]
  },
  {
    company: 'Poolstar',
    position: 'Stagiaire Développeur Logiciel',
    location: 'Rousset, France',
    period: '04/2024 – 08/2024',
    current: false,
    type: 'stage',
    technologies: ['C#', '.NET Framework', '.NET MVC', 'Blazor', 'LINQ', 'JavaScript', 'jQuery', 'Ajax', 'Swagger', 'API REST', 'QZTray', 'Windows Server', 'PowerShell'],
    achievements: [
      'Conception d\'une API interne sécurisée, réduisant les redondances de code',
      'Intégration d\'un système d\'impression automatisé, améliorant le processus logistique et réduisant les erreurs',
      'Extension des fonctionnalités ERP (SAV, exports) pour optimiser le support client'
    ],
    links: [
      { label: 'Rapport de stage', url: '/file/2024_kevin_maldonado_rapport_de_stage_entreprise_POOLSTAR.pdf', icon: 'fas fa-file-pdf' }
    ]
  },
  {
    company: 'INSERM TAGC',
    position: 'Développeur Web (Stage Licence)',
    location: 'Marseille, France',
    period: '04/2023 – 07/2023',
    current: false,
    type: 'stage',
    technologies: ['Python', 'Django', 'Bootstrap', 'CSS', 'JavaScript', 'Docker', 'Linux', 'Bash', 'Shell', 'SLURM', 'API REST', 'Bioinformatique'],
    achievements: [
      'Déploiement d\'une application scientifique (mimicINTWeb) pour chercheurs non-tech, augmentant son adoption de 60 %',
      'Intégration des workflows bio-info (Docker, SLURM) pour fiabiliser les analyses complexes',
      'Mise en place d\'une interface de suivi en temps réel et une API REST pour automatiser les traitements'
    ],
    links: [
      { label: 'Application web', url: 'https://mimicintweb.tagc.univ-amu.fr/', icon: 'fas fa-globe' },
      { label: 'Article scientifique', url: 'https://f1000research.com/articles/14-128/v2?utm_medium=email&utm_source=milestone_view', icon: 'fas fa-file-alt' },
      { label: 'Rapport de stage', url: '/file/2023_kevin_maldonado_rapport_de_stage_entreprise_INSERM.pdf', icon: 'fas fa-file-pdf' }
    ]
  },
  {
    company: 'INSERM TAGC',
    position: 'Développeur Web (Stage DUT)',
    location: 'Marseille, France',
    period: '04/2022 – 06/2022',
    current: false,
    type: 'stage',
    technologies: ['Python', 'Django', 'Bootstrap', 'CSS', 'JavaScript', 'Docker', 'SnakeMake', 'Bioinformatique'],
    achievements: [
      'Création d\'un formulaire sécurisé et un script Python de supervision pour un pipeline scientifique',
      'Conteneurisation de l\'environnement d\'analyse avec Docker Compose, réduisant les temps de déploiement de 80 %',
      'Amélioration de la robustesse et la reproductibilité du pipeline bioinformatique'
    ],
    links: [
      { label: 'Rapport de stage', url: '/file/2022_kevin_maldonado_rapport_de_stage_entreprise_INSERM.pdf', icon: 'fas fa-file-pdf' }
    ]
  }
];
