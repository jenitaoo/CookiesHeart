import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows external access
    port: 5173, // Keeps the same port
    strictPort: true, // Ensures the port is used
    watch: {
      usePolling: true, // Helps with file changes inside Docker
    },
  },
});