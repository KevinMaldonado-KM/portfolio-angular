import { AboutStat } from './about-stats.model';

export interface AboutProfile {
  personalInfo: PersonalInfo;
  story: Story;
  quickStats: AboutStat[];
  coreValues: CoreValue[];
  callToAction: CallToAction;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  avatar: {
    initials: string;
    imageUrl?: string;
  };
}

export interface Story {
  title: string;
  paragraphs: string[];
}

export interface CoreValue {
  icon: string;
  label: string;
  description: string;
  category?: string;
}

export interface CallToAction {
  title: string;
  description: string;
  buttonText: string;
  buttonAction: string;
}
