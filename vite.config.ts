import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace VssWeb with your repo name
export default defineConfig({
  plugins: [react()],
  base: '/VssWeb/',
})
