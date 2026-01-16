import { ArrowRight, Linkedin, Mail, Twitter } from 'lucide-react';
import React from 'react'
import { team } from '../../data/content';
import SectionTitle from '../common/SectionTitle';

const TeamSection = () => {
  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionTitle title="Our Leadership" />
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-4">
            Leadership That Inspires
          </h2>
        </div>

        {/* --- CEO Message Section --- */}
        <div className="mb-24 bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row items-center">
          <div className="w-full md:w-2/5">
            <img
              src="/images/team/ceo.JPG"
              alt="Nilanga Karunarathne"
              className="h-full object-cover"
            />
          </div>
          <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
              A Message from our CEO
            </div>
            <blockquote className="text-md md:text-lg font-serif italic text-primary-950 mb-8 leading-relaxed">
              “Every great journey begins with a single step. When we began this journey, it started with
              soil in our hands and a vision rooted deep in the earth. Our business was born from the land
              — through plantations that nurtured both crops and respect for nature. Over the years, we
              learned that true growth is sustainable, responsible, and deeply connected to the
              environment.
              Today, as we take our vision beyond plantations into property development, our purpose
              remains the same — to create communities that live in harmony with nature.
              We are not just building homes or structures; we are creating legacies that connect people,
              the environment, and the future. Through every land sale, every home, and every ecotourism project, we strive to shape a greener, more prosperous tomorrow.
              True success, I believe, comes when we serve with integrity and innovation while respecting
              our planet. Together, we are not just developing land — we are cultivating a sustainable
              future for generations to come.”
            </blockquote>
            <div>
              <h4 className="text-xl font-bold text-primary-950">Nilanga Karunarathne</h4>
              <p className="text-primary-600 font-medium">Founder & Chief Executive Officer</p>
            </div>
          </div>
        </div>

        {/* --- Team Grid --- */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-primary-950">Our Team</h3>
          <p className="text-gray-600 mt-2">The experts driving our vision forward every day.</p>
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
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/90 hover:bg-primary-500 rounded-full flex items-center justify-center text-primary-950 hover:text-white transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/90 hover:bg-primary-500 rounded-full flex items-center justify-center text-primary-950 hover:text-white transition-colors">
                    <Mail size={20} />
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
      </div>
    </section>
  );
};


export default TeamSection
