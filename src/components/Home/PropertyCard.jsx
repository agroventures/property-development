import { Bath, Bed, Heart, LineChart, LocateIcon } from 'lucide-react';
import React, { useState } from 'react'

const PropertyCard = ({ property }) => {
    const [liked, setLiked] = useState(false);

    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            {/* Image */}
            <div className="relative overflow-hidden">
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                        {property.status}
                    </span>
                    {property.featured && (
                        <span className="px-3 py-1 bg-amber-500 text-white text-sm font-medium rounded-full">
                            Featured
                        </span>
                    )}
                </div>
                <button
                    onClick={() => setLiked(!liked)}
                    className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition ${liked ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600 hover:bg-white'
                        }`}
                >
                    <Heart />
                </button>
                <div className="absolute bottom-4 left-4">
                    <span className="text-2xl font-bold text-white drop-shadow-lg">
                        ${property.price.toLocaleString()}
                        {property.status === 'For Rent' && <span className="text-base font-normal">/mo</span>}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                    {property.title}
                </h3>
                <div className="flex items-center text-gray-500 mb-4">
                    <LocateIcon />
                    <span className="ml-1">{property.location}</span>
                </div>

                {/* Features */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-gray-600">
                        <Bed />
                        <span className="ml-1 text-sm">{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <Bath />
                        <span className="ml-1 text-sm">{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <LineChart />
                        <span className="ml-1 text-sm">{property.area} sqft</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard
