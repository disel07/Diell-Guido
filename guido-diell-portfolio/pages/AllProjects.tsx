import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Zap } from 'lucide-react';
import { PROJECTS } from '../constants';

const AllProjects: React.FC = () => {
    const projectsList = PROJECTS.filter(p => p.name !== 'Portfolio Diell-Guido');

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-mono font-bold text-white mb-6">
                        FULL PROJECT <span className="text-cyber-primary">CATALOG</span>
                    </h1>
                    <div className="h-1 w-32 bg-cyber-primary mx-auto rounded-full shadow-[0_0_15px_#00f3ff]" aria-hidden="true" />
                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
                        Una collezione completa dei miei lavori, esperimenti e applicazioni.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    role="list"
                    aria-label="All projects"
                >
                    {projectsList.map((project) => (
                        <motion.div
                            key={project.name}
                            variants={item}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="group relative bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-cyber-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] flex flex-col h-full motion-reduce:hover:transform-none"
                            role="listitem"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                                <ExternalLink className="text-cyber-primary w-6 h-6" />
                            </div>

                            <div className="p-8 flex flex-col h-full">
                                <div className="mb-6 self-start p-3 bg-cyber-primary/10 rounded-lg text-cyber-primary group-hover:bg-cyber-primary group-hover:text-black transition-all duration-300" aria-hidden="true">
                                    <Zap className="w-6 h-6" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 font-mono group-hover:text-cyber-primary transition-colors">
                                    {project.name}
                                </h3>

                                <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`View ${project.name} project (opens in new tab)`}
                                    className="inline-flex items-center justify-center w-full py-4 bg-white/5 hover:bg-cyber-primary hover:text-black text-white rounded-lg transition-all duration-300 font-mono font-bold tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-primary"
                                >
                                    VIEW PROJECT
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default memo(AllProjects);
