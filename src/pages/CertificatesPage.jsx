import React, { useState, useEffect, useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Award, ExternalLink, ShieldCheck, Calendar, Key, CheckCircle, Sparkles, X, FileText, Eye, Download, FileCheck, Loader2 } from 'lucide-react';

const PdfCanvasViewer = ({ pdfUrl, title }) => {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(false);

    const renderPdf = async () => {
      try {
        if (!window.pdfjsLib) {
          // Brief pause if CDN script is still initializing
          await new Promise(r => setTimeout(r, 600));
        }
        if (!window.pdfjsLib) {
          throw new Error('PDF.js not loaded on page');
        }

        window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

        const loadingTask = window.pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        if (!isMounted) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        const scale = window.innerWidth < 640 ? 1.0 : 1.4;
        const viewport = page.getViewport({ scale });

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };

        await page.render(renderContext).promise;
        if (isMounted) setLoading(false);
      } catch (err) {
        console.error('PDF canvas rendering error:', err);
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      }
    };

    renderPdf();

    return () => {
      isMounted = false;
    };
  }, [pdfUrl]);

  return (
    <div className="pdf-canvas-wrapper">
      {loading && (
        <div className="pdf-loading-box">
          <Loader2 size={32} className="spin-icon text-emerald" />
          <span>Rendering Official Certificate Image...</span>
        </div>
      )}

      <canvas 
        ref={canvasRef} 
        className="modal-pdf-canvas"
        style={{ display: loading || error ? 'none' : 'block' }}
      />

      {error && (
        <div className="pdf-fallback-box">
          <FileText size={48} className="text-emerald" />
          <h4 className="fallback-title">{title}</h4>
          <p className="fallback-desc">Official Verified Certificate Document</p>
          <a 
            href={pdfUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-sm"
            style={{ marginTop: '0.8rem' }}
          >
            <ExternalLink size={16} />
            <span>Open Original Certificate PDF</span>
          </a>
        </div>
      )}
    </div>
  );
};

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

            {/* Render Full Certificate Image/Canvas */}
            <div className="modal-cert-viewer">
              {selectedCert.badgeImage ? (
                isPdf(selectedCert.badgeImage) ? (
                  <div className="pdf-viewer-container">
                    <PdfCanvasViewer pdfUrl={selectedCert.badgeImage} title={selectedCert.title} />

                    {/* Banner Action Bar */}
                    <div className="pdf-action-banner">
                      <div className="banner-info">
                        <FileCheck size={18} className="text-emerald" />
                        <div>
                          <strong>{selectedCert.title}</strong>
                          <span className="banner-subtext">Issued by {selectedCert.issuer}</span>
                        </div>
                      </div>
                      <a 
                        href={selectedCert.badgeImage} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <Download size={14} />
                        <span>Download Original PDF</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <img src={selectedCert.badgeImage} alt={selectedCert.title} className="modal-cert-img" />
                )
              ) : (
                <div className="no-cert-doc-placeholder">
                  <FileText size={48} className="text-dim" />
                  <p>Official Certificate Document Available via Verification Link</p>
                </div>
              )}
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

              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginTop: '1.2rem' }}>
                {selectedCert.badgeImage && (
                  <a 
                    href={selectedCert.badgeImage} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <Download size={16} />
                    <span>Open / Download Original PDF Certificate</span>
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

        .modal-cert-viewer {
          width: 100%;
          background: #090d16;
          border-bottom: 1px solid var(--border-light);
          overflow: hidden;
        }
        .pdf-viewer-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .pdf-canvas-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #0b1120;
          min-height: 280px;
          max-height: 480px;
          overflow-y: auto;
          padding: 1rem 0;
        }
        .modal-pdf-canvas {
          max-width: 100%;
          height: auto !important;
          border-radius: 6px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .pdf-loading-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
          padding: 3rem;
          color: var(--text-muted);
        }
        .spin-icon {
          animation: spin 1.2s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .pdf-fallback-box {
          padding: 3rem 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
        }
        .fallback-title {
          font-size: 1.1rem;
          margin-top: 0.4rem;
        }
        .fallback-desc {
          color: var(--text-muted);
          font-size: 0.88rem;
        }
        .pdf-action-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.8rem 1.2rem;
          background: rgba(16, 185, 129, 0.1);
          border-top: 1px solid rgba(16, 185, 129, 0.2);
          gap: 1rem;
          flex-wrap: wrap;
        }
        .banner-info {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.9rem;
        }
        .banner-subtext {
          display: block;
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .text-emerald {
          color: var(--accent-emerald);
        }
        .modal-cert-img {
          width: 100%;
          max-height: 440px;
          object-fit: contain;
          background: #0f172a;
        }
        .no-cert-doc-placeholder {
          padding: 3rem 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
          color: var(--text-muted);
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
