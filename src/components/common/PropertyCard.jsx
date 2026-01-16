import React from 'react';

const PropertyCard = ({ property, onExplore }) => {
  return (
    <div
      className="group bg-white rounded-3xl overflow-hidden shadow-gold hover:shadow-gold-lg transition-all duration-500 hover:-translate-y-2 border border-ivory-200"
    >
      {/* Image Placeholder */}
      <div className="relative h-64 bg-linear-to-br from-ivory-200 via-ivory-100 to-gold-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 border-2 border-gold-500/30 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gold-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
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
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {property.location}
        </div>

        {/* Using your font-display for luxury feel */}
        <h3 className="font-display text-2xl font-bold text-black-800 mb-3 group-hover:text-gold-600 transition-colors duration-300">
          {property.title}
        </h3>

        <p className="text-text-secondary leading-relaxed mb-8 text-sm line-clamp-2">
          {property.description}
        </p>

        <button onClick={onExplore} className="flex items-center gap-2 text-gold-600 font-bold text-sm uppercase tracking-widest group/btn border-b border-transparent hover:border-gold-500 transition-all pb-1">
          Explore Detail
          <svg
            className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;