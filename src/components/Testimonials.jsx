import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Quote, Star } from 'lucide-react';

export const Testimonials = () => {
  const { data } = usePortfolio();
  const { testimonials } = data;

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-glow">
            <Quote size={14} />
            <span>Client Recommendations</span>
          </div>
          <h2 className="section-title">What Leaders Say About Dinesh</h2>
        </div>

        <div className="testimonials-grid grid-3">
          {testimonials.map((item) => (
            <div key={item.id} className="glass-card testimonial-card">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="star-icon" />
                ))}
              </div>

              <p className="testimonial-text">"{item.content}"</p>

              <div className="client-info">
                <img src={item.avatar} alt={item.name} className="client-avatar" />
                <div>
                  <h4 className="client-name">{item.name}</h4>
                  <span className="client-role">{item.role}, {item.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          padding: 5rem 0;
          position: relative;
        }
        .testimonials-grid {
          gap: 1.8rem;
        }
        .testimonial-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .stars-row {
          display: flex;
          gap: 0.3rem;
          color: #fbbf24;
        }
        .testimonial-text {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.7;
          font-style: italic;
        }
        .client-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--border-light);
        }
        .client-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
        }
        .client-name {
          font-size: 0.98rem;
          font-weight: 700;
        }
        .client-role {
          font-size: 0.82rem;
          color: var(--text-muted);
        }
      `}</style>
    </section>
  );
};
