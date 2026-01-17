import { defineConfig } from 'vite'
import react from '@vitejs/react-swc' // atau @vitejs/plugin-react sesuai instalasi kamu
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // Tambahkan baris ini. Pastikan namanya SAMA PERSIS dengan nama repository di GitHub
  base: '/MyPortfolio/', 
  plugins: [
    react(),
    tailwindcss(),
  ],
})
