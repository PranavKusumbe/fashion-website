'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

interface Feature {
  title: string
  description: string
  image: string
  reverse?: boolean
}

const features: Feature[] = [
  {
    title: 'Crafted Excellence',
    description:
      'Each piece in our collection is meticulously crafted with attention to every detail. We partner with master artisans who bring decades of expertise to create garments that stand the test of time.',
    image: '/ASSETS/FEATURE1.png',
    reverse: false,
  },
  {
    title: 'Timeless Design',
    description:
      'Our designs transcend fleeting trends, offering you pieces that remain elegant and relevant season after season. Invest in fashion that celebrates your unique style and sophistication.',
    image: '/ASSETS/FEATURE2.png',
    reverse: true,
  },
]

export default function FeatureSection() {
  return (
    <div className="bg-light-gray">
      {features.map((feature, index) => (
        <FeatureBlock key={index} feature={feature} index={index} />
      ))}
    </div>
  )
}

function FeatureBlock({ feature, index }: { feature: Feature; index: number }) {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current || !textRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    })

    // Parallax effect for image
    tl.fromTo(
      imageRef.current,
      { y: 50 },
      { y: -50, ease: 'none' }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const textVariants = {
    hidden: { opacity: 0, x: feature.reverse ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: feature.reverse ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  }

  return (
    <section
      ref={sectionRef}
      className={`min-h-[90vh] flex items-center py-16 lg:py-24 ${
        index % 2 === 0 ? 'bg-white' : 'bg-light-gray'
      }`}
    >
      <div className="section-container">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            feature.reverse ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Image */}
          <motion.div
            ref={imageRef}
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={`relative aspect-[4/5] overflow-hidden ${
              feature.reverse ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            ref={textRef}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={`space-y-6 ${
              feature.reverse ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            <div className="gold-accent-line" />
            <h2 className="text-fluid-h2 font-playfair font-bold text-rich-black">
              {feature.title}
            </h2>
            <p className="text-fluid-body text-gray-600 leading-relaxed">
              {feature.description}
            </p>
            <motion.a
              href="#shop"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="inline-block luxury-button-outline mt-6"
            >
              Discover More
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
