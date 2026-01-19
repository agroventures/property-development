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
import useSEO from '../hooks/useSEO'

function Home() {
  const url = window.location.href;

  useSEO({
    title: "Home - Agro Ventures Property Development",
    url,
    image_alt: "Home",
    twitter_card: "summary_large_image",
  });

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
