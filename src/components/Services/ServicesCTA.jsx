import React from 'react'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const ServicesCTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-bg-main">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-black-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-600/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

          <div className="relative text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/30 rounded-full px-6 py-3 mb-8">
              <svg
                className="w-5 h-5 text-gold-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span className="text-gold-400 font-semibold tracking-wide">
                Start Your Project
              </span>
            </div>

            <h2 className="font-display text-3xl lg:text-5xl font-bold text-text-inverse mb-6">
              Ready to Transform Your{' '}
              <span className="text-gradient">Vision into Reality?</span>
            </h2>
            <p className="text-ivory-300 text-xl leading-relaxed mb-10">
              Whether you're looking to develop land, build your dream home, or
              create an eco-tourism destination, our team is ready to bring your
              vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-gold text-black-900 px-10 py-4 rounded-full font-semibold text-lg hover:shadow-gold-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Schedule a Consultation
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
              </button>
              <button className="border-2 border-gold-500/50 text-gold-400 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gold-500/10 transition-all duration-300">
                View Our Projects
              </button>
            </div>

            {/* Contact Options */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-gold-500/20">
              <div className="flex items-center gap-3 text-ivory-400">
                <svg
                  className="w-5 h-5 text-gold-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+94 11 234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-ivory-400">
                <svg
                  className="w-5 h-5 text-gold-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@agroventures.lk</span>
              </div>
              <div className="flex items-center gap-3 text-ivory-400">
                <svg
                  className="w-5 h-5 text-gold-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesCTA