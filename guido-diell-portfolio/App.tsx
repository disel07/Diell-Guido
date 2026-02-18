import React, { memo } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MatrixBackground from './components/MatrixBackground';
import ErrorBoundary from './components/ErrorBoundary';
import CustomCursor from './components/CustomCursor';
import ScanlineOverlay from './components/ScanlineOverlay';
import MouseSpotlight from './components/MouseSpotlight';
import Particles from './components/Particles';
import RandomGlitch from './components/RandomGlitch';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="bg-black min-h-screen text-white selection:bg-cyber-primary selection:text-black cursor-none">
          {/* Background Effects */}
          <MatrixBackground />
          <Particles />
          <ScanlineOverlay />
          <MouseSpotlight />
          
          {/* Interactive Effects */}
          <CustomCursor />
          <RandomGlitch />
          
          {/* UI */}
          <Navbar />
          <main id="main-content" className="relative z-10" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<AllProjects />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default memo(App);
