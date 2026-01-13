// components/Services/ServiceProcess.jsx
import React from 'react'
import { Search, FileCheck, MessageSquare, Key, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    id: 1,
    icon: Search,
    title: 'Discovery',
    description: 'We understand your needs, preferences, and budget to find the perfect match.'
  },
  {
    id: 2,
    icon: MessageSquare,
    title: 'Consultation',
    description: 'Our experts provide personalized advice and property recommendations.'
  },
  {
    id: 3,
    icon: FileCheck,
    title: 'Documentation',
    description: 'We handle all paperwork, legal checks, and verification processes.'
  },
  {
    id: 4,
    icon: Key,
    title: 'Closing',
    description: 'Seamless transaction completion and handover of your new property.'
  }
]

const ServiceProcess = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Our Simple Process
          </h2>
          <p className="text-gray-600 text-lg">
            We've streamlined the real estate process to make it easy and stress-free for you.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-linear-to-r from-primary-200 via-primary-400 to-primary-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative text-center group">
                {/* Step Number */}
                <div className="relative z-10 mx-auto mb-6">
                  <div className="w-20 h-20 bg-linear-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-primary-500 rounded-full flex items-center justify-center font-bold text-primary-600 text-sm shadow-md">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 transform translate-x-1/2">
                    <CheckCircle2 className="w-8 h-8 text-primary-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-2 bg-linear-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServiceProcess