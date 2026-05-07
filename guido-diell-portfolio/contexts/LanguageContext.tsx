/* eslint-disable react-refresh/only-export-components */
import React, { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Language } from '../types';

const STORAGE_KEY = 'portfolio-language';

export const translations = {
  en: {
    skipToContent: 'Skip to main content',
    languageToggle: 'Switch language to Italian',
    nav: {
      home: 'Home',
      skills: 'Skills',
      learning: 'Learning',
      projects: 'Projects',
      experience: 'Experience',
      awards: 'Awards',
      education: 'Education',
      contact: 'Contact',
      projectsLabel: 'Projects',
    },
    hero: {
      sectionLabel: 'Hero section',
      statusLabel: 'Current status',
      statusPrefix: 'STATUS',
      cards: [
        { text: 'System Admin', label: 'View system administration skills' },
        { text: 'Web Development', label: 'View web development skills' },
        { text: 'Hardware Ops', label: 'View hardware operations skills' },
      ],
      scroll: 'SCROLL TO EXPLORE',
      scrollLabel: 'Scroll to experience section',
    },
    skills: {
      titleA: 'TECHNICAL',
      titleB: 'ARSENAL',
      subtitle: 'Practical skills grouped by domain, without fake percentage scores.',
      listLabel: 'Technical skills',
      languagesLabel: 'Languages',
      domainLabels: {
        Systems: 'Systems',
        Programming: 'Programming',
        'Security/Web3': 'Security / Web3',
        Databases: 'Databases',
        Hardware: 'Hardware',
        Languages: 'Languages',
      },
      certifiedA: 'CERTIFIED',
      certifiedB: 'DATA',
      certifiedSubtitle: 'Verified achievements ordered by relevance to IT, security and emerging technology.',
      certsLabel: 'Certifications',
      issued: 'Issued',
      expires: 'Expires',
      credentialId: 'Credential ID',
      verified: 'Verified',
      objectiveTitle: 'SYSTEM OBJECTIVE',
    },
    learning: {
      badge: 'ACTIVE LEARNING',
      titleA: 'CURRENTLY',
      titleB: 'LEARNING',
      subtitle: 'The areas I am actively improving while building stronger IT foundations.',
      label: 'Currently learning topics',
    },
    projects: {
      featuredA: 'FEATURED',
      featuredB: 'PROJECTS',
      featuredSubtitle: 'Innovation and development. Explore my latest work.',
      moreTitle: 'MORE PROJECTS',
      moreDescription: 'Explore the full catalog of my work and experiments.',
      moreLabel: 'View all projects',
      visitLabel: 'Visit',
      viewProject: 'VIEW PROJECT',
      allTitleA: 'FULL PROJECT',
      allTitleB: 'CATALOG',
      quote: 'The best way to predict the future is to invent it.',
      allLabel: 'All projects',
      filterLabel: 'Filter projects by category',
      allFilter: 'All',
      empty: 'No projects found for this category.',
    },
    experience: {
      titleA: 'EXPERIENCE',
      titleB: 'LOG',
      label: 'Work experience timeline',
      featured: 'Featured experience',
      learned: 'What I learned',
    },
    awards: {
      titleA: 'AWARDS',
      titleB: 'SIGNAL',
      subtitle: 'Publicly shareable recognition, with confidential details protected until announcement.',
      label: 'Awards and recognitions',
      confidential: 'Details protected',
    },
    education: {
      titleA: 'EDUCATION',
      titleB: 'PATH',
      subtitle: 'Formal training, technical focus and volunteer experience.',
      label: 'Education and volunteering',
      focus: 'Focus areas',
      volunteer: 'VOLUNTEERING',
    },
    contact: {
      titleA: 'CONNECT',
      titleB: 'NODE',
      subtitle: 'Open to junior IT, cybersecurity and blockchain opportunities.',
      githubLabel: 'Open GitHub profile',
      linkedinLabel: 'Open LinkedIn profile',
      showEmail: 'Show email address',
      hideEmail: 'Hide email address',
      copied: 'COPIED',
      copy: 'COPY',
      footer: 'Built with React, Vite and cyber energy.',
    },
  },
  it: {
    skipToContent: 'Salta al contenuto principale',
    languageToggle: 'Cambia lingua in inglese',
    nav: {
      home: 'Home',
      skills: 'Skills',
      learning: 'Studio',
      projects: 'Progetti',
      experience: 'Esperienza',
      awards: 'Premi',
      education: 'Formazione',
      contact: 'Contatti',
      projectsLabel: 'Progetti',
    },
    hero: {
      sectionLabel: 'Sezione principale',
      statusLabel: 'Stato attuale',
      statusPrefix: 'STATO',
      cards: [
        { text: 'System Admin', label: 'Vai alle competenze di amministrazione sistemi' },
        { text: 'Web Development', label: 'Vai alle competenze di sviluppo web' },
        { text: 'Hardware Ops', label: 'Vai alle competenze hardware' },
      ],
      scroll: 'SCORRI PER ESPLORARE',
      scrollLabel: 'Scorri alla sezione esperienza',
    },
    skills: {
      titleA: 'ARSENALE',
      titleB: 'TECNICO',
      subtitle: 'Competenze pratiche raggruppate per dominio, senza percentuali finte.',
      listLabel: 'Competenze tecniche',
      languagesLabel: 'Lingue',
      domainLabels: {
        Systems: 'Sistemi',
        Programming: 'Programmazione',
        'Security/Web3': 'Security / Web3',
        Databases: 'Database',
        Hardware: 'Hardware',
        Languages: 'Lingue',
      },
      certifiedA: 'DATI',
      certifiedB: 'CERTIFICATI',
      certifiedSubtitle: 'Risultati verificati ordinati per rilevanza in IT, security e tecnologie emergenti.',
      certsLabel: 'Certificazioni',
      issued: 'Rilascio',
      expires: 'Scadenza',
      credentialId: 'ID credenziale',
      verified: 'Verificata',
      objectiveTitle: 'OBIETTIVO DI SISTEMA',
    },
    learning: {
      badge: 'STUDIO ATTIVO',
      titleA: 'CURRENTLY',
      titleB: 'LEARNING',
      subtitle: 'Le aree che sto migliorando mentre costruisco basi IT piu solide.',
      label: 'Argomenti in studio',
    },
    projects: {
      featuredA: 'PROGETTI',
      featuredB: 'IN EVIDENZA',
      featuredSubtitle: 'Innovazione e sviluppo. Esplora i miei ultimi lavori.',
      moreTitle: 'ALTRI PROGETTI',
      moreDescription: 'Esplora l intero catalogo dei miei lavori ed esperimenti.',
      moreLabel: 'Vedi tutti i progetti',
      visitLabel: 'Visita',
      viewProject: 'VEDI PROGETTO',
      allTitleA: 'CATALOGO',
      allTitleB: 'PROGETTI',
      quote: 'Il modo migliore per predire il futuro e inventarlo.',
      allLabel: 'Tutti i progetti',
      filterLabel: 'Filtra progetti per categoria',
      allFilter: 'Tutti',
      empty: 'Nessun progetto trovato per questa categoria.',
    },
    experience: {
      titleA: 'LOG',
      titleB: 'ESPERIENZE',
      label: 'Timeline esperienze',
      featured: 'Esperienza principale',
      learned: 'Cosa ho imparato',
    },
    awards: {
      titleA: 'SEGNALE',
      titleB: 'PREMI',
      subtitle: 'Riconoscimento condivisibile pubblicamente, con dettagli riservati fino all annuncio.',
      label: 'Premi e riconoscimenti',
      confidential: 'Dettagli protetti',
    },
    education: {
      titleA: 'PERCORSO',
      titleB: 'FORMATIVO',
      subtitle: 'Formazione tecnica, aree di focus e volontariato.',
      label: 'Formazione e volontariato',
      focus: 'Aree di focus',
      volunteer: 'VOLONTARIATO',
    },
    contact: {
      titleA: 'NODO',
      titleB: 'CONTATTO',
      subtitle: 'Disponibile per opportunita junior IT, cybersecurity e blockchain.',
      githubLabel: 'Apri profilo GitHub',
      linkedinLabel: 'Apri profilo LinkedIn',
      showEmail: 'Mostra indirizzo email',
      hideEmail: 'Nascondi indirizzo email',
      copied: 'COPIATA',
      copy: 'COPIA',
      footer: 'Costruito con React, Vite ed energia cyber.',
    },
  },
} as const;

type Translation = (typeof translations)[Language];

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  return window.localStorage.getItem(STORAGE_KEY) === 'it' ? 'it' : 'en';
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    document.documentElement.lang = nextLanguage;
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === 'en' ? 'it' : 'en'),
      t: translations[language],
    }),
    [language, setLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
