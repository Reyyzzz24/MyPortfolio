import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Tetap sertakan base agar aset terbaca di sub-folder GitHub
  base: '/MyPortfolio/', 
  plugins: [
    react(),
    tailwindcss(),
  ],
})