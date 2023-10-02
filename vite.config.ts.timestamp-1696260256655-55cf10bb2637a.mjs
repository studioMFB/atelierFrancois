// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/francois.brunet/Documents/DEV/atelierFrancois/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/francois.brunet/Documents/DEV/atelierFrancois/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/francois.brunet/Documents/DEV/atelierFrancois/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/francois.brunet/Documents/DEV/atelierFrancois/vite.config.ts";
process.env.NODE_ENV = "production";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  define: {
    ASSET_URL: JSON.stringify(process.env.ASSET_URL) || "",
    NODE_ENV: JSON.stringify(process.env.NODE_ENV) || ""
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    },
    extensions: [
      ".js",
      ".json",
      ".jsx",
      ".ts",
      ".tsx",
      ".vue"
    ]
  },
  server: {
    port: 3e3,
    open: true,
    cors: true
  },
  // base: './',
  // base: './dist/assets/'
  base: `${process.env.ASSET_URL}/dist/`
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxmcmFuY29pcy5icnVuZXRcXFxcRG9jdW1lbnRzXFxcXERFVlxcXFxhdGVsaWVyRnJhbmNvaXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGZyYW5jb2lzLmJydW5ldFxcXFxEb2N1bWVudHNcXFxcREVWXFxcXGF0ZWxpZXJGcmFuY29pc1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvZnJhbmNvaXMuYnJ1bmV0L0RvY3VtZW50cy9ERVYvYXRlbGllckZyYW5jb2lzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xyXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnO1xyXG5cclxuXHJcbnByb2Nlc3MuZW52Lk5PREVfRU5WID0gJ3Byb2R1Y3Rpb24nO1xyXG4vLyBjb25zdCBBU1NFVF9VUkwgPSBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5BU1NFVF9VUkwpIHx8IFwiXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoKSxcclxuICAgIHZ1ZUpzeCgpLFxyXG4gIF0sXHJcbiAgZGVmaW5lOiB7XHJcbiAgICBBU1NFVF9VUkw6IEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuZW52LkFTU0VUX1VSTCkgfHwgXCJcIixcclxuICAgIE5PREVfRU5WOiBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5OT0RFX0VOVikgfHwgXCJcIixcclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgICAgYWxpYXM6IHtcclxuICAgICAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXHJcbiAgICAgIH0sXHJcbiAgICAgIGV4dGVuc2lvbnM6IFtcclxuICAgICAgICAgICcuanMnLFxyXG4gICAgICAgICAgJy5qc29uJyxcclxuICAgICAgICAgICcuanN4JyxcclxuICAgICAgICAgICcudHMnLFxyXG4gICAgICAgICAgJy50c3gnLFxyXG4gICAgICAgICAgJy52dWUnLFxyXG4gICAgICBdLFxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICAgIHBvcnQ6IDMwMDAsXHJcbiAgICAgIG9wZW46IHRydWUsXHJcbiAgICAgIGNvcnM6IHRydWUsXHJcbiAgfSxcclxuICAvLyBiYXNlOiAnLi8nLFxyXG4gIC8vIGJhc2U6ICcuL2Rpc3QvYXNzZXRzLydcclxuICBiYXNlOiBgJHtwcm9jZXNzLmVudi5BU1NFVF9VUkx9L2Rpc3QvYCxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1csU0FBUyxlQUFlLFdBQVc7QUFDblksU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUg0TSxJQUFNLDJDQUEyQztBQU1oUixRQUFRLElBQUksV0FBVztBQUl2QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sV0FBVyxLQUFLLFVBQVUsUUFBUSxJQUFJLFNBQVMsS0FBSztBQUFBLElBQ3BELFVBQVUsS0FBSyxVQUFVLFFBQVEsSUFBSSxRQUFRLEtBQUs7QUFBQSxFQUNwRDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0gsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN4RDtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDVjtBQUFBO0FBQUE7QUFBQSxFQUdBLE1BQU0sR0FBRyxRQUFRLElBQUksU0FBUztBQUNoQyxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
