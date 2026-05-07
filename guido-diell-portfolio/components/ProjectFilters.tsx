import React, { memo } from 'react';
import { PROJECT_CATEGORIES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { ProjectCategory } from '../types';

interface ProjectFiltersProps {
  activeCategory: ProjectCategory | 'All';
  onChange: (category: ProjectCategory | 'All') => void;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({ activeCategory, onChange }) => {
  const { t } = useLanguage();
  const categories: Array<ProjectCategory | 'All'> = ['All', ...PROJECT_CATEGORIES];

  return (
    <div className="flex flex-wrap justify-center gap-3 px-4 mb-10" role="group" aria-label={t.projects.filterLabel}>
      {categories.map((category) => {
        const isActive = activeCategory === category;
        const label = category === 'All' ? t.projects.allFilter : category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`rounded-lg border px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              isActive
                ? 'border-cyan-400 bg-cyan-400 text-black'
                : 'border-cyan-400/40 bg-black/30 text-cyan-300 hover:border-cyan-400 hover:text-white'
            }`}
            aria-pressed={isActive}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default memo(ProjectFilters);
