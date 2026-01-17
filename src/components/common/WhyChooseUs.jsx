import React from 'react'
import { Shield, Award, Clock, Users, Zap, HeartHandshake, Check } from 'lucide-react'
import { whyChooseUs } from '../../data/content'
import SectionTitle from './SectionTitle'

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionTitle title="Our Service" />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="bg-black-900 rounded-3xl p-12 shadow-gold-lg">
              <div className="grid grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="bg-black-800 rounded-2xl p-6 border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h4 className="font-display text-lg font-bold text-text-inverse mb-1">
                      {item.title}
                    </h4>
                    <p className="text-ivory-400 text-sm">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-500/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold-500/30 rounded-full blur-xl" />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
              Your Partner in Building{' '}
              <span className="text-gold-500">Lasting Value</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              At Agroventures Property Development, we combine decades of land
              management expertise with modern development practices to create
              communities that stand the test of time.
            </p>

            <div className="space-y-6">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-ivory-200 transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-gold-500 rounded-xl flex items-center justify-center shrink-0">
                    <Check className="w-4 text-black-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">
                      {item.title}
                    </h4>
                    <p className="text-text-secondary text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default WhyChooseUs