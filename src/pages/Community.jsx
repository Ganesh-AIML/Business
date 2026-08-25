import { useEffect } from 'react'
import Icon from '../components/ui/Icon'
import ValueCard from '../components/cards/ValueCard'
import { TextReveal, StaggerContainer, StaggerItem } from '../components/animations'
import communityImg from '@/assets/community.jpg'
import logisticsImg from '@/assets/logistics.jpg'
import mentorshipImg from '@/assets/mentorship.jpg'

const COMMUNITY_IMG = communityImg
const LOGISTICS_IMG = logisticsImg
const MENTORSHIP_IMG = mentorshipImg

const PILLARS = [
  {
    icon: 'eco',
    title: 'Sustainable Practices',
    description: 'Integrating environmentally conscious methods across our real estate dealings and fleet management operations in Goregaon East and beyond.',
  },
  {
    icon: 'diversity_3',
    title: 'Community Welfare',
    description: 'Actively participating in local initiatives to uplift neighborhoods and provide support to those in need across our community.',
  },
  {
    icon: 'volunteer_activism',
    title: 'Ethical Business',
    description: 'Maintaining strict compliance and transparent operations, ensuring trust in every high-value transaction we facilitate.',
  },
]

export default function Community() {
  useEffect(() => {
    document.title = 'Social & Community — Siddhart LifeSpace'
  }, [])

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-surface-container-low border-b border-surface-dim py-16 md:py-24">
        <div className="section-container text-center">
          <TextReveal as="h1" split="words" stagger={0.05} delay={0.1} className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 max-w-3xl mx-auto">
            Building More Than Just Business.
          </TextReveal>
          <TextReveal as="p" split="words" stagger={0.03} delay={0.2} className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            At Siddhart LifeSpace, we believe true success is measured by the positive impact we leave on our communities. Explore our initiatives and partnerships dedicated to fostering sustainable growth, community welfare, and social responsibility.
          </TextReveal>
          <div className="inline-flex items-center gap-2 text-secondary font-label-bold text-label-bold bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20">
            <Icon name="handshake" size={18} />
            <span>Committed to Community</span>
          </div>
        </div>
      </section>

      {/* ── Social Footprint Bento ────────────────────────────────── */}
      <section className="py-section-gap">
        <div className="section-container">
          {/* Title area */}
          <div className="mb-12">
            <TextReveal as="h2" split="words" stagger={0.05} delay={0.1} className="font-headline-md text-headline-md text-primary mb-2">
              Our Social Footprint
            </TextReveal>
            <TextReveal as="p" split="words" stagger={0.03} delay={0.2} className="font-body-md text-body-md text-on-surface-variant">
              Highlighting our recent community engagement and welfare programs.
            </TextReveal>
          </div>

          {/* Grid */}
          <div>
            <StaggerContainer 
              stagger={0.1} 
              direction="up" 
              className="grid grid-cols-1 md:grid-cols-12 gap-gutter"
            >
              {/* Large card — 8 cols, 2 rows */}
              <StaggerItem className="md:col-span-8 row-span-2">
                <div className="h-full group relative rounded-xl overflow-hidden shadow-sm hover:shadow-trust transition-shadow duration-300 border border-outline-variant min-h-[400px]">
                  <img
                    src={COMMUNITY_IMG}
                    alt="Annual community welfare meetup"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-hero-overlay-dark" />
                  <div className="relative z-10 flex flex-col justify-end p-8 text-on-primary h-full">
                    <div className="mb-2">
                      <span className="bg-secondary text-on-secondary font-label-bold text-xs uppercase tracking-wider px-3 py-1 rounded-sm inline-block mb-3">
                        Annual Meetup
                      </span>
                      <h3 className="font-headline-md text-headline-md mb-2">Annual Community Welfare Meetup</h3>
                      <p className="font-body-md text-body-md text-on-secondary/80 max-w-xl">
                        Bringing together local leaders, volunteers, and our corporate team to discuss and implement actionable welfare strategies for the upcoming year.
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              {/* Small card 1 — 4 cols, 1 row */}
              <StaggerItem className="md:col-span-4 row-span-1">
                <div className="h-full group relative rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest flex flex-col hover:shadow-trust transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={LOGISTICS_IMG}
                      alt="Local logistics support"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center flex-1">
                    <h4 className="font-headline-sm text-lg font-semibold text-primary mb-2">Local Logistics Support</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Providing essential transport and logistical backing for regional community drives.
                    </p>
                  </div>
                </div>
              </StaggerItem>

              {/* Small card 2 — 4 cols, 1 row */}
              <StaggerItem className="md:col-span-4 row-span-1">
                <div className="h-full group relative rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest flex flex-col hover:shadow-trust transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={MENTORSHIP_IMG}
                      alt="Youth mentorship program"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center flex-1">
                    <h4 className="font-headline-sm text-lg font-semibold text-primary mb-2">Youth Mentorship</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Guiding the next generation of business leaders through mentorship and internship programs.
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ── Pillars of Responsibility ─────────────────────────────── */}
      <section className="py-section-gap bg-surface-container-low border-t border-surface-dim">
        <div className="section-container">
          <TextReveal as="h2" split="words" stagger={0.05} delay={0.1} className="font-headline-md text-headline-md text-primary mb-4 text-center">
            Our Pillars of Responsibility
          </TextReveal>
          <TextReveal as="p" split="words" stagger={0.03} delay={0.2} className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-16 text-center">
            The foundational principles that guide our societal engagements and corporate decisions.
          </TextReveal>
          <StaggerContainer stagger={0.1} direction="up" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((p) => (
              <StaggerItem key={p.title}>
                <ValueCard {...p} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
