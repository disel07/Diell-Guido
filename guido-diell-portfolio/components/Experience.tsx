import React from 'react';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            EXPERIENCE <span className="text-cyber-primary">LOG</span>
          </h2>
          <div className="h-1 w-20 bg-cyber-secondary rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-cyber-primary via-purple-500 to-transparent opacity-30"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-black border-2 border-cyber-primary rounded-full z-10 mt-6 shadow-[0_0_10px_#00f3ff]"></div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-8">
                  <div className="group relative p-6 bg-cyber-card backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-cyber-primary/30 transition-all duration-300">
                    {/* Hover Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/5 to-cyber-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyber-primary transition-colors">
                          {exp.role}
                        </h3>
                        {exp.type === 'tech' && (
                          <Briefcase className="w-4 h-4 text-cyber-secondary" />
                        )}
                      </div>
                      
                      <h4 className="text-lg text-gray-300 mb-4">{exp.company}</h4>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-mono mb-6">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {exp.location}
                        </span>
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-cyber-primary rounded-full"></span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Empty side for desktop layout balance */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;