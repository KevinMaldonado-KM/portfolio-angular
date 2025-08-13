import { Project } from '../models/project.model';

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'Library Management System',
    description: 'Application complète de gestion de bibliothèque développée en équipe. Interface utilisateur performante avec ASP.NET Razor Pages et API sécurisée avec authentification JWT et gestion des rôles.',
    institution: 'Aix-Marseille Université',
    period: 'nov. 2024 - déc. 2024',
    technologies: ['C#', 'ASP.NET', 'ASP.NET Razor', 'Entity Framework', 'Entity Framework Core', 'PostgreSQL', 'Docker', 'Bootstrap', 'Test unitaire'],
    type: 'academic',
    githubUrl: 'https://etulab.univ-amu.fr/m20004188/gl-projet',
    featured: true,
    level: 'advanced',
    teamSize: 3
  },
  {
    id: '2',
    title: 'Gestion de CVs - API REST et Interface Web',
    description: 'Développement d\'une application web complète pour la gestion des CVs, incluant une API REST sécurisée et une interface utilisateur intuitive avec recherche avancée et authentification.',
    institution: 'Aix-Marseille Université',
    period: 'oct. 2024 - nov. 2024',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Vue.js', 'Bootstrap', 'HSQLDB', 'API REST', 'JUnit', 'Axios'],
    type: 'academic',
    githubUrl: 'https://etulab.univ-amu.fr/projet-dpr-maldonado-benkortbi/projet_jee2',
    featured: true,
    level: 'advanced',
    teamSize: 2
  },
  {
    id: '3',
    title: 'ToDoList Web App - Gestionnaire de tâches moderne',
    description: 'Application web intuitive de gestion de tâches personnelles avec tableau de bord dynamique, statistiques interactives, calendrier et système d\'authentification simulé.',
    institution: 'Aix-Marseille Université',
    period: 'mars 2025 - mars 2025',
    technologies: ['React.js', 'React Native', 'Vue.js', 'Tailwind CSS', 'JavaScript', 'React Context API', 'React Router'],
    type: 'academic',
    githubUrl: 'https://etulab.univ-amu.fr/ihm-web/todolist',
    featured: false,
    level: 'intermediate',
    teamSize: 1
  },
  {
    id: '4',
    title: 'Application Web de Gestion des Sorties pour Club d\'Escalade',
    description: 'Application web pour la gestion des sorties d\'un club d\'escalade, utilisant Java EE et Spring Boot avec persistance des données, gestion des membres et système de réservations.',
    institution: 'Aix-Marseille Université',
    period: 'mars 2024 - avr. 2024',
    technologies: ['Java EE', 'Spring Boot', 'Spring Security', 'Spring Data', 'JPA', 'JSTL', 'Spring MVC'],
    type: 'academic',
    githubUrl: 'https://etulab.univ-amu.fr/m20004188/jee-projet',
    featured: false,
    level: 'intermediate',
    teamSize: 2
  },
  {
    id: '5',
    title: 'Space Invaders 2D - Projet de Génie Logiciel',
    description: 'Recréation du célèbre jeu d\'arcade Space Invaders en 2D, appliquant des concepts de génie logiciel, programmation modulaire et gestion de projet avec méthodologie Scrum.',
    institution: 'Aix-Marseille Université',
    period: 'oct. 2023 - nov. 2023',
    technologies: ['Java', 'Gradle', 'Scrum', 'Trello', 'Test unitaire', 'GitLab', 'Conception', 'Travail d\'équipe'],
    type: 'academic',
    featured: false,
    level: 'intermediate',
    teamSize: 4
  },
  {
    id: '6',
    title: 'Simulateur d\'Ascenseur - Projet de Génie Logiciel',
    description: 'Projet de génie logiciel utilisant des concepts avancés de POO, incluant tests unitaires, développement orienté objet et gestion efficace des requêtes d\'ascenseur.',
    institution: 'Aix-Marseille Université',
    period: 'sept. 2023 - sept. 2023',
    technologies: ['Java', 'JUnit', 'Test unitaire', 'Architecture MVC', 'Gradle', 'GitLab'],
    type: 'academic',
    githubUrl: 'https://etulab.univ-amu.fr/m20004188/elevator-template',
    featured: false,
    level: 'beginner',
    teamSize: 2
  },
  {
    id: '7',
    title: 'Portfolio Angular Moderne',
    description: 'Application portfolio développée avec Angular 20, utilisant les dernières fonctionnalités comme les signals, l\'architecture standalone et Nx pour une performance optimale et une maintenabilité excellente.',
    institution: 'Projet Personnel',
    period: 'août 2025',
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'Signals', 'Nx', 'Standalone Components'],
    type: 'personal',
    githubUrl: 'https://github.com/KevinMaldonado-KM/portfolio-angular',
    demoUrl: 'TODO',
    featured: true,
    level: 'advanced',
    teamSize: 1
  },
  {
    id: '8',
    title: 'Formation Angular Complète - The Complete Guide (2025 Edition)',
    description: 'Parcours pratique complet sur Angular 18+ via formation Udemy de Maximilian Schwarzmüller, couvrant de l\'architecture modulaire aux concepts avancés comme les Guards, Signals et gestion d\'état.',
    institution: 'Udemy - Auto-formation',
    period: 'juil. 2025 - août 2025',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular CLI', 'Reactive Forms', 'HTTP Client', 'Routing', 'Guards'],
    type: 'personal',
    githubUrl: 'https://github.com/KevinMaldonado-KM/angular-certification-projects',
    featured: false,
    level: 'advanced',
    teamSize: 1
  },
    {
    id: '9',
    title: 'Site Vitrine',
    description: 'Réalisation d\'un site vitrine pour un auto-entrepreneur',
    institution: 'InstantSmile Photobooth',
    period: 'janv. 2025',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    type: 'professional',
    demoUrl: 'https://instantsmile-photobooth.fr',
    featured: false,
    level: 'intermediate',
    teamSize: 1
  },
];

// Configuration pour les filtres
export const PROJECT_CATEGORIES = ['Tous', 'Académique', 'Personnel', 'Professionnel', 'Projets phares'] as const;

// Données pour les statistiques rapides
export const QUICK_STATS = {
  totalYearsActive: new Date().getFullYear() - 2023,
  mainTechnologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'JavaScript'],
  collaborativeProjects: PROJECTS_DATA.filter(p => p.teamSize && p.teamSize > 1).length,
  individualProjects: PROJECTS_DATA.filter(p => p.teamSize === 1).length
};
