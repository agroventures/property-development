import React from 'react'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const ServicesCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-r from-primary-600 to-primary-700 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-8 lg:p-16 flex flex-col items-center text-center">
            {/* Header Section */}
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-primary-100 text-lg mb-12">
                Contact us today to discuss your real estate needs. Our team of
                experts is ready to help you achieve your property goals.
              </p>
            </div>

            {/* Contact Info - Aligned in a responsive grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full max-w-4xl">
              {/* Phone */}
              <div className="flex flex-col items-center gap-3 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-primary-200 text-xs uppercase tracking-wider font-medium">Call Us</span>
                  <span className="font-semibold text-lg">+1 (555) 123-4567</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center gap-3 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-primary-200 text-xs uppercase tracking-wider font-medium">Email Us</span>
                  <span className="font-semibold text-lg">hello@realestate.com</span>
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col items-center gap-3 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-primary-200 text-xs uppercase tracking-wider font-medium">Visit Us</span>
                  <span className="font-semibold text-lg">123 Real Estate Blvd, NY</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link to='/contact'>
              <button className="group inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-full font-bold hover:bg-primary-50 transition-all duration-300 shadow-xl hover:scale-105 active:scale-95">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesCTA