/// <reference types="vitest" />
/// <reference types="vite/client" />

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Icons({ compiler: 'vue3' }),
    Components({ resolvers: [IconsResolver()] }),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    css: true,
    setupFiles: './src/test/setup.ts'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
