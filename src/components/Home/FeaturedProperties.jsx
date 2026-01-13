import React from 'react'
import PropertyCard from './PropertyCard';
import { ArrowRight } from 'lucide-react';
import { properties } from '../../data/properties';

const FeaturedProperties = () => {
  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <span className="inline-flex items-center space-x-2 text-primary-600 font-semibold">
              <span className="w-12 h-0.5 bg-primary-500"></span>
              <span>Featured Listings</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mt-4">
              Discover Exceptional
              <span className="block text-primary-600">Properties</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl text-lg">
              Hand-picked luxury properties that offer exceptional value, stunning design, and premium locations.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 mt-6 lg:mt-0 group"
          >
            <span>View All Properties</span>
            <span className="group-hover:translate-x-1 transition-transform">
              <ArrowRight />
            </span>
          </a>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties
