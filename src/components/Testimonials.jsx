import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import confetti from 'canvas-confetti';
import { Quote, Star, Plus, CheckCircle2, MessageSquarePlus, X, Send } from 'lucide-react';

export const Testimonials = () => {
  const { data, addTestimonial } = usePortfolio();
  const testimonials = data.testimonials || [];

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [stars, setStars] = useState(5);
  const [content, setContent] = useState('');
  const [successToast, setSuccessToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !content) return;

    addTestimonial({
      name,
      role: role || 'Leader / Client',
      company: company || 'Organization',
      stars: Number(stars),
      content
    });

    setShowModal(false);
    setName('');
    setRole('');
    setCompany('');
    setStars(5);
    setContent('');

    setSuccessToast(true);
    setTimeout(() => setSuccessToast(false), 4000);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {}
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header-row">
          <div className="section-header" style={{ marginBottom: 0 }}>
            <div className="badge badge-glow">
              <Quote size={14} />
              <span>Recommendations & Feedback</span>
            </div>
            <h2 className="section-title">What Leaders & Clients Say About Dinesh</h2>
            <p className="page-intro" style={{ margin: '0.4rem 0 0' }}>
              Real feedback and recommendations from team members, project leaders, and clients.
            </p>
          </div>

          <button 
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
            style={{ gap: '0.5rem', whiteSpace: 'nowrap' }}
          >
            <Plus size={18} />
            <span>Add Recommendation</span>
          </button>
        </div>

        {/* Success Toast */}
        {successToast && (
          <div className="success-toast glass-card animate-fade">
            <CheckCircle2 size={20} className="toast-icon" />
            <span>Thank you! Your recommendation has been published live for all visitors worldwide!</span>
          </div>
        )}

        {/* Recommendations List Grid */}
        {testimonials.length === 0 ? (
          <div className="glass-card empty-testimonials">
            <MessageSquarePlus size={48} className="empty-icon" />
            <h3>No Recommendations Yet</h3>
            <p>Be the first leader, manager, or client to leave a recommendation for Dinesh!</p>
            <button className="btn btn-secondary btn-sm" onClick={() => setShowModal(true)}>
              <Plus size={16} />
              <span>Leave First Recommendation</span>
            </button>
          </div>
        ) : (
          <div className="testimonials-grid grid-3">
            {testimonials.map((item) => (
              <div key={item.id} className="glass-card testimonial-card">
                <div className="stars-row">
                  {[...Array(item.stars || 5)].map((_, i) => (
                    <Star key={i} size={16} className="star-icon" />
                  ))}
                </div>

                <p className="testimonial-text">"{item.content}"</p>

                <div className="client-info">
                  <img 
                    src={item.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=6366f1&color=fff`} 
                    alt={item.name} 
                    className="client-avatar" 
                  />
                  <div>
                    <h4 className="client-name">{item.name}</h4>
                    <span className="client-role">{item.role}{item.company ? `, ${item.company}` : ''}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal: Add Recommendation */}
      {showModal && (
        <div className="modal-overlay animate-fade">
          <div className="modal-content glass-card animate-slide-up">
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Quote size={20} className="text-gradient" />
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Add a Recommendation / Feedback</h3>
              </div>
              <button className="modal-close" onClick={() => setShowModal(false)}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '1rem' }}>
              <div className="grid-2">
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Your Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Dr. Rajesh Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Role / Title</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Senior Project Manager / Professor"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="grid-2">
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Company / Organization</label>
                  <input 
                    type="text" 
                    placeholder="e.g. LTI / R.M.K. Engineering College"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Rating</label>
                  <select 
                    value={stars} 
                    onChange={(e) => setStars(e.target.value)}
                    className="form-input"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5 / 5 Stars - Outstanding)</option>
                    <option value={4}>⭐⭐⭐⭐ (4 / 5 Stars - Great)</option>
                    <option value={3}>⭐⭐⭐ (3 / 5 Stars - Good)</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Your Recommendation / Comment *</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Share your experience working with Dinesh, his technical expertise, leadership, or project execution..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="form-textarea"
                ></textarea>
              </div>

              <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  <Send size={16} />
                  <span>Publish Recommendation</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .testimonials-section {
          padding: 5rem 0;
          position: relative;
        }
        .testimonials-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 2.5rem;
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
        .empty-testimonials {
          padding: 4rem 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .empty-icon {
          color: var(--accent-primary);
        }
        .success-toast {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1rem 1.5rem;
          margin-bottom: 2rem;
          border-left: 4px solid #34d399;
          background: rgba(52, 211, 153, 0.1);
          color: #34d399;
          font-weight: 600;
        }
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .modal-content {
          width: 100%;
          max-width: 620px;
          padding: 2rem;
          max-height: 90vh;
          overflow-y: auto;
        }
        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-light);
        }
        .modal-close {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
        }
        .modal-close:hover {
          color: var(--text-main);
        }
        @media (max-width: 768px) {
          .testimonials-header-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};
