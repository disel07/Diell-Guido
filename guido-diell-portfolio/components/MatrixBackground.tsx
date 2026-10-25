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

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

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

    const startAnimation = () => {
      if (animationFrameIdRef.current === 0) {
        canvas.style.display = 'block';
        lastTime = 0;
        animationFrameIdRef.current = requestAnimationFrame(draw);
      }
    };

    const stopAnimation = () => {
      if (animationFrameIdRef.current !== 0) {
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = 0;
      }
      canvas.style.display = 'none';
      ctx.clearRect(0, 0, width, height);
    };

    if (!motionQuery.matches) {
      startAnimation();
    } else {
      stopAnimation();
    }

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

    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        stopAnimation();
      } else {
        startAnimation();
      }
    };

    motionQuery.addEventListener('change', handleMotionChange);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('resize', handleResize);

    return () => {
      stopAnimation();
      clearTimeout(resizeTimeoutRef.current);
      motionQuery.removeEventListener('change', handleMotionChange);
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
