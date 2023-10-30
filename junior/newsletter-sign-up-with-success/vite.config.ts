import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import rootConfig from '../../vite.config';

export default defineConfig({
  plugins: [react()],
  server: {},

  resolve: {
    alias: {
      ...rootConfig.resolve.alias,
    },
  },
});
