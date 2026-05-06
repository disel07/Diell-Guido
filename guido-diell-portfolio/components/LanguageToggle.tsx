import React, { memo } from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={`inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-xs font-bold text-gray-200 transition-colors hover:border-cyber-primary hover:text-cyber-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-primary ${className}`}
      aria-label={t.languageToggle}
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      {language.toUpperCase()}
    </button>
  );
};

export default memo(LanguageToggle);
