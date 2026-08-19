import React, { useEffect, useRef } from 'react';

const CODE_SNIPPETS = [
  "public class DineshKumar { public static void main() { System.out.println('Team Lead @ LTI'); } }",
  "def async_pipeline(stream: Stream) -> JSON: return await stream.transform(mode='AI_IoT')",
  "const [portfolio, setPortfolio] = useState({ owner: 'Dinesh Kumar E', certs: 22, score: '84%' });",
  "SELECT id, title, issuer, verify_url FROM credentials WHERE status = 'VERIFIED_OK';",
  "void setup() { Serial.begin(115200); WiFi.begin(STATION_SSID, PASS); initIoTCloud(); }",
  "interface SoftwareEngineer { name: string; skills: string[]; iotEnabled: boolean; }",
  "<div className='glass-card glow-border backdrop-blur flex items-center'>",
  "fetch('/api/admin/data').then(res => res.json()).then(renderLivePortfolio);",
  "@SpringBootApplication public class LtiTechPlatform { @Autowired Service cloudService; }",
  "import torch, numpy as np; model = Transformer.from_pretrained('deepmind/antigravity');",
  "async function deployProduction() { await vercel.deploy({ branch: 'main' }); }",
  "const ioTGateway = new SmartSensors({ frequency: '5GHz', protocol: 'MQTT' });"
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
    const colSpacing = 160;
    const columnsCount = Math.floor(canvas.width / colSpacing) + 2;

    const colors = ['#38bdf8', '#c084fc', '#34d399', '#f43f5e', '#fbbf24', '#22d3ee', '#818cf8'];
    
    const columns = Array.from({ length: columnsCount }).map((_, i) => ({
      x: i * colSpacing + (Math.random() * 20 - 10),
      y: Math.random() * canvas.height,
      speed: 0.6 + Math.random() * 0.8,
      snippetIndex: Math.floor(Math.random() * CODE_SNIPPETS.length),
      charIndex: Math.floor(Math.random() * 30),
      color: colors[i % colors.length],
      opacity: 0.4 + Math.random() * 0.35
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `600 ${fontSize}px "Fira Code", "Courier New", monospace`;

      columns.forEach((col) => {
        const fullSnippet = CODE_SNIPPETS[col.snippetIndex];
        col.charIndex += 0.2;

        if (col.charIndex >= fullSnippet.length) {
          col.charIndex = 0;
          col.snippetIndex = (col.snippetIndex + 1) % CODE_SNIPPETS.length;
          col.y = -30;
          col.x = Math.random() * (canvas.width - 100);
        }

        const visibleText = fullSnippet.substring(0, Math.floor(col.charIndex));

        ctx.shadowColor = col.color;
        ctx.shadowBlur = 10;
        ctx.fillStyle = col.color;
        ctx.globalAlpha = col.opacity;
        ctx.fillText(visibleText, col.x, col.y);

        col.y += col.speed;
        if (col.y > canvas.height + 40) {
          col.y = -30;
          col.x = Math.random() * (canvas.width - 100);
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
        zIndex: 1,
        opacity: 0.85
      }}
    />
  );
};
