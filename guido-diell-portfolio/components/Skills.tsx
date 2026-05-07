import React, { memo, useMemo } from 'react';
import { SKILLS, CERTIFICATIONS, SITE_CONFIG } from '../constants';
import { motion } from 'framer-motion';
import {
  Blocks,
  BrainCircuit,
  CalendarDays,
  CheckCircle,
  Code2,
  Cpu,
  Database,
  Languages as LanguagesIcon,
  LockKeyhole,
  Server,
  ShieldCheck,
  Table2,
  Terminal,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { CertificationTopic, SkillDomain } from '../types';

const skillDomainOrder: SkillDomain[] = ['Systems', 'Programming', 'Security/Web3', 'Databases', 'Hardware'];

const skillDomainIcons: Record<SkillDomain, LucideIcon> = {
  Systems: Server,
  Programming: Code2,
  'Security/Web3': ShieldCheck,
  Databases: Database,
  Hardware: Cpu,
  Languages: LanguagesIcon,
};

const skillDomainStyles: Record<SkillDomain, string> = {
  Systems: 'border-cyber-primary/30 bg-cyber-primary/10 text-cyber-primary',
  Programming: 'border-cyber-secondary/30 bg-cyber-secondary/10 text-cyber-secondary',
  'Security/Web3': 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  Databases: 'border-amber-300/30 bg-amber-300/10 text-amber-200',
  Hardware: 'border-white/20 bg-white/10 text-gray-100',
  Languages: 'border-sky-300/30 bg-sky-300/10 text-sky-200',
};

const certificationTopics: Record<
  CertificationTopic,
  {
    Icon: LucideIcon;
    icon: string;
    rail: string;
    issuer: string;
    border: string;
    glow: string;
  }
> = {
  'it-security': {
    Icon: LockKeyhole,
    icon: 'text-emerald-300 bg-emerald-400/10 border-emerald-400/30',
    rail: 'bg-emerald-300',
    issuer: 'border-emerald-300/30 text-emerald-200 bg-emerald-300/10',
    border: 'border-emerald-300/40',
    glow: 'hover:shadow-[0_0_30px_rgba(110,231,183,0.18)]',
  },
  ai: {
    Icon: BrainCircuit,
    icon: 'text-cyber-primary bg-cyber-primary/10 border-cyber-primary/25',
    rail: 'bg-cyber-primary',
    issuer: 'border-cyber-primary/30 text-cyber-primary bg-cyber-primary/10',
    border: 'border-cyber-primary/30',
    glow: 'hover:shadow-[0_0_30px_rgba(0,243,255,0.16)]',
  },
  cybersecurity: {
    Icon: ShieldCheck,
    icon: 'text-cyber-primary bg-cyber-primary/10 border-cyber-primary/25',
    rail: 'bg-cyber-primary',
    issuer: 'border-cyber-primary/30 text-cyber-primary bg-cyber-primary/10',
    border: 'border-cyber-primary/25',
    glow: 'hover:shadow-[0_0_30px_rgba(0,243,255,0.14)]',
  },
  blockchain: {
    Icon: Blocks,
    icon: 'text-cyber-secondary bg-cyber-secondary/10 border-cyber-secondary/25',
    rail: 'bg-cyber-secondary',
    issuer: 'border-cyber-secondary/30 text-cyber-secondary bg-cyber-secondary/10',
    border: 'border-cyber-secondary/25',
    glow: 'hover:shadow-[0_0_30px_rgba(188,19,254,0.14)]',
  },
  productivity: {
    Icon: Table2,
    icon: 'text-gray-100 bg-white/10 border-white/20',
    rail: 'bg-white',
    issuer: 'border-white/20 text-gray-200 bg-white/5',
    border: 'border-white/15',
    glow: 'hover:shadow-[0_0_24px_rgba(255,255,255,0.08)]',
  },
};

const Skills: React.FC = () => {
  const { language, t } = useLanguage();
  const skillGroups = useMemo(
    () =>
      skillDomainOrder
        .map((domain) => ({
          domain,
          skills: SKILLS.filter((skill) => skill.domain === domain),
        }))
        .filter((group) => group.skills.length > 0),
    []
  );
  const languageSkills = useMemo(() => SKILLS.filter((skill) => skill.domain === 'Languages'), []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-transparent to-black/80" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Skills Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 id="skills-heading" className="text-4xl font-mono font-bold mb-2">
                {t.skills.titleA} <span className="text-cyber-secondary">{t.skills.titleB}</span>
              </h2>
              <p className="text-gray-400">{t.skills.subtitle}</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-4" role="list" aria-label={t.skills.listLabel}>
              {skillGroups.map((group, index) => {
                const DomainIcon = skillDomainIcons[group.domain];

                return (
                <motion.div
                  key={group.domain}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/35 p-5 backdrop-blur-md glass-border-glow hover:border-cyber-primary/30"
                  role="listitem"
                >
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg border ${skillDomainStyles[group.domain]}`} aria-hidden="true">
                        <DomainIcon className="h-5 w-5" />
                      </div>
                      <h3 className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-white">
                        {t.skills.domainLabels[group.domain]}
                      </h3>
                    </div>
                    <Terminal className="h-4 w-4 text-gray-600 group-hover:text-cyber-primary transition-colors" aria-hidden="true" />
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <div key={skill.name.en} className="min-w-[150px] flex-1 rounded-lg border border-white/10 bg-black/40 px-3 py-3">
                        <p className="font-mono text-sm font-bold text-white">{skill.name[language]}</p>
                        <p className="mt-1 text-xs text-gray-400">{skill.signal[language]}</p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {skill.tags.slice(0, 3).map((tag) => (
                            <span key={`${skill.name.en}-${tag}`} className="rounded border border-cyber-primary/20 px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-cyber-primary/90">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
                );
              })}

              {languageSkills.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: skillGroups.length * 0.05 }}
                  className="rounded-xl border border-sky-300/20 bg-sky-300/5 p-5"
                  role="listitem"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-sky-300/30 bg-sky-300/10 text-sky-200" aria-hidden="true">
                      <LanguagesIcon className="h-5 w-5" />
                    </div>
                    <h3 className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-white">{t.skills.languagesLabel}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {languageSkills.map((skill) => (
                      <span key={skill.name.en} className="rounded-lg border border-sky-300/25 bg-black/30 px-3 py-2 font-mono text-xs text-sky-100">
                        {skill.name[language]} <span className="text-gray-500">/ {skill.signal[language]}</span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Certifications & About Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-mono font-bold mb-2">
                {t.skills.certifiedA} <span className="text-white">{t.skills.certifiedB}</span>
              </h2>
              <p className="text-gray-400">{t.skills.certifiedSubtitle}</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 mb-12" role="list" aria-label={t.skills.certsLabel}>
              {CERTIFICATIONS.map((cert, index) => {
                const tone = certificationTopics[cert.topic];
                const CertIcon = tone.Icon;

                return (
                <motion.article
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative overflow-hidden rounded-xl border bg-black/45 p-5 pr-28 transition-all hover:bg-black/60 glass-border-glow ${cert.featured ? 'border-emerald-300/45 shadow-[0_0_30px_rgba(110,231,183,0.08)]' : tone.border} ${tone.glow}`}
                  role="listitem"
                >
                  <div className={`absolute left-0 top-0 h-full w-1 ${tone.rail}`} aria-hidden="true" />
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded border border-green-400/25 bg-green-400/10 px-2 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-green-300">
                    <CheckCircle className="h-3 w-3" aria-hidden="true" />
                    {t.skills.verified}
                  </span>

                  <div className="flex items-start gap-4">
                    <div className={`mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border ${tone.icon}`} aria-hidden="true">
                      <CertIcon className="w-6 h-6" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-3">
                        <h3 className={`font-mono font-bold leading-snug text-white transition-colors ${cert.featured ? 'text-lg group-hover:text-emerald-200' : 'text-base group-hover:text-cyber-primary'}`}>
                          {cert.name}
                        </h3>
                        <span className={`mt-2 inline-flex rounded-full border px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider ${tone.issuer}`}>
                          {cert.issuer}
                        </span>
                      </div>

                      <div className="mb-3 flex flex-wrap gap-3 text-xs text-gray-400">
                        <span className="inline-flex items-center gap-1 font-mono">
                          <CalendarDays className="h-3.5 w-3.5 text-cyber-secondary" aria-hidden="true" />
                          {t.skills.issued}: {cert.issued[language]}
                        </span>
                        {cert.expires && (
                          <span className="inline-flex items-center gap-1 font-mono">
                            <CalendarDays className="h-3.5 w-3.5 text-cyber-secondary" aria-hidden="true" />
                            {t.skills.expires}: {cert.expires[language]}
                          </span>
                        )}
                      </div>

                      {cert.credentialId && (
                        <div className="mb-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                          <p className="text-[11px] font-mono uppercase tracking-wider text-gray-500">{t.skills.credentialId}</p>
                          <p className="break-all font-mono text-xs text-gray-300">{cert.credentialId}</p>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {cert.skills[language].split(',').map((skill) => (
                          <span
                            key={`${cert.name}-${skill.trim()}`}
                            className="rounded border border-cyber-primary/30 px-2 py-1 text-xs font-mono text-cyber-primary"
                          >
                            {skill.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-6 border-l-2 border-cyber-primary bg-gradient-to-r from-cyber-primary/10 to-transparent"
            >
              <h3 className="font-mono font-bold text-xl mb-4">{t.skills.objectiveTitle}</h3>
              <p className="text-gray-300 italic leading-relaxed">
                "{SITE_CONFIG.aboutMe[language]}"
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default memo(Skills);
