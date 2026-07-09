import { useMemo } from 'react'

// Deterministic pseudo-random star positions so they don't jump around on re-render.
function seededStars(count, seed) {
  let s = seed
  const rand = () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: rand() * 100,
    left: rand() * 100,
    size: 1 + rand() * 1.8,
    delay: rand() * 4,
    duration: 2.5 + rand() * 3,
  }))
}

export default function StarField({ count = 60, className = '' }) {
  const stars = useMemo(() => seededStars(count, 42), [count])

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
