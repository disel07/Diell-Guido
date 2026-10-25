import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const checkEnabled = () => isFinePointer && !isCoarsePointer && !motionQuery.matches;
    const enabled = checkEnabled();
    setIsEnabled(enabled);

    if (enabled) {
      document.body.classList.add('cursor-none');
    } else {
      document.body.classList.remove('cursor-none');
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsEnabled(false);
        document.body.classList.remove('cursor-none');
      } else if (isFinePointer && !isCoarsePointer) {
        setIsEnabled(true);
        document.body.classList.add('cursor-none');
      }
    };

    motionQuery.addEventListener('change', handleMotionChange);

    return () => {
      document.body.classList.remove('cursor-none');
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  if (!isEnabled) {
    return null;
  }

  return (
    <div aria-hidden="true">
      {/* Croce terminale centrale */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        aria-hidden="true"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          {/* Linea verticale */}
          <rect x="9" y="0" width="2" height="20" fill="#00f3ff" />
          {/* Linea orizzontale */}
          <rect x="0" y="9" width="20" height="2" fill="#00f3ff" />
          {/* Cerchio centrale */}
          <circle cx="10" cy="10" r="3" fill="#00f3ff" />
        </svg>
      </motion.div>

      {/* Anello che segue con delay */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        aria-hidden="true"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          opacity: isVisible ? 0.5 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.8,
        }}
      >
        <div className="w-10 h-10 rounded-full border-2 border-cyber-primary/50" />
      </motion.div>

      {/* Glow sotto */}
      <motion.div
        className="fixed pointer-events-none z-[9997]"
        aria-hidden="true"
        animate={{
          x: mousePosition.x - 30,
          y: mousePosition.y - 30,
          opacity: isVisible ? 0.2 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
        }}
      >
        <div className="w-[60px] h-[60px] rounded-full bg-cyber-primary/30 blur-xl" />
      </motion.div>
    </div>
  );
};

export default CustomCursor;
