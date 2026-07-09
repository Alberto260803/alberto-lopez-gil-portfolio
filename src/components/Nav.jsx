import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import { profile, dict } from '../data/data.js'
import { withBase } from '../utils/asset.js'
import { useLanguage } from './contexts/LanguageContext.jsx' 

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  const { language, toggleLanguage } = useLanguage()
  const t = dict[language].nav // Textos de la navbar en el idioma actual

  // Recreamos los enlaces dinámicamente con las traducciones
  const links = [
    { href: '#stats', label: t.stats },
    { href: '#historial', label: t.historial },
    { href: '#proyectos', label: t.proyectos },
    { href: '#logros', label: t.logros },
    { href: '#contacto', label: t.contacto },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-void/85 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative flex items-center justify-center w-9 h-9 shrink-0">
            <svg viewBox="0 0 64 64" className="w-9 h-9 transition-transform duration-300 group-hover:scale-105">
              <polygon points="32,2 58,17 58,47 32,62 6,47 6,17" fill="#171335" stroke="#F4C548" strokeWidth="2.5" />
              <text x="32" y="41" fontFamily="Orbitron, sans-serif" fontSize="21" fontWeight="800" fill="#F4C548" textAnchor="middle">AL</text>
            </svg>
          </span>
          <span className="font-heading font-semibold tracking-wide text-ink hidden sm:block">
            Alberto López Gil
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-eyebrow text-xs text-ink-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-gold transition-colors">
                {l.label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="text-xs font-bold text-eyebrow text-ink-muted hover:text-gold transition-colors flex items-center gap-1"
            aria-label="Cambiar idioma"
          >
            {language === 'es' ? '🇬🇧 EN' : '🇪🇸 ES'}
          </button>
          
          <a
            href={withBase(profile.cvFile)}
            download
            className="inline-flex items-center gap-2 rounded-md border border-gold/50 px-4 py-2 text-xs text-eyebrow text-gold hover:bg-gold hover:text-void transition-colors"
          >
            <Icon name="download" className="w-3.5 h-3.5" />
            {t.cv}
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="text-xs font-bold text-eyebrow text-ink-muted hover:text-gold transition-colors"
            aria-label="Cambiar idioma"
          >
            {language === 'es' ? '🇬🇧 EN' : '🇪🇸 ES'}
          </button>
          
          <button
            className="text-ink p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.closeMenu : t.openMenu}
            aria-expanded={open}
          >
            <Icon name={open ? 'x' : 'menu'} className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-void/97 backdrop-blur-md border-b border-white/5 px-5 pb-6 pt-2">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-eyebrow text-sm text-ink-muted hover:text-gold border-b border-white/5"
                >
                  {l.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={withBase(profile.cvFile)}
            download
            className="mt-4 inline-flex items-center gap-2 rounded-md border border-gold/50 px-4 py-2.5 text-xs text-eyebrow text-gold"
          >
            <Icon name="download" className="w-3.5 h-3.5" />
            {t.downloadCv}
          </a>
        </div>
      )}
    </header>
  )
}