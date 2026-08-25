// ─── Testimonials Data ────────────────────────────────────────────────────────
// PLACEHOLDER DATA — these are fictional testimonials for design purposes only.
// Must be replaced with real client testimonials before any public launch.
import avatarJames from '@/assets/avatar-james.jpg'
import avatarSarah from '@/assets/avatar-sarah.jpg'
import avatarDavid from '@/assets/avatar-david.jpg'
import avatarMarcus from '@/assets/avatar-marcus.jpg'

export const testimonials = [
  {
    id: 1,
    name: 'James R.',
    service: 'Commercial Acquisition',
    stars: 5,
    quote: '"Securing our new corporate headquarters was incredibly streamlined. The negotiations were handled with absolute precision. Their authority in the commercial real estate space is unmatched."',
    initials: 'JR',
    image: avatarJames,
    featured: false,
  },
  {
    id: 2,
    name: 'Sarah M.',
    service: 'Corporate Car Leasing',
    stars: 5,
    quote: '"We transitioned our entire executive fleet to this leasing program. The level of service is impeccable, and the transparent pricing structure gave our finance board complete peace of mind. A truly premium partnership."',
    initials: 'SM',
    image: avatarSarah,
    featured: true,
  },
  {
    id: 3,
    name: 'David K.',
    service: 'Residential Rental',
    stars: 4,
    quote: '"Found the perfect luxury apartment for my relocation. The agent was punctual, knowledgeable, and respected my time constraints."',
    initials: 'DK',
    image: avatarDavid,
    featured: false,
  },
  {
    id: 4,
    name: 'Elena W.',
    service: 'Fleet Services',
    stars: 5,
    quote: '"The employee transport service has significantly reduced our logistical overhead. Dependable daily operations, every single day."',
    initials: 'EW',
    image: null,
    featured: false,
  },
  {
    id: 5,
    name: 'Marcus T.',
    service: 'Short-Term Car Rental',
    stars: 5,
    quote: '"Rented a premium SUV for a month-long business trip. Pristine vehicle condition and zero administrative hassle."',
    initials: 'MT',
    image: avatarMarcus,
    featured: false,
  },
]
