import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience = () => {
  const { data } = usePortfolio();
  const { experience } = data;

  return (
    <section className="experience-section" id="experience-section">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-glow">
            <Briefcase size={14} />
            <span>Career Path</span>
          </div>
          <h2 className="section-title">Work Experience & Timeline</h2>
        </div>

        <div className="timeline-container">
          {experience.map((item, idx) => (
            <div key={item.id || idx} className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="glass-card timeline-card">
                <div className="timeline-meta">
                  <span className="timeline-role">{item.role}</span>
                  <span className="timeline-company">@ {item.company}</span>
                </div>

                <div className="timeline-submeta">
                  <div className="submeta-badge">
                    <Calendar size={13} />
                    <span>{item.period}</span>
                  </div>
                  <div className="submeta-badge">
                    <MapPin size={13} />
                    <span>{item.location}</span>
                  </div>
                </div>

                <p className="timeline-desc">{item.description}</p>

                {item.achievements && item.achievements.length > 0 && (
                  <div className="achievements-box">
                    <h4 className="achieve-title">Key Highlights:</h4>
                    <ul className="achieve-list">
                      {item.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="achieve-item">
                          <CheckCircle2 size={15} className="achieve-icon" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          padding: 5rem 0;
          position: relative;
        }
        .timeline-container {
          position: relative;
          max-width: 850px;
          margin: 3rem auto 0;
          padding-left: 2rem;
          border-left: 2px solid var(--border-glow);
        }
        .timeline-item {
          position: relative;
          margin-bottom: 2.5rem;
        }
        .timeline-item:last-child {
          margin-bottom: 0;
        }
        .timeline-dot {
          position: absolute;
          left: -2.4rem;
          top: 24px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--accent-primary);
          box-shadow: 0 0 12px var(--accent-primary);
        }
        .timeline-card {
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .timeline-meta {
          display: flex;
          align-items: baseline;
          gap: 0.6rem;
          flex-wrap: wrap;
        }
        .timeline-role {
          font-size: 1.25rem;
          font-weight: 800;
        }
        .timeline-company {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--accent-secondary);
        }
        .timeline-submeta {
          display: flex;
          gap: 1rem;
        }
        .submeta-badge {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.82rem;
          color: var(--text-muted);
        }
        .timeline-desc {
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 0.95rem;
        }
        .achievements-box {
          margin-top: 0.5rem;
          padding-top: 0.8rem;
          border-top: 1px solid var(--border-light);
        }
        .achieve-title {
          font-size: 0.85rem;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }
        .achieve-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .achieve-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          color: var(--text-muted);
        }
        .achieve-icon {
          color: var(--accent-emerald);
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};
