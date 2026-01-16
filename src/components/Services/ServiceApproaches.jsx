import React from 'react'

export default function ServiceApproaches() {
    const approaches = [
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        ),
        title: 'Market Research & Feasibility',
        description:
          'Comprehensive market research and feasibility analysis to ensure every project is positioned for success.',
      },
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
        title: 'Environmental Planning',
        description:
          'Environmentally sensitive land and infrastructure planning that preserves natural beauty.',
      },
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        ),
        title: 'Expert Partnerships',
        description:
          'Strong partnerships with leading architects, engineers, and sustainability consultants.',
      },
      {
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        ),
        title: 'Client-Focused Practices',
        description:
          'Transparent and client-focused development practices that prioritize your vision and investment.',
      },
    ];
    
    return (
        <section className="py-24 lg:py-32 bg-bg-main">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4">
                        Our Approach
                    </span>
                    <h2 className="font-display text-3xl lg:text-5xl font-bold text-text-primary mb-6">
                        How We Deliver <span className="text-gold-500">Excellence</span>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Our systematic approach ensures every project meets the highest
                        standards of quality, sustainability, and client satisfaction.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {approaches.map((approach, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl p-8 shadow-gold hover:shadow-gold-lg transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Step Number */}
                            <div className="absolute -top-3 -left-3 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center font-bold text-black-900 text-sm">
                                {index + 1}
                            </div>

                            {/* Icon */}
                            <div className="w-16 h-16 bg-gold-500/10 rounded-2xl flex items-center justify-center text-gold-600 mb-6 group-hover:bg-gold-500 group-hover:text-black-900 transition-all duration-300">
                                {approach.icon}
                            </div>

                            {/* Content */}
                            <h3 className="font-display text-xl font-bold text-text-primary mb-3">
                                {approach.title}
                            </h3>
                            <p className="text-text-secondary leading-relaxed">
                                {approach.description}
                            </p>

                            {/* Connector Line (except last) */}
                            {index < approaches.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gold-300" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
