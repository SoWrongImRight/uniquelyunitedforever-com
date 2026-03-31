import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Split vendor chunk so React/router don't re-download on content changes
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'styled-components'],
        },
      },
    },
    // Inline assets smaller than 4 KB (icons, tiny SVGs)
    assetsInlineLimit: 4096,
    // Modern targets only — removes legacy polyfills
    target: 'es2015',
  },
  // Ensure SPA fallback works on Netlify/Vercel; also add _redirects or vercel.json (see TASK 08)
});
