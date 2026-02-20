import { ArrowRight, Image, MapPin } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({ property }) => {

  const navigate = useNavigate();

  return (
    <div
      className="group bg-white rounded-3xl overflow-hidden shadow-gold hover:shadow-gold-lg transition-all duration-500 hover:-translate-y-2 border border-ivory-200"
    >
      {/* Image Placeholder */}
      <div className="relative h-64 bg-linear-to-br from-ivory-200 via-ivory-100 to-gold-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={property.logo}
            alt={property.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-gold-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            {property.status}
          </span>
        </div>

        {/* Tag */}
        <div className="absolute top-4 right-4">
          <span className="bg-black-900/80 backdrop-blur-md text-ivory-100 px-4 py-1.5 rounded-full text-xs font-medium border border-gold-500/20">
            {property.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-center gap-2 text-gold-600 text-sm mb-3 font-medium">
          <MapPin className="w-4 h-4" />
          {property.location}
        </div>

        {/* Using your font-display for luxury feel */}
        <h3 className="font-display text-2xl font-bold text-black-800 mb-3 group-hover:text-gold-600 transition-colors duration-300">
          {property.title}
        </h3>

        <p className="text-text-secondary leading-relaxed mb-8 text-sm line-clamp-2">
          {property.description}
        </p>

        <button onClick={() => navigate(`/properties/${property.slug}`)} className="flex items-center gap-2 text-gold-600 font-bold text-sm uppercase tracking-widest group/btn border-b border-transparent hover:border-gold-500 transition-all pb-1">
          Explore Detail
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;