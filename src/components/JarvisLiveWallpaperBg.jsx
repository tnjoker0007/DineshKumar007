import React from 'react';

export const JarvisLiveWallpaperBg = () => {
  return (
    <div className="jarvis-live-wallpaper-container">
      <video
        src="/video/jarvis_hud.mp4"
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
          opacity: 0.40;
          overflow: hidden;
          mix-blend-mode: screen;
        }
        .jarvis-video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
          filter: contrast(115%) brightness(1.1) drop-shadow(0 0 25px rgba(56, 189, 248, 0.4));
        }
        @media (max-width: 768px) {
          .jarvis-live-wallpaper-container {
            opacity: 0.30;
          }
        }
      `}</style>
    </div>
  );
};
