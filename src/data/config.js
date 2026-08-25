// ─── Business Constants ────────────────────────────────────────────────────────
// Single source of truth for all business contact/identity details.
// Update these values when real data is confirmed.

export const BUSINESS = {
  name:        'Siddhart LifeSpace',
  tagline:     'Expert Property & Vehicle Solutions Tailored to Your Needs.',
  phone:       '+91 9819288352',
  phoneLink:   'tel:+919819288352',
  whatsapp:    '+91 9819288352',
  whatsappLink:'https://wa.me/919819288352',
  email:       'info@siddharthlifespace.com',
  emailLink:   'mailto:info@siddharthlifespace.com',
  address:     'Goregaon East, Mumbai',
  hours:       'Mon – Sat: 9:00 AM – 7:00 PM',
  hoursNote:   'Sunday viewings by appointment only.',
  year:        new Date().getFullYear(),
  social: {
    instagram: '#',
    linkedin:  '#',
    website:   '#',
  },
  stats: [
    { value: '500+', label: 'Properties Assisted' },
    { value: '100+', label: 'Vehicles Leased'     },
    { value: '10+',  label: 'Years Experience'    },
  ],
}
