import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';


process.env.NODE_ENV = 'production';
process.env.ASSET_URL = `/dist/`;

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.startsWith('vtx-')
        }
      }
    }),
    vueJsx(),
  ],
  base: `${process.env.ASSET_URL}`,
  server: {
    port: 1234,
    open: true,
    cors: true,
  },
  define: {
    ASSET_URL: JSON.stringify(process.env.ASSET_URL) || "",
    NODE_ENV: JSON.stringify(process.env.NODE_ENV) || "",
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: './dist',
    assetsInlineLimit: 0,
    rollupOptions: {
      input: './index.html'
    },
  },
})
