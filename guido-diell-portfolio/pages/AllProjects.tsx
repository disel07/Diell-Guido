import React, { memo, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, GitBranch, FolderOpen, Trophy } from 'lucide-react';
import { PROJECTS } from '../constants';
import ProjectFilters from '../components/ProjectFilters';
import { useLanguage } from '../contexts/LanguageContext';
import { ProjectCategory } from '../types';
import { usePerformanceMode } from '../contexts/PerformanceContext';

const AllProjects: React.FC = () => {
    const { language, t } = useLanguage();
    const { autoPerformanceMode } = usePerformanceMode();
    const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');
    const projectsList = useMemo(
        () => PROJECTS.filter((project) => activeCategory === 'All' || project.category === activeCategory),
        [activeCategory]
    );

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
        <div className="min-h-screen bg-transparent">
            <div style={{ height: '120px' }} />

            {/* Row 2: Title */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center m-0 text-3xl md:text-5xl font-mono font-bold text-white leading-tight"
            >
                {t.projects.allTitleA} <span className="text-cyber-primary text-glow">{t.projects.allTitleB}</span>
            </motion.h1>

            {/* Row 3: Cyan horizontal line */}
            <div className="w-full h-px bg-cyan-500 mb-8" />

            {/* Row 4: Quote */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                className="text-center italic text-gray-400 mb-12"
            >
                "{t.projects.quote}"
            </motion.p>

            <ProjectFilters activeCategory={activeCategory} onChange={setActiveCategory} />

            {/* Row 5: Project grid */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4 sm:px-8"
                role="list"
                aria-label={t.projects.allLabel}
            >
                {projectsList.map((project) => (
                    <motion.div
                        key={project.name}
                        variants={item}
                        whileHover={autoPerformanceMode ? undefined : {
                            y: -6,
                            transition: { duration: 0.3 }
                        }}
                        className="bg-black/40 backdrop-blur-md rounded-xl border border-cyan-500/30 overflow-hidden flex flex-col motion-reduce:hover:transform-none"
                        role="listitem"
                    >
                        {/* Header area: gradient from cyan to purple */}
                        <div className="w-full h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-t-xl flex items-center justify-center" style={{ height: '96px', minHeight: '96px', flexShrink: 0 }}>
                            {project.name === 'SmartCompound' && <TrendingUp className="w-10 h-10 text-white drop-shadow-lg" />}
                            {project.name === 'CareerPath-Proiezioni' && <GitBranch className="w-10 h-10 text-white drop-shadow-lg" />}
                            {project.name === 'Organizer-Foto-Pro' && <FolderOpen className="w-10 h-10 text-white drop-shadow-lg" />}
                            {project.name === 'Torneo FIFA 2025' && <Trophy className="w-10 h-10 text-white drop-shadow-lg" />}
                            {project.name === 'Portfolio Diell-Guido' && <FolderOpen className="w-10 h-10 text-white drop-shadow-lg" />}
                        </div>

                        {/* Body */}
                        <div className="p-6">
                            {/* Title */}
                            <h3 className="text-white font-bold text-xl mb-2 font-mono">
                                {project.name}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm mb-4">
                                {project.description[language]}
                            </p>

                            {/* Tech badges */}
                            <div className="flex flex-wrap gap-2">
                                {project.technologies?.map((tech) => (
                                    <span
                                        key={tech}
                                        className="border border-cyan-400 text-cyan-400 text-xs px-2 py-1 rounded font-mono"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* VIEW PROJECT button */}
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center border border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-400 hover:text-black transition-all duration-300 mt-4 py-2 rounded font-mono font-bold text-sm tracking-wide focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
                            >
                                {t.projects.viewProject}
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {projectsList.length === 0 && (
                <p className="text-center text-gray-400 mt-8">{t.projects.empty}</p>
            )}
        </div>
    );
};

export default memo(AllProjects);
