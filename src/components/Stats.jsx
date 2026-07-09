import { otherTech, dict } from '../data/data.js'
import { useLanguage } from './contexts/LanguageContext.jsx'

export default function Stats() {
  const { language } = useLanguage()
  
  // Extraemos directamente los arrays para evitar el error .map()
  const statsList = dict[language].stats
  const langList = dict[language].languages

  return (
    <section id="stats" className="relative py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Character Sheet" title={language === 'es' ? "Stats de personaje" : "Character Stats"} />

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 mt-12">
          <div className="space-y-6">
            {statsList.map((s) => (
              <div key={s.label}>
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="font-heading font-semibold text-ink tracking-wide">{s.label}</span>
                  <span className="text-eyebrow text-xs text-gold">LV. {s.level}/10</span>
                </div>
                <div className="h-2.5 rounded-full stat-track overflow-hidden border border-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-ssr to-gold"
                    style={{ width: `${s.level * 10}%` }}
                  />
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[10px] text-eyebrow px-2 py-0.5 rounded border border-white/10 text-ink-dim">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="rounded-xl border border-white/10 bg-panel/60 p-6">
              <h3 className="text-eyebrow text-xs text-live mb-4">{language === 'es' ? 'INVENTARIO TÉCNICO' : 'TECHNICAL INVENTORY'}</h3>
              <div className="flex flex-wrap gap-2">
                {otherTech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md border border-white/10 bg-void/40 text-ink-muted hover:border-live/50 hover:text-live transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-panel/60 p-6">
              <h3 className="text-eyebrow text-xs text-sr mb-4">{language === 'es' ? 'IDIOMAS' : 'LANGUAGES'}</h3>
              <div className="space-y-4">
                {langList.map((l) => (
                  <div key={l.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-ink font-medium">{l.label}</span>
                      <span className="text-eyebrow text-xs text-ink-dim">{l.level}</span>
                    </div>
                    <div className="h-1.5 rounded-full stat-track overflow-hidden">
                      <div className="h-full rounded-full bg-sr" style={{ width: `${l.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, sub }) {
  return (
    <div>
      <p className="text-eyebrow text-xs text-gold mb-2">{eyebrow.toUpperCase()}</p>
      <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight">{title}</h2>
      {sub && <p className="text-ink-muted mt-3 max-w-xl">{sub}</p>}
    </div>
  )
}