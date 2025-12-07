import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import MatrixBackground from './components/MatrixBackground';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-cyber-primary selection:text-black">
      <MatrixBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;