import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScanlineOverlay: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Nascondi su prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsVisible(!mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsVisible(!e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Scanline principale che scorre */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-primary/20 to-transparent"
        initial={{ top: '-5%' }}
        animate={{ top: '105%' }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Linee orizzontali statiche (effetto CRT) */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 243, 255, 0.1) 2px, rgba(0, 243, 255, 0.1) 4px)',
          backgroundSize: '100% 4px',
        }}
      />

      {/* Vignetta ai bordi */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, 0.4) 100%)',
        }}
      />

      {/* Flicker occasionale */}
      <motion.div
        className="absolute inset-0 bg-white/5"
        animate={{
          opacity: [0, 0, 0.02, 0, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 5,
          times: [0, 0.8, 0.9, 0.95, 1],
        }}
      />
    </div>
  );
};

export default ScanlineOverlay;
