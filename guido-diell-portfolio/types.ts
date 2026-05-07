export type Language = 'en' | 'it';

export type LocalizedText = Record<Language, string>;

export type LocalizedList = Record<Language, string[]>;

export type ProjectCategory = 'Web' | 'Python' | 'Hardware' | 'School' | 'Experiments';

export type SkillDomain = 'Systems' | 'Programming' | 'Security/Web3' | 'Databases' | 'Hardware' | 'Languages';

export type CertificationTopic = 'it-security' | 'ai' | 'cybersecurity' | 'blockchain' | 'productivity';

export type LearningIconKey = 'react-testing' | 'python-backend' | 'linux' | 'network' | 'hardware' | 'blockchain';

export interface ExperienceItem {
  id: string;
  role: LocalizedText;
  company: string;
  location: LocalizedText;
  period: LocalizedText;
  description: LocalizedList;
  type: 'tech' | 'other';
  featured?: boolean;
  takeaways?: LocalizedList;
  tags?: string[];
}

export interface EducationItem {
  school: string;
  degree: LocalizedText;
  location: LocalizedText;
  period: LocalizedText;
  description: LocalizedText;
  focus: string[];
}

export interface VolunteerItem {
  organization: string;
  role: LocalizedText;
  location: LocalizedText;
  period: LocalizedText;
  cause: LocalizedText;
  description: LocalizedText;
}

export interface Skill {
  name: LocalizedText;
  domain: SkillDomain;
  signal: LocalizedText;
  tags: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  topic: CertificationTopic;
  issued: LocalizedText;
  expires?: LocalizedText;
  credentialId?: string;
  skills: LocalizedText;
  featured?: boolean;
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
  iconKey: LearningIconKey;
}

export interface AwardItem {
  title: LocalizedText;
  status: LocalizedText;
  description: LocalizedText;
  tags: string[];
}
