'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current || !imageRef.current) return

    // Parallax effect on hero background
    gsap.to(imageRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const headlineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  }

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div ref={imageRef} className="absolute inset-0 w-full h-[120%]">
        <Image
          src="/ASSETS/HERO_IMAGE.png"
          alt="Luxury Fashion"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="section-container text-center">
          <motion.div
            variants={headlineVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Headline */}
            <div className="overflow-hidden">
              <motion.h1
                variants={wordVariants}
                className="text-fluid-h1 font-playfair font-bold text-white mb-4"
              >
                Timeless Elegance
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.h2
                variants={wordVariants}
                className="text-fluid-h2 font-playfair font-semibold text-white/90"
              >
                Redefined
              </motion.h2>
            </div>

            {/* Subtext */}
            <motion.p
              variants={wordVariants}
              className="text-fluid-body text-white/80 max-w-2xl mx-auto mt-6"
            >
              Discover our curated collection of premium fashion pieces that embody
              sophistication and grace
            </motion.p>

            {/* Gold Accent Line */}
            <motion.div
              variants={wordVariants}
              className="flex justify-center mt-8"
            >
              <div className="gold-accent-line" />
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={wordVariants}
              className="mt-12"
            >
              <a
                href="#collections"
                className="luxury-button inline-block"
              >
                Explore Collection
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center space-y-2"
            >
              <span className="text-white text-sm tracking-widest">SCROLL</span>
              <div className="w-0.5 h-12 bg-white/50" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
