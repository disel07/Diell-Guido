import { Certification, EducationItem, ExperienceItem, LearningItem, Project, ProjectCategory, Skill } from './types';

export const SITE_CONFIG = {
  name: 'Guido Diell',
  status: 'ONLINE',
  contact: {
    email: 'diellguido007@gmail.com',
    phone: '',
    address: "Santa Sofia d'Epiro, Calabria, Italia",
  },
  socials: {
    github: 'https://github.com/disel07',
    linkedin: 'https://www.linkedin.com/in/diell-guido/',
    email: 'diellguido007@gmail.com',
  },
};

export const PROJECT_CATEGORIES: ProjectCategory[] = ['Web', 'Python', 'Hardware', 'School', 'Experiments'];

export const PROJECTS: Project[] = [
  {
    name: 'SmartCompound',
    url: 'https://disel07.github.io/Diell-Guido/SmartCompound/',
    description: {
      en: 'Compound-interest simulator that turns small daily savings into long-term financial projections.',
      it: 'Simulatore di interesse composto che trasforma piccoli risparmi giornalieri in proiezioni finanziarie a lungo termine.',
    },
    technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
    category: 'Web',
    featured: true,
  },
  {
    name: 'CareerPath-Proiezioni',
    url: 'https://disel07.github.io/Diell-Guido/CareerPath-Proiezioni/',
    description: {
      en: 'Life-planning simulator for comparing parallel career paths and future choices.',
      it: 'Simulatore di pianificazione personale per confrontare percorsi di carriera e scelte future.',
    },
    technologies: ['React', 'TypeScript', 'Vite'],
    category: 'Web',
    featured: true,
  },
  {
    name: 'Organizer-Foto-Pro',
    url: 'https://github.com/disel07/Organizer-Foto-Pro',
    description: {
      en: 'Python CLI utility designed to organize large photo and video collections safely and quickly.',
      it: 'Utility CLI in Python pensata per organizzare raccolte di foto e video in modo sicuro e rapido.',
    },
    technologies: ['Python', 'CLI'],
    category: 'Python',
  },
  {
    name: 'Torneo FIFA 2025',
    url: 'https://disel07.github.io/torneo-fifa-2025/',
    description: {
      en: 'Tournament dashboard for managing leaderboard, fixtures and results for a FIFA 2025 competition.',
      it: 'Dashboard torneo per gestire classifica, calendario e risultati di una competizione FIFA 2025.',
    },
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python'],
    category: 'School',
  },
  {
    name: 'Portfolio Diell-Guido',
    url: '#',
    description: {
      en: 'Personal portfolio built to present projects, learning progress and technical experience.',
      it: 'Portfolio personale creato per presentare progetti, percorso di apprendimento ed esperienza tecnica.',
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    category: 'Experiments',
    featured: true,
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    role: {
      en: 'Assistant Pizza Chef',
      it: 'Aiuto pizzaiolo',
    },
    company: 'I Compari',
    location: {
      en: 'Cellara, CS, Italy',
      it: 'Cellara, CS, Italia',
    },
    period: {
      en: 'Summer 2025',
      it: 'Estate 2025',
    },
    description: {
      en: [
        'Worked in a fast-paced kitchen environment with strong attention to timing and quality.',
        'Prepared ingredients and supported dough handling during peak service hours.',
        'Maintained hygiene standards and helped keep equipment ready for daily operations.',
        'Built reliability, teamwork and pressure-management skills in a practical workplace.',
      ],
      it: [
        'Ho lavorato in cucina in un contesto dinamico, con attenzione a tempi e qualita.',
        'Ho preparato ingredienti e supportato la gestione degli impasti durante i momenti di maggiore lavoro.',
        'Ho mantenuto standard di igiene e contribuito alla cura delle attrezzature quotidiane.',
        'Ho sviluppato affidabilita, collaborazione e gestione della pressione in un ambiente reale.',
      ],
    },
    type: 'other',
  },
  {
    id: '2',
    role: {
      en: 'IT Intern',
      it: 'Stagista informatica',
    },
    company: 'Code Monsters',
    location: {
      en: 'A Coruna, Spain',
      it: 'La Coruna, Spagna',
    },
    period: {
      en: 'Oct 2024 - Nov 2024',
      it: 'Ott 2024 - Nov 2024',
    },
    description: {
      en: [
        'Completed an Erasmus+ IT internship focused on computer maintenance, Linux and technical support.',
        'Configured devices and supported small lab infrastructure tasks in an on-site environment.',
        'Practiced troubleshooting across operating systems, hardware and network-related issues.',
        'Strengthened practical communication, documentation and problem-solving skills.',
      ],
      it: [
        'Ho svolto uno stage Erasmus+ IT orientato a manutenzione computer, Linux e supporto tecnico.',
        'Ho configurato dispositivi e supportato attivita di infrastruttura in laboratorio in presenza.',
        'Ho fatto troubleshooting su sistemi operativi, hardware e problemi legati alla rete.',
        'Ho rafforzato comunicazione pratica, documentazione e capacita di problem solving.',
      ],
    },
    type: 'tech',
  },
  {
    id: '3',
    role: {
      en: 'Student Volunteer',
      it: 'Volontario studente',
    },
    company: 'ADCC (Associacao para a Divulgacao Cultural e Cientifica)',
    location: {
      en: 'Lisbon, Portugal',
      it: 'Lisbona, Portogallo',
    },
    period: {
      en: 'July 2024',
      it: 'Luglio 2024',
    },
    description: {
      en: [
        'Completed a one-month school-work alternation experience in science and technology.',
        'Explored IT support, basic web development and multimedia production workflows.',
        'Practiced HTML, JavaScript and content editing in collaborative activities.',
        'Improved communication and adaptability in an international environment.',
      ],
      it: [
        'Ho svolto un mese di alternanza scuola-lavoro in ambito scienza e tecnologia.',
        'Ho esplorato supporto IT, sviluppo web di base e flussi di produzione multimediale.',
        'Ho usato HTML, JavaScript e strumenti di editing in attivita collaborative.',
        'Ho migliorato comunicazione e adattabilita in un ambiente internazionale.',
      ],
    },
    type: 'tech',
  },
  {
    id: '4',
    role: {
      en: 'Town Band Member',
      it: 'Membro banda musicale',
    },
    company: 'Banda Musicale V. Bellini',
    location: {
      en: 'Italy',
      it: 'Italia',
    },
    period: {
      en: '2016 - 2022',
      it: '2016 - 2022',
    },
    description: {
      en: [
        'Developed discipline and consistency through regular rehearsals and public performances.',
        'Collaborated with a large group where timing, listening and coordination were essential.',
        'Supported local cultural events and learned the value of long-term commitment.',
      ],
      it: [
        'Ho sviluppato disciplina e costanza tramite prove regolari ed esibizioni pubbliche.',
        'Ho collaborato in un gruppo numeroso dove tempo, ascolto e coordinazione erano essenziali.',
        'Ho partecipato ad eventi culturali locali e imparato il valore dell impegno nel tempo.',
      ],
    },
    type: 'other',
  },
];

export const SKILLS: Skill[] = [
  { name: { en: 'Python', it: 'Python' }, level: 70, category: 'Code' },
  { name: { en: 'JavaScript', it: 'JavaScript' }, level: 60, category: 'Code' },
  { name: { en: 'SQL', it: 'SQL' }, level: 45, category: 'Code' },
  { name: { en: 'Bash', it: 'Bash' }, level: 55, category: 'Code' },
  { name: { en: 'C#', it: 'C#' }, level: 65, category: 'Code' },
  { name: { en: 'Linux', it: 'Linux' }, level: 70, category: 'Tools' },
  { name: { en: 'Docker', it: 'Docker' }, level: 40, category: 'Tools' },
  { name: { en: 'Network Architecture', it: 'Architettura di rete' }, level: 55, category: 'Tools' },
  { name: { en: 'Cybersecurity', it: 'Cybersecurity' }, level: 55, category: 'Tools' },
  { name: { en: 'Blockchain Basics', it: 'Basi blockchain' }, level: 45, category: 'Tools' },
  { name: { en: 'PC Maintenance', it: 'Manutenzione PC' }, level: 85, category: 'Tools' },
  { name: { en: 'Italian (Native)', it: 'Italiano (madrelingua)' }, level: 100, category: 'Languages' },
  { name: { en: 'English (B1)', it: 'Inglese (B1)' }, level: 30, category: 'Languages' },
  { name: { en: 'Spanish (A2)', it: 'Spagnolo (A2)' }, level: 20, category: 'Languages' },
];

export const CURRENTLY_LEARNING: LearningItem[] = [
  {
    title: { en: 'Cybersecurity foundations', it: 'Fondamenti di cybersecurity' },
    status: { en: 'Active focus', it: 'Focus attivo' },
    description: {
      en: 'Strengthening network security, basic threat awareness and defensive troubleshooting.',
      it: 'Rafforzo sicurezza delle reti, consapevolezza delle minacce e troubleshooting difensivo.',
    },
    tags: ['Cisco', 'Security', 'Networks'],
  },
  {
    title: { en: 'Blockchain and Web3', it: 'Blockchain e Web3' },
    status: { en: 'Building foundations', it: 'Basi in costruzione' },
    description: {
      en: 'Studying blockchain basics, Web3 concepts and the security mindset behind smart contracts.',
      it: 'Studio basi blockchain, concetti Web3 e mentalita di sicurezza dietro gli smart contract.',
    },
    tags: ['Cyfrin', 'Web3', 'Smart Contracts'],
  },
  {
    title: { en: 'Linux, Bash and Docker', it: 'Linux, Bash e Docker' },
    status: { en: 'Hands-on practice', it: 'Pratica diretta' },
    description: {
      en: 'Practicing terminal workflows, scripts, containers and repeatable local environments.',
      it: 'Mi esercito con terminale, script, container e ambienti locali ripetibili.',
    },
    tags: ['Linux', 'Bash', 'Docker'],
  },
  {
    title: { en: 'SQL and data basics', it: 'SQL e basi dati' },
    status: { en: 'In progress', it: 'In corso' },
    description: {
      en: 'Improving query fundamentals, data modeling basics and practical database usage.',
      it: 'Miglioro query, basi di modellazione dati e uso pratico dei database.',
    },
    tags: ['SQL', 'Data', 'Backend'],
  },
  {
    title: { en: 'Python automation', it: 'Automazione Python' },
    status: { en: 'Project-based', it: 'Basato su progetti' },
    description: {
      en: 'Building small utilities that solve real file, system and workflow problems.',
      it: 'Creo piccole utility per risolvere problemi reali su file, sistema e workflow.',
    },
    tags: ['Python', 'CLI', 'Automation'],
  },
  {
    title: { en: 'Technical English', it: 'Inglese tecnico' },
    status: { en: 'Portfolio rollout', it: 'Applicato al portfolio' },
    description: {
      en: 'Improving how I explain projects, internships and technical decisions in English.',
      it: 'Miglioro il modo in cui spiego progetti, stage e decisioni tecniche in inglese.',
    },
    tags: ['B1', 'Communication', 'Remote'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    school: 'ITI A. Monaco - Informatica',
    degree: {
      en: 'Technical and Professional Institute Diploma, Informatics',
      it: 'Diploma Istituto Tecnico e Professionale, Informatica',
    },
    location: {
      en: 'Cosenza, Italy',
      it: 'Cosenza, Italia',
    },
    period: {
      en: 'Jan 2021 - Jun 2026',
      it: 'gen 2021 - giu 2026',
    },
    focus: ['C#', 'Computer Networks', 'Python', 'Linux', 'SQL', 'Cybersecurity'],
    description: {
      en: 'School path focused on informatics, computer networks and practical technical skills, with a growing focus on cybersecurity, Linux and software tools.',
      it: 'Percorso scolastico orientato a informatica, reti e competenze tecniche pratiche, con focus crescente su cybersecurity, Linux e strumenti software.',
    },
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Introduction to Modern AI',
    issuer: 'Cisco',
    issued: { en: 'May 2026', it: 'mag 2026' },
    skills: { en: 'Artificial Intelligence', it: 'Intelligenza artificiale' },
  },
  {
    name: 'Certification: Blockchain Basics',
    issuer: 'Cyfrin Updraft',
    issued: { en: 'Apr 2026', it: 'apr 2026' },
    expires: { en: 'Apr 2027', it: 'apr 2027' },
    credentialId: 'BBCC-EFGJTLGD9GTG2',
    skills: { en: 'Blockchain, Web3, smart contracts', it: 'Blockchain, Web3, smart contract' },
  },
  {
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    issued: { en: 'Apr 2026', it: 'apr 2026' },
    skills: { en: 'Cybersecurity, network security', it: 'Cybersecurity, sicurezza delle reti' },
  },
  {
    name: 'Computer Essentials and Spreadsheets',
    issuer: 'AICA',
    issued: { en: 'Apr 2025', it: 'apr 2025' },
    skills: { en: 'ECDL, Microsoft Excel, computer essentials', it: 'ECDL, Microsoft Excel, competenze informatiche di base' },
  },
  {
    name: 'IT Security',
    issuer: 'AICA',
    issued: { en: 'Jun 2025', it: 'giu 2025' },
    skills: { en: 'Cybersecurity, network architecture, IT security', it: 'Sicurezza informatica, architettura di rete, IT security' },
  },
];
