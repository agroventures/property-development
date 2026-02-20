import React from 'react'
import { Shield, Award, Clock, Users, Zap, HeartHandshake, Check } from 'lucide-react'
import { services, whyChooseUs } from '../../data/content'
import SectionTitle from './SectionTitle'
import RevealSection from './RevealSection'

const WhyChooseUs = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-bg-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <RevealSection>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-50 border border-gold-200 rounded-full mb-6">
                <span className="w-2 h-2 bg-gold-500 rounded-full" />
                <span className="text-sm text-gold-700 font-semibold tracking-wide">
                  What We Offer
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-black-800 leading-tight">
                Comprehensive Real Estate{" "}
                <span className="text-gradient">Services</span>
              </h2>
              <p className="mt-5 text-lg text-text-secondary leading-relaxed">
                From finding your dream home to managing your investment
                portfolio, we offer a full suite of real estate services tailored
                to your needs.
              </p>
            </div>
          </RevealSection>

          {/* Grid */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <RevealSection key={i} delay={`delay-[${i * 75}ms]`}>
                <div className="group bg-ivory-100 rounded-3xl p-8 border border-border-muted/60 hover:border-gold-300 hover:shadow-gold transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-14 h-14 bg-gold-50 border border-gold-200 rounded-2xl flex items-center justify-center text-gold-600 group-hover:bg-gradient-gold group-hover:text-black-900 group-hover:border-gold-400 group-hover:shadow-gold transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-display font-bold text-black-800">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-text-secondary leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-gold-600 hover:text-gold-700 group-hover:gap-2 transition-all duration-200"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4"
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
                  </a>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

  )
}

export default WhyChooseUs