import StarField from './StarField.jsx'
import RarityStars from './RarityStars.jsx'
import Icon from './Icon.jsx'
import { dict, profile } from '../data/data.js'
import { withBase } from '../utils/asset.js'
import { useLanguage } from './contexts/LanguageContext.jsx' 

export default function Hero() {
  const { language } = useLanguage()
  const t = dict?.[language]?.hero
  
  if(!t) return null;

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <StarField count={70} />
      <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-ssr/20 blur-[100px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-live/10 blur-[120px]" aria-hidden="true" />

      <div className="relative max-w-6xl w-full mx-auto px-5 sm:px-8 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div className="animate-rise order-2 md:order-1">
          <p className="text-eyebrow text-xs text-gold mb-4">
            {language === 'es' ? '★ ★ ★ ★ ★ NUEVA INVOCACIÓN DISPONIBLE' : '★ ★ ★ ★ ★ NEW SUMMON AVAILABLE'}
          </p>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            <span className="text-ink">Alberto</span>
            <br />
            <span className="bg-gradient-to-r from-gold via-ssr to-live bg-clip-text text-transparent">
              López Gil
            </span>
          </h1>
          <p className="font-heading text-lg sm:text-xl text-ink-muted mt-4 tracking-wide">
            {t.role} <span className="text-gold">·</span> {t.specialty}
          </p>
          <p className="text-ink-muted mt-6 max-w-lg leading-relaxed">
            {t.bio}
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="#proyectos"
              className="group relative overflow-hidden inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-heading font-semibold text-void hover:bg-gold-soft transition-colors"
            >
              {language === 'es' ? 'Ver proyectos' : 'View projects'}
              <Icon name="chevronDown" className="w-4 h-4 -rotate-90 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href={withBase(profile.cvFile)}
              download
              className="inline-flex items-center gap-2 rounded-md border border-white/15 px-6 py-3 font-heading font-semibold text-ink hover:border-live hover:text-live transition-colors"
            >
              <Icon name="download" className="w-4 h-4" />
              {language === 'es' ? 'Descargar CV' : 'Download CV'}
            </a>
          </div>

          <div className="flex items-center gap-5 mt-8 text-ink-dim">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-gold transition-colors">
              <Icon name="github" className="w-5 h-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-gold transition-colors">
              <Icon name="linkedin" className="w-5 h-5" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-gold transition-colors">
              <Icon name="mail" className="w-5 h-5" />
            </a>
            <span className="text-xs text-eyebrow flex items-center gap-1.5">
              <Icon name="mapPin" className="w-3.5 h-3.5" />
              {profile.location}
            </span>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end animate-rise" style={{ animationDelay: '0.15s' }}>
          <div className="group relative w-72 sm:w-80 animate-float">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-gold/40 via-ssr/30 to-live/20 blur-2xl opacity-60" aria-hidden="true" />

            <div className="relative rounded-2xl border border-gold/40 bg-panel shadow-glow-gold overflow-hidden">
              <div className="shimmer-sweep" />

              <div className="absolute top-3 left-3 z-10 flex items-center gap-1 rounded-full bg-void/70 backdrop-blur px-2.5 py-1 border border-gold/40">
                <RarityStars count={5} className="w-3 h-3" />
              </div>
              <div className="absolute top-3 right-3 z-10 rounded-full bg-void/70 backdrop-blur px-2.5 py-1 border border-white/10 text-eyebrow text-[10px] text-live">
                SSR
              </div>

              <div className="relative h-72 flex items-end justify-center bg-gradient-to-b from-panel-light to-panel">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(155,107,255,0.35),transparent_60%)]" />
                <div className="relative w-40 h-40 mb-6 rounded-full border-4 border-gold/60 bg-void flex items-center justify-center shadow-glow-ssr">
                  <span className="font-display font-black text-5xl text-gold">AL</span>
                </div>
              </div>

              <div className="relative bg-void/60 border-t border-white/10 px-5 py-4">
                <p className="font-heading font-bold text-lg text-ink leading-tight">Alberto López Gil</p>
                <p className="text-eyebrow text-[11px] text-ink-dim mt-1">
                  {language === 'es' ? 'CLASE: FULLSTACK · IA & BIG DATA' : 'CLASS: FULLSTACK · AI & BIG DATA'}
                </p>
                <div className="flex gap-1.5 mt-3">
                  {['PYTHON', 'REACT', 'AWS'].map((t) => (
                    <span key={t} className="text-[10px] text-eyebrow px-2 py-0.5 rounded border border-white/10 text-ink-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}