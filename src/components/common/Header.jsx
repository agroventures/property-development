import { Menu, X } from 'lucide-react'; // Note: 'Menu' is the standard Lucide icon name
import React, { useEffect, useState } from 'react';
import { navLinks } from '../../data/content';
import { Link, useLocation } from 'react-router-dom'; // 1. Import useLocation

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    // 2. Initialize location
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 3. Helper function to check if path is active
    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-lg' 
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <img src="/logo.png" alt="Logo" className="h-30" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((item) => {
                            const active = isActive(item.url); // Check state
                            return (
                                <Link
                                    key={item.id}
                                    to={item.url}
                                    className={`font-medium transition-colors duration-200 ${
                                        active 
                                            ? (scrolled ? 'text-primary-600' : 'text-white border-b-2 border-primary-500') 
                                            : (scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/80 hover:text-white')
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <button className={`font-medium transition ${
                            scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-300'
                        }`}>
                            Sign In
                        </button>
                        <button className="bg-linear-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-gold hover:shadow-gold-lg transform hover:-translate-y-0.5">
                            List Property
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden ${scrolled ? 'text-primary-950' : 'text-white'}`}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden py-4 bg-white rounded-2xl shadow-xl mt-2 animate-scale-in">
                        <div className="flex flex-col space-y-4 p-4">
                            {navLinks.map((item) => (
                                <Link 
                                    key={item.id} 
                                    to={item.url} 
                                    onClick={() => setIsOpen(false)}
                                    className={`font-medium py-2 transition-colors ${
                                        isActive(item.url) ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <hr className="border-gray-200" />
                            <button className="bg-linear-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-medium w-full">
                                List Property
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;