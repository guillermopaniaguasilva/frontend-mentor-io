import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@commons': path.resolve(__dirname, 'commons/src'),
    },
  },
});
