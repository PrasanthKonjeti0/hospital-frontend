import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/hospital-frontend/',  // <-- REQUIRED FOR GITHUB PAGES
})
