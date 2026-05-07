import React, { memo, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderOpen, GitBranch, Layers, Terminal, TrendingUp, Trophy } from 'lucide-react';
import ProjectFilters from '../components/ProjectFilters';
import { PROJECTS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { ProjectCategory } from '../types';

const AllProjects: React.FC = () => {
    const { language, t } = useLanguage();
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
                className="text-center italic text-gray-400 mb-12 px-4"
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
                        whileHover={{
                            y: -6,
                            transition: { duration: 0.3 }
                        }}
                        className="group relative bg-black/75 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden flex flex-col motion-reduce:hover:transform-none hover:border-cyan-400/45 hover:shadow-[0_0_30px_rgba(0,243,255,0.12)] transition-all duration-300"
                        role="listitem"
                    >
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" aria-hidden="true" />

                        {/* Header area: dark repository header */}
                        <div className="w-full h-24 bg-gradient-to-br from-black via-cyan-950/30 to-purple-950/20 rounded-t-xl flex items-center justify-center border-b border-white/10" style={{ height: '96px', minHeight: '96px', flexShrink: 0 }}>
                            <div className="rounded-xl border border-cyan-400/25 bg-cyan-400/10 p-4 text-cyan-300">
                                {project.name === 'SmartCompound' && <TrendingUp className="w-9 h-9 drop-shadow-lg" />}
                                {project.name === 'CareerPath-Proiezioni' && <GitBranch className="w-9 h-9 drop-shadow-lg" />}
                                {project.name === 'Organizer-Foto-Pro' && <FolderOpen className="w-9 h-9 drop-shadow-lg" />}
                                {project.name === 'Torneo FIFA 2025' && <Trophy className="w-9 h-9 drop-shadow-lg" />}
                                {project.name === 'Portfolio Diell-Guido' && <FolderOpen className="w-9 h-9 drop-shadow-lg" />}
                            </div>
                        </div>

                        {/* Body */}
                        <div className="p-6 flex flex-col flex-1">
                            {/* Title */}
                            <h3 className="text-white font-bold text-xl mb-2 font-mono">
                                {project.name}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm mb-4">
                                {project.description[language]}
                            </p>

                            <span className="inline-flex mb-4 w-fit rounded border border-purple-400/30 bg-purple-400/10 px-2 py-1 text-xs font-mono text-purple-300">
                                {project.category}
                            </span>

                            {/* Tech badges */}
                            <div className="flex flex-wrap gap-2 mb-auto">
                                {project.technologies?.map((tech) => (
                                    <span
                                        key={tech}
                                        className="inline-flex items-center gap-1 border border-white/10 bg-white/5 text-gray-300 text-xs px-2 py-1 rounded font-mono"
                                    >
                                        <Layers className="h-3 w-3 text-cyan-400" aria-hidden="true" />
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* VIEW PROJECT button */}
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full items-center justify-center gap-2 text-center border border-cyan-400/40 text-cyan-300 bg-cyan-400/5 hover:bg-cyan-400 hover:text-black transition-all duration-300 mt-5 py-2 rounded font-mono font-bold text-sm tracking-wide focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
                            >
                                <Terminal className="h-4 w-4" aria-hidden="true" />
                                {t.projects.viewProject}
                                <ExternalLink className="h-4 w-4" aria-hidden="true" />
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
