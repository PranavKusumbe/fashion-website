'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const lookbookImages = [
  '/ASSETS/SCROLLBACK1.png',
  '/ASSETS/SCROLLBACK2.png',
  '/ASSETS/SCROLLBACK3.png',
  '/ASSETS/DRESS.png',
  '/ASSETS/HANDBAG.png',
  '/ASSETS/SHOES.png',
]

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !scrollContainerRef.current) return

    // Only apply horizontal scroll on desktop
    const mm = gsap.matchMedia()

    mm.add('(min-width: 1024px)', () => {
      const scrollContainer = scrollContainerRef.current
      if (!scrollContainer) return

      const scrollWidth = scrollContainer.scrollWidth - window.innerWidth

      gsap.to(scrollContainer, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-rich-black overflow-hidden"
    >
      {/* Section Title - Fixed */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10 text-center">
        <h2 className="text-fluid-h2 font-playfair font-bold text-white mb-4">
          Lookbook
        </h2>
        <div className="flex justify-center">
          <div className="h-0.5 w-16 bg-luxury-gold" />
        </div>
      </div>

      {/* Horizontal Scroll Container - Desktop */}
      <div className="hidden lg:flex h-screen items-center">
        <div
          ref={scrollContainerRef}
          className="flex gap-8 px-12 will-change-transform"
        >
          {lookbookImages.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[60vw] h-[70vh] overflow-hidden"
            >
              <Image
                src={image}
                alt={`Lookbook ${index + 1}`}
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm tracking-widest mb-2">COLLECTION {index + 1}</p>
                <h3 className="text-2xl font-playfair font-semibold">
                  Season Essentials
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Carousel - Vertical Scroll */}
      <div className="lg:hidden py-24 px-6">
        <div className="space-y-8 mt-16">
          {lookbookImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full aspect-[3/4] overflow-hidden"
            >
              <Image
                src={image}
                alt={`Lookbook ${index + 1}`}
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xs tracking-widest mb-1">COLLECTION {index + 1}</p>
                <h3 className="text-xl font-playfair font-semibold">
                  Season Essentials
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator - Desktop Only */}
      <div className="hidden lg:block absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-4 text-white">
          <div className="w-12 h-0.5 bg-luxury-gold" />
          <span className="text-sm tracking-widest">SCROLL</span>
          <div className="w-12 h-0.5 bg-luxury-gold" />
        </div>
      </div>
    </section>
  )
}
