import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface DecodeTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const CHARS = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const DecodeText: React.FC<DecodeTextProps> = ({ text, className = '', delay = 0 }) => {
  const [displayText, setDisplayText] = useState(() => 
    text.split('').map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join('')
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const totalLength = text.length;
      
      const interval = setInterval(() => {
        if (currentIndex < totalLength) {
          setDisplayText(() => {
            return text.split('').map((char, index) => {
              if (char === ' ') return ' ';
              if (index < currentIndex) return text[index];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            }).join('');
          });
          currentIndex++;
        } else {
          clearInterval(interval);
          setDisplayText(text);
        }
      }, 80);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
    >
      {displayText}
    </motion.span>
  );
};

export default DecodeText;
