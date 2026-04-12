import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, GitBranch, FolderOpen, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const AllProjects: React.FC = () => {
    const projectsList = [
        ...PROJECTS.filter(p => p.name !== 'Portfolio Diell-Guido').map(p => {
            if (p.name === 'SmartCompound') return { ...p, description: "Turn your daily savings into an empire with compound interest simulation." };
            if (p.name === 'CareerPath-Proiezioni') return { ...p, description: "Life simulator. Plan two parallel career paths and compare your future." };
            return p;
        }),
        {
            name: "Organizer-Foto-Pro",
            description: "The safest and fastest way to organize thousands of photos and videos in seconds.",
            technologies: ["Python", "CLI"],
            url: "https://github.com/disel07/Organizer-Foto-Pro"
        },
        {
            name: "Torneo FIFA 2025",
            description: "Leaderboard and schedule management system for a FIFA 2025 tournament.",
            technologies: ["HTML", "CSS", "JavaScript", "Python"],
            url: "https://disel07.github.io/torneo-fifa-2025/"
        }
    ];

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
                FULL PROJECT <span className="text-cyber-primary text-glow">CATALOG</span>
            </motion.h1>

            {/* Row 3: Cyan horizontal line */}
            <div className="w-full h-px bg-cyan-500 mb-8" />

            {/* Row 4: Quote */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                className="text-center italic text-gray-400 mb-12"
            >
                "The best way to predict the future is to invent it."
            </motion.p>

            {/* Row 5: Project grid */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', maxWidth: '896px', margin: '0 auto', padding: '0 32px' }}
                role="list"
                aria-label="All projects"
            >
                {projectsList.map((project) => (
                    <motion.div
                        key={project.name}
                        variants={item}
                        whileHover={{
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
                        </div>

                        {/* Body */}
                        <div className="p-6">
                            {/* Title */}
                            <h3 className="text-white font-bold text-xl mb-2 font-mono">
                                {project.name}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm mb-4">
                                {project.description}
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
                                VIEW PROJECT
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default memo(AllProjects);
