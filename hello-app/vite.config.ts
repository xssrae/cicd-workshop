import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/hello-app',
  server: {
    port: 8081,
    strictPort: true,
    allowedHosts: true,
    host: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})