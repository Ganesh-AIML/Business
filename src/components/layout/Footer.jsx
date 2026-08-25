import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from '../ui/Icon'
import { BUSINESS } from '../../data/config'

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-on-primary-fixed-variant text-on-primary">
      <div className="section-container py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Brand column */}
          <motion.div
            className="md:col-span-4 flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <span className="font-headline-sm text-headline-sm text-on-primary font-bold">
              Siddhart LifeSpace
            </span>
            <p className="font-body-sm text-body-sm text-surface-variant max-w-xs leading-relaxed">
              Premium real estate brokerage and automotive leasing services in Goregaon East, Mumbai.
            </p>
          </motion.div>

          {/* Links column */}
          <motion.div
            className="md:col-span-8 flex flex-wrap gap-6 md:justify-end items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.1 }}
          >
            <Link
              to="/contact"
              className="font-body-sm text-body-sm text-surface-variant hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="font-body-sm text-body-sm text-surface-variant hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100"
            >
              Terms of Service
            </Link>

            {/* Trust badges */}
            <motion.div
              className="flex items-center gap-2 px-3 py-1 border border-on-primary-fixed-variant rounded"
              whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <Icon name="receipt_long" filled size={16} className="text-secondary-fixed" />
              <span className="font-label-bold text-label-bold text-on-primary">GST Verification</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 px-3 py-1 border border-on-primary-fixed-variant rounded bg-on-primary-fixed/30"
              whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <Icon name="shield" filled size={16} className="text-secondary-fixed" />
              <span className="font-label-bold text-label-bold text-on-primary">Govt Approved Status</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom copyright row */}
        <motion.div
          className="border-t border-on-primary-fixed-variant mt-10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="font-body-sm text-body-sm text-surface-variant text-center md:text-left opacity-70">
            © {BUSINESS.year} Siddhart LifeSpace Real Estate & Car Leasing. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
