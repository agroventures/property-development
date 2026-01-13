// components/Properties/PropertiesHero.jsx
import React from 'react'
import { Search, MapPin, Home, DollarSign } from 'lucide-react'

const PropertiesHero = () => {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center pt-20">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Properties"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-primary-950/50 via-primary-950/40 to-primary-950/30"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
                <div className="max-w-4xl flex flex-col items-center">
                    {/* Breadcrumb */}
                    <nav className="flex items-center space-x-2 text-sm mb-8">
                        <a href="/" className="text-gray-400 hover:text-primary-400 transition">Home</a>
                        <span className="text-gray-500">/</span>
                        <span className="text-primary-400">Properties</span>
                    </nav>

                    <span className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-full mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
                        <span className="text-primary-300 text-sm font-medium">500+ Properties Available</span>
                    </span>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                        Find Your
                        <span className="block mt-2 text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-primary-300">
                            Dream Property
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                        Explore our extensive collection of premium properties. From luxury apartments 
                        to spacious family homes, find the perfect place to call home.
                    </p>

                    {/* Quick Search Bar */}
                    <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {/* Location */}
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="w-full pl-10 pr-4 py-3 bg-white rounded-xl text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-primary-500 outline-none"
                                />
                            </div>

                            {/* Property Type */}
                            <div className="relative">
                                <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <select className="w-full pl-10 pr-4 py-3 bg-white rounded-xl text-gray-800 focus:ring-2 focus:ring-primary-500 outline-none appearance-none cursor-pointer">
                                    <option value="">Property Type</option>
                                    <option value="house">House</option>
                                    <option value="apartment">Apartment</option>
                                    <option value="villa">Villa</option>
                                    <option value="condo">Condo</option>
                                    <option value="land">Land</option>
                                </select>
                            </div>

                            {/* Price Range */}
                            <div className="relative">
                                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <select className="w-full pl-10 pr-4 py-3 bg-white rounded-xl text-gray-800 focus:ring-2 focus:ring-primary-500 outline-none appearance-none cursor-pointer">
                                    <option value="">Price Range</option>
                                    <option value="0-100000">$0 - $100,000</option>
                                    <option value="100000-300000">$100,000 - $300,000</option>
                                    <option value="300000-500000">$300,000 - $500,000</option>
                                    <option value="500000-1000000">$500,000 - $1,000,000</option>
                                    <option value="1000000+">$1,000,000+</option>
                                </select>
                            </div>

                            {/* Search Button */}
                            <button className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                                <Search className="w-5 h-5" />
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropertiesHero