import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export const Services = () => {
  const { data, setCurrentPage } = usePortfolio();
  const { services } = data;

  return (
    <section className="services-section" id="services-section">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-glow">
            <Layers size={14} />
            <span>Services & Packages</span>
          </div>
          <h2 className="section-title">Solutions Tailored for Growth</h2>
        </div>

        <div className="services-grid grid-3">
          {services.map((srv) => (
            <div key={srv.id} className="glass-card service-card">
              <div className="service-header">
                <span className="price-tag">From {srv.startingPrice}</span>
                <h3 className="service-title">{srv.title}</h3>
                <p className="service-desc">{srv.description}</p>
              </div>

              <div className="deliverables-box">
                <span className="deliv-title">Included Deliverables:</span>
                <ul className="deliv-list">
                  {srv.deliverables.map((item, idx) => (
                    <li key={idx} className="deliv-item">
                      <CheckCircle2 size={16} className="deliv-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => setCurrentPage('hire')}
                style={{ marginTop: 'auto' }}
              >
                <span>Book Service</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          padding: 5rem 0;
          position: relative;
        }
        .services-grid {
          gap: 1.8rem;
        }
        .service-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .price-tag {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .service-title {
          font-size: 1.35rem;
          font-weight: 800;
          margin: 0.3rem 0 0.5rem;
        }
        .service-desc {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.6;
        }
        .deliverables-box {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-light);
        }
        .deliv-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-main);
        }
        .deliv-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .deliv-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: var(--text-muted);
        }
        .deliv-icon {
          color: var(--accent-emerald);
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};
