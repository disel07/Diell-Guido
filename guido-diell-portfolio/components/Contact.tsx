import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Check, Copy } from 'lucide-react';
import { SITE_CONFIG } from '../constants';

const Contact: React.FC = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = SITE_CONFIG.contact.email || "diellguido007@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      // Opzionale: chiudere la tendina dopo un po'
      // setShowEmail(false); 
    }, 2000);
  };

  return (
    <footer id="contact" className="py-12 relative overflow-hidden border-t border-white/5 bg-black/40">
      <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-mono font-bold mb-4">
            CONNECT <span className="text-cyber-primary">PROTOCOL</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto">
            Ready to collaborate on future technologies.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="flex justify-center gap-8">
            {/* GitHub */}
            <motion.a
              href={SITE_CONFIG.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, color: '#00f3ff', scale: 1.1 }}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:border-cyber-primary hover:bg-cyber-primary/10 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href={SITE_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5, color: '#00f3ff', scale: 1.1 }}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:border-cyber-primary hover:bg-cyber-primary/10 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>

            {/* Email Button (Interactive) */}
            <motion.button
              onClick={() => setShowEmail(!showEmail)}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5, color: '#00f3ff', scale: 1.1 }}
              className={`p-3 rounded-full border transition-all duration-300 ${
                showEmail 
                  ? 'bg-cyber-primary/20 border-cyber-primary text-cyber-primary shadow-[0_0_15px_rgba(0,243,255,0.3)]' 
                  : 'bg-white/5 border-white/10 text-gray-400 hover:border-cyber-primary hover:bg-cyber-primary/10'
              }`}
            >
              <Mail className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Email Reveal Panel */}
          <AnimatePresence>
            {showEmail && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                className="overflow-hidden"
              >
                <motion.div
                  onClick={handleCopy}
                  className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full cursor-pointer hover:bg-white/10 hover:border-cyber-primary/50 group transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <code className="font-mono text-sm text-gray-300 group-hover:text-white transition-colors">
                    {email}
                  </code>
                  <div className="w-px h-4 bg-white/10" />
                  {copied ? (
                    <span className="flex items-center gap-1 text-xs font-bold text-green-400">
                      <Check className="w-3 h-3" /> COPIED
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs font-bold text-cyber-primary group-hover:text-cyber-primary/80">
                      <Copy className="w-3 h-3" /> COPY
                    </span>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="text-center">
          <p className="text-xs text-gray-600 font-mono">
            © {new Date().getFullYear()} {SITE_CONFIG.name.toUpperCase()}. SYSTEM ONLINE.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;