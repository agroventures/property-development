import React from 'react'
import PropertyCard from './PropertyCard';
import { ArrowRight } from 'lucide-react';

const FeaturedProperties = () => {
    
  const properties = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      location: 'Beverly Hills, CA',
      price: 2500000,
      beds: 5,
      baths: 4,
      area: 4500,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
      status: 'For Sale',
      featured: true,
    },
    {
      id: 2,
      title: 'Downtown Penthouse',
      location: 'Manhattan, NY',
      price: 8500,
      beds: 3,
      baths: 2,
      area: 2200,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1453&q=80',
      status: 'For Rent',
      featured: true,
    },
    {
      id: 3,
      title: 'Seaside Beach House',
      location: 'Malibu, CA',
      price: 3800000,
      beds: 4,
      baths: 3,
      area: 3200,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      status: 'For Sale',
      featured: false,
    },
    {
      id: 4,
      title: 'Contemporary Apartment',
      location: 'San Francisco, CA',
      price: 4200,
      beds: 2,
      baths: 2,
      area: 1400,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      status: 'For Rent',
      featured: false,
    },
    {
      id: 5,
      title: 'Mountain View Estate',
      location: 'Aspen, CO',
      price: 5200000,
      beds: 6,
      baths: 5,
      area: 6000,
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1492&q=80',
      status: 'For Sale',
      featured: true,
    },
    {
      id: 6,
      title: 'Urban Loft Studio',
      location: 'Chicago, IL',
      price: 2800,
      beds: 1,
      baths: 1,
      area: 900,
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      status: 'For Rent',
      featured: false,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-blue-600 font-semibold">Our Properties</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Featured Listings
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl">
              Discover our hand-picked selection of premium properties that offer exceptional value and lifestyle.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 mt-4 md:mt-0"
          >
            <span>View All Properties</span>
            <ArrowRight />
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
