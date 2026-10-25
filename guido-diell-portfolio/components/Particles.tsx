import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

const THROTTLE_RESIZE_MS = 200;

const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Crea 30 particelle
    const particles: Particle[] = [];
    const colors = ['#00f3ff', '#bc13fe', '#ffffff'];
    
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId = 0;
    let lastTime = 0;
    const interval = 1000 / 30; // 30fps per performance

    const animate = (currentTime: number) => {
      if (document.visibilityState !== 'visible') {
        animationId = requestAnimationFrame(animate);
        return;
      }

      animationId = requestAnimationFrame(animate);

      const deltaTime = currentTime - lastTime;
      if (deltaTime < interval) return;
      lastTime = currentTime - (deltaTime % interval);

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        // Aggiorna posizione
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrapping
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        // Disegna particella
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    };

    const startAnimation = () => {
      if (animationId === 0) {
        lastTime = 0;
        animationId = requestAnimationFrame(animate);
      }
    };

    const stopAnimation = () => {
      if (animationId !== 0) {
        cancelAnimationFrame(animationId);
        animationId = 0;
      }
      ctx.clearRect(0, 0, width, height);
    };

    if (!motionQuery.matches) {
      startAnimation();
    } else {
      stopAnimation();
    }

    let resizeTimeout: number | undefined;
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
      }, THROTTLE_RESIZE_MS);
    };

    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        stopAnimation();
      } else {
        startAnimation();
      }
    };

    window.addEventListener('resize', handleResize);
    motionQuery.addEventListener('change', handleMotionChange);

    return () => {
      stopAnimation();
      if (resizeTimeout) clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[1] pointer-events-none motion-reduce:hidden"
      aria-hidden="true"
    />
  );
};

export default Particles;
