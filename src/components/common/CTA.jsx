import { ArrowRight } from 'lucide-react';
import React from 'react'
import { contactInfo, socialLinks } from '../../data/content';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 lg:py-25 bg-bg-main">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4">
                Connect With Us
              </span>
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-text-primary mb-6">
                Your Dream Property{' '}
                <span className="text-gradient">Awaits</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Explore investment-ready land, future-focused developments, and
                sustainable living concepts that redefine the essence of modern
                real estate in Sri Lanka.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigate('properties')} className="group bg-gradient-gold text-black-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-gold-lg hover:cursor-pointer transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  Explore Our Projects
                  <ArrowRight />
                </button>
                <button onClick={() => navigate('contact')} className="border-2 border-gold-500/50 text-gold-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-500/10 hover:cursor-pointer transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-black-800 rounded-3xl p-8 border border-gold-500/20">
              <h3 className="font-display text-xl font-bold text-text-inverse mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-black-700 transition-colors"
                  >
                    <div className="text-2xl">
                      <item.icon className="w-5 h-5 text-gold-500" />
                    </div>
                    <div>
                      <div className="text-ivory-400 text-sm">{item.title}</div>
                      <div className="text-text-inverse font-medium">
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-6 pt-6 border-t border-gold-500/20">
                {socialLinks.map(
                  (social, index) => (
                    <button
                      key={index}
                      className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-black-900 transition-all duration-300"
                    >
                      <a href={social.url}>
                        {social.icon}
                      </a>
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA
