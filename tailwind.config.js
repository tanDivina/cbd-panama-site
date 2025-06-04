// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#4CAF50',         // Your existing primary green (can be replaced/removed if brand-teal is new primary)
          'secondary': '#8BC34A',       // Your existing secondary green
          'accent': '#CDDC39',          // Your existing accent
          'brand-teal': '#57857b',      // Your new brand teal color
          'neutral': '#F5F5F5',
          'text-primary': '#212121',
          'text-secondary': '#757575',
        },
        fontFamily: {
          sans: ['Nunito Sans', 'Open Sans', 'sans-serif'], // Nunito Sans as primary sans-serif
          serif: ['Merriweather', 'serif'],
        },
        boxShadow: {
          'subtle': '0 2px 4px rgba(0,0,0,0.05)',
          'card': '0 4px 8px rgba(0,0,0,0.1)',
        }
      },
    },
    plugins: [
      require('@tailwindcss/typography'), // Add back the typography plugin
    ],
  }