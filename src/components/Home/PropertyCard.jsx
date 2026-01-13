import { Bath, Bed, Heart, Route, LocateIcon } from 'lucide-react';
import React, { useState } from 'react'

const PropertyCard = ({ property }) => {
    const [liked, setLiked] = useState(false);

    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Tags */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-4 py-1.5 bg-primary-500 text-white text-sm font-medium rounded-full shadow-gold">
            {property.status}
          </span>
          {property.featured && (
            <span className="px-4 py-1.5 bg-primary-950 text-primary-300 text-sm font-medium rounded-full">
              Featured
            </span>
          )}
        </div>
        
        {/* Price */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <span className="text-3xl font-bold text-white drop-shadow-lg">
            ${property.price.toLocaleString()}
            {property.status === 'For Rent' && <span className="text-lg font-normal">/mo</span>}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-950 mb-2 group-hover:text-primary-600 transition-colors">
          {property.title}
        </h3>
        <div className="flex items-center text-gray-500 mb-4">
          <LocateIcon />
          <span className="ml-2">{property.location}</span>
        </div>

        {/* Features */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-1 text-gray-600">
            <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
              <Bed />
            </div>
            <span className="text-sm font-medium">{property.beds} Beds</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
              <Bath />
            </div>
            <span className="text-sm font-medium">{property.baths} Baths</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
              <Route />
            </div>
            <span className="text-sm font-medium">{property.area} sqft</span>
          </div>
        </div>
      </div>
    </div>
    );
};

export default PropertyCard
