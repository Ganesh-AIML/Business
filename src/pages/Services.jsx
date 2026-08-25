import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/ui/Icon'
import TestimonialCard from '../components/cards/TestimonialCard'
import { testimonials } from '../data/testimonials'
import { TextReveal, StaggerContainer, StaggerItem, MagneticButton } from '../components/animations'
import { BorderBeam } from '../components/ui/border-beam'

const CAPABILITIES = [
  {
    id: 'realestate',
    icon: 'real_estate_agent',
    iconBg: 'bg-primary-fixed',
    title: 'Premium Property Brokerage',
    description: 'Expert guidance through buying, selling, and renting high-value residential and commercial properties. We manage the complexities so you can focus on the investment.',
    bullets: ['Luxury Residential Sales & Leasing', 'Commercial Real Estate Acquisitions'],
    cols: 'md:col-span-8',
    large: true,
  },
  {
    id: 'corporate',
    icon: 'domain',
    iconBg: 'bg-surface-container-highest',
    title: 'Corporate Leasing',
    description: 'Tailored office spaces and executive housing solutions designed for enterprise agility and comfort.',
    cols: 'md:col-span-4',
  },
  {
    id: 'automotive',
    icon: 'directions_car',
    iconBg: 'bg-tertiary-fixed',
    iconClass: 'text-on-tertiary-container',
    title: 'Elite Automotive Leasing',
    description: 'Flexible, high-end car rental and long-term leasing options. From executive sedans to luxury SUVs, experience seamless mobility.',
    cols: 'md:col-span-6',
  },
  {
    id: 'transport',
    icon: 'commute',
    iconBg: 'bg-surface-container-highest',
    title: 'Employee Transport',
    description: 'Reliable, scheduled fleet services ensuring safe and punctual commutes for your corporate workforce.',
    cols: 'md:col-span-6',
  },
]

export default function Services() {
  const navigate = useNavigate()
  useEffect(() => {
    document.title = 'Services & Testimonials — Siddhart LifeSpace'
  }, [])

  const featured = testimonials.find((t) => t.featured)
  const left     = testimonials.filter((t) => [1, 4].includes(t.id))
  const right    = testimonials.filter((t) => [3, 5].includes(t.id))

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="py-section-gap text-center border-b border-outline-variant">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <TextReveal as="h1" split="words" stagger={0.05} delay={0.1} className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
              Comprehensive Solutions. Unwavering Trust.
            </TextReveal>
            <TextReveal as="p" split="words" stagger={0.03} delay={0.2} className="font-body-lg text-body-lg text-on-surface-variant">
              We bridge the gap between premium real estate brokerage and elite automotive leasing, delivering precision and dependability for your most significant commitments.
            </TextReveal>
          </div>
        </div>
      </section>

      {/* ── Full Capabilities Bento ───────────────────────────────── */}
      <section className="py-section-gap">
        <div className="section-container">
          <TextReveal as="h2" split="words" stagger={0.05} delay={0.1} className="font-headline-md text-headline-md text-primary mb-12">
            Our Full Capabilities
          </TextReveal>
          <StaggerContainer stagger={0.1} direction="up" className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {CAPABILITIES.map((cap) => (
              <StaggerItem key={cap.id}>
                <div className={`${cap.cols} bg-surface-container-lowest border border-outline-variant rounded-xl p-8 group hover:shadow-trust transition-shadow duration-300 flex flex-col justify-between`}>
                  <div>
                    <div className={`w-12 h-12 ${cap.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon name={cap.icon} size={24} className={cap.iconClass || 'text-primary'} />
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-4">{cap.title}</h3>
                    <p className={`${cap.large ? 'font-body-md text-body-md' : 'font-body-sm text-body-sm'} text-on-surface-variant`}>
                      {cap.description}
                    </p>
                  </div>
                  {cap.bullets && (
                    <ul className="space-y-3 mt-6">
                      {cap.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-3">
                          <Icon name="check_circle" filled size={16} className="text-secondary" />
                          <span className="font-body-sm text-body-sm text-on-surface">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Client Endorsements ───────────────────────────────────── */}
      <section className="py-section-gap bg-surface-container-low border-t border-b border-surface-dim">
        <div className="section-container">
          {/* Section header with trust badges */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <TextReveal as="h2" split="words" stagger={0.05} delay={0.1} className="font-headline-md text-headline-md text-primary mb-2">
                Client Endorsements
              </TextReveal>
              <TextReveal as="p" split="words" stagger={0.03} delay={0.2} className="font-body-lg text-body-lg text-on-surface-variant">
                Hear from professionals who trust our discipline.
              </TextReveal>
            </div>
            <StaggerContainer stagger={0.07} direction="up" className="flex gap-3 flex-wrap">
              <StaggerItem>
                <div className="flex items-center gap-2 bg-surface-container-highest px-4 py-2 rounded-lg border border-outline-variant">
                  <Icon name="verified" filled size={16} className="text-secondary" />
                  <span className="font-label-bold text-label-bold text-primary">Govt Approved</span>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="flex items-center gap-2 bg-surface-container-highest px-4 py-2 rounded-lg border border-outline-variant">
                  <Icon name="receipt_long" size={16} className="text-primary" />
                  <span className="font-label-bold text-label-bold text-primary">GST Verified</span>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Asymmetric 3-col testimonial grid */}
          <StaggerContainer stagger={0.1} direction="up" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left column: cards 1 + 4 */}
            <StaggerItem>
              <div className="flex flex-col gap-6">
                {left.map((t) => <TestimonialCard key={t.id} testimonial={t} />)}
              </div>
            </StaggerItem>

            {/* Center: featured (2 rows tall) */}
            <StaggerItem>
              <div className="relative">
                {featured && (
                  <>
                    <BorderBeam size={80} duration={10} colorFrom="#006c49" colorTo="#004d33" />
                    <TestimonialCard testimonial={featured} featured />
                  </>
                )}
              </div>
            </StaggerItem>

            {/* Right column: cards 3 + 5 */}
            <StaggerItem>
              <div className="flex flex-col gap-6">
                {right.map((t) => <TestimonialCard key={t.id} testimonial={t} />)}
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-section-gap">
        <div className="section-container">
          <div className="bg-surface-container-low border border-outline-variant rounded-xl p-12 text-center max-w-4xl mx-auto">
            <TextReveal as="h2" split="words" stagger={0.05} delay={0.1} className="font-headline-md text-headline-md text-primary mb-4">
              Ready to Discuss Your Requirements?
            </TextReveal>
            <TextReveal as="p" split="words" stagger={0.03} delay={0.2} className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl mx-auto">
              Connect with our consultants to build a tailored plan for your real estate or automotive needs.
            </TextReveal>
            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton
                onClick={() => navigate('/contact')}
                className="bg-secondary text-on-secondary font-label-bold text-label-bold px-8 py-4 rounded-lg shadow-green-sm hover:opacity-90 transition-opacity"
                strength={0.3}
                scale={1.03}
              >
                Enquire for a Service
              </MagneticButton>
              <MagneticButton
                onClick={() => navigate('/properties')}
                className="bg-transparent border-2 border-primary text-primary font-label-bold text-label-bold px-8 py-4 rounded-lg hover:bg-primary hover:text-on-primary transition-colors"
                strength={0.3}
                scale={1.03}
              >
                View Full Portfolio
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
