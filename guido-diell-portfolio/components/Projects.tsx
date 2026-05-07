import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, GitBranch, Layers, Terminal, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Projects: React.FC = () => {
  const { language, t } = useLanguage();
  const featuredProjects = PROJECTS.filter((project) => project.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden" aria-labelledby="projects-heading">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyber-primary/5 via-transparent to-transparent opacity-30" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-mono font-bold text-white mb-4">
            {t.projects.featuredA} <span className="text-cyber-primary text-glow">{t.projects.featuredB}</span>
          </h2>
          <div className="h-1 w-24 bg-cyber-primary mx-auto rounded-full shadow-[0_0_10px_#00f3ff]" aria-hidden="true" />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            {t.projects.featuredSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {featuredProjects.map((project, index) => {
            const isPortfolio = project.name === 'Portfolio Diell-Guido';
            const ProjectIcon = project.name === 'SmartCompound' ? TrendingUp : project.name === 'CareerPath-Proiezioni' ? GitBranch : FolderGit2;

            if (isPortfolio) {
              return (
                <motion.div
                  key="more-projects"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  role="listitem"
                >
                  <Link
                    to="/projects/all"
                    className="group relative overflow-hidden rounded-xl border border-cyber-primary/25 bg-black/70 p-8 text-center transition-all duration-300 hover:border-cyber-primary/60 hover:shadow-[0_0_30px_rgba(0,243,255,0.16)] flex flex-col h-full justify-center items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-primary card-glitch hover-lift"
                    aria-label={t.projects.moreLabel}
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyber-primary to-transparent opacity-70" aria-hidden="true" />
                    <div className="p-4 bg-cyber-primary/10 border border-cyber-primary/25 rounded-lg text-cyber-primary mb-6 group-hover:scale-105 transition-transform duration-300" aria-hidden="true">
                      <Zap className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-mono group-hover:text-cyber-primary transition-colors">
                      {t.projects.moreTitle}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {t.projects.moreDescription}
                    </p>
                  </Link>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/70 transition-all duration-300 hover:border-cyber-primary/45 hover:shadow-[0_0_30px_rgba(0,243,255,0.14)] flex flex-col h-full hover-lift card-glitch"
                role="listitem"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyber-primary/0 via-cyber-primary/70 to-cyber-secondary/0" aria-hidden="true" />
                <div className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-cyber-primary/10 border border-cyber-primary/25 rounded-lg text-cyber-primary group-hover:text-white group-hover:bg-cyber-primary/80 transition-colors duration-300" aria-hidden="true">
                        <ProjectIcon className="w-6 h-6" />
                      </div>
                      <span className="rounded border border-cyber-secondary/25 bg-cyber-secondary/10 px-2 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-cyber-secondary">
                        {project.category}
                      </span>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.projects.visitLabel} ${project.name} (opens in new tab)`}
                      className="text-gray-500 hover:text-white transition-colors p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-primary rounded"
                    >
                      <ExternalLink className="w-5 h-5" aria-hidden="true" />
                    </a>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-mono group-hover:text-cyber-primary transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-gray-400 text-sm mb-5 flex-grow">
                    {project.description[language]}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={`${project.name}-${tech}`} className="inline-flex items-center gap-1 rounded border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-mono text-gray-300">
                        <Layers className="h-3 w-3 text-cyber-primary" aria-hidden="true" />
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.projects.viewProject}: ${project.name} (opens in new tab)`}
                    className="inline-flex items-center justify-center w-full py-3 border border-cyber-primary/30 bg-cyber-primary/5 hover:bg-cyber-primary hover:text-black text-cyber-primary rounded-lg transition-all duration-300 font-mono text-sm font-bold gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-primary circuit-button"
                  >
                    <Terminal className="w-4 h-4" aria-hidden="true" /> {t.projects.viewProject}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default memo(Projects);
