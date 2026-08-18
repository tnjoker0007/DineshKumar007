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

const MainContent = () => {
  const { currentPage } = usePortfolio();

  return (
    <div className="app-layout">
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
