'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Newsletter() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 })
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setStatus('success')
      setTimeout(() => {
        setEmail('')
        setStatus('idle')
      }, 3000)
    } else {
      setStatus('error')
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  }

  return (
    <section
      id="newsletter"
      ref={sectionRef}
      className="min-h-[60vh] flex items-center py-24 relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/20 via-white to-luxury-gold/10" />

      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Title */}
          <motion.div variants={itemVariants}>
            <div className="flex justify-center mb-6">
              <div className="gold-accent-line" />
            </div>
            <h2 className="text-fluid-h2 font-playfair font-bold text-rich-black mb-4">
              Join Our Elite Circle
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-fluid-body text-gray-600 mb-12"
          >
            Be the first to discover new collections, exclusive offers, and style
            inspiration delivered directly to your inbox.
          </motion.p>

          {/* Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full sm:flex-1 px-6 py-4 border-2 border-gray-300 focus:border-luxury-gold outline-none transition-colors duration-300 text-gray-800 placeholder-gray-400"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto luxury-button whitespace-nowrap"
            >
              Subscribe Now
            </motion.button>
          </motion.form>

          {/* Status Message */}
          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-luxury-gold font-semibold"
            >
              ✓ Thank you for subscribing!
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-red-500 font-semibold"
            >
              Please enter a valid email address
            </motion.p>
          )}

          {/* Privacy Note */}
          <motion.p
            variants={itemVariants}
            className="mt-8 text-sm text-gray-500"
          >
            We respect your privacy. Unsubscribe at any time.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
