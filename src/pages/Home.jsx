import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Hero from '../components/Home/Hero'
import FeaturedProperties from '../components/Home/FeaturedProperties'
import PropertyCategories from '../components/Home/PropertyCategories'
import Testimonials from '../components/Home/Testimonials'
import CTA from '../components/Home/CTA'
import Features from '../components/Home/Features'

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProperties />
      <PropertyCategories />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home
