import { Play } from 'lucide-react';
import React, { useState } from 'react'
import SectionTitle from '../common/SectionTitle';

const OurStory = () => {
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="py-24 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTitle title="Our Story" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              A Legacy of Excellence in
              <span className="text-primary-600"> Real Estate</span>
            </h2>

            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                Agroventures Property Development (Pvt) Ltd was born from the success and heritage of
                Agroventures Plantations (Pvt) Ltd, a leader in Sri Lanka’s agricultural and plantation sector.
                Our evolution into property development was a natural extension of our deep connection
                with the land - transforming fertile plantations into sustainable, high-value real estate
                opportunities
              </p>
              <p>
                We blend agricultural wisdom, modern engineering, and environmental foresight to create developments that are not just profitable but purposeful.
              </p>
            </div>
          </div>

          {/* Image/Video */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1453&q=80"
                alt="Luxury Property"
                className="w-full h-150 object-cover"
              />
              <div className="absolute inset-0 bg-primary-950/30"></div>

              {/* Play Button */}
              {/* <button
                onClick={() => setIsVideoPlaying(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
              >
                <span className="text-primary-600 ml-1">
                  <Play />
                </span>
              </button> */}
            </div>

            {/* Floating Stats Card */}
            {/* <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-linear-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">15+</span>
                </div>
                <div>
                  <p className="text-primary-950 font-bold text-lg">Years of Excellence</p>
                  <p className="text-gray-500">Serving premium clients</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};


export default OurStory
