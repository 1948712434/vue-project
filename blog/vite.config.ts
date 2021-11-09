import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require('path')

function _resolve(dir) {
  return path.resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  server: {
    proxy: {
      // 选项写法
      "/api": {
        target: "http://localhost:5000/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      '@': _resolve('src'),
      '@assets': _resolve('src/assets'),
      '@comps': _resolve('src/components'),
      '@utils': _resolve('src/utils'),
      '@router': _resolve('src/router'),
      '@store': _resolve('src/store'),
    }
  },
});
