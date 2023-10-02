import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

process.env.NODE_ENV = 'production'
const ASSET_URL = process.env.ASSET_URL || '';
console.log("ASSET URL ", ASSET_URL);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url))
  //   }
  // }


  define: { 'process.env': {} },
  resolve: {
      alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: [
          '.js',
          '.json',
          '.jsx',
          '.mjs',
          '.ts',
          '.tsx',
          '.vue',
      ],
  },
  server: {
      port: 3000,
      open: true,
      cors: true,
  },
  // base: './',
  base: './dist/assets/'
  // base: `${ASSET_URL}/dist/`,
});

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/atelierFrancois/'
    : '/'
}