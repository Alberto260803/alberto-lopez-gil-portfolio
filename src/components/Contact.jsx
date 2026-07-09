import { profile } from '../data/data.js'
import { SectionHeading } from './Stats.jsx'
import Icon from './Icon.jsx'
import StarField from './StarField.jsx'
import { useLanguage } from './contexts/LanguageContext.jsx'

export default function Contact() {
  const { language } = useLanguage()
  
  return (
    <section id="contacto" className="relative py-24 sm:py-28 overflow-hidden">
      <StarField count={40} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-ssr/10 blur-[130px]" aria-hidden="true" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <SectionHeading 
          eyebrow={language === 'es' ? "Guardar partida" : "Save Game"} 
          title={language === 'es' ? "¿Hablamos?" : "Let's talk?"} 
        />
        <p className="text-ink-muted mt-4 max-w-md mx-auto">
          {language === 'es' 
            ? "Busco mi próxima misión como desarrollador fullstack o perfil IA / Big Data. Si tienes un hueco en el equipo, aquí abajo tienes el mando."
            : "Looking for my next mission as a fullstack developer or AI / Big Data profile. If you have a spot on the team, grab the controller below."}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-9">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-heading font-semibold text-void hover:bg-gold-soft transition-colors"
          >
            <Icon name="mail" className="w-4 h-4" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 rounded-md border border-white/15 px-6 py-3 font-heading font-semibold text-ink hover:border-live hover:text-live transition-colors"
          >
            <Icon name="phone" className="w-4 h-4" />
            {profile.phone}
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8 text-ink-dim">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-gold transition-colors flex items-center gap-2 text-sm">
            <Icon name="github" className="w-4 h-4" /> {profile.githubLabel}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-gold transition-colors flex items-center gap-2 text-sm">
            <Icon name="linkedin" className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </div>

      <footer className="relative mt-24 pt-8 border-t border-white/5 max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-dim text-eyebrow">
        <span>© {new Date().getFullYear()} ALBERTO LÓPEZ GIL</span>
        <span className="flex items-center gap-1.5">
          <Icon name="mapPin" className="w-3 h-3" /> {profile.location}
        </span>
      </footer>
    </section>
  )
}