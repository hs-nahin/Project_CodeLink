import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': { REACT_APP_BACKEND_URL: JSON.stringify(process.env.REACT_APP_BACKEND_URL) },
  },
});
