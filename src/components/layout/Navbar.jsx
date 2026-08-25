import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Icon from '../ui/Icon'

const NAV_LINKS = [
  { label: 'Real Estate', to: '/real-estate' },
  { label: 'Car Leasing',  to: '/car-leasing'  },
  { label: 'About',        to: '/about'         },
  { label: 'Social',       to: '/community'     },
  { label: 'Contact',      to: '/contact'       },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const indicatorRef = useRef(null)

  const indicatorX = useMotionValue(0)
  const indicatorWidth = useMotionValue(0)

  const springX = useSpring(indicatorX, { stiffness: 500, damping: 30 })
  const springWidth = useSpring(indicatorWidth, { stiffness: 500, damping: 30 })

  /* Shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  /* Update indicator position on route change */
  useEffect(() => {
    const activeLink = document.querySelector('nav.md\\:flex a[href="' + location.pathname + '"]')
    if (activeLink && indicatorRef.current) {
      const rect = activeLink.getBoundingClientRect()
      const containerRect = indicatorRef.current.getBoundingClientRect()
      indicatorX.set(rect.left - containerRect.left)
      indicatorWidth.set(rect.width)
    }
  }, [location.pathname, indicatorX, indicatorWidth])

  return (
    <header
      className={`bg-surface-container-lowest border-b border-outline-variant w-full top-0 sticky z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}
    >
      <div className="section-container flex justify-between items-center h-20">
        {/* ── Logo ─────────────────────────────────────── */}
        <Link
          to="/"
          className="font-display-lg-mobile text-display-lg-mobile font-bold text-primary tracking-tight leading-none hover:opacity-80 transition-opacity"
          onClick={() => setMenuOpen(false)}
        >
          Siddhart LifeSpace
        </Link>

        {/* ── Desktop Navigation ───────────────────────── */}
        <nav className="hidden md:flex items-center h-full gap-8 relative" aria-label="Main navigation" ref={indicatorRef}>
          {/* Morphing active indicator */}
          <motion.div
            className="absolute bottom-0 h-1 bg-secondary rounded-full"
            style={{
              x: springX,
              width: springWidth,
              opacity: location.pathname === '/' ? 0 : 1,
            }}
          />
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `h-full flex items-center font-label-bold text-label-bold transition-colors duration-200 relative z-10 ${
                  isActive
                    ? 'text-secondary'
                    : 'text-on-surface-variant hover:text-secondary'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* ── Enquire Now CTA (desktop) ─────────────────── */}
        <button
          onClick={() => navigate('/contact')}
          className="hidden md:inline-flex items-center gap-2 bg-secondary text-on-secondary font-label-bold text-label-bold px-6 py-3 rounded-lg shadow-green-sm active:scale-90 hover:opacity-90 transition-all"
        >
          Enquire Now
        </button>

        {/* ── Hamburger (mobile) ────────────────────────── */}
        <button
          className="md:hidden p-2 rounded-lg text-primary hover:bg-surface-container transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={26} />
        </button>
      </div>

      {/* ── Mobile Dropdown ───────────────────────────── */}
      <motion.div
        className="md:hidden bg-surface-container-lowest border-t border-outline-variant"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="section-container py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `py-3 px-4 rounded-lg font-label-bold text-label-bold transition-colors ${
                  isActive
                    ? 'text-secondary bg-secondary/10'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                }`}
            >
              {label}
            </NavLink>
          ))}
          <button
            onClick={() => { setMenuOpen(false); navigate('/contact') }}
            className="mt-3 w-full bg-secondary text-on-secondary font-label-bold text-label-bold px-6 py-3 rounded-lg shadow-green-sm hover:opacity-90 transition-opacity"
          >
            Enquire Now
          </button>
        </div>
      </motion.div>
    </header>
  )
}