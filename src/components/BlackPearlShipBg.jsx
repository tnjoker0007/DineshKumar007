import React, { useEffect, useState } from 'react';

export const BlackPearlShipBg = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / (height || 1)) * 360; // 0 to 360 degrees rotation
      setRotation(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="black-pearl-ship-container">
      <div 
        className="black-pearl-frame"
        style={{
          transform: `rotate(${rotation}deg)`
        }}
      >
        <img 
          src="/images/black_pearl_ship.png" 
          alt="Black Pearl Pirate Ship" 
          className="black-pearl-img"
        />
      </div>

      <style>{`
        .black-pearl-ship-container {
          position: fixed;
          top: 50%;
          right: 3%;
          width: 440px;
          height: 440px;
          transform: translateY(-50%);
          pointer-events: none;
          z-index: 0;
          opacity: 0.38;
          mix-blend-mode: screen;
          transition: opacity 0.3s ease;
        }
        .black-pearl-frame {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.1s linear;
          will-change: transform;
          filter: drop-shadow(0 0 40px rgba(56, 189, 248, 0.5));
        }
        .black-pearl-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 50%;
        }
        @media (max-width: 1024px) {
          .black-pearl-ship-container {
            width: 320px;
            height: 320px;
            right: -40px;
            opacity: 0.25;
          }
        }
        @media (max-width: 640px) {
          .black-pearl-ship-container {
            width: 240px;
            height: 240px;
            right: -60px;
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
};
