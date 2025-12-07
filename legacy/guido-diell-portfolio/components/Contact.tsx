import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Mock sending
    setTimeout(() => {
      setFormState('sent');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  // Subtle animation variants for input focus
  const inputVariants = {
    initial: { 
      scale: 1, 
      borderColor: "rgba(255, 255, 255, 0.1)",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      boxShadow: "0 0 0px rgba(0, 0, 0, 0)"
    },
    focus: { 
      scale: 1, 
      borderColor: "#00f3ff",
      backgroundColor: "rgba(0, 20, 30, 0.8)",
      boxShadow: "0 4px 20px rgba(0, 243, 255, 0.15)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const labelVariants = {
    initial: { color: "#00f3ff", x: 0 },
    focus: { color: "#fff", x: 2 }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Footer decorative background */}
      <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-cyber-secondary/20 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-mono font-bold mb-6">
            INITIATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-secondary">CONTACT</span>
          </h2>
          <p className="text-gray-400">Send a transmission. I'm currently available for new projects and opportunities.</p>
        </motion.div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div initial="initial" whileHover="focus" animate="initial">
                <motion.label variants={labelVariants} className="block text-xs font-mono mb-2">IDENTIFIER (NAME)</motion.label>
                <motion.input 
                  required 
                  type="text" 
                  variants={inputVariants}
                  initial="initial"
                  whileFocus="focus"
                  className="w-full rounded-lg px-4 py-3 text-white focus:outline-none"
                  placeholder="John Doe"
                />
              </motion.div>
              <motion.div initial="initial" whileHover="focus" animate="initial">
                <motion.label variants={labelVariants} className="block text-xs font-mono mb-2">FREQUENCY (EMAIL)</motion.label>
                <motion.input 
                  required 
                  type="email" 
                  variants={inputVariants}
                  initial="initial"
                  whileFocus="focus"
                  className="w-full rounded-lg px-4 py-3 text-white focus:outline-none"
                  placeholder="john@example.com"
                />
              </motion.div>
            </div>
            <motion.div initial="initial" whileHover="focus" animate="initial">
              <motion.label variants={labelVariants} className="block text-xs font-mono mb-2">DATA PACKET (MESSAGE)</motion.label>
              <motion.textarea 
                required 
                rows={4} 
                variants={inputVariants}
                initial="initial"
                whileFocus="focus"
                className="w-full rounded-lg px-4 py-3 text-white focus:outline-none"
                placeholder="Your message here..."
              ></motion.textarea>
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={formState !== 'idle'}
              className={`w-full py-4 rounded-lg font-mono font-bold text-black transition-all flex items-center justify-center gap-2 ${
                formState === 'sent' ? 'bg-green-500' : 'bg-cyber-primary hover:bg-cyan-400'
              }`}
            >
              {formState === 'idle' && (
                <>
                  TRANSMIT <Send className="w-4 h-4" />
                </>
              )}
              {formState === 'submitting' && 'TRANSMITTING...'}
              {formState === 'sent' && 'TRANSMISSION RECEIVED'}
            </motion.button>
          </form>
        </div>

        <div className="mt-16 flex justify-center space-x-8">
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
               whileHover={{ y: -5, color: '#00f3ff' }}
               className="text-gray-500 transition-colors"
             >
               <social.icon className="w-8 h-8" />
             </motion.a>
           ))}
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-600 font-mono">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name.toUpperCase()}. SYSTEM SECURE.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;