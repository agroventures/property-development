import { Play } from 'lucide-react';
import React, { useState } from 'react'

const OurStory = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-flex items-center space-x-2 text-primary-600 font-semibold mb-4">
              <span className="w-12 h-0.5 bg-primary-500"></span>
              <span>Our Story</span>
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-6">
              A Legacy of Excellence in
              <span className="text-primary-600"> Real Estate</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded in 2008, Elite Estates began with a simple vision: to transform the 
                luxury real estate experience by combining unparalleled expertise with 
                personalized service.
              </p>
              <p>
                What started as a boutique agency in Beverly Hills has grown into an 
                internationally recognized brand, serving clients across major metropolitan 
                areas and exclusive destinations worldwide.
              </p>
              <p>
                Our success is built on a foundation of trust, integrity, and an unwavering 
                commitment to exceeding our clients' expectations. Every property we represent, 
                every transaction we facilitate, reflects our dedication to excellence.
              </p>
            </div>

            {/* Founder Quote */}
            <div className="mt-10 p-6 bg-primary-50 rounded-2xl border-l-4 border-primary-500">
              <p className="text-primary-950 italic text-lg mb-4">
                "We don't just sell properties; we help people find their place in the world. 
                Every home has a story, and we're honored to be part of our clients' journeys."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                  alt="Founder"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-200"
                />
                <div className="ml-4">
                  <p className="font-bold text-primary-950">Jonathan Sterling</p>
                  <p className="text-primary-600 text-sm">Founder & CEO</p>
                </div>
              </div>
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
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
              >
                <span className="text-primary-600 ml-1">
                  <Play />
                </span>
              </button>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-linear-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">15+</span>
                </div>
                <div>
                  <p className="text-primary-950 font-bold text-lg">Years of Excellence</p>
                  <p className="text-gray-500">Serving premium clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default OurStory
