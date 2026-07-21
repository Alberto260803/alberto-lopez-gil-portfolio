# Alberto López Gil — Portfolio

Portfolio personal construido con **React + Vite + Tailwind CSS**, con una estética inspirada
en las cartas de invocación de los juegos gacha (rareza SSR, stats de personaje, quest log, etc). Si alguien quiere basarse en él te dejo aquí los pasos:

## 🚀 Empezar en local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## ✏️ Editar el contenido

Casi todo el texto (experiencia, proyectos, stats, formación, contacto...) vive en un único
archivo para que sea fácil de mantener:

```
src/data/data.js
```

### Foto de perfil

Ahora mismo el hero usa un "avatar" con mis iniciales (AL) dentro de un marco circular, al
estilo carta de personaje. Si quieres poner tu foto real:

1. Copia tu imagen a `public/avatar.jpg`.
2. En `src/components/Hero.jsx`, busca el bloque con `<span className="font-display ... >AL</span>`
   dentro del círculo, y sustitúyelo por:
   ```jsx
   <img src={withBase('avatar.jpg')} alt="Alberto López Gil" className="w-full h-full rounded-full object-cover" />
   ```

## 🗂️ Estructura

```
src/
  components/   Cada sección de la web (Hero, Stats, Experience, Projects...)
  data/         Todo mi contenido (data.js)
  utils/        Helper para resolver rutas de /public respetando el base path
public/         Favicon y mi CV en PDF, se sirven tal cual
```

## 🛠️ Stack

React 18 · Vite 5 · Tailwind CSS 3 — sin dependencias de UI externas, todos los iconos son
SVG a mano para controlar el estilo al 100%.
