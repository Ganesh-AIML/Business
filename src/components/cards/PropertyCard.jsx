import { BUSINESS } from '../../data/config'
import Icon from '../ui/Icon'
import Button from '../ui/Button'
import { Card3DTilt } from '../animations'

/** Property listing card matching the Stitch available_properties design */
export default function PropertyCard({ property, layoutId }) {
  const {
    name, type, status, location, price, govtApproved,
    beds, baths, sqft, floor, ceiling, image,
  } = property

  const isCommercial = type === 'Shop' || type === 'Office'

  const waMessage = encodeURIComponent(
    `Hi, I am interested in: ${name} (${location}). Please share more details.`
  )

  const statusColors = {
    'For Sale':  'bg-surface-container-highest text-on-surface border-outline-variant',
    'For Rent':  'bg-surface-container-highest text-on-surface border-outline-variant',
    'For Lease': 'bg-surface-container-highest text-on-surface border-outline-variant',
  }

  return (
    <Card3DTilt maxTilt={5} scale={1.02} className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col" layoutId={layoutId}>
      {/* Image */}
      <div className="relative overflow-hidden aspect-3-2">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500"
          loading="lazy"
        />
        {/* Status badge */}
        <span className={`absolute top-3 left-3 font-label-bold text-xs px-2.5 py-1 rounded-sm border uppercase tracking-wider ${statusColors[status] || 'bg-white text-primary border-outline-variant'}`}>
          {status}
        </span>
        {/* Govt Approved */}
        {govtApproved && (
          <span className="absolute top-3 right-3 flex items-center gap-1 bg-primary text-on-primary font-label-bold text-xs px-2.5 py-1 rounded-sm">
            <Icon name="verified" filled size={12} className="text-secondary-fixed" />
            Govt Approved
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1 mb-2">
          <Icon name="location_on" size={14} className="text-on-surface-variant" />
          <span className="font-body-sm text-body-sm text-on-surface-variant">{location}</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-2 leading-tight">{name}</h3>
        <p className="font-headline-sm text-headline-sm text-secondary mb-4">{price}</p>

        {/* Specs bar */}
        <div className="bg-surface-container rounded-lg px-4 py-3 flex items-center justify-around mb-5 text-center">
          {isCommercial ? (
            <>
              <div>
                <p className="font-label-bold text-xs text-on-surface">{floor}</p>
                <p className="font-label-bold text-xs text-on-surface-variant uppercase tracking-wider">Floor</p>
              </div>
              <div className="w-px h-8 bg-outline-variant" />
              <div>
                <p className="font-label-bold text-xs text-on-surface">{ceiling}</p>
                <p className="font-label-bold text-xs text-on-surface-variant uppercase tracking-wider">Ceiling</p>
              </div>
              <div className="w-px h-8 bg-outline-variant" />
              <div>
                <p className="font-label-bold text-xs text-on-surface">{sqft.toLocaleString()}</p>
                <p className="font-label-bold text-xs text-on-surface-variant uppercase tracking-wider">Sq Ft</p>
              </div>
            </>
          ) : (
            <>
              <div>
                <p className="font-label-bold text-xs text-on-surface">{beds}</p>
                <p className="font-label-bold text-xs text-on-surface-variant uppercase tracking-wider">Beds</p>
              </div>
              <div className="w-px h-8 bg-outline-variant" />
              <div>
                <p className="font-label-bold text-xs text-on-surface">{baths}</p>
                <p className="font-label-bold text-xs text-on-surface-variant uppercase tracking-wider">Baths</p>
              </div>
              <div className="w-px h-8 bg-outline-variant" />
              <div>
                <p className="font-label-bold text-xs text-on-surface">{sqft.toLocaleString()}</p>
                <p className="font-label-bold text-xs text-on-surface-variant uppercase tracking-wider">Sq Ft</p>
              </div>
            </>
          )}
        </div>

        {/* CTAs */}
        <div className="flex gap-3 mt-auto">
          <Button href="/contact" variant="primary" size="sm" className="flex-1 rounded-lg text-sm">
            Enquire Now
          </Button>
          <Button
            href={`${BUSINESS.whatsappLink}?text=${waMessage}`}
            external
            variant="secondary-outline"
            size="sm"
            icon="chat"
            className="flex-1 rounded-lg text-sm"
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </Card3DTilt>
  )
}
