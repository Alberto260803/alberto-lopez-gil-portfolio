/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#0A0918',
          soft: '#120F2A',
        },
        panel: {
          DEFAULT: '#171335',
          light: '#1F1A45',
        },
        gold: {
          DEFAULT: '#F4C548',
          soft: '#FFE29A',
        },
        ssr: '#9B6BFF',
        sr: '#4FA8FF',
        live: '#3FE8C6',
        ink: {
          DEFAULT: '#F3F1FF',
          muted: '#9E9AC7',
          dim: '#6C6791',
        },
      },
      fontFamily: {
        display: ['"Orbitron"', 'sans-serif'],
        heading: ['"Rajdhani"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'starfield': "radial-gradient(1px 1px at 20px 30px, white, transparent), radial-gradient(1px 1px at 90px 80px, white, transparent), radial-gradient(1.5px 1.5px at 160px 40px, white, transparent)",
      },
      boxShadow: {
        'glow-gold': '0 0 25px -3px rgba(244, 197, 72, 0.5)',
        'glow-ssr': '0 0 25px -3px rgba(155, 107, 255, 0.5)',
        'glow-live': '0 0 25px -3px rgba(63, 232, 198, 0.45)',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-150%) rotate(20deg)' },
          '100%': { transform: 'translateX(150%) rotate(20deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fill-bar': {
          '0%': { width: '0%' },
        },
        rise: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.8s ease-in-out infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        rise: 'rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
}
