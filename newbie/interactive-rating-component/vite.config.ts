import { defineConfig } from 'vite';

import viteConfig from '../../vite.config';

export default defineConfig({
  plugins: [...viteConfig.plugins],
  server: {},

  resolve: {
    alias: {
      ...viteConfig.resolve.alias,
    },
  },
});
