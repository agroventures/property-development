import React, { useState } from 'react'
import {
  Home,
  Key,
  Building,
  TrendingUp,
  FileText,
  Palette,
  Calculator,
  Handshake,
  ArrowRight,
  Check,
  Image,
  MapPin
} from 'lucide-react'
import { services } from '../../data/content';


const ServicesList = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <>
    <section className="py-24 lg:py-32 bg-bg-main -mt-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-3xl p-8 shadow-gold hover:shadow-gold-lg transition-all duration-500 hover:-translate-y-2 cursor-pointer ${activeService === index ? 'ring-2 ring-gold-500' : ''
                }`}
              onClick={() => setActiveService(index)}
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center font-display text-xl font-bold text-black-900 shadow-gold">
                {service.id}
              </div>

              {/* Icon */}
              <div className="w-20 h-20 bg-gold-500/10 rounded-2xl flex items-center justify-center text-gold-600 mb-6 group-hover:bg-gold-500 group-hover:text-black-900 transition-all duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-text-primary mb-2 group-hover:text-gold-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gold-600 text-sm font-medium mb-4">
                {service.subtitle}
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn More */}
              <div className="flex items-center gap-2 text-gold-600 font-semibold">
                <span>Explore Service</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="services-detail" className="py-24 lg:py-32 bg-black-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                  activeService === index
                    ? 'bg-gradient-gold text-black-900 shadow-gold-lg'
                    : 'bg-black-800 text-ivory-300 border border-gold-500/30 hover:border-gold-500/50'
                }`}
              >
                <span
                  className={
                    activeService === index ? 'text-black-900' : 'text-gold-500'
                  }
                >
                  {service.icon}
                </span>
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Service Details */}
            <div className="animate-fade-in">
              <span className="inline-block text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4">
                Service {services[activeService].id} of 3
              </span>
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-text-inverse mb-4 leading-tight">
                {services[activeService].title}
              </h2>
              <p className="text-gold-400 text-xl font-display italic mb-6">
                {services[activeService].subtitle}
              </p>
              <p className="text-ivory-300 text-lg leading-relaxed mb-6">
                {services[activeService].description}
              </p>
              <p className="text-ivory-400 leading-relaxed mb-8">
                {services[activeService].details}
              </p>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {services[activeService].features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-black-800 rounded-xl p-4 border border-gold-500/10 hover:border-gold-500/30 transition-colors"
                  >
                    <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-black-900" />
                    </div>
                    <span className="text-ivory-200 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="group bg-gradient-gold text-black-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-gold-lg transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Discuss Your Project
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right - Featured Project */}
            <div className="animate-slide-up">
              <div className="bg-black-800 rounded-3xl overflow-hidden border border-gold-500/20">
                {/* Project Image Placeholder */}
                <div className="relative h-64 bg-linear-to-br from-gold-900/30 to-black-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 border-2 border-gold-500/30 rounded-full flex items-center justify-center">
                      <Image className="w-16 h-16" />
                    </div>
                  </div>
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold-500 text-black-900 px-4 py-1.5 rounded-full text-sm font-semibold">
                      {services[activeService].project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black-900/80 text-ivory-200 px-4 py-1.5 rounded-full text-sm">
                      Ongoing Project
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-center gap-2 text-gold-500 text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    {services[activeService].project.location}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-text-inverse mb-4">
                    {services[activeService].project.name}
                  </h3>
                  <p className="text-ivory-400 leading-relaxed mb-6">
                    {services[activeService].project.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {services[activeService].project.highlights.map(
                      (highlight, index) => (
                        <span
                          key={index}
                          className="bg-gold-500/10 border border-gold-500/30 text-gold-400 px-4 py-2 rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      )
                    )}
                  </div>

                  <button className="flex items-center gap-2 text-gold-500 font-semibold hover:text-gold-400 transition-colors">
                    View Project Details
                    <ArrowRight className="w-4 h-4 text-gold-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesList