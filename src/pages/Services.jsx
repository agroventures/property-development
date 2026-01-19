import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

import ServicesList from '../components/Services/ServicesList'
import ServiceProcess from '../components/Services/ServiceProcess'
import ServicesCTA from '../components/Services/ServicesCTA'
import ServiceApproaches from '../components/Services/ServiceApproaches'
import ServicesSummary from '../components/Services/ServicesSummary'
import useSEO from '../hooks/useSEO'
import ServicesHero from '../components/Services/ServicesHero'

function Services() {
  const url = window.location.href;

  useSEO({
    title: "Services - Agro Ventures Property Development",
    url,
    image_alt: "Services",
    twitter_card: "summary_large_image",
  });

  return (
    <div className="min-h-screen">
      <Header />
      <ServicesHero />
      <ServicesList />
      <ServiceApproaches />
      <ServiceProcess />
      <ServicesSummary />
      <ServicesCTA />
      <Footer />
    </div>
  )
}

export default Services