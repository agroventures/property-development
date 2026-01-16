import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import HomeHero from '../components/Home/HomeHero'
import FeaturedProperties from '../components/Home/FeaturedProperties'
import CTA from '../components/common/CTA'
import OurEssence from '../components/Home/OurEssence'
import HomeAbout from '../components/Home/HomeAbout'
import DefineUs from '../components/Home/DefineUs'
import WhyChooseUs from '../components/common/WhyChooseUs'
import OurPromise from '../components/Home/OurPromise'

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HomeHero />
      <HomeAbout />
      <OurEssence />
      <DefineUs />
      <FeaturedProperties />
      <WhyChooseUs />
      <OurPromise />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home
