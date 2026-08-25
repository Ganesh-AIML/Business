import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import { Card3DTilt } from '../animations'

/** Home page core service card with icon, title, description, and link */
export default function ServiceCard({ icon, iconBg = 'bg-surface-container-highest', title, description, link, linkLabel = 'Learn More' }) {
  return (
    <Card3DTilt maxTilt={5} scale={1.02} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 flex flex-col gap-5">
      {/* Icon */}
      <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center`}>
        <Icon name={icon} size={24} className="text-secondary" />
      </div>
      <div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{title}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
      </div>
      <Link
        to={link}
        className="font-label-bold text-label-bold text-secondary hover:text-on-secondary-fixed-variant flex items-center gap-2 transition-colors mt-auto"
      >
        {linkLabel}
        <Icon name="east" size={16} />
      </Link>
    </Card3DTilt>
  )
}