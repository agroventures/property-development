import { Award, Globe, Heart, Home, Shield, Users } from 'lucide-react';
import React from 'react'

const CoreValues = () => {
  const values = [
    {
      icon: <Shield />,
      title: 'Integrity',
      description: 'We operate with complete transparency and honesty in every interaction, building trust that lasts.',
    },
    {
      icon: <Award />,
      title: 'Excellence',
      description: 'We strive for perfection in everything we do, from property selection to client communication.',
    },
    {
      icon: <Heart />,
      title: 'Passion',
      description: 'Our genuine love for real estate drives us to go above and beyond for every client.',
    },
    {
      icon: <Users />,
      title: 'Collaboration',
      description: 'We work as a unified team, leveraging collective expertise to deliver exceptional results.',
    },
    {
      icon: <Globe />,
      title: 'Innovation',
      description: 'We embrace new technologies and approaches to stay ahead in the evolving real estate landscape.',
    },
    {
      icon: <Home />,
      title: 'Client Focus',
      description: 'Every decision we make is centered around what\'s best for our clients and their goals.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center space-x-2 text-primary-600 font-semibold">
            <span className="w-12 h-0.5 bg-primary-500"></span>
            <span>Our Foundation</span>
            <span className="w-12 h-0.5 bg-primary-500"></span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mt-4">
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
              className="group bg-primary-50 hover:bg-linear-to-br hover:from-primary-500 hover:to-primary-600 rounded-3xl p-8 transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 bg-white group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 text-primary-600 group-hover:text-white shadow-lg transition-all">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary-950 group-hover:text-white mb-3 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors">
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
