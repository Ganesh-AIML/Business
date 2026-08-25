import Icon from '../ui/Icon'
import { BUSINESS } from '../../data/config'
import { NumberTicker } from '../ui/number-ticker'

function parseStatValue(value) {
  const match = value.match(/^(\d+)(.*)$/)
  if (!match) return { num: 0, suffix: value }
  return { num: parseInt(match[1], 10), suffix: match[2] }
}

/** Home page trust bar — credentials + statistics */
export default function TrustBar() {
  return (
    <section className="bg-surface-container border-y border-outline-variant">
      <div className="section-container py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: trust credentials */}
        <div className="flex items-center gap-2">
          <Icon name="verified" filled size={20} className="text-secondary" />
          <span className="font-label-bold text-label-bold text-on-surface-variant">
            Government Approved | GST Registered
          </span>
        </div>
        {/* Right: statistics */}
        <div className="flex items-center gap-8 md:gap-12">
          {BUSINESS.stats.map((stat) => {
            const { num, suffix } = parseStatValue(stat.value)
            return (
              <div key={stat.label} className="text-center">
                <p className="font-headline-md text-headline-md text-primary leading-none mb-1">
                  <NumberTicker value={num} />
                  {suffix}
                </p>
                <p className="font-label-bold text-xs text-on-surface-variant uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
