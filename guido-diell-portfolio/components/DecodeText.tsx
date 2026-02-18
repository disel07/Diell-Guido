import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface DecodeTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const CHARS = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const DecodeText: React.FC<DecodeTextProps> = ({ text, className = '', delay = 0 }) => {
  const [displayText, setDisplayText] = useState(text);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const timeout = setTimeout(() => {
      setHasAnimated(true);
      setIsGlitching(true);
      
      let iteration = 0;
      const maxIterations = text.length * 8; // Aumentato da 3 a 8 per effetto più lungo

      const interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              // Effetto più caotico: alcune lettere cambiano più volte
              if (index < iteration / 5) {
                return text[index];
              }
              // Aggiungi possibilità che una lettera "corretta" cambi di nuovo (effetto glitch)
              if (index < iteration / 4 && Math.random() > 0.7) {
                return CHARS[Math.floor(Math.random() * CHARS.length)];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join('')
        );

        iteration += 1;

        if (iteration >= maxIterations) {
          clearInterval(interval);
          setDisplayText(text);
          setIsGlitching(false);
        }
      }, 25); // Velocità leggermente aumentata

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, hasAnimated]);

  return (
    <motion.span
      className={`inline-block relative ${isGlitching ? 'text-glitch' : ''} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      <span className="relative z-10">{displayText}</span>
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 -z-10 text-cyber-primary opacity-70 animate-glitch-1">
            {displayText}
          </span>
          <span className="absolute top-0 left-0 -z-10 text-cyber-secondary opacity-70 animate-glitch-2">
            {displayText}
          </span>
        </>
      )}
    </motion.span>
  );
};

export default DecodeText;
