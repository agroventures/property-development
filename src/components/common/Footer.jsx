import { LocateIcon, Mail, Phone } from 'lucide-react';
import React from 'react'
import { navLinks } from '../../data/content';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-950/80 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.png" alt="Logo" className="h-30" />
            </div>
            <p className="mb-6 leading-relaxed">
              Your trusted partner in luxury real estate. We specialize in exceptional properties for discerning clients.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current rounded-sm opacity-60"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link to={link.url} className="hover:text-primary-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Property Types</h3>
            <ul className="space-y-4">
              {['Luxury Villas', 'Penthouses', 'Waterfront Homes', 'Country Estates', 'Commercial', 'Investment'].map((type) => (
                <li key={type}>
                  <a href="#" className="hover:text-primary-400 transition-colors">{type}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-primary-500 mt-1"><LocateIcon /></span>
                <span>123 Luxury Avenue<br />Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-primary-500"><Phone /></span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-primary-500"><Mail /></span>
                <span>hello@eliteestates.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Agro Ventures Property Development. All rights reserved. Developed by{" "}
            <a
              href="https://ventrax.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary-500 hover:text-primary-400 
                           underline underline-offset-4 transition-colors"
            >
              Ventrax.lk
            </a></p>
          <div className="flex space-x-8 mt-4 md:mt-0 text-sm">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
