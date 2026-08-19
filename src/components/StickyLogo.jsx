import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export const StickyLogo = () => {
  const { setCurrentPage } = usePortfolio();

  return (
    <div 
      className="sticky-logo-container"
      onClick={() => {
        setCurrentPage('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      title="Return to Top / Home"
    >
      <img 
        src="/images/footer_logo.png" 
        alt="Dinesh Kumar Logo" 
        className="sticky-logo-img"
      />

      <style>{`
        .sticky-logo-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 18px;
          border-radius: 9999px;
          background: rgba(13, 20, 36, 0.9);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(99, 102, 241, 0.4);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sticky-logo-container:hover {
          transform: translateY(-5px) scale(1.08);
          border-color: rgba(99, 102, 241, 0.8);
          box-shadow: 0 18px 45px rgba(99, 102, 241, 0.6);
          background: rgba(23, 33, 56, 0.98);
        }
        .sticky-logo-img {
          height: 56px;
          width: auto;
          object-fit: contain;
          display: block;
        }
        @media (max-width: 640px) {
          .sticky-logo-container {
            bottom: 16px;
            right: 16px;
            padding: 8px 14px;
          }
          .sticky-logo-img {
            height: 44px;
          }
        }
      `}</style>
    </div>
  );
};
