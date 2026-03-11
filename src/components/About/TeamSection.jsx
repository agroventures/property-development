import { ArrowRight, Linkedin, Mail, Twitter, User } from 'lucide-react';
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
        {/* <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-primary-950">Our Team</h3>
          <p className="text-gray-600 mt-2">The experts driving our vision forward every day.</p>
        </div> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative overflow-hidden bg-linear-to-br from-ivory-200 to-gold-100">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                    className="w-full h-80 object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                ) : null}
                <div className="absolute inset-0 hidden items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gold-500/20 flex items-center justify-center">
                    <User size={64} className="text-gold-600" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-primary-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary-950 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div> */}

        <div className="flex flex-col lg:flex-row gap-8 items-stretch px-4">
          {/* COO Section */}
          <div className="w-full lg:w-1/2 flex">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col w-full">
              <div className="w-full">
                <img
                  src="/images/team/heshan.png"
                  alt="Heshan Nanayakkara"
                  className="h-72 md:h-96 w-full object-cover"
                />
              </div>
              <div className="w-full bg-[#333336] text-white p-8 md:p-10 flex flex-col justify-center grow">
                <div className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-6 self-start">
                  A Message from our COO
                </div>
                <blockquote className="text-md md:text-lg font-serif italic text-gray-300 mb-8 leading-relaxed">
                  “At Agroventures, our mission is to redefine land investment through operational excellence and unwavering integrity. We ensure every project reflects our commitment to sustainable growth.”
                </blockquote>
                <div>
                  <h4 className="text-xl font-bold text-white">Heshan Nanayakkara</h4>
                  <p className="text-primary-400 font-medium">Chief Operating Officer</p>
                </div>
              </div>
            </div>
          </div>

          {/* GM Section */}
          <div className="w-full lg:w-1/2 flex">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col w-full">
              {/* Image on Top */}
              <div className="w-full">
                <img
                  src="/images/team/prabhath.jpg"
                  alt="Prabhath Gamage"
                  className="h-72 md:h-96 w-full object-cover"
                />
              </div>
              {/* Content on Bottom */}
              <div className="w-full bg-[#333336] text-white p-8 md:p-10 flex flex-col justify-center grow">
                <div className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-6 self-start">
                  A Message from our GM
                </div>
                <blockquote className="text-sm md:text-base font-serif italic text-gray-300 mb-8 leading-relaxed">
                  "With over three decades of experience across the Real Estate, Finance, and Banking sectors, I am proud to lead a team dedicated to excellence, transparency, and value creation. I have 30 years of experience. through leading institutions including Finance and Guarantee, Seylan Merchant Bank, Ceylinco Prosperity, Merchant Bank of Sri Lanka, Araliya Lands, Assetline Holdings, and WAS Group has instilled in me a deep understanding of what makes a property investment truly secure and profitable.At Agroventures, my priority is simple: to ensure that every project we undertake is delivered on time, within regulatory standards, and to the highest quality. We believe that true value lies in the details. From land selection to the final finishing touches, I personally oversee our end-to-end site management to ensure sustainable design and superior construction.For our buyers, this translates to confidence. We manage risks meticulously and operate with total transparency, ensuring smooth handovers and fewer post-purchase issues. We are building properties that offer not just immediate satisfaction, but long-term investment security.I remain fully accountable to our stakeholders and Board of Directors, ensuring that we maintain profitability without compromising the integrity that our clients rely on. "
                </blockquote>
                <div>
                  <h4 className="text-xl font-bold text-white">Prabhath Gamage</h4>
                  <p className="text-primary-400 font-medium">General Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default TeamSection
