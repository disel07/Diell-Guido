import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../constants';

const Contact: React.FC = () => {
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

        <div className="flex justify-center gap-8 mb-8">
           {/* Social Links loaded from Config */}
           {[
             { icon: Github, label: 'GitHub', href: SITE_CONFIG.socials.github },
             { icon: Linkedin, label: 'LinkedIn', href: SITE_CONFIG.socials.linkedin },
             { icon: Mail, label: 'Email', href: SITE_CONFIG.socials.email }
           ].map((social, i) => (
             <motion.a
               key={i}
               href={social.href}
               target="_blank"
               rel="noopener noreferrer"
               initial={{ opacity: 0, scale: 0.5 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.1 }}
               whileHover={{ y: -5, color: '#00f3ff', scale: 1.1 }}
               className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:border-cyber-primary hover:bg-cyber-primary/10 transition-all duration-300"
             >
               <social.icon className="w-6 h-6" />
             </motion.a>
           ))}
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