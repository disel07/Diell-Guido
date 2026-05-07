import React, { useEffect, useState } from 'react';

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
    <span
      className={`inline-block ${className}`}
    >
      {displayText}
    </span>
  );
};

export default DecodeText;
