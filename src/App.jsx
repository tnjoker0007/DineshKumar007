import React from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { CertificatesPage } from './pages/CertificatesPage';
import { HiringPage } from './pages/HiringPage';
import { AdminPage } from './pages/AdminPage';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgressBar } from './components/ScrollProgressBar';

const MainContent = () => {
  const { currentPage } = usePortfolio();

  return (
    <div className="app-layout">
      {/* Interactive Custom Glowing Cursor & Top Scroll Progress Bar */}
      <CustomCursor />
      <ScrollProgressBar />

      {/* Animated Ambient Glass Background Orbs & Mesh */}
      <div className="ambient-glass-bg">
        <div className="glass-orb orb-1"></div>
        <div className="glass-orb orb-2"></div>
        <div className="glass-orb orb-3"></div>
        <div className="glass-orb orb-4"></div>
        <div className="glass-mesh-grid"></div>
      </div>

      <Navbar />

      <main className="main-content">
        {currentPage === 'home' && (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Services />
            <Testimonials />
          </>
        )}

        {currentPage === 'certificates' && <CertificatesPage />}

        {currentPage === 'hire' && <HiringPage />}

        {currentPage === 'admin' && <AdminPage />}
      </main>

      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <PortfolioProvider>
      <MainContent />
    </PortfolioProvider>
  );
}
