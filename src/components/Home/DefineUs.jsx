import React from 'react';
import { Globe, Eye, Leaf, Award } from 'lucide-react';
import { pillars } from '../../data/content';
import SectionTitle from '../common/SectionTitle';

export default function DefineUs() {
    return (
        <section className="py-24 lg:py-32 bg-bg-main overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <SectionTitle title="What Define Us" />
                </div>
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
                    <h2 className="font-display text-4xl lg:text-6xl font-bold text-text-primary mb-8 leading-tight">
                        The Pillars of Our <span className="text-gold-500">Excellence</span>
                    </h2>
                    <div className="w-24 h-px bg-gold-500/30 mx-auto mb-8"></div>
                    <p className="text-text-secondary text-lg font-light leading-relaxed">
                        Four fundamental principles guide every project we undertake, ensuring
                        exceptional value for our clients and communities through a blend of 
                        tradition and innovation.
                    </p>
                </div>

                {/* Pillars Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-black-800 border border-gold-900/30 rounded-3xl p-10 hover:border-gold-500/50 transition-all duration-700 hover:-translate-y-3 shadow-2xl"
                        >
                            {/* Hover Background Glow */}
                            <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-700"></div>

                            {/* Icon Container */}
                            <div className="relative w-16 h-16 bg-gold-500/10 rounded-2xl flex items-center justify-center text-gold-500 mb-8 group-hover:bg-gradient-gold group-hover:text-black-900 transition-all duration-500 shadow-inner">
                                {item.icon}
                            </div>

                            {/* Text Content */}
                            <h3 className="relative font-display text-2xl font-bold text-ivory-50 mb-4 group-hover:text-gold-400 transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="relative text-ivory-400 leading-relaxed font-light text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}