import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, GraduationCap, HeartHandshake, MapPin } from 'lucide-react';
import { EDUCATION, VOLUNTEERING } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Education: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-black/40 to-transparent" aria-labelledby="education-heading">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 id="education-heading" className="text-4xl md:text-5xl font-mono font-bold mb-4">
            {t.education.titleA} <span className="text-cyber-primary">{t.education.titleB}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">{t.education.subtitle}</p>
        </motion.div>

        <div className="space-y-6" role="list" aria-label={t.education.label}>
          {EDUCATION.map((item) => (
            <motion.article
              key={item.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass glass-border-glow rounded-xl border border-white/10 p-6"
              role="listitem"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-cyber-primary/10 text-cyber-primary flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.school}</h3>
                    <p className="text-cyber-primary font-medium mt-1">{item.degree[language]}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mt-4 max-w-3xl">{item.description[language]}</p>
                  </div>
                </div>

                <div className="lg:text-right text-sm text-gray-400 font-mono space-y-2 flex-shrink-0">
                  <p className="flex lg:justify-end items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-cyber-secondary" aria-hidden="true" />
                    {item.period[language]}
                  </p>
                  <p className="flex lg:justify-end items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyber-secondary" aria-hidden="true" />
                    {item.location[language]}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-3">{t.education.focus}</p>
                <div className="flex flex-wrap gap-2">
                  {item.focus.map((focus) => (
                    <span key={focus} className="rounded border border-cyber-primary/30 px-2 py-1 text-xs font-mono text-cyber-primary">
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}

          {VOLUNTEERING.map((item) => (
            <motion.article
              key={item.organization}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass glass-border-glow rounded-xl border border-white/10 p-6"
              role="listitem"
            >
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-cyber-secondary/10 text-cyber-secondary flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">{t.education.volunteer}</p>
                  <h3 className="text-xl font-bold text-white">{item.role[language]}</h3>
                  <p className="text-cyber-secondary font-medium mt-1">{item.organization}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-mono my-4">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="w-3 h-3" aria-hidden="true" /> {item.period[language]}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" aria-hidden="true" /> {item.location[language]}
                    </span>
                  </div>
                  <p className="text-sm text-cyber-secondary mb-2">{item.cause[language]}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description[language]}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Education);
