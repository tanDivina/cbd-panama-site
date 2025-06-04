// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';    // Import tailwindcss
import autoprefixer from 'autoprefixer';  // Import autoprefixer

export default defineConfig({
  plugins: [react()],
  css: { // Add this 'css' section
    postcss: {
      plugins: [
        tailwindcss,    // Use the imported tailwindcss
        autoprefixer,   // Use the imported autoprefixer
        // You can pass options to tailwindcss if needed, e.g., tailwindcss('./tailwind.config.js')
        // but it should find tailwind.config.js by default if it's in the root.
      ],
    },
  },
  server: {
    host: '0.0.0.0',
  },
});