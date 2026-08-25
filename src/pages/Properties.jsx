import { useState, useMemo, useEffect } from 'react'
import PropertyCard from '../components/cards/PropertyCard'
import Icon from '../components/ui/Icon'
import { properties } from '../data/properties'
import { TextReveal, StaggerContainer, StaggerItem, AnimatedCountUp } from '../components/animations'

const ITEMS_PER_PAGE = 6
const STEP = 3

const PROPERTY_TYPES = ['All Types', 'Flat', 'Villa', 'Shop', 'Office']

export default function Properties() {
  useEffect(() => {
    document.title = 'Available Properties — Siddhart LifeSpace'
  }, [])

  const [intent,   setIntent]   = useState('buy')
  const [location, setLocation] = useState('')
  const [propType, setPropType] = useState('All Types')
  const [applied,  setApplied]  = useState({ intent: 'buy', location: '', propType: 'All Types' })
  const [count,    setCount]    = useState(ITEMS_PER_PAGE)

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const intentMatch =
        applied.intent === 'buy'
          ? p.status === 'For Sale'
          : p.status === 'For Rent' || p.status === 'For Lease'
      const typeMatch = applied.propType === 'All Types' || p.type === applied.propType
      const locMatch  = !applied.location || p.location.toLowerCase().includes(applied.location.toLowerCase())
      return intentMatch && typeMatch && locMatch
    })
  }, [applied])

  const displayed = filtered.slice(0, count)

  const handleSearch = () => {
    setApplied({ intent, location, propType })
    setCount(ITEMS_PER_PAGE)
  }

  return (
    <>
      {/* ── Header & Filter ───────────────────────────────────────── */}
      <section className="py-section-gap border-b border-outline-variant">
        <div className="section-container">
          <TextReveal as="h1" split="words" stagger={0.05} delay={0.1} className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8">
            Premium Properties in Prime Locations.
          </TextReveal>

          {/* Filter card */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
            <div className="flex flex-col md:flex-row items-stretch md:items-end gap-4">
              {/* Intent toggle */}
              <div className="flex flex-col gap-2">
                <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Intent</label>
                <div className="flex p-1 bg-surface-container-highest rounded-lg w-fit">
                  {['buy', 'rent'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setIntent(opt)}
                      className={`px-5 py-2 rounded font-label-bold text-label-bold capitalize transition-all ${
                        intent === opt
                          ? 'bg-surface-container-lowest text-primary shadow-sm'
                          : 'text-on-surface-variant hover:text-primary'
                      }`}
                    >
                      {opt === 'buy' ? 'Buy' : 'Rent'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="flex flex-col gap-2 flex-1">
                <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Location</label>
                <div className="relative">
                  <Icon name="location_on" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    placeholder="City, Area or Locality"
                    className="w-full pl-9 pr-4 py-3 bg-surface-bright border border-outline-variant rounded-lg font-body-md text-body-md text-primary placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              {/* Property Type */}
              <div className="flex flex-col gap-2">
                <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Property Type</label>
                <div className="relative">
                  <select
                    value={propType}
                    onChange={(e) => setPropType(e.target.value)}
                    className="appearance-none w-full pr-8 pl-4 py-3 bg-surface-bright border border-outline-variant rounded-lg font-body-md text-body-md text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer"
                  >
                    {PROPERTY_TYPES.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                  <Icon name="expand_more" size={18} className="absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
                </div>
              </div>

              {/* Search button */}
              <button
                onClick={handleSearch}
                className="flex items-center justify-center gap-2 bg-primary text-on-primary font-label-bold text-label-bold px-6 py-3 rounded-lg hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                <Icon name="search" size={18} />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Property Grid ─────────────────────────────────────────── */}
      <section className="py-section-gap">
        <div className="section-container">
          <div className="flex items-center justify-between mb-8">
            <TextReveal as="h2" split="words" stagger={0.05} className="font-headline-sm text-headline-sm text-primary">
              Curated Listings
            </TextReveal>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Showing <AnimatedCountUp end={Math.min(count, filtered.length)} className="font-bold" /> of <AnimatedCountUp end={filtered.length} className="font-bold" /> results
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Icon name="search_off" size={48} className="text-outline-variant mx-auto mb-4" />
              <p className="font-body-lg text-body-lg text-on-surface-variant">No properties match your search.</p>
              <button onClick={() => { setApplied({ intent: 'buy', location: '', propType: 'All Types' }); setIntent('buy'); setLocation(''); setPropType('All Types') }} className="mt-4 font-label-bold text-label-bold text-secondary hover:underline">
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <StaggerContainer stagger={0.07} direction="up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                {displayed.map((p) => (
                  <StaggerItem key={p.id}>
                    <PropertyCard property={p} layoutId={`property-${p.id}`} />
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {count < filtered.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setCount((c) => c + STEP)}
                    className="bg-transparent border-2 border-primary text-primary font-label-bold text-label-bold px-8 py-3 rounded-lg hover:bg-surface-container transition-colors"
                  >
                    Load More Properties
                  </button>
                </div>
              )}

              {count >= filtered.length && filtered.length > 0 && (
                <div className="text-center mt-12">
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">
                    Can't find what you're looking for?
                  </p>
                  <a
                    href="/contact"
                    className="font-label-bold text-label-bold text-secondary hover:underline"
                  >
                    Contact us for the latest listings →
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}
