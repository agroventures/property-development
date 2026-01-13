import { Award } from 'lucide-react';
import React from 'react'

const AwardsSection = () => {
  const awards = [
    { year: '2024', title: 'Best Luxury Real Estate Agency', org: 'Real Estate Excellence Awards' },
    { year: '2023', title: 'Top Customer Service', org: 'National Association of Realtors' },
    { year: '2023', title: 'Innovation in Real Estate', org: 'PropTech Awards' },
    { year: '2022', title: 'Best Workplace', org: 'Forbes Real Estate' },
  ];

  const partners = [
    'Christie\'s',
    'Sotheby\'s',
    'Luxury Portfolio',
    'Forbes Global',
    'Mansion Global',
    'Robb Report',
  ];

  return (
    <section className="py-24 bg-primary-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Awards */}
          <div>
            <span className="inline-flex items-center space-x-2 text-primary-400 font-semibold mb-4">
              <span className="w-12 h-0.5 bg-primary-500"></span>
              <span>Recognition</span>
            </span>
            <h2 className="text-4xl font-bold text-white mb-8">
              Awards & Accolades
            </h2>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-primary-900/50 border border-primary-800/50 rounded-2xl p-6 hover:border-primary-500/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-primary-400 text-sm font-medium">{award.year}</span>
                      <h3 className="text-xl font-bold text-white mt-1">{award.title}</h3>
                      <p className="text-gray-400">{award.org}</p>
                    </div>
                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center text-primary-400">
                      <Award />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div>
            <span className="inline-flex items-center space-x-2 text-primary-400 font-semibold mb-4">
              <span className="w-12 h-0.5 bg-primary-500"></span>
              <span>Trusted By</span>
            </span>
            <h2 className="text-4xl font-bold text-white mb-8">
              Our Partners
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              We collaborate with the world's most prestigious brands and organizations in luxury real estate.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-primary-900/50 border border-primary-800/50 rounded-2xl p-6 text-center hover:border-primary-500/50 hover:bg-primary-900/80 transition-all cursor-pointer"
                >
                  <span className="text-white font-semibold">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default AwardsSection
