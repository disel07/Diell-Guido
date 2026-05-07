import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Award, LockKeyhole, Radio } from 'lucide-react';
import { AWARDS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Awards: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="awards" className="py-20 relative" aria-labelledby="awards-heading">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 text-cyber-secondary font-mono text-xs font-bold tracking-[0.2em] mb-4">
            <Radio className="w-4 h-4" aria-hidden="true" />
            {t.awards.confidential}
          </div>
          <h2 id="awards-heading" className="text-4xl md:text-5xl font-mono font-bold mb-4">
            {t.awards.titleA} <span className="text-cyber-primary">{t.awards.titleB}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">{t.awards.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5" role="list" aria-label={t.awards.label}>
          {AWARDS.map((award, index) => (
            <motion.article
              key={award.title.en}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-cyber-secondary/30 bg-black/60 p-6 md:p-7 glass-border-glow"
              role="listitem"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyber-secondary to-transparent opacity-80" aria-hidden="true" />
              <div className="absolute right-0 top-0 h-28 w-28 bg-cyber-secondary/10 blur-3xl" aria-hidden="true" />

              <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-cyber-secondary/30 bg-cyber-secondary/10 text-cyber-secondary" aria-hidden="true">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-400/10 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-green-300">
                      <LockKeyhole className="h-3.5 w-3.5" aria-hidden="true" />
                      {award.status[language]}
                    </div>
                    <h3 className="font-mono text-xl font-bold text-white group-hover:text-cyber-secondary transition-colors">
                      {award.title[language]}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">{award.description[language]}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
                  {award.tags.map((tag) => (
                    <span key={tag} className="rounded border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-mono uppercase tracking-wider text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Awards);
