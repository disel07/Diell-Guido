import React, { useEffect, useState } from 'react';

const RandomGlitch: React.FC = () => {
  const [glitchElement, setGlitchElement] = useState<string | null>(null);

  useEffect(() => {
    const triggerGlitch = () => {
      // Seleziona un elemento random tra h1, h2, h3
      const elements = document.querySelectorAll('h1, h2, h3');
      if (elements.length === 0) return;

      const randomElement = elements[Math.floor(Math.random() * elements.length)];
      const originalText = randomElement.textContent || '';
      
      // Applica glitch
      randomElement.classList.add('glitch-active');
      
      setTimeout(() => {
        randomElement.classList.remove('glitch-active');
      }, 200);
    };

    // Glitch ogni 15-30 secondi
    const scheduleGlitch = () => {
      const delay = 15000 + Math.random() * 15000;
      setTimeout(() => {
        triggerGlitch();
        scheduleGlitch();
      }, delay);
    };

    // Inizia dopo 5 secondi
    const initialTimeout = setTimeout(scheduleGlitch, 5000);

    return () => clearTimeout(initialTimeout);
  }, []);

  return null;
};

export default RandomGlitch;
