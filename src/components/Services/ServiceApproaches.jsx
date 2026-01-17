import React from 'react'
import { approaches } from '../../data/content'

export default function ServiceApproaches() {
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
