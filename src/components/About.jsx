import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { User, Award, GraduationCap, Heart, Zap, ShieldCheck, Download } from 'lucide-react';

export const About = () => {
  const { data } = usePortfolio();
  const { personalInfo, education } = data;

  const coreValues = [
    { icon: Zap, title: "Peak Performance", desc: "Crafting optimized, responsive apps with fast page loads and seamless animations." },
    { icon: Heart, title: "User-Centric Design", desc: "Prioritizing human intuition, accessibility (WCAG), and clean visual hierarchy." },
    { icon: ShieldCheck, title: "Clean Architecture", desc: "Building scalable, maintainable modular codebases with strict design patterns." }
  ];

  return (
    <section className="about-section" id="about-section">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-glow">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">Driven by Innovation, Defined by Quality</h2>
        </div>

        <div className="about-grid">
          {/* Left: Detailed Story */}
          <div className="glass-card about-card">
            <h3 className="about-heading">Engineering & Design Journey</h3>
            <p className="about-text">
              I am a Senior Software Engineer and UI/UX Designer dedicated to building seamless digital software. Over the past 6+ years, I've collaborated with fast-growing startups and global enterprises to take complex product visions from initial whiteboard wireframes to production cloud environments.
            </p>
            <p className="about-text">
              My philosophy centers around combining engineering precision with intuitive design. Whether crafting responsive frontend user interfaces, building backend APIs, or mapping out cloud infrastructure, I aim to create solutions that solve real-world problems.
            </p>

            {/* Location & Quick Contact Info */}
            <div className="info-chips">
              <div className="info-chip">
                <span className="chip-label">Based in:</span>
                <span className="chip-value">{personalInfo.location}</span>
              </div>
              <div className="info-chip">
                <span className="chip-label">Email:</span>
                <span className="chip-value">{personalInfo.email}</span>
              </div>
            </div>

            <div className="about-actions">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="btn btn-primary btn-sm"
              >
                <Download size={16} />
                <span>Get In Touch</span>
              </a>
            </div>
          </div>

          {/* Right: Core Values & Education */}
          <div className="about-secondary-col">
            {/* Core Values */}
            <div className="values-list">
              {coreValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="glass-card value-item">
                    <div className="value-icon-box">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="value-title">{val.title}</h4>
                      <p className="value-desc">{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Education Card */}
            {education && education.length > 0 && (
              <div className="glass-card edu-card">
                <div className="edu-header">
                  <GraduationCap size={22} className="edu-icon" />
                  <div>
                    <h4 className="edu-degree">{education[0].degree}</h4>
                    <span className="edu-school">{education[0].institution} ({education[0].period})</span>
                  </div>
                </div>
                <p className="edu-details">{education[0].details}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 5rem 0;
          position: relative;
        }
        .section-header {
          text-align: center;
          margin-bottom: 3.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
        }
        .section-title {
          font-size: 2.2rem;
          font-weight: 800;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2rem;
        }
        .about-card {
          padding: 2.2rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .about-heading {
          font-size: 1.4rem;
          color: var(--accent-primary);
        }
        .about-text {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 0.98rem;
        }
        .info-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 1.2rem;
          margin-top: 0.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-light);
        }
        .info-chip {
          display: flex;
          gap: 0.4rem;
          font-size: 0.88rem;
        }
        .chip-label {
          color: var(--text-dim);
          font-weight: 600;
        }
        .chip-value {
          color: var(--text-main);
          font-weight: 500;
        }
        .about-actions {
          margin-top: 0.5rem;
        }
        .about-secondary-col {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .values-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .value-item {
          padding: 1.2rem;
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }
        .value-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(99, 102, 241, 0.15);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .value-title {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }
        .value-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
        .edu-card {
          padding: 1.4rem;
          border-left: 4px solid var(--accent-secondary);
        }
        .edu-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.6rem;
        }
        .edu-icon {
          color: var(--accent-secondary);
        }
        .edu-degree {
          font-size: 1rem;
          font-weight: 700;
        }
        .edu-school {
          font-size: 0.82rem;
          color: var(--text-muted);
        }
        .edu-details {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};
