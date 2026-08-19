import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch screens
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const handleElementHover = () => {
      const interactiveEls = document.querySelectorAll('a, button, input, select, textarea, .glass-card, .admin-tab, [role="button"]');
      interactiveEls.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    handleElementHover();
    const interval = setInterval(handleElementHover, 2500);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let animationFrameId;
    const follow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(follow);
    };
    animationFrameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="custom-cursor-container">
      {/* Primary Dot Cursor */}
      <div 
        className={`cursor-dot ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`} 
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
      {/* Trailing Outer Ring Cursor */}
      <div 
        className={`cursor-ring ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`} 
        style={{ transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)` }}
      />

      <style>{`
        @media (pointer: coarse) {
          .custom-cursor-container { display: none !important; }
        }
        .custom-cursor-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 999999;
        }
        .cursor-dot {
          position: fixed;
          top: -4px;
          left: -4px;
          width: 8px;
          height: 8px;
          background: #38bdf8;
          border-radius: 50%;
          pointer-events: none;
          box-shadow: 0 0 12px #38bdf8;
          transition: width 0.2s, height 0.2s, background-color 0.2s;
          will-change: transform;
        }
        .cursor-dot.hovered {
          width: 12px;
          height: 12px;
          top: -6px;
          left: -6px;
          background: #f43f5e;
          box-shadow: 0 0 18px #f43f5e;
        }
        .cursor-ring {
          position: fixed;
          top: -18px;
          left: -18px;
          width: 36px;
          height: 36px;
          border: 1.5px solid rgba(99, 102, 241, 0.65);
          border-radius: 50%;
          pointer-events: none;
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.35);
          transition: width 0.25s ease-out, height 0.25s ease-out, top 0.25s ease-out, left 0.25s ease-out, border-color 0.25s;
          will-change: transform;
        }
        .cursor-ring.hovered {
          top: -26px;
          left: -26px;
          width: 52px;
          height: 52px;
          border-color: #a855f7;
          background: rgba(168, 85, 247, 0.08);
          box-shadow: 0 0 30px rgba(168, 85, 247, 0.45);
        }
        .cursor-ring.clicked {
          transform: scale(0.85);
          border-color: #10b981;
        }
      `}</style>
    </div>
  );
};
