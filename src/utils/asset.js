// Resuelve rutas de la carpeta /public respetando el "base" configurado en
// vite.config.js. Imprescindible cuando se despliega en un subpath de GitHub
// Pages, ej: https://usuario.github.io/portfolio/
export function withBase(path) {
  const base = import.meta.env.BASE_URL || '/'
  const clean = path.startsWith('/') ? path.slice(1) : path
  return `${base}${clean}`
}
