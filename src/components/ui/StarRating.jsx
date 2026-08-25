import Icon from './Icon'

/** Renders filled/unfilled stars based on rating (1–5) */
export default function StarRating({ rating = 5, className = '' }) {
  return (
    <div className={`flex gap-1 text-secondary ${className}`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Icon
          key={n}
          name="star"
          filled={n <= rating}
          size={16}
          className={n <= rating ? 'text-secondary' : 'text-outline-variant'}
        />
      ))}
    </div>
  )
}
