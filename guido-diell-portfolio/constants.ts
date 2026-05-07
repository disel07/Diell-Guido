import {
  AwardItem,
  Certification,
  EducationItem,
  ExperienceItem,
  LearningItem,
  Project,
  ProjectCategory,
  Skill,
  VolunteerItem,
} from './types';

// ==========================================
// CONFIGURATION - EDIT THIS SECTION FREQUENTLY
// ==========================================
export const SITE_CONFIG = {
  name: 'Guido Diell',
  role: {
    en: 'IT Student | Python · Linux · Docker · Bash · SQL',
    it: 'Studente IT | Python · Linux · Docker · Bash · SQL',
  },
  status: 'ONLINE',
  headline: {
    en: 'Python · Linux · Docker · Bash · SQL | cybersecurity or blockchain — IT or remote',
    it: 'Python · Linux · Docker · Bash · SQL | cybersecurity o blockchain — IT o remoto',
  },
  heroDescription: {
    en: 'Looking for cybersecurity or blockchain opportunities in IT, hybrid or remote environments.',
    it: 'Cerco opportunita in cybersecurity o blockchain in ambito IT, ibrido o da remoto.',
  },
  aboutMe: {
    en: 'I am an IT student focused on practical systems work: Linux, Python, networking, hardware maintenance and small automation projects. I am building stronger foundations in cybersecurity, blockchain and full-stack development while looking for junior IT opportunities where I can learn fast and contribute with discipline.',
    it: 'Sono uno studente di informatica orientato al lavoro pratico su sistemi: Linux, Python, reti, manutenzione hardware e piccoli progetti di automazione. Sto rafforzando le basi in cybersecurity, blockchain e sviluppo full-stack, cercando opportunita junior IT in cui imparare velocemente e contribuire con disciplina.',
  },
  location: {
    en: "Santa Sofia d'Epiro, Calabria, Italy",
    it: "Santa Sofia d'Epiro, Calabria, Italia",
  },
  availability: {
    en: 'Cosenza | On-site · Hybrid · Remote',
    it: 'Cosenza | In sede · Ibrido · Da remoto',
  },
  contact: {
    email: 'diellguido007@gmail.com',
    phone: '',
    address: "Santa Sofia d'Epiro, Calabria, Italy",
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
      en: 'Turn daily savings into an empire with a compound interest simulator.',
      it: 'Trasforma i risparmi quotidiani in un impero con una simulazione di interesse composto.',
    },
    technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
    category: 'Web',
    featured: true,
  },
  {
    name: 'CareerPath-Proiezioni',
    url: 'https://disel07.github.io/Diell-Guido/CareerPath-Proiezioni/',
    description: {
      en: 'Life simulator for comparing two parallel career and study paths.',
      it: 'Simulatore di vita per confrontare due percorsi paralleli di carriera e studio.',
    },
    technologies: ['React', 'TypeScript', 'Vite'],
    category: 'School',
    featured: true,
  },
  {
    name: 'Portfolio Diell-Guido',
    url: '#',
    description: {
      en: 'My personal portfolio, built as a cyber-style React experience.',
      it: 'Il mio portfolio personale, costruito come esperienza React in stile cyber.',
    },
    technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
    category: 'Web',
    featured: true,
  },
  {
    name: 'Organizer-Foto-Pro',
    url: 'https://github.com/disel07/Organizer-Foto-Pro',
    description: {
      en: 'Python CLI utility for organizing large photo and video folders quickly and safely.',
      it: 'Utility CLI in Python per organizzare rapidamente e in sicurezza grandi cartelle di foto e video.',
    },
    technologies: ['Python', 'CLI'],
    category: 'Python',
  },
  {
    name: 'Torneo FIFA 2025',
    url: 'https://disel07.github.io/torneo-fifa-2025/',
    description: {
      en: 'Leaderboard and schedule management system for a FIFA 2025 tournament.',
      it: 'Sistema per classifica e calendario di un torneo FIFA 2025.',
    },
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python'],
    category: 'Experiments',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    role: {
      en: 'IT Intern',
      it: 'Stagista informatica',
    },
    company: 'Code Monsters',
    location: {
      en: 'La Coruna, Galicia, Spain',
      it: 'La Coruna, Galizia, Spagna',
    },
    period: {
      en: 'Oct 2024 - Nov 2024',
      it: 'ott 2024 - nov 2024',
    },
    description: {
      en: [
        'Completed an Erasmus+ internship focused on computer maintenance and Linux systems.',
        'Worked with Raspberry Pi devices, private cloud basics and multi-device setup tasks.',
        'Created and used scripts for software updates and repeated maintenance workflows.',
        'Learned how to work with discipline, ask clearer questions and contribute in a real technical team.',
      ],
      it: [
        'Stage Erasmus+ focalizzato su manutenzione computer e sistemi Linux.',
        'Lavoro pratico con Raspberry Pi, basi di cloud privato e configurazione multi-dispositivo.',
        'Creazione e uso di script per aggiornamenti software e attivita ripetitive di manutenzione.',
        'Crescita su disciplina, domande tecniche piu chiare e collaborazione in un vero team tecnico.',
      ],
    },
    type: 'tech',
    featured: true,
    takeaways: {
      en: ['Linux maintenance', 'Raspberry Pi labs', 'Automation scripts', 'Team workflow'],
      it: ['Manutenzione Linux', 'Lab Raspberry Pi', 'Script di automazione', 'Workflow di team'],
    },
    tags: ['Erasmus+', 'Linux', 'Raspberry Pi', 'Scripts'],
  },
  {
    id: '2',
    role: {
      en: 'School-Work Alternation Student',
      it: 'Studente in alternanza scuola-lavoro',
    },
    company: 'ADCC',
    location: {
      en: 'Lisbon, Portugal',
      it: 'Lisbona, Portogallo',
    },
    period: {
      en: 'Jul 2024',
      it: 'lug 2024',
    },
    description: {
      en: [
        'Student volunteer experience in science and technology activities.',
        'Gained practical exposure to web work, multimedia tasks and technical collaboration.',
        'Worked in an international environment, improving adaptability and communication.',
      ],
      it: [
        'Esperienza da volontario studente in attivita di scienza e tecnologia.',
        'Esperienza pratica su web, multimedia e collaborazione tecnica.',
        'Lavoro in ambiente internazionale, migliorando adattabilita e comunicazione.',
      ],
    },
    type: 'tech',
    tags: ['Science', 'Technology', 'International'],
  },
  {
    id: '3',
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
        'Worked in a fast-paced seasonal environment with strong hygiene and teamwork requirements.',
        'Built discipline, reliability and pressure management in daily service operations.',
      ],
      it: [
        'Lavoro in ambiente stagionale veloce con attenzione a igiene e lavoro di squadra.',
        'Sviluppo di disciplina, affidabilita e gestione della pressione nel servizio quotidiano.',
      ],
    },
    type: 'other',
    tags: ['Teamwork', 'Discipline', 'Pressure'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    school: 'ITI A. Monaco - Informatica',
    degree: {
      en: 'Technical IT Diploma, Computer Science',
      it: 'Diploma tecnico, Informatica',
    },
    location: {
      en: 'Italy',
      it: 'Italia',
    },
    period: {
      en: 'Jan 2021 - Jun 2026',
      it: 'gen 2021 - giu 2026',
    },
    description: {
      en: 'Technical computer science education focused on programming, networks, systems and practical IT foundations.',
      it: 'Percorso tecnico informatico orientato a programmazione, reti, sistemi e basi pratiche IT.',
    },
    focus: ['C#', 'Networking', 'Computer Science', 'Linux', 'Web', 'Hardware'],
  },
];

export const VOLUNTEERING: VolunteerItem[] = [
  {
    organization: 'ADCC (Associacao para a Divulgacao Cultural e Cientifica)',
    role: {
      en: 'Student Volunteer',
      it: 'Volontario studente',
    },
    location: {
      en: 'Lisbon, Portugal',
      it: 'Lisbona, Portogallo',
    },
    period: {
      en: 'Jul 2024',
      it: 'lug 2024',
    },
    cause: {
      en: 'Science and technology',
      it: 'Scienza e tecnologia',
    },
    description: {
      en: 'School-work alternation experience with cultural, scientific and technical activities.',
      it: 'Esperienza di alternanza scuola-lavoro con attivita culturali, scientifiche e tecniche.',
    },
  },
];

export const SKILLS: Skill[] = [
  {
    name: { en: 'Linux', it: 'Linux' },
    domain: 'Systems',
    signal: { en: 'Daily environment', it: 'Ambiente quotidiano' },
    tags: ['CLI', 'Services', 'Maintenance'],
  },
  {
    name: { en: 'Docker', it: 'Docker' },
    domain: 'Systems',
    signal: { en: 'Container basics', it: 'Basi container' },
    tags: ['Images', 'Compose', 'Deploy'],
  },
  {
    name: { en: 'Bash', it: 'Bash' },
    domain: 'Systems',
    signal: { en: 'Automation scripts', it: 'Script di automazione' },
    tags: ['Shell', 'Updates', 'Workflow'],
  },
  {
    name: { en: 'Python', it: 'Python' },
    domain: 'Programming',
    signal: { en: 'CLI tools and automation', it: 'Tool CLI e automazione' },
    tags: ['Scripts', 'Files', 'Data'],
  },
  {
    name: { en: 'JavaScript', it: 'JavaScript' },
    domain: 'Programming',
    signal: { en: 'Frontend foundations', it: 'Basi frontend' },
    tags: ['React', 'DOM', 'UI'],
  },
  {
    name: { en: 'C#', it: 'C#' },
    domain: 'Programming',
    signal: { en: 'School projects', it: 'Progetti scolastici' },
    tags: ['OOP', 'Desktop', 'Logic'],
  },
  {
    name: { en: 'Cybersecurity', it: 'Cybersecurity' },
    domain: 'Security/Web3',
    signal: { en: 'Certified foundations', it: 'Basi certificate' },
    tags: ['Security', 'Cisco', 'AICA'],
  },
  {
    name: { en: 'Blockchain / Web3', it: 'Blockchain / Web3' },
    domain: 'Security/Web3',
    signal: { en: 'Certified basics', it: 'Basi certificate' },
    tags: ['Cyfrin', 'Wallets', 'Smart contracts'],
  },
  {
    name: { en: 'Network Architecture', it: 'Architettura di rete' },
    domain: 'Security/Web3',
    signal: { en: 'Troubleshooting mindset', it: 'Mentalita troubleshooting' },
    tags: ['TCP/IP', 'Security', 'Routing'],
  },
  {
    name: { en: 'SQL', it: 'SQL' },
    domain: 'Databases',
    signal: { en: 'Data model basics', it: 'Basi modelli dati' },
    tags: ['Queries', 'Tables', 'Backend'],
  },
  {
    name: { en: 'ECDL / ICDL', it: 'ECDL / ICDL' },
    domain: 'Databases',
    signal: { en: 'Productivity certified', it: 'Produttivita certificata' },
    tags: ['Excel', 'Spreadsheets', 'Office'],
  },
  {
    name: { en: 'Raspberry Pi', it: 'Raspberry Pi' },
    domain: 'Hardware',
    signal: { en: 'Hands-on lab device', it: 'Dispositivo lab pratico' },
    tags: ['Linux', 'Cloud basics', 'IoT'],
  },
  {
    name: { en: 'PC Maintenance', it: 'Manutenzione PC' },
    domain: 'Hardware',
    signal: { en: 'Practical support work', it: 'Supporto pratico' },
    tags: ['Repair', 'Setup', 'Diagnostics'],
  },
  {
    name: { en: 'Italian (Native)', it: 'Italiano (Madrelingua)' },
    domain: 'Languages',
    signal: { en: 'Native', it: 'Madrelingua' },
    tags: ['Communication'],
  },
  {
    name: { en: 'English (B1)', it: 'Inglese (B1)' },
    domain: 'Languages',
    signal: { en: 'Technical reading', it: 'Lettura tecnica' },
    tags: ['Docs', 'Remote work'],
  },
  {
    name: { en: 'Spanish (A2)', it: 'Spagnolo (A2)' },
    domain: 'Languages',
    signal: { en: 'Basic communication', it: 'Comunicazione base' },
    tags: ['Erasmus+'],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'IT Security',
    issuer: 'AICA',
    topic: 'it-security',
    issued: { en: 'Jun 2025', it: 'giu 2025' },
    skills: { en: 'IT security, network architecture', it: 'Sicurezza informatica, architettura di rete' },
    featured: true,
  },
  {
    name: 'Introduction to Modern AI',
    issuer: 'Cisco',
    topic: 'ai',
    issued: { en: 'May 2026', it: 'mag 2026' },
    skills: { en: 'Artificial intelligence', it: 'Intelligenza artificiale' },
  },
  {
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    topic: 'cybersecurity',
    issued: { en: 'Apr 2026', it: 'apr 2026' },
    skills: { en: 'Cybersecurity, network security', it: 'Cybersecurity, sicurezza delle reti' },
  },
  {
    name: 'Certification: Blockchain Basics',
    issuer: 'Cyfrin Updraft',
    topic: 'blockchain',
    issued: { en: 'Apr 2026', it: 'apr 2026' },
    expires: { en: 'Apr 2027', it: 'apr 2027' },
    credentialId: 'BBCC-EFGJTLGD9GTG2',
    skills: { en: 'Blockchain, Web3', it: 'Blockchain, Web3' },
  },
  {
    name: 'Computer Essentials and Spreadsheets',
    issuer: 'AICA',
    topic: 'productivity',
    issued: { en: 'Apr 2025', it: 'apr 2025' },
    skills: { en: 'ECDL, Microsoft Excel', it: 'ECDL, Microsoft Excel' },
  },
];

export const CURRENTLY_LEARNING: LearningItem[] = [
  {
    title: { en: 'TypeScript + Frontend Testing', it: 'TypeScript + testing frontend' },
    status: { en: 'Practicing', it: 'In pratica' },
    description: {
      en: 'Improving React structure, type safety and reliable checks for real portfolio features.',
      it: 'Miglioro struttura React, type safety e controlli affidabili per funzioni reali del portfolio.',
    },
    tags: ['TypeScript', 'React', 'Vitest'],
    iconKey: 'react-testing',
  },
  {
    title: { en: 'Python Backend Basics', it: 'Basi backend Python' },
    status: { en: 'Building', it: 'In costruzione' },
    description: {
      en: 'Learning APIs, SQL models and small service patterns that connect scripts to useful tools.',
      it: 'Studio API, modelli SQL e piccoli servizi per collegare script a strumenti utili.',
    },
    tags: ['Python', 'API', 'SQL'],
    iconKey: 'python-backend',
  },
  {
    title: { en: 'Linux / Sysadmin', it: 'Linux / Sysadmin' },
    status: { en: 'Practicing', it: 'In pratica' },
    description: {
      en: 'Strengthening shell, permissions, services, logs and maintenance routines.',
      it: 'Rafforzo shell, permessi, servizi, log e routine di manutenzione.',
    },
    tags: ['Linux', 'Bash', 'Services'],
    iconKey: 'linux',
  },
  {
    title: { en: 'Networking + Cybersecurity', it: 'Networking + cybersecurity' },
    status: { en: 'Studying', it: 'In studio' },
    description: {
      en: 'Reviewing network architecture, security concepts and troubleshooting methods.',
      it: 'Ripasso architettura di rete, concetti di sicurezza e metodi di troubleshooting.',
    },
    tags: ['TCP/IP', 'Security', 'Troubleshooting'],
    iconKey: 'network',
  },
  {
    title: { en: 'Raspberry Pi / Hardware', it: 'Raspberry Pi / Hardware' },
    status: { en: 'Hands-on', it: 'Pratico' },
    description: {
      en: 'Using small devices to learn systems, automation and practical maintenance.',
      it: 'Uso piccoli dispositivi per imparare sistemi, automazione e manutenzione pratica.',
    },
    tags: ['Raspberry Pi', 'Hardware', 'Automation'],
    iconKey: 'hardware',
  },
  {
    title: { en: 'Blockchain / Web3 Labs', it: 'Laboratori Blockchain / Web3' },
    status: { en: 'Next', it: 'Prossimo' },
    description: {
      en: 'Building stronger foundations around wallets, smart contract basics and secure Web3 workflows.',
      it: 'Rafforzo le basi su wallet, smart contract e workflow Web3 sicuri.',
    },
    tags: ['Blockchain', 'Web3', 'Security'],
    iconKey: 'blockchain',
  },
];

export const AWARDS: AwardItem[] = [
  {
    title: {
      en: 'Recognition Pending Public Announcement',
      it: 'Riconoscimento in attesa di annuncio pubblico',
    },
    status: {
      en: 'Received',
      it: 'Ricevuto',
    },
    description: {
      en: 'Recognition received. Details will be shared after the official public announcement.',
      it: 'Riconoscimento ricevuto. I dettagli saranno condivisi dopo l annuncio pubblico ufficiale.',
    },
    tags: ['Confidential', 'Achievement', 'Coming soon'],
  },
];
