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
        dark: '#24262a',
        'dark-100': '#8f8f92',
        'gray-200': '#ebebed',
        'dark-300': '#2d2e33',
        'dark-500': '#282b30',
      },
    },
  },
};
