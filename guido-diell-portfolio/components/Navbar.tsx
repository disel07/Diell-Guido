import React, { useState, useEffect, memo, useMemo } from 'react';
import { Menu, X, Code, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { PROJECTS } from '../constants';
import { useActiveSection } from '../hooks/useActiveSection';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const navLinks = useMemo(
    () => [
      { name: t.nav.home, href: '/#home', sectionId: 'home' },
      { name: t.nav.skills, href: '/#skills', sectionId: 'skills' },
      { name: t.nav.learning, href: '/#learning', sectionId: 'learning' },
      { name: t.nav.projects, href: '/#projects', sectionId: 'projects' },
      { name: t.nav.experience, href: '/#experience', sectionId: 'experience' },
      { name: t.nav.education, href: '/#education', sectionId: 'education' },
      { name: t.nav.contact, href: '/#contact', sectionId: 'contact' },
    ],
    [t]
  );
  
  const activeSection = useActiveSection({
    sectionIds: navLinks.map(link => link.sectionId),
    offset: 100
  });

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="fixed top-0 left-0 z-[60] p-4 bg-cyber-primary text-black font-bold transform -translate-y-full focus:translate-y-0 transition-transform duration-200 skip-link"
      >
        {t.skipToContent}
      </a>

      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/95 backdrop-blur-md py-4 shadow-lg shadow-black/50' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <div
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer group hero-enter"
              onClick={handleLogoClick}
            >
              <Code className="w-6 h-6 sm:w-8 sm:h-8 text-cyber-primary group-hover:animate-pulse" aria-hidden="true" />
              <span className="font-mono font-bold text-sm tracking-wide text-white min-[421px]:text-base sm:text-xl sm:tracking-widest">
                GUIDO<span className="text-cyber-primary">DIELL</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <div className="flex items-baseline gap-4 lg:gap-6">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.sectionId;
                  return (
                    <HashLink
                      key={link.name}
                      to={link.href}
                      smooth
                      aria-current={isActive ? 'page' : undefined}
                      className={`font-mono text-xs lg:text-sm transition-colors duration-300 nav-link-underline ${
                        isActive ? 'text-cyber-primary active' : 'text-white hover:text-cyber-primary'
                      }`}
                    >
                      <span className={`block hero-enter ${index > 0 ? 'hero-enter-delay-1' : ''}`}>
                        {link.name}
                      </span>
                    </HashLink>
                  );
                })}
              </div>
              <LanguageToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-primary rounded-lg p-2 max-[420px]:p-1.5"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" /> : <Menu className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
            <div
              id="mobile-menu"
              className="md:hidden glass-strong border-b border-white/10 overflow-hidden animate-mobile-menu"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div className="flex justify-center py-3">
                  <LanguageToggle />
                </div>
                {navLinks.map((link) => {
                  const isActive = activeSection === link.sectionId;
                  return (
                    <HashLink
                      key={link.name}
                      to={link.href}
                      smooth
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`block px-3 py-4 rounded-md text-base font-mono font-bold text-center border-b border-white/5 transition-colors ${
                        isActive 
                          ? 'text-cyber-primary bg-cyber-primary/10' 
                          : 'text-gray-300 hover:text-cyber-primary'
                      }`}
                    >
                      {link.name}
                    </HashLink>
                  );
                })}

                <div className="mt-4 border-t border-white/10 pt-4 px-3">
                  <p className="text-xs font-mono text-gray-500 mb-2 uppercase text-center">{t.nav.projectsLabel}</p>
                  {PROJECTS.map((project) => (
                    <a
                      key={project.name}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="block py-3 text-center text-sm font-bold text-white hover:text-cyber-primary flex items-center justify-center gap-2"
                      aria-label={`${project.name} (opens in new tab)`}
                    >
                      {project.name} <span className="text-xs text-gray-500">{project.category}</span> <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  ))}
                  <p className="sr-only">{language}</p>
                </div>
              </div>
            </div>
          )}
      </nav>
    </>
  );
};

export default memo(Navbar);
