import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

export const Hero = () => {
  const { data, setCurrentPage } = usePortfolio();
  const { personalInfo } = data;

  return (
    <section className="hero-section">
      {/* Background Radial Glow */}
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="container hero-grid">
        {/* Left Column: Text Info */}
        <div className="hero-content">
          <div className="badge badge-emerald animate-glow">
            <span className="dot-pulse"></span>
            {personalInfo.statusBadge}
          </div>

          <div className="hero-text">
            <h1 className="hero-title">
              Hi I am
              <br />
              {personalInfo.name}
            </h1>
            <h2 className="hero-title-subtitle">{personalInfo.title}</h2>

            <p className="hero-tagline">{personalInfo.tagline}</p>
            <p className="hero-bio">{personalInfo.bio}</p>

            {/* Action CTAs */}
            <div className="hero-actions">
              <a
                href="/Dinesh_Kumar_E_Resume.pdf"
                download="Dinesh_Kumar_E_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ textDecoration: 'none', gap: '0.6rem' }}
              >
                <span>Hire Me</span>
              </a>

              <button
                className="btn btn-secondary"
                onClick={() => setCurrentPage('hire')}
              >
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Avatar & Floating Badges */}
        <div className="hero-visual">
          <div className="avatar-frame">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="avatar-img"
            />

            {/* Social Media Icons */}
            <div className="social-icons">
              {personalInfo.socials?.instagram && (
                <a href={personalInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              )}
              {personalInfo.socials?.twitter && (
                <a href={personalInfo.socials.twitter} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X / Twitter">
                  <Twitter size={20} />
                </a>
              )}
              {personalInfo.socials?.linkedin && (
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
