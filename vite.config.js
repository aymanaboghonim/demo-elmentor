import { defineConfig } from 'vite';

export default defineConfig({
  base: '/demo-elmentor/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  },
  server: {
    port: 5173,
    strictPort: false
  }
});
