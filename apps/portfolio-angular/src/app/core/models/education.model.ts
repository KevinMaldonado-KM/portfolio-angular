export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  description?: string;
  type: EducationType;
  level: EducationLevel;
  mention?: string;
}

export interface Certification {
  name: string;
  provider: string;
  date: string;
  description?: string;
  certificateUrl?: string;
  skills?: string[];
  validUntil?: string;
}

export type EducationType = 'university' | 'secondary';
export type EducationLevel = 'master' | 'bachelor' | 'dut' | 'baccalaureate' | 'certification';

export interface EducationTypeConfig {
  icon: string;
  colorClass: string;
  label: string;
}

export interface CertificationStats {
  totalCertifications: number;
  activeCertifications: number;
  providers: number;
}
