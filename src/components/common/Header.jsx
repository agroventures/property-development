import React, { useEffect, useState } from 'react';
import { navLinks } from '../../data/content';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-white backdrop-blur-md shadow-gold'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <Link to='/'>
                            <img
                                src="/logo.png"
                                alt="Logo"
                                className="h-12"
                            /></Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map(
                            (item) => (
                                <Link
                                    key={item.id}
                                    to={item.url}
                                    className={`text-sm ${isScrolled ? 'text-gold-950' : 'text-ivory-200'} hover:text-gold-500 transition-colors duration-300 tracking-wide`}
                                >
                                    {item.name}
                                </Link>
                            )
                        )}
                        {/* <button className="bg-gradient-gold text-black-900 px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-gold-lg transition-all duration-300 hover:scale-105">
                            Get Started
                        </button> */}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden text-ivory-200 p-2"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {mobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-black-800 rounded-2xl mb-4 p-6 animate-scale-in">
                        {navLinks.map(
                            (item) => (
                                <Link
                                    key={item.id}
                                    to={item.url}
                                    className="block py-3 text-gold-500 hover:text-white transition-colors border-b border-gold-900/30 last:border-0"
                                >
                                    {item.name}
                                </Link>
                            )
                        )}
                        {/* <button className="w-full mt-4 bg-gradient-gold text-black-900 px-6 py-3 rounded-full font-semibold">
                            Get Started
                        </button> */}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;