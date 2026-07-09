import { useState } from 'react'
import Icon from './Icon.jsx'
import RarityStars from './RarityStars.jsx'
import { withBase } from '../utils/asset.js'
import { useLanguage } from './contexts/LanguageContext.jsx' 

const accents = {
  gold: { // SSR
    border: 'border-gold/40',
    glow: 'shadow-glow-gold',
    ribbon: 'border-gold/40 text-gold',
    tagText: 'text-gold/90 border-gold/30',
    badgeBg: 'bg-gold text-void',
    gradient: 'from-gold/30 via-ssr/20 to-transparent',
    starColor: 'text-gold',
  },
  live: { // Proyectos en producción
    border: 'border-live/40',
    glow: 'shadow-glow-live',
    ribbon: 'border-live/40 text-live',
    tagText: 'text-live/90 border-live/30',
    badgeBg: 'bg-live text-void',
    gradient: 'from-live/25 via-sr/20 to-transparent',
    starColor: 'text-live',
  },
  sr: { // Rareza SR
    border: 'border-sr/40',
    glow: 'shadow-[0_0_15px_rgba(217,70,239,0.3)]',
    ribbon: 'border-sr/40 text-sr',
    tagText: 'text-sr/90 border-sr/30',
    badgeBg: 'bg-sr text-void',
    gradient: 'from-sr/30 via-purple-500/20 to-transparent',
    starColor: 'text-sr',
  },
  rare: { // Rareza R
    border: 'border-cyan-400/40',
    glow: 'shadow-[0_0_15px_rgba(34,211,238,0.3)]',
    ribbon: 'border-cyan-400/40 text-cyan-400',
    tagText: 'text-cyan-400/90 border-cyan-400/30',
    badgeBg: 'bg-cyan-500 text-void',
    gradient: 'from-cyan-500/25 via-blue-900/20 to-transparent',
    starColor: 'text-cyan-400',
  }
}

export default function ProjectCard({ project, repoText, liveText }) {
  const { language } = useLanguage()
  const a = accents[project.accent]
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <article
        className={`group relative rounded-2xl border ${a.border} bg-panel/70 overflow-hidden ${a.glow} flex flex-col`}
      >
        <div className="shimmer-sweep" />

        {}
        <div 
          className={`relative bg-gradient-to-br ${a.gradient} flex justify-between px-5 pt-4 overflow-hidden ${
            project.image 
              ? 'h-52 sm:h-64 cursor-pointer items-start transition-all duration-300' 
              : 'h-28 items-center' 
          }`}
          onClick={() => project.image && setIsModalOpen(true)}
        >
          {project.image && (
            <>
              <img 
                src={withBase(project.image)} 
                alt={project.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-panel/95 via-panel/50 to-transparent transition-opacity duration-500 group-hover:opacity-60" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <span className="flex items-center gap-2 bg-void/80 backdrop-blur-sm px-4 py-2 rounded-full text-white text-xs font-semibold border border-white/10 shadow-xl">
                  <Icon name="external" className="w-4 h-4" /> 
                  {language === 'es' ? 'Ver imagen completa' : 'View full image'}
                </span>
              </div>
            </>
          )}

          <div className={`relative z-30 flex items-center gap-1 rounded-full bg-void/70 backdrop-blur px-2.5 py-1 border ${a.ribbon}`}>
            {project.tier === 'SSR' && <RarityStars count={5} color={a.starColor} className="w-3 h-3" />}
            {project.tier === 'SR' && <RarityStars count={4} color={a.starColor} className="w-3 h-3" />}
            {project.tier === 'R' && <RarityStars count={3} color={a.starColor} className="w-3 h-3" />}
            {!['SSR', 'SR', 'R'].includes(project.tier) && (
              <span className="w-1.5 h-1.5 rounded-full bg-live animate-twinkle" />
            )}
          </div>
          <span className={`relative z-30 text-[10px] text-eyebrow px-2.5 py-1 rounded-full font-semibold ${a.badgeBg}`}>
            {['SSR', 'SR', 'R'].includes(project.tier) ? project.tier : `● ${project.tierLabel.toUpperCase()}`}
          </span>
        </div>

        {}
        <div className={`relative z-20 px-6 pb-6 flex flex-col grow ${project.image ? '-mt-6' : ''}`}>
          <div className={`inline-block w-fit text-[10px] text-eyebrow px-2.5 py-1 rounded-full border ${a.ribbon} bg-void mb-3`}>
            {project.tierLabel}
          </div>

          <h3 className="font-heading font-bold text-2xl text-ink">{project.name}</h3>
          <p className="text-ink-dim text-xs text-eyebrow mt-1">{project.subtitle} · {project.dates}</p>
          <p className="text-ink-muted text-sm leading-relaxed mt-4 grow">{project.desc}</p>

          <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/5">
            {project.tags.map((t) => (
              <span key={t} className={`text-[10px] text-eyebrow px-2 py-0.5 rounded border ${a.tagText}`}>
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-5">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-ink hover:text-gold transition-colors w-fit">
                {repoText} <Icon name="external" className="w-3.5 h-3.5" />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-live hover:text-white transition-colors w-fit">
                {liveText} <Icon name="external" className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </article>

      {}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10 bg-void/90 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={withBase(project.image)} 
              alt={project.name} 
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-xl border border-white/10 shadow-2xl"
            />
            <button 
              className="absolute -top-3 -right-3 bg-void p-2 rounded-full text-white hover:bg-void/80 border border-white/20 shadow-lg"
              onClick={() => setIsModalOpen(false)}
            >
              <Icon name="x" className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}