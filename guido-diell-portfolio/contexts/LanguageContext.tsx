/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Language } from '../types';

const LANGUAGE_STORAGE_KEY = 'portfolio-language';

export const dictionary = {
  en: {
    skipToContent: 'Skip to main content',
    languageToggle: 'Switch language to Italian',
    nav: {
      home: 'Home',
      skills: 'Skills',
      learning: 'Learning',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      projectsLabel: 'Projects',
    },
    hero: {
      sectionLabel: 'Hero section',
      statusPrefix: 'STATUS',
      statusLabel: 'Current status',
      role: 'Computer Science Student',
      description: 'Junior developer focused on practical web projects, systems basics and reliable problem solving.',
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
      subtitle: 'Current skills, tools and languages I use while building and learning.',
      listLabel: 'Technical skills',
      certifiedA: 'CERTIFIED',
      certifiedB: 'DATA',
      certifiedSubtitle: 'Verified achievements and personal objectives.',
      certsLabel: 'Certifications',
      objectiveTitle: 'SYSTEM OBJECTIVE',
      about:
        'I am a computer science student building a practical foundation in web development, IT support and hardware operations. I value clear communication, consistency and learning by building real projects.',
      proficiencyLabel: 'percent proficiency',
    },
    learning: {
      titleA: 'CURRENTLY',
      titleB: 'LEARNING',
      badge: 'LIVE ROADMAP',
      subtitle: 'A realistic roadmap of the skills I am actively strengthening next.',
      label: 'Current learning goals',
    },
    projects: {
      featuredA: 'FEATURED',
      featuredB: 'PROJECTS',
      featuredSubtitle: 'Selected work focused on practical interfaces, simulations and tools.',
      moreTitle: 'MORE PROJECTS',
      moreDescription: 'Explore the full catalog of my work and experiments.',
      moreLabel: 'View all projects',
      visitLabel: 'Visit',
      viewProject: 'VIEW PROJECT',
      allTitleA: 'FULL PROJECT',
      allTitleB: 'CATALOG',
      quote: 'The best way to predict the future is to build it step by step.',
      allLabel: 'All projects',
      filterLabel: 'Filter projects by category',
      allFilter: 'All',
      empty: 'No projects found for this filter.',
    },
    experience: {
      titleA: 'EXPERIENCE',
      titleB: 'LOG',
      label: 'Work experience timeline',
    },
    contact: {
      titleA: 'CONNECT',
      titleB: 'PROTOCOL',
      subtitle: 'Open to learning opportunities, collaboration and practical tech projects.',
      githubLabel: 'Visit my GitHub profile (opens in new tab)',
      linkedinLabel: 'Visit my LinkedIn profile (opens in new tab)',
      showEmail: 'Show email address',
      hideEmail: 'Hide email address',
      copied: 'COPIED',
      copy: 'COPY',
      footer: 'SYSTEM ONLINE.',
    },
  },
  it: {
    skipToContent: 'Vai al contenuto principale',
    languageToggle: 'Cambia lingua in inglese',
    nav: {
      home: 'Home',
      skills: 'Competenze',
      learning: 'Studio',
      projects: 'Progetti',
      experience: 'Esperienze',
      contact: 'Contatti',
      projectsLabel: 'Progetti',
    },
    hero: {
      sectionLabel: 'Sezione principale',
      statusPrefix: 'STATO',
      statusLabel: 'Stato attuale',
      role: 'Studente di informatica',
      description: 'Junior developer orientato a progetti web pratici, basi di sistemi e problem solving affidabile.',
      cards: [
        { text: 'System Admin', label: 'Vai alle competenze di amministrazione sistemi' },
        { text: 'Sviluppo Web', label: 'Vai alle competenze di sviluppo web' },
        { text: 'Hardware Ops', label: 'Vai alle competenze hardware' },
      ],
      scroll: 'SCORRI PER ESPLORARE',
      scrollLabel: 'Scorri alla sezione esperienze',
    },
    skills: {
      titleA: 'ARSENALE',
      titleB: 'TECNICO',
      subtitle: 'Competenze, strumenti e lingue che uso mentre costruisco e imparo.',
      listLabel: 'Competenze tecniche',
      certifiedA: 'DATI',
      certifiedB: 'CERTIFICATI',
      certifiedSubtitle: 'Obiettivi personali e risultati verificati.',
      certsLabel: 'Certificazioni',
      objectiveTitle: 'OBIETTIVO',
      about:
        'Sono uno studente di informatica e sto costruendo basi solide in sviluppo web, supporto IT e operazioni hardware. Do valore a comunicazione chiara, costanza e apprendimento tramite progetti reali.',
      proficiencyLabel: 'percento di competenza',
    },
    learning: {
      titleA: 'STO',
      titleB: 'IMPARANDO',
      badge: 'ROADMAP ATTIVA',
      subtitle: 'Una roadmap realistica delle competenze che sto rafforzando ora.',
      label: 'Obiettivi di apprendimento attuali',
    },
    projects: {
      featuredA: 'PROGETTI',
      featuredB: 'IN EVIDENZA',
      featuredSubtitle: 'Lavori selezionati su interfacce pratiche, simulazioni e strumenti.',
      moreTitle: 'ALTRI PROGETTI',
      moreDescription: 'Esplora il catalogo completo dei miei lavori ed esperimenti.',
      moreLabel: 'Vedi tutti i progetti',
      visitLabel: 'Visita',
      viewProject: 'VEDI PROGETTO',
      allTitleA: 'CATALOGO',
      allTitleB: 'PROGETTI',
      quote: 'Il modo migliore per prevedere il futuro e costruirlo passo dopo passo.',
      allLabel: 'Tutti i progetti',
      filterLabel: 'Filtra progetti per categoria',
      allFilter: 'Tutti',
      empty: 'Nessun progetto trovato per questo filtro.',
    },
    experience: {
      titleA: 'REGISTRO',
      titleB: 'ESPERIENZE',
      label: 'Timeline esperienze lavorative',
    },
    contact: {
      titleA: 'PROTOCOLLO',
      titleB: 'CONTATTO',
      subtitle: 'Disponibile a opportunita di crescita, collaborazione e progetti tech pratici.',
      githubLabel: 'Visita il mio profilo GitHub (si apre in una nuova scheda)',
      linkedinLabel: 'Visita il mio profilo LinkedIn (si apre in una nuova scheda)',
      showEmail: 'Mostra indirizzo email',
      hideEmail: 'Nascondi indirizzo email',
      copied: 'COPIATO',
      copy: 'COPIA',
      footer: 'SISTEMA ONLINE.',
    },
  },
} as const;

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (typeof dictionary)[Language];
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  return window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === 'it' ? 'it' : 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'en' ? 'it' : 'en');
  }, [language, setLanguage]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: dictionary[language],
    }),
    [language, setLanguage, toggleLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
