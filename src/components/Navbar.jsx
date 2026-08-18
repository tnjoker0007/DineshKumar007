import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Sparkles, 
  Home, 
  User, 
  Briefcase, 
  Award, 
  Send, 
  Settings, 
  Sun, 
  Moon, 
  Menu, 
  X,
  Layers
} from 'lucide-react';

export const Navbar = () => {
  const { currentPage, setCurrentPage, theme, toggleTheme, data } = usePortfolio();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: Briefcase, sectionId: 'projects-section' },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'services', label: 'Services', icon: Layers, sectionId: 'services-section' },
    { id: 'hire', label: 'Hire Me', icon: Send, isSpecial: true },
    { id: 'admin', label: 'Admin CMS', icon: Settings }
  ];

  const handleNavClick = (item) => {
    if (item.id === 'home' || item.id === 'certificates' || item.id === 'hire' || item.id === 'admin') {
      setCurrentPage(item.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item.sectionId) {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById(item.sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(item.sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Brand Logo */}
        <div 
          className="brand-logo" 
          onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <div className="logo-badge">
            <Sparkles size={20} className="logo-sparkle" />
          </div>
          <span className="logo-text">
            {data.personalInfo.name.split(' ')[0]}<span className="text-gradient">.dev</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`nav-link ${isActive ? 'active' : ''} ${item.isSpecial ? 'nav-btn-hire' : ''}`}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="navbar-controls">
          <button 
            className="btn-theme-toggle" 
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} className="theme-icon-sun" /> : <Moon size={18} className="theme-icon-moon" />}
          </button>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer glass-card">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`mobile-nav-link ${isActive ? 'active' : ''} ${item.isSpecial ? 'mobile-btn-hire' : ''}`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        .navbar-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--glass-border);
          transition: all var(--transition-normal);
        }
        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          cursor: pointer;
        }
        .logo-badge {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--gradient-brand);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
        }
        .logo-sparkle {
          animation: float 3s ease-in-out infinite;
        }
        .logo-text {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: -0.5px;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1rem;
          border-radius: var(--radius-full);
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-display);
          font-size: 0.92rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .nav-link:hover {
          color: var(--text-main);
          background: var(--bg-card-hover);
        }
        .nav-link.active {
          color: var(--accent-primary);
          background: rgba(99, 102, 241, 0.12);
        }
        .nav-btn-hire {
          background: var(--gradient-brand);
          color: #ffffff !important;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
          padding: 0.55rem 1.2rem;
        }
        .nav-btn-hire:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(168, 85, 247, 0.5);
        }
        .navbar-controls {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }
        .btn-theme-toggle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .btn-theme-toggle:hover {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          transform: rotate(15deg);
        }
        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-main);
          cursor: pointer;
        }
        .mobile-drawer {
          position: absolute;
          top: 80px;
          left: 1rem;
          right: 1rem;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem 1rem;
          border-radius: var(--radius-md);
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
        }
        .mobile-nav-link.active {
          background: rgba(99, 102, 241, 0.15);
          color: var(--accent-primary);
        }
        .mobile-btn-hire {
          background: var(--gradient-brand);
          color: #ffffff;
          justify-content: center;
        }
        @media (max-width: 900px) {
          .desktop-nav { display: none; }
          .mobile-menu-btn { display: flex; }
        }
      `}</style>
    </header>
  );
};
