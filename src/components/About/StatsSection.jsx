import React from 'react'

const StatsSection = () => {
  const stats = [
    { value: '$5B+', label: 'Total Sales Volume', icon: '💰' },
    { value: '2,500+', label: 'Properties Sold', icon: '🏠' },
    { value: '15K+', label: 'Happy Clients', icon: '😊' },
    { value: '50+', label: 'Expert Agents', icon: '👔' },
    { value: '100+', label: 'Awards Won', icon: '🏆' },
    { value: '25+', label: 'Global Offices', icon: '🌍' },
  ];

  return (
    <section className="py-20 bg-primary-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(163,150,98,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(163,150,98,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Numbers That Speak
            <span className="text-primary-400"> Excellence</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl mb-3 transform group-hover:scale-125 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-primary-300 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default StatsSection
