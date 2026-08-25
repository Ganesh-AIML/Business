import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon'
import { TextReveal, StaggerContainer, StaggerItem, MagneticButton } from '../components/animations'
import { BorderBeam } from '../components/ui/border-beam'
import propertyHero from '../assets/rent-page.jpg'
import flatImg from '../assets/Home.jpg'
import commercialImg from '../assets/Shop.jpg'

export default function RealEstateServices() {
  useEffect(() => {
    document.title = 'Real Estate Services — Siddhart LifeSpace'
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="py-section-gap border-b border-outline-variant">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            {/* Left */}
            <div className="md:col-span-6">
              <TextReveal as="h1" split="words" stagger={0.05} delay={0.1} className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                Navigating Your Real Estate Journey with Precision.
              </TextReveal>
              <TextReveal as="p" split="words" stagger={0.03} delay={0.2} className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                Comprehensive assistance for buying, selling, and renting premium residential and commercial properties. We transform complex transactions into seamless experiences.
              </TextReveal>
              <div className="flex flex-wrap gap-4">
                <MagneticButton
                  onClick={() => scrollToSection('categories')}
                  className="bg-primary text-on-primary font-label-bold text-label-bold px-6 py-3 rounded-lg shadow-green-sm hover:opacity-90 transition-opacity"
                  strength={0.3}
                  scale={1.03}
                >
                  Find My Property
                </MagneticButton>
                <MagneticButton
                  onClick={() => scrollToSection('categories')}
                  className="bg-transparent border-2 border-primary text-primary font-label-bold text-label-bold px-6 py-3 rounded-lg hover:bg-primary hover:text-on-primary transition-colors"
                  strength={0.3}
                  scale={1.03}
                >
                  Explore Categories
                </MagneticButton>
              </div>
            </div>
            {/* Right — property image */}
            <div className="md:col-span-6">
              <div className="overflow-hidden rounded-xl shadow-trust">
                <img
                  src={propertyHero}
                  alt="Premium property development"
                  className="w-full h-[320px] md:h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Search Teaser Bar ─────────────────────────────────────── */}
      <section className="bg-primary-fixed border-y border-outline-variant py-5">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Icon name="location_on" filled size={24} className="text-secondary shrink-0" />
            <div>
              <TextReveal as="p" split="words" stagger={0.03} className="font-body-lg text-body-lg text-primary font-semibold">
                Location-based search tailored to your budget.
              </TextReveal>
              <TextReveal as="p" split="words" stagger={0.03} className="font-body-sm text-body-sm text-on-surface-variant">
                Discover the perfect space in your ideal neighborhood.
              </TextReveal>
            </div>
          </div>
          <MagneticButton
            onClick={() => scrollToSection('categories')}
            className="bg-primary text-on-primary font-label-bold text-label-bold px-6 py-3 rounded-lg shadow-green-sm hover:opacity-90 transition-opacity"
            strength={0.3}
            scale={1.03}
          >
            Start Search
          </MagneticButton>
        </div>
      </section>

      {/* ── Services Bento Grid ───────────────────────────────────── */}
      <section className="py-section-gap">
        <div className="section-container">
          <TextReveal as="h2" split="words" stagger={0.05} delay={0.1} className="font-headline-md text-headline-md text-primary mb-4">
            Expert Assistance at Every Step
          </TextReveal>
          <TextReveal as="p" split="words" stagger={0.03} delay={0.2} className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl">
            Whether you are acquiring a new headquarters or seeking a temporary residential lease, our specialized teams provide dedicated support.
          </TextReveal>
          <StaggerContainer stagger={0.1} direction="up" className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Buying Assistance — 8 cols */}
            <StaggerItem className="md:col-span-8">
              <div className="h-full bg-surface-container-lowest border border-outline-variant rounded-xl p-8 group hover:shadow-trust transition-shadow duration-300 relative overflow-hidden">
                <BorderBeam size={120} duration={8} colorFrom="#006c49" colorTo="#004d33" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-32 translate-x-32 pointer-events-none" />
                <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center mb-6">
                  <Icon name="real_estate_agent" size={24} className="text-secondary" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Property Buying Assistance</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  A detailed, consultative approach to finding and securing your ideal home or commercial space. From initial market analysis and curated viewings to rigorous negotiation and final contract execution, we protect your interests throughout the acquisition process.
                </p>
                <ul className="space-y-3">
                  {['Market Valuation & Analysis', 'Exclusive Off-Market Listings', 'Legal & Compliance Review'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Icon name="check_circle" filled size={18} className="text-secondary" />
                      <span className="font-body-sm text-body-sm text-on-surface">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            {/* Renting Assistance — 4 cols */}
            <StaggerItem className="md:col-span-4">
              <div className="h-full bg-surface-container-lowest border border-outline-variant rounded-xl p-8 group hover:shadow-trust transition-shadow duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center mb-6">
                    <Icon name="key" size={24} className="text-on-surface-variant" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Property Renting Assistance</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Streamlined solutions for tenants seeking premium flats or commercial shops. We handle lease negotiations and vetting to ensure a secure agreement.
                  </p>
                </div>
                <Link
                  to="/properties"
                  className="mt-8 font-label-bold text-label-bold text-secondary flex items-center gap-2 hover:gap-3 transition-all"
                >
                  View Rental Process <Icon name="east" size={16} />
                </Link>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ── Categories ───────────────────────────────────────────── */}
      <section id="categories" className="py-section-gap bg-surface-container-low border-t border-surface-dim">
        <div className="section-container">
          <TextReveal as="h2" split="words" stagger={0.05} delay={0.1} className="font-headline-md text-headline-md text-primary mb-12">
            Explore Our Portfolio
          </TextReveal>
          <StaggerContainer stagger={0.1} direction="up" className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Flats & Residences */}
            <StaggerItem>
              <Link to="/properties" className="group block">
                <div className="relative overflow-hidden rounded-xl h-64 shadow-sm">
                  <img
                    src={flatImg}
                    alt="Luxury flats and residences"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="font-headline-sm text-headline-sm text-on-primary mb-1">Flats & Residences</h3>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-surface-container-lowest border border-t-0 border-outline-variant rounded-b-xl px-6 py-4">
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Premium apartments and penthouses.</p>
                  <Icon name="east" size={18} className="text-secondary group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </StaggerItem>

            {/* Shops & Commercial */}
            <StaggerItem>
              <Link to="/properties" className="group block">
                <div className="relative overflow-hidden rounded-xl h-64 shadow-sm">
                  <img
                    src={commercialImg}
                    alt="Shops and commercial spaces"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="font-headline-sm text-headline-sm text-on-primary mb-1">Shops & Commercial</h3>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-surface-container-lowest border border-t-0 border-outline-variant rounded-b-xl px-6 py-4">
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Prime retail spaces and corporate offices.</p>
                  <Icon name="east" size={18} className="text-secondary group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}