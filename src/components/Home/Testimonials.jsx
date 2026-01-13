import { Star } from 'lucide-react';
import React from 'react'
import { testimonials } from '../../data/content';

const Testimonials = () => {
    return (
        <section className="py-24 bg-primary-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center justify-center space-x-2 text-primary-600 font-semibold">
                        <span className="w-12 h-0.5 bg-primary-500"></span>
                        <span>Client Stories</span>
                        <span className="w-12 h-0.5 bg-primary-500"></span>
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mt-4">
                        Trusted by Discerning
                        <span className="block text-primary-600">Clients Worldwide</span>
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-4 left-8">
                                <div className="w-12 h-12 bg-primary-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-gold">
                                    "
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex space-x-1 mb-6 mt-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">"{testimonial.content}"</p>

                            {/* Author */}
                            <div className="flex items-center pt-6 border-t border-gray-100">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full object-cover ring-4 ring-primary-100"
                                />
                                <div className="ml-4">
                                    <h4 className="font-bold text-primary-950 text-lg">{testimonial.name}</h4>
                                    <p className="text-primary-600">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials
