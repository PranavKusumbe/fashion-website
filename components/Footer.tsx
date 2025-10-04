'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const isInView = useInView(footerRef, { once: true, amount: 0.2 })

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  }

  const socialLinks = [
    { name: 'Instagram', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'Pinterest', href: '#' },
    { name: 'Twitter', href: '#' },
  ]

  const shopLinks = [
    { name: 'New Arrivals', href: '#' },
    { name: 'Dresses', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'Sale', href: '#' },
  ]

  const infoLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Size Guide', href: '#' },
    { name: 'Shipping', href: '#' },
  ]

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="min-h-[40vh] bg-rich-black text-white pt-16 pb-8 border-t border-luxury-gold"
    >
      <motion.div
        variants={footerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="section-container"
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="relative w-32 h-12">
              <Image
                          src="/ASSETS/BRANDLOGO.png"
                          alt="Élégance"
                          fill
                          className="object-contain"
                          priority
               />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Defining luxury through timeless elegance and exceptional
              craftsmanship since 2024.
            </p>
          </motion.div>

          {/* Shop Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-playfair font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-luxury-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Information Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-playfair font-semibold text-lg mb-4">
              Information
            </h3>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-luxury-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-playfair font-semibold text-lg mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-luxury-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <p className="text-gray-400 text-sm">Email:</p>
              <a
                href="mailto:info@elegance.com"
                className="text-luxury-gold hover:text-white transition-colors duration-300 text-sm"
              >
                info@elegance.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Élégance. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-luxury-gold transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-luxury-gold transition-colors duration-300 text-sm"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
