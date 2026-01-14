import React from 'react'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

const offices = [
    {
        city: 'New York',
        address: '123 Real Estate Boulevard, Manhattan, NY 10001',
        phone: '+1 (555) 123-4567',
        email: 'newyork@eliteestates.com',
        image: 'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        isHeadquarters: true
    },
    {
        city: 'Los Angeles',
        address: '456 Sunset Boulevard, Beverly Hills, CA 90210',
        phone: '+1 (555) 234-5678',
        email: 'losangeles@eliteestates.com',
        image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        isHeadquarters: false
    },
    {
        city: 'Miami',
        address: '789 Ocean Drive, Miami Beach, FL 33139',
        phone: '+1 (555) 345-6789',
        email: 'miami@eliteestates.com',
        image: 'https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        isHeadquarters: false
    },
    {
        city: 'Chicago',
        address: '321 Michigan Avenue, Chicago, IL 60601',
        phone: '+1 (555) 456-7890',
        email: 'chicago@eliteestates.com',
        image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        isHeadquarters: false
    }
]

const OfficeLocations = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                        Our Locations
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                        Visit Our Offices
                    </h2>
                    <p className="text-gray-600 text-lg">
                        With offices across major cities, we're always close by to serve you better.
                    </p>
                </div>

                {/* Offices Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offices.map((office, index) => (
                        <div 
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={office.image}
                                    alt={office.city}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-white">{office.city}</h3>
                                        {office.isHeadquarters && (
                                            <span className="px-2 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
                                                HQ
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-4 h-4 text-primary-500 mt-1 shrink-0" />
                                        <p className="text-gray-600 text-sm">{office.address}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-4 h-4 text-primary-500 shrink-0" />
                                        <a href={`tel:${office.phone}`} className="text-gray-600 text-sm hover:text-primary-600 transition">
                                            {office.phone}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-4 h-4 text-primary-500 shrink-0" />
                                        <a href={`mailto:${office.email}`} className="text-gray-600 text-sm hover:text-primary-600 transition truncate">
                                            {office.email}
                                        </a>
                                    </div>
                                </div>

                                <button className="mt-4 w-full inline-flex items-center justify-center gap-2 text-primary-600 font-medium py-2 rounded-lg hover:bg-primary-50 transition group/btn">
                                    Get Directions
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OfficeLocations