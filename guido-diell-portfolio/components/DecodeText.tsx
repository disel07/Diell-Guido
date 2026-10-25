import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface DecodeTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const CHARS = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const DecodeText: React.FC<DecodeTextProps> = ({ text, className = '', delay = 0 }) => {
  const [displayText, setDisplayText] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return text;
    }
    return text.split('').map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join('');
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText(text);
      return;
    }

    let intervalId: ReturnType<typeof setInterval> | undefined;
    const timeoutId = setTimeout(() => {
      let currentIndex = 0;
      const totalLength = text.length;

      intervalId = setInterval(() => {
        if (currentIndex < totalLength) {
          setDisplayText(() => {
            return text
              .split('')
              .map((char, index) => {
                if (char === ' ') return ' ';
                if (index < currentIndex) return text[index];
                return CHARS[Math.floor(Math.random() * CHARS.length)];
              })
              .join('');
          });
          currentIndex++;
        } else {
          if (intervalId) clearInterval(intervalId);
          setDisplayText(text);
        }
      }, 80);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, delay]);

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
      aria-hidden="true"
    >
      {displayText}
    </motion.span>
  );
};

export default DecodeText;
