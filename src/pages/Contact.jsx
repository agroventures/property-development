import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import ContactHero from '../components/Contact/ContactHero'
import ContactSection from '../components/Contact/ContactSection'
import ContactMap from '../components/Contact/ContactMap'

function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      <ContactHero />
      <ContactSection />
      <ContactMap />
      <Footer />
    </div>
  )
}

export default Contact