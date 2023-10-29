import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import rootConfig from '../../vite.config';

export default defineConfig({
  // Your app-specific configuration here
  plugins: [react()],
  server: {},

  // Merge the root-level alias configuration with app-specific aliases
  resolve: {
    alias: {
      ...rootConfig.resolve.alias,
    },
  },
});
