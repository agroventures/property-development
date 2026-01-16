import React from 'react'
import SectionTitle from '../common/SectionTitle'
import { features } from '../../data/content'

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
                                        <svg
                                            className="w-3.5 h-3.5 text-black-900"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
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
                                    <svg
                                        className="w-16 h-16 text-gold-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="bg-ivory-200 rounded-3xl h-64 overflow-hidden shadow-gold">
                                <div className="w-full h-full bg-linear-to-br from-ivory-100 to-ivory-300 flex items-center justify-center">
                                    <svg
                                        className="w-16 h-16 text-gold-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4 pt-8">
                            <div className="bg-black-800 rounded-3xl h-64 overflow-hidden shadow-gold-lg">
                                <div className="w-full h-full bg-linear-to-br from-black-700 to-black-900 flex items-center justify-center">
                                    <svg
                                        className="w-16 h-16 text-gold-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="bg-gold-500 rounded-3xl h-48 overflow-hidden shadow-gold-lg">
                                <div className="w-full h-full bg-linear-gold flex items-center justify-center">
                                    <svg
                                        className="w-16 h-16 text-black-900"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        />
                                    </svg>
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
