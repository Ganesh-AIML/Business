import Icon from '../ui/Icon'

/** About page value/discipline card with icon in circle container */
export default function ValueCard({ icon, title, description, dark = false }) {
  return (
    <div className={`h-full ${dark ? 'bg-surface-container-highest/10 border-on-primary-fixed-variant' : 'bg-surface-container-lowest border-outline-variant'} border rounded-xl p-8 flex flex-col items-center text-center gap-4 hover:shadow-trust transition-shadow duration-300`}>
      <div className={`w-16 h-16 rounded-full ${dark ? 'bg-secondary/20' : 'bg-surface-container-highest'} flex items-center justify-center`}>
        <Icon name={icon} size={28} className={dark ? 'text-secondary-fixed' : 'text-secondary'} />
      </div>
      <h3 className={`font-headline-sm text-headline-sm ${dark ? 'text-on-primary' : 'text-primary'}`}>{title}</h3>
      <p className={`font-body-sm text-body-sm ${dark ? 'text-on-primary/80' : 'text-on-surface-variant'}`}>{description}</p>
    </div>
  )
}
