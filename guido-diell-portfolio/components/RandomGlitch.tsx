import React, { useEffect } from 'react';

const RandomGlitch: React.FC = () => {
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    let scheduleTimeout: number | undefined;
    let glitchTimeout: number | undefined;

    const clearGlitchStyles = () => {
      document.querySelectorAll('.glitch-active').forEach((el) => el.classList.remove('glitch-active'));
    };

    const triggerGlitch = () => {
      const elements = document.querySelectorAll('h1, h2, h3');
      if (elements.length === 0) return;

      const randomElement = elements[Math.floor(Math.random() * elements.length)];
      randomElement.classList.add('glitch-active');

      glitchTimeout = window.setTimeout(() => {
        randomElement.classList.remove('glitch-active');
      }, 200);
    };

    const scheduleGlitch = () => {
      const delay = 15000 + Math.random() * 15000;
      scheduleTimeout = window.setTimeout(() => {
        if (document.visibilityState === 'visible' && !motionQuery.matches) {
          triggerGlitch();
        }
        if (!motionQuery.matches) {
          scheduleGlitch();
        }
      }, delay);
    };

    const startGlitching = () => {
      if (!scheduleTimeout) {
        scheduleTimeout = window.setTimeout(scheduleGlitch, 5000);
      }
    };

    const stopGlitching = () => {
      if (scheduleTimeout) {
        clearTimeout(scheduleTimeout);
        scheduleTimeout = undefined;
      }
      if (glitchTimeout) {
        clearTimeout(glitchTimeout);
        glitchTimeout = undefined;
      }
      clearGlitchStyles();
    };

    if (!motionQuery.matches) {
      startGlitching();
    }

    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        stopGlitching();
      } else {
        startGlitching();
      }
    };

    motionQuery.addEventListener('change', handleMotionChange);

    return () => {
      stopGlitching();
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return null;
};

export default RandomGlitch;
