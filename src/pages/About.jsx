import { useEffect } from 'react'
import Icon from '../components/ui/Icon'
import ValueCard from '../components/cards/ValueCard'
import profileImg from '@/assets/profile.png'
import { TextReveal, StaggerContainer, StaggerItem } from '../components/animations'

const DISCIPLINES = [
  {
    icon: 'verified_user',
    title: 'Absolute Trust',
    description:
      'Operating with complete fiduciary responsibility. We safeguard our clients\' interests in every transaction, ensuring confidentiality and security are never compromised.',
  },
  {
    icon: 'visibility',
    title: 'Clear Transparency',
    description:
      'No hidden fees, no ambiguous terms. We provide exhaustive documentation and clear communication at every stage of the real estate or leasing process.',
  },
  {
    icon: 'precision_manufacturing',
    title: 'Steadfast Reliability',
    description:
      'Delivering on commitments with military precision. Whether securing a prime commercial lease or a fleet of executive vehicles, our execution is flawless.',
  },
]

const EXPERTISE = [
  {
    icon: 'domain',
    title: 'Commercial & Prime Real Estate',
    description:
      'Securing landmark properties, negotiating complex lease agreements, and providing strategic asset disposition across primary metropolitan districts.',
  },
  {
    icon: 'directions_car',
    title: 'Corporate Fleet Leasing',
    description:
      'Structuring tax-efficient, long-term leasing solutions for executive vehicles and logistics fleets, ensuring operational continuity and brand prestige.',
  },
]

export default function About() {
  useEffect(() => {
    document.title = 'About Us — Siddhart LifeSpace'
  }, [])

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="py-section-gap bg-surface-container-low border-b border-surface-dim">
        <div className="section-container">
          <div className="max-w-2xl">
            <TextReveal as="h1" split="words" stagger={0.05} delay={0.1} className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
              Decades of Excellence in Real Estate & Logistics.
            </TextReveal>
            <TextReveal as="p" split="words" stagger={0.03} delay={0.2} className="font-body-lg text-body-lg text-on-surface-variant">
              Siddhart LifeSpace represents the pinnacle of professional advisory, guiding discerning clients through high-value property acquisitions and premium corporate transportation solutions with unwavering precision.
            </TextReveal>
          </div>
        </div>
      </section>

      {/* ── Core Disciplines ─────────────────────────────────────── */}
      <section className="py-section-gap">
        <div className="section-container">
          <TextReveal as="h2" split="words" stagger={0.05} delay={0.1} className="font-headline-md text-headline-md text-primary mb-12">
            Our Core Disciplines
          </TextReveal>
          <StaggerContainer stagger={0.1} direction="up" className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {DISCIPLINES.map((d) => (
              <StaggerItem key={d.title}>
                <ValueCard {...d} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Expertise & Trust Section ─────────────────────────────── */}
      <section className="py-section-gap bg-surface-container-low border-t border-surface-dim">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* Portrait + trust badges */}
            <div className="lg:col-span-5 relative">
              <img
                src={profileImg}
                alt="Principal consultant at Siddhart LifeSpace"
                className="w-full aspect-3-4 object-cover rounded-xl shadow-trust"
              />
              {/* Floating badges */}
              <StaggerContainer stagger={0.1} direction="left" className="absolute bottom-8 right-0 translate-x-6 flex flex-col gap-3">
                <StaggerItem>
                  <div className="bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 shadow-trust flex items-center gap-3">
                    <Icon name="verified" filled size={20} className="text-secondary" />
                    <div>
                      <p className="font-label-bold text-xs text-primary uppercase tracking-wider">Govt Approved</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Certified Brokerage</p>
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 shadow-trust flex items-center gap-3">
                    <Icon name="receipt_long" size={20} className="text-primary" />
                    <div>
                      <p className="font-label-bold text-xs text-primary uppercase tracking-wider">GST Registered</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Fully Compliant</p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            {/* Text content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <TextReveal as="h2" split="words" stagger={0.05} delay={0.1} className="font-headline-md text-headline-md text-primary mb-4">
                Unrivaled Expertise Across Domains
              </TextReveal>
              <TextReveal as="p" split="words" stagger={0.03} delay={0.2} className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                With over a decade of embedded market intelligence, we operate at the intersection of premium property acquisition and executive logistics. Our dual-focus allows comprehensive asset management for high-net-worth individuals and corporate entities.
              </TextReveal>
              <StaggerContainer stagger={0.1} direction="up">
                {EXPERTISE.map((item, i) => (
                  <StaggerItem key={item.title}>
                    <div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 mt-1">
                          <Icon name={item.icon} size={20} className="text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                            {item.title}
                          </h3>
                          <p className="font-body-md text-body-md text-on-surface-variant">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      {i < EXPERTISE.length - 1 && (
                        <div className="border-t border-outline-variant mt-6" />
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
