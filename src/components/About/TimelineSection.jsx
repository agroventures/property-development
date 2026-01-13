import React from 'react'

const TimelineSection = () => {
  const milestones = [
    {
      year: '2008',
      title: 'The Beginning',
      description: 'Elite Estates founded in Beverly Hills with a vision to redefine luxury real estate.',
    },
    {
      year: '2012',
      title: 'East Coast Expansion',
      description: 'Opened our Manhattan office, establishing presence in New York\'s competitive market.',
    },
    {
      year: '2015',
      title: '$1 Billion Milestone',
      description: 'Achieved $1 billion in total sales volume, marking a significant growth milestone.',
    },
    {
      year: '2018',
      title: 'Global Network',
      description: 'Launched international partnerships, extending our reach to European and Asian markets.',
    },
    {
      year: '2021',
      title: 'Digital Innovation',
      description: 'Introduced virtual property tours and AI-powered matching technology.',
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as the #1 luxury real estate agency in North America.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center space-x-2 text-primary-600 font-semibold">
            <span className="w-12 h-0.5 bg-primary-500"></span>
            <span>Our Journey</span>
            <span className="w-12 h-0.5 bg-primary-500"></span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mt-4">
            Milestones & Achievements
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-primary-200 via-primary-500 to-primary-200 hidden lg:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`bg-primary-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow ${
                    index % 2 === 0 ? 'lg:ml-auto lg:mr-8' : 'lg:mr-auto lg:ml-8'
                  } max-w-md`}>
                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-primary-500 to-primary-600">
                      {milestone.year}
                    </span>
                    <h3 className="text-2xl font-bold text-primary-950 mt-2 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="w-6 h-6 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection
