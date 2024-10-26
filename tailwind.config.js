/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // updated 'purge' to 'content'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#45a834',
          light: '#66c156', // Lighter shade of primary
          dark: '#358627',  // Darker shade of primary
          100: '#e2f3df',   // Lightest shade of primary
          200: '#b4e0a6',   // Lighter variant
          300: '#87cd70',   // Regular light
          400: '#5dbb48',   // Slightly lighter than default
          500: '#45a834',   // Default
          600: '#358627',   // Darker variant
          700: '#29661c',   // Darkest shade
        },
      },
    },
  },
  darkMode: 'media', // change `false` to `media` or remove the line entirely if not needed
  plugins: [],
}
