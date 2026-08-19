import React, { useEffect, useState } from 'react';

export const ScrollProgressBar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollPercent(scrolled || 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollPercent}%` }}
      />

      <style>{`
        .scroll-progress-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 3.5px;
          background: rgba(255, 255, 255, 0.05);
          z-index: 999999;
          pointer-events: none;
        }
        .scroll-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
          box-shadow: 0 0 12px rgba(168, 85, 247, 0.8), 0 0 20px rgba(99, 102, 241, 0.6);
          transition: width 0.1s ease-out;
        }
      `}</style>
    </div>
  );
};
