export const profile = {
  name: 'Alberto López Gil',
  location: 'Elda, Alicante',
  phone: '615 164 597',
  email: 'albertolopezgil03@gmail.com',
  github: 'https://github.com/Alberto260803',
  githubLabel: 'github.com/Alberto260803',
  linkedin: 'https://www.linkedin.com/in/alberto-lopez-gil/',
  linkedinLabel: 'Alberto López Gil',
  cvFile: 'CV_Alberto_Lopez_Gil.pdf',
  rarity: 5,
}

export const otherTech = [
  'Grafana', 'InfluxDB', 'Flux', 'Node-RED', 'UiPath', 'smolagents',
  'RAG / Agentes', 'MongoDB', 'Power BI', 'Git', 'Bootstrap',
]

export const dict = {
  es: {
    hero: {
      role: 'Desarrollador Fullstack',
      specialty: 'IA & Big Data',
      bio: "Fullstack con experiencia real en empresa, ahora especializado en IA y Big Data. He tocado casi todo el mapa: apps de escritorio, web fullstack, automatización RPA, modelos de IA y arquitecturas cloud en AWS. Subo de nivel rápido, trabajo bien en equipo y entrego cosas que funcionan desde el día uno.",
    },
    nav: {
      stats: 'Stats',
      historial: 'Historial',
      proyectos: 'Proyectos',
      logros: 'Logros',
      contacto: 'Contacto',
      cv: 'CV',
    },
    projectLabels: {
      repo: 'Ver repositorio',
      live: 'Ver demostración',
    },
    stats: [
      { label: 'Python / IA / ML', level: 9, tags: ['Pandas', 'Polars', 'Spark', 'Hugging Face'] },
      { label: 'React / JavaScript', level: 9, tags: ['Tailwind', 'REST API'] },
      { label: 'C# / .NET / WPF', level: 8, tags: ['Escritorio', 'MySQL'] },
      { label: 'Java / Spring Boot', level: 7, tags: ['MySQL'] },
      { label: 'AWS Cloud', level: 7, tags: ['S3', 'EC2', 'Lambda', 'Bedrock'] },
      { label: 'PHP Laravel / Docker', level: 8, tags: ['MySQL', 'Apache'] },
    ],
    languages: [
      { label: 'Español', level: 'Nativo', pct: 100 },
      { label: 'Inglés', level: 'B2', pct: 70 },
      { label: 'Francés', level: 'A2', pct: 35 },
    ],
    softSkills: [
      { title: 'Trabajo en equipo', desc: 'Proyectos colaborativos intensivos, coordinando tareas y apoyando al equipo para llegar a la meta.' },
      { title: 'Comunicación', desc: 'Expongo y defiendo proyectos técnicos ante distintas audiencias con claridad y seguridad.' },
      { title: 'Aprendizaje continuo', desc: 'Me adapto rápido a nuevas tecnologías, siempre ampliando el stack.' },
      { title: 'Resolución de problemas', desc: 'Enfoque práctico ante retos técnicos: soluciones funcionales desde el primer día.' },
    ],
    experience: [
      {
        company: 'Convotis Iberia',
        role: 'RPA Developer',
        area: 'Área de Hiperautomatización',
        dates: 'Mar — Jun 2025',
        status: 'completada',
        bullets: [
          'Desarrollo de bots en Python para automatizar extracción y procesamiento de datos y generación de informes, recortando tiempos de trabajo manual.',
          'Implementación de flujos robóticos con UiPath Studio, integrados con la API de Jira para gestión automática de incidencias.',
        ],
        loot: ['Python', 'UiPath', 'Jira API', 'SQL', 'Automatización'],
      },
      {
        company: 'Grupo CPFarma',
        role: 'Desarrollador de Software',
        area: 'Prácticas',
        dates: 'Mar 2023 — Feb 2024',
        status: 'completada',
        bullets: [
          'Desarrollo completo de una aplicación de escritorio con interfaz drag & drop para crear e imprimir etiquetas de medicamentos hospitalarios.',
          'Integración con el sistema principal en Java mediante MySQL; adoptada y desplegada en producción dentro de la empresa.',
        ],
        loot: ['C#', 'WPF', '.NET', 'MySQL', 'Java'],
      },
    ],
    projects: [
      {
        id: 'crazy-gacha',
        name: 'Crazy Gacha',
        tier: 'SSR',
        tierLabel: 'Sobresaliente TFG',
        dates: '2024 — 2025',
        subtitle: 'Aplicación web fullstack · DAW',
        desc: 'Un juego de gacha completo construido de principio a fin, en solitario: frontend en React con diseño responsivo, backend en PHP Laravel con API REST, autenticación y gestión de roles. Desplegado con Docker y Apache en una arquitectura cliente-servidor real.',
        tags: ['React', 'PHP Laravel', 'MySQL', 'Docker', 'Tailwind', 'REST API'],
        accent: 'gold', // SSR
        link: 'https://github.com/Alberto260803/CrazyGachaReact',
        live: 'https://youtu.be/D9IfVSnzWpE'
      },
      {
        id: 'hidrogeno-verde',
        name: 'Proyecto Hidrógeno Verde',
        tier: 'SSR',
        tierLabel: 'Finalizado',
        dates: '2025 — 2026',
        subtitle: 'I+D Aplicado · Especialización IA & Big Data',
        desc: 'Cuadro de mandos en Grafana con consultas Flux sobre InfluxDB para monitorizar datos industriales. Incluye un chat con un LLM (Modelo de Lenguaje Grande) integrado en un panel HTML conectado a un flujo Node-RED, permitiendo consultar e interactuar directamente con los datos extraídos en lenguaje natural. Análisis de datos con Pandas, Polars y Spark; todo sobre infraestructura AWS (S3, EC2, Lambda, Bedrock).',
        tags: ['Grafana', 'InfluxDB', 'LLM', 'Node-RED', 'Python', 'AWS', 'RAG'],
        accent: 'live', // LIVE
        link: null,
        image: '/hidrogeno.png', // <- AÑADE LA RUTA DE TU IMAGEN AQUÍ
      },
      {
        id: 'music-royale',
        name: 'Music Royale',
        tier: 'SR',
        tierLabel: 'En desarrollo',
        dates: '2024',
        subtitle: 'Web App & YouTube API',
        desc: 'Aplicación web que simula un torneo musical para determinar el mejor año o playlist basándose en la votación del usuario mediante enfrentamientos 1vs1. Nació como solución para los "Recaps" de YouTube Music incompletos. Cuenta con carga de playlists vía YouTube Data API v3 y un sistema de desempate inteligente.',
        tags: ['React', 'YouTube Data API v3', 'CSS'],
        accent: 'sr', // NUEVO ACENTO (Morado, 4 estrellas)
        link: 'https://github.com/Alberto260803/Web_Playlist',
        live: 'https://alberto260803.github.io/Web_Playlist/',
      },
      {
        id: 'quiniela',
        name: 'QuinielaRandom',
        tier: 'R', // NUEVO TIER (3 estrellas)
        tierLabel: 'Finalizado',
        dates: '2023',
        subtitle: 'Native Android App',
        desc: 'Aplicación móvil nativa para Android que genera combinaciones aleatorias para la quiniela de fútbol española (formato 1X2 en 14 partidos y pleno al 15). Ideal para generar apuestas rápidas.',
        tags: ['Java', 'Android Studio', 'Mobile Dev'],
        accent: 'rare', // NUEVO ACENTO (Azul, 3 estrellas)
        link: 'https://github.com/Alberto260803/QuinielaRandom',
      }
    ],
    education: [
      {
        school: 'IES Severo Ochoa',
        title: 'Curso de Especialización · Inteligencia Artificial & Big Data',
        dates: 'Oct 2025 — 2026',
      },
      {
        school: 'IES Poeta Paco Mollà',
        title: 'Grado Superior · Desarrollo de Aplicaciones Web (DAW)',
        dates: 'Sep 2024 — Jun 2025',
      },
      {
        school: 'IES Poeta Paco Mollà',
        title: 'Grado Superior · Desarrollo de Aplicaciones Multiplataforma (DAM)',
        dates: 'Sep 2021 — Jun 2023',
      },
    ],
    certifications: [
      { name: 'EFSET English Certificate B2', issuer: 'EF Standard English Test', date: 'Oct 2023' },
      { name: 'Cambridge B1 Preliminary (PET)', issuer: 'Cambridge University', date: 'Nov 2025' },
      { name: 'RPA Developer Foundation', issuer: 'UiPath Academy', date: 'May 2025' },
    ],
    inventory: [
      { icon: 'gamepad', label: 'Videojuegos', flavor: 'Coleccionista de personajes SSR — por algo hice mi propio gacha.' },
      { icon: 'ball', label: 'Fútbol', flavor: 'No me pierdo un partido, ni jugando ni viendo.' },
      { icon: 'mic', label: 'Aitana', flavor: 'Siempre en la playlist mientras hay código de por medio.' },
    ]
  },

  en: {
    hero: {
      role: 'Fullstack Developer',
      specialty: 'AI & Big Data',
      bio: "Fullstack developer with real-world corporate experience, now specializing in AI and Big Data. I've touched almost every part of the map: desktop apps, fullstack web, RPA automation, AI models, and AWS cloud architectures. I level up fast, work well in a team, and deliver working solutions from day one.",
    },
    nav: {
      stats: 'Stats',
      historial: 'History',
      proyectos: 'Projects',
      logros: 'Achievements',
      contacto: 'Contact',
      cv: 'CV',
    },
    projectLabels: {
      repo: 'View repository',
      live: 'View demo',
    },
    stats: [
      { label: 'Python / AI / ML', level: 9, tags: ['Pandas', 'Polars', 'Spark', 'Hugging Face'] },
      { label: 'React / JavaScript', level: 9, tags: ['Tailwind', 'REST API'] },
      { label: 'C# / .NET / WPF', level: 8, tags: ['Desktop', 'MySQL'] },
      { label: 'Java / Spring Boot', level: 7, tags: ['MySQL'] },
      { label: 'AWS Cloud', level: 7, tags: ['S3', 'EC2', 'Lambda', 'Bedrock'] },
      { label: 'PHP Laravel / Docker', level: 8, tags: ['MySQL', 'Apache'] },
    ],
    languages: [
      { label: 'Spanish', level: 'Native', pct: 100 },
      { label: 'English', level: 'B2', pct: 70 },
      { label: 'French', level: 'A2', pct: 35 },
    ],
    softSkills: [
      { title: 'Teamwork', desc: 'Intensive collaborative projects, coordinating tasks and supporting the team to reach the goal.' },
      { title: 'Communication', desc: 'I present and defend technical projects to different audiences with clarity and confidence.' },
      { title: 'Continuous Learning', desc: 'I adapt quickly to new technologies, always expanding my stack.' },
      { title: 'Problem Solving', desc: 'Practical approach to technical challenges: functional solutions from day one.' },
    ],
    experience: [
      {
        company: 'Convotis Iberia',
        role: 'RPA Developer',
        area: 'Hyperautomation Area',
        dates: 'Mar — Jun 2025',
        status: 'completed',
        bullets: [
          'Development of Python bots to automate data extraction, processing, and report generation, cutting down manual work times.',
          'Implementation of robotic workflows with UiPath Studio, integrated with the Jira API for automatic incident management.',
        ],
        loot: ['Python', 'UiPath', 'Jira API', 'SQL', 'Automation'],
      },
      {
        company: 'Grupo CPFarma',
        role: 'Software Developer',
        area: 'Internship',
        dates: 'Mar 2023 — Feb 2024',
        status: 'completed',
        bullets: [
          'End-to-end development of a desktop application with a drag & drop interface for creating and printing hospital medication labels.',
          'Integration with the main Java system via MySQL; adopted and deployed in production within the company.',
        ],
        loot: ['C#', 'WPF', '.NET', 'MySQL', 'Java'],
      },
    ],
    projects: [
      {
        id: 'crazy-gacha',
        name: 'Crazy Gacha',
        tier: 'SSR',
        tierLabel: 'Outstanding Degree Project',
        dates: '2024 — 2025',
        subtitle: 'Fullstack web app · DAW',
        desc: 'A complete gacha game built from start to finish, solo: React frontend with responsive design, PHP Laravel backend with REST API, authentication, and role management. Deployed with Docker and Apache in a real client-server architecture.',
        tags: ['React', 'PHP Laravel', 'MySQL', 'Docker', 'Tailwind', 'REST API'],
        accent: 'gold',
        link: 'https://github.com/Alberto260803/CrazyGachaReact',
        live: 'https://youtu.be/D9IfVSnzWpE'
      },
      {
        id: 'hidrogeno-verde',
        name: 'Green Hydrogen Project',
        tier: 'SSR',
        tierLabel: 'Completed',
        dates: '2025 — 2026',
        subtitle: 'Applied R&D · AI & Big Data Specialization',
        desc: 'Grafana dashboard with Flux queries over InfluxDB to monitor industrial data. Includes an LLM (Large Language Model) chat integrated into an HTML panel connected to a Node-RED flow, allowing users to query and interact directly with the extracted data in natural language. Data analysis with Pandas, Polars, and Spark; all on AWS infrastructure (S3, EC2, Lambda, Bedrock).',
        tags: ['Grafana', 'InfluxDB', 'LLM', 'Node-RED', 'Python', 'AWS', 'RAG'],
        accent: 'live',
        link: null,
        image: '/hidrogeno.png', // <- AÑADE LA MISMA RUTA AQUÍ
      },
      {
        id: 'music-royale',
        name: 'Music Royale',
        tier: 'SR',
        tierLabel: 'WIP',
        dates: '2024',
        subtitle: 'Web App & YouTube API',
        desc: 'Web application that simulates a musical tournament to determine the best year or playlist based on user votes through 1vs1 matchups. Created to handle incomplete YouTube Music Recaps. It features playlist fetching via YouTube Data API v3 and a smart tie-breaker system.',
        tags: ['React', 'YouTube Data API v3', 'CSS'],
        accent: 'sr',
        link: 'https://github.com/Alberto260803/Web_Playlist',
        live: 'https://alberto260803.github.io/Web_Playlist/',
      },
      {
        id: 'quiniela',
        name: 'QuinielaRandom',
        tier: 'R',
        tierLabel: 'Completed',
        dates: '2023',
        subtitle: 'Native Android App',
        desc: 'Native Android mobile application that generates random combinations for the Spanish football pool (1X2 format for 14 matches plus the 15th match). Ideal for generating quick bets.',
        tags: ['Java', 'Android Studio', 'Mobile Dev'],
        accent: 'rare',
        link: 'https://github.com/Alberto260803/QuinielaRandom',
      }
    ],
    education: [
      {
        school: 'IES Severo Ochoa',
        title: 'Specialization Course · AI & Big Data',
        dates: 'Oct 2025 — 2026',
      },
      {
        school: 'IES Poeta Paco Mollà',
        title: 'Higher Degree · Web Application Development (DAW)',
        dates: 'Sep 2024 — Jun 2025',
      },
      {
        school: 'IES Poeta Paco Mollà',
        title: 'Higher Degree · Cross-Platform Application Development (DAM)',
        dates: 'Sep 2021 — Jun 2023',
      },
    ],
    certifications: [
      { name: 'EFSET English Certificate B2', issuer: 'EF Standard English Test', date: 'Oct 2023' },
      { name: 'Cambridge B1 Preliminary (PET)', issuer: 'Cambridge University', date: 'Nov 2025' },
      { name: 'RPA Developer Foundation', issuer: 'UiPath Academy', date: 'May 2025' },
    ],
    inventory: [
      { icon: 'gamepad', label: 'Videogames', flavor: 'SSR character collector — that\'s why I made my own gacha.' },
      { icon: 'ball', label: 'Football', flavor: 'I never miss a match, neither playing nor watching.' },
      { icon: 'mic', label: 'Aitana', flavor: 'Always on the playlist while there\'s code involved.' },
    ]
  }
}

// EXPORTS DE SEGURIDAD
// Esto evita errores si algún componente antiguo sigue apuntando directamente a las constantes.
export const experience = dict.es.experience;
export const projects = dict.es.projects;
export const stats = dict.es.stats;
export const languages = dict.es.languages;
export const softSkills = dict.es.softSkills;
export const education = dict.es.education;
export const certifications = dict.es.certifications;
export const inventory = dict.es.inventory;