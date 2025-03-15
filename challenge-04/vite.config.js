import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  esbuild: {
    loader: 'jsx', // This tells Vite to treat `.js` as JSX
    include: /src\/.*\.js/, // Ensure JSX is parsed in files inside the `src` folder
  },
})
