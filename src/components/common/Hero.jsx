import { LocateIcon, Search } from 'lucide-react';
import React, { useState } from 'react'
import { stats } from '../../data/content';


const Hero = ({ page, pageTitle, img, imgAlt, badgeText, title, highlightedText, description }) => {
    const [activeTab, setActiveTab] = useState('buy');

    return (
        <section className="relative min-h-screen flex items-center justify-center">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src={img}
                    alt={imgAlt}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-primary-950/50 via-primary-950/40 to-primary-950/30"></div>
                <div className="absolute top-20 right-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center">
                <div className="max-w-4xl flex flex-col items-center">
                    {/* Breadcrumb */}
                    {
                        page !== 'home' && (
                            <nav className="flex items-center space-x-2 text-sm mb-8">
                                <a href="#" className="text-gray-400 hover:text-primary-400 transition">Home</a>
                                <span className="text-gray-500">/</span>
                                <span className="text-primary-400">{pageTitle}</span>
                            </nav>
                        )
                    }

                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-full mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
                        <span className="text-primary-300 text-sm font-medium">{badgeText}</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                        {title}
                        <span className="block mt-2 text-gradient">
                            {highlightedText}
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                        {description}
                    </p>

                    {/* Search Box */}
                    {
                        page === 'home' && (
                            <div className="bg-white rounded-3xl p-3 shadow-2xl w-full max-w-2xl text-left">
                                {/* Tabs */}
                                <div className="flex space-x-1 mb-4 p-1 bg-gray-100 rounded-2xl">
                                    {['buy', 'rent', 'sell'].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`flex-1 px-6 py-3 rounded-xl font-medium capitalize transition-all duration-300 ${activeTab === tab
                                                ? 'bg-primary-500 text-white shadow-gold'
                                                : 'text-gray-600 hover:text-primary-600'
                                                }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>

                                {/* Search Fields */}
                                <div className="flex flex-col lg:flex-row gap-3 p-2">
                                    <div className="flex-1 relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                            <LocateIcon size={20} />
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="City, neighborhood, or address"
                                            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                                        />
                                    </div>
                                    <select className="px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-gray-600 cursor-pointer">
                                        <option>Property Type</option>
                                        <option>House</option>
                                        <option>Apartment</option>
                                    </select>
                                    <button className="bg-linear-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                                        <Search size={20} />
                                        <span>Search</span>
                                    </button>
                                </div>
                            </div>
                        )
                    }

                    {/* Stats */}
                    {
                        page === 'home' && (
                            <div className="flex flex-wrap justify-center gap-12 mt-16 w-full">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-4xl font-bold text-gradient">{stat.value}</div>
                                        <div className="text-gray-400 mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        )
                    }
                </div>
            </div>

            {/* Scroll Indicator */}
            {
                page === 'home' && (
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                        <div className="w-8 h-12 border-2 border-primary-400/50 rounded-full flex justify-center pt-2">
                            <div className="w-2 h-3 bg-primary-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                )
            }
        </section>
    );
};

export default Hero;