import React from 'react'
import { Shield, Award, Clock, Users, Zap, HeartHandshake } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Trusted & Secure',
    description: 'All transactions are verified and secured with our trusted processes.'
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized as the best real estate service provider for 5 consecutive years.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer support to assist you whenever you need.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: '50+ certified professionals with decades of combined experience.'
  },
  {
    icon: Zap,
    title: 'Fast Process',
    description: 'Streamlined procedures to close deals faster than industry average.'
  },
  {
    icon: HeartHandshake,
    title: 'Client First',
    description: 'Your satisfaction is our priority with personalized service approach.'
  }
]

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-linear-to-br from-primary-900 via-primary-800 to-primary-950 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
              The Most Trusted Name in Real Estate
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              With over 15 years of experience, we've helped thousands of clients 
              find their perfect properties. Our commitment to excellence and 
              customer satisfaction sets us apart from the competition.
            </p>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-primary-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white/5 rounded-2xl">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">5K+</div>
                <div className="text-gray-300">Properties Sold</div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-300">Satisfaction Rate</div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300">Expert Agents</div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-gray-300 italic mb-4">
                "The best real estate experience I've ever had. Professional, 
                efficient, and truly customer-focused."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Client"
                  className="w-12 h-12 rounded-full border-2 border-primary-400"
                />
                <div>
                  <div className="text-white font-semibold">Sarah Johnson</div>
                  <div className="text-gray-400 text-sm">Happy Homeowner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs