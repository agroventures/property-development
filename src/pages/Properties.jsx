import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PropertiesHero from '../components/Properties/PropertiesHero'
import PropertyGrid from '../components/Properties/PropertyGrid'

function Properties() {
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