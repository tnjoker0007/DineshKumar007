import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Send, 
  ArrowRight, 
  Award, 
  CheckCircle2, 
  Code2, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Download
} from 'lucide-react';

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

          <h1 className="hero-title">
            Crafting Digital Excellence as a <br />
            <span className="text-gradient">{personalInfo.title}</span>
          </h1>

          <p className="hero-tagline">{personalInfo.tagline}</p>
          <p className="hero-bio">{personalInfo.bio}</p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <button 
              className="btn btn-primary"
              onClick={() => setCurrentPage('hire')}
            >
              <Send size={18} />
              <span>Hire Me Now</span>
            </button>

            <button 
              className="btn btn-secondary"
              onClick={() => {
                const el = document.getElementById('projects-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </button>

            <button 
              className="btn btn-secondary"
              onClick={() => setCurrentPage('certificates')}
            >
              <Award size={18} />
              <span>Certificates</span>
            </button>
          </div>

          {/* Quick Stats Grid */}
          <div className="hero-stats-grid">
            <div className="stat-card glass-card">
              <span className="stat-number text-gradient">{personalInfo.stats.yearsExperience}</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-card glass-card">
              <span className="stat-number text-cyan">{personalInfo.stats.completedProjects}</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-card glass-card">
              <span className="stat-number text-gradient">{personalInfo.stats.happyClients}</span>
              <span className="stat-label">Satisfied Clients</span>
            </div>
            <div className="stat-card glass-card">
              <span className="stat-number text-cyan">{personalInfo.stats.certifications}</span>
              <span className="stat-label">Certifications</span>
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

            {/* Floating Tech Badges */}
            <div className="float-badge badge-react glass-card animate-float">
              <Code2 size={18} className="icon-react" />
              <span>Java & Python</span>
            </div>

            <div className="float-badge badge-figma glass-card animate-float" style={{ animationDelay: '1.5s' }}>
              <Sparkles size={18} className="icon-figma" />
              <span>Team Lead @ LTI</span>
            </div>

            <div className="float-badge badge-aws glass-card animate-float" style={{ animationDelay: '3s' }}>
              <Cpu size={18} className="icon-aws" />
              <span>IoT & Hardware</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding: 4.5rem 0 3.5rem;
          overflow: hidden;
        }
        .hero-glow-1 {
          position: absolute;
          top: -100px;
          left: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(0,0,0,0) 70%);
          pointer-events: none;
        }
        .hero-glow-2 {
          position: absolute;
          bottom: -150px;
          right: -100px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(236,72,153,0.18) 0%, rgba(0,0,0,0) 70%);
          pointer-events: none;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3.5rem;
          align-items: center;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .dot-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 10px #34d399;
        }
        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          margin: 1.2rem 0 1rem;
          letter-spacing: -1px;
        }
        .hero-tagline {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 0.8rem;
        }
        .hero-bio {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 620px;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          width: 100%;
        }
        .stat-card {
          padding: 1.1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .stat-number {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 800;
        }
        .stat-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .hero-visual {
          display: flex;
          justify-content: center;
          position: relative;
        }
        .avatar-frame {
          position: relative;
          width: 340px;
          height: 380px;
          border-radius: 28px;
          padding: 10px;
          background: var(--gradient-brand);
          box-shadow: 0 20px 50px rgba(99, 102, 241, 0.3);
        }
        .avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
          filter: contrast(105%);
        }
        .float-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.7rem 1.1rem;
          font-weight: 600;
          font-size: 0.88rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }
        .badge-react { top: 20px; left: -50px; }
        .badge-figma { bottom: 50px; right: -50px; }
        .badge-aws { bottom: -20px; left: 20px; }
        
        .icon-react { color: #38bdf8; }
        .icon-figma { color: #ec4899; }
        .icon-aws { color: #f59e0b; }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .hero-title { font-size: 2.3rem; }
          .hero-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .avatar-frame { width: 280px; height: 320px; }
          .float-badge { font-size: 0.8rem; padding: 0.5rem 0.9rem; }
          .badge-react { left: -20px; }
          .badge-figma { right: -20px; }
        }
      `}</style>
    </section>
  );
};
