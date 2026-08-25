import { useState, useEffect } from 'react'
import Icon from '../components/ui/Icon'
import { BUSINESS } from '../data/config'
import { TextReveal, MagneticButton } from '../components/animations'
import { DottedMap } from '../components/ui/dotted-map'
import { MagicCard } from '../components/ui/magic-card'

const PROPERTY_TYPES = ['Villa', 'Apartment', 'Commercial', 'Shop', 'Office']
const VEHICLE_CATS   = ['Luxury Sedan', 'SUV', 'Executive MPV']

function FormField({ label, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">
        {label}
      </label>
      {children}
    </div>
  )
}

const inputCls =
  'w-full bg-surface-bright border border-outline-variant rounded-lg p-3 font-body-md text-body-md text-primary placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all'

const selectCls =
  'appearance-none w-full pr-8 bg-surface-bright border border-outline-variant rounded-lg p-3 font-body-md text-body-md text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer'

function SelectField({ value, onChange, children }) {
  return (
    <div className="relative">
      <select className={selectCls} value={value} onChange={onChange}>{children}</select>
      <Icon name="expand_more" size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
    </div>
  )
}

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact & Enquiry — Siddhart LifeSpace'
  }, [])

  const [activeTab, setActiveTab] = useState('property')

  /* Property form state */
  const [pf, setPf] = useState({ intent: 'Buy', location: '', budget: '', type: 'Villa', notes: '' })
  /* Vehicle form state */
  const [vf, setVf] = useState({ leaseType: 'Corporate Fleet', category: 'Luxury Sedan', startDate: '', chauffeur: false, notes: '' })

  const handlePropertySubmit = () => {
    const subject = `Property Enquiry – ${pf.intent} – ${pf.type} – ${pf.location}`
    const body    = `Intent: ${pf.intent}\nLocation: ${pf.location}\nBudget: ${pf.budget}\nType: ${pf.type}\nAdditional Requirements: ${pf.notes}`
    window.location.href = `${BUSINESS.emailLink}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleVehicleSubmit = () => {
    const subject = `Vehicle Leasing Enquiry – ${vf.leaseType} – ${vf.category}`
    const body    = `Lease Type: ${vf.leaseType}\nVehicle Category: ${vf.category}\nStart Date: ${vf.startDate}\nChauffeur: ${vf.chauffeur ? 'Yes' : 'No'}\nSpecial Requests: ${vf.notes}`
    window.location.href = `${BUSINESS.emailLink}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-surface-container-low border-b border-surface-dim py-section-gap text-center">
        <div className="section-container">
          <TextReveal as="h1" split="words" stagger={0.05} delay={0.1} className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4 max-w-3xl mx-auto">
            Let's Start a Conversation.
          </TextReveal>
          <TextReveal as="p" split="words" stagger={0.03} delay={0.2} className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Whether you are looking for an exclusive property or a premium vehicle lease, our consultants are ready to assist you.
          </TextReveal>
        </div>
      </section>

      {/* ── Main Grid ─────────────────────────────────────────────── */}
      <section className="py-section-gap">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

            {/* ── Forms (8 cols) ─────────────────────────────────── */}
            <div className="md:col-span-8 flex flex-col gap-gutter">
              {/* Tab switcher */}
              <div className="flex p-1 bg-surface-container-highest rounded-xl w-fit">
                {[{ key: 'property', label: 'Property Enquiry' }, { key: 'vehicle', label: 'Vehicle Leasing' }].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-6 py-2.5 rounded-lg font-label-bold text-label-bold transition-all ${
                      activeTab === key
                        ? 'bg-surface-container-lowest text-primary shadow-sm'
                        : 'text-on-surface-variant hover:text-primary'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Property Form */}
              {activeTab === 'property' && (
                <form
                  className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 flex flex-col gap-6 relative overflow-hidden group"
                  onSubmit={(e) => { e.preventDefault(); handlePropertySubmit() }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <h2 className="font-headline-sm text-headline-sm text-primary border-b border-outline-variant pb-4">
                    Property Requirements
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField label="Intent">
                      <SelectField value={pf.intent} onChange={(e) => setPf({ ...pf, intent: e.target.value })}>
                        <option>Buy</option><option>Rent</option>
                      </SelectField>
                    </FormField>
                    <FormField label="Preferred Location">
                      <input type="text" className={inputCls} placeholder="e.g. Goregaon East, Andheri…" value={pf.location} onChange={(e) => setPf({ ...pf, location: e.target.value })} />
                    </FormField>
                    <FormField label="Estimated Budget">
                      <input type="text" className={inputCls} placeholder="₹ Budget" value={pf.budget} onChange={(e) => setPf({ ...pf, budget: e.target.value })} />
                    </FormField>
                    <FormField label="Property Type">
                      <SelectField value={pf.type} onChange={(e) => setPf({ ...pf, type: e.target.value })}>
                        {PROPERTY_TYPES.map((t) => <option key={t}>{t}</option>)}
                      </SelectField>
                    </FormField>
                  </div>
                  <FormField label="Additional Requirements">
                    <textarea className={`${inputCls} resize-none`} rows={4} placeholder="Specific amenities, move-in dates…" value={pf.notes} onChange={(e) => setPf({ ...pf, notes: e.target.value })} />
                  </FormField>
                  <MagneticButton
                      type="submit"
                      className="self-start bg-secondary text-on-secondary font-label-bold text-label-bold px-8 py-3 rounded-lg shadow-green-sm hover:opacity-90 transition-opacity"
                      strength={0.3}
                      scale={1.02}
                    >
                      Submit Property Enquiry
                    </MagneticButton>
                </form>
              )}

              {/* Vehicle Form */}
              {activeTab === 'vehicle' && (
                <form
                  className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 flex flex-col gap-6 relative overflow-hidden group"
                  onSubmit={(e) => { e.preventDefault(); handleVehicleSubmit() }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-tertiary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <h2 className="font-headline-sm text-headline-sm text-primary border-b border-outline-variant pb-4">
                    Vehicle Leasing Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField label="Lease Type">
                      <SelectField value={vf.leaseType} onChange={(e) => setVf({ ...vf, leaseType: e.target.value })}>
                        <option>Corporate Fleet</option><option>Personal Lease</option>
                      </SelectField>
                    </FormField>
                    <FormField label="Vehicle Category">
                      <SelectField value={vf.category} onChange={(e) => setVf({ ...vf, category: e.target.value })}>
                        {VEHICLE_CATS.map((c) => <option key={c}>{c}</option>)}
                      </SelectField>
                    </FormField>
                    <FormField label="Preferred Start Date">
                      <input type="date" className={inputCls} value={vf.startDate} onChange={(e) => setVf({ ...vf, startDate: e.target.value })} />
                    </FormField>
                    <div className="flex flex-col justify-end gap-2 pb-1">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 text-secondary border-outline-variant rounded focus:ring-secondary" checked={vf.chauffeur} onChange={(e) => setVf({ ...vf, chauffeur: e.target.checked })} />
                        <span className="font-body-md text-body-md text-primary">Require Chauffeur Service</span>
                      </label>
                    </div>
                  </div>
                  <FormField label="Special Requests">
                    <textarea className={`${inputCls} resize-none`} rows={4} placeholder="Specific makes/models, delivery details…" value={vf.notes} onChange={(e) => setVf({ ...vf, notes: e.target.value })} />
                  </FormField>
                  <MagneticButton
                      type="submit"
                      className="self-start bg-secondary text-on-secondary font-label-bold text-label-bold px-8 py-3 rounded-lg shadow-green-sm hover:opacity-90 transition-opacity"
                      strength={0.3}
                      scale={1.02}
                    >
                      Submit Vehicle Enquiry
                    </MagneticButton>
                </form>
              )}
            </div>

            {/* ── Contact Info + Map (4 cols) ──────────────────────── */}
            <div className="md:col-span-4 flex flex-col gap-gutter">
              {/* Direct Contact Card */}
              <MagicCard
                gradientColor="rgba(255,255,255,0.1)"
                className="bg-primary text-on-primary rounded-xl p-8 flex flex-col gap-8"
              >
                <h3 className="font-headline-sm text-headline-sm">Direct Contact</h3>
                <div className="flex flex-col gap-6">
                  {[
                    { icon: 'call',     label: 'Phone',         value: BUSINESS.phone,    href: BUSINESS.phoneLink    },
                    { icon: 'chat',     label: 'WhatsApp',      value: BUSINESS.whatsapp, href: BUSINESS.whatsappLink },
                    { icon: 'mail',     label: 'Email',         value: BUSINESS.email,    href: BUSINESS.emailLink    },
                  ].map(({ icon, label, value, href }) => (
                    <a key={label} href={href} className="flex items-start gap-4 group">
                      <Icon name={icon} size={22} className="text-secondary-fixed mt-0.5 shrink-0" />
                      <div>
                        <p className="font-label-bold text-xs text-surface-variant uppercase tracking-wider mb-1">{label}</p>
                        <p className="font-body-md text-body-md group-hover:text-secondary-fixed transition-colors">{value}</p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="border-t border-on-primary-fixed-variant pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="schedule" size={22} className="text-secondary-fixed mt-0.5 shrink-0" />
                    <div>
                      <p className="font-label-bold text-xs text-surface-variant uppercase tracking-wider mb-1">Business Hours</p>
                      <p className="font-body-md text-body-md">{BUSINESS.hours}</p>
                      <p className="font-body-sm text-body-sm text-surface-variant mt-1">{BUSINESS.hoursNote}</p>
                    </div>
                  </div>
                </div>
              </MagicCard>

              {/* Location Card */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="location_on" size={22} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-label-bold text-xs text-on-surface-variant uppercase tracking-wider mb-1">Headquarters</p>
                      <p className="font-body-md text-body-md text-primary">{BUSINESS.address}</p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-64 relative bg-surface-container-high">
                  <iframe
                    title="Siddhart LifeSpace Headquarters"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <p className="font-label-bold text-label-bold text-on-surface-variant mr-2">Connect:</p>
                {[
                  { icon: 'language',     href: BUSINESS.social.website,   label: 'Website'   },
                  { icon: 'photo_camera', href: BUSINESS.social.instagram, label: 'Instagram' },
                  { icon: 'work',         href: BUSINESS.social.linkedin,  label: 'LinkedIn'  },
                ].map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary hover:border-primary transition-all"
                  >
                    <Icon name={icon} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
