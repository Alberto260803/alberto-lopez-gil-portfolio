import { dict } from '../data/data.js'
import { SectionHeading } from './Stats.jsx'
import Icon from './Icon.jsx'
import { useLanguage } from './contexts/LanguageContext.jsx'

function EduCard({ e }) {
  return (
    <div className="flex gap-4 rounded-xl border border-white/10 bg-panel/70 p-5 hover:border-ssr/40 transition-colors h-full">
      <div className="shrink-0 w-11 h-11 rounded-lg bg-ssr/15 border border-ssr/30 flex items-center justify-center text-ssr">
        <Icon name="star" filled className="w-5 h-5" />
      </div>
      <div>
        <p className="font-heading font-semibold text-ink">{e.title}</p>
        <p className="text-sm text-ink-muted mt-0.5">{e.school}</p>
        <p className="text-eyebrow text-[11px] text-ink-dim mt-1">{e.dates}</p>
      </div>
    </div>
  )
}

function CertCard({ c }) {
  return (
    <div className="flex gap-4 rounded-xl border border-white/10 bg-panel/70 p-5 hover:border-live/40 transition-colors h-full">
      <div className="shrink-0 w-11 h-11 rounded-lg bg-live/15 border border-live/30 flex items-center justify-center text-live">
        <Icon name="star" filled className="w-5 h-5" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="font-heading font-semibold text-ink">{c.name}</p>
        <p className="text-sm text-ink-muted mt-0.5">{c.issuer}</p>
        {c.date && (
          <p className="text-eyebrow text-[11px] text-live mt-1">{c.date}</p>
        )}
      </div>
    </div>
  )
}

export default function Achievements() {
  const { language } = useLanguage()
  
  const edList = dict[language].education
  const certList = dict[language].certifications
  const skillsList = dict[language].softSkills
  const rowCount = Math.max(edList.length, certList.length)

  return (
    <section id="logros" className="relative py-24 sm:py-28 bg-panel/20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading 
          eyebrow={language === 'es' ? "Logros desbloqueados" : "Achievements unlocked"} 
          title={language === 'es' ? "Formación y certificaciones" : "Education & certifications"} 
        />

        <div className="grid lg:grid-cols-2 gap-x-10 gap-y-4 mt-12">
          <h3 className="text-eyebrow text-xs text-ssr">{language === 'es' ? "FORMACIÓN" : "EDUCATION"}</h3>
          <h3 className="text-eyebrow text-xs text-live">{language === 'es' ? "CERTIFICACIONES" : "CERTIFICATIONS"}</h3>

          {Array.from({ length: rowCount }).map((_, i) => (
            <>
              <div key={`ed-${i}`}>{edList[i] && <EduCard e={edList[i]} />}</div>
              <div key={`cert-${i}`}>{certList[i] && <CertCard c={certList[i]} />}</div>
            </>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-white/5">
          <h3 className="text-eyebrow text-xs text-gold mb-6 text-center">
            {language === 'es' ? "HABILIDADES" : "SOFT SKILLS"}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillsList.map((s) => (
              <div
                key={s.title}
                className="rounded-lg border border-white/10 bg-panel/70 p-5 hover:border-gold/40 transition-colors"
              >
                <p className="text-base font-heading font-semibold text-ink">{s.title}</p>
                <p className="text-sm text-ink-muted mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}