/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
      arabic: ['Amiri'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        primary: '#507c5c',
        body: '#fffaec',
        light: '#f0efe0',
        'light-200': '#d8d6af',
        dark: '#24262a',
        'dark-100': '#8f8f92',
        'gray-200': '#ebebed',
        'dark-300': '#2d2e33',
        'dark-500': '#282b30',
        'dark-800': '#41434b',
        'dark-900': '#202225',
        green: {
          50: '#f2f7f3',
          100: '#e0ebe1',
          200: '#c3d7c6',
          300: '#9bbaa2',
          400: '#6f9879',
          500: '#507c5c',
          600: '#3b6046',
          700: '#2f4d38',
          800: '#273e2f',
          900: '#213327',
          950: '#121c16',
        },
      },
    },
  },
};
