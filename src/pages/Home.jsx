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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="relative max-w-md md:max-w-lg w-full rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-amber-500 text-white rounded-full transition-all duration-300"
              aria-label="Close popup"
            >
              <X size={20} />
            </button>

            {/* Image Container */}
            <div className="w-full h-full overflow-y-auto pointer-events-auto">
              <img
                src="/images/popup.jpeg"
                alt="Promotion"
                className="w-full h-auto object-contain max-h-[80vh] mx-auto"
              />
            </div>
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
