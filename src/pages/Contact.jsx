import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import ContactHero from '../components/Contact/ContactHero'
import ContactSection from '../components/Contact/ContactSection'
import ContactMap from '../components/Contact/ContactMap'
import useSEO from '../hooks/useSEO'

function Contact() {
  const url = window.location.href;

  useSEO({
    title: "Contact - Agro Ventures Property Development",
    url,
    image_alt: "Contact",
    twitter_card: "summary_large_image",
  });

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