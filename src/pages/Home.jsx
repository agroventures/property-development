import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
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
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') setShowPopup(false); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useSEO({
    title: "Home - Agro Ventures Property Development",
    url,
    image_alt: "Home",
    twitter_card: "summary_large_image",
  });

  return (
    <div className="min-h-screen">

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black-900/70 backdrop-blur-sm animate-fade-in" onClick={() => setShowPopup(false)}>
          <div className="relative max-w-lg w-full mx-4 rounded-3xl overflow-hidden shadow-gold-lg" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black-900/50 hover:bg-gold-500 text-white rounded-full transition-all duration-300"
            >
              <X size={20} />
            </button>
            <img src="/images/popup.jpeg" alt="Promotion" className="w-full h-auto" />
          </div>
        </div>
      )}
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
