import { HamburgerIcon, X } from 'lucide-react';
import React, { useState } from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img src="/logo.png" alt="Logo" className="h-30" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-900 font-medium hover:text-blue-600 transition">Home</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition">Properties</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition">About</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition">Services</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-gray-600 hover:text-blue-600 font-medium transition">Sign In</button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition transform hover:scale-105">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                        {isOpen ? <X /> : <HamburgerIcon />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t">
                        <div className="flex flex-col space-y-4">
                            <a href="#" className="text-gray-900 font-medium">Home</a>
                            <a href="#" className="text-gray-600">Properties</a>
                            <a href="#" className="text-gray-600">About</a>
                            <a href="#" className="text-gray-600">Services</a>
                            <a href="#" className="text-gray-600">Contact</a>
                            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium w-full">
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header
