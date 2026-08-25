import { useEffect } from 'react'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import { TextReveal, StaggerContainer, StaggerItem, MagneticButton } from '../components/animations'
import carHero from '@/assets/car-hero.jpg'
import sedan from '@/assets/sedan.jpg'
import suv from '@/assets/suv.jpg'
import luxuryCar from '@/assets/luxury-car.jpg'

const CAR_HERO = carHero
const SEDAN_IMG = sedan
const SUV_IMG = suv
const LUXURY_IMG = luxuryCar

const CORP_FEATURES = [
  {
    icon: 'directions_car',
    bg: 'bg-secondary/10',
    title: 'Dedicated Vehicles',
    desc: 'Ensure executive comfort and reliability with our fleet of premium, dedicated vehicles assigned exclusively to your organization.',
  },
  {
    icon: 'calendar_month',
    bg: 'bg-secondary/10',
    title: 'Long-Term Contracts',
    desc: 'Flexible 12 to 36-month leasing agreements designed to align with your corporate budget and strategic operational needs.',
  },
  {
    icon: 'support_agent',
    bg: 'bg-secondary/10',
    title: 'Managed Logistics',
    desc: 'Comprehensive logistics management including scheduled employee pickup/drop-off services and 24/7 maintenance support.',
  },
]

const RENTAL_CATEGORIES = [
  {
    image: SEDAN_IMG,
    badge: 'ECONOMY',
    title: 'Executive Sedan',
    desc: 'Ideal for city transit',
    features: ['Self-drive available', 'Daily/Weekly rates', 'Standard Insurance'],
  },
  {
    image: SUV_IMG,
    badge: 'SUV',
    title: 'Premium SUV',
    desc: 'Comfort for longer journeys',
    features: ['Chauffeur option available', 'Flexible durations', 'Premium Insurance'],
  },
  {
    image: LUXURY_IMG,
    badge: 'LUXURY',
    title: 'Luxury Class',
    desc: 'Uncompromising prestige',
    features: ['Professional Chauffeur only', 'Hourly/Daily rates', 'VIP Support'],
  },
]

export default function CarLeasing() {
  useEffect(() => {
    document.title = 'Car Leasing & Rental — Siddhart LifeSpace'
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="py-section-gap border-b border-outline-variant">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-6">
              <TextReveal as="h1" split="words" stagger={0.05} delay={0.1} className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                Premium Mobility Solutions for Business & Leisure
              </TextReveal>
              <TextReveal as="p" split="words" stagger={0.03} delay={0.2} className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                Experience uncompromised quality with Siddhart LifeSpace's corporate leasing and premium rental services. We deliver precision, reliability, and luxury for every journey.
              </TextReveal>
              <div className="flex flex-wrap gap-4">
                <MagneticButton
                  onClick={() => scrollTo('corporate')}
                  className="bg-primary text-on-primary font-label-bold text-label-bold px-6 py-3 rounded-lg shadow-green-sm hover:opacity-90 transition-opacity"
                  strength={0.3}
                  scale={1.03}
                >
                  Corporate Leasing
                </MagneticButton>
                <MagneticButton
                  onClick={() => scrollTo('rental')}
                  className="bg-transparent border-2 border-primary text-primary font-label-bold text-label-bold px-6 py-3 rounded-lg hover:bg-primary hover:text-on-primary transition-colors"
                  strength={0.3}
                  scale={1.03}
                >
                  Personal Rental
                </MagneticButton>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="overflow-hidden rounded-xl shadow-trust">
                <img
                  src={CAR_HERO}
                  alt="Luxury sedan for corporate leasing"
                  className="w-full h-[320px] md:h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Corporate Leasing ─────────────────────────────────────── */}
      <section id="corporate" className="py-section-gap bg-surface-container-low border-b border-surface-dim">
        <div className="section-container">
          <TextReveal as="h2" split="words" stagger={0.05} delay={0.1} className="font-headline-md text-headline-md text-primary mb-4">
            Corporate Car Leasing
          </TextReveal>
          <TextReveal as="p" split="words" stagger={0.03} delay={0.2} className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl">
            Strategic mobility management designed for modern enterprises. Optimize your corporate fleet with tailored long-term contracts and dedicated logistics support.
          </TextReveal>
          <StaggerContainer stagger={0.1} direction="up" className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-10">
            {CORP_FEATURES.map((f) => (
              <StaggerItem key={f.title}>
                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 group hover:shadow-trust transition-shadow duration-300">
                  <div className={`w-12 h-12 ${f.bg} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon name={f.icon} size={24} className="text-secondary" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{f.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Fleet CTA bar */}
          <div className="bg-surface-container-highest rounded-xl border border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-6">
            <div>
              <p className="font-headline-sm text-headline-sm text-primary">Ready to optimize your fleet?</p>
              <p className="font-body-md text-body-md text-on-surface-variant">Connect with our corporate mobility specialists for a customized proposal.</p>
            </div>
            <MagneticButton
              onClick={() => scrollTo('contact')}
              className="bg-black text-white font-label-bold text-label-bold px-6 py-3 rounded-lg whitespace-nowrap hover:opacity-90 transition-opacity"
              strength={0.3}
              scale={1.03}
            >
              Request Corporate Quote
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ── Personal Rental ───────────────────────────────────────── */}
      <section id="rental" className="py-section-gap">
        <div className="section-container">
          <TextReveal as="h2" split="words" stagger={0.05} delay={0.1} className="font-headline-md text-headline-md text-primary mb-4">
            Premium Car Rental
          </TextReveal>
          <TextReveal as="p" split="words" stagger={0.03} delay={0.2} className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl">
            Whether for business travel or personal leisure, select from our meticulously maintained fleet for short-term and flexible duration rentals.
          </TextReveal>
          <StaggerContainer stagger={0.1} direction="up" className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {RENTAL_CATEGORIES.map((cat) => (
              <StaggerItem key={cat.title}>
                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden group hover:shadow-trust transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute top-3 right-3 bg-surface-container-high text-primary font-label-bold text-xs px-2.5 py-1 rounded tracking-wider uppercase border border-outline-variant">
                      {cat.badge}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-1">{cat.title}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">{cat.desc}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {cat.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <Icon name="check" size={14} className="text-secondary" />
                          <span className="font-body-sm text-body-sm text-on-surface">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <Button href="/contact" variant="text" size="sm" className="text-secondary">
                        Enquire for Rate
                      </Button>
                      <Button href="/vehicles" variant="text" size="sm">
                        View Fleet
                      </Button>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
