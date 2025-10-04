'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import FeatureSection from '@/components/FeatureSection'
import HorizontalScroll from '@/components/HorizontalScroll'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ProductGrid />
      <FeatureSection />
      <HorizontalScroll />
      <Newsletter />
      <Footer />
    </main>
  )
}
