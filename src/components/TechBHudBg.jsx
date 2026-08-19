import React from 'react';

export const TechBHudBg = () => {
  return (
    <div className="tech-b-hud-container">
      <img 
        src="/images/tech_b_hud_bg.png" 
        alt="Tech-B HUD Background" 
        className="tech-b-hud-image"
      />
      <img 
        src="/images/tech_b_rotator.png" 
        alt="Tech-B Rotator" 
        className="tech-b-rotator-image"
      />

      <style>{`
        .tech-b-hud-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 0;
          opacity: 0.40;
          overflow: hidden;
          mix-blend-mode: screen;
        }
        .tech-b-hud-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
          filter: drop-shadow(0 0 20px rgba(56, 189, 248, 0.4));
        }
        .tech-b-rotator-image {
          position: absolute;
          top: 15%;
          left: 10%;
          width: 450px;
          height: 450px;
          object-fit: contain;
          opacity: 0.85;
          animation: spinRotator 40s linear infinite;
          filter: drop-shadow(0 0 25px rgba(168, 85, 247, 0.5));
        }
        @keyframes spinRotator {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .tech-b-rotator-image {
            width: 280px;
            height: 280px;
            top: 10%;
            left: 5%;
          }
        }
      `}</style>
    </div>
  );
};
