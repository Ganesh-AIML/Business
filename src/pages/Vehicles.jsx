import { useState, useMemo, useEffect } from 'react'
import VehicleCard from '../components/cards/VehicleCard'
import Icon from '../components/ui/Icon'
import { vehicles } from '../data/vehicles'
import { TextReveal, StaggerContainer, StaggerItem } from '../components/animations'

const RENTAL_TYPES = ['All Types', 'Daily/Lease', 'Corporate Lease', 'Personal Rental']
const CATEGORIES   = ['All Categories', 'Luxury Sedan', 'Premium SUV', 'Executive MPV']
const SEATINGS     = ['Any Capacity', '4-5 Seater', '7+ Seater']

function SelectField({ label, value, onChange, options }) {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none w-full pl-4 pr-8 py-3 bg-surface-bright border border-outline-variant rounded-lg font-body-md text-body-md text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer"
        >
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
        <Icon name="expand_more" size={18} className="absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
      </div>
    </div>
  )
}

export default function Vehicles() {
  useEffect(() => {
    document.title = 'Available Fleet — Siddhart LifeSpace'
  }, [])

  const [rentalType, setRentalType] = useState('All Types')
  const [category,   setCategory]   = useState('All Categories')
  const [seating,    setSeating]    = useState('Any Capacity')
  const [applied,    setApplied]    = useState({ rentalType: 'All Types', category: 'All Categories', seating: 'Any Capacity' })

  const filtered = useMemo(() => {
    return vehicles.filter((v) => {
      const typeMatch    = applied.rentalType === 'All Types' || v.type === applied.rentalType
      const catMatch     = applied.category === 'All Categories' || v.category === applied.category
      const seatMatch    =
        applied.seating === 'Any Capacity'
          ? true
          : applied.seating === '7+ Seater'
          ? v.seating >= 7
          : v.seating <= 5
      return typeMatch && catMatch && seatMatch
    })
  }, [applied])

  const applyFilters = () => setApplied({ rentalType, category, seating })

  return (
    <>
      {/* ── Header ────────────────────────────────────────────────── */}
      <section className="py-section-gap border-b border-outline-variant">
        <div className="section-container">
          <TextReveal as="h1" split="words" stagger={0.05} delay={0.1} className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">
            Premium Fleet for Corporate & Personal Use.
          </TextReveal>
          <TextReveal as="p" split="words" stagger={0.03} delay={0.2} className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl">
            Explore our curated selection of luxury vehicles, available for flexible leasing or daily rental. Engineered for comfort and commanding presence.
          </TextReveal>

          {/* Filter bar */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
            <div className="flex flex-col md:flex-row items-stretch md:items-end gap-4">
              <SelectField label="Rental Type"       value={rentalType} onChange={setRentalType} options={RENTAL_TYPES} />
              <SelectField label="Vehicle Category"  value={category}   onChange={setCategory}   options={CATEGORIES}   />
              <SelectField label="Seating Capacity"  value={seating}    onChange={setSeating}    options={SEATINGS}     />
              <div className="flex flex-col justify-end">
                <button
                  onClick={applyFilters}
                  className="bg-primary text-on-primary font-label-bold text-label-bold px-6 py-3 rounded-lg hover:opacity-80 transition-opacity whitespace-nowrap"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vehicle Grid ──────────────────────────────────────────── */}
      <section className="py-section-gap">
        <div className="section-container">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Icon name="directions_car" size={48} className="text-outline-variant mx-auto mb-4" />
              <p className="font-body-lg text-body-lg text-on-surface-variant">No vehicles match your filters.</p>
              <button onClick={() => { setApplied({ rentalType: 'All Types', category: 'All Categories', seating: 'Any Capacity' }); setRentalType('All Types'); setCategory('All Categories'); setSeating('Any Capacity') }} className="mt-4 font-label-bold text-label-bold text-secondary hover:underline">
                Clear filters
              </button>
            </div>
          ) : (
            <StaggerContainer stagger={0.07} direction="up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {filtered.map((v) => (
                <StaggerItem key={v.id}>
                  <VehicleCard vehicle={v} layoutId={`vehicle-${v.id}`} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>
    </>
  )
}
