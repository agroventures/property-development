import React, { useState } from 'react'
import {
  ArrowRight,
  Check,
} from 'lucide-react'
import { services } from '../../data/content';
import SectionTitle from '../common/SectionTitle';
import { useNavigate } from 'react-router-dom';


const ServicesList = () => {
  const [activeService, setActiveService] = useState(0);

  const navigate = useNavigate();

  return (
    <>
      <section className="py-24 lg:py-32 bg-bg-main relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionTitle title="Our Services" />
          </div>
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
                <div className="text-gold-600 font-semibold">
                  <a href="#services-detail" className='flex items-center gap-2 '>
                    <span>Explore Service</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services-detail" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${activeService === index
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
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full rounded-3xl"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="font-display text-3xl font-bold text-text-primary mb-6">
                {services[activeService].title} <br />
                <span className="text-gold-600">{services[activeService].subtitle}</span>
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                {services[activeService].description}
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-gold-500/10 rounded-full flex items-center justify-center mt-1 shrink-0">
                      <Check className="w-4 h-4 text-gold-600" />
                    </div>
                    <span className="text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button onClick={() => navigate('/contact')} className="inline-flex items-center gap-3 bg-gradient-gold text-black-900 px-8 py-4 rounded-full font-semibold hover:shadow-gold-lg transition-all duration-300">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesList