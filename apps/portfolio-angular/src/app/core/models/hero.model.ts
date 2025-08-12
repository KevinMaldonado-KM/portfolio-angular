export interface HeroProfile {
  firstName: string;
  lastName: string;
  title: string;
  description: string;
  avatar: {
    initials: string;
    imageUrl?: string;
  };
  cvFile: {
    fileName: string;
    displayName: string;
    path: string;
  };
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface SkillHighlight {
  name: string;
  category: string;
  level?: number;
}
