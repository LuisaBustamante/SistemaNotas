import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://luisabustamante.github.io/SistemaNotas/', // Update this to your GitHub Pages URL
})
