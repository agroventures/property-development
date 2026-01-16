import { Check } from 'lucide-react';
import React from 'react'
import SectionTitle from '../common/SectionTitle';
import { mission, vision } from '../../data/content';

const MissionVision = () => {
  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTitle title="What Drives Us" />
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-4">
            Our Mission & Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="w-20 h-20 bg-linear-to-br from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center mb-8 shadow-gold group-hover:scale-110 transition-transform">
              <span className="text-4xl">🎯</span>
            </div>
            <h3 className="text-3xl font-bold text-gold-500 mb-4">Our Mission</h3>
            <p className="text-text-primary text-lg leading-relaxed mb-6">
              To deliver dependable and innovative real estate solutions by providing expert land sales,
              quality residential construction, and sustainable eco-tourism developments. We are
              dedicated to building lasting relationships through integrity, excellence, and a deep
              responsibility to the environment and communities we serve.
            </p>
            <ul className="space-y-3">
              {mission.map((item, index) => (
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
            <h3 className="text-3xl font-bold text-gold-500 mb-4">Our Vision</h3>
            <p className="text-text-primary text-lg leading-relaxed mb-6">
              To be the leading and most reliable real estate service provider in Sri Lanka — driven by
              integrity, innovation, and a strong commitment to sustainable development across land
              sales, residential construction, and eco-tourism projects by 2030.
            </p>
            <ul className="space-y-3">
              {vision.map((item, index) => (
                <li key={index} className="flex items-center text-gray-600">
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
