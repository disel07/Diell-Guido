import React, { memo } from 'react';
import { ChevronDown, Cpu, Globe, Terminal } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { SITE_CONFIG } from '../constants';
import DecodeText from './DecodeText';
import { useLanguage } from '../contexts/LanguageContext';
import { usePerformanceMode } from '../contexts/PerformanceContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { autoPerformanceMode } = usePerformanceMode();
  const skillCards = [
    { icon: Terminal, text: t.hero.cards[0].text, href: "/#skills", label: t.hero.cards[0].label },
    { icon: Globe, text: t.hero.cards[1].text, href: "/#skills", label: t.hero.cards[1].label },
    { icon: Cpu, text: t.hero.cards[2].text, href: "/#skills", label: t.hero.cards[2].label }
  ];

  return (
    <section id="home" className="relative min-h-[88vh] flex flex-col items-center justify-start overflow-hidden pt-32 pb-14 md:pt-40 md:pb-16" aria-label={t.hero.sectionLabel}>
      {/* Ambient Glow */}
      <div className="absolute inset-x-6 top-28 h-px bg-gradient-to-r from-transparent via-cyber-primary/60 to-transparent pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-x-6 bottom-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 left-1/4 hidden h-72 w-72 rounded-full bg-cyber-primary/12 blur-3xl pointer-events-none sm:block" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 hidden h-72 w-72 rounded-full bg-cyber-secondary/12 blur-3xl pointer-events-none sm:block" aria-hidden="true" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <div className="mb-7 inline-block hero-enter hero-enter-scale">
          <span className="px-4 py-2 rounded-lg border border-cyber-primary/30 bg-cyber-primary/10 text-cyber-primary font-mono text-sm shadow-[0_0_12px_rgba(0,243,255,0.2)]" role="status" aria-label={`${t.hero.statusLabel}: ${SITE_CONFIG.status}`}>
            {t.hero.statusPrefix}: {SITE_CONFIG.status}
          </span>
        </div>

        {/* Nome con effetto Decode Matrix */}
        <h1 className="hero-enter hero-enter-delay-1 max-w-full text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-mono mb-6 tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 uppercase leading-tight drop-shadow-[0_0_22px_rgba(0,243,255,0.12)]">
          {autoPerformanceMode ? SITE_CONFIG.name : <DecodeText text={SITE_CONFIG.name} delay={500} />}
        </h1>

        <div className="hero-enter hero-enter-delay-2 w-full max-w-3xl text-sm sm:text-lg md:text-2xl text-gray-400 mb-10 mx-auto px-1">
          <p className="mb-2 font-medium text-white leading-relaxed break-words">{t.hero.role}</p>
          <p className="text-cyber-primary font-light leading-relaxed break-words">{t.hero.description}</p>
        </div>

        {/* Functional Buttons / Cards con effetti glassmorphism */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 w-full max-w-3xl" role="list" aria-label="Quick navigation to skills">
          {skillCards.map((item, i) => (
            <div
              key={item.text}
              className={`hero-enter ${i === 0 ? 'hero-enter-delay-3' : i === 1 ? 'hero-enter-delay-4' : 'hero-enter-delay-5'} ${autoPerformanceMode ? '' : 'hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]'} transition-transform`}
              role="listitem"
            >
              <HashLink
                to={item.href}
                smooth
                aria-label={item.label}
                className="flex flex-row sm:flex-col md:flex-row items-center justify-center gap-3 p-4 md:p-6 surface-panel glass-border-glow rounded-lg hover:bg-white/10 hover:border-cyber-primary/50 transition-all cursor-pointer group w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-primary circuit-button"
              >
                <item.icon className="w-6 h-6 text-gray-400 group-hover:text-cyber-primary transition-colors" aria-hidden="true" />
                <span className="font-mono text-sm font-bold text-gray-300 group-hover:text-white uppercase tracking-wider">{item.text}</span>
              </HashLink>
            </div>
          ))}
        </div>

        <div className="mt-4 hero-enter hero-enter-delay-5">
          <HashLink to="/#experience" smooth className="flex flex-col items-center gap-3 text-gray-500 hover:text-white transition-colors group" aria-label={t.hero.scrollLabel}>
            <span className="text-xs font-mono tracking-[0.2em] group-hover:text-cyber-primary transition-colors">{t.hero.scroll}</span>
            <ChevronDown className="w-6 h-6 animate-bounce text-cyber-primary motion-reduce:animate-none" aria-hidden="true" />
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
