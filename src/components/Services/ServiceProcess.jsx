import React from 'react'
import { Search, FileCheck, MessageSquare, Key, CheckCircle2 } from 'lucide-react'
import { process } from '../../data/content'
import SectionTitle from '../common/SectionTitle'

const ServiceProcess = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTitle title="Development Process" />
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
              From Vision to{' '}
              <span className="text-gold-500">Reality</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Our comprehensive development process ensures every project is
              executed with precision, transparency, and a commitment to
              excellence at every stage.
            </p>

            <div className="space-y-6">
              {process.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-gold-500/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-gold-500 transition-all duration-300">
                    <span className="font-display text-xl font-bold text-gold-600 group-hover:text-black-900 transition-colors">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-text-primary mb-1 group-hover:text-gold-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-text-secondary text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-black-900 rounded-3xl p-8 lg:p-12 shadow-gold-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gold-500/10 rounded-2xl p-6 border border-gold-500/20">
                  <div className="text-4xl mb-4">📋</div>
                  <div className="font-display text-3xl font-bold text-gradient mb-1">
                    100%
                  </div>
                  <div className="text-ivory-400 text-sm">
                    Client Satisfaction
                  </div>
                </div>
                <div className="bg-gold-500/10 rounded-2xl p-6 border border-gold-500/20">
                  <div className="text-4xl mb-4">🏗️</div>
                  <div className="font-display text-3xl font-bold text-gradient mb-1">
                    50+
                  </div>
                  <div className="text-ivory-400 text-sm">
                    Projects Delivered
                  </div>
                </div>
                <div className="bg-gold-500/10 rounded-2xl p-6 border border-gold-500/20">
                  <div className="text-4xl mb-4">🌱</div>
                  <div className="font-display text-3xl font-bold text-gradient mb-1">
                    100%
                  </div>
                  <div className="text-ivory-400 text-sm">
                    Eco-Compliant
                  </div>
                </div>
                <div className="bg-gold-500/10 rounded-2xl p-6 border border-gold-500/20">
                  <div className="text-4xl mb-4">⏱️</div>
                  <div className="font-display text-3xl font-bold text-gradient mb-1">
                    On-Time
                  </div>
                  <div className="text-ivory-400 text-sm">
                    Delivery Record
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-500/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold-500/30 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceProcess