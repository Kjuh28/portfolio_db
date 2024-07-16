/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      blue_g_50: '#eceff1',
      blue_g_100: '#cfd8dc',
      blue_g_200: '#b0bec5',
      blue_g_300: '#90a4ae',
      blue_g_400: '#78909c',
      blue_g_600: '#546e7a',
      blue_g_800: '#37474f',
      blue_g_900: '#263238',

      gray_900: '#212121',

      orange_100: '#ffe0b2',
      orange_200: '#ffcc80',
      orange_400: '#ffa726',
      orange_500: '#ff9800',
      orange_600: '#fb8c00',
      orange_700: '#f57c00',
      orange_800: '#ef6c00',

      black: '#141416',
      white: '#ffffff',
    },
    fontFamily:{
      'roboto':['Roboto', 'sans-serif','400','normal'],
      'roboto-bold':['Roboto','sans-serif','700','normal'],
      
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}