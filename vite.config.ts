import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import { fileURLToPath, URL } from 'url'
import ElementPlus from 'unplugin-element-plus/vite'

export default defineConfig({
  plugins: [
    vue(),
    ElementPlus({
      useSource: true,
    }),
    federation({
      name: 'remoteApp',
      filename: 'remoteEntry.js',
      exposes: {
        './HelloWorld': './src/components/HelloWorld.vue',
        './HomeView': './src/views/HomeView.vue',
        './AboutView': './src/views/AboutView.vue',
      },
      shared: ['vue'],
    }),
  ],
  server: {
    port: 3001,
    fs: {
      allow: ['..'],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'esnext', // Set the build target to esnext to support top-level await
    minify: false, // Optional: disable minification for easier debugging
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@croud-ui/element-plus-theme" as *;',
        api: 'modern',
      },
    },
  },
})
