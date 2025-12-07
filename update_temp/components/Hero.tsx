import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Cpu, Globe, Terminal } from 'lucide-react';
import { SITE_CONFIG } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-32 md:py-20">
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-primary/20 rounded-full blur-[128px] animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-secondary/20 rounded-full blur-[128px] animate-pulse-slow delay-1000 pointer-events-none"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-block"
        >
          <span className="px-4 py-2 rounded-full border border-cyber-primary/30 bg-cyber-primary/10 text-cyber-primary font-mono text-sm shadow-[0_0_15px_rgba(0,243,255,0.3)]">
            STATUS: {SITE_CONFIG.status}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-8xl font-bold font-mono mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 uppercase leading-tight"
        >
          {SITE_CONFIG.name}
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

        {/* Functional Buttons / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full max-w-3xl">
          {[
            { icon: Terminal, text: "System Admin", href: "#skills" },
            { icon: Globe, text: "Web Development", href: "#skills" },
            { icon: Cpu, text: "Hardware Ops", href: "#skills" }
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (i * 0.2) }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(0, 243, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col md:flex-row items-center justify-center gap-3 p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all cursor-pointer group shadow-lg"
            >
              <item.icon className="w-6 h-6 text-gray-400 group-hover:text-cyber-primary transition-colors" />
              <span className="font-mono text-sm font-bold text-gray-300 group-hover:text-white uppercase tracking-wider">{item.text}</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-4" // Use margin-top instead of absolute positioning to prevent overlap
        >
          <a href="#experience" className="flex flex-col items-center gap-3 text-gray-500 hover:text-white transition-colors group">
            <span className="text-xs font-mono tracking-[0.2em] group-hover:text-cyber-primary transition-colors">SCROLL TO EXPLORE</span>
            <ChevronDown className="w-6 h-6 animate-bounce text-cyber-primary" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;