import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  maxOpacity: number;
  fadeSpeed: number;
  fadingIn: boolean;
  color: string;
}

export const GoldParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Gold & Amber palette for particles
    const colors = [
      'rgba(212, 175, 55, ',
      'rgba(184, 134, 11, ',
      'rgba(202, 148, 26, ',
      'rgba(224, 170, 45, ',
      'rgba(166, 118, 10, ',
    ];

    // Responsive particle count (fewer on mobile to guarantee 60fps)
    const particleCount = width < 768 ? 32 : 55;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.8,
        speedY: -(Math.random() * 0.45 + 0.15), // Gentle upward drift
        speedX: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.7 + 0.1,
        maxOpacity: Math.random() * 0.6 + 0.35,
        fadeSpeed: Math.random() * 0.008 + 0.003,
        fadingIn: Math.random() > 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let lastTime = performance.now();

    const render = (currentTime: number) => {
      if (!isVisible) return;

      const deltaTime = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      ctx.clearRect(0, 0, width, height);

      // Draw each particle
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Animate fade
        if (p.fadingIn) {
          p.opacity += p.fadeSpeed;
          if (p.opacity >= p.maxOpacity) {
            p.fadingIn = false;
          }
        } else {
          p.opacity -= p.fadeSpeed;
          if (p.opacity <= 0.05) {
            p.fadingIn = true;
            // Respawn occasionally
            p.x = Math.random() * width;
            p.y = height + 10;
          }
        }

        // Float motion
        p.y += p.speedY * (deltaTime * 60);
        p.x += p.speedX * (deltaTime * 60);

        // Wrap around bounds
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Draw glowing gold particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity.toFixed(2)})`;
        ctx.shadowBlur = p.size * 3.5;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.6)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.85 }}
    />
  );
};
