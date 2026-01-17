import React from 'react'
import { serviceSummary } from '../../data/content'
import SectionTitle from '../common/SectionTitle'

function ServicesSummary() {
    return (
        <section className="py-24 lg:py-32 bg-bg-main relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(45deg, rgba(163, 150, 98, 0.3) 25%, transparent 25%), 
                               linear-gradient(-45deg, rgba(163, 150, 98, 0.3) 25%, transparent 25%), 
                               linear-gradient(45deg, transparent 75%, rgba(163, 150, 98, 0.3) 75%), 
                               linear-gradient(-45deg, transparent 75%, rgba(163, 150, 98, 0.3) 75%)`,
                        backgroundSize: '60px 60px',
                        backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <SectionTitle title="Complete Solutions" />
                    <h2 className="font-display text-3xl lg:text-5xl font-bold text-text-primary mb-6">
                        End-to-End{' '}
                        <span className="text-gradient">Property Development</span>
                    </h2>
                    <p className="text-ivory-400 text-lg">
                        From land acquisition to project completion, we handle every aspect
                        of property development with expertise and dedication.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceSummary.map((item, index) => (
                        <div
                            key={index}
                            className="bg-black-800 border border-gold-500/20 rounded-2xl p-6 hover:border-gold-500/50 hover:bg-black-800/80 transition-all duration-300 group"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="font-display text-xl font-bold text-text-inverse mb-2">
                                {item.title}
                            </h3>
                            <p className="text-ivory-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSummary
