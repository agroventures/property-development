import React from 'react'

const AboutHero = () => {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center pt-20">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Modern Architecture"
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
                        <a href="#" className="text-gray-400 hover:text-primary-400 transition">Home</a>
                        <span className="text-gray-500">/</span>
                        <span className="text-primary-400">About Us</span>
                    </nav>

                    <span className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-full mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
                        <span className="text-primary-300 text-sm font-medium">Established Since 2008</span>
                    </span>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                        Redefining
                        <span className="block mt-2 text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-primary-300">
                            Luxury Living
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                        For over 15 years, Elite Estates has been the trusted name in premium real estate,
                        connecting discerning clients with exceptional properties worldwide.
                    </p>
                </div>
            </div>
        </section>
    );
};


export default AboutHero
