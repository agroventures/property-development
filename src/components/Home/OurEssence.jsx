import React from 'react'
import SectionTitle from '../common/SectionTitle'
import { features } from '../../data/content'
import { Check, Flame, Heart, Home, Sparkles } from 'lucide-react'

function OurEssence() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <SectionTitle title="Our Essence" />
                </div>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="font-display text-3xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
                            Timeless Principles for a{' '}
                            <span className="text-gold-500">Sustainable Future</span>
                        </h2>
                        <p className="text-text-secondary text-lg leading-relaxed mb-6">
                            In a fast-evolving world, we stand firm on timeless principles -
                            integrity, sustainability, and innovation. At Agroventures, real
                            estate is more than an investment; it's an opportunity to reconnect
                            with the land, live meaningfully, and create value responsibly.
                        </p>
                        <p className="text-text-secondary text-lg leading-relaxed mb-8">
                            Our projects span across Sri Lanka's most promising regions - from
                            serene countryside landscapes to vibrant urban growth zones -
                            offering a perfect balance between natural tranquility and modern
                            convenience.
                        </p>

                        {/* Features List */}
                        <div className="space-y-4">
                            {features.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-3 text-black" />
                                    </div>
                                    <span className="text-text-primary">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="bg-gold-100 rounded-3xl h-48 overflow-hidden shadow-gold">
                                <div className="w-full h-full bg-linear-to-br from-gold-200 to-gold-300 flex items-center justify-center">
                                    <Home className="w-16 h-16" />
                                </div>
                            </div>
                            <div className="bg-ivory-200 rounded-3xl h-64 overflow-hidden shadow-gold">
                                <div className="w-full h-full bg-linear-to-br from-ivory-100 to-ivory-300 flex items-center justify-center">
                                    <Sparkles className="w-16 h-16 text-gold-500" />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4 pt-8">
                            <div className="bg-black-800 rounded-3xl h-64 overflow-hidden shadow-gold-lg">
                                <div className="w-full h-full bg-linear-to-br from-black-700 to-black-900 flex items-center justify-center">
                                    <Flame className="w-16 h-16 text-gold-500" />
                                </div>
                            </div>
                            <div className="bg-gold-500 rounded-3xl h-48 overflow-hidden shadow-gold-lg">
                                <div className="w-full h-full bg-linear-gold flex items-center justify-center">
                                    <Heart className="w-16 h-16" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurEssence
