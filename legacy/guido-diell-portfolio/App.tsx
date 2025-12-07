import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import MatrixBackground from './components/MatrixBackground';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-cyber-dark text-white selection:bg-cyber-primary selection:text-black">
      <MatrixBackground />
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
};

export default App;