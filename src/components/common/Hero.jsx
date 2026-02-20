import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Hero = ({ page, pageTitle, img, imgAlt, badgeText, title, highlightedText, description }) => {
    const navigate = useNavigate();
    const [searchLocation, setSearchLocation] = useState('');
    const [searchType, setSearchType] = useState('all');

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (searchLocation) params.append('location', searchLocation);
        if (searchType !== 'all') params.append('type', searchType);
        navigate(`/properties?${params.toString()}`);
    };
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <img
                    src={img}
                    alt={imgAlt}
                    className="w-full h-full object-cover scale-105 animate-scale-in"
                />
                {/* Luxury Overlay: Darker gradient for better text readability */}
                <div className="absolute inset-0 bg-linear-to-r from-black-900/60 via-black-900/50 to-black-900/40"></div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center">
                <div className="max-w-4xl flex flex-col items-center animate-slide-up">

                    {/* Breadcrumb for Sub-pages */}
                    {page !== 'home' && (
                        <nav className="flex items-center space-x-3 text-sm mb-8 tracking-widest uppercase">
                            <a href="/" className="text-ivory-400 hover:text-gold-400 transition-colors">Home</a>
                            <span className="text-gold-900">/</span>
                            <span className="text-gold-500 font-semibold">{pageTitle}</span>
                        </nav>
                    )}

                    {/* Animated Badge */}
                    <div className="inline-flex items-center space-x-2 px-5 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-10 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
                        </span>
                        <span className="text-gold-200 text-xs font-bold tracking-[0.2em] uppercase">{badgeText}</span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-ivory-50 leading-[1.1] mb-8">
                        {title}
                        <span className="block mt-2 text-gradient">
                            {highlightedText}
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-2xl text-ivory-200/80 mb-12 max-w-2xl leading-relaxed font-sans font-light">
                        {description}
                    </p>
                </div>

                {
                    page === 'home' && (
                        <>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/properties"
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-black-900 font-bold rounded-2xl shadow-gold hover:shadow-gold-lg hover:-translate-y-1 transition-all duration-300"
                                >
                                    Explore Properties
                                    <svg
                                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </>
                    )
                }
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2">
                <span className="text-[10px] text-gold-500 font-bold uppercase tracking-[0.3em]">Discover</span>
                <div className="w-px h-12 bg-linear-to-b from-gold-500 to-transparent"></div>
            </div>
        </section>
    );
};

export default Hero;