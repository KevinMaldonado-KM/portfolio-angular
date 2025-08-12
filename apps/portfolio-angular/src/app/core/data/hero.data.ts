import { HeroProfile, SocialLink, SkillHighlight } from '../models/hero.model';

export const HERO_PROFILE_DATA: HeroProfile = {
  firstName: 'Kevin',
  lastName: 'Maldonado',
  title: 'Développeur Full Stack',
  description: 'Ingénieur logiciel rigoureux et adaptable, spécialisé en développement full-stack. Passionné par l\'innovation technologique et l\'optimisation des systèmes, je conçois des applications performantes et fiables, du prototypage à la mise en production, dans des environnements collaboratifs et exigeants.',
  avatar: {
    initials: 'KM',
    imageUrl: undefined // Peut être ajouté plus tard
  },
  cvFile: {
    fileName: 'CV_Kevin_Maldonado_2025.pdf',
    displayName: 'CV Kevin Maldonado 2025',
    path: '/file/CV_Kevin_Maldonado_2025.pdf'
  }
};

export const SOCIAL_LINKS_DATA: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/KevinMaldonado-KM',
    icon: 'fab fa-github',
    label: 'Voir mon profil GitHub'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/kevin-maldonado-km',
    icon: 'fab fa-linkedin',
    label: 'Me contacter sur LinkedIn'
  },
  {
    name: 'Email',
    url: 'mailto:kevin.maldonado.contact@gmail.com',
    icon: 'fas fa-envelope',
    label: 'M\'envoyer un email'
  }
];

export const HIGHLIGHTED_SKILLS_DATA: SkillHighlight[] = [
  { name: 'C# / ASP.NET Core', category: 'Backend' },
  { name: 'Java / Spring Boot', category: 'Backend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'Docker & CI/CD', category: 'DevOps' },
  { name: 'HTML/CSS', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' }
];
