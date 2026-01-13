// components/Contact/ContactHero.jsx
import React from 'react'

const ContactHero = () => {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center pt-20">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Contact Us"
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
                        <span className="text-primary-400">Contact Us</span>
                    </nav>

                    <span className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-full mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
                        <span className="text-primary-300 text-sm font-medium">We're Here to Help</span>
                    </span>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                        Get In
                        <span className="block mt-2 text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-primary-300">
                            Touch
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                        Have questions about buying, selling, or renting? Our expert team is ready 
                        to assist you every step of the way. Reach out today!
                    </p>

                    {/* Quick Contact Info */}
                    <div className="flex flex-wrap justify-center gap-6 mt-4">
                        <a href="tel:+15551234567" className="flex items-center gap-2 text-white hover:text-primary-300 transition">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>+1 (555) 123-4567</span>
                        </a>
                        <span className="text-gray-600 hidden sm:block">|</span>
                        <a href="mailto:hello@eliteestates.com" className="flex items-center gap-2 text-white hover:text-primary-300 transition">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>hello@eliteestates.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactHero