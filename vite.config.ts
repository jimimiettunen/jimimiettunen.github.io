import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // If deploying to a subpath like /jimimiettunen.github.io/, change this to '/your-repo-name/'
})
