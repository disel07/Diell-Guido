export type Language = 'en' | 'it';

export type LocalizedText = Record<Language, string>;

export type ProjectCategory = 'Web' | 'Python' | 'Hardware' | 'School' | 'Experiments';

export interface ExperienceItem {
  id: string;
  role: LocalizedText;
  company: string;
  location: LocalizedText;
  period: LocalizedText;
  description: Record<Language, string[]>;
  type: 'tech' | 'other';
}

export interface Skill {
  name: LocalizedText;
  level: number; // 0-100
  category: 'Code' | 'Tools' | 'Languages' | 'Soft Skills';
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Project {
  name: string;
  url: string;
  description: LocalizedText;
  technologies: string[];
  category: ProjectCategory;
  featured?: boolean;
  bgGradient?: string;
}

export interface LearningItem {
  title: LocalizedText;
  status: LocalizedText;
  description: LocalizedText;
  tags: string[];
}
