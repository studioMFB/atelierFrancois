import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

const ASSET_URL = process.env.ASSET_URL || '';
console.log("ASSET URL ", ASSET_URL);

// https://vitejs.dev/config/
export default defineConfig({
  base: `${ASSET_URL}/dist/`,
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/atelierFrancois/'
    : '/'
}
