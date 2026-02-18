import React, { memo } from 'react';
import { SKILLS, CERTIFICATIONS, SITE_CONFIG } from '../constants';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Skills: React.FC = () => {
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
                TECHNICAL <span className="text-cyber-secondary">ARSENAL</span>
              </h2>
              <p className="text-gray-400">Proficiency level loaded from system metrics.</p>
            </motion.div>

            <div className="space-y-8" role="list" aria-label="Technical skills">
              {SKILLS.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  role="listitem"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-mono text-sm font-bold tracking-wider" id={`skill-${index}`}>
                      {skill.name.toUpperCase()}
                    </span>
                    <span className="font-mono text-xs text-cyber-primary" aria-label={`${skill.level} percent proficiency`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div 
                    className="h-2 bg-gray-800 rounded-full overflow-hidden"
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-labelledby={`skill-${index}`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full rounded-full ${
                        skill.category === 'Code' ? 'bg-cyber-primary' : 
                        skill.category === 'Tools' ? 'bg-cyber-secondary' : 'bg-white'
                      } relative motion-reduce:animate-none`}
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-full animate-pulse bg-white/20 motion-reduce:animate-none" aria-hidden="true" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
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
                CERTIFIED <span className="text-white">DATA</span>
              </h2>
              <p className="text-gray-400">Verified achievements and personal objectives.</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 mb-12" role="list" aria-label="Certifications">
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 border border-cyber-secondary/20 bg-cyber-secondary/5 rounded-lg hover:bg-cyber-secondary/10 transition-colors"
                  role="listitem"
                >
                  <CheckCircle className="text-cyber-secondary w-6 h-6 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-white">{cert.name}</h3>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-6 border-l-2 border-cyber-primary bg-gradient-to-r from-cyber-primary/10 to-transparent"
            >
              <h3 className="font-mono font-bold text-xl mb-4">SYSTEM OBJECTIVE</h3>
              <p className="text-gray-300 italic leading-relaxed">
                "{SITE_CONFIG.aboutMe}"
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default memo(Skills);
