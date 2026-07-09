# Alberto López Gil — Portfolio

Portfolio personal construido con **React + Vite + Tailwind CSS**, con una estética inspirada
en las cartas de invocación de los juegos gacha (rareza SSR, stats de personaje, quest log, etc).

## 🚀 Empezar en local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## ✏️ Editar tu contenido

Casi todo el texto (experiencia, proyectos, stats, formación, contacto...) vive en un único
archivo para que sea fácil de mantener:

```
src/data/data.js
```

Cambia ahí tus datos, y los componentes de `src/components/` se actualizan solos.

### Foto de perfil

Ahora mismo el hero usa un "avatar" con tus iniciales (AL) dentro de un marco circular, al
estilo carta de personaje. Si quieres poner tu foto real:

1. Copia tu imagen a `public/avatar.jpg`.
2. En `src/components/Hero.jsx`, busca el bloque con `<span className="font-display ... >AL</span>`
   dentro del círculo, y sustitúyelo por:
   ```jsx
   <img src={withBase('avatar.jpg')} alt="Alberto López Gil" className="w-full h-full rounded-full object-cover" />
   ```
   (recuerda importar `withBase` desde `../utils/asset.js` igual que en `Nav.jsx`).

### CV descargable

El botón "Descargar CV" ya apunta a `public/CV_Alberto_Lopez_Gil.pdf`, que es tu CV actual.
Si lo actualizas, simplemente sustituye ese archivo por la nueva versión con el mismo nombre
(o cambia `cvFile` en `src/data/data.js`).

## 📦 Desplegar en GitHub Pages

### 0. Importante: la ruta base

Este proyecto asume que lo vas a desplegar en:

```
https://TU_USUARIO.github.io/NOMBRE_DEL_REPO/
```

Por eso `vite.config.js` tiene `base: '/portfolio/'`. **Antes de desplegar**, abre
`vite.config.js` y cambia `'/portfolio/'` por `'/NOMBRE_DEL_REPO/'` (el nombre real de tu
repositorio en GitHub), con barras al inicio y al final.

Si en vez de eso vas a usar un repo especial de tipo *user page*
(`TU_USUARIO.github.io`, desplegado en la raíz), pon `base: '/'`.

### Opción A — Automático con GitHub Actions (recomendado)

Ya incluye el workflow en `.github/workflows/deploy.yml`. Solo tienes que:

1. Crear un repositorio en GitHub y subir este proyecto:
   ```bash
   git init
   git add .
   git commit -m "Portfolio inicial"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/NOMBRE_DEL_REPO.git
   git push -u origin main
   ```
2. En GitHub, ve a **Settings → Pages** y en "Build and deployment" selecciona
   **Source: GitHub Actions**.
3. Cada `git push` a `main` construirá y publicará la web automáticamente.
   Tu portfolio quedará en `https://TU_USUARIO.github.io/NOMBRE_DEL_REPO/`.

### Opción B — Manual con `gh-pages`

```bash
npm run deploy
```

Esto construye el proyecto y publica la carpeta `dist/` en la rama `gh-pages`. Luego, en
**Settings → Pages**, selecciona **Source: Deploy from a branch → gh-pages**.

## 🗂️ Estructura

```
src/
  components/   Cada sección de la web (Hero, Stats, Experience, Projects...)
  data/         Todo tu contenido (data.js)
  utils/        Helper para resolver rutas de /public respetando el base path
public/         Favicon y tu CV en PDF, se sirven tal cual
```

## 🛠️ Stack

React 18 · Vite 5 · Tailwind CSS 3 — sin dependencias de UI externas, todos los iconos son
SVG a mano para controlar el estilo al 100%.
