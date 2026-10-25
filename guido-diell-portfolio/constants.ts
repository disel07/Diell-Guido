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
    en: 'Computer Science Student @ UniCal | HR Recruiter @ RootRunners',
    it: 'Studente di Informatica @ UniCal | HR Recruiter @ RootRunners',
  },
  status: 'ONLINE',
  headline: {
    en: 'Computer Science student at UniCal & HR Recruiter at RootRunners | Python · Linux · Cybersecurity',
    it: 'Studente di Informatica a UniCal & HR Recruiter presso RootRunners | Python · Linux · Cybersecurity',
  },
  heroDescription: {
    en: 'Studying Computer Science at Università della Calabria (UniCal) and recruiting technical talent at RootRunners. Exploring cybersecurity, Linux systems, and emerging technologies.',
    it: 'Studio Informatica all\'Università della Calabria (UniCal) e seleziono talenti tecnici per RootRunners. Esploro cybersecurity, sistemi Linux e tecnologie emergenti.',
  },
  aboutMe: {
    en: 'I am a Computer Science undergraduate at Università della Calabria (UniCal) and an HR Recruiter at RootRunners. With a solid foundation in Linux systems, Python automation, networking, and technical talent acquisition, I am actively expanding into cybersecurity, blockchain, and distributed systems while bringing discipline and high standards to every project.',
    it: 'Sono uno studente di Informatica presso l\'Università della Calabria (UniCal) e HR Recruiter presso RootRunners. Con solide basi in sistemi Linux, automazione in Python, reti e selezione di talenti tecnici, sto approfondendo le mie competenze in cybersecurity, blockchain e sistemi distribuiti, portando disciplina e alti standard in ogni progetto.',
  },
  location: {
    en: "Santa Sofia d'Epiro / Cosenza, Calabria, Italy",
    it: "Santa Sofia d'Epiro / Cosenza, Calabria, Italia",
  },
  availability: {
    en: 'Cosenza | UniCal · RootRunners · Remote',
    it: 'Cosenza | UniCal · RootRunners · Remoto',
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
    id: 'rootrunners',
    role: {
      en: 'HR Recruiter / Talent Acquisition',
      it: 'Addetto alla selezione del personale / HR Recruiter',
    },
    company: 'RootRunners',
    logo: 'images/rootrunners-logo.png',
    location: {
      en: 'Remote',
      it: 'Da remoto',
    },
    period: {
      en: 'Jun 2026 - Present',
      it: 'giu 2026 - Presente',
    },
    description: {
      en: [
        'Managing tech talent screening, candidate assessments, and end-to-end recruitment pipelines.',
        'Collaborating closely with engineering leads to evaluate technical competencies and cultural fit.',
        'Conducting structured candidate evaluations and driving remote recruitment workflows.',
      ],
      it: [
        'Gestione dello screening di profili tecnologici, valutazione candidati e pipeline di reclutamento.',
        'Collaborazione diretta con i responsabili tecnici per valutare competenze tecniche e affinità culturale.',
        'Conduzione di valutazioni strutturate dei candidati e ottimizzazione dei flussi di assunzione da remoto.',
      ],
    },
    type: 'tech',
    featured: true,
    takeaways: {
      en: ['Technical talent screening', 'Structured interviewing', 'Remote team coordination', 'Recruitment pipeline'],
      it: ['Screening profili tecnici', 'Colloqui strutturati', 'Coordinamento team da remoto', 'Pipeline di selezione'],
    },
    tags: ['HR', 'Recruiting', 'Talent Acquisition', 'Remote', 'Tech Talent'],
  },
  {
    id: 'urban-italian-group',
    role: {
      en: 'Pizza Chef',
      it: 'Pizzaiolo',
    },
    company: 'Urban Italian Group',
    logo: 'images/urban-italian-group-logo.png',
    location: {
      en: 'Östersund, Jämtland County, Sweden',
      it: 'Östersund, Jämtland, Svezia',
    },
    period: {
      en: 'Jul 2026 - Sep 2026',
      it: 'lug 2026 - set 2026',
    },
    description: {
      en: [
        'Seasonal role in Östersund, Sweden at renowned restaurant group (home to "Truffle Jammin\'", best Scandinavian vegan pizza 2024).',
        'Collaborated in an international high-pace kitchen team delivering high-volume service with uncompromising quality standards.',
        'Demonstrated strong operational discipline, kitchen efficiency, stress resistance, and cross-cultural teamwork.',
      ],
      it: [
        'Ruolo stagionale in sede a Östersund, Svezia presso il rinomato gruppo di ristorazione (creatori di "Truffle Jammin\'", miglior pizza vegana scandinava 2024).',
        'Collaborazione in un team di cucina internazionale e dinamico con servizio ad alto volume ed elevati standard qualitativi.',
        'Dimostrata forte disciplina operativa, efficienza in cucina, resistenza allo stress e collaborazione multiculturale.',
      ],
    },
    type: 'other',
    takeaways: {
      en: ['High-volume kitchen service', 'Cross-cultural team synergy', 'Extreme pressure tolerance', 'Operational consistency'],
      it: ['Servizio ad alto volume in cucina', 'Sinergia in team multiculturale', 'Resistenza a forte pressione', 'Costanza operativa'],
    },
    tags: ['International', 'Teamwork', 'High-volume Service', 'Sweden', 'Discipline'],
  },
  {
    id: 'code-monsters',
    role: {
      en: 'IT Intern',
      it: 'Stagista informatica',
    },
    company: 'Code Monsters',
    logo: 'images/code-monsters-logo.png',
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
    takeaways: {
      en: ['Linux maintenance', 'Raspberry Pi labs', 'Automation scripts', 'Team workflow'],
      it: ['Manutenzione Linux', 'Lab Raspberry Pi', 'Script di automazione', 'Workflow di team'],
    },
    tags: ['Erasmus+', 'Linux', 'Raspberry Pi', 'Scripts'],
  },
  {
    id: 'adcc',
    role: {
      en: 'School-Work Alternation Student',
      it: 'Studente in alternanza scuola-lavoro',
    },
    company: 'ADCC',
    logo: 'images/adcc-logo.png',
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
    id: 'i-compari',
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
    school: 'Università della Calabria (UniCal)',
    logo: 'images/unical-logo.png',
    degree: {
      en: "Bachelor's Degree in Computer Science (Informatica)",
      it: 'Laurea Triennale in Informatica',
    },
    location: {
      en: 'Rende, Cosenza, Italy',
      it: 'Rende, Cosenza, Italia',
    },
    period: {
      en: 'Sep 2026 - Present',
      it: 'set 2026 - Presente',
    },
    description: {
      en: 'Undergraduate degree program in Computer Science at UniCal, focusing on algorithms, theoretical computing, operating systems, advanced software architecture, and systems engineering.',
      it: 'Corso di laurea triennale in Informatica presso l\'Università della Calabria (UniCal), focalizzato su algoritmi, informatica teorica, sistemi operativi, architetture software avanzate e ingegneria dei sistemi.',
    },
    focus: ['Algorithms', 'Data Structures', 'Operating Systems', 'Software Engineering', 'Mathematics', 'Computer Science'],
  },
  {
    school: 'ITI A. Monaco - Informatica',
    degree: {
      en: 'Technical IT Diploma, Computer Science',
      it: 'Diploma tecnico, Informatica',
    },
    location: {
      en: 'Cosenza, Italy',
      it: 'Cosenza, Italia',
    },
    period: {
      en: 'Jan 2021 - Jun 2026',
      it: 'gen 2021 - giu 2026',
    },
    grade: '92/100',
    description: {
      en: 'Technical computer science diploma graduated with 92/100. Comprehensive preparation in programming, systems, networks, cybersecurity and practical IT fundamentals.',
      it: 'Diploma tecnico in informatica conseguito con votazione 92/100. Preparazione completa su programmazione, sistemi, reti, cybersecurity e fondamenti pratici IT.',
    },
    focus: ['C#', 'Networking', 'Computer Science', 'Linux', 'Web', 'Hardware', 'Cybersecurity'],
  },
];

export const VOLUNTEERING: VolunteerItem[] = [
  {
    organization: 'ADCC (Associacao para a Divulgacao Cultural e Cientifica)',
    logo: 'images/adcc-logo.png',
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
    name: 'LLPA Digital Skills Cup - National Champion IT Security',
    issuer: 'LLPA · Microsoft · AWS · Pipeline',
    topic: 'it-security',
    issued: { en: 'May 2026', it: 'mag 2026' },
    credentialId: 'ebec2e5c-0c23-4a16-83d1-990b9eb645ba',
    credentialUrl: 'https://www.credly.com/badges/ebec2e5c-0c23-4a16-83d1-990b9eb645ba',
    skills: { en: 'IT security, Cloud Security, Threat Defense', it: 'Sicurezza informatica, Cloud Security, Difesa dalle minacce' },
    featured: true,
    badge: 'images/llpa-champion-badge.png',
  },
  {
    name: 'Introduction to Modern AI',
    issuer: 'Cisco',
    topic: 'ai',
    issued: { en: 'May 2026', it: 'mag 2026' },
    credentialId: '1b5f1647-a661-429a-9a37-cd1ec89f7b83',
    credentialUrl: 'https://www.credly.com/badges/1b5f1647-a661-429a-9a37-cd1ec89f7b83',
    skills: { en: 'Artificial intelligence, Machine Learning', it: 'Intelligenza artificiale, Machine Learning' },
    badge: 'images/cisco-logo.png',
  },
  {
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    topic: 'cybersecurity',
    issued: { en: 'Apr 2026', it: 'apr 2026' },
    credentialId: '5fe6a8c8-9c8f-4449-bf3f-accc2f0c7dd6',
    credentialUrl: 'https://www.credly.com/badges/5fe6a8c8-9c8f-4449-bf3f-accc2f0c7dd6',
    skills: { en: 'Cybersecurity, network security', it: 'Cybersecurity, sicurezza delle reti' },
    badge: 'images/cisco-logo.png',
  },
  {
    name: 'Certification: Blockchain Basics',
    issuer: 'Cyfrin Updraft',
    topic: 'blockchain',
    issued: { en: 'Apr 2026', it: 'apr 2026' },
    expires: { en: 'Apr 2027', it: 'apr 2027' },
    credentialId: 'BBCC-EFGJTLGD9GTG2',
    credentialUrl: 'https://updraft.cyfrin.io/',
    skills: { en: 'Blockchain, Web3, Smart Contracts', it: 'Blockchain, Web3, Smart Contract' },
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
      en: 'National Digital Innovation Award 2026',
      it: "Premio Nazionale sull'Innovazione Digitale 2026",
    },
    status: {
      en: 'Winner',
      it: 'Vincitore',
    },
    description: {
      en: 'Issued by Anitec-Assinform · May 2026. Winner in the category "ICT for Inclusion and Accessibility – No One Excluded in the Digital Era" with the UrbanAI project, developed in partnership with Somos Srl and ENS (National Deaf Association). VI edition.',
      it: 'Rilasciato da Anitec-Assinform · mag 2026. Vincitore nella categoria "ICT per l\'inclusione e l\'accessibilità – Nessuno escluso nell\'era digitale" con il progetto UrbanAI, sviluppato in partnership con Somos Srl ed ENS (Ente Nazionale Sordi). VI edizione.',
    },
    tags: ['Anitec-Assinform', 'UrbanAI', 'Accessibility', 'AI', 'Inclusion'],
  },
  {
    title: {
      en: 'LLPA Digital Skills Cup - National Champion 2026 IT Security',
      it: 'LLPA Digital Skills Cup - Campione Nazionale 2026 IT Security',
    },
    status: {
      en: 'National Champion',
      it: 'Campione Nazionale',
    },
    description: {
      en: 'Awarded by Leading Learning Partners Association (LLPA) in collaboration with Microsoft, AWS, and Pipeline Srl. Ranked 1st in Italy in IT Security and qualified to represent Italy at the World Finals on May 28, 2026.',
      it: 'Assegnato da Leading Learning Partners Association (LLPA) in collaborazione con Microsoft, AWS e Pipeline Srl. 1° classificato in Italia in IT Security e qualificato per rappresentare l\'Italia alle Finali Mondiali del 28 maggio 2026.',
    },
    tags: ['LLPA', 'IT Security', 'Microsoft', 'AWS', 'Pipeline Srl', 'World Finals'],
    badge: 'images/llpa-champion-badge.png',
    link: 'https://www.credly.com/badges/ebec2e5c-0c23-4a16-83d1-990b9eb645ba',
  },
];
