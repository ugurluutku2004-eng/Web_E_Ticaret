/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff4ec',
          100: '#ffe6d3',
          200: '#ffd1a8',
          300: '#ffb070',
          400: '#ff8b38',
          500: '#ff6a00',
          600: '#e05d00',
          700: '#b34800',
          800: '#8a3600',
          900: '#5c2400',
        },
        ink: {
          900: '#111111',
          800: '#1b1b1b',
          700: '#2b2b2b',
          500: '#4b4b4b',
        },
        sand: {
          50: '#fffaf6',
          100: '#fff3ea',
          200: '#ffe9d9',
        },
      },
      boxShadow: {
        soft: '0 20px 50px -30px rgba(17, 17, 17, 0.35)',
        card: '0 12px 30px -20px rgba(17, 17, 17, 0.4)',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'sunset': 'radial-gradient(circle at top, rgba(255, 106, 0, 0.22), transparent 55%), radial-gradient(circle at 20% 20%, rgba(255, 176, 112, 0.3), transparent 45%)',
      },
    },
  },
  plugins: [],
};
