import React, { memo } from 'react';
import { motion } from 'framer-motion';
import {
  Blocks,
  Code2,
  Cpu,
  Radio,
  ServerCog,
  ShieldCheck,
  Terminal,
  type LucideIcon,
} from 'lucide-react';
import { CURRENTLY_LEARNING } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { LearningIconKey } from '../types';

const learningIcons: Record<
  LearningIconKey,
  {
    Icon: LucideIcon;
    tone: string;
  }
> = {
  'react-testing': {
    Icon: Code2,
    tone: 'border-cyber-primary/30 bg-cyber-primary/10 text-cyber-primary',
  },
  'python-backend': {
    Icon: ServerCog,
    tone: 'border-cyber-secondary/30 bg-cyber-secondary/10 text-cyber-secondary',
  },
  linux: {
    Icon: Terminal,
    tone: 'border-emerald-300/30 bg-emerald-300/10 text-emerald-300',
  },
  network: {
    Icon: ShieldCheck,
    tone: 'border-sky-300/30 bg-sky-300/10 text-sky-200',
  },
  hardware: {
    Icon: Cpu,
    tone: 'border-white/20 bg-white/10 text-gray-100',
  },
  blockchain: {
    Icon: Blocks,
    tone: 'border-cyber-secondary/30 bg-cyber-secondary/10 text-cyber-secondary',
  },
};

const CurrentlyLearning: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="learning" className="py-20 relative" aria-labelledby="learning-heading">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 text-cyber-primary font-mono text-xs font-bold tracking-[0.2em] mb-4">
            <Radio className="w-4 h-4" aria-hidden="true" />
            {t.learning.badge}
          </div>
          <h2 id="learning-heading" className="text-4xl md:text-5xl font-mono font-bold mb-4">
            {t.learning.titleA} <span className="text-cyber-secondary">{t.learning.titleB}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">{t.learning.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5" role="list" aria-label={t.learning.label}>
          {CURRENTLY_LEARNING.map((item, index) => {
            const learningIcon = learningIcons[item.iconKey];
            const LearningIcon = learningIcon.Icon;

            return (
            <motion.article
              key={item.title.en}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 p-5 backdrop-blur-md glass-border-glow hover:border-cyber-primary/30"
              role="listitem"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyber-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

              <div className="flex items-start justify-between gap-4 mb-4">
                <div className={`rounded-lg border p-3 ${learningIcon.tone}`} aria-hidden="true">
                  <LearningIcon className="w-5 h-5" />
                </div>
                <span className="rounded-full border border-cyber-secondary/30 bg-black/50 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-cyber-secondary">
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default memo(CurrentlyLearning);
