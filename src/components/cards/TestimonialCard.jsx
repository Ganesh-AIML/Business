import StarRating from '../ui/StarRating'

/**
 * Client testimonial card.
 * featured=true → dark (primary bg) large center card
 */
export default function TestimonialCard({ testimonial, featured = false }) {
  const { name, service, stars, quote, initials, image } = testimonial

  if (featured) {
    return (
      <div className="bg-primary text-on-primary border border-primary rounded-xl p-8 flex flex-col justify-between h-full shadow-trust hover:-translate-y-1 transition-all duration-300">
        <div>
          <StarRating rating={stars} className="mb-5 text-secondary-fixed" />
          <p className="font-body-lg text-body-lg leading-relaxed mb-6">{quote}</p>
        </div>
        <div className="flex items-center gap-4 mt-6">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-14 h-14 rounded-full object-cover border-2 border-surface-variant"
              loading="lazy"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-surface-container-highest flex items-center justify-center border-2 border-surface-variant">
              <span className="font-label-bold text-label-bold text-on-surface-variant">{initials}</span>
            </div>
          )}
          <div>
            <p className="font-label-bold text-label-bold text-on-primary">{name}</p>
            <p className="font-body-sm text-body-sm text-inverse-primary">{service}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col justify-between h-full hover:shadow-trust hover:-translate-y-1 transition-all duration-300">
      <div>
        <StarRating rating={stars} className="mb-4" />
        <p className="font-body-md text-body-md text-on-surface-variant mb-6">{quote}</p>
      </div>
      <div className="flex items-center gap-3">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border border-outline-variant"
            loading="lazy"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant">
            <span className="font-label-bold text-label-bold text-on-surface-variant">{initials}</span>
          </div>
        )}
        <div>
          <p className="font-label-bold text-label-bold text-primary">{name}</p>
          <p className="font-body-sm text-body-sm text-outline">{service}</p>
        </div>
      </div>
    </div>
  )
}
