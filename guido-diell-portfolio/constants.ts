import { ExperienceItem, Skill, Certification } from './types';

// ==========================================
// CONFIGURATION - EDIT THIS SECTION FREQUENTLY
// ==========================================
export const SITE_CONFIG = {
  name: "Guido Diell",
  role: "Computer Science Student",
  status: "ONLINE",
  heroSubtitle: "Full-Stack Enthusiast & Hardware Tinkerer.",
  heroDescription: "Building the digital future, one script at a time.",
  aboutMe: "I am a curious and friendly person. I like to learn new things and try new experiences. I can work in new situations and I am not afraid of challenges. I want to grow, work hard and do my best in every job.",
  contact: {
    email: "diellguido007@gmail.com",
    phone: "",
    address: "CS, Italia"
  },
  socials: {
    github: "https://github.com/disel07",
    linkedin: "https://www.linkedin.com/in/diell-guido/",
    email: "diellguido007@gmail.com"
  }
};

export const PROJECTS = [
  { name: 'SmartCompound', url: 'https://disel07.github.io/SmartCompound/', description: 'Trasforma il tuo caffè in un Impero' },
  { name: 'CareerPath-Proiezioni', url: 'https://disel07.github.io/CareerPath-Proiezioni/', description: 'Life Simulator Progetta due vite parallele.' },
  { name: 'Portfolio Diell-Guido', url: '#', description: 'Il mio portfolio personale' },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    role: 'Assistant Pizza Chef',
    company: 'I Compari',
    location: 'Cellara, CS, Italy',
    period: 'Summer 2025',
    description: [
      'Managed kitchen operations during high-pressure summer season.',
      'Assisted in preparation of ingredients and dough management.',
      'Maintained strict hygiene standards and equipment maintenance.',
      'Collaborated closely with the head chef to ensure efficient service.'
    ],
    type: 'other'
  },
  {
    id: '2',
    role: 'Erasmus Internship',
    company: 'CodeMonster',
    location: 'La Coruña, Spain',
    period: 'Oct 2024 - Nov 2024',
    description: [
      'Configured and managed Raspberry Pi clusters.',
      'Installed and maintained private cloud systems.',
      'Developed automated scripts for multi-device software updates via USB.',
      'Performed OS installation and maintenance on legacy hardware.'
    ],
    type: 'tech'
  },
  {
    id: '3',
    role: 'School Internship',
    company: 'RATO-ADCC',
    location: 'Lisbon, Portugal',
    period: 'July 2024',
    description: [
      'Hands-on experience in IT and hardware sectors.',
      'Introduction to 3D printing applications.',
      'Web development utilizing HTML and JavaScript.',
      'Multimedia content editing and podcast production.'
    ],
    type: 'tech'
  },
  {
    id: '4',
    role: 'Town Band Member',
    company: 'Banda Musicale V. Bellini',
    location: 'Italy',
    period: '2016 - 2022',
    description: [
      'Developed strong discipline and teamwork skills.',
      'Contributed to organizing local cultural events.',
      'Collaborated with a large group to achieve synchronized performance.'
    ],
    type: 'other'
  }
];

export const SKILLS: Skill[] = [
  { name: 'C#', level: 65, category: 'Code' },
  { name: 'HTML5 / CSS', level: 75, category: 'Code' },
  { name: 'JavaScript', level: 60, category: 'Code' },
  { name: 'PC Maintenance', level: 85, category: 'Tools' },
  { name: 'Raspberry Pi', level: 60, category: 'Tools' },
  { name: 'Social Media Mgmt', level: 70, category: 'Soft Skills' },
  { name: 'Italian (Native)', level: 110, category: 'Languages' },
  { name: 'English (B1)', level: 30, category: 'Languages' },
  { name: 'Spanish (A2)', level: 20, category: 'Languages' },
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'ICDL/ECDL Full Standard', issuer: 'AICA' },
  { name: 'Computer Essentials', issuer: 'ECDL' },
  { name: 'IT Security', issuer: 'ECDL' },
  { name: 'Spreadsheets', issuer: 'ECDL' },
];