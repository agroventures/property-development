import { Award, Globe, Heart, Home, Shield, Users } from 'lucide-react';
import React from 'react'
import { values } from '../../data/content';
import SectionTitle from '../common/SectionTitle';

const CoreValues = () => {
  return (
    <section className="py-24 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle title="Our Foundation" />
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-4">
            Core Values That Guide Us
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            These principles define who we are and how we conduct business every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white hover:bg-white/65 rounded-3xl p-8 transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 bg-white group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 text-primary-600 group-hover:text-gold-500 shadow-lg transition-all">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary-950 group-hover:text-gold-500 mb-3 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gold-500/90 leading-relaxed transition-colors">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default CoreValues
