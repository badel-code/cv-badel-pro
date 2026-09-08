/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          bg: '#0A0A14',
          surface: '#11111F',
          card: '#131325',
          cardHover: '#1A1A33',
          border: 'rgba(123, 97, 255, 0.18)',
          borderHover: 'rgba(123, 97, 255, 0.45)',
          violet: '#7B61FF',
          violetLight: '#9E86FF',
          violetDark: '#5638E8',
          ghost: '#F0EFF4',
          graphite: '#18181B',
          muted: '#8E8EA8',
          cyanGlow: '#00F0FF',
        }
      },
      fontFamily: {
        sans: ['"Sora"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      borderRadius: {
        '2rem': '2rem',
        '2.5rem': '2.5rem',
        '3rem': '3rem',
        '4rem': '4rem',
      },
      boxShadow: {
        'neon': '0 0 25px rgba(123, 97, 255, 0.35)',
        'neon-strong': '0 0 45px rgba(123, 97, 255, 0.55)',
        'neon-subtle': '0 0 15px rgba(123, 97, 255, 0.2)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(123, 97, 255, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
