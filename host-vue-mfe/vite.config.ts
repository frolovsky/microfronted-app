import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

const PORT = 9000;

export default defineConfig({
  plugins:
    [vue(),
    federation({
    name: 'host_app',
    remotes: {
      remote_app: "http://localhost:9010/assets/remoteEntry.js",
    },
    shared: ['vue']
  })],
  server: {
    port: PORT,
    open: true
  },
  build: {
    target: "esnext"
  }
})
