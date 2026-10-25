import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const MouseSpotlight: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const coarseQuery = window.matchMedia('(pointer: coarse)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    let listenerAttached = false;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const attachListener = () => {
      if (listenerAttached) return;
      window.addEventListener('mousemove', moveCursor, { passive: true });
      listenerAttached = true;
    };

    const detachListener = () => {
      if (!listenerAttached) return;
      window.removeEventListener('mousemove', moveCursor);
      listenerAttached = false;
    };

    const updateVisibility = () => {
      const active = !coarseQuery.matches && !motionQuery.matches;
      setIsVisible(active);
      if (active) {
        attachListener();
      } else {
        detachListener();
      }
    };

    updateVisibility();

    const handleMediaChange = () => {
      updateVisibility();
    };

    coarseQuery.addEventListener('change', handleMediaChange);
    motionQuery.addEventListener('change', handleMediaChange);

    return () => {
      detachListener();
      coarseQuery.removeEventListener('change', handleMediaChange);
      motionQuery.removeEventListener('change', handleMediaChange);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[2]"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
      }}
      aria-hidden="true"
    >
      {/* Spotlight principale */}
      <div 
        className="w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 243, 255, 0.08) 0%, rgba(0, 243, 255, 0.03) 40%, transparent 70%)',
        }}
      />
    </motion.div>
  );
};

export default MouseSpotlight;
