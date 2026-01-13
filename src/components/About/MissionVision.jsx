import { Check } from 'lucide-react';
import React from 'react'

const MissionVision = () => {
  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center space-x-2 text-primary-600 font-semibold">
            <span className="w-12 h-0.5 bg-primary-500"></span>
            <span>What Drives Us</span>
            <span className="w-12 h-0.5 bg-primary-500"></span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mt-4">
            Our Mission & Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="w-20 h-20 bg-linear-to-br from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center mb-8 shadow-gold group-hover:scale-110 transition-transform">
              <span className="text-4xl">🎯</span>
            </div>
            <h3 className="text-3xl font-bold text-primary-950 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              To provide an unparalleled real estate experience by delivering exceptional service, 
              expert guidance, and access to the world's most coveted properties. We are committed 
              to understanding our clients' unique needs and exceeding their expectations at every 
              step of their journey.
            </p>
            <ul className="space-y-3">
              {['Client-first approach', 'Transparency in all dealings', 'Excellence in execution'].map((item, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 text-primary-600">
                    <Check />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Vision */}
          <div className="bg-linear-to-br from-primary-950 to-primary-900 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="w-20 h-20 bg-linear-to-br from-primary-400 to-primary-500 rounded-3xl flex items-center justify-center mb-8 shadow-gold group-hover:scale-110 transition-transform">
              <span className="text-4xl">🔭</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              To be the global leader in luxury real estate, recognized for our innovative approach, 
              deep market expertise, and unwavering commitment to creating lasting relationships 
              with clients who trust us with their most significant investments.
            </p>
            <ul className="space-y-3">
              {['Global market leadership', 'Innovation in real estate', 'Sustainable growth practices'].map((item, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center mr-3 text-primary-400">
                    <Check />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};


export default MissionVision
