import React, { memo } from 'react';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, CheckCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience: React.FC = () => {
  const { language, t } = useLanguage();
  const featuredExperience = EXPERIENCE.find((exp) => exp.featured) ?? EXPERIENCE[0];
  const secondaryExperiences = EXPERIENCE.filter((exp) => exp.id !== featuredExperience.id);

  return (
    <section id="experience" className="py-20 relative" aria-labelledby="experience-heading">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 id="experience-heading" className="text-4xl md:text-5xl font-mono font-bold mb-4">
            {t.experience.titleA} <span className="text-cyber-primary">{t.experience.titleB}</span>
          </h2>
          <div className="h-1 w-20 bg-cyber-secondary rounded-full" aria-hidden="true" />
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative mb-16 overflow-hidden rounded-2xl border border-cyber-primary/35 bg-black/65 p-6 md:p-8 shadow-[0_0_40px_rgba(0,243,255,0.08)] glass-border-glow"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyber-primary to-transparent" aria-hidden="true" />
          <div className="absolute right-0 top-0 h-32 w-32 bg-cyber-primary/10 blur-3xl" aria-hidden="true" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyber-primary/30 bg-cyber-primary/10 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-cyber-primary">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                {t.experience.featured}
              </div>

              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-mono text-2xl font-bold text-white md:text-3xl">
                    {featuredExperience.role[language]}
                  </h3>
                  <p className="mt-2 text-xl text-gray-300">{featuredExperience.company}</p>
                </div>
                <Briefcase className="h-8 w-8 text-cyber-secondary" aria-hidden="true" />
              </div>

              <div className="mb-6 flex flex-wrap gap-4 text-sm text-gray-400 font-mono">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" aria-hidden="true" /> {featuredExperience.period[language]}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" aria-hidden="true" /> {featuredExperience.location[language]}
                </span>
              </div>

              <ul className="space-y-3">
                {featuredExperience.description[language].map((desc) => (
                  <li key={desc} className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyber-primary" aria-hidden="true" />
                    {desc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/40 p-5">
              <h4 className="mb-4 font-mono text-sm font-bold uppercase tracking-[0.18em] text-white">
                {t.experience.learned}
              </h4>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {featuredExperience.takeaways?.[language].map((takeaway) => (
                  <div key={takeaway} className="rounded-lg border border-cyber-primary/20 bg-cyber-primary/5 px-3 py-3 font-mono text-sm text-cyber-primary">
                    {takeaway}
                  </div>
                ))}
              </div>

              {featuredExperience.tags && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {featuredExperience.tags.map((tag) => (
                    <span key={tag} className="rounded border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-mono uppercase tracking-wider text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.article>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-cyber-primary via-purple-500 to-transparent opacity-30" aria-hidden="true" />

          <div className="space-y-12" role="list" aria-label={t.experience.label}>
            {secondaryExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } gap-8`}
                role="listitem"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-black border-2 border-cyber-primary rounded-full z-10 mt-6 shadow-[0_0_10px_#00f3ff]" aria-hidden="true" />

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-8">
                  <article className="group relative p-6 bg-cyber-card backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-cyber-primary/30 transition-all duration-300">
                    {/* Hover Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/5 to-cyber-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyber-primary transition-colors">
                          {exp.role[language]}
                        </h3>
                        {exp.type === 'tech' && (
                          <Briefcase className="w-4 h-4 text-cyber-secondary flex-shrink-0" aria-hidden="true" />
                        )}
                      </div>
                      
                      <h4 className="text-lg text-gray-300 mb-4">{exp.company}</h4>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-mono mb-6">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" aria-hidden="true" /> {exp.period[language]}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" aria-hidden="true" /> {exp.location[language]}
                        </span>
                      </div>

                      <ul className="space-y-2">
                        {exp.description[language].map((desc, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-cyber-primary rounded-full flex-shrink-0" aria-hidden="true" />
                            {desc}
                          </li>
                        ))}
                      </ul>

                      {exp.tags && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span key={tag} className="rounded border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-mono uppercase tracking-wider text-gray-400">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                </div>
                
                {/* Empty side for desktop layout balance */}
                <div className="hidden md:block w-1/2" aria-hidden="true" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Experience);
