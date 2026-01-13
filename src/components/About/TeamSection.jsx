import { ArrowRight, Linkedin, Mail, Twitter } from 'lucide-react';
import React from 'react'

const TeamSection = () => {
  const team = [
    {
      name: 'Jonathan Sterling',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      bio: '20+ years in luxury real estate',
    },
    {
      name: 'Victoria Hayes',
      role: 'Chief Operating Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80',
      bio: 'Former VP at Christie\'s Real Estate',
    },
    {
      name: 'Marcus Chen',
      role: 'Director of Sales',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      bio: '$1B+ in career sales',
    },
    {
      name: 'Isabella Rodriguez',
      role: 'Head of Marketing',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=761&q=80',
      bio: 'Award-winning marketing strategist',
    },
    {
      name: 'David Thompson',
      role: 'Senior Property Advisor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      bio: 'Specializes in waterfront properties',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Client Relations Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      bio: '15+ years client experience',
    },
  ];

  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center space-x-2 text-primary-600 font-semibold">
            <span className="w-12 h-0.5 bg-primary-500"></span>
            <span>Meet The Team</span>
            <span className="w-12 h-0.5 bg-primary-500"></span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mt-4">
            Leadership That Inspires
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Our experienced team brings together decades of expertise in luxury real estate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <a href="#" className="w-10 h-10 bg-white/90 hover:bg-primary-500 rounded-full flex items-center justify-center text-primary-950 hover:text-white transition-colors">
                    <Linkedin />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/90 hover:bg-primary-500 rounded-full flex items-center justify-center text-primary-950 hover:text-white transition-colors">
                    <Twitter />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/90 hover:bg-primary-500 rounded-full flex items-center justify-center text-primary-950 hover:text-white transition-colors">
                    <Mail />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary-950 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Want to join our team of experts?</p>
          <a
            href="#"
            className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 group"
          >
            <span>View Career Opportunities</span>
            <span className="group-hover:translate-x-1 transition-transform">
              <ArrowRight />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};


export default TeamSection
