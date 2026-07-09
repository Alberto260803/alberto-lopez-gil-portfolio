import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT PARA GITHUB PAGES:
// Si vas a desplegar en https://TU_USUARIO.github.io/NOMBRE_REPO/
// cambia base a '/NOMBRE_REPO/' (con las barras).
// Si vas a desplegar en https://TU_USUARIO.github.io/ (repo raíz, "user page")
// deja base en '/'.
export default defineConfig({
  plugins: [react()],
  base: '/alberto-lopez-gil-portfolio/',
})
