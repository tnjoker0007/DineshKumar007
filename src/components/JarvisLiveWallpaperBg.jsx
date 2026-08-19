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
          transition: all 0.4s ease;
        }
        .jarvis-video-element {
          width: 93vw;
          height: 93vh;
          object-fit: contain;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1.75);
          filter: contrast(115%) brightness(1.1) drop-shadow(0 0 25px rgba(56, 189, 248, 0.4));
          transition: filter 0.4s ease;
        }

        /* Light Theme Adaptation: Blue Holographic Blueprint HUD */
        [data-theme="light"] .jarvis-live-wallpaper-container {
          mix-blend-mode: multiply;
          opacity: 0.55;
        }
        [data-theme="light"] .jarvis-video-element {
          filter: invert(0.92) hue-rotate(190deg) contrast(150%) drop-shadow(0 0 20px rgba(99, 102, 241, 0.35));
        }

        @media (max-width: 768px) {
          .jarvis-video-element {
            width: 98vw;
            height: 98vh;
            transform: translate(-50%, -50%) scale(1.75);
          }
          .jarvis-live-wallpaper-container {
            opacity: 0.35;
          }
        }
      `}</style>
    </div>
  );
};
