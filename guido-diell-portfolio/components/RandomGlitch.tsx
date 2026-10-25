import React, { useEffect } from 'react';

const RandomGlitch: React.FC = () => {
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return;

    let scheduleTimeout: number | undefined;
    let glitchTimeout: number | undefined;

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
        scheduleGlitch();
      }, delay);
    };

    scheduleTimeout = window.setTimeout(scheduleGlitch, 5000);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        if (scheduleTimeout) clearTimeout(scheduleTimeout);
        if (glitchTimeout) clearTimeout(glitchTimeout);
        document.querySelectorAll('.glitch-active').forEach((el) => el.classList.remove('glitch-active'));
      } else {
        scheduleTimeout = window.setTimeout(scheduleGlitch, 5000);
      }
    };

    motionQuery.addEventListener('change', handleMotionChange);

    return () => {
      if (scheduleTimeout) clearTimeout(scheduleTimeout);
      if (glitchTimeout) clearTimeout(glitchTimeout);
      motionQuery.removeEventListener('change', handleMotionChange);
      document.querySelectorAll('.glitch-active').forEach((el) => el.classList.remove('glitch-active'));
    };
  }, []);

  return null;
};

export default RandomGlitch;
