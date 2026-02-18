import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Cpu, Globe, Terminal } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { SITE_CONFIG } from '../constants';
import DecodeText from './DecodeText';

const Hero: React.FC = () => {
  const skillCards = [
    { icon: Terminal, text: "System Admin", href: "/#skills", label: "View system administration skills" },
    { icon: Globe, text: "Web Development", href: "/#skills", label: "View web development skills" },
    { icon: Cpu, text: "Hardware Ops", href: "/#skills", label: "View hardware operations skills" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-32 md:py-20" aria-label="Hero section">
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-primary/20 rounded-full blur-[128px] animate-pulse-slow pointer-events-none motion-reduce:animate-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-secondary/20 rounded-full blur-[128px] animate-pulse-slow delay-1000 pointer-events-none motion-reduce:animate-none" aria-hidden="true" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-block"
        >
          <span className="px-4 py-2 rounded-full border border-cyber-primary/30 bg-cyber-primary/10 text-cyber-primary font-mono text-sm shadow-[0_0_15px_rgba(0,243,255,0.3)]" role="status" aria-label={`Current status: ${SITE_CONFIG.status}`}>
            STATUS: {SITE_CONFIG.status}
          </span>
        </motion.div>

        {/* Nome con effetto Decode Matrix */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-8xl font-bold font-mono mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 uppercase leading-tight"
        >
          <DecodeText text={SITE_CONFIG.name} delay={500} />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          <p className="mb-2 font-medium text-white">{SITE_CONFIG.role}</p>
          <p className="text-cyber-primary font-light">{SITE_CONFIG.heroDescription}</p>
        </motion.div>

        {/* Functional Buttons / Cards con effetti glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full max-w-3xl" role="list" aria-label="Quick navigation to skills">
          {skillCards.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (i * 0.2) }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              role="listitem"
            >
              <HashLink
                to={item.href}
                smooth
                aria-label={item.label}
                className="flex flex-col md:flex-row items-center justify-center gap-3 p-6 glass glass-border-glow rounded-xl hover:bg-white/10 hover:border-cyber-primary/50 transition-all cursor-pointer group shadow-lg w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-primary circuit-button"
              >
                <item.icon className="w-6 h-6 text-gray-400 group-hover:text-cyber-primary transition-colors" aria-hidden="true" />
                <span className="font-mono text-sm font-bold text-gray-300 group-hover:text-white uppercase tracking-wider">{item.text}</span>
              </HashLink>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-4"
        >
          <HashLink to="/#experience" smooth className="flex flex-col items-center gap-3 text-gray-500 hover:text-white transition-colors group" aria-label="Scroll to experience section">
            <span className="text-xs font-mono tracking-[0.2em] group-hover:text-cyber-primary transition-colors">SCROLL TO EXPLORE</span>
            <ChevronDown className="w-6 h-6 animate-bounce text-cyber-primary motion-reduce:animate-none" aria-hidden="true" />
          </HashLink>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Hero);
