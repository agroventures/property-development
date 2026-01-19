import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PropertiesHero from '../components/Properties/PropertiesHero'
import PropertyGrid from '../components/Properties/PropertyGrid'
import useSEO from '../hooks/useSEO'

function Properties() {
  const url = window.location.href;

  useSEO({
    title: "Properties - Agro Ventures Property Development",
    url,
    image_alt: "Properties",
    twitter_card: "summary_large_image",
  });

  return (
    <div className="min-h-screen">
      <Header />
      <PropertiesHero />
      <PropertyGrid />
      <Footer />
    </div>
  )
}

export default Properties