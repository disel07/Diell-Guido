import React, { memo } from 'react';
import { ProjectCategory } from '../types';
import { PROJECT_CATEGORIES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectFiltersProps {
  activeCategory: ProjectCategory | 'All';
  onChange: (category: ProjectCategory | 'All') => void;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({ activeCategory, onChange }) => {
  const { t } = useLanguage();
  const categories: Array<ProjectCategory | 'All'> = ['All', ...PROJECT_CATEGORIES];

  return (
    <div className="mx-auto mb-10 flex max-w-5xl flex-wrap justify-center gap-3 px-4" role="group" aria-label={t.projects.filterLabel}>
      {categories.map((category) => {
        const isActive = activeCategory === category;
        const label = category === 'All' ? t.projects.allFilter : category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`rounded-lg border px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              isActive
                ? 'border-cyan-400 bg-cyan-400 text-black shadow-[0_0_20px_rgba(0,243,255,0.18)]'
                : 'border-cyan-400/30 bg-black/40 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-white'
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
