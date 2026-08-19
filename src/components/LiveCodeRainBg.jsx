import React, { useEffect, useRef } from 'react';

const DUMMY_CODE_SNIPPETS = [
  "01001001 01101110 01110100 01100101 01101100 01101100 01101001 01100111 01100011 01100101",
  "function computeMatrix(x, y, z) { return (x * 0x1f + y * 0x3d + z) ^ 0xff; }",
  "const calculateDistance = (a, b) => Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));",
  "if (node.isLeaf) { processBuffer(node.value); return node.next; }",
  "struct QuantumNode { float amplitude; uint32_t frequency; bool active; };",
  "<g transform='translate(50, 50)'><circle r='40' stroke='cyan' strokeWidth='2' /></g>",
  "std::vector<uint64_t> buffer = parseStreamData(rawInput, 1024);",
  "for (let i = 0; i < 256; i++) { hash = (hash << 5) - hash + i; }",
  "import { useEffect, useState, useRef } from 'react';",
  "SELECT id, hash_key, created_at FROM system_logs WHERE status = 200;",
  "void processInterrupt() { volatile uint8_t state = READ_REG(); }",
  "export default function RenderPipeline({ nodes, edges }) { return <Canvas /> }"
];

export const LiveCodeRainBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const fontSize = 14;
    const colSpacing = 170;
    const columnsCount = Math.floor(canvas.width / colSpacing) + 2;

    const darkColors = ['#38bdf8', '#c084fc', '#34d399', '#f43f5e', '#fbbf24', '#818cf8', '#22d3ee'];
    const lightColors = ['#0284c7', '#7c3aed', '#059669', '#dc2626', '#d97706', '#4f46e5', '#0891b2'];
    
    const columns = Array.from({ length: columnsCount }).map((_, i) => ({
      x: (i * colSpacing) + 15,
      y: Math.random() * canvas.height,
      speed: 0.6 + Math.random() * 0.7,
      snippetIndex: Math.floor(Math.random() * DUMMY_CODE_SNIPPETS.length),
      charIndex: Math.floor(Math.random() * 20),
      colorIndex: i % darkColors.length,
      opacity: 0.5 + Math.random() * 0.3
    }));

    const render = () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const activeColors = isLight ? lightColors : darkColors;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `700 ${fontSize}px "Fira Code", monospace`;

      columns.forEach((col) => {
        const fullSnippet = DUMMY_CODE_SNIPPETS[col.snippetIndex];
        col.charIndex += 0.16;

        if (col.charIndex >= fullSnippet.length) {
          col.charIndex = 0;
          col.snippetIndex = (col.snippetIndex + 1) % DUMMY_CODE_SNIPPETS.length;
          col.y = -30;
        }

        const visibleText = fullSnippet.substring(0, Math.floor(col.charIndex));
        const color = activeColors[col.colorIndex];

        ctx.shadowColor = color;
        ctx.shadowBlur = isLight ? 2 : 8;
        ctx.fillStyle = color;
        ctx.globalAlpha = isLight ? 0.65 : col.opacity;
        ctx.fillText(visibleText, col.x, col.y);

        col.y += col.speed;
        if (col.y > canvas.height + 40) {
          col.y = -30;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="live-code-rain-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.45
      }}
    />
  );
};
