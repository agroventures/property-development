import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import ServicesHero from '../components/Services/ServicesHero'
import ServicesList from '../components/Services/ServicesList'
import ServiceProcess from '../components/Services/ServiceProcess'
import WhyChooseUs from '../components/common/WhyChooseUs'
import FAQ from '../components/Services/FAQ'
import ServicesCTA from '../components/Services/ServicesCTA'

function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      <ServicesHero />
      <ServicesList />
      <ServiceProcess />
      <WhyChooseUs />
      <FAQ />
      <ServicesCTA />
      <Footer />
    </div>
  )
}

export default Services