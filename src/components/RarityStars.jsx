import Icon from './Icon.jsx'

export default function RarityStars({ count = 5, className = 'w-4 h-4', color = 'text-gold' }) {
  return (
    <div className={`flex gap-0.5 ${color}`} aria-label={`Valoración ${count} de 5 estrellas`}>
      {Array.from({ length: count }, (_, i) => (
        <Icon key={i} name="star" filled className={className} strokeWidth={1} />
      ))}
    </div>
  )
}
