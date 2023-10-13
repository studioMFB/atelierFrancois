import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';


process.env.NODE_ENV = 'production';
process.env.ASSET_URL = `/dist/`;


export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  define: {
    ASSET_URL: JSON.stringify(process.env.ASSET_URL) || "",
    NODE_ENV: JSON.stringify(process.env.NODE_ENV) || "",
  },
  resolve: {
      alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: [
          '.js',
          '.json',
          '.jsx',
          '.ts',
          '.tsx',
          '.vue',
      ],
  },
  server: {
      port: 1234,
      open: true,
      cors: true,
  },
  // base: './',
  // base: './dist/'
  base: `${process.env.ASSET_URL}`,
});
