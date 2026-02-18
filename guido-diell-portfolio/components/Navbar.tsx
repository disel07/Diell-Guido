import React, { useState, useEffect, memo } from 'react';
import { Menu, X, Code, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import { PROJECTS } from '../constants';
import { useActiveSection } from '../hooks/useActiveSection';

const navLinks = [
  { name: 'Home', href: '/#home', sectionId: 'home' },
  { name: 'Skills', href: '/#skills', sectionId: 'skills' },
  { name: 'Projects', href: '/#projects', sectionId: 'projects' },
  { name: 'Experience', href: '/#experience', sectionId: 'experience' },
  { name: 'Contact', href: '/#contact', sectionId: 'contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const activeSection = useActiveSection({
    sectionIds: navLinks.map(link => link.sectionId),
    offset: 100
  });

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
        Skip to main content
      </a>

      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/90 backdrop-blur-md border-b border-white/5 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer group"
              onClick={() => window.location.href = '/'}
            >
              <Code className="w-8 h-8 text-cyber-primary group-hover:animate-pulse" aria-hidden="true" />
              <span className="font-mono font-bold text-xl tracking-widest text-white">
                GUIDO<span className="text-cyber-primary">DIELL</span>
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-baseline space-x-8">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.sectionId;
                  return (
                    <HashLink
                      key={link.name}
                      to={link.href}
                      smooth
                      aria-current={isActive ? 'page' : undefined}
                      className={`font-mono text-sm transition-colors duration-300 nav-link-underline ${
                        isActive ? 'text-cyber-primary active' : 'text-white hover:text-cyber-primary'
                      }`}
                    >
                      <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="block"
                      >
                        {link.name}
                      </motion.span>
                    </HashLink>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-primary rounded-lg p-2"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X className="h-8 w-8" aria-hidden="true" /> : <Menu className="h-8 w-8" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-strong border-b border-white/10 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
                  <p className="text-xs font-mono text-gray-500 mb-2 uppercase text-center">Projects</p>
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
                      {project.name} <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default memo(Navbar);
