// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
process.env.NODE_ENV = "production";
process.env.ASSET_URL = `/dist/`;
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
      "@": fileURLToPath(new URL("./src", "file:///C:/Users/francois.brunet/Documents/DEV/Research/atelierFrancois/vite.config.ts"))
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
    port: 1234,
    open: true,
    cors: true
  },
  base: `${process.env.ASSET_URL}`
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gJ25vZGU6dXJsJztcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4JztcclxuXHJcblxyXG5wcm9jZXNzLmVudi5OT0RFX0VOViA9ICdwcm9kdWN0aW9uJztcclxucHJvY2Vzcy5lbnYuQVNTRVRfVVJMID0gYC9kaXN0L2A7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoKSxcclxuICAgIHZ1ZUpzeCgpLFxyXG4gIF0sXHJcbiAgZGVmaW5lOiB7XHJcbiAgICBBU1NFVF9VUkw6IEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuZW52LkFTU0VUX1VSTCkgfHwgXCJcIixcclxuICAgIE5PREVfRU5WOiBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5OT0RFX0VOVikgfHwgXCJcIixcclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgICAgYWxpYXM6IHtcclxuICAgICAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIFwiZmlsZTovLy9DOi9Vc2Vycy9mcmFuY29pcy5icnVuZXQvRG9jdW1lbnRzL0RFVi9SZXNlYXJjaC9hdGVsaWVyRnJhbmNvaXMvdml0ZS5jb25maWcudHNcIikpXHJcbiAgICAgIH0sXHJcbiAgICAgIGV4dGVuc2lvbnM6IFtcclxuICAgICAgICAgICcuanMnLFxyXG4gICAgICAgICAgJy5qc29uJyxcclxuICAgICAgICAgICcuanN4JyxcclxuICAgICAgICAgICcudHMnLFxyXG4gICAgICAgICAgJy50c3gnLFxyXG4gICAgICAgICAgJy52dWUnLFxyXG4gICAgICBdLFxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICAgIHBvcnQ6IDEyMzQsXHJcbiAgICAgIG9wZW46IHRydWUsXHJcbiAgICAgIGNvcnM6IHRydWUsXHJcbiAgfSxcclxuICAvLyBiYXNlOiAnLi8nLFxyXG4gIC8vIGJhc2U6ICcuL2Rpc3QvJ1xyXG4gIGJhc2U6IGAke3Byb2Nlc3MuZW52LkFTU0VUX1VSTH1gLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBLFNBQVMsZUFBZSxXQUFXO0FBQ25DLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFHbkIsUUFBUSxJQUFJLFdBQVc7QUFDdkIsUUFBUSxJQUFJLFlBQVk7QUFHeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLFdBQVcsS0FBSyxVQUFVLFFBQVEsSUFBSSxTQUFTLEtBQUs7QUFBQSxJQUNwRCxVQUFVLEtBQUssVUFBVSxRQUFRLElBQUksUUFBUSxLQUFLO0FBQUEsRUFDcEQ7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNILEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3RkFBd0YsQ0FBQztBQUFBLElBQ2pJO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNWO0FBQUEsRUFHQSxNQUFNLEdBQUcsUUFBUSxJQUFJO0FBQ3ZCLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==