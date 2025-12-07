export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: 'tech' | 'other';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Code' | 'Tools' | 'Languages' | 'Soft Skills';
}

export interface Certification {
  name: string;
  issuer: string;
}
