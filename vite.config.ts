import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.join(__dirname, './src/')
    }
  },
  plugins: [vue(), tailwindcss()]
})
