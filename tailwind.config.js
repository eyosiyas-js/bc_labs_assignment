/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        'word-tight': '-0.1em',
        'word-normal': '0em',
        'word-wide': '0.1em',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.word-tight': {
          'word-spacing': '-0.3em',
        },
        '.word-normal': {
          'word-spacing': '0em',
        },
        '.word-wide': {
          'word-spacing': '0.1em',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}
