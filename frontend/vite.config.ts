import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './app',
  envDir: '.',
  plugins: [react()],
  server: {
    port: 1234,
    open: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./module/src', import.meta.url)),
      '@app': fileURLToPath(new URL('./app', import.meta.url))
    }
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})
