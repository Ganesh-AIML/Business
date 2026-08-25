/**
 * Inline Material Symbol icon component.
 * @param {string} name - Material Symbol icon name (e.g. 'verified', 'location_on')
 * @param {boolean} [filled] - Use filled variant
 * @param {number} [size] - Font size in px
 * @param {string} [className] - Additional Tailwind classes (e.g. color)
 */
export default function Icon({ name, filled = false, size = 24, className = '' }) {
  return (
    <span
      className={`material-symbols-outlined ${filled ? 'icon-fill' : ''} leading-none ${className}`}
      style={{ fontSize: size }}
      aria-hidden="true"
    >
      {name}
    </span>
  )
}
