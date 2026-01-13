// components/Services/ServicesCTA.jsx
import React from 'react'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

const ServicesCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-r from-primary-600 to-primary-700 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Content */}
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-primary-100 text-lg mb-8">
                Contact us today to discuss your real estate needs. Our team of 
                experts is ready to help you achieve your property goals.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-primary-200 text-sm">Call Us</div>
                    <div className="font-semibold">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-primary-200 text-sm">Email Us</div>
                    <div className="font-semibold">hello@realestate.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-primary-200 text-sm">Visit Us</div>
                    <div className="font-semibold">123 Real Estate Blvd, NY 10001</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-all duration-300 shadow-lg">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right Content - Form */}
            <div className="bg-white p-8 lg:p-12 lg:rounded-l-3xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition bg-white">
                    <option value="">Select a service</option>
                    <option value="buying">Property Buying</option>
                    <option value="selling">Property Selling</option>
                    <option value="renting">Rentals</option>
                    <option value="management">Property Management</option>
                    <option value="consulting">Investment Consulting</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesCTA