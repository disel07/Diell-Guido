import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const isProduction = mode === 'production';
    return {
      base: '/Diell-Guido/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        modulePreload: {
          resolveDependencies: (_filename, deps) =>
            deps.filter((dep) => !dep.includes('/motion-') && !dep.startsWith('assets/motion-')),
        },
        rollupOptions: {
          output: {
            manualChunks: isProduction
              ? {
                  react: ['react', 'react-dom', 'react-router-dom'],
                  motion: ['framer-motion'],
                  icons: ['lucide-react'],
                }
              : undefined,
          },
        },
      }
    };
});
