import path from 'path';
import { defineConfig } from 'vite';
import viteConfig from '../../vite.config';

export default defineConfig({
  plugins: [...viteConfig.plugins],
  server: {},

  resolve: {
    alias: {
      ...viteConfig.resolve.alias,
      '@context': path.resolve(__dirname, 'src/context'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
});
