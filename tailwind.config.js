/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fefdfb',
          100: '#fdf9f1',
        },
        charcoal: {
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#1C1C1C',
        },
        gold: {
          100: '#fef3c7',
          200: '#fde68a',
          400: '#fbbf24',
          500: '#D4AF37',
          600: '#b8941f',
          hover: '#C89F2D', // Use this via bg-gold-hover
        },
        forestgreen: {
          DEFAULT: '#1A3D2F',
          dark: '#16372A',
          hover: '#145B3A',
        },
        copper: {
          DEFAULT: '#B87333',
          dark: '#9A5F2B',
          hover: '#8B4F23',
        },
        background: {
          ivory: '#FAF9F6',
          softcream: '#F5F5DC',
        },
        textcolor: {
          darkgrey: '#333333',
          white: '#FFFFFF',
        },

        // ✅ Added aliases for convenience
        white: '#FFFFFF',
        'accent-gold': '#D4AF37',
        'primary-charcoal': {
          900: '#1C1C1C',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
