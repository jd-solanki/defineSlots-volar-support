import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: vue(),
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
