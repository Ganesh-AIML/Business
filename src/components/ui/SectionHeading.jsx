/**
 * Section heading with optional subtitle.
 * @param {'center'|'left'} align
 */
export default function SectionHeading({ title, subtitle, align = 'center', className = '' }) {
  return (
    <div className={`${align === 'center' ? 'text-center' : ''} ${className}`}>
      <h2 className="font-headline-md text-headline-md text-primary mb-4">{title}</h2>
      {subtitle && (
        <p className={`font-body-lg text-body-lg text-on-surface-variant ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
