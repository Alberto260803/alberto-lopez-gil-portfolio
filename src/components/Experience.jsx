import { dict } from '../data/data.js'
import { SectionHeading } from './Stats.jsx'
import Icon from './Icon.jsx'
import { useLanguage } from './contexts/LanguageContext.jsx' 

export default function Experience() {
  const { language } = useLanguage()
  const t = dict?.[language]
  
  if (!t) return null;

  const experienceList = t.experience

  return (
    <section id="historial" className="relative py-24 sm:py-28 bg-panel/20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading 
          eyebrow={language === 'es' ? "Quest Log" : "Quest Log"} 
          title={language === 'es' ? "Historial de misiones" : "Quest History"} 
          sub={language === 'es' ? "Experiencia profesional completada — cada misión con su propio loot de habilidades." : "Completed professional experience — each mission with its own skill loot."} 
        />

        <div className="mt-14 relative">
          <div className="absolute left-[18px] sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-gold/60 via-ssr/40 to-transparent" aria-hidden="true" />

          <div className="space-y-10">
            {experienceList.map((job) => (
              <article key={job.company} className="relative pl-12 sm:pl-16">
                <span className="absolute left-0 sm:left-0 top-1 flex items-center justify-center w-9 h-9 rounded-full bg-void border-2 border-gold text-gold shadow-glow-gold">
                  <Icon name="layers" className="w-4 h-4" />
                </span>

                <div className="rounded-xl border border-white/10 bg-panel/70 p-6 hover:border-gold/30 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="font-heading font-bold text-xl text-ink">{job.company}</h3>
                    <span className="text-[10px] text-eyebrow px-2 py-1 rounded-full border border-live/40 text-live">
                      {language === 'es' ? 'MISIÓN COMPLETADA' : 'MISSION COMPLETED'}
                    </span>
                  </div>
                  <p className="text-ink-muted text-sm">
                    {job.role} <span className="text-ink-dim">· {job.area}</span>
                  </p>
                  <p className="text-eyebrow text-xs text-ink-dim mt-1">{job.dates}</p>

                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-ink-muted leading-relaxed">
                        <span className="text-gold mt-1.5 shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/5">
                    <span className="text-[10px] text-eyebrow text-ink-dim mr-1 self-center">LOOT:</span>
                    {job.loot.map((t) => (
                      <span key={t} className="text-[10px] text-eyebrow px-2 py-0.5 rounded border border-gold/30 text-gold/90">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}