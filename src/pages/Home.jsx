import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import HomeHero from '../components/Home/HomeHero'
import FeaturedProperties from '../components/Home/FeaturedProperties'
import PropertyCategories from '../components/Home/PropertyCategories'
import Testimonials from '../components/Home/Testimonials'
import Newsletter from '../components/Home/Newsletter'
import HomeCTA from '../components/Home/HomeCTA'

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HomeHero />
      <FeaturedProperties />
      <PropertyCategories />
      <Testimonials />
      <HomeCTA />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
