import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

const PORT = 9010;

export default defineConfig({
  plugins:
    [vue(),
      federation({
        name: 'remote_app',
        filename: 'remoteEntry.js',
        exposes: {
          './app': './src/App.vue',
        },
        shared: ['vue']
      })
    ],
  server: {
    port: PORT,
    open: true
  },
  preview: {
    port: PORT,
    open: true
  },
  build: {
    target: "esnext"
  }
})
