import React, { useEffect, useRef, useCallback } from 'react';

const THROTTLE_DELAY = 200; // ms

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameIdRef = useRef<number>(0);
  const isVisibleRef = useRef(true);
  const resizeTimeoutRef = useRef<number>(0);

  const throttledResize = useCallback((handler: () => void) => {
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }
    resizeTimeoutRef.current = window.setTimeout(handler, THROTTLE_DELAY);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      canvas.style.display = 'none';
      return;
    }

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;

    const fontSize = 14;
    let columns = width / fontSize;

    const rainDrops: number[] = [];

    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    const draw = (currentTime: number) => {
      // Skip if tab is not visible
      if (!isVisibleRef.current) {
        animationFrameIdRef.current = requestAnimationFrame(draw);
        return;
      }

      animationFrameIdRef.current = requestAnimationFrame(draw);

      const deltaTime = currentTime - lastTime;
      if (deltaTime < interval) return;

      lastTime = currentTime - (deltaTime % interval);

      ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        const colors = ['#00f3ff', '#bc13fe', '#333333'];
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];

        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    animationFrameIdRef.current = requestAnimationFrame(draw);

    // Handle visibility changes
    const handleVisibilityChange = () => {
      isVisibleRef.current = document.visibilityState === 'visible';
    };

    // Handle resize with throttle
    const handleResize = () => {
      throttledResize(() => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        columns = width / fontSize;
        rainDrops.length = 0;
        for (let x = 0; x < columns; x++) {
          rainDrops[x] = 1;
        }
      });
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameIdRef.current);
      clearTimeout(resizeTimeoutRef.current);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
    };
  }, [throttledResize]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 opacity-40 motion-reduce:hidden"
      aria-hidden="true"
    />
  );
};

export default MatrixBackground;
