import React from 'react';

export const JarvisLiveWallpaperBg = () => {
  return (
    <div className="jarvis-live-wallpaper-container">
      <video
        src="/video/jarvis_hud_opt.mp4"
        poster="/images/jarvis_preview.gif"
        autoPlay
        loop
        muted
        playsInline
        className="jarvis-video-element"
      />

      <style>{`
        .jarvis-live-wallpaper-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 0;
          opacity: 0.45;
          overflow: hidden;
          mix-blend-mode: screen;
        }
        .jarvis-video-element {
          width: 82vw;
          height: 82vh;
          object-fit: contain;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          filter: contrast(115%) brightness(1.1) drop-shadow(0 0 25px rgba(56, 189, 248, 0.4));
        }
        @media (max-width: 768px) {
          .jarvis-video-element {
            width: 95vw;
            height: 95vh;
          }
          .jarvis-live-wallpaper-container {
            opacity: 0.35;
          }
        }
      `}</style>
    </div>
  );
};
