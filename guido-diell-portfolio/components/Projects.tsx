import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Zap } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
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
            FEATURED <span className="text-cyber-primary text-glow">PROJECTS</span>
          </h2>
          <div className="h-1 w-24 bg-cyber-primary mx-auto rounded-full shadow-[0_0_10px_#00f3ff]" aria-hidden="true" />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Innovazione e sviluppo. Esplora i miei ultimi lavori.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {PROJECTS.map((project, index) => {
            const isPortfolio = project.name === 'Portfolio Diell-Guido';

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
                  <a
                    href="#/projects"
                    className="group relative glass glass-border-glow rounded-xl overflow-hidden hover:bg-cyber-primary/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.2)] flex flex-col h-full justify-center items-center text-center p-8 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-primary card-glitch hover-lift"
                    aria-label="View all projects"
                  >
                    <div className="p-4 bg-cyber-primary/20 rounded-full text-cyber-primary mb-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                      <Zap className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-mono group-hover:text-cyber-primary transition-colors">
                      ALTRI PROGETTI
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Esplora l'intero catalogo dei miei lavori e esperimenti.
                    </p>
                  </a>
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
                className="group relative glass glass-border-glow rounded-xl overflow-hidden hover:border-cyber-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] flex flex-col h-full hover-lift card-glitch"
                role="listitem"
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-cyber-primary/10 rounded-lg text-cyber-primary group-hover:text-white group-hover:bg-cyber-primary transition-colors duration-300" aria-hidden="true">
                      <Zap className="w-6 h-6" />
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.name} (opens in new tab)`}
                      className="text-gray-500 hover:text-white transition-colors p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-primary rounded"
                    >
                      <ExternalLink className="w-5 h-5" aria-hidden="true" />
                    </a>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-mono group-hover:text-cyber-primary transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-gray-400 text-sm mb-6 flex-grow">
                    {project.description}
                  </p>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} project (opens in new tab)`}
                    className="inline-flex items-center justify-center w-full py-3 bg-white/5 hover:bg-cyber-primary hover:text-black text-white rounded-lg transition-all duration-300 font-mono text-sm font-bold gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-primary circuit-button"
                  >
                    VIEW PROJECT <ExternalLink className="w-4 h-4" aria-hidden="true" />
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
