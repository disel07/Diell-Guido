/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // Aggiunto perché la tua struttura usa components/ alla root
    "./*.{js,ts,jsx,tsx}" // Per App.tsx alla root
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Orbitron', 'monospace'],
      },
      colors: {
        cyber: {
          primary: '#00f3ff',
          secondary: '#bc13fe',
          dark: '#050505',
          card: 'rgba(20, 20, 30, 0.6)',
        }
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}