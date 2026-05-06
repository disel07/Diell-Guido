import { Certification, ExperienceItem, LearningItem, Project, ProjectCategory, Skill } from './types';

export const SITE_CONFIG = {
  name: 'Guido Diell',
  status: 'ONLINE',
  contact: {
    email: 'diellguido007@gmail.com',
    phone: '',
    address: 'CS, Italia',
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
      en: 'Erasmus Internship',
      it: 'Tirocinio Erasmus',
    },
    company: 'CodeMonster',
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
        'Configured Raspberry Pi devices and supported small lab infrastructure tasks.',
        'Installed and maintained private-cloud systems in a supervised internship setting.',
        'Created scripts to automate repeated setup and update workflows.',
        'Practiced troubleshooting across operating systems, hardware and legacy machines.',
      ],
      it: [
        'Ho configurato dispositivi Raspberry Pi e supportato attivita di infrastruttura in laboratorio.',
        'Ho installato e mantenuto sistemi cloud privati in un contesto di tirocinio supervisionato.',
        'Ho creato script per automatizzare procedure ripetitive di setup e aggiornamento.',
        'Ho fatto troubleshooting su sistemi operativi, hardware e macchine datate.',
      ],
    },
    type: 'tech',
  },
  {
    id: '3',
    role: {
      en: 'School Internship',
      it: 'Tirocinio scolastico',
    },
    company: 'RATO-ADCC',
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
        'Explored IT support, basic web development and multimedia production workflows.',
        'Practiced HTML, JavaScript and content editing in collaborative activities.',
        'Gained introductory exposure to 3D printing and digital fabrication tools.',
        'Improved communication and adaptability in an international work environment.',
      ],
      it: [
        'Ho esplorato supporto IT, sviluppo web di base e flussi di produzione multimediale.',
        'Ho usato HTML, JavaScript e strumenti di editing in attivita collaborative.',
        'Ho avuto un primo contatto con stampa 3D e strumenti di fabbricazione digitale.',
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
  { name: { en: 'C#', it: 'C#' }, level: 65, category: 'Code' },
  { name: { en: 'HTML5 / CSS', it: 'HTML5 / CSS' }, level: 75, category: 'Code' },
  { name: { en: 'JavaScript', it: 'JavaScript' }, level: 60, category: 'Code' },
  { name: { en: 'PC Maintenance', it: 'Manutenzione PC' }, level: 85, category: 'Tools' },
  { name: { en: 'Raspberry Pi', it: 'Raspberry Pi' }, level: 60, category: 'Tools' },
  { name: { en: 'Social Media Mgmt', it: 'Gestione social media' }, level: 70, category: 'Soft Skills' },
  { name: { en: 'Italian (Native)', it: 'Italiano (madrelingua)' }, level: 100, category: 'Languages' },
  { name: { en: 'English (B1)', it: 'Inglese (B1)' }, level: 30, category: 'Languages' },
  { name: { en: 'Spanish (A2)', it: 'Spagnolo (A2)' }, level: 20, category: 'Languages' },
];

export const CURRENTLY_LEARNING: LearningItem[] = [
  {
    title: { en: 'TypeScript + React', it: 'TypeScript + React' },
    status: { en: 'Active focus', it: 'Focus attivo' },
    description: {
      en: 'Writing safer components, improving state structure and learning practical testing patterns.',
      it: 'Scrivo componenti piu sicuri, miglioro la struttura dello stato e studio pattern di test pratici.',
    },
    tags: ['TypeScript', 'React', 'Testing'],
  },
  {
    title: { en: 'Backend basics', it: 'Fondamenti backend' },
    status: { en: 'Building foundations', it: 'Basi in costruzione' },
    description: {
      en: 'Studying APIs, authentication concepts and how frontend apps communicate with services.',
      it: 'Studio API, concetti di autenticazione e comunicazione tra frontend e servizi.',
    },
    tags: ['API', 'Node', 'Auth'],
  },
  {
    title: { en: 'Linux and sysadmin', it: 'Linux e sysadmin' },
    status: { en: 'Hands-on practice', it: 'Pratica diretta' },
    description: {
      en: 'Practicing shell workflows, service setup and basic troubleshooting on Linux systems.',
      it: 'Mi esercito con shell, configurazione servizi e troubleshooting di base su sistemi Linux.',
    },
    tags: ['Linux', 'Shell', 'Services'],
  },
  {
    title: { en: 'Networking fundamentals', it: 'Fondamenti di networking' },
    status: { en: 'In progress', it: 'In corso' },
    description: {
      en: 'Improving understanding of IP addressing, DNS, routing basics and local network debugging.',
      it: 'Approfondisco indirizzamento IP, DNS, basi di routing e debug di reti locali.',
    },
    tags: ['DNS', 'IP', 'Troubleshooting'],
  },
  {
    title: { en: 'Hardware and Raspberry Pi', it: 'Hardware e Raspberry Pi' },
    status: { en: 'Project-based', it: 'Basato su progetti' },
    description: {
      en: 'Experimenting with small devices, automation scripts and practical hardware maintenance.',
      it: 'Sperimento con piccoli dispositivi, script di automazione e manutenzione hardware pratica.',
    },
    tags: ['Raspberry Pi', 'Hardware', 'Automation'],
  },
  {
    title: { en: 'Automated testing', it: 'Test automatici' },
    status: { en: 'Portfolio rollout', it: 'Applicato al portfolio' },
    description: {
      en: 'Adding tests that protect routing, language switching and core portfolio content.',
      it: 'Aggiungo test per proteggere routing, cambio lingua e contenuti principali del portfolio.',
    },
    tags: ['Vitest', 'QA', 'CI'],
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'ICDL/ECDL Full Standard', issuer: 'AICA' },
  { name: 'Computer Essentials', issuer: 'ECDL' },
  { name: 'IT Security', issuer: 'ECDL' },
  { name: 'Spreadsheets', issuer: 'ECDL' },
];
