import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // Pastikan ini '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/MyPortfolio/', 
  plugins: [
    react(),
    tailwindcss(),
  ],
})