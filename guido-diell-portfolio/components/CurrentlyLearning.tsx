import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Radio } from 'lucide-react';
import { CURRENTLY_LEARNING } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { usePerformanceMode } from '../contexts/PerformanceContext';

const CurrentlyLearning: React.FC = () => {
  const { language, t } = useLanguage();
  const { autoPerformanceMode } = usePerformanceMode();

  return (
    <section id="learning" className="py-20 relative" aria-labelledby="learning-heading">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: autoPerformanceMode ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="section-kicker mb-4">
            <Radio className="w-4 h-4" aria-hidden="true" />
            {t.learning.badge}
          </div>
          <h2 id="learning-heading" className="text-4xl md:text-5xl font-mono font-bold mb-4">
            {t.learning.titleA} <span className="text-cyber-secondary">{t.learning.titleB}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl leading-relaxed">{t.learning.subtitle}</p>
          <div className="section-rule mt-8 max-w-xl" aria-hidden="true" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5" role="list" aria-label={t.learning.label}>
          {CURRENTLY_LEARNING.map((item, index) => (
            <motion.article
              key={item.title.en}
              initial={{ opacity: 0, y: autoPerformanceMode ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: autoPerformanceMode ? 0 : index * 0.06 }}
              className="surface-panel glass-border-glow rounded-lg p-5"
              role="listitem"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-3 rounded-lg bg-cyber-primary/10 text-cyber-primary" aria-hidden="true">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="rounded-full border border-cyber-secondary/30 bg-cyber-secondary/10 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-cyber-secondary">
                  {item.status[language]}
                </span>
              </div>

              <h3 className="font-mono text-lg font-bold text-white mb-3">{item.title[language]}</h3>
              <p className="text-sm leading-relaxed text-gray-400 mb-5">{item.description[language]}</p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded border border-cyber-primary/30 px-2 py-1 text-xs font-mono text-cyber-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(CurrentlyLearning);
