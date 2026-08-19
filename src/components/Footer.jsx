import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Sparkles, Github, Linkedin, Instagram, Settings } from 'lucide-react';

export const Footer = () => {
  const { data, setCurrentPage } = usePortfolio();
  const { personalInfo } = data;

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div 
              className="brand-logo" 
              onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.8rem' }}
            >
              <img 
                src="/images/footer_logo.png" 
                alt="Dinesh Kumar Logo" 
                className="footer-logo-img"
                style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
              />
              <span className="logo-text">
                {personalInfo.name}<span className="text-gradient"></span>
              </span>
            </div>
            <p className="footer-bio">{personalInfo.tagline}</p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <div className="footer-links">
              <button onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</button>
              <button onClick={() => setCurrentPage('certificates')}>Certificates</button>
              <button onClick={() => setCurrentPage('hire')}>Hire Me</button>
              <button onClick={() => setCurrentPage('admin')}>Admin CMS</button>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Connect Socially</h4>
            <div className="social-links-row">
              {personalInfo.socials?.github && (
                <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="social-link-btn" title="GitHub Profile">
                  <Github size={18} />
                </a>
              )}
              {personalInfo.socials?.linkedin && (
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link-btn" title="LinkedIn Profile">
                  <Linkedin size={18} />
                </a>
              )}
              {personalInfo.socials?.instagram && (
                <a href={personalInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-link-btn" title="Instagram Profile">
                  <Instagram size={18} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <button className="admin-footer-link" onClick={() => setCurrentPage('admin')}>
            <Settings size={14} />
            <span>Admin Portal</span>
          </button>
        </div>
      </div>

      <style>{`
        .footer-section {
          padding: 4rem 0 2rem;
          background: var(--bg-secondary);
          border-top: 1px solid var(--glass-border);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-bio {
          color: var(--text-muted);
          font-size: 0.92rem;
          max-width: 400px;
          line-height: 1.6;
        }
        .footer-heading {
          font-size: 1rem;
          margin-bottom: 1rem;
          color: var(--text-main);
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.6rem;
        }
        .footer-links button {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 0.9rem;
          cursor: pointer;
          transition: color var(--transition-fast);
        }
        .footer-links button:hover {
          color: var(--accent-primary);
        }
        .social-links-row {
          display: flex;
          gap: 0.6rem;
        }
        .social-link-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--bg-input);
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }
        .social-link-btn:hover {
          background: var(--gradient-brand);
          color: #fff;
          transform: translateY(-2px);
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-light);
          font-size: 0.85rem;
          color: var(--text-dim);
        }
        .admin-footer-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: transparent;
          border: none;
          color: var(--text-dim);
          font-size: 0.85rem;
          cursor: pointer;
        }
        .admin-footer-link:hover {
          color: var(--accent-primary);
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
          .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
        }
      `}</style>
    </footer>
  );
};
