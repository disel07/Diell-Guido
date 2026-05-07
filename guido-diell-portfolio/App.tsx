import React, { memo, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MatrixBackground from './components/MatrixBackground';
import ErrorBoundary from './components/ErrorBoundary';
import CustomCursor from './components/CustomCursor';
import ScanlineOverlay from './components/ScanlineOverlay';
import MouseSpotlight from './components/MouseSpotlight';
import Particles from './components/Particles';
import RandomGlitch from './components/RandomGlitch';
import Home from './pages/Home';

// Lazy-loaded pages – AllProjects is only fetched when the user navigates to /projects
const AllProjects = lazy(() => import('./pages/AllProjects'));

function App() {
  return (
    <ErrorBoundary>
      <Router basename="/Diell-Guido/">
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
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div className="w-8 h-8 border-2 border-cyber-primary border-t-transparent rounded-full animate-spin" />
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects/all" element={<AllProjects />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default memo(App);
