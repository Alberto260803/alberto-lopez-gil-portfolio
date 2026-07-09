import { inventory } from '../data/data.js'
import Icon from './Icon.jsx'

export default function Interests() {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="text-eyebrow text-xs text-ink-dim mb-6 text-center">FUERA DE JUEGO</p>
        <div className="grid grid-cols-3 max-w-xl mx-auto gap-4">
          {inventory.map((item) => (
            <div
              key={item.label}
              className="group relative aspect-square rounded-xl border border-white/10 bg-panel/60 flex flex-col items-center justify-center gap-2 p-3 text-center hover:border-gold/40 hover:bg-panel transition-colors cursor-default"
            >
              <Icon name={item.icon} className="w-7 h-7 text-ink-muted group-hover:text-gold transition-colors" />
              <span className="text-xs font-heading font-semibold text-ink-muted group-hover:text-ink transition-colors">
                {item.label}
              </span>

              {/* tooltip on hover */}
              <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="rounded-md bg-void border border-gold/30 px-3 py-2 text-[11px] text-ink-muted leading-snug shadow-glow-gold">
                  {item.flavor}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
