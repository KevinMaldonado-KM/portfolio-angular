import { AboutProfile } from '../models/about.model';

export const ABOUT_PROFILE_DATA: AboutProfile = {
  personalInfo: {
    name: 'Kevin Maldonado',
    title: 'Développeur Full Stack',
    description: 'Ingénieur logiciel full-stack, passionné par l\'optimisation et la création d\'applications performantes, avec une solide expérience en environnements .NET, Java et Angular.',
    avatar: {
      initials: 'KM',
      imageUrl: undefined
    }
  },
  story: {
    title: 'Mon Histoire',
    paragraphs: [
      'Ingénieur logiciel spécialisé en développement full-stack, je conçois des applications performantes et fiables, du back-end au front-end. Mon parcours m\'a permis de travailler sur des projets variés en environnement .NET, Java et Angular, allant d\'applications scientifiques à des systèmes temps réel connectés.',
      'Curieux et adaptable, j\'aime relever des défis techniques complexes, apprendre rapidement de nouvelles technologies et travailler en équipe pour transformer des besoins fonctionnels en solutions concrètes et maintenables.'
    ]
  },
  quickStats: [
    // Les statistiques sont maintenant gérées par AboutStatsService
    // Ce tableau peut être vide ou servir de fallback
  ],
  coreValues: [
    {
      icon: 'fas fa-cogs',
      label: 'Rigueur',
      description: 'Qualité et robustesse du code',
      category: 'technique'
    },
    {
      icon: 'fas fa-rocket',
      label: 'Adaptabilité',
      description: 'Montée en compétences rapide',
      category: 'personnel'
    },
    {
      icon: 'fas fa-handshake',
      label: 'Communication',
      description: 'Travail d\'équipe efficace',
      category: 'social'
    },
    {
      icon: 'fas fa-book',
      label: 'Curiosité',
      description: 'Veille technologique continue',
      category: 'apprentissage'
    }
  ],
  callToAction: {
    title: 'Travaillons Ensemble !',
    description: 'Ouvert aux nouvelles opportunités pour mettre mes compétences au service de projets innovants et dynamiques.',
    buttonText: 'Me Contacter',
    buttonAction: 'contact'
  }
};
