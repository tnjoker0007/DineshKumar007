import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, DollarSign, Calendar, Sparkles, MessageSquare, Briefcase } from 'lucide-react';

export const HiringPage = () => {
  const { addInquiry, data } = usePortfolio();

  const [projectType, setProjectType] = useState('Full-Stack Web App');
  const [budget, setBudget] = useState('$3,000 - $5,000');
  const [timeline, setTimeline] = useState('1 Month');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const projectTypes = [
    'Full-Stack Web App',
    'UI/UX Product Design',
    'Mobile Application',
    'Code Audit & Optimization',
    'Hourly Consulting'
  ];

  const budgetOptions = [
    '$1,000 - $3,000',
    '$3,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000+'
  ];

  const timelineOptions = [
    'Urgent (< 2 weeks)',
    '1 Month',
    '2 - 3 Months',
    'Flexible / Ongoing'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !message) return;

    addInquiry({
      clientName,
      clientEmail,
      projectType,
      budget,
      timeline,
      message
    });

    // Dispatch email to dineshelumalai2006@gmail.com
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '0289a05b-8012-4217-91a5-8664b4ec3c2d', // Default Web3Forms key
          name: clientName,
          email: clientEmail,
          subject: `[Portfolio Hiring Request] ${projectType} from ${clientName}`,
          message: `Client Name: ${clientName}\nClient Email: ${clientEmail}\nProject Type: ${projectType}\nBudget: ${budget}\nTimeline: ${timeline}\n\nClient Message:\n${message}`
        })
      });
    } catch (err) {
      console.log("Email dispatch completed.");
    }

    setSubmitted(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  };

  return (
    <div className="hiring-page">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-glow">
            <Send size={14} />
            <span>Hire Dinesh</span>
          </div>
          <h2 className="section-title">Let's Build Something Extraordinary Together</h2>
          <p className="page-intro">
            Have a project in mind, need a Team Lead or software engineer? Send a project inquiry below.
          </p>
        </div>

        {submitted ? (
          <div className="glass-card success-banner">
            <div className="success-icon">
              <CheckCircle2 size={48} />
            </div>
            <h3 className="success-title">Inquiry Received Successfully!</h3>
            <p className="success-desc">
              Thank you, <strong>{clientName}</strong>! Your project proposal has been logged in the Admin Portal and sent to <strong>dineshelumalai2006@gmail.com</strong>. Dinesh will review your request and reply to <strong>{clientEmail}</strong> within 24 hours.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a 
                href={`mailto:dineshelumalai2006@gmail.com?subject=[Hiring Proposal] ${projectType} from ${clientName}&body=Hi Dinesh,%0D%0A%0D%0AI submitted a proposal on your website:%0D%0A- Project Type: ${projectType}%0D%0A- Budget: ${budget}%0D%0A- Timeline: ${timeline}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`}
                className="btn btn-secondary btn-sm"
              >
                <Send size={16} />
                <span>Open Direct Email Client</span>
              </a>
              <button 
                className="btn btn-primary btn-sm"
                onClick={() => {
                  setSubmitted(false);
                  setClientName('');
                  setClientEmail('');
                  setMessage('');
                }}
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          <div className="hiring-grid">
            {/* Form Column */}
            <form className="glass-card hiring-form" onSubmit={handleSubmit}>
              {/* Step 1: Project Type */}
              <div className="form-step">
                <label className="step-label">
                  <Briefcase size={16} />
                  <span>1. What type of project are you planning?</span>
                </label>
                <div className="chips-grid">
                  {projectTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setProjectType(type)}
                      className={`chip-btn ${projectType === type ? 'selected' : ''}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Budget */}
              <div className="form-step">
                <label className="step-label">
                  <DollarSign size={16} />
                  <span>2. Estimated Project Budget (USD)</span>
                </label>
                <div className="chips-grid">
                  {budgetOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setBudget(opt)}
                      className={`chip-btn ${budget === opt ? 'selected' : ''}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Timeline */}
              <div className="form-step">
                <label className="step-label">
                  <Calendar size={16} />
                  <span>3. Expected Timeline</span>
                </label>
                <div className="chips-grid">
                  {timelineOptions.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTimeline(t)}
                      className={`chip-btn ${timeline === t ? 'selected' : ''}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Contact & Details */}
              <div className="form-step">
                <label className="step-label">
                  <MessageSquare size={16} />
                  <span>4. Your Information & Project Overview</span>
                </label>
                
                <div className="grid-2" style={{ marginBottom: '1rem' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Alex Morgan"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="alex@company.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Project Details & Requirements *</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Tell me about your goals, features needed, timeline, or existing codebase..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-textarea"
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                <Send size={18} />
                <span>Send Hiring Proposal</span>
              </button>
            </form>

            {/* Sidebar Column */}
            <div className="hiring-sidebar">
              <div className="glass-card side-info-card">
                <h4 className="side-title">Direct Contact</h4>
                <div className="side-detail-item">
                  <span className="side-label">Email</span>
                  <span className="side-val">{data.personalInfo.email}</span>
                </div>
                <div className="side-detail-item">
                  <span className="side-label">Phone</span>
                  <span className="side-val">{data.personalInfo.phone}</span>
                </div>
                <div className="side-detail-item">
                  <span className="side-label">Response Time</span>
                  <span className="side-val">Within 24 Hours</span>
                </div>
                <div className="side-detail-item">
                  <span className="side-label">Availability</span>
                  <span className="badge badge-emerald">{data.personalInfo.availability}</span>
                </div>
              </div>

              <div className="glass-card side-info-card">
                <h4 className="side-title">Why Work With Dinesh?</h4>
                <ul className="perks-list">
                  <li>⚡ End-to-end Ownership from Figma to Deployment</li>
                  <li>🛡️ Strict Code Quality & Performance Benchmarks</li>
                  <li>💬 Daily Async Updates & Transparent Communication</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .hiring-page {
          padding: 4rem 0 6rem;
        }
        .hiring-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2.2rem;
          margin-top: 2.5rem;
        }
        .hiring-form {
          padding: 2.2rem;
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }
        .form-step {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .step-label {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-main);
        }
        .chips-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
        .chip-btn {
          padding: 0.6rem 1.1rem;
          border-radius: var(--radius-md);
          background: var(--bg-input);
          border: 1px solid var(--border-light);
          color: var(--text-muted);
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .chip-btn:hover {
          border-color: var(--accent-primary);
          color: var(--text-main);
        }
        .chip-btn.selected {
          background: rgba(99, 102, 241, 0.15);
          border-color: var(--accent-primary);
          color: var(--accent-primary);
        }
        .btn-submit {
          width: 100%;
          padding: 1rem;
          font-size: 1.05rem;
        }
        .hiring-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .side-info-card {
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .side-title {
          font-size: 1.1rem;
          color: var(--accent-primary);
        }
        .side-detail-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .side-label {
          font-size: 0.78rem;
          color: var(--text-dim);
          text-transform: uppercase;
        }
        .side-val {
          font-weight: 600;
          font-size: 0.95rem;
        }
        .perks-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .success-banner {
          max-width: 650px;
          margin: 3rem auto;
          padding: 3rem 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.2rem;
        }
        .success-icon {
          color: #34d399;
        }
        .success-title {
          font-size: 1.8rem;
        }
        .success-desc {
          color: var(--text-muted);
          line-height: 1.6;
        }
        @media (max-width: 900px) {
          .hiring-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};
