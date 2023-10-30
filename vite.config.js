import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@commons': path.resolve(__dirname, 'commons/src'),
      '@assets': path.resolve(__dirname, 'assets'),
    },
  },
});
