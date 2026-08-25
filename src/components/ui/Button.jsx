import { Link } from 'react-router-dom'

/**
 * Reusable button with multiple variants.
 * @param {'primary'|'secondary-outline'|'outline-white'|'black'|'text'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {string} [href] - If internal route, use Link. If external use <a>.
 * @param {boolean} [external] - Force <a> tag for external links
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  onClick,
  children,
  icon,
  className = '',
  type = 'button',
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-label-bold text-label-bold transition-all duration-200 cursor-pointer select-none active:scale-90'

  const sizes = {
    sm: 'px-4 py-2',
    md: 'px-6 py-3',
    lg: 'px-8 py-4',
  }

  const variants = {
    'primary':
      'bg-secondary text-on-secondary rounded-lg shadow-green-sm hover:opacity-90',
    'secondary-outline':
      'bg-transparent border-2 border-primary text-primary rounded-lg hover:bg-surface-container',
    'outline-white':
      'bg-transparent border-2 border-on-primary text-on-primary rounded-lg hover:bg-white/10',
    'black':
      'bg-primary text-on-primary rounded-lg hover:opacity-80',
    'text':
      'text-secondary hover:text-on-secondary-fixed p-0',
  }

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  const content = (
    <>
      {icon && (
        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
          {icon}
        </span>
      )}
      {children}
    </>
  )

  if (href) {
    if (external || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('https://wa.me')) {
      return (
        <a href={href} className={cls} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
          {content}
        </a>
      )
    }
    return (
      <Link to={href} className={cls}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {content}
    </button>
  )
}
