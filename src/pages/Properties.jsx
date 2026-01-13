import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PropertiesHero from '../components/Properties/PropertiesHero'
import PropertyFilters from '../components/Properties/PropertyFilters'
import PropertyGrid from '../components/Properties/PropertyGrid'

function Properties() {
  return (
    <div className="min-h-screen">
      <Header />
      <PropertiesHero />
      <PropertyFilters />
      <PropertyGrid />
      <Footer />
    </div>
  )
}

export default Properties