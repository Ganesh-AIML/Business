import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TrustBar from '../components/ui/TrustBar'
import ServiceCard from '../components/cards/ServiceCard'
import { TextReveal, StaggerContainer, StaggerItem, MagneticButton } from '../components/animations'
import heroCityscape from '@/assets/hero-cityscape.jpg'

const HERO_IMAGE = heroCityscape

const SERVICES = [
  {
    icon: 'location_city',
    iconBg: 'bg-surface-container-high',
    title: 'Real Estate',
    description:
      'Expert brokerage for premium commercial spaces, luxury apartments, and retail shops in prime locations.',
    link: '/properties',
    linkLabel: 'Explore Properties',
  },
  {
    icon: 'directions_car',
    iconBg: 'bg-surface-container-high',
    title: 'Car Leasing',
    description:
      'Flexible, tax-efficient corporate leasing structures for executive sedans and luxury SUVs.',
    link: '/vehicles',
    linkLabel: 'View Fleet',
  },
  {
    icon: 'car_rental',
    iconBg: 'bg-surface-container-high',
    title: 'Car Rental',
    description:
      'Short to medium-term premium vehicle rentals for corporate visits and special engagements.',
    link: '/contact',
    linkLabel: 'Book Rental',
  },
]

export default function Home() {
  const navigate = useNavigate()
  useEffect(() => {
    document.title = 'Siddhart LifeSpace — Expert Property & Vehicle Solutions'
  }, [])

  return (
    <>
      <div className="flex flex-col min-h-[calc(100vh-80px)]">
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative flex-1 min-h-[500px] flex items-center overflow-hidden">
        {/* Background image with parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('${HERO_IMAGE}')`, willChange: 'transform' }}
          aria-hidden="true"
        />
        {/* Gradient overlay — left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest to-transparent opacity-80" aria-hidden="true" />

        <div className="relative z-10 section-container w-full py-16 md:py-0">
          <div className="max-w-xl">
            {/* Breadcrumb removed (home page) */}
            <TextReveal as="h1" split="words" stagger={0.05} delay={0.1} className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
              Expert Property & Vehicle Solutions Tailored to Your Needs.
            </TextReveal>
            <TextReveal as="p" split="words" stagger={0.03} delay={0.2} className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-md">
              Professional Real Estate Assistance & Corporate Car Leasing Solutions. Secure your next high-value asset with confidence and precision.
            </TextReveal>
            <div className="flex flex-wrap gap-4">
              <MagneticButton
                onClick={() => navigate('/properties')}
                className="bg-primary text-on-primary font-label-bold text-label-bold px-8 py-4 rounded-lg shadow-green-sm hover:opacity-90 transition-opacity"
                strength={0.3}
                scale={1.03}
              >
                Find a Property
              </MagneticButton>
              <MagneticButton
                onClick={() => navigate('/car-leasing')}
                className="bg-transparent border-2 border-primary text-primary font-label-bold text-label-bold px-8 py-4 rounded-lg hover:bg-primary hover:text-on-primary transition-colors"
                strength={0.3}
                scale={1.03}
              >
                Lease a Vehicle
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

        {/* ── Trust Bar ────────────────────────────────────────────── */}
        <TrustBar />
      </div>

      {/* ── Core Services ────────────────────────────────────────── */}
      <section className="py-section-gap">
        <div className="section-container">
          <TextReveal as="h2" split="words" stagger={0.05} delay={0.1} className="font-headline-md text-headline-md text-primary mb-4 text-center">
            Our Core Services
          </TextReveal>
          <TextReveal as="p" split="words" stagger={0.03} delay={0.2} className="font-body-lg text-body-lg text-on-surface-variant mb-12 text-center max-w-2xl mx-auto">
            Comprehensive solutions for your real estate and automotive requirements, delivered with uncompromising professionalism.
          </TextReveal>
          <StaggerContainer stagger={0.1} direction="up" className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {SERVICES.map((s) => (
              <StaggerItem key={s.title}>
                <ServiceCard {...s} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────────────────── */}
      <section className="bg-primary text-on-primary py-section-gap">
        <div className="section-container text-center">
          <TextReveal as="h2" split="words" stagger={0.05} delay={0.1} className="font-headline-md text-headline-md text-on-primary mb-4">
            Ready to Start?
          </TextReveal>
          <TextReveal as="p" split="words" stagger={0.03} delay={0.2} className="font-body-lg text-body-lg text-on-primary/80 mb-10 max-w-2xl mx-auto">
            Get Property Assistance or Request a Vehicle Today. Our experts are ready to structure the perfect solution for you.
          </TextReveal>
          <div className="flex flex-wrap gap-4 justify-center">
            <MagneticButton
              onClick={() => navigate('/contact')}
              className="bg-secondary text-on-secondary font-label-bold text-label-bold px-8 py-4 rounded-lg shadow-green-sm hover:opacity-90 transition-opacity"
              strength={0.3}
              scale={1.03}
            >
              Request Property Quote
            </MagneticButton>
            <MagneticButton
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-on-primary text-on-primary font-label-bold text-label-bold px-8 py-4 rounded-lg hover:bg-on-primary hover:text-primary transition-colors"
              strength={0.3}
              scale={1.03}
            >
              Book Vehicle Consultation
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  )
}
