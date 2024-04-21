import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/myApi': {
        target: 'http://apis.juhe.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/myApi/, ''),
      },
    },
  },
})
