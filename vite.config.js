import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  manifest: true,
  build: {
    manifest: true,
    outDir: 'build'
  },
  server: {
    open: true,
    port: 3000,
    strictPort: true
  },
  preview: {
    port: 3000
  }
})
