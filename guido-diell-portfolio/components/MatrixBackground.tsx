import React, { useEffect, useRef } from 'react';
import { usePerformanceMode } from '../contexts/PerformanceContext';

const THROTTLE_DELAY = 250; // ms
const FPS = 12;
const FONT_SIZE = 20;
const MATRIX_COLORS = ['#00f3ff', '#0ea5e9', '#7c3aed', '#2a2a2a'];

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameIdRef = useRef<number>(0);
  const isVisibleRef = useRef(true);
  const resizeTimeoutRef = useRef<number>(0);
  const { autoPerformanceMode } = usePerformanceMode();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (autoPerformanceMode) {
      canvas.style.display = 'none';
      return;
    }
    canvas.style.display = '';

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check for reduced motion preference
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const coarsePointerQuery = window.matchMedia('(pointer: coarse)');
    if (reducedMotionQuery.matches || coarsePointerQuery.matches) {
      canvas.style.display = 'none';
      return;
    }

    let width = window.innerWidth;
    let height = window.innerHeight;
    let pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    setCanvasSize();

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;

    let columns = Math.ceil(width / FONT_SIZE);

    const rainDrops: number[] = [];
    const columnColors: string[] = [];

    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
      columnColors[x] = MATRIX_COLORS[x % MATRIX_COLORS.length];
    }

    let lastTime = 0;
    const interval = 1000 / FPS;

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

      ctx.font = `${FONT_SIZE}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillStyle = columnColors[i];

        ctx.fillText(text, i * FONT_SIZE, rainDrops[i] * FONT_SIZE);

        if (rainDrops[i] * FONT_SIZE > height && Math.random() > 0.985) {
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
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      resizeTimeoutRef.current = window.setTimeout(() => {
        setCanvasSize();
        columns = Math.ceil(width / FONT_SIZE);
        rainDrops.length = 0;
        columnColors.length = 0;
        for (let x = 0; x < columns; x++) {
          rainDrops[x] = 1;
          columnColors[x] = MATRIX_COLORS[x % MATRIX_COLORS.length];
        }
      }, THROTTLE_DELAY);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameIdRef.current);
      clearTimeout(resizeTimeoutRef.current);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
    };
  }, [autoPerformanceMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 opacity-30 motion-reduce:hidden"
      aria-hidden="true"
    />
  );
};

export default MatrixBackground;
