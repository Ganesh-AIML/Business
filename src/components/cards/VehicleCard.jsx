import Icon from '../ui/Icon'
import Button from '../ui/Button'
import { Card3DTilt } from '../animations'

/** Vehicle listing card matching the Stitch available_vehicles design */
export default function VehicleCard({ vehicle, layoutId }) {
  const { name, category, seating, type, driverAvailable, image } = vehicle

  const categoryColors = {
    'Luxury Sedan': 'text-yellow-500',
    'Premium SUV': 'text-gray-400',
    'Executive MPV': 'text-amber-600',
  }

  const categoryBorder = {
    'Luxury Sedan': 'border-yellow-500/30',
    'Premium SUV': 'border-gray-400/30',
    'Executive MPV': 'border-amber-600/30',
  }

  return (
    <Card3DTilt maxTilt={5} scale={1.02} className={`bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col ${categoryBorder[category] || ''}`} layoutId={layoutId}>
      {/* Image */}
      <div className="relative overflow-hidden aspect-3-2">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500"
          loading="lazy"
        />
        {driverAvailable && (
          <span className="absolute top-3 left-3 flex items-center gap-1 bg-primary text-on-primary font-label-bold text-xs px-2.5 py-1 rounded-sm">
            <Icon name="person" size={12} className="text-secondary-fixed" />
            Driver Available
          </span>
        )}
        <span className={`absolute top-3 right-3 font-label-bold text-xs px-2.5 py-1 rounded-sm bg-surface-container-high text-on-surface uppercase tracking-wider ${categoryColors[category] || 'text-primary'}`}>
          {category}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-headline-sm text-headline-sm text-primary mb-1">{name}</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">{category}</p>

        {/* Specs grid */}
        <div className="grid grid-cols-2 gap-3 mb-5 border-t border-b border-outline-variant py-3">
          <div className="flex items-center gap-2">
            <Icon name="group" size={16} className="text-on-surface-variant" />
            <span className="font-label-bold text-xs text-on-surface uppercase tracking-wider">
              {seating} Seater
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="local_shipping" size={16} className="text-on-surface-variant" />
            <span className="font-label-bold text-xs text-on-surface uppercase tracking-wider">
              {type}
            </span>
          </div>
        </div>

        {/* CTA */}
        <Button href="/contact" variant="secondary-outline" size="sm" className="w-full mt-auto hover:bg-primary hover:text-on-primary hover:border-primary">
          Book / Enquire
        </Button>
      </div>
    </Card3DTilt>
  )
}