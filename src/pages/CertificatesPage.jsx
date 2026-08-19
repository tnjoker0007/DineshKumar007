import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Award, ExternalLink, ShieldCheck, Calendar, Key, CheckCircle, Sparkles, X, FileText, Eye, Download, FileCheck, CheckCircle2, Medal } from 'lucide-react';

export const CertificatesPage = () => {
  const { data } = usePortfolio();
  const certificates = Array.isArray(data?.certificates) ? data.certificates : [];
  const [selectedCert, setSelectedCert] = useState(null);

  const isPdf = (url) => url && (url.toLowerCase().endsWith('.pdf') || url.includes('.pdf'));

  return (
    <div className="certificates-page">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-emerald">
            <ShieldCheck size={14} />
            <span>Verified Credentials</span>
          </div>
          <h2 className="section-title">Professional Certifications</h2>
          <p className="page-intro">
            Validated industry certifications from leading cloud, web engineering, and academic institutions.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="certificates-grid grid-2">
          {certificates.map((cert) => {
            const skillsList = Array.isArray(cert?.skills) ? cert.skills : [];
            return (
              <div 
                key={cert.id} 
                className="glass-card cert-card"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="cert-header">
                  <div className="cert-icon-box">
                    <Award size={24} className="cert-award-icon" />
                  </div>

                  <div className="cert-meta">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <h3 className="cert-title">{cert.title}</h3>
                  </div>
                </div>

                <div className="cert-details">
                  <div className="cert-detail-item">
                    <Calendar size={14} />
                    <span>Issued: {cert.date}</span>
                  </div>
                  <div className="cert-detail-item">
                    <Key size={14} />
                    <span>ID: {cert.credentialId}</span>
                  </div>
                </div>

                {/* Skills Tags */}
                {skillsList.length > 0 && (
                  <div className="cert-skills">
                    {skillsList.map((skill, idx) => (
                      <span key={idx} className="cert-skill-tag">{skill}</span>
                    ))}
                  </div>
                )}

                <div className="cert-actions" onClick={(e) => e.stopPropagation()}>
                  {cert.verifyUrl && (
                    <a 
                      href={cert.verifyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-secondary btn-sm"
                    >
                      <ExternalLink size={14} />
                      <span>Verify Credential</span>
                    </a>
                  )}
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => setSelectedCert(cert)}
                    style={{ gap: '0.4rem' }}
                  >
                    <Eye size={14} />
                    <span>View Details & Certificate</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="modal-backdrop" onClick={() => setSelectedCert(null)}>
          <div className="glass-card modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedCert(null)}>
              <X size={20} />
            </button>

            {/* Visual Certificate Card Header Banner */}
            <div className="modal-cert-banner-card">
              <div className="cert-visual-frame">
                <div className="cert-seal-badge">
                  <Medal size={28} className="text-emerald" />
                  <span>OFFICIAL E-CERTIFICATE</span>
                </div>
                
                <h4 className="cert-banner-heading">{selectedCert.title}</h4>
                <p className="cert-banner-sub">Awarded to <strong>DINESH KUMAR E</strong></p>
                <span className="cert-banner-org">Issued by {selectedCert.issuer}</span>
              </div>
            </div>

            <div className="modal-body">
              <div className="badge badge-emerald">
                <ShieldCheck size={14} />
                <span>Officially Verified Credential</span>
              </div>
              <h3 className="modal-title">{selectedCert.title}</h3>
              <p className="cert-issuer-large">Issued by <strong>{selectedCert.issuer}</strong></p>

              <div className="modal-info-grid">
                <div className="info-box">
                  <span className="info-label">Issue Date</span>
                  <span className="info-val">{selectedCert.date}</span>
                </div>
                <div className="info-box">
                  <span className="info-label">Credential ID</span>
                  <span className="info-val">{selectedCert.credentialId}</span>
                </div>
              </div>

              {Array.isArray(selectedCert.skills) && selectedCert.skills.length > 0 && (
                <div>
                  <h4 className="tags-heading">Mastered Competencies:</h4>
                  <div className="tags-flex">
                    {selectedCert.skills.map((s, idx) => (
                      <span key={idx} className="modal-tag">{s}</span>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginTop: '1.4rem' }}>
                {selectedCert.badgeImage && (
                  <a 
                    href={selectedCert.badgeImage} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <Download size={16} />
                    <span>View / Download Full PDF Certificate</span>
                  </a>
                )}
                {selectedCert.verifyUrl && (
                  <a 
                    href={selectedCert.verifyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Open Verification Portal</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .certificates-page {
          padding: 4rem 0 6rem;
        }
        .page-intro {
          color: var(--text-muted);
          max-width: 600px;
          margin-top: 0.5rem;
          font-size: 1.05rem;
        }
        .certificates-grid {
          gap: 1.8rem;
          margin-top: 2.5rem;
        }
        .cert-card {
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          cursor: pointer;
        }
        .cert-header {
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
        }
        .cert-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .cert-issuer {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-emerald);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .cert-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-top: 0.2rem;
        }
        .cert-details {
          display: flex;
          gap: 1.5rem;
          padding: 0.8rem 0;
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }
        .cert-detail-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: var(--text-muted);
        }
        .cert-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .cert-skill-tag {
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          background: var(--bg-input);
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .cert-actions {
          display: flex;
          gap: 0.8rem;
          margin-top: 0.4rem;
        }

        .modal-cert-banner-card {
          width: 100%;
          background: linear-gradient(135deg, #090d16 0%, #111c35 100%);
          padding: 2.2rem 1.8rem;
          border-bottom: 1px solid var(--border-light);
          text-align: center;
        }
        .cert-visual-frame {
          border: 1px dashed rgba(16, 185, 129, 0.3);
          border-radius: 12px;
          padding: 1.8rem 1.2rem;
          background: rgba(16, 185, 129, 0.03);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .cert-seal-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 1px;
          color: #34d399;
          text-transform: uppercase;
        }
        .cert-banner-heading {
          font-size: 1.3rem;
          font-weight: 800;
          color: #ffffff;
          margin-top: 0.4rem;
        }
        .cert-banner-sub {
          font-size: 0.95rem;
          color: var(--text-muted);
        }
        .cert-banner-sub strong {
          color: #38bdf8;
        }
        .cert-banner-org {
          font-size: 0.82rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .cert-issuer-large {
          font-size: 1rem;
          color: var(--text-muted);
        }
        .modal-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          background: var(--bg-input);
          padding: 1rem;
          border-radius: var(--radius-md);
        }
        .info-box {
          display: flex;
          flex-direction: column;
        }
        .info-label {
          font-size: 0.78rem;
          color: var(--text-dim);
          text-transform: uppercase;
        }
        .info-val {
          font-weight: 600;
          font-size: 0.95rem;
        }
      `}</style>
    </div>
  );
};
