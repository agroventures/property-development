import { LocateIcon, Search } from 'lucide-react';
import React, { useState } from 'react'

const Hero = () => {
  const [activeTab, setActiveTab] = useState('buy');

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
          alt="Luxury Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            #1 Real Estate Platform
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Find Your Dream
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              Home Today
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-xl">
            Discover thousands of properties that match your lifestyle. From cozy apartments to luxury estates, your perfect home awaits.
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-2xl p-2 shadow-2xl max-w-2xl">
            {/* Tabs */}
            <div className="flex space-x-2 mb-4 p-2">
              {['buy', 'rent', 'sell'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-lg font-medium capitalize transition ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Fields */}
            <div className="flex flex-col md:flex-row gap-4 p-2">
              <div className="flex-1 relative">
                <LocateIcon />
                <input
                  type="text"
                  placeholder="City, neighborhood, or address"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <LocateIcon />
                </span>
              </div>
              <select className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-600">
                <option>Property Type</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Condo</option>
                <option>Villa</option>
              </select>
              <select className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-600">
                <option>Price Range</option>
                <option>$100k - $300k</option>
                <option>$300k - $500k</option>
                <option>$500k - $1M</option>
                <option>$1M+</option>
              </select>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition flex items-center justify-center space-x-2">
                <Search />
                <span>Search</span>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12">
            {[
              { value: '200+', label: 'Cities' },
              { value: '10K+', label: 'Properties' },
              { value: '15K+', label: 'Happy Clients' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero
