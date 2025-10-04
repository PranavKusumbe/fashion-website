'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  price: string
  image: string
}

const products: Product[] = [
  { id: 1, name: 'Elegant Dress', price: '$299', image: '/ASSETS/DRESS1.png' },
  { id: 2, name: 'Designer Handbag', price: '$599', image: '/ASSETS/HANDBAG1.png' },
  { id: 3, name: 'Premium Shoes', price: '$399', image: '/ASSETS/SHOES1.jpeg' },
  { id: 4, name: 'Couture Dress', price: '$449', image: '/ASSETS/DRESS.png' },
  { id: 5, name: 'Luxury Handbag', price: '$699', image: '/ASSETS/HANDBAG.png' },
  { id: 6, name: 'Fashion Shoes', price: '$349', image: '/ASSETS/SHOES.png' },
]

export default function ProductGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  }

  return (
    <section
      id="collections"
      ref={sectionRef}
      className="min-h-[90vh] py-24 lg:py-32 bg-white"
    >
      <div className="section-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-fluid-h2 font-playfair font-bold text-rich-black mb-4">
            Featured Collection
          </h2>
          <div className="flex justify-center mb-6">
            <div className="gold-accent-line" />
          </div>
          <p className="text-fluid-body text-gray-600 max-w-2xl mx-auto">
            Handpicked pieces that define contemporary luxury and timeless style
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[3/4] bg-light-gray mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-[800ms] ease-in-out group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-rich-black/0 group-hover:bg-rich-black/40 transition-all duration-[800ms] ease-in-out flex items-center justify-center">
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    className="luxury-button opacity-0 group-hover:opacity-100 transition-opacity duration-[800ms]"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
              {/* Product Info */}
              <div className="text-center">
                <h3 className="font-playfair font-semibold text-xl text-rich-black mb-2">
                  {product.name}
                </h3>
                <p className="text-luxury-gold font-inter font-semibold tracking-wide">
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <a href="#shop" className="luxury-button-outline">
            View All Products
          </a>
        </motion.div>
      </div>
    </section>
  )
}
