import { SkillCategory } from '../models/skills.model';

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend & UI',
    icon: 'fas fa-paint-brush',
    description: 'Technologies de développement d\'interfaces utilisateur modernes',
    color: 'from-blue-500 to-purple-500',
    skills: [
      { name: 'Angular', level: 92, description: 'Framework principal avec maîtrise avancée' },
      { name: 'TypeScript', level: 90, description: 'Langage de développement moderne et typé' },
      { name: 'JavaScript', level: 88, description: 'Base solide en JavaScript vanilla et ES6+' },
      { name: 'RxJS', level: 85, description: 'Programmation réactive et gestion d\'état' },
      { name: 'Bootstrap', level: 82, description: 'Framework CSS responsive' },
      { name: 'Tailwind CSS', level: 78, description: 'Framework CSS utility-first' },
      { name: 'PWA', level: 76, description: 'Applications web progressives' },
      { name: 'React.js / Native', level: 70, description: 'Développement React et mobile' },
      { name: 'Vue.js', level: 65, description: 'Framework JavaScript progressif' }
    ]
  },
  {
    id: 'backend',
    name: 'Back-end & API',
    icon: 'fas fa-server',
    description: 'Développement côté serveur et architecture API',
    color: 'from-green-500 to-teal-500',
    skills: [
      { name: 'C# / .NET', level: 90, description: 'ASP.NET Core, MVC, Razor' },
      { name: 'REST APIs', level: 88, description: 'Conception et développement d\'APIs RESTful' },
      { name: 'Entity Framework', level: 85, description: 'ORM pour .NET et gestion de données' },
      { name: 'Java / Spring', level: 80, description: 'Spring Boot, MVC, Security' },
      { name: 'Node.js', level: 72, description: 'Développement backend JavaScript' },
      { name: 'Django', level: 68, description: 'Framework web Python' },
      { name: 'JPA', level: 66, description: 'Persistance Java et mapping objet-relationnel' }
    ]
  },
  {
    id: 'database',
    name: 'Bases de données',
    icon: 'fas fa-database',
    description: 'Gestion et modélisation de données',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'PostgreSQL', level: 85, description: 'Base de données relationnelle avancée' },
      { name: 'Microsoft SQL Server', level: 82, description: 'SGBD Microsoft avec T-SQL' },
      { name: 'MySQL', level: 72, description: 'Base de données relationnelle populaire' },
      { name: 'HSQLDB', level: 60, description: 'Base de données embarquée Java' }
    ]
  },
  {
    id: 'devops',
    name: 'DevOps & Outils',
    icon: 'fas fa-cloud',
    description: 'Outils de développement et déploiement',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Git / GitHub / GitLab', level: 88, description: 'Contrôle de version et collaboration' },
      { name: 'Docker / Docker Compose', level: 86, description: 'Conteneurisation et orchestration' },
      { name: 'CI/CD', level: 78, description: 'Pipelines d\'intégration continue' },
      { name: 'Jira / Trello', level: 74, description: 'Gestion de projet agile' },
      { name: 'VS Code / Visual Studio', level: 72, description: 'Environnements de développement' }
    ]
  },
  {
    id: 'architecture',
    name: 'Architecture & Qualité',
    icon: 'fas fa-sitemap',
    description: 'Conception logicielle et bonnes pratiques',
    color: 'from-indigo-500 to-blue-500',
    skills: [
      { name: 'Architecture MVC', level: 86, description: 'Modèle-Vue-Contrôleur' },
      { name: 'UML', level: 80, description: 'Modélisation et conception' },
      { name: 'Tests unitaires', level: 74, description: 'JUnit, xUnit, Jest' },
      { name: 'Conception logicielle', level: 72, description: 'Patterns et principes SOLID' }
    ]
  },
  {
    id: 'other',
    name: 'Autres technologies',
    icon: 'fas fa-toolbox',
    description: 'Technologies spécialisées et émergentes',
    color: 'from-gray-500 to-slate-500',
    skills: [
      { name: 'Apache Pulsar', level: 78, description: 'Streaming IoT temps réel' },
      { name: 'WebSocket', level: 74, description: 'Communication temps réel' },
      { name: 'API OpenAI / n8n', level: 72, description: 'Intelligence artificielle et automatisation' },
      { name: 'Scripts Shell', level: 68, description: 'Automatisation système' },
      { name: 'SLURM / Snakemake', level: 64, description: 'Calcul haute performance' }
    ]
  }
];
